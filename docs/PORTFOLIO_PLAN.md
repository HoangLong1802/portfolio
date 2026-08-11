# Portfolio Trương Hoàng Long — Codex Build Plan & Phased Prompts

## 1. Kết quả cần xây dựng

Xây một portfolio song ngữ Việt–Anh có thể deploy thật, giúp HR hiểu trong 30–60 giây rằng Trương Hoàng Long là ứng viên có nền tảng phát triển phần mềm, kinh nghiệm hỗ trợ khách hàng quốc tế và định hướng Application/Technical Support, Customer Success và Operations Automation.

Thông điệp chính:

> I bridge users, systems, and engineering — turning support problems into reliable workflows, automation, and practical software.

Tên hiển thị đề xuất:

> Trương Hoàng Long — Application Support & Automation-Focused Developer

Không nên tự nhận là Senior, AI Engineer hoặc DevOps Engineer. Portfolio phải phân biệt rõ dự án lab, dự án học tập và kinh nghiệm production thực tế.

## 2. Chiến lược nội dung dựa trên CV và GitHub

### Featured case studies

| Ưu tiên | Dự án | Giá trị với HR | Nội dung cần chứng minh |
|---|---|---|---|
| 1 | DevMentor AI (`test_chat_bot`) | Full-stack + AI + bảo mật + deploy | React, FastAPI, OpenAI API, JWT/RBAC, PDF retrieval, assessment, Docker, test và deployment |
| 2 | Helpdesk Lab | Application Support + ITSM + automation | health monitoring, incident lifecycle, n8n, GLPI, Docker, MariaDB, SLA, recovery verification, runbook |
| 3 | Automated IT Asset Inventory | IT Support automation | thu thập hardware/software Windows–Linux, CSV, logging và audit |
| 4 | MERN Jewelry Store (`webbanjewry`) | Nền tảng web developer | React, Node/Express, MongoDB, auth, admin/customer flow, cart/order |

### Secondary projects

- Stock Prediction AI: nhiều mô hình chuỗi thời gian và stacking ensemble; chỉ mô tả những gì có thể chạy hoặc kiểm chứng.
- Educational Platform: React UI, Context API/useReducer, tìm kiếm, lọc, favorites, history, chatbot simulation.
- User Setup Tool: Windows/Linux onboarding automation và CSV audit log.
- SafeVault, Inventory, Blazor và các repo học tập: hiển thị trong “More experiments”, không cạnh tranh diện tích với case study chính.

### Kinh nghiệm cần nổi bật

- Concentrix/Booking.com: hỗ trợ đối tác và khách hàng bằng tiếng Anh qua phone, email và ticket; Pega CRM; điều tra incident; account/configuration; payout/invoice; triage và escalation.
- Chỉ số: khoảng 110+ ticket/tuần, AHT dưới 10 phút, QA 97%, CSAT trên 80%, hỗ trợ khoảng 400+ properties và 800+ customers.
- OPPO Vietnam: PHP/Zend, MySQL, HTML/CSS/JavaScript, Git/GitLab; hỗ trợ website nội bộ, UI và một phần IT helpdesk.
- Education: Information Technology, Van Lang University, 2020–2024; Aptis B2.

Mọi chỉ số phải đặt trong ngữ cảnh và chỉ dùng khi đúng với CV hiện tại.

## 3. Kiến trúc và phong cách đề xuất

### Stack

- Next.js App Router + TypeScript.
- Tailwind CSS cho hệ thống thiết kế.
- Motion for React (`motion/react`) cho animation.
- Lucide React cho icon.
- Nội dung project/timeline lưu trong file TypeScript hoặc JSON có type rõ ràng.
- Không cần database cho MVP.
- Vercel cho preview và production deployment.

Codex phải kiểm tra phiên bản và tài liệu chính thức hiện hành trước khi scaffold; không hard-code số phiên bản từ prompt này.

### Visual direction

Phong cách: “calm technical confidence” — tối, hiện đại, có chiều sâu, giống một control room tinh gọn nhưng vẫn thân thiện với HR.

