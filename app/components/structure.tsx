import React, { createElement, ReactNode } from "react"
import Image from "next/image"
import clsx from "clsx"

export const Container = ({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "article" | "main" | "header" | "footer"
}) => {
  const base = "container mx-auto px-8"
  const containerClassNames = clsx(base, className)
  return createElement(as, { className: containerClassNames }, children)
}

export const Divider = () => (
  <hr className="border-t border-gray-700 border-opacity-50" />
)

export const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>
}

export const HeroSection = ({
  height = "hero",
  src,
  alt,
  children,
  imageClassName,
  sectionClassName,
}: {
  height?: "hero" | "banner" | "largeBanner"
  src?: string
  alt: string
  children?: React.ReactNode
  imageClassName?: string
  sectionClassName?: string
}) => {
  const heightClass = {
    banner: "h-[300px] md:h-[500px]",
    largeBanner: "h-[400px] md:h-[600px]",
    hero: "h-[500px] md:h-[100vh]",
  }

  return (
    <section
      className={`relative ${heightClass[height]} overflow-hidden z-0 aspect-auto ${sectionClassName}`}
    >
      <Image
        src={src ?? "/fallback-hero.jpeg"}
        fill
        alt={alt}
        priority
        placeholder="blur"
        blurDataURL={src}
        sizes="100vw, (min-width: 640px) 640px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px"
        className={clsx("object-cover object-center", imageClassName)}
      />

      {children}
    </section>
  )
}
