"use client";

import { useParams, usePathname } from "next/navigation";

import { Button } from "@/app/components/button";

export const DesktopNav = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8 align-center items-center">
        {NAV_ITEMS.map(({ id, path, title }) => (
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
        ))}
      </ul>
    </nav>
  );
};

const NAV_ITEMS = [
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    component: "button",
  },
];
