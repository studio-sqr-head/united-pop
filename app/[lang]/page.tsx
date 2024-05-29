"use client";

import NextImage from "next/image";
import React, { useState } from "react";
import NextLink from "next/link";
import { useParams, useRouter } from "next/navigation";

import { HeroSection, Container, Divider } from "@/app/components/layout";
import { HomePageHeroCta } from "@/app/[lang]/components/home-page-hero-cta";
import { H3, H5, Paragraph, Subheading } from "@/app/components/typography";
import { MetaDataChip } from "@/app/components/chip";
import { Button } from "@/app/components/button";

import { CATEGORIES, Category, DUMMY_COURSES } from "@/constants";

export default function Home() {
  return (
    <>
      <HeroSection
        src="/hero-image.jpeg"
        alt="Hero Image"
        height={"full"}
        imageClassName="filter brightness-75"
      >
        <HomePageHeroCta />
      </HeroSection>
      <CourseSection />
    </>
  );
}

const CourseListFilter = ({
  activeCategory,
  handleCategoryChange,
}: {
  activeCategory: Category;
  handleCategoryChange: (category: Category) => void;
}) => {
  return (
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
  );
};

const CourseListItem = ({
  course,
  handleCourseClick,
  lang,
}: {
  course: {
    title: string;
    image: string;
    metadata: { key: string; value: string }[];
    startDate: string;
    description: string;
    slug: string;
    category: Category;
  };
  handleCourseClick: (slug: string) => void;
  lang: string;
}) => {
  return (
    <div
      className="flex w-full gap-4 h-full flex-col md:flex-row cursor-pointer hover:opacity-80"
      onClick={() => {
        handleCourseClick(course.slug);
      }}
    >
      <div className="relative w-full h-36 md:w-96 md:h-64 overflow-hidden aspect-square">
        <NextImage
          src={course.image}
          alt={course.title}
          className="object-cover object-center"
          fill
          sizes="24rem, 32rem, 48rem, 64rem"
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-between w-full items-start mb-1">
            <H3>{course.title}</H3>
            <div className="flex gap-2">
              {course?.metadata.map((meta, index) => (
                <MetaDataChip key={index} size="small">
                  {meta.key}
                </MetaDataChip>
              ))}
            </div>
          </div>

          <div className="flex gap-2 items-center mb-3">
            <Paragraph variant="secondary" className="text-sm">
              Next Course Starts:
            </Paragraph>
            <MetaDataChip size="small">{course.startDate}</MetaDataChip>
          </div>

          <Paragraph className="grow flex-1 h-full">
            {course.description}
          </Paragraph>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="secondary"
            size="small"
            as="a"
            href={{
              pathname: course?.slug,
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

const CourseList = ({
  lang,
  activeCategory,
  handleCourseClick,
  derivedCourses,
}: {
  lang: "en" | "nl";
  activeCategory: Category;
  handleCourseClick: (slug: string) => void;
  derivedCourses: {
    title: string;
    image: string;
    metadata: { key: string; value: string }[];
    startDate: string;
    description: string;
    slug: string;
    category: Category;
  }[];
}) => {
  if (!derivedCourses) {
    return null;
  }
  return (
    <div className="flex flex-col" id="courses">
      <div className="flex flex-col gap-10 justify-center items-center h-full">
        <div className="flex gap-2 justify-between w-full">
          <H5>
            {DUMMY_COURSES?.find((course) => course.category === activeCategory)
              ?.title || "All"}{" "}
            Courses
          </H5>
          <Paragraph variant="secondary">
            {derivedCourses.length} courses available
          </Paragraph>
        </div>
        {derivedCourses?.map((course, index) => (
          <span key={index} className="w-full h-full">
            <CourseListItem
              course={course}
              handleCourseClick={handleCourseClick}
              lang={lang}
            />
            {index < derivedCourses.length - 1 && (
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
      <Subheading>What's your area of interest?</Subheading>
    </div>
  );
};

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.All);
  const router = useRouter();
  const { lang } = useParams() as { lang: "en" | "nl" };
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const handleCourseClick = async (slug: string) => {
    await router.push(`/${lang}/course/${slug}`);
  };

  const derivedCourses = DUMMY_COURSES.filter(
    (course) =>
      activeCategory === Category.All || course.category === activeCategory
  );
  return (
    <Container as="section" className="py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <CourseSectionHeader />
        <CourseListFilter
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <CourseList
          lang={lang ?? "en"}
          activeCategory={activeCategory}
          handleCourseClick={handleCourseClick}
          derivedCourses={derivedCourses}
        />
      </div>
    </Container>
  );
};
