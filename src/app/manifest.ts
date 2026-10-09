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
    background_color: "#FDF6ED",
    theme_color: "#778873",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
