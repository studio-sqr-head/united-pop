import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { StoryblokProvider } from "@/app/components/story-blok";

const inter = Inter({ subsets: ["latin"] });

const Main = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export const metadata: Metadata = {
  title: "United Pop",
  description: "United Pop is an academy for music and media.",
  keywords: ["music", "media", "academy"],
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://unitedpop.com",
    title: "United Pop",
    description: "United Pop is an academy for music and media.",
    images: [
      {
        url: "https://unitedpop.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "United Pop",
      },
    ],
  },
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { lang: "en" | "nl" };
    contact: ReactNode;
  }>
) {
  const { children, params } = props;

  return (
    <StoryblokProvider>
      <html
        lang={params.lang}
        className={`${inter.className} bg-black text-primary`}
      >
        <body>
          <Header lang={params.lang} />
          <Main>{children}</Main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