- Nền navy/charcoal, accent cyan và violet có kiểm soát.
- Typography rõ ràng, khoảng trắng rộng, contrast tốt.
- Subtle grid/noise, gradient glow nhẹ, glass panel ít và có mục đích.
- Không dùng quá nhiều neon, particle, 3D nặng, custom cursor gây khó dùng hoặc loading animation dài.
- Animation phải phục vụ phân cấp thông tin: stagger reveal, shared layout cho project filter/modal, count-up metrics, timeline reveal, hover depth nhẹ.
- Tôn trọng `prefers-reduced-motion`; mobile không được lag.

### Information architecture

1. Sticky navigation: About, Experience, Projects, Skills, Contact, VN/EN, theme.
2. Hero: role, value proposition, CTA “View case studies” và “Download CV”.
3. Proof strip: QA 97%, 110+ tickets/week, CSAT 80%+, Aptis B2.
4. About: câu chuyện kết nối user–system–engineering.
5. Experience timeline: Concentrix và OPPO.
6. Featured case studies: 4 dự án chính.
7. Case-study detail route `/projects/[slug]`: Problem → Role → Approach → Architecture → Key decisions → Result → Limitations → Next steps.
8. Skills theo năng lực: Support & Operations; Development; Automation/DevOps; Communication.
9. “Built with Codex” engineering journal: cách lập kế hoạch, kiểm thử, review và các quyết định — không tuyên bố Codex là runtime của website.
10. Contact + links + downloadable CV.

## 4. Cách sử dụng bộ prompt

1. Tạo repo mới, ví dụ `hoanglong-portfolio`, rồi mở đúng thư mục repo trong VS Code/Codex.
2. Chạy Phase 0 trong Plan mode. Không cho Codex code trước khi audit xong.
3. Chạy từng phase trong một chat riêng.
4. Sau mỗi phase, đọc summary, xem diff, chạy website và commit khi đạt tiêu chí.
5. Nếu phase trước chưa pass lint/typecheck/build thì chưa chuyển phase tiếp theo.
6. Không đưa OpenAI API key, token, mật khẩu hoặc `.env` lên GitHub.

## 5. Prompt nền — chạy đầu tiên để tạo `AGENTS.md`

```text
You are the lead engineer and product designer for Trương Hoàng Long's portfolio repository.

Goal:
Create a production-ready bilingual portfolio that helps HR and technical interviewers quickly understand Long's strengths in Application/Technical Support, automation, customer-facing operations, and full-stack development.

Working agreements:
- Inspect the repository before making changes.
- Plan complex work before implementation.
- Never invent work experience, metrics, production usage, customers, test results, or project outcomes.
- Clearly label personal labs, learning projects, simulations, and production work.
- Use TypeScript and keep content separate from presentation components.
- Prefer semantic HTML, keyboard accessibility, visible focus states, sufficient color contrast, and responsive design.
- All non-essential motion must respect prefers-reduced-motion.
- Do not expose secrets. Only client-safe environment variables may use NEXT_PUBLIC_*.
- Do not add a dependency until you explain why it is needed and verify it is actively maintained.
- Avoid heavy WebGL/3D, autoplay media, custom cursors, scroll hijacking, and animation that blocks content.
- Preserve user changes and avoid destructive Git commands.
- After every implementation task, run the relevant lint, typecheck, tests, and production build.
- Review the final diff for regressions, unsupported claims, accessibility issues, dead code, and accidental secrets.

Definition of done:
- The requested behavior is implemented.
- Mobile, tablet, and desktop layouts work.
- Keyboard navigation and reduced-motion behavior work.
- Lint, TypeScript checks, tests, and production build pass.
- Documentation is updated when setup or behavior changes.
- The final response lists changed files, verification commands and results, remaining limitations, and the next recommended action.

First task:
Create a concise repository-level AGENTS.md containing these durable rules, adapted to the actual scripts and directory structure in this repository. Do not implement the portfolio yet. Show the proposed AGENTS.md and explain any repository-specific additions.
```

## 6. Phase 0 — Audit, positioning và execution plan

