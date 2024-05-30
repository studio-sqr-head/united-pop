import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { env } from "@/env";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { StoryblokProvider } from "@/app/components/story-blok";
import { Main } from "@/app/components/structure";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "United Pop",
  description: "United Pop is an academy for music and media.",
  keywords: ["music", "media", "academy"],
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: env.NEXT_PUBLIC_BASE_URL,
    title: "United Pop",
    description: "United Pop is an academy for music and media.",
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: "United Pop",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: "United Pop",
      },
    ],
    title: "United Pop",
    description: "United Pop is an academy for music and media.",
  },
};

storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
});
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
