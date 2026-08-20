import { LocalizedPortfolioPage } from "@/components/portfolio/localized-portfolio-page";
import { createHomeMetadata } from "@/lib/seo";

export const metadata = createHomeMetadata("vi");

export default function VietnameseHomePage() {
  return <LocalizedPortfolioPage />;
}
