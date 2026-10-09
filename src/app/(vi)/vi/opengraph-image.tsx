import { ImageResponse } from "next/og";
import { PortfolioSocialImage } from "@/components/portfolio/portfolio-social-image";
import { getPortfolioContent } from "@/lib/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Truong Hoang Long | Data Analyst Portfolio";

export default function VietnameseOpenGraphImage() {
  return new ImageResponse(<PortfolioSocialImage content={getPortfolioContent("vi")} />, size);
}
