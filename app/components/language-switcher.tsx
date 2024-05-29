"use client";

import NextLink from "next/link";
import clsx from "clsx";
import { Route } from "next";
import { usePathname } from "next/navigation";

import { languages } from "@/i18n.config";

export const LanguageSwitcher = ({ lang }: { lang: "en" | "nl" }) => {
  const pathname = usePathname();
  return (
    <ul className="flex rounded bg-gray-800">
      {languages.map((language, key) => {
        const href = replaceLocaleInPathname(pathname, language.id);
        const isActive = lang === language.id;
        return (
          <NextLink href={href} key={language.id}>
            <li
              className={clsx(
                "cursor-pointer",
                "transition-colors",
                "duration-200",
                "py-2",
                "px-4",
                "ease-in-out",
                "text-sm",
                "text-md",
                `${key === 0 ? "rounded-l" : ""} ${
                  key === languages.length - 1 ? "rounded-r" : ""
                }`,
                !isActive && "text-gray-500 hover:bg-gray-800 hover:text-white",
                isActive && `text-gray-100 bg-gray-700`
              )}
            >
              {language.title}
            </li>
          </NextLink>
        );
      })}
    </ul>
  );
};

const replaceLocaleInPathname = (pathname: string, locale: string): Route => {
  const languageCodes = languages.map((lang) => lang.id);
  return pathname.replace(
    new RegExp(`^/(${languageCodes.join("|")})`),
    `/${locale}`
  ) as Route;
};
