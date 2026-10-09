import Image from "next/image";
import { supportReport } from "@/config/support-analytics";
import type { Locale } from "@/types/portfolio";

type WorkbookPreviewProps = {
  readonly locale: Locale;
  readonly preview: (typeof supportReport.previews)[number];
  readonly preload?: boolean;
};

export function WorkbookPreview({ locale, preview, preload = false }: WorkbookPreviewProps) {
  return (
    <figure className="workbook-preview">
      <a className="workbook-preview__image" href={preview.src} target="_blank" rel="noreferrer" aria-label={`${preview.title[locale]} — ${supportReport.expandLabel[locale]} (${supportReport.newTabLabel[locale]})`}>
        <Image src={preview.src} width={preview.width} height={preview.height} alt={preview.alt[locale]} sizes="(max-width: 600px) calc(100vw - 80px), (max-width: 820px) 90vw, 960px" preload={preload} />
      </a>
      <figcaption>
        <strong>{preview.title[locale]}</strong>
        <p>{preview.caption[locale]}</p>
        <a className="text-link" href={preview.src} target="_blank" rel="noreferrer">
          {supportReport.expandLabel[locale]}<span className="sr-only"> ({supportReport.newTabLabel[locale]})</span>
        </a>
      </figcaption>
    </figure>
  );
}
