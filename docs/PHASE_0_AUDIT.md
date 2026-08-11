# Phase 0 Audit, Positioning, And Execution Plan

Date: 2026-08-11
Scope: evidence-based planning only. No application code changes are part of this phase.

## Evidence Reviewed

- Repository rules: `AGENTS.md`
- Build plan: `docs/PORTFOLIO_PLAN.md`
- Current portfolio worktree: `package.json`, `src/`, `docs/`, `README.md`
- Next.js 16 local docs:
  - `node_modules/next/dist/docs/01-app/01-getting-started/01-installation.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
  - `node_modules/next/dist/docs/01-app/02-guides/testing/index.md`
- Public GitHub repositories cloned shallowly into ignored `.repo-audit/` for local inspection:
  - <https://github.com/HoangLong1802/test_chat_bot>
  - <https://github.com/HoangLong1802/Helpdesk-Lab>
  - <https://github.com/HoangLong1802/Automated-IT-Asset-Inventory>
  - <https://github.com/HoangLong1802/webbanjewry>
  - <https://github.com/HoangLong1802/stock_prediction_AI>
  - <https://github.com/HoangLong1802/Educational_platform>
  - <https://github.com/HoangLong1802/user_setup_tool>

## Current Repository State

- This folder was not a Git repository at the start of Phase 0.
- A partial Next.js portfolio scaffold already exists, but it is not aligned with the approved positioning because it uses "Senior Full-Stack Engineering Portfolio" copy in `src/config/portfolio.ts` and `src/app/manifest.ts`.
- `package.json` currently has `dev`, `build`, `lint`, and `typecheck` scripts, but no `test` script.
- Existing dependencies include Next.js 16, React 19, Tailwind CSS 4 packages, Motion, Lucide, and shadcn-style utility packages. Keep only what later phases use.
- Existing `docs/design-system.md` describes a visual system, but Phase 2 should re-validate it after Phase 1 creates the approved content model.
- No top-level `.env` was found. The cloned `Educational_platform` audit copy contains a committed `.env`; do not copy its contents or reproduce that pattern.

## Next.js 16 Planning Notes

- App Router routes are created by folders and `page.tsx`; nested layouts and dynamic segments should follow the documented file conventions.
- In Next.js 16, `params` in dynamic route pages are asynchronous; use the documented `PageProps<'/route/[slug]'>` helper where useful.
- Components are Server Components by default. Keep content loading, route generation, and metadata on the server; isolate browser-only features such as theme, language controls, filtering, and motion into small Client Components.
- `next build` no longer runs the linter automatically, so `npm run lint` remains a separate required gate.
- E2E tests are recommended for async Server Components; use smaller unit/data tests for pure content validation.

## Verified Project Inventory

| Project | Audience / Problem | Evidence-backed stack | Notable implementation | Runnable / demo status | Limitations and cautions | Evidence paths |
| --- | --- | --- | --- | --- | --- | --- |
| DevMentor AI (`test_chat_bot`) | Developers practicing role-specific interviews and assessments from PDF material | React 19, Vite, FastAPI, OpenAI-compatible AI provider config, PyPDF2, JWT/RBAC, MongoDB/JSON fallback, Docker Compose, Nginx | PDF scan/chunk/rank pipeline, bounded context prompting, auth/admin routes, assessment sessions, camera/visibility violation handling, backend tests | README documents local and Docker setup. Repository homepage `https://test-chat-bot-iota.vercel.app` returned HTTP 200 on a HEAD check. | Do not claim real users, production traffic, or hardened production auth. OpenAI/Gemini/Groq features require backend secrets. Screenshots in README are placeholders. | `.repo-audit/test_chat_bot/README.md`, `package.json`, `backend/requirements.txt`, `backend/tests/*`, `DEPLOYMENT.md`, `.env.example`, `docker-compose.yml` |
| Helpdesk Lab | Application-support lab for health monitoring, ticket intake, incident automation, escalation, and recovery verification | Docker Compose, Nginx, PHP-FPM, MariaDB, GLPI, n8n, PowerShell/Bash scripts | Six n8n workflows, local support request API, incident deduplication, SLA escalation, three-check recovery, release/runbook docs, verification scripts | Local Docker lab. README reports last local verification on 2026-08-06; should be rerun in a fresh clone before publishing claims. | Must always be labelled as a tested local portfolio lab, not production experience. GLPI REST ticket creation is explicitly incomplete; local incident fallback shares MariaDB with the monitored app. | `.repo-audit/Helpdesk-Lab/README.md`, `docker-compose.yml`, `docs/architecture.md`, `docs/release-checklist.md`, `tests/*`, `scripts/run-demo.ps1` |
| Automated IT Asset Inventory | IT/helpdesk automation for collecting hardware/software inventory | Windows PowerShell, Linux Python, Bash wrapper, CSV output | Windows script uses WMI/registry; Linux script uses platform, `free`, `dpkg-query`; outputs CSV and logs per README | Manual scripts only; do not run in this audit because they inspect the host system. | No tests found. Scope is Windows/Linux local collection; do not claim centralized asset management, scheduling, or enterprise deployment. | `.repo-audit/Automated-IT-Asset-Inventory/readme.md`, `window/inventory_windows.ps1`, `linux/inventory_linux.py`, `linux/run_inventory.sh` |
| MERN Jewelry Store (`webbanjewry`) | E-commerce learning project with separate admin and customer experiences | Node.js, Express, MongoDB/Mongoose, JWT, bcryptjs, Nodemailer, Helmet, React admin/customer apps | Monorepo structure, admin/customer API files, DAO-style model layer, security middleware dependencies | Local multi-app setup documented. No verified live demo found. | Server `npm test` exits with "no test specified"; README testing/performance claims are unsupported. Default admin credential example must not be presented as production-safe. | `.repo-audit/webbanjewry/README.md`, `package.json`, `server/package.json`, `server/api/*`, `server/models/*`, `server/.env.example` |
| Stock Prediction AI | Learning project exploring stock forecasting models and ensemble prediction | Python, NumPy, pandas, scikit-learn, PyTorch, XGBoost, Matplotlib/Seaborn | Multiple sequence model files, XGBoost stacking/meta-learner files, sample datasets, saved model artifacts | README documents CLI/interactive usage. No live app or test suite found. | README claims "superior" accuracy/performance, but no reproducible evaluation report or test artifacts were found. Do not claim investment value or superior accuracy. Add financial disclaimer if shown. | `.repo-audit/stock_prediction_AI/README.md`, `requirements.txt`, `app.py`, `machine-learning/*`, `stacking/*`, `dataset/*`, `model/*` |
| Educational Platform | React learning/e-commerce UI experiment | React 19, Bootstrap 5, Context API/useReducer, Axios, CRA/react-scripts | Course search/filter, favorites, view history, modal chat UI, mock data services | Local CRA app with `start`, `build`, and `test` scripts. | AI behavior appears simulated/mock from README and services; label it as simulated unless a real model integration is added. Cloned repo includes a committed `.env`; do not copy that practice. | `.repo-audit/Educational_platform/README.md`, `package.json`, `src/context/AppContext.js`, `src/services/mockData.js`, `src/services/apiService.js`, `TESTING.md` |
| User Setup Tool | Helpdesk/onboarding automation for local user creation and audit logging | Python, Bash, Windows Batch, CSV logging | Cross-platform scripts create users/groups, install tools, and append `user_creation_log.csv` | Manual privileged scripts only; do not run during portfolio verification. | Scripts modify OS users and install software; no tests found. Present as a learning automation tool, not enterprise onboarding. | `.repo-audit/user_setup_tool/readme.md`, `user_setup_tool.py`, `Linux/User_setup.sh`, `Window/run_user_setup.bat` |

