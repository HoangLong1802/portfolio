import { supportAnalyticsSignal } from "@/config/support-analytics";
import type { Locale } from "@/types/portfolio";

export function SupportAnalyticsSignal({ locale }: { readonly locale: Locale }) {
  const numberFormat = new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US");
  const percentageFormat = new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US", {
    style: "percent", maximumFractionDigits: 2,
  });
  const note = supportAnalyticsSignal.note[locale]
    .replace("{technical}", numberFormat.format(supportAnalyticsSignal.technicalBreaches))
    .replace("{total}", numberFormat.format(supportAnalyticsSignal.resolutionBreaches));

  return (
    <figure className="project-signal">
      <figcaption>{supportAnalyticsSignal.caption[locale]}</figcaption>
      {supportAnalyticsSignal.series.map((series) => (
        <div className="project-signal__row" key={series.id}>
          <span>{series.label[locale]}</span>
          <meter aria-label={series.label[locale]} min={0} max={100} value={series.value} />
          <strong>{percentageFormat.format(series.value / 100)}</strong>
        </div>
      ))}
      <p>{note}</p>
      <a className="text-link" href={supportAnalyticsSignal.sourceUrl}>
        {locale === "vi" ? "Nguồn và định nghĩa" : "Source and definitions"} ↗
      </a>
    </figure>
  );
}
