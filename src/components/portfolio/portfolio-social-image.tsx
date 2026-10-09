import type { PortfolioContent } from "@/types/portfolio";

export function PortfolioSocialImage({ content }: { readonly content: PortfolioContent }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FDF6ED", color: "#252925", padding: 60, fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 8, background: "#778873", color: "#FDF6ED", fontSize: 28 }}>HL</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 28 }}>{content.profile.name}</span>
          <span style={{ color: "#4A5B47", fontSize: 22 }}>{content.profile.role}</span>
        </div>
      </div>
      <div style={{ display: "flex", maxWidth: 1040, fontSize: 64, lineHeight: 1.1 }}>{content.home.hero.title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "2px solid #DCCFC0", paddingTop: 24 }}>
        <span style={{ fontSize: 28, color: "#4A5B47" }}>SQL · Python · Excel</span>
        <span style={{ fontSize: 22 }}>Operations Analytics</span>
      </div>
    </div>
  );
}
