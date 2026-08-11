# Phase 2 Visual QA

Date: 2026-08-12

## Environment

- Production build served locally with `npm run start`.
- Microsoft Edge 151.0.4129.72 in headless mode.
- Chrome DevTools Protocol device metrics were used so the CSS viewport matched each target width exactly.
- English `/` and Vietnamese `/vi` were checked from the same production build.

## Responsive Results

| CSS viewport | English | Vietnamese | Navigation mode | Horizontal overflow |
| --- | --- | --- | --- | --- |
| 360px | Pass | Pass | Mobile menu | None |
| 768px | Pass | Pass | Desktop navigation | None |
| 1024px | Pass | Pass | Desktop navigation | None |
| 1440px | Pass | Pass | Desktop navigation | None |

For every route and width, the measured document and body scroll widths were less than or equal to the document client width. The 15px difference between `innerWidth` and `clientWidth` was the visible vertical scrollbar, not horizontal overflow.

## Interaction And Accessibility Results

- The 360px mobile menu opened through trusted Enter-key, mouse, and emulated touch input.
- The focused menu summary remained the active element, showed the global focus ring, and measured 42px by 42px.
- The open menu stayed within the viewport and exposed the language link.
- At 768px and above, desktop navigation and the desktop language switch were visible while the mobile menu was hidden.
- The theme button changed the document theme from dark to light through trusted Enter-key input.
- With `prefers-reduced-motion: reduce`, the media query matched and shell transitions computed to `0.01ms`.
- A 1440px physical viewport at a 2x effective scale (720 CSS pixels, device pixel ratio 2) retained a 16px base font and had no horizontal overflow. This is the headless-browser equivalent used for the 200% zoom readability check.

## Visual Review

Screenshots were inspected for both languages. Evidence files are generated under ignored `test-results/phase2/`, including the four English widths, the four Vietnamese widths, the open 360px menu, the light theme, and the 200% effective-scale view.

The review found and fixed two issues before sign-off:

- Both route-group root layouts were missing the required global CSS import.
- The tablet header used an implicit second grid row; the 768px layout now uses an explicit three-column header.

No remaining Phase 2 visual blocker was found.
