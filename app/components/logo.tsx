import NextLink from "next/link";

export const Logo = () => (
  <NextLink
    href={{ pathname: "/" }}
    className="focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer hover:opacity-80 active:opacity-100 transition-opacity duration-300"
  >
    {/* eslint-disable-next-line @next/next/no-img-element -- No need for next/image here */}
    <img src="/logo.svg" alt="Logo" className="h-10 md:h-12 w-auto" />
  </NextLink>
);
