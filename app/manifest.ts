import { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: "United Pop",
    short_name: "United Pop",
    description: "United Pop",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ff5e00",
    start_url: "/portfolio",
    orientation: "portrait",
    id: "com.unitedpop",
    lang: "en",
    display_override: ["standalone"],
  };
}