```text
Work in Plan mode. Do not write application code yet.

Goal:
Produce an evidence-based product and engineering plan for Trương Hoàng Long's bilingual portfolio.

Context:
- GitHub profile: https://github.com/HoangLong1802
- Target roles: Application Support, Technical/Product Support, IT Helpdesk, Customer Success for SaaS, and Operations Automation.
- Priority projects: test_chat_bot (DevMentor AI), Helpdesk-Lab, Automated-IT-Asset-Inventory, webbanjewry, stock_prediction_AI, Educational_platform, and user_setup_tool.
- Existing old static portfolio repos may be used only as reference. Recommend whether to start a clean repo or migrate reusable content.
- CV facts and metrics will be provided separately. If a fact is missing, mark it TODO instead of inventing it.

Tasks:
1. Inspect the current repository and the public GitHub repos above. Read their README, manifests, architecture, tests and deployment files where available.
2. Build a verified project inventory: problem, audience, stack, notable implementation, runnable status, deployment/demo link, limitations, and evidence file paths.
3. Identify inconsistent or unsupported README claims that must not appear in the portfolio until verified.
4. Define the primary positioning, two backup taglines, HR persona, technical interviewer persona, and the 30-second information path.
5. Propose the sitemap, content model, component architecture, route structure, design tokens, motion rules, test strategy and deployment approach.
6. Break implementation into small phases with dependencies, risks, acceptance criteria and exact verification commands.
7. List all missing user assets or facts as a short checklist: current CV PDF, professional photo decision, email, LinkedIn, exact dates, project screenshots and verified live URLs.

Done when:
- No code is changed.
- Claims are tied to repository evidence or marked unverified/TODO.
- The plan is concrete enough for another engineer to implement without guessing.
- End by asking only the blocking questions; use sensible placeholders for non-blocking gaps.
```

## 7. Phase 1 — Scaffold, content model và quality gates

```text
Implement Phase 1 from the approved plan.

Goal:
Create a clean, production-ready foundation for the portfolio without spending time on decorative animation yet.

Requirements:
- Use current stable Next.js App Router and TypeScript, following official documentation.
- Configure Tailwind CSS using the current recommended setup.
- Create typed content models for profile, metrics, experience, skills, projects, links, and localized text.
- Create VN and EN content sources with English as the default unless the approved plan says otherwise.
- Add routes for home and project detail pages.
- Add reusable layout primitives and semantic page sections.
- Add scripts for lint, typecheck, test and production build.
- Add a safe `.env.example`, `.gitignore`, README quick start and a decision log.
- Do not add an OpenAI API key or AI runtime feature.

Content rules:
- Use verified facts only.
- Add TODO markers for missing CV, screenshots, dates, email or live URLs.
- Mark Helpdesk Lab as a tested portfolio lab, not production experience.

Done when:
- A minimal unstyled site renders every planned section and project route from typed data.
- Invalid project slugs return a proper not-found page.
- Lint, typecheck, tests and production build pass.
- Report the exact commands and results.
```

## 8. Phase 2 — Visual system và responsive shell

```text
Implement the approved visual direction for the portfolio.

Goal:
Create a distinctive but professional interface that feels like a calm technical control room and remains easy for HR to scan.

Design requirements:
- Use a navy/charcoal base, restrained cyan/violet accents, strong typography and generous spacing.
- Define design tokens for colors, typography, spacing, radius, shadows, borders and motion durations.
- Build a sticky responsive navigation, language switcher, theme control, footer and reusable section heading.
- Use subtle grid/noise/gradient effects built with CSS where possible.
- Create accessible buttons, links, cards, badges and focus states.
- Avoid generic template copy, excessive glassmorphism, neon overload and decorative elements that reduce readability.
- Do not add complex motion yet; only simple CSS transitions.

Responsive acceptance:
- Verify at 360px, 768px, 1024px and 1440px widths.
- No horizontal overflow.
- Navigation works with mouse, keyboard and touch.
- Text remains readable at browser zoom 200%.

Done when:
- The complete shell and design system are implemented.
- Add visual screenshots or a concise visual QA report for the four target widths.
- Lint, typecheck, tests and build pass.
```

