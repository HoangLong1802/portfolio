import { ImageResponse } from "next/og";
import { getPortfolioContent } from "@/lib/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function VietnameseOpenGraphImage() {
  const content = getPortfolioContent("vi");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f17",
          color: "#f4f7fb",
          padding: 64,
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#6bd8e6", fontSize: 30 }}>
          <div style={{ width: 52, height: 52, borderRadius: 8, background: "#6bd8e6" }} />
          {content.home.hero.eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 72, lineHeight: 1.04, maxWidth: 960 }}>{content.home.hero.title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#c7c1b8", maxWidth: 920 }}>
            {content.home.hero.summary}
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, color: "#f0bf65", fontSize: 28 }}>
          <span>Application Support</span>
          <span>Automation</span>
          <span>Full-Stack Learning</span>
        </div>
      </div>
    ),
    size,
  );
}
