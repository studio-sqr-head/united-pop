import React, { ReactNode } from "react"
import Image from "next/image"
import NextLink, { LinkProps } from "next/link"
import clsx from "clsx"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { UrlObject } from "url"

import { Link } from "@/app/components/button"

export const CardMedia = ({
  image,
  title,
  size = "small",
  className,
  overlay,
}: {
  image: string
  title: string
  size?: "small" | "medium" | "large"
  className?: string
  overlay?: ReactNode
}) => {
  const imageSizes = {
    small: "h-64",
    medium: "h-96",
    large: "h-80",
  }
  const imageContainerClasses =
    "w-full mb-2 relative rounded overflow-hidden aspect-w-16 aspect-h-9 border border-gray-900 border-opacity-50"
  const imageStyleClasses = "object-cover object-center rounded z-0"
  const imageContainer = clsx(
    imageContainerClasses,
    imageSizes[size],
    className
  )
  return (
    <div className={imageContainer}>
      <Image
        src={image}
        alt={title}
        className={imageStyleClasses}
        layout="fill"
      />

      {overlay != null && (
        <div className="absolute bg-transparent z-10 w-full h-full top-0 right-0">
          <div className="flex justify-end items-end p-2">{overlay}</div>
        </div>
      )}
    </div>
  )
}

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col justify-between items-start gap-1 mb-1 full-w">
    {children}
  </div>
)

export const CardFooter = <T extends string>({
  href,
}: {
  href: LinkProps<UrlObject | string>["href"]
}) => (
  <Link
    size="small"
    href={href}
    variant="secondary"
    icon={<ChevronRightIcon className="h-4 w-4" />}
    iconPosition="right"
  >
    Learn More
  </Link>
)

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-2 cursor-pointer hover:opacity-80 justify-start items-start">
    {children}
  </div>
)

export const CardActionArea = <T extends string>({
  href,
  children,
}: {
  href: LinkProps<UrlObject | string>["href"]
  children: ReactNode
}) => (
  <NextLink href={href} className="w-full">
    {children}
  </NextLink>
)
