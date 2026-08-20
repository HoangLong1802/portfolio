# Implementation Decisions

## Phase 1 - Foundation

### Analysis

The existing uncommitted scaffold described the owner as a senior full-stack engineer. Phase 0 evidence does not support that claim, so the foundation must center truthful positioning, local audit evidence, and explicit limitations.

### Architecture

- App Router pages are server components by default.
- Portfolio data is isolated in `src/content/portfolio.ts`.
- Domain contracts live in `src/types/portfolio.ts`.
- Pure lookup and formatting helpers live in `src/lib`.
- UI components receive typed content and do not own claims.
- English and Vietnamese routes share the same project slugs for SEO and maintainability.

### Folder Structure

```text
src/
  app/
    (en)/
    (vi)/
  components/
    layout/
    portfolio/
    ui/
  content/
  lib/
  types/
```

### Implementation Plan

1. Replace unsupported content with audited bilingual content.
2. Keep the first UI pass minimal, accessible, and static.
3. Add tests that reject unsupported claims and incomplete project evidence.
4. Verify with lint, typecheck, test, and build before commit.

### Self Review

- The content model keeps claims separate from presentation.
- The current UI intentionally avoids performance-heavy motion.
- Pending personal facts are represented as internal data, not public copy.
- Project limitations are visible instead of hidden in comments.

### Possible Improvements

- Add owner-approved CV, contact links, and job timeline.
- Add project screenshots after the owner confirms allowed assets.
- Add Playwright and accessibility automation in a later phase.

## Phase 2 - Visual System And Responsive Shell

### Analysis

The Phase 1 foundation is truthful but visually plain. Phase 2 should improve scanning, navigation, theme control, and responsive polish without adding complex motion or changing evidence-backed content.

### Architecture

- CSS custom properties in `src/app/globals.css` are the token source of truth.
- The theme toggle is the only client component in the shell and writes a client-safe `data-theme` value to the document element.
- Mobile navigation uses native `details`/`summary` behavior to keep keyboard and touch support simple.
- Decorative depth is CSS-only: grid lines, surface contrast, borders, and shadows.

### Folder Structure

```text
src/components/layout/theme-toggle.tsx
src/components/layout/site-header.tsx
src/app/globals.css
docs/PHASE_2_VISUAL_QA.md
```

### Implementation Plan

1. Expand tokens for color, spacing, typography, radius, borders, shadows, and transition duration.
2. Add sticky responsive navigation with mobile menu, language switcher, and theme control.
3. Refine buttons, links, cards, badges, focus states, and section rhythm.
4. Run viewport QA at 360px, 768px, 1024px, and 1440px.

### Self Review

- No new dependency is needed for Phase 2.
- The shell remains server-rendered except for the isolated theme toggle.
- The visual system avoids heavy 3D, custom cursors, scroll hijacking, and complex motion.
- The current page still avoids unverified CV/contact/experience claims.
- Next.js 16 local documentation confirmed that each route-group root layout must import the global stylesheet.
- Production visual QA found and fixed the missing stylesheet import and the tablet header's implicit second grid row.
- Exact-width QA passed in English and Vietnamese at 360px, 768px, 1024px, and 1440px.
- Keyboard, mouse, touch, theme, reduced-motion, and 200% effective-scale checks are recorded in `docs/PHASE_2_VISUAL_QA.md`.

### Possible Improvements

- Add project screenshots when owner-approved assets exist.
- Add automated browser smoke tests during the Phase 7 testing pass.
- Add a richer motion layer in Phase 5 after static content is complete.

## Cross-Perspective Portfolio Review

### Analysis

- A 45-second recruiter scan reached the audit process before the candidate name and role.
- The support positioning lacked an immediate issue-handling model for an Application Support manager.
- Equal-weight project cards made the strongest evidence hard to distinguish from smaller learning work.
- Motion was already restrained, but several header controls were 42px rather than the 44px interaction target.
- CV, employment history, contact details, and personal KPI claims remain unavailable and must not be inferred.

### Architecture

- The homepage remains a Server Component.
- The support flow and project cards are pure presentation components fed by typed localized content.
- External links share one semantic component with a localized screen-reader label.
- The refinement adds no dependency and no new client boundary.

### Folder Structure

```text
src/components/portfolio/project-card.tsx
src/components/portfolio/support-flow.tsx
src/components/ui/external-link.tsx
src/content/portfolio.ts
src/types/portfolio.ts
src/app/globals.css
```

### Implementation Plan

1. Make the candidate name, role, and working statement the first hero signals.
2. Add a clearly labelled conceptual support-to-solution workflow.
3. Feature four evidence-backed case studies and reduce the visual weight of secondary projects.
4. Improve touch targets, external-link semantics, responsive hierarchy, and reduced-motion coverage.

### Self Review

- No work history, metric, customer, result, or deployment claim was added.
- The support flow explicitly says it is conceptual and not live system data.
- The fourth project's display title now uses the audited `MERN Jewelry Store` name while preserving its source slug.
- Production QA passed in English and Vietnamese at 360, 390, 768, 1024, 1440, and 1920px with no horizontal overflow or undersized interactive controls.
- Keyboard skip navigation, keyboard/mouse/touch menu use, theme switching, reduced motion, and effective 200% scaling passed.
- Static chunk output grew by 4,285 bytes (about 0.72%) with no dependency or client-component increase.