## 9. Phase 3 — Hero, experience, metrics, skills và contact

```text
Build the core recruiter-facing content sections.

Goal:
Let an HR reviewer understand Long's positioning, evidence, experience and contact options in under 60 seconds.

Implement:
- Hero with name, role, concise value proposition, primary CTA to case studies, secondary CTA to download the correct CV, GitHub and LinkedIn links.
- Proof metrics with context and accessible labels: QA 97%, 110+ tickets/week, CSAT 80%+, Aptis B2. Keep values in content data, not component markup.
- About section connecting customer support, application troubleshooting, development and automation.
- Experience timeline for Concentrix/Booking.com and OPPO Vietnam using truthful responsibilities and technologies.
- Skills grouped by capability rather than a logo wall.
- Education/certification section.
- Contact section with mailto and social links; do not create a backend contact form unless requested.
- Complete VN and EN copy. Translation should sound natural, not literal.

Content safeguards:
- Do not rename Customer Service employment into an unverified Technical Support title. It is acceptable to describe technical-support responsibilities inside the role.
- Explain every metric's context.
- No percentage animation may hide the actual text from screen readers.

Done when:
- Both languages contain equivalent verified information.
- All links and CV download behavior are tested.
- Sections are readable with JavaScript disabled where compatible with the framework.
- Checks and build pass.
```

## 10. Phase 4 — Featured project cards và case-study pages

```text
Build evidence-rich project case studies using the repository audit.

Goal:
Turn GitHub repositories into concise demonstrations of problem solving instead of a list of technologies.

Featured order:
1. DevMentor AI
2. Helpdesk Lab
3. Automated IT Asset Inventory
4. MERN Jewelry Store

Secondary projects:
Stock Prediction AI, Educational Platform and User Setup Tool.

For every featured project implement:
- Card: problem, one-line outcome/capability, role, 4–6 relevant technologies, evidence links and status badge.
- Detail page: Overview, Problem, My role, System/flow, Key decisions, Challenges, Verification/demo, Limitations, What I would improve next.
- GitHub link and live demo only when verified.
- Screenshot gallery with optimized images and useful alt text. Use polished placeholders when assets are missing; never fabricate a screenshot of a working product.
- A small architecture diagram using semantic HTML/CSS or an optimized static SVG committed to the repo. Do not use an imprecise AI-generated technical diagram.

Specific truth constraints:
- DevMentor may mention React, FastAPI, OpenAI API, JWT/RBAC, PDF context retrieval, assessment monitoring, Docker and tests only where repository evidence exists.
- Helpdesk Lab must say it is a tested local portfolio lab. Clearly state the GLPI API limitation and local fallback if still true.
- Asset Inventory must separate Windows PowerShell and Linux Python behavior.
- Stock Prediction must not claim superior accuracy without reproducible evaluation evidence.
- Educational Platform must label simulated/mock AI behavior if it is not connected to a real model.

Done when:
- Every claim has an evidence source in the repository audit.
- Broken or missing demos are labelled honestly.
- Project filters and detail routes work in both languages.
- Tests cover project data and route behavior.
- All checks pass.
```

## 11. Phase 5 — Motion và memorable interactions

```text
Add a coherent motion system after the static experience is complete.

Goal:
Make the portfolio memorable without hurting scanning, accessibility or performance.

Use Motion for React with these rules:
- Add a site-wide reduced-motion policy that respects the user's device preference.
- Use LazyMotion or another documented lightweight loading strategy where appropriate.
- Hero: subtle text/visual stagger, no long intro gate.
- Section reveal: opacity plus small Y movement, once per section.
- Metrics: count-up only when visible; the final value must remain accessible and immediately understandable.
- Project cards: restrained hover depth and image reveal.
- Project filter/detail: shared layout animation where it improves continuity.
- Experience timeline: progressive reveal tied to viewport, with a static reduced-motion alternative.
- Mobile: simplify or remove parallax and cursor-follow effects.

Performance constraints:
- Animate transform and opacity whenever possible.
- Avoid scroll-jacking, infinite high-CPU loops, large particle systems and layout thrashing.
- Do not delay First Contentful Paint for animation.

Done when:
- All interactions work with prefers-reduced-motion enabled.
- Keyboard focus is never lost during animated layout changes.
- No hydration warnings or console errors.
- Compare a production build before and after and report meaningful bundle/performance impact.
- Checks and build pass.
```

