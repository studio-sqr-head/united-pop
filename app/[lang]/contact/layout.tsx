import { Metadata } from "next"
import { getContact } from "@/api/page"

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" }
}): Promise<Metadata> {
  const { lang } = params
  const { contactPageContent } = await getContact({ lang })
  const { metaTitle, metaDescription, metaImage } = contactPageContent.content
  return {
    title: metaTitle,
    description: metaDescription,
    twitter: {
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaImage?.alt ?? metaTitle,
        },
      ],
      title: metaTitle,
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: metaImage?.filename,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage?.filename ?? "/favicon.ico",
          width: 800,
          height: 600,
          alt: metaImage?.alt ?? metaDescription,
        },
      ],
    },
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
