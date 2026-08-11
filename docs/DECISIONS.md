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