### Possible Improvements

- Add verified CV, public contact details, experience, education, and approved KPI context to complete Phase 3.
- Add owner-approved screenshots and diagrams before completing Phase 4.
- Run formal Lighthouse and automated accessibility tooling in Phase 7; no score is claimed by this review.

## Owner-Requested Color And Luminous Surface Pass

### Analysis

The refined layout remained visually restrained, but the cyan-led palette still made operational states and project categories feel too similar at a glance. The near-black page and flat section rhythm also made the experience feel darker and less distinctive than the owner wanted.

### Architecture

The art direction remains token-led and server-first. A decorative status rail was added to the existing server-rendered support workflow, while manifest and viewport colors now match the brighter dark canvas. Existing content contracts, project category data, and reduced-motion behavior remain unchanged.

### Folder Structure

```text
src/app/globals.css
src/app/manifest.ts
src/components/portfolio/support-flow.tsx
src/lib/seo.ts
```

### Implementation Plan

1. Map cyan, green, amber, violet, and coral to distinct information roles.
2. Raise the dark canvas luminance and create full-width tonal bands between major sections.
3. Refine typography, elevation, workflow framing, project hierarchy, and browser chrome colors.
4. Verify dark/light themes and all existing responsive/accessibility checks.

### Self Review

- No content, claim, dependency, client boundary, or heavy animation was added.
- Color remains supplementary; labels, numbers, headings, and borders preserve meaning without color alone.
- Hover elevation uses transform and shadow only and collapses under the existing reduced-motion policy.
- Dark and light production screenshots remain readable without overflow or overlapping content across 12 EN/VI viewport combinations.
- Static chunk output increased by 2,809 bytes (about 0.47%) from the preceding color build.

### Possible Improvements

- Revisit exact token contrast during the formal Phase 7 automated accessibility audit.
- Keep future color additions tied to status or category semantics to avoid visual noise.

## Featured Projects Storytelling

### Analysis

The static featured-card grid made four strong repositories easy to compare but did not explain how each project moved from a real problem to a reliable, verified next step. A richer section must remain evidence-led, readable within a recruiter scan, and fully usable without desktop motion.

### Architecture

- `PortfolioPage` remains a Server Component and passes only the four typed featured projects into one client boundary.
- Verified story copy lives in the bilingual content model; presentation code does not own portfolio claims.
- Motion for React is isolated to the featured section, with `LazyMotion`, spring-smoothed scroll values, and transform/opacity animation only.
- Tablet, mobile, reduced-motion, and no-JavaScript paths render a normal document-flow list.
- Product visuals are semantic HTML/CSS diagrams based on audited features, not fabricated screenshots.

### Folder Structure

```text
src/components/portfolio/
  featured-project-motion-features.ts
  featured-project-story.tsx
  project-story-visual.tsx
src/content/portfolio.ts
src/types/portfolio.ts
src/app/globals.css
```

### Implementation Plan

1. Extend the strict bilingual project model with role, value, visual alt text, and verified visual labels.
2. Build a light-first static story and four project-specific semantic visuals.
3. Add the 320vh desktop sticky scene, progress rail, connected card transitions, navigation, and restrained fine-pointer response.
4. Preserve vertical tablet/mobile, dynamic reduced-motion, keyboard, touch, and no-JavaScript behavior.
5. Run content tests, production gates, six-width EN/VI browser QA, and bundle measurement.

### Code

- Four featured stories prioritize problem, demonstrated value, and verified role before technology.
- Only DevMentor renders a live-demo action because it is the sole audited public demo.
- Desktop progress controls are buttons with localized labels and synchronized `aria-current`; inactive card links leave the tab order.
- Motion uses `useScroll`, `useTransform`, `useSpring`, `useReducedMotion`, and `MotionConfig reducedMotion="user"`.

### Self Review

- No work history, customer, usage, outcome, metric, screenshot, or deployment claim was added.
- Visual QA passed for EN/VI at 360, 390, 768, 1024, 1440, and 1920px with no root overflow, undersized controls, console errors, or runtime exceptions.
- Keyboard project navigation, touch navigation, theme switching, reduced motion, 200% effective scale, and the no-JavaScript fallback passed.
- All gates passed: lint, strict typecheck, 10 tests, and a 24-route production build.
- A six-perspective follow-up removed repeated summary copy, made project buttons activation-based instead of focus-triggered, reduced sticky travel and reflection strength, raised micro-label contrast, and replaced the clipped Helpdesk flow with a responsive grid.
- Cache-disabled local production transfer measured 179,906 bytes of JavaScript and 10,351 bytes of CSS after the follow-up. No Lighthouse score is claimed.
- Follow-up frame diagnostics recorded p95 13.8ms, max 27.9ms, and zero frames over 50ms while moving across the story; active state changed only at the three boundaries between four projects.

### Possible Improvements

- Add owner-approved gallery assets and complete the full case-study detail template before closing Phase 4.
- Extend the same motion policy to later hero, experience, and timeline sections only after their verified content exists.
- Run formal Lighthouse and automated contrast/accessibility tooling in Phase 7.
