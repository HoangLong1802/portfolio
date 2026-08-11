<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository Rules

## Working Rules

- Read `docs/PORTFOLIO_PLAN.md` before portfolio work and keep detailed phase instructions there.
- Inspect the current repository before changing files. Plan complex changes before implementation.
- Use the existing Next.js App Router structure under `src/app`; keep reusable UI in `src/components`, typed content/config in `src/config` and `src/types`, and shared utilities in `src/lib`.
- Use TypeScript strictly. Do not use `any`.
- Keep portfolio content separate from presentation components.
- Do not add dependencies until the need is explained and the package is verified as actively maintained.
- Preserve user changes. Avoid destructive Git commands unless the user explicitly requests them.

## Truthful Portfolio Content

- This portfolio is for Trương Hoàng Long and should position him around Application/Technical Support, automation, customer-facing operations, and full-stack development.
- Do not invent work experience, metrics, production usage, customers, test results, project outcomes, or deployment status.
- Clearly label personal labs, learning projects, simulations, and production work.
- Use metrics only when they match the current CV/source material and keep their context visible.
- Do not present Long as Senior, AI Engineer, or DevOps Engineer unless new verified source material supports it.

## Accessibility And Motion

- Prefer semantic HTML, correct landmarks/headings, keyboard-accessible controls, visible focus states, sufficient contrast, and responsive layouts.
- Verify mobile, tablet, and desktop behavior for user-facing changes.
- All non-essential motion must respect `prefers-reduced-motion`.
- Avoid heavy WebGL/3D, autoplay media, custom cursors, scroll hijacking, and animation that blocks content or hurts mobile performance.

## Verification

- After every implementation task, run the relevant checks:
  - `npm run lint`
  - `npm run typecheck`
  - `npm run test` once a test script exists
  - `npm run build`
- The current `package.json` does not define a test script. Do not claim tests passed until one exists; document this limitation or add focused tests when behavior changes.
- If any check cannot run or fails, report the exact command and reason.

## Security And Secrets

- Never commit secrets, tokens, passwords, private keys, or `.env` files.
- Only client-safe values may use `NEXT_PUBLIC_*`.
- Do not place private secrets in examples, docs, screenshots, prompt excerpts, or generated static assets.
- Review diffs for accidental secrets, unsupported claims, dead code, and regressions before finishing.

## Definition Of Done

- The requested behavior is implemented and scoped to the current task.
- Content claims are truthful, sourced, and correctly labeled.
- Mobile, tablet, desktop, keyboard navigation, and reduced-motion behavior work.
- Lint, TypeScript checks, tests when configured, and production build pass or any limitation is clearly reported.
- Documentation is updated when setup, scripts, content editing, or behavior changes.
- The final response lists changed files, verification commands and results, remaining limitations, and the next recommended action.
