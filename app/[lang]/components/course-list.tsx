"use client"

import NextImage from "next/image"
import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ISbStoryData } from "@storyblok/react"

import { formatDate, getClosestFutureDateToToday } from "@/utils"
import { Container } from "@/app/components/structure"
import { H3, H5, H6, Paragraph, Subheading } from "@/app/components/typography"
import { MetaDataChip } from "@/app/components/chip"
import { Button } from "@/app/components/button"
import { CourseStoryblok } from "@/types"
import { CATEGORIES, CategoryEnum, TYPES, START_DATES } from "@/constants"
import { CourseStartDateChip } from "@/app/[lang]/components/course-start-date-chip"

const CourseListFilter = ({
  activeCategory,
  courses,
  handleCategoryChange,
}: {
  activeCategory: CategoryEnum
  courses?: ISbStoryData<CourseStoryblok>[]
  handleCategoryChange: (category: CategoryEnum) => void
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
              <span className="text-ellipsis max-w-24 md:max-w-full w-full text-center overflow-hidden">
                {category?.title}{" "}
              </span>
            </MetaDataChip>
          </div>
        ))}
      </div>
    </div>
  )
}

const CourseListItem = ({
  course,
  handleCourseClick,
  lang,
}: {
  course: ISbStoryData<CourseStoryblok>
  handleCourseClick: (slug: string) => void
  lang: string
}) => {
  const { content, slug } = course
  const { title, description, image, type, fulltime, parttime } = content ?? {}
  const closestStartDate = getClosestFutureDateToToday(START_DATES)
  return (
    <div
      className="flex w-full gap-4 h-full flex-col md:flex-row cursor-pointer hover:opacity-80"
      onClick={() => {
        handleCourseClick(slug)
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

      <div className="flex flex-col w-full md:gap-2 gap-4">
        <div className="flex flex-col h-full gap-1">
          <div className="flex flex-col-reverse lg:flex-row justify-between w-full lg:items-center mb-1 md:gap-0 gap-4">
            <H3>{title}</H3>
            <div className="flex gap-2 flex mb-3 lg:mb-0">
              {fulltime && <MetaDataChip>Full-time</MetaDataChip>}
              {parttime && <MetaDataChip>Part-time</MetaDataChip>}
              <MetaDataChip>
                {TYPES.find((t) => t.id === type)?.title}
              </MetaDataChip>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-3">
            <Paragraph variant="secondary">Next Course Starts:</Paragraph>

            <CourseStartDateChip
              size="small"
              date={formatDate({ date: closestStartDate, lang: "en" })}
            />
          </div>

          <Paragraph className="grow flex-1 h-full">{description}</Paragraph>
        </div>

        <div className="flex gap-2 mt-auto items-center justify-between">
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
  )
}

const CourseListHeader = ({
  activeCategory,
}: {
  activeCategory: CategoryEnum
}) => {
  const activeCategoryTitle = CATEGORIES.find(
    (c) => c.id === activeCategory
  )?.title

  return <H5>{activeCategoryTitle ?? "All"} Courses</H5>
}

const CourseList = ({
  lang,
  activeCategory,
  handleCourseClick,
  filteredCourses,
}: {
  lang: "en" | "nl"
  activeCategory: CategoryEnum
  handleCourseClick: (slug: string) => void
  filteredCourses: ISbStoryData<CourseStoryblok>[]
}) => {
  if (filteredCourses == null || filteredCourses.length === 0) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-full">
        <H6>No courses found</H6>
        <Paragraph variant="secondary">
          Please try a different category or check back later
        </Paragraph>
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12 justify-center items-center h-full">
        <div className="flex gap-2 justify-between w-full">
          <CourseListHeader activeCategory={activeCategory} />
          <Paragraph variant="secondary" className="whitespace-nowrap">
            {filteredCourses.length === 1
              ? `${filteredCourses.length} course`
              : `${filteredCourses.length} courses`}
          </Paragraph>
        </div>
        {filteredCourses?.map((course, index) => (
          <CourseListItem
            key={index}
            course={course}
            handleCourseClick={handleCourseClick}
            lang={lang}
          />
        ))}
      </div>
    </div>
  )
}

const CourseSectionHeader = ({
  courseSectionTitle = "Our Courses",
  courseSectionSubtitle = "Choose from a variety of courses to suit your needs",
}: {
  courseSectionTitle?: string
  courseSectionSubtitle?: string
}) => {
  return (
    <div className="flex flex-col gap-2">
      <H3>{courseSectionTitle}</H3>
      <Subheading>{courseSectionSubtitle}</Subheading>
    </div>
  )
}

export const CourseSection = ({
  courses,
  courseSectionTitle,
  courseSectionSubtitle,
}: {
  courses: ISbStoryData<CourseStoryblok>[]
  courseSectionTitle?: string
  courseSectionSubtitle?: string
}) => {
  const router = useRouter()
  const { lang } = useParams() as { lang: "en" | "nl" }

  const [activeCategory, setActiveCategory] = useState<CategoryEnum>(
    CategoryEnum.ALL
  )

  const handleCategoryChange = (category: CategoryEnum) => {
    setActiveCategory(category)
  }

  const handleCourseClick = async (slug: string) => {
    await router.push(`/${lang}/course/${slug}`)
  }

  const filteredCoursesOnCategory = courses.filter((course) => {
    return (
      activeCategory === CategoryEnum.ALL ||
      course.content.category === activeCategory
    )
  })

  return (
    <div className="bg-gradient-to-b from-slate to-black" id="courses">
      <Container as="section" className="py-8 md:py-16 min-h-300">
        <div className="flex flex-col gap-8">
          <CourseSectionHeader
            courseSectionTitle={courseSectionTitle}
            courseSectionSubtitle={courseSectionSubtitle}
          />

          <CourseListFilter
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
            courses={courses}
          />
          <CourseList
            lang={lang ?? "en"}
            activeCategory={activeCategory}
            handleCourseClick={handleCourseClick}
            filteredCourses={filteredCoursesOnCategory}
          />
        </div>
      </Container>
    </div>
  )
}
