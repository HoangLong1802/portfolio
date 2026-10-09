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
    en: "Technical cases account for {technical} of {total} resolution breaches. Within Technical, 1,760 of 4,352 SLA-eligible cases breached: a 40.44% breach rate. These percentages answer different questions.",
    vi: "Technical đóng góp {technical} trên {total} vi phạm SLA xử lý. Riêng trong nhóm Technical, 1.760 trên 4.352 case đủ điều kiện tính SLA vi phạm, tương đương 40,44%. Hai tỷ lệ có mẫu số khác nhau.",
  },
} as const;

// Source: support-ops-analytics README, workbook and docs/05_business_insights.md.
// Dataset/output counts and synthetic findings; these are not employment outcomes.
export const supportAnalyticsMetrics = {
  scope: [
    { id: "tickets", value: { en: "14,774", vi: "14.774" }, label: { en: "Cleaned ticket records", vi: "Ticket sau làm sạch" }, context: { en: "One snapshot per retained ticket", vi: "Một snapshot cho mỗi ticket được giữ lại" } },
    { id: "datasets", value: { en: "5", vi: "5" }, label: { en: "Support datasets", vi: "Bộ dữ liệu support" }, context: { en: "Tickets, work logs, workforce, agents, SLA", vi: "Ticket, work log, nhân lực, nhân viên, SLA" } },
    { id: "workbook", value: { en: "14", vi: "14" }, label: { en: "Excel reporting sheets", vi: "Sheet báo cáo Excel" }, context: { en: "KPI summaries and five charts", vi: "Tổng hợp KPI và năm biểu đồ" } },
  ],
  findings: [
    { id: "technical-breaches", value: { en: "50.09%", vi: "50,09%" }, label: { en: "Resolution SLA breaches from Technical cases", vi: "Vi phạm SLA xử lý thuộc nhóm Technical" }, context: { en: "1,760 of 3,514 breaches; 29.49% of tickets", vi: "1.760 / 3.514 vi phạm; 29,49% tổng ticket" } },
    { id: "weekday-demand", value: { en: "1.92×", vi: "1,92×" }, label: { en: "Average daily weekday demand vs. weekends", vi: "Ticket trung bình mỗi ngày: ngày thường / cuối tuần" }, context: { en: "46.90 vs. 24.37 tickets per calendar day", vi: "46,90 so với 24,37 ticket mỗi ngày" } },
  ],
} as const;

export const supportReport = {
  workbookHref: "/projects/support-ops/customer_support_analysis.xlsx",
  qualityHref: "/projects/support-ops/data-quality-report.html",
  qualityHrefEn: "/projects/support-ops/data-quality-report-en.html",
  sqlHref: "https://github.com/HoangLong1802/support-ops-analytics/tree/main/sql",
  downloadLabel: { en: "Download Excel report", vi: "Tải báo cáo Excel" },
  sqlLabel: { en: "Open SQL on GitHub", vi: "Mở SQL trên GitHub" },
  previewTitle: { en: "Inside the Excel report", vi: "Bên trong báo cáo Excel" },
  renderNote: { en: "Rendered from the Excel workbook. Synthetic data, October 2025–September 2026.", vi: "Ảnh render từ workbook Excel. Dữ liệu mô phỏng, tháng 10/2025–9/2026." },
  expandLabel: { en: "Open full-size image", vi: "Mở ảnh kích thước đầy đủ" },
  newTabLabel: { en: "opens in a new tab", vi: "mở trong tab mới" },
  previews: [
    {
      id: "overview",
      src: "/projects/support-ops/workbook-overview.png",
      width: 1423,
      height: 568,
      title: { en: "Service performance at a glance", vi: "Tổng quan hiệu quả dịch vụ" },
      alt: { en: "Excel workbook render: 14,774 tickets, 76.19% resolution SLA compliance, 87.93% first-response compliance and 578 backlog tickets, with a chart comparing SLA measures.", vi: "Ảnh render workbook Excel: 14.774 ticket, SLA xử lý đạt 76,19%, SLA phản hồi đạt 87,93%, backlog 578 ticket và biểu đồ so sánh SLA." },
      caption: { en: "Resolution compliance trails first response. The overview brings SLA, backlog and CSAT into one report.", vi: "SLA xử lý thấp hơn SLA phản hồi. Trang tổng quan đặt SLA, backlog và CSAT trong cùng một báo cáo." },
    },
    {
      id: "demand",
      src: "/projects/support-ops/workbook-demand.png",
      width: 1647,
      height: 587,
      title: { en: "Twelve months of ticket demand", vi: "Lượng ticket trong 12 tháng" },
      alt: { en: "Demand Analysis worksheet render with monthly ticket counts and month-over-month changes from October 2025 to September 2026, beside the monthly arrivals line chart.", vi: "Ảnh render sheet Demand Analysis: số ticket và biến động theo tháng từ 10/2025 đến 9/2026, kèm biểu đồ đường về lượng ticket." },
      caption: { en: "Monthly volumes show the broader pattern. The weekday/weekend comparison uses daily averages, rather than monthly totals.", vi: "Số ticket theo tháng cho thấy xu hướng chung. So sánh ngày thường và cuối tuần được tính riêng bằng trung bình mỗi ngày." },
    },
  ],
} as const;

export const supportAnalysisAreas = {
  en: ["SLA performance", "Backlog", "Ticket demand", "CSAT", "Agent performance", "Staffing & workload"],
  vi: ["Hiệu quả SLA", "Backlog", "Lượng ticket", "CSAT", "Hiệu quả nhân viên", "Nhân lực & khối lượng công việc"],
} as const;
