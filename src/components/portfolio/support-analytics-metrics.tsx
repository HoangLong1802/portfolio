import { supportAnalyticsMetrics } from "@/config/support-analytics";
import type { Locale } from "@/types/portfolio";

type SupportAnalyticsMetricsProps = {
  readonly locale: Locale;
  readonly variant: "scope" | "findings";
};

export function SupportAnalyticsMetrics({ locale, variant }: SupportAnalyticsMetricsProps) {
  return (
    <dl className={`analytics-metrics analytics-metrics--${variant}`}>
      {supportAnalyticsMetrics[variant].map((metric) => (
        <div key={metric.id}>
          <dt>{metric.label[locale]}</dt>
          <dd><strong>{metric.value[locale]}</strong><span>{metric.context[locale]}</span></dd>
        </div>
      ))}
    </dl>
  );
}