## Unsupported Or Risky Claims To Avoid

- Do not use the current scaffold's "Senior" positioning.
- Do not describe Customer Service experience as a verified Technical Support job title. It is acceptable to describe technical-support responsibilities when verified by CV or other source material.
- Do not publish proof metrics such as QA 97%, 110+ tickets/week, CSAT 80%+, AHT under 10 minutes, 400+ properties, or 800+ customers until the current CV/source is supplied and confirmed.
- Do not claim any project has production users, customers, revenue impact, uptime, or hiring outcomes unless evidence is provided.
- Do not claim Stock Prediction AI has superior accuracy without a reproducible backtest/evaluation report.
- Do not claim Educational Platform has real AI integration unless a model/API integration is verified.
- Do not claim Helpdesk Lab has working GLPI REST ticket creation; use the documented local fallback limitation.
- Do not claim Jewelry Store tests pass; the server test script currently fails intentionally.
- Do not copy `.env` files or secrets from audited repositories.

## Positioning

Primary position:

> Trương Hoàng Long — Application Support & Automation-Focused Developer

Primary message:

> I bridge users, systems, and engineering — turning support problems into reliable workflows, automation, and practical software.

Backup taglines:

1. "Application support engineer-in-training who turns recurring issues into documented, testable workflows."
2. "Customer-facing support experience plus practical full-stack and automation projects."

