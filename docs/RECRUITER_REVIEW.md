# Recruiter-focused portfolio review

Continued locally on 2026-10-09 for Junior Data Analyst, Operations Analyst, Reporting Analyst and Data Operations applications. The existing bilingual Next.js App Router, project routes and software demos were preserved. No CV, dependency manifest or lockfile was changed. Changes have not been committed, pushed or deployed.

## Initial inspection

- Homepage and project pages use the EN/VI route groups under `src/app`, shared portfolio components, typed content in `src/content/portfolio.ts`, and config in `src/config`.
- Visitor-facing copy contained resume/LinkedIn pending labels, a contact TODO, incomplete Stock/Inventory case studies, and phrases such as “verified role,” “owner-provided,” and “repository audit.” Internal documentation also contains historical instructions; those are retained as internal context and explicitly superseded by the current plan.
- The homepage gave multiple projects similar prominence and repeated detailed project information. Experience copy was long and sometimes sounded like a verification report.
- The portfolio had no resume PDF, GIF, project preview image, PBIX or Power BI dashboard screenshot. Available visual assets were the icon and generated OpenGraph images.
- OpenGraph images used the older support/developer positioning and dark colors. The default canonical URL was localhost; manually constructed image URLs did not match Next.js 16.3's generated image route hashes.
- The unused root static HTML contained sample links, a missing profile image and a form that displayed a success message without sending anything.

## Source and claim review

