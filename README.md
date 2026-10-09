# Truong Hoang Long — Data Analyst Portfolio

Bilingual (EN/VI) portfolio for Junior Data Analyst, BI/Reporting Analyst and Operations Analyst roles.
Live: https://portfolio-liart-one-77.vercel.app/

The featured project is [Customer Support Operations Analytics](https://github.com/HoangLong1802/support-ops-analytics): Python cleaning, MySQL queries, a five-page Power BI report (68 DAX measures) and an Excel workbook. It uses **synthetic data**; findings are practice results, not business outcomes.

## Stack

Next.js (App Router), React, TypeScript (strict), Tailwind CSS 4, Motion, Vitest.

## Develop

Node.js 24 LTS. On Windows PowerShell, use `npm.cmd` if script execution is blocked.

```bash
npm ci
npm run dev        # local server
npm run lint
npm run typecheck
npm run test
npm run build
```

## Content

| Path | Purpose |
|---|---|
| `src/content/portfolio.ts` | EN/VI copy, experience, projects |
| `src/config/personal-info.ts` | Name, contact, links |
| `src/config/support-analytics.ts` | Sourced KPIs, screenshot metadata |
| `public/projects/support-ops/` | Power BI screenshots, Excel workbook and renders, data-quality summary |

Screenshots are real captures from Power BI Desktop and renders of the actual workbook. Keep claims tied to the source repository; see `docs/PORTFOLIO_PLAN.md` and `docs/RECRUITER_REVIEW.md` for working rules and audit notes.

Set `NEXT_PUBLIC_SITE_URL` only to override the canonical URL (see `.env.example`). Never put secrets in `NEXT_PUBLIC_*` variables.
