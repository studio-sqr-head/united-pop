"use client";

import { ArrowDownIcon } from "@heroicons/react/20/solid";

import { H1, Subheading } from "@/app/components/typography";
import { Button } from "@/app/components/button";

export const HomePageHeroCta = ({
  courseCount,
  bachelorCourseCount,
  diplomaCourseCount,
}: {
  courseCount: number;
  bachelorCourseCount: number;
  diplomaCourseCount: number;
}) => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="flex flex-col justify-between items-start gap-8 max-w-4xl mx-auto py-16 px-8 md:px-0">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <H1>Create your future today</H1>
        <Subheading variant="primary" as="div">
          We offer full-time and part-time programs in a variety of fields.
          Including {bachelorCourseCount} bachelor's and {diplomaCourseCount}{" "}
          diploma programs
        </Subheading>
      </div>

      <div className="flex gap-4 md:flex-row flex-col w-full md:w-auto">
        <Button
          variant="primary"
          size={"large"}
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Enroll Now
        </Button>

        <Button
          variant="secondary"
          size={"large"}
          onClick={scrollToCourses}
          icon={<ArrowDownIcon className="h-6 w-6 stroke-current stroke-1" />}
          iconPosition="right"
        >
          Browse Catalog ({courseCount} courses)
        </Button>
      </div>
    </div>
  );
};
