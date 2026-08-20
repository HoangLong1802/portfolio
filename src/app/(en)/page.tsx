import { LocalizedPortfolioPage } from "@/components/portfolio/localized-portfolio-page";
import { createHomeMetadata } from "@/lib/seo";

export const metadata = createHomeMetadata("en");

export default function HomePage() {
  return <LocalizedPortfolioPage />;
}
