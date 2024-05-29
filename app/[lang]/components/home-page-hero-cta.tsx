"use client";

import { Button } from "@/app/components/button";
import { H1 } from "@/app/components/typography";

export const HomePageHeroCta = () => {
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-between items-start gap-8 max-w-3xl mx-auto py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2">
        <H1>Start your Career in Media & Music</H1>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <Button
          variant="primary"
          size="large"
          as="a"
          href={{ pathname: "/contact", query: { lang: "en" } }}
        >
          Enroll Now
        </Button>

        <Button variant="secondary" size="large" onClick={scrollToCourses}>
          Browse Diplomas
        </Button>
      </div>
    </div>
  );
};
