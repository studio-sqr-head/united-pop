import type { Metadata, Viewport } from "next"
import { Open_Sans } from "next/font/google"

import "./globals.css"
import { env } from "@/env"
import { Footer } from "@/app/components/footer"
import { Header } from "@/app/components/header"
import { Main } from "@/app/components/structure"
import { getGeneralContent } from "@/api/general"

export const openSans = Open_Sans({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  height: "device-height",
}

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" }
}): Promise<Metadata> {
  const { generalContent } = await getGeneralContent()
  const { metaDataName, metaDataDescription, opengraphImage } =
    generalContent.content
  const lang = params.lang
  return {
    title: metaDataName,
    description: metaDataDescription,
    keywords: ["music", "media", "academy"],
    twitter: {
      images: [
        {
          url: opengraphImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaDataName,
        },
      ],
      title: metaDataName,
      description: metaDataDescription,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${lang}`,
      title: metaDataName,
      description: metaDataDescription,
      images: [
        {
          url: opengraphImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: `${metaDataName} - ${metaDataDescription}`,
        },
      ],
    },
  }
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
    params: { lang: "en" | "nl" }
  }>
) {
  const { generalContent } = await getGeneralContent()
  const {
    tiktokUrl,
    instagramUrl,
    linkedInUrl,
    youtubeUrl,
    logo,
    name,
    street,
    postalCode,
    city,
  } = generalContent.content

  console.log(generalContent)
  const { children, params } = props

  return (
    <html
      lang={params.lang}
      className={`${openSans.className} bg-black text-primary`}
    >
      <body className="relative">
        <Header lang={params.lang} logo={logo} />
        <Main>{children}</Main>
        <Footer
          address={{
            name,
            street,
            postalCode,
            city,
          }}
          tiktokUrl={tiktokUrl}
          instagramUrl={instagramUrl}
          linkedInUrl={linkedInUrl}
          youtubeUrl={youtubeUrl}
        />
      </body>
    </html>
  )
}