## Audience Personas

HR recruiter:

- Needs a 30-60 second read on target role, English/customer support background, strongest projects, and contact/CV actions.
- Cares about truthful titles, clear metrics, readable skills, and whether the portfolio feels professional.

Application Support / Support Operations manager:

- Looks for incident thinking, troubleshooting process, logs, escalation, documentation, communication, and pragmatic automation.
- Needs lab limitations clearly disclosed.

Technical interviewer:

- Looks for maintainable React/Next architecture, typed data, evidence links, project constraints, testing honesty, and security awareness.

## 30-Second Information Path

1. Hero states name, target role, and the bridge-users-systems-engineering value proposition.
2. Proof strip shows CV-verified metrics only after the user supplies the current CV.
3. First project row features DevMentor AI and Helpdesk Lab with honest status badges.
4. Experience summary connects Concentrix/Booking.com and OPPO responsibilities to support, troubleshooting, and development.
5. Contact area offers CV, email, GitHub, and LinkedIn only after verified links/assets are supplied.

## Proposed Sitemap

- `/` — English home, default locale.
- `/vi` — Vietnamese home.
- `/projects/[slug]` — English project case study.
- `/vi/projects/[slug]` — Vietnamese project case study.
- `/process` — English "Built with Codex" engineering journal.
- `/vi/process` — Vietnamese process page.
- `/not-found` via App Router `not-found.tsx`.
- Metadata routes: `sitemap.ts`, `robots.ts`, generated Open Graph image, manifest/icon.

## Proposed Content Model

- `Profile`: name, target role, summary, location/TODO, availability/TODO, contact links/TODO, CV assets/TODO.
- `Metric`: value, label, context, source, sourceStatus (`verified`, `todo`, `unsupported`), visibility flag.
- `Experience`: company, product/client, title, date range, verified responsibilities, technologies, metrics, sourceStatus.
- `Project`: slug, featured rank, category (`production`, `portfolio-lab`, `learning`, `simulation`), problem, audience, role, stack, highlights, limitations, evidence links, screenshots, demo link status.
- `SkillGroup`: support/operations, development, automation/devops, communication.
- `LocalizedText`: English and Vietnamese records with equivalent meaning, not literal translation.
- `ProcessEntry`: date or phase, action, evidence, human decision, lesson learned.

Keep content under `src/config` or `src/content` with TypeScript types under `src/types`.

## Proposed Component Architecture

- `src/app`: App Router routes, layouts, metadata, `not-found`, and locale segments.
- `src/components/layout`: shell, navigation, footer, locale/theme controls.
- `src/components/sections`: home sections composed from typed content.
- `src/components/projects`: cards, filters, detail sections, evidence links, status badges, screenshot placeholders.
- `src/components/ui`: accessible reusable primitives.
- `src/components/visuals`: CSS/SVG diagrams and restrained technical visuals.
- `src/lib`: locale helpers, slug lookup, SEO helpers, data validation utilities.
- `src/config` or `src/content`: typed bilingual portfolio data.

## Visual And Motion Direction

