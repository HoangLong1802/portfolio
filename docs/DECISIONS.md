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
