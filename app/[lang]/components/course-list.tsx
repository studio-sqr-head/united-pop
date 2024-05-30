"use client";

import NextImage from "next/image";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ISbStoryData } from "@storyblok/react";

import { Container, Divider } from "@/app/components/structure";
import { H3, H5, Paragraph, Subheading } from "@/app/components/typography";
import { MetaDataChip } from "@/app/components/chip";
import { Button } from "@/app/components/button";
import { CourseStoryblok } from "@/types";
import {
  CATEGORIES,
  CategoryEnum,
  TYPES,
  TypeEnum,
  START_DATES,
} from "@/constants";
import { getClosestDateToToday } from "@/utils";

const CourseListFilter = ({
  activeCategory,
  activeType,
  handleCategoryChange,
  handleTypeChange,
}: {
  activeCategory: CategoryEnum;
  activeType: TypeEnum;
  handleCategoryChange: (category: CategoryEnum) => void;
  handleTypeChange: (type: TypeEnum) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        {CATEGORIES.map((category) => (
          <div key={category.id}>
            <MetaDataChip
              onClick={() => handleCategoryChange(category.id)}
              size="medium"
              active={activeCategory === category?.id}
            >
              {category?.title}
            </MetaDataChip>
          </div>
        ))}
      </div>

      <Divider />

      <div className="flex flex-wrap gap-4">
        {TYPES.map((type) => {
          return (
            <div key={type.id}>
              <MetaDataChip
                variant="secondary"
                onClick={() => handleTypeChange(type?.id)}
                size="medium"
                active={activeType === type?.id}
              >
                {type?.title}
              </MetaDataChip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CourseStartDates = () => {
  const closestDate = getClosestDateToToday(START_DATES);
  return (
    <div className="flex gap-2 items-center mb-3">
      <Paragraph variant="secondary" className="text-sm">
        Next Course Starts:
      </Paragraph>

      <MetaDataChip variant="secondary" size="small">
        {closestDate.toDateString()}
      </MetaDataChip>
    </div>
  );
};

const CourseListItem = ({
  course,
  handleCourseClick,
  lang,
}: {
  course: ISbStoryData<CourseStoryblok>;
  handleCourseClick: (slug: string) => void;
  lang: string;
}) => {
  const { content, slug } = course;
  const { title, description, image, type, fulltime, parttime } = content ?? {};
  return (
    <div
      className="flex w-full gap-4 h-full flex-col md:flex-row cursor-pointer hover:opacity-80"
      onClick={() => {
        handleCourseClick(slug);
      }}
    >
      {image?.filename != null && (
        <div className="relative w-full md:w-128 h-36 md:h-64 overflow-hidden aspect-w-16 aspect-h-9">
          <NextImage
            src={image?.filename}
            alt={image?.alt ?? title ?? "Course Image"}
            className="object-cover object-center"
            fill
            sizes="32rem, 48rem, 64rem"
          />
        </div>
      )}

      <div className="flex flex-col w-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-between w-full items-start mb-1">
            <H3>{title}</H3>
            <div className="flex gap-2">
              {fulltime && <MetaDataChip size="small">Full-time</MetaDataChip>}
              {parttime && <MetaDataChip size="small">Part-time</MetaDataChip>}
              <MetaDataChip size="small">
                {TYPES.find((t) => t.id === type)?.title}
              </MetaDataChip>
            </div>
          </div>
          <CourseStartDates />

          <Paragraph className="grow flex-1 h-full">{description}</Paragraph>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="secondary"
            size="small"
            as="a"
            href={{
              pathname: slug,
              query: { lang },
            }}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

const CourseListHeader = ({
  activeCategory,
  activeType,
}: {
  activeCategory: CategoryEnum;
  activeType: TypeEnum;
}) => {
  const activeCategoryTitle = CATEGORIES.find(
    (c) => c.id === activeCategory
  )?.title;
  const activeTypeTitle = TYPES.find((t) => t.id === activeType)?.title;

  if (activeCategory === CategoryEnum.ALL && activeType === TypeEnum.All) {
    return <H5>All Courses</H5>;
  }

  return (
    <H5>
      {activeCategoryTitle} ({activeTypeTitle}) Courses
    </H5>
  );
};

const CourseList = ({
  lang,
  activeCategory,
  handleCourseClick,
  filteredCourses,
  activeType,
}: {
  lang: "en" | "nl";
  activeCategory: CategoryEnum;
  activeType: TypeEnum;
  handleCourseClick: (slug: string) => void;
  filteredCourses: ISbStoryData<CourseStoryblok>[];
}) => {
  if (filteredCourses == null) {
    return (
      <div className="flex justify-center items-center">No courses found</div>
    );
  }
  return (
    <div className="flex flex-col" id="courses">
      <div className="flex flex-col gap-10 justify-center items-center h-full">
        <div className="flex gap-2 justify-between w-full">
          <CourseListHeader
            activeCategory={activeCategory}
            activeType={activeType}
          />
          <Paragraph variant="secondary">
            {filteredCourses.length === 1
              ? `${filteredCourses.length} course`
              : `${filteredCourses.length} courses`}
          </Paragraph>
        </div>
        {filteredCourses?.map((course, index) => (
          <span key={index} className="w-full h-full">
            <CourseListItem
              course={course}
              handleCourseClick={handleCourseClick}
              lang={lang}
            />
            {index < filteredCourses.length - 1 && (
              <div className="w-full mt-8">
                <Divider />
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

const CourseSectionHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <H3>Our Courses</H3>
      <Subheading>What&apos;s your area of interest?</Subheading>
    </div>
  );
};

export const CourseSection = ({
  courses,
}: {
  courses: ISbStoryData<CourseStoryblok>[];
}) => {
  const router = useRouter();
  const { lang } = useParams() as { lang: "en" | "nl" };

  const [activeCategory, setActiveCategory] = useState<CategoryEnum>(
    CategoryEnum.ALL
  );
  const [activeType, setActiveType] = useState<TypeEnum>(TypeEnum.All);

  const handleCategoryChange = (category: CategoryEnum) => {
    setActiveCategory(category);
  };
  const handleTypeChange = (type: TypeEnum) => {
    setActiveType(type);
  };

  const handleCourseClick = async (slug: string) => {
    await router.push(`/${lang}/course/${slug}`);
  };

  const filteredCoursesOnCategory = courses.filter((course) => {
    return (
      activeCategory === CategoryEnum.ALL ||
      course.content.category === activeCategory
    );
  });

  const filteredCourses = filteredCoursesOnCategory.filter((course) => {
    return activeType === TypeEnum.All || course.content.type === activeType;
  });

  return (
    <Container as="section" className="py-8 max-w-5xl min-h-300">
      <div className="flex flex-col gap-8">
        <CourseSectionHeader />
        <CourseListFilter
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
          activeType={activeType}
          handleTypeChange={handleTypeChange}
        />
        <CourseList
          lang={lang ?? "en"}
          activeCategory={activeCategory}
          handleCourseClick={handleCourseClick}
          filteredCourses={filteredCourses}
          activeType={activeType}
        />
      </div>
    </Container>
  );
};