## 12. Phase 6 — “Built with Codex” engineering journal

```text
Add a transparent Built with Codex section and engineering journal.

Goal:
Show that Codex was used as an engineering collaborator while Long retained responsibility for requirements, verification and decisions.

Implement:
- A concise homepage section linking to `/process`.
- A process page with: project goal, phased workflow, how AGENTS.md constrained the agent, examples of plan → implementation → tests → review, key human decisions, mistakes found during review, and lessons learned.
- A timeline sourced from a small typed data file, not invented Git history.
- Optional sanitized prompt excerpts; remove secrets, local paths and private information.
- Link to relevant commits only when those commits exist.

Copy guidance:
- Use “Built with Codex as a coding collaborator” rather than “Codex built everything.”
- Explain that Codex is the development workflow tool, not a runtime dependency of the portfolio.
- Do not display fake productivity numbers or fake review findings.

Done when:
- The section is understandable to a non-technical HR reviewer.
- The process page provides enough engineering detail for a technical interviewer.
- All claims match actual repository history or are clearly described as methodology.
- Checks pass.
```

## 13. Phase 7 — SEO, accessibility, performance và testing

```text
Perform the production quality pass.

Goal:
Make the portfolio discoverable, accessible, fast and reliable before deployment.

Tasks:
- Add accurate metadata, canonical URL placeholder, Open Graph/Twitter metadata, sitemap, robots and structured data for Person and CreativeWork/SoftwareSourceCode where valid.
- Optimize fonts and images; prevent layout shift.
- Add a custom 404 page and robust empty/error states.
- Add automated tests for localization, project data integrity, navigation and critical interactions.
- Add Playwright smoke tests for home, language switch, featured project route, CV link and mobile navigation if practical.
- Audit keyboard use, focus order, headings, landmarks, alt text, form labels, contrast and reduced motion.
- Run Lighthouse against the production build and fix material issues. Do not fake scores.
- Scan tracked files and final diff for API keys, tokens, passwords, `.env` files and personal data that should not be public.
- Review dependencies and remove unused packages.

Target, not a claim:
- Lighthouse Performance, Accessibility, Best Practices and SEO should aim for 90+ on representative mobile runs, while reporting actual results and environment.

Done when:
- Automated checks pass.
- Actual audit results and remaining limitations are documented.
- No known secret is tracked.
- Production build runs locally without console errors.
```

## 14. Phase 8 — Deployment lên Vercel

```text
Prepare and deploy the approved production build to Vercel.

Goal:
Create a reproducible preview/production deployment with correct metadata and no exposed secrets.

Pre-deployment:
- Inspect the repo's current build scripts and Vercel configuration.
- Confirm the production build passes locally.
- Confirm all public URLs, CV file, email, LinkedIn, GitHub and project demos.
- Set the canonical site URL through a documented environment variable or config.
- Do not put private secrets in NEXT_PUBLIC_* variables.

Deployment tasks:
- Add only necessary Vercel configuration; prefer framework defaults.
- Document Git-based deployment and local CLI deployment options.
- Create a preview deployment first, smoke-test it, then promote/deploy production only after preview verification.
- Test direct navigation to every dynamic project route, refresh behavior, 404, sitemap, robots, social image, CV download and both languages.
- Update README with final URL, setup, build, tests, content editing and deployment instructions.

Done when:
- The returned deployment status confirms success.
- The production URL loads on desktop and mobile.
- Critical route smoke tests pass against the deployed URL.
- Final handoff includes the URL, commit, checks, known limitations and rollback approach.

If deployment requires account authorization or a user decision, stop at that exact point and provide the shortest safe instruction. Never claim deployment succeeded without confirmation.
```

## 15. Phase 9 — Final review dành cho HR và technical interviewer

