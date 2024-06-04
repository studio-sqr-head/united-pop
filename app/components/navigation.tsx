"use client";

import { useParams, usePathname } from "next/navigation";

import { Button, Link } from "@/app/components/button";

export const DesktopNav = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8 align-center items-center">
        {NAV_ITEMS.map(({ id, path, title, component }) => {
          if (component === "button") {
            return (
              <li key={id}>
                <Button
                  disabled={pathname.includes(path)}
                  scroll={false}
                  variant="secondary"
                  as="a"
                  href={{
                    pathname: path,
                    query: { lang },
                  }}
                >
                  {title}
                </Button>
              </li>
            );
          } else {
            return (
              <li key={id}>
                <Link
                  size="large"
                  disabled={pathname.includes(path)}
                  scroll={false}
                  href={{
                    pathname: path,
                    query: { lang },
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

const NAV_ITEMS = [
  {
    id: "about",
    title: "About",
    path: "/about",
    component: "link",
  },

  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    component: "button",
  },
];
