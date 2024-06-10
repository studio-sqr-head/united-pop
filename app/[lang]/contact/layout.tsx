import { Metadata } from "next"
import { getContact } from "@/api/page"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl"; slug: string }
}): Promise<Metadata> {
  const { lang } = params
  const { contactPageContent } = await getContact({ lang })
  const { heading, hero, subheading } = contactPageContent.content
  return {
    title: `${heading} | United Pop`,
    description: subheading,
    twitter: {
      images: [
        {
          url: hero?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: hero?.alt ?? heading ?? "About Image",
        },
      ],
      title: heading,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: hero?.filename,
      title: heading,
      description: subheading,
      images: [
        {
          url: hero?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: hero?.alt ?? subheading ?? "About Image",
        },
      ],
    },
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