```text
Review the finished portfolio from three independent perspectives. Do not change code during the first review pass.

Perspective A — HR recruiter:
- Can I understand the candidate's target role and strongest proof in 30 seconds?
- Are job titles and metrics truthful and easy to understand?
- Are contact and CV actions obvious?

Perspective B — Application Support manager:
- Do the case studies demonstrate troubleshooting, incident handling, documentation, automation, communication and operational thinking?
- Are lab limitations disclosed?

Perspective C — Senior frontend engineer:
- Is the architecture maintainable?
- Are motion, accessibility, performance, TypeScript, testing and security handled well?

Return:
1. Findings ordered by severity with file references.
2. Unsupported or ambiguous claims.
3. Broken UX/content paths.
4. The smallest high-impact fix plan.

After I approve the fix plan, implement it, rerun all checks, review the diff and prepare a release summary.
```

## 16. Optional Phase — AI Recruiter Assistant

Chỉ làm sau khi portfolio tĩnh đã deploy ổn định. Tính năng này dùng OpenAI API, không gọi là “Codex bên trong website”.

```text
Plan an optional portfolio assistant that answers recruiter questions only from approved CV and project content.

Before coding:
- Read current official OpenAI API guidance.
- Propose a minimal server-side architecture, cost controls, abuse prevention, privacy behavior, fallback UX and evaluation set.
- Never expose the API key to the browser.
- The assistant must say when information is unavailable and must not invent experience.
- Limit scope to Long's approved portfolio knowledge. Do not accept arbitrary document upload in the MVP.
- Add rate limiting, input length limits, timeout handling and a visible non-AI fallback to project navigation/contact.
- Create at least 20 evaluation questions covering CV facts, project details, unsupported claims, prompt injection attempts and unknown information.

Do not implement until the plan, expected monthly usage and operating cost are approved.
```

## 17. Prompt sửa lỗi nhanh sau mỗi phase

```text
Inspect the current repository and diagnose the failing behavior before editing.

Reproduce the issue, identify the root cause with file references, then implement the smallest maintainable fix. Preserve existing user changes. Add or update a regression test where practical. Run the relevant lint, typecheck, test and production build commands. Review the diff for regressions, accessibility issues, unsupported content claims and secrets. Report the root cause, changed files, verification results and any remaining limitation.
```

## 18. Prompt review trước mỗi commit

```text
Review all uncommitted changes against AGENTS.md and the current phase acceptance criteria. Focus on bugs, regressions, security, accessibility, performance, responsive behavior, unsupported portfolio claims and missing tests. List findings first by severity with file references. If no material finding remains, run the required checks and propose a concise conventional commit message. Do not commit unless I explicitly ask.
```

## 19. Checklist tài sản bạn cần chuẩn bị

- CV PDF tiếng Anh; CV tiếng Việt nếu muốn nút chuyển đổi.
- Ảnh chân dung chuyên nghiệp hoặc quyết định dùng avatar chữ/abstract graphic.
- Email và LinkedIn chính xác.
- Ngày bắt đầu/kết thúc chính xác của Concentrix và OPPO.
- 1–3 screenshot thật cho mỗi featured project.
- URL demo đã kiểm tra cho DevMentor AI và các dự án khác.
- Một domain tùy chọn, ví dụ `truonghoanglong.dev` hoặc tên tương tự.
- Xác nhận những chỉ số KPI nào được phép công khai.

## 20. Nguồn hướng dẫn kỹ thuật

- Codex prompts nên nêu Goal, Context, Constraints và Done when; tác vụ phức tạp nên plan trước, kiểm thử và review trước khi kết thúc: https://learn.chatgpt.com/guides/best-practices
- Codex tự đọc hướng dẫn repo trong `AGENTS.md`: https://learn.chatgpt.com/docs/agent-configuration/agents-md
- Motion for React hỗ trợ reduced-motion và có chiến lược giảm bundle bằng LazyMotion: https://motion.dev/docs/react-accessibility và https://motion.dev/docs/react-lazy-motion
- Vercel hỗ trợ triển khai Next.js với cấu hình tối thiểu: https://vercel.com/docs/frameworks/full-stack/nextjs
