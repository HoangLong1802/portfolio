// Source: https://github.com/HoangLong1802/support-ops-analytics#key-findings
// Synthetic ticket snapshots; these proportions describe different denominators.
export const supportAnalyticsSignal = {
  sourceUrl: "https://github.com/HoangLong1802/support-ops-analytics#key-findings",
  technicalBreaches: 1760,
  resolutionBreaches: 3514,
  series: [
    { id: "ticket-share", value: 29.49, label: { en: "Technical ticket share", vi: "Tỷ trọng ticket technical" } },
    { id: "breach-share", value: 50.09, label: { en: "Share of resolution SLA breaches", vi: "Tỷ trọng resolution SLA breach" } },
  ],
  caption: { en: "Ticket share vs. resolution SLA breaches", vi: "Tỷ trọng ticket và resolution SLA breach" },
  note: {
    en: "Technical cases account for {technical} of {total} resolution breaches. Synthetic data; association does not establish causation.",
    vi: "Nhóm technical chiếm {technical} trên {total} breach resolution. Dữ liệu tổng hợp; mối liên hệ không chứng minh nguyên nhân.",
  },
} as const;
