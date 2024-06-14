import NextLink from "next/link"

import { AssetStoryblok } from "@/types"

export const Logo = ({ logo }: { logo: AssetStoryblok }) => (
  <NextLink
    href={{ pathname: "/" }}
    className="focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer hover:opacity-80 active:opacity-100 transition-opacity duration-300"
  >
    {/* eslint-disable-next-line @next/next/no-img-element -- No need for next/image here */}
    <img
      src={logo?.filename}
      alt={logo.alt ?? "United Pop Logo"}
      className="h-12 md:h-16 lg:h-18 w-auto"
    />

    <span className="sr-only">United Pop Logo</span>
  </NextLink>
)
