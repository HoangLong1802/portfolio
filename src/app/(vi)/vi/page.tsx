import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { getPortfolioContent } from "@/lib/portfolio";
import { createHomeMetadata } from "@/lib/seo";

export const metadata = createHomeMetadata("vi");

export default function VietnameseHomePage() {
  const content = getPortfolioContent("vi");

  return <PortfolioPage content={content} />;
}
