import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { getPortfolioContent } from "@/lib/portfolio";
import { createHomeMetadata } from "@/lib/seo";

export const metadata = createHomeMetadata("en");

export default function HomePage() {
  const content = getPortfolioContent("en");

  return <PortfolioPage content={content} />;
}
