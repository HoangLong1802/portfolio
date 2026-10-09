# Truong Hoang Long Portfolio

Bilingual portfolio for Junior Data Analyst, Operations Analyst, Reporting Analyst and Data Operations applications. Built with the existing Next.js App Router and strict TypeScript.

## Development

Use Node.js 24 LTS and install the locked dependencies:

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
npm run start
```

The default canonical URL is https://portfolio-liart-one-77.vercel.app/. Set NEXT_PUBLIC_SITE_URL only when overriding this address; .env.example contains the production URL. Do not put secrets in public variables.

On Windows PowerShell, use `npm.cmd` instead of `npm` if the local execution policy blocks `npm.ps1`. Node/npm are available on PATH in the current environment. ESLint excludes `.agents/` because its bundled skill scripts are tooling, not application source.

## Editing content

- src/content/portfolio.ts contains EN/VI copy, experience and project descriptions.
- src/config/personal-info.ts is the shared source for name, email, phone, GitHub and portfolio URL.
- src/config/portfolio-sections.ts controls the flagship and smaller project selections.
- src/config/support-analytics.ts holds sourced numeric callouts, denominators and localized labels.
- public/projects/support-ops contains the actual Excel workbook, its two renders and a readable data-quality summary. The preview and download are the same local delivery; do not replace only one of them. Source details and checksums are recorded in docs/RECRUITER_REVIEW.md.
- src/types/portfolio.ts defines the content contract. Keep content separate from UI components.

Customer Support Operations Analytics is the single flagship. Its data is synthetic; the published calculations come from Python and the reporting output is Excel. Describe the MySQL work as query design. Add Power BI deliverables only when a real PBIX or dashboard image is available.

Workbook images are renders of the actual XLSX, not native Excel captures. Keep their original aspect ratio and full-size links. The current workbook contains 14 sheets and five chart objects. It stores reporting results, with no claim of PivotTables or formula-based recalculation.

Absent resume and LinkedIn links are hidden. Keep project routes and existing software demos accessible. Stock and Inventory use concise project pages rather than incomplete analytical templates. The old root HTML now links to the current portfolio.

Shared styles remain in the portfolio-base layer of src/app/globals.css. The existing analytics rules control the palette and responsive layout. Keep reduced-motion overrides consistent in both layers. Next.js generates localized OpenGraph image URLs automatically; do not hard-code image route hashes.

## Review

Detailed instructions are in docs/PORTFOLIO_PLAN.md. See docs/RECRUITER_REVIEW.md for the audit, changed files, claim decisions, missing optional assets and verification results. Internal development notes belong in documentation, never in visitor-facing content.