Inspected [support-ops-analytics](https://github.com/HoangLong1802/support-ops-analytics) at commit `e0455ef6fb2cb0da578f241774450bf0e562e0bd`, including its README, Python outputs, SQL files, workbook and business-insights document.

| Published item | Context retained in the portfolio |
| --- | --- |
| Five support datasets | Synthetic tickets, work logs, daily workforce, agents and SLA policies; a personal analytics project |
| 14,774 cleaned records | One retained snapshot per ticket; 18 agents and three teams, October 2025–September 2026 |
| 14-sheet Excel workbook | Actual workbook with five charts, linked from the flagship and case study |
| 50.09% Technical resolution-breach share | 1,760 of 3,514 resolution breaches; Technical represents 29.49% of tickets |
| 1.92× weekday demand | Average daily arrivals, including zero-arrival days; demand is not a direct measurement of handling effort |
| SQL / MySQL | Query design using JOINs, CTEs, aggregations and window functions; published calculations come from Python |
| Recommendations | Suggested follow-up actions, not implemented changes or measured business improvements |

The numeric sources are the [published KPI CSV](https://github.com/HoangLong1802/support-ops-analytics/blob/e0455ef6fb2cb0da578f241774450bf0e562e0bd/data/analytics/verified_kpis.csv), [business findings](https://github.com/HoangLong1802/support-ops-analytics/blob/e0455ef6fb2cb0da578f241774450bf0e562e0bd/docs/05_business_insights.md) and [Excel workbook](https://github.com/HoangLong1802/support-ops-analytics/blob/e0455ef6fb2cb0da578f241774450bf0e562e0bd/output/customer_support_analysis.xlsx).

Removed Power BI/DAX from public deliverable and skills positioning because only model/measure specifications exist; no completed dashboard asset was found. The workflow ends at Excel reporting. No dashboard image was fabricated and no executed MySQL results or stock predictive accuracy were claimed.

Removed missing-asset CTAs, public development status, audit wording and incomplete Stock/Inventory analytical templates. Stock remains accessible as a small learning project. Existing lab/simulation labels and truthful technical scope remain on other project pages.

Concentrix remains Customer Service Specialist – Platform & Partner Support, with case handling, categorization, account/case review, QA, documentation and cross-team investigation. Its existing 110+ weekly cases and 97% QA context is preserved. No SQL or Power BI employment claim was added. OPPO remains PHP Developer, Apr 2024–Apr 2025, emphasizing querying, data validation, troubleshooting, testing and documentation.

## UX and content changes

- Seven-part homepage: short hero, single flagship, capabilities/skills, experience, other selected projects, about/education, contact.
- Primary “View Projects” and secondary GitHub actions. Correct name, email, phone and URLs share one config; absent resume and LinkedIn actions are hidden.
- Stronger flagship with business problem, analysis areas, large scoped metrics, concise tools and direct links to GitHub and the actual workbook.
- Nine-part support case study: Overview, Business Problem, Dataset, Workflow, Analysis, Key Findings, Recommendations, Tools, Repository & reports. Schema details stay in the source repository.
- Four readable skill groups; SQL, Python/pandas and Excel remain immediately visible. Stock and Inventory sit below experience; earlier software projects remain accessible in a disclosure and on their original routes.
- Existing sage/cream palette standardized across cards, icon, manifest and social images. More consistent spacing, restrained hover effects, readable headings and mobile layouts.
- Skip link moves keyboard focus to the main content. All content remains visible during reveals. Reduced-motion mode disables animations/transitions and smooth scrolling.
- Localized titles/descriptions and production canonical URLs corrected. File-based Next.js OpenGraph metadata supplies the correct generated image URLs.
- Unused static HTML now provides truthful links to the current portfolio. Its obsolete script and stylesheet were removed.

## Changed files

28 files added, modified or removed:

| File | Change |
| --- | --- |
| `.env.example` | Production canonical URL |
| `README.md` | Setup, content editing, metadata and review documentation |
| `docs/PORTFOLIO_PLAN.md` | Current phase instructions, inspection findings and completion record |
| `docs/RECRUITER_REVIEW.md` | This handoff |
| `index.html` | Truthful static fallback links |
| `script.js` | Removed unused fake contact-form behavior |
| `style.css` | Removed obsolete static-page styles |
| `src/app/(en)/opengraph-image.tsx` | Localized social image entry point |
| `src/app/(vi)/vi/opengraph-image.tsx` | Localized social image entry point |
| `src/app/globals.css` | Hierarchy, metrics, responsive layout, focus and motion |
| `src/app/icon.svg` | Palette alignment |
| `src/app/manifest.ts` | Current name/role and palette |
| `src/components/layout/root-shell.tsx` | Focusable skip-link destination |
| `src/components/motion/reveal.tsx` | Visible initial content |
| `src/components/portfolio/portfolio-page.tsx` | Homepage order, shorter hero, contact and education |
| `src/components/portfolio/project-showcase.tsx` | Sole flagship and separate secondary projects |
| `src/components/portfolio/project-detail-page.tsx` | Dedicated support case study while preserving other routes |
| `src/components/portfolio/support-analytics-case-study.tsx` | New analyst case-study presentation |
| `src/components/portfolio/support-analytics-metrics.tsx` | New localized numeric callouts |
| `src/components/portfolio/portfolio-social-image.tsx` | New shared social image using existing image generation |
| `src/components/portfolio/portfolio-render.test.ts` | New rendered-content, hierarchy, contact and metadata regression checks |
| `src/config/personal-info.ts` | Exact contact details, GitHub and portfolio URL |
| `src/config/portfolio-sections.ts` | Flagship/secondary project selection |
| `src/config/support-analytics.ts` | Sourced metrics, definitions and analysis areas |
| `src/content/portfolio.ts` | EN/VI copy, experience, skills and projects |
| `src/content/portfolio.test.ts` | Updated content contracts and claim checks |
| `src/lib/seo.ts` | Canonical defaults, distinct titles and generated image metadata |
| `src/types/portfolio.ts` | Case-study workflow and finished-content labels |

## Verification

The locked packages were installed with `npm ci`. Checks used the checksum-verified official Node.js v24.21.0 Windows runtime. No project dependency was added. On Windows, `npm.cmd` was used for the following scripts:

| Command | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed Next.js route type generation and strict TypeScript |
| `npm run test` | Passed 27 tests across two files |
| `npm run build` | Passed Next.js 16.3.0 Turbopack production build; 30 pages generated |
| `git diff --check` | Passed |

Production browser checks used headless Microsoft Edge via a QA-only Playwright installation outside the project dependency manifest:

- 24 EN/VI homepage and support-case viewport/route combinations at 320, 390, 768, 1024, 1280 and 1440 px. No horizontal overflow, broken loaded image or duplicate H1 was found. Desktop, tablet and mobile screenshots were inspected.
- All 20 localized project routes, including jewelry aliases, returned HTTP 200; an unknown project returned 404.
- Navigation, locale switching EN → VI → EN, keyboard-operated mobile menu, first-tab skip link, visible focus and main-content focus passed.
- Contact links match the exact email, phone and GitHub profile. Rendered homepage/project text contains no unfinished markers or unsupported Power BI deliverables.
- Reduced-motion preference produced visible content, no transform, zero transition duration and automatic scrolling.
- Browser console/page error collection was empty, including hydration warnings. Both actual localized OpenGraph image URLs returned HTTP 200 with PNG content.
- GitHub profile, all eight project repositories, workbook/SQL links and DevMentor frontend returned HTTP 200. The existing Jewelry Render demo timed out after 15 seconds; the existing DevMentor backend health check timed out after 20 seconds. These externally hosted services were not changed, and their existing startup guidance remains. External availability is the outstanding link-check limitation.

Follow-up on 2026-10-09: the current production build was served locally at `http://127.0.0.1:43177/` and checked in Microsoft Edge at 390px and 1440px. Homepage and EN/VI support case-study routes returned 200 without horizontal overflow; both localized quality-report pages returned 200 and an unknown project returned 404. Both workbook renders loaded in the case study, keyboard focus starts at the skip link, reduced-motion mode remains enabled when requested, and the browser error collection was empty. Review screenshots are saved in the session's `files/portfolio-review` folder, outside the repository. The English case study now links to an English data-quality report, and workbook facts reflect the five charts in the current source workbook.

No QA code or source-repository clone is included in the tracked application changes.

## Assets and Git setup still needed

- Optional Power BI PBIX plus a real dashboard screenshot/export before adding Power BI to the visible project deliverables.
- Optional current resume PDF and LinkedIn profile URL before restoring those buttons. No CV content was edited.
- No asset is required to use the finished SQL/Python/Excel version.
- `origin` fetch/push points to `https://github.com/HoangLong1802/portfolio`. Local Git identity is configured. A non-interactive push dry-run reached authentication and failed because GitHub credentials are not available. Sign in through Git Credential Manager/Git GUI before committing and pushing. No commit, remote write or deployment was performed.

## Hiring-manager review

The first viewport makes Junior Data Analyst and Operations Analytics clear within roughly ten seconds. The flagship connects a recognizable support business problem to Python preparation/calculation, MySQL query design and an actual Excel workbook. Quantified findings and their definitions are prominent; recommendations follow from them without claiming measured business impact.

The candidate's support operations and software/database experience explains the transition while preserving his real job titles. The site reads as a concise candidate portfolio, with no public missing-content markers. The synthetic-data context is visible, so it demonstrates analytical practice rather than access to real employer/customer data. I would click through to the workbook and SQL/Python repository and consider an initial Junior Analyst interview based on the work shown; production BI experience is not established by this portfolio.
