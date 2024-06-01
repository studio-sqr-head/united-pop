"use client";

import { useDetectMobileBreakpoint } from "@/hooks";
import { Button } from "@/app/components/button";
import { H1, Subheading } from "@/app/components/typography";

export const HomePageHeroCta = () => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isMobile = useDetectMobileBreakpoint();
  return (
    <div className="flex flex-col justify-between items-start gap-8 max-w-4xl mx-auto py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2">
        <H1>Create your future today</H1>
        <Subheading variant="secondary">
          Choose from a variety of courses and diplomas to kickstart your career
        </Subheading>
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          size={isMobile ? "medium" : "large"}
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Enroll Now
        </Button>

        <Button
          variant="secondary"
          size={isMobile ? "medium" : "large"}
          onClick={scrollToCourses}
        >
          Browse Diplomas
        </Button>
      </div>
    </div>
  );
};
