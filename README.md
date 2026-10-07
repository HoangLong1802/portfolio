# Truong Hoang Long Portfolio

Bilingual portfolio for an entry-level Data Analyst focused on operations analytics, built with Next.js App Router, strict TypeScript, and evidence-backed project descriptions.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## Content

Portfolio content lives in `src/content/portfolio.ts`. Public-facing claims must stay traceable to `docs/PHASE_0_AUDIT.md` or a user-supplied source.

The featured support comparison is configured in `src/config/support-analytics.ts`, with its source, denominators and EN/VI labels. Keep these values aligned with the support analytics README. The figure describes synthetic observations, not work in a previous company. Secondary data cards show the problem, analysis and verified finding or limitation.

Shared styles use the `portfolio-base` cascade layer in `src/app/globals.css`; the analytics rules below it control the current visual identity and responsive layout. Do not add another competing override section.

Optional public settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Do not put secrets in `NEXT_PUBLIC_*` variables. Contact details, CV links, exact job dates, screenshots, and KPI metrics remain unpublished until verified by the site owner.

## Phase Notes

Detailed implementation phases stay in `docs/PORTFOLIO_PLAN.md`. Current execution state is tracked in `PHASE_STATUS.md`.