- Dark-first calm technical control-room feel: navy/charcoal base, restrained cyan/violet accents, strong typography, generous spacing.
- Use real project screenshots when supplied; use clearly labelled polished placeholders when screenshots are missing.
- CSS grid/noise/gradient lighting may support hierarchy, but avoid heavy 3D, particles, custom cursors, scroll hijacking, and animation that blocks content.
- Motion should be added only after the static experience is complete.
- All non-essential motion must respect `prefers-reduced-motion`; mobile should simplify animation.

## Test Strategy

Phase 1 should add the missing `npm run test` gate. Recommended first layer:

- Unit/data tests for locale parity, project slug lookup, unsupported claim flags, and required evidence fields.
- Route behavior tests for valid/invalid project slugs where practical.
- Later Playwright smoke tests for home, language switching, navigation, project detail, CV link, and mobile menu.

Required gates after implementation phases:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deployment Approach

- Use Vercel defaults for Next.js unless a real need appears.
- Keep canonical URL configurable through a safe public environment variable.
- Deploy preview first and smoke-test before any production promotion.
- Stop before production deployment until the user confirms Vercel/account access, canonical URL, contact details, CV, and demo links.

## Implementation Phases

| Phase | Dependency | Main risk | Acceptance summary | Verification |
| --- | --- | --- | --- | --- |
| 1. Scaffold/content model/quality gates | Phase 0 | Existing scaffold has wrong positioning | Typed bilingual content model, routes, minimal semantic rendering, `.env.example`, README, decision log, tests script | lint, typecheck, test, build |
| 2. Visual system/responsive shell | Phase 1 | Decorative UI over readability | Design tokens, responsive shell, navigation, focus states, visual QA at 360/768/1024/1440 | lint, typecheck, test, build, visual QA |
| 3. Hero/experience/metrics/skills/contact | Verified CV/contact assets | Unsupported personal claims | Equivalent EN/VN core recruiter content, CV/contact links tested | lint, typecheck, test, build, link checks |
| 4. Project cards/case studies | Phase 0 repo audit plus screenshots/TODOs | Overclaiming project outcomes | Evidence-backed project cards/detail routes, honest demos/status, tests for project data/routes | lint, typecheck, test, build |
| 5. Motion/interactions | Static site complete | Bundle/performance and reduced-motion regressions | Motion system with reduced-motion alternatives and no console/hydration issues | pre/post build comparison, lint, typecheck, test, build |
| 6. Built with Codex journal | Meaningful commit history | Fake productivity/process claims | `/process` page sourced from actual phase work and commits | lint, typecheck, test, build |
| 7. SEO/accessibility/performance/testing | Content complete | Fake audit scores or incomplete tests | Metadata, sitemap, robots, structured data, audits, secret scan, dependency review | automated checks, local production build, documented audit results |
| 8. Deployment | User authorization and final public facts | Publishing wrong URL/secrets | Preview then production only after confirmation | stop before production unless explicitly authorized |
| 9. Final HR/technical review | Deployed or deployment-ready site | Late unsupported claims | Findings first, approved fixes only | full checks after approved fixes |

## Missing User Assets And Facts

Blocking before Phase 3 or deployment:

- Current English CV PDF and optional Vietnamese CV PDF.
- Exact email address to publish.
- Exact LinkedIn URL to publish.
- Exact Concentrix/Booking.com title and date range.
- Exact OPPO Vietnam title and date range.
- Confirmation that KPI metrics may be public and match current CV.
- Professional photo decision: real portrait, initials/avatar, or abstract visual.
- Real screenshots for featured projects, or approval to use labelled placeholders.
- Verified live/demo URLs for every project link beyond DevMentor's currently reachable Vercel URL.
- Canonical domain or decision to keep a temporary placeholder until deployment.

Not blocking for Phase 1:

- Final screenshots, photo, contact links, and CV can remain TODO/hidden in typed content until verified.

## Phase 0 Self Review

- No application code was changed for this phase.
- Claims in this audit are tied to local repository evidence, GitHub repository metadata, or marked TODO/unsupported.
- The current scaffold's inaccurate Senior positioning is explicitly identified as debt.
- Security concerns found during audit are documented without exposing secret values.
- Phase 1 can proceed without verified personal facts if it uses TODO markers and avoids publishing unsupported claims.
