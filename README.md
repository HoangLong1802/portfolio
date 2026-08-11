# Truong Hoang Long Portfolio

Personal portfolio foundation built with Next.js App Router, strict TypeScript, typed bilingual content, and evidence-backed project descriptions.

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

Optional public settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Do not put secrets in `NEXT_PUBLIC_*` variables. Contact details, CV links, exact job dates, screenshots, and KPI metrics remain unpublished until verified by the site owner.

## Phase Notes

Detailed implementation phases stay in `docs/PORTFOLIO_PLAN.md`. Current execution state is tracked in `PHASE_STATUS.md`.
