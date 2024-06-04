"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { DesktopNav } from "@/app/components/navigation";
import { Container } from "@/app/components/structure";
import { Logo } from "@/app/components/logo";

export const Header = ({ lang }: { lang: "en" | "nl" }) => {
  const [blur, setBlur] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = clsx(
    "z-30 py-4 text-white w-full top-0 left-0 right-0 fixed flex items-center justify-between transition-all duration-300",
    blur ? "bg-slate bg-opacity-70" : "bg-transparent"
  );

  return (
    <header className={headerClasses}>
      <Container className={`flex items-center justify-between max-w-7xl`}>
        <Logo />

        <div className="flex items-center gap-8">
          <DesktopNav />
        </div>
      </Container>
    </header>
  );
};
