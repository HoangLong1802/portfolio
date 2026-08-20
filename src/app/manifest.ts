import type { MetadataRoute } from "next";
import { getPortfolioContent } from "@/lib/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  const content = getPortfolioContent("en");

  return {
    name: content.site.title,
    short_name: content.profile.name,
    description: content.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#091413",
    theme_color: "#091413",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
