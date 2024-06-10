import { MetadataRoute } from "next"
import { getGeneralContent } from "@/api/general"

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { generalContent } = await getGeneralContent()
  const {
    androidChrome192x192,
    androidChrome512x512,
    appleTouchIcon,
    favicon32x32,
    favicon16x16,
    metaDataName,
    metaDataDescription,
    metaDataShortName,
  } = generalContent.content
  return {
    name: metaDataName,
    short_name: metaDataShortName,
    description: metaDataDescription,
    display: "standalone",
    categories: ["education", "business", "media", "design"],
    background_color: "#000000",
    theme_color: "#ff5e00",
    start_url: `/`,
    orientation: "portrait",
    id: "com.unitedpop",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "favicon",
      },
      {
        src: androidChrome192x192?.filename ?? "/favicon.ico",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: androidChrome512x512?.filename ?? "/favicon.ico",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: appleTouchIcon?.filename ?? "/favicon.ico",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: favicon16x16?.filename ?? "/favicon.ico",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: favicon32x32?.filename ?? "/favicon.ico",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    lang: "en",
    display_override: ["standalone"],
  }
}
