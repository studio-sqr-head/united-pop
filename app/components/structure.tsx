import React, { createElement, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

export const Container = ({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}) => {
  const base = "container mx-auto px-8";
  const containerClassNames = clsx(base, className);
  return createElement(as, { className: containerClassNames }, children);
};

export const Divider = () => (
  <hr className="border-t border-gray-700 border-opacity-50" />
);

export const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export const HeroSection = ({
  height = "full",
  src,
  alt,
  children,
  imageClassName,
}: {
  height?: "full" | "banner";
  src: string;
  alt: string;
  children?: React.ReactNode;
  imageClassName?: string;
}) => {
  const heightClass = {
    full: "h-[600px] md:h-[800px]",
    banner: "h-[400px]",
  };

  return (
    <section
      className={`relative ${heightClass[height]} overflow-hidden z-0 aspect-auto`}
    >
      <Image
        src={src}
        fill
        alt={alt}
        priority
        placeholder="blur"
        blurDataURL={src}
        sizes="100vw, (min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px"
        className={clsx("object-cover object-center", imageClassName)}
      />

      {children && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center">
          {children}
        </div>
      )}
    </section>
  );
};
