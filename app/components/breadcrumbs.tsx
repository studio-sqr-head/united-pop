"use client";

import { Route } from "next";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@/app/components/button";
import { Paragraph } from "@/app/components/typography";

const formatPathToTitle = (path: string) => {
  const langRegex = /^(en|nl)$/;
  if (langRegex.test(path)) return "Home";
  return path
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
};

const getPathSegments = ({
  pathname,
  nameOfSegmentsToRemove, // // Not all paths are relevant to the breadcrumb. Remove the course segment from the path
}: {
  pathname: string;
  nameOfSegmentsToRemove: string[];
}) => {
  return pathname
    .split("/")
    .filter(Boolean)
    .filter((p) => !nameOfSegmentsToRemove.includes(p));
};

// This component is dependent on url structure.
export const BreadCrumbs = () => {
  const pathname = usePathname();
  const path = getPathSegments({
    pathname,
    nameOfSegmentsToRemove: ["course"],
  });

  return (
    <div className="flex gap-2 align-center items-center">
      {path.map((segment, index) => {
        // Include the language segment in the URL
        const href = `/${path.slice(0, index + 1).join("/")}` as Route;

        return (
          <span key={index} className="flex gap-1 items-center">
            {index === path.length - 1 ? (
              <Paragraph variant="secondary">
                {formatPathToTitle(segment)}
              </Paragraph>
            ) : (
              <Link href={href}>{formatPathToTitle(segment)}</Link>
            )}
            {index < path.length - 1 && (
              <ChevronRightIcon className="h-5 w-5 text-secondary stroke-current stroke-1" />
            )}
          </span>
        );
      })}
    </div>
  );
};
