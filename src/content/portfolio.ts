import type { PortfolioContent, Project } from "@/types/portfolio";

const githubBase = "https://github.com/HoangLong1802";

const englishProjects = [
  {
    slug: "devmentor-ai",
    title: "DevMentor AI",
    category: "full-stack-learning",
    categoryLabel: "Full-stack learning project",
    maturityLabel: "Public demo checked on 2026-08-11",
    summary:
      "A learning project that combines a React client, FastAPI backend, document parsing, JWT/RBAC concepts, and OpenAI-compatible provider configuration.",
    problem:
      "Explore how an AI-assisted mentoring product could combine chat, uploaded learning materials, authentication, and deployment boundaries.",
    story: {
      role:
        "Built the learning project's React/FastAPI boundary, document pipeline, and supporting deployment setup.",
      value:
        "Demonstrates how document-grounded mentoring, protected workflows, and assessment state can fit within one reproducible full-stack system.",
      visualAlt:
        "Product visual based on verified DevMentor features: PDF context, guided conversation, assessment scoring, and protected JWT/RBAC routes.",
      visualLabels: ["PDF context", "Mentor chat", "Assessment", "JWT / RBAC"],
    },
    contributions: [
      "Built a React and Vite client with a FastAPI backend boundary.",
      "Connected document ingestion experiments with PyPDF2 and provider-based AI configuration.",
      "Added Docker Compose and Nginx deployment notes for a reproducible local setup.",
      "Kept backend tests in the source repository as evidence of expected behavior.",
    ],
    techStack: ["React", "Vite", "FastAPI", "Python", "JWT", "RBAC", "Docker", "Nginx"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/test_chat_bot`,
        note: "README, deployment notes, backend requirements, and tests were audited in Phase 0.",
      },
      {
        label: "Public demo",
        href: "https://test-chat-bot-iota.vercel.app",
        note: "The URL returned HTTP 200 during the 2026-08-11 local audit.",
      },
    ],
    limitations: [
      "No verified real-world user base, hardened production authentication, or owner-approved screenshots yet.",
      "AI providers require private API keys and must not be exposed through public environment variables.",
    ],
  },
  {
    slug: "helpdesk-lab",
    title: "Helpdesk Lab",
    category: "portfolio-lab",
    categoryLabel: "Tested portfolio lab",
    maturityLabel: "Local Docker lab",
    summary:
      "A local support-systems lab using GLPI, MariaDB, Nginx, n8n, and shell automation to model helpdesk workflows.",
    problem:
      "Create a reproducible helpdesk environment for practicing ticketing, service integration, automation, and operational release checks.",
    story: {
      role:
        "Built and documented the local Docker lab, support workflows, release checks, and verification automation.",
      value:
        "Demonstrates incident thinking from health signal through escalation and three-check recovery verification.",
      visualAlt:
        "Product visual based on verified Helpdesk Lab features: application health, a P2 incident, n8n workflow automation, and three-check recovery.",
      visualLabels: ["Health signal", "Incident P2", "n8n workflow", "3-check recovery"],
    },
    contributions: [
      "Composed GLPI, MariaDB, phpMyAdmin, n8n, and web services with Docker Compose.",
      "Documented architecture, release checks, and support workflow boundaries.",
      "Added PowerShell and Bash automation around local lab setup and verification.",
      "Recorded the GLPI API integration limitation instead of claiming complete production automation.",
    ],
    techStack: ["Docker Compose", "GLPI", "MariaDB", "Nginx", "n8n", "PowerShell", "Bash"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/Helpdesk-Lab`,
        note: "README, architecture docs, compose file, and release checklist were audited in Phase 0.",
      },
    ],
    limitations: [
      "GLPI REST ticket creation is not complete; the lab documents a local fallback that shares the database.",
      "This is a portfolio lab, not evidence of a deployed company helpdesk platform.",
    ],
  },
  {
    slug: "automated-it-asset-inventory",
    title: "Automated IT Asset Inventory",
    category: "automation-learning",
    categoryLabel: "Automation learning project",
    maturityLabel: "Local scripts",
    summary:
      "Cross-platform scripts for collecting basic IT asset data into local files for support and inventory practice.",
    problem:
      "Practice gathering machine inventory data across Windows and Linux without introducing a centralized production system.",
    story: {
      role:
        "Authored separate Windows PowerShell and Linux Python/Bash collection paths with inspectable local output.",
      value:
        "Demonstrates practical cross-platform support automation without overstating it as centralized asset management.",
      visualAlt:
        "Product visual based on verified asset inventory features: a device scan, Windows and Linux collectors, and CSV audit output.",
      visualLabels: ["Device scan", "Windows", "Linux", "CSV + logs"],
    },
    contributions: [
      "Wrote PowerShell collection scripts for Windows environments.",
      "Wrote Python and Bash collection scripts for Linux environments.",
      "Kept output local through CSV and log files for easy inspection.",
    ],
    techStack: ["PowerShell", "Python", "Bash", "CSV", "Windows", "Linux"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/Automated-IT-Asset-Inventory`,
        note: "Windows and Linux scripts plus README were audited in Phase 0.",
      },
    ],
    limitations: [
      "No automated tests or centralized inventory service were found in the audit.",
      "The project should not be described as company-scale asset management.",
    ],
  },
  {
    slug: "webbanjewry",
    title: "MERN Jewelry Store",
    category: "full-stack-learning",
    categoryLabel: "Full-stack learning project",
    maturityLabel: "Source-audited prototype",
    summary:
      "A jewelry commerce learning project with separate React clients and a Node/Express/MongoDB backend.",
    problem:
      "Practice e-commerce flows, authentication, product data, and separate client/server responsibilities.",
    story: {
      role:
        "Structured the learning monorepo across customer/admin React clients and the Node/Express/MongoDB backend.",
      value:
        "Demonstrates authentication, product, cart, and order-flow boundaries across separate client and server applications.",
      visualAlt:
        "Product visual based on verified jewelry-store features: product discovery, cart flow, order APIs, and separate customer/admin clients.",
      visualLabels: ["Product discovery", "Cart flow", "Order API", "Customer / admin"],
    },
    contributions: [
      "Structured separate frontend and backend packages.",
      "Used Express, MongoDB, Mongoose, JWT, and bcrypt for backend learning.",
      "Modeled user, product, cart, and order API areas in the server code.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/webbanjewry`,
        note: "README, package files, API routes, and models were audited in Phase 0.",
      },
    ],
    limitations: [
      "The server test script intentionally exits with no tests.",
      "Default admin credentials in the source repository are not production-safe and must not be reused.",
      "No verified live demo was found during the audit.",
    ],
  },
  {
    slug: "stock-prediction-ai",
    title: "Stock Prediction AI",
    category: "data-science-learning",
    categoryLabel: "Data science learning project",
    maturityLabel: "Experiment repository",
    summary:
      "A learning repository exploring stock prediction workflows with classical models and neural-network approaches.",
    problem:
      "Practice data preparation, model training, and saved experiment artifacts without presenting financial advice.",
    contributions: [
      "Explored Python data-science workflows with NumPy, pandas, scikit-learn, PyTorch, and XGBoost.",
      "Organized multiple model approaches and saved artifacts for later inspection.",
      "Identified missing reproducible evaluation evidence during Phase 0.",
    ],
    techStack: ["Python", "NumPy", "pandas", "scikit-learn", "PyTorch", "XGBoost"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/stock_prediction_AI`,
        note: "README, requirements, and model artifact references were audited in Phase 0.",
      },
    ],
    limitations: [
      "No reproducible test or evaluation artifact was found to support accuracy claims.",
      "This project must not be framed as investment advice or proof of superior prediction performance.",
    ],
  },
  {
    slug: "educational-platform",
    title: "Educational Platform",
    category: "simulation-learning",
    categoryLabel: "Simulation learning project",
    maturityLabel: "Mock-service prototype",
    summary:
      "A React learning platform prototype with context state management, Bootstrap UI, and simulated AI behavior.",
    problem:
      "Practice front-end product flows for education software while using mock services instead of production AI systems.",
    contributions: [
      "Built React flows with Context and useReducer state management.",
      "Used Bootstrap components for fast learning-interface prototyping.",
      "Kept AI behavior framed as simulated mock-service behavior.",
    ],
    techStack: ["React", "Bootstrap", "Context API", "useReducer", "Mock services"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/Educational_platform`,
        note: "README, package file, and mock-service implementation were audited in Phase 0.",
      },
    ],
    limitations: [
      "AI behavior is simulated and must not be described as a production AI tutor.",
      "The audited source repository contains a committed .env file, which is a security caution and not a pattern to copy.",
    ],
  },
  {
    slug: "user-setup-tool",
    title: "User Setup Tool",
    category: "automation-learning",
    categoryLabel: "Automation learning project",
    maturityLabel: "Privileged local scripts",
    summary:
      "A small set of Python, Bash, and Batch scripts for practicing local user setup automation.",
    problem:
      "Learn support automation patterns around local account creation, logging, and cross-platform scripting.",
    contributions: [
      "Wrote Python, Bash, and Batch variants for local user setup practice.",
      "Included logging behavior for basic operational visibility.",
      "Recorded the privileged nature of the scripts as a usage constraint.",
    ],
    techStack: ["Python", "Bash", "Batch", "Windows", "Linux"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/user_setup_tool`,
        note: "README and script files were audited in Phase 0.",
      },
    ],
    limitations: [
      "Privileged local user-creation scripts were not run during the audit.",
      "No automated tests were found, and the project should not be framed as company onboarding automation.",
    ],
  },
] as const satisfies readonly Project[];

const vietnameseProjects = [
  {
    ...englishProjects[0],
    categoryLabel: "Dự án học full-stack",
    maturityLabel: "Demo công khai kiểm tra ngày 2026-08-11",
    summary:
      "Dự án học tập kết hợp React, FastAPI, xử lý tài liệu, khái niệm JWT/RBAC và cấu hình nhà cung cấp AI tương thích OpenAI.",
    problem:
      "Khám phá cách một sản phẩm cố vấn học tập có AI có thể kết hợp chat, tài liệu tải lên, xác thực và ranh giới triển khai.",
    story: {
      role:
        "Xây dựng ranh giới React/FastAPI, pipeline tài liệu và cấu hình triển khai hỗ trợ cho dự án học tập.",
      value:
        "Thể hiện cách mentoring dựa trên tài liệu, workflow được bảo vệ và trạng thái assessment kết hợp trong một hệ thống full-stack có thể tái lập.",
      visualAlt:
        "Minh họa sản phẩm dựa trên tính năng DevMentor đã xác minh: ngữ cảnh PDF, hội thoại hướng dẫn, assessment và route JWT/RBAC được bảo vệ.",
      visualLabels: ["Ngữ cảnh PDF", "Mentor chat", "Assessment", "JWT / RBAC"],
    },
    contributions: [
      "Xây dựng client React/Vite cùng ranh giới backend FastAPI.",
      "Thử nghiệm xử lý tài liệu bằng PyPDF2 và cấu hình AI theo nhà cung cấp.",
      "Thêm Docker Compose và ghi chú Nginx để tái tạo môi trường cục bộ.",
      "Giữ các bài test backend trong repository làm bằng chứng hành vi mong đợi.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/test_chat_bot`,
        note: "README, ghi chú triển khai, requirements backend và test đã được audit ở Phase 0.",
      },
      {
        label: "Demo công khai",
        href: "https://test-chat-bot-iota.vercel.app",
        note: "URL trả HTTP 200 trong audit cục bộ ngày 2026-08-11.",
      },
    ],
    limitations: [
      "Chưa có bằng chứng người dùng thực tế, xác thực production đã harden, hoặc screenshot được duyệt.",
      "Các nhà cung cấp AI cần API key riêng và không được đưa vào biến môi trường public.",
    ],
  },
  {
    ...englishProjects[1],
    categoryLabel: "Portfolio lab đã kiểm thử",
    maturityLabel: "Docker lab cục bộ",
    summary:
      "Lab hệ thống support cục bộ dùng GLPI, MariaDB, Nginx, n8n và shell automation để mô phỏng workflow helpdesk.",
    problem:
      "Tạo môi trường helpdesk có thể tái lập để luyện ticketing, tích hợp dịch vụ, automation và release check vận hành.",
    story: {
      role:
        "Xây dựng và tài liệu hóa Docker lab cục bộ, support workflow, release check và verification automation.",
      value:
        "Thể hiện tư duy incident từ health signal qua escalation đến xác minh phục hồi sau ba lần kiểm tra.",
      visualAlt:
        "Minh họa sản phẩm dựa trên tính năng Helpdesk Lab đã xác minh: health ứng dụng, incident P2, n8n workflow và phục hồi ba lần kiểm tra.",
      visualLabels: ["Health signal", "Incident P2", "n8n workflow", "Phục hồi 3 bước"],
    },
    contributions: [
      "Compose GLPI, MariaDB, phpMyAdmin, n8n và web services bằng Docker Compose.",
      "Ghi tài liệu architecture, release checks và ranh giới workflow support.",
      "Thêm PowerShell và Bash automation cho thiết lập và kiểm tra lab cục bộ.",
      "Ghi rõ giới hạn tích hợp GLPI API thay vì tuyên bố automation production hoàn chỉnh.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/Helpdesk-Lab`,
        note: "README, tài liệu architecture, compose file và release checklist đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Tạo ticket qua GLPI REST chưa hoàn chỉnh; lab ghi rõ local fallback dùng chung database.",
      "Đây là portfolio lab, không phải bằng chứng về nền tảng helpdesk công ty đã triển khai.",
    ],
  },
  {
    ...englishProjects[2],
    categoryLabel: "Dự án học automation",
    maturityLabel: "Script cục bộ",
    summary:
      "Script đa nền tảng để thu thập dữ liệu IT asset cơ bản vào file cục bộ cho thực hành support và inventory.",
    problem:
      "Luyện thu thập dữ liệu máy trên Windows và Linux mà không giới thiệu một hệ thống production tập trung.",
    story: {
      role:
        "Viết riêng luồng thu thập Windows bằng PowerShell và Linux bằng Python/Bash với output cục bộ có thể kiểm tra.",
      value:
        "Thể hiện support automation đa nền tảng thực tế mà không mô tả quá mức thành asset management tập trung.",
      visualAlt:
        "Minh họa sản phẩm dựa trên tính năng asset inventory đã xác minh: quét thiết bị, collector Windows/Linux và output audit CSV.",
      visualLabels: ["Quét thiết bị", "Windows", "Linux", "CSV + log"],
    },
    contributions: [
      "Viết script PowerShell thu thập dữ liệu cho môi trường Windows.",
      "Viết script Python và Bash thu thập dữ liệu cho môi trường Linux.",
      "Giữ output cục bộ qua CSV và log để dễ kiểm tra.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/Automated-IT-Asset-Inventory`,
        note: "Script Windows/Linux và README đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Audit chưa tìm thấy test tự động hoặc service inventory tập trung.",
      "Dự án không nên được mô tả như hệ thống asset management quy mô công ty.",
    ],
  },
  {
    ...englishProjects[3],
    categoryLabel: "Dự án học full-stack",
    maturityLabel: "Prototype đã audit nguồn",
    summary:
      "Dự án học e-commerce trang sức với các client React riêng và backend Node/Express/MongoDB.",
    problem:
      "Luyện flow e-commerce, xác thực, dữ liệu sản phẩm và trách nhiệm client/server riêng biệt.",
    story: {
      role:
        "Tổ chức monorepo học tập gồm client React cho customer/admin và backend Node/Express/MongoDB.",
      value:
        "Thể hiện ranh giới authentication, product, cart và order flow giữa các ứng dụng client/server riêng biệt.",
      visualAlt:
        "Minh họa sản phẩm dựa trên tính năng jewelry store đã xác minh: khám phá sản phẩm, giỏ hàng, order API và client customer/admin riêng.",
      visualLabels: ["Khám phá sản phẩm", "Giỏ hàng", "Order API", "Customer / admin"],
    },
    contributions: [
      "Tách cấu trúc frontend và backend package.",
      "Dùng Express, MongoDB, Mongoose, JWT và bcrypt cho phần học backend.",
      "Mô hình hóa các vùng API user, product, cart và order trong server code.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/webbanjewry`,
        note: "README, package files, API routes và models đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Script test của server chủ động thoát với trạng thái chưa có test.",
      "Default admin credentials trong repository nguồn không an toàn cho production và không được tái sử dụng.",
      "Audit chưa tìm thấy live demo đã xác minh.",
    ],
  },
  {
    ...englishProjects[4],
    categoryLabel: "Dự án học data science",
    maturityLabel: "Repository thí nghiệm",
    summary:
      "Repository học tập khám phá workflow dự đoán cổ phiếu với mô hình cổ điển và neural network.",
    problem:
      "Luyện chuẩn bị dữ liệu, huấn luyện mô hình và lưu artifact thí nghiệm mà không biến thành lời khuyên tài chính.",
    contributions: [
      "Khám phá workflow data science Python với NumPy, pandas, scikit-learn, PyTorch và XGBoost.",
      "Tổ chức nhiều hướng mô hình và artifact đã lưu để kiểm tra sau.",
      "Xác định thiếu bằng chứng evaluation có thể tái lập trong Phase 0.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/stock_prediction_AI`,
        note: "README, requirements và tham chiếu model artifact đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Audit chưa tìm thấy test hoặc evaluation artifact có thể tái lập để hỗ trợ claim về accuracy.",
      "Dự án không được trình bày như lời khuyên đầu tư hoặc bằng chứng hiệu năng dự đoán vượt trội.",
    ],
  },
  {
    ...englishProjects[5],
    categoryLabel: "Dự án học simulation",
    maturityLabel: "Prototype dùng mock service",
    summary:
      "Prototype nền tảng học tập bằng React với Context state management, Bootstrap UI và hành vi AI mô phỏng.",
    problem:
      "Luyện flow frontend cho education software trong khi dùng mock service thay vì hệ thống AI production.",
    contributions: [
      "Xây dựng flow React với Context và useReducer.",
      "Dùng Bootstrap components để prototype giao diện học tập nhanh.",
      "Giữ hành vi AI ở mức mock service mô phỏng.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/Educational_platform`,
        note: "README, package file và mock-service implementation đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Hành vi AI là mô phỏng và không được mô tả như production AI tutor.",
      "Repository nguồn được audit có file .env đã commit; đây là cảnh báo bảo mật, không phải pattern để sao chép.",
    ],
  },
  {
    ...englishProjects[6],
    categoryLabel: "Dự án học automation",
    maturityLabel: "Script cục bộ cần quyền cao",
    summary:
      "Bộ script Python, Bash và Batch nhỏ để luyện automation thiết lập user cục bộ.",
    problem:
      "Học pattern support automation quanh tạo tài khoản cục bộ, logging và scripting đa nền tảng.",
    contributions: [
      "Viết các biến thể Python, Bash và Batch cho thực hành thiết lập user cục bộ.",
      "Thêm logging để có quan sát vận hành cơ bản.",
      "Ghi nhận bản chất cần quyền cao của script như một giới hạn sử dụng.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/user_setup_tool`,
        note: "README và script files đã được audit ở Phase 0.",
      },
    ],
    limitations: [
      "Các script tạo user cục bộ cần quyền cao không được chạy trong quá trình audit.",
      "Audit chưa tìm thấy test tự động, và dự án không nên được mô tả như automation onboarding quy mô công ty.",
    ],
  },
] as const satisfies readonly Project[];

export const portfolioContent = {
  en: {
    locale: "en",
    lang: "en",
    languageSwitchLabel: "Tiếng Việt",
    site: {
      title: "Truong Hoang Long | Technical Support & IT Helpdesk",
      description:
        "Technical Support and IT Helpdesk portfolio of Truong Hoang Long, featuring L1 support experience, troubleshooting, networking, SQL, and a Helpdesk Lab project.",
      lastUpdated: "2026-08-20",
    },
    profile: {
      email: "TruongHoanglong1802@gmail.com",
      github: githubBase,
      location: "Ho Chi Minh City, Vietnam",
      name: "TRUONG HOANG LONG",
      role: "Technical Support | IT Helpdesk | Service Desk L1",
      summary:
        "IT Support / Technical Support candidate with 1 year of customer-facing platform support experience and prior PHP/MySQL development experience.",
    },
    a11y: {
      externalLink: "external link",
      languageSwitcher: "Choose language",
      mobileNavigation: "Mobile navigation",
      mobileNavigationToggle: "Open navigation menu",
      primaryNavigation: "Primary navigation",
      themeToggle: "Toggle theme",
      skipToContent: "Skip to content",
    },
    navigation: [
      { label: "Home", href: "#home" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Project", href: "#project" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "Explore My Support Workflow", href: "#project" },
          { label: "View Helpdesk Lab", href: `${githubBase}/Helpdesk-Lab` },
          { label: "GitHub", href: githubBase },
          { label: "Contact Me", href: "mailto:TruongHoanglong1802@gmail.com" },
        ],
        eyebrow: "Application Support · Systems · Building toward DevOps",
        title: "Technical Support | IT Helpdesk | Service Desk L1",
        summary:
          "I enjoy understanding what happens behind an incident—why it happened, how to recover from it safely, and how the same problem could be prevented or automated next time.",
        highlightLabel: "Core support strengths",
        highlights: [
          "L1 incident handling",
          "Ticket triage & escalation",
          "Networking fundamentals",
          "SQL & application troubleshooting",
        ],
        statusLabel: "System status",
        statusItems: [
          { label: "Application", value: "Operational" },
          { label: "Database", value: "Operational" },
          { label: "Monitoring", value: "Active" },
          { label: "Support Queue", value: "Ready" },
        ],
        statusNote: "Demo environment · illustrative portfolio UI, not production data",
      },
      supportFlow: {
        eyebrow: "Support-to-solution flow",
        title: "From first signal to a verified next step",
        description:
          "A conceptual workflow for turning an unclear user issue into a structured, testable response.",
        steps: [
          {
            title: "Listen",
            body: "Capture context, impact, and the expected workflow.",
          },
          {
            title: "Investigate",
            body: "Reproduce the issue and inspect the available evidence.",
          },
          {
            title: "Resolve",
            body: "Fix, automate, document, or escalate with clear ownership.",
          },
          {
            title: "Verify",
            body: "Confirm the next step and preserve what the team learned.",
          },
        ],
        note: "Conceptual workflow · not live system data",
      },
      story: {
        eyebrow: "01 — Story",
        title: "How I Found My Direction",
        body: "A quiet path from software development into support, systems, and automation.",
        paragraphs: [
          "I started my career in software development.",
          "Working with PHP and MySQL taught me how applications behave behind the interface—how data moves, how defects appear, and how developers investigate issues.",
          "Later, I moved into customer-facing platform support. That experience gave technology a different meaning.",
          "An incident was no longer just an error in a system. There was a real user waiting for an answer, a business process being interrupted, and a problem that needed to be understood clearly before it could be escalated or resolved.",
          "That is where I discovered that I genuinely enjoy troubleshooting.",
          "I want to understand not only how to fix a problem, but why it happened and how systems can become easier to operate and more reliable.",
          "That curiosity is what is gradually leading me toward DevOps.",
        ],
      },
      metricsLabel: "Support profile at a glance",
      metrics: [
        {
          label: "Customer-facing platform support experience",
          source: "Owner-supplied portfolio brief, 2026-08-20",
          value: "1 year",
          visibility: "public",
        },
        {
          label: "Cases managed per week at Concentrix",
          source: "Owner-supplied portfolio brief, 2026-08-20",
          value: "110+",
          visibility: "public",
        },
        {
          label: "Quality assurance score at Concentrix",
          source: "Owner-supplied portfolio brief, 2026-08-20",
          value: "97% QA",
          visibility: "public",
        },
        {
          label: "Incident support experience",
          source: "Owner-supplied portfolio brief, 2026-08-20",
          value: "L1",
          visibility: "public",
        },
        {
          label: "Application API tests in Helpdesk Lab",
          source: "Helpdesk Lab local verification record, 2026-08-06",
          value: "12",
          visibility: "public",
        },
        {
          label: "n8n workflow tests in Helpdesk Lab",
          source: "Helpdesk Lab local verification record, 2026-08-06",
          value: "6",
          visibility: "public",
        },
      ],
      scrollNavigation: {
        label: "Portfolio story chapters",
        chapters: [
          { label: "Home", href: "#home" },
          { label: "Story", href: "#story" },
          { label: "Proof", href: "#profile" },
          { label: "Goal", href: "#career-goal" },
          { label: "Experience", href: "#experience" },
          { label: "Lab", href: "#project" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ],
      },
      supportProfileStory: {
        eyebrow: "02 — Profile",
        title: "Support Profile",
        description: [
          "I have experience supporting users, investigating incidents, collecting technical evidence, and coordinating with internal teams to resolve issues.",
          "My previous software development experience also helps me understand applications beyond the user-facing layer.",
        ],
        capabilities: ["Incident Triage", "Troubleshooting", "Evidence Collection", "Escalation", "Recovery Verification"],
      },
      careerGoal: {
        eyebrow: "Career goal",
        title: "Build the foundation properly",
        opening: [
          "Build strong real-world experience in Technical Support, IT Helpdesk, Service Desk, and Application Support.",
          "Progress toward Application / System Support and eventually DevOps by strengthening Linux, networking, SQL, APIs, monitoring, and automation.",
        ],
        insight:
          "In the short term, I want to improve troubleshooting, networking, system support, incident investigation, and technical communication through real support work.",
        labStory:
          "In the long term, I want to build toward DevOps through practical operational foundations, not by skipping the support and systems layers.",
        focusItems: [
          "Troubleshooting",
          "Networking & Systems",
          "Incident Investigation",
          "Technical Communication",
          "Support Automation",
        ],
        immediateGoal:
          "My current focus is entry-level Technical Support / Service Desk / Application Support work where I can support users, understand systems, and document issues clearly.",
        longTermTitle: "My long-term direction",
        longTermText: "DevOps",
        rationale:
          "The foundation I am strengthening one layer at a time:",
        connectionLabel: "Foundation areas",
        connectionFlow: ["Linux", "Networking", "Automation", "Monitoring", "CI/CD", "Reliability"],
        closing: [
          "I am not trying to skip the foundation.",
          "I want to build it properly.",
        ],
        pathLabel: "The path I am building",
        path: [
          { title: "Technical Support", description: "Build reliable troubleshooting habits with real users and real tickets" },
          { title: "Service Desk / IT Support", description: "Strengthen systems, networking, communication, and escalation foundations" },
          { title: "Application / System Support", description: "Work closer to applications, logs, databases, APIs, and operations" },
          { title: "DevOps", description: "Build toward automation, monitoring, deployment, and reliable systems" },
        ],
      },
      focus: {
        eyebrow: "About me",
        title: "Support experience grounded in software",
        body:
          "I combine customer-facing platform support with a development background to investigate issues clearly, communicate practical next steps, and work effectively with technical teams.",
        items: [
          {
            title: "Information Technology",
            body: "Bachelor of Information Technology, Van Lang University, 2020–2024.",
          },
          {
            title: "Customer-facing support",
            body: "One year supporting international platform users through phone, email, CRM, and ticketing workflows.",
          },
          {
            title: "Development foundation",
            body: "Previous PHP/MySQL experience supports SQL-based investigation, testing, bug verification, and technical documentation.",
          },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "Real support experience and development background",
        body: "Real customer-facing platform support experience supported by earlier PHP/MySQL development work. The lab work remains separate from professional experience.",
        items: [
          {
            company: "Concentrix",
            label: "REAL WORK EXPERIENCE",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "Jul 2025 – Jul 2026",
            responsibilities: [
              "Provided L1 platform support for international users through phone, email, CRM, and ticketing systems.",
              "Investigated application incidents using account data, screenshots, system information, and troubleshooting procedures.",
              "Performed initial issue triage, collected reproduction steps, and gathered supporting evidence.",
              "Escalated unresolved incidents to the relevant technical teams.",
              "Coordinated with internal teams until resolution and kept users updated during the incident lifecycle.",
              "Supported Booking-related configuration issues for hotel partners.",
              "Managed 110+ cases per week and maintained 97% QA.",
            ],
            highlights: ["110+ cases per week", "97% QA"],
            tags: ["L1 Support", "Troubleshooting", "Incident Triage", "Evidence Collection", "Escalation", "User Communication", "Ticket Management"],
          },
          {
            company: "OPPO Vietnam",
            label: "DEVELOPMENT BACKGROUND",
            headline: "Development taught me what can happen behind the ticket.",
            role: "PHP Developer",
            period: "Apr 2024 – Nov 2024",
            responsibilities: [
              "Investigated and resolved PHP/MySQL application defects.",
              "Used SQL queries to validate application data and investigate issues.",
              "Supported application testing.",
              "Verified fixes before release.",
              "Coordinated with developers and business users during issue resolution.",
              "Prepared technical documentation and troubleshooting notes.",
            ],
            highlights: [],
            tags: ["PHP", "MySQL", "SQL", "Testing", "Troubleshooting"],
          },
        ],
      },
      skills: {
        eyebrow: "Technical skills",
        title: "Technical toolkit",
        body: "A practical support toolkit organized by how issues are diagnosed, investigated, supported, and operated—without percentage bars or inflated proficiency claims.",
        groups: [
          { title: "Diagnose", items: ["TCP/IP", "DNS", "DHCP", "HTTP / HTTPS", "Windows", "Linux", "Basic Networking"] },
          { title: "Investigate", items: ["SQL", "MySQL", "MariaDB", "REST API", "Postman", "cURL", "Logs", "Screenshots", "System Information"] },
          { title: "Support", items: ["L1 Incident Handling", "Ticket Triage", "Escalation", "Issue Reproduction", "User Support", "Remote Support", "Technical Documentation", "SOPs"] },
          { title: "Operate", items: ["Docker", "Nginx", "PowerShell", "Bash", "Git", "GitHub", "GLPI", "Pega CRM", "n8n"] },
          { title: "Enterprise Support Fundamentals", items: ["Microsoft 365", "Windows 10 / 11", "VPN", "Basic Active Directory", "Printers / Peripherals", "Endpoint Troubleshooting"] },
        ],
      },
      featuredLab: {
        eyebrow: "PERSONAL LAB / LEARNING PROJECT",
        title: "Helpdesk Lab – IT Support & Incident Automation",
        body: "A local helpdesk lab designed to simulate service monitoring, incident handling, SLA escalation, troubleshooting, recovery verification, and support automation.",
        whyTitle: "Why I Built This",
        whyBody: [
          "I did not want my interest in Technical Support and DevOps to exist only as words on a CV.",
          "I wanted an environment that I could break, investigate, recover, automate, test, and document myself.",
          "So I built Helpdesk Lab.",
        ],
        whyStatement: "It is not production experience. It is a learning environment where I can practice the mindset and workflow I want to use professionally.",
        actionLabel: "View Project on GitHub",
        sourceUrl: `${githubBase}/Helpdesk-Lab`,
        techStack: ["Docker Compose", "Nginx", "PHP", "MariaDB", "GLPI", "n8n", "PowerShell", "REST API"],
        techStackLabel: "Helpdesk Lab technology stack",
        features: [
          { title: "Monitoring", body: "Practice reading service health instead of guessing from the first symptom.", points: ["HTTP health checks", "Application health", "Database status", "Service status", "Logs"] },
          { title: "Incident Handling", body: "Model the incident lifecycle from detection to priority and state tracking.", points: ["Detect failures", "Create incident context", "Assign priority", "Track incident state"] },
          { title: "Troubleshooting", body: "Diagnose incidents with repeatable technical evidence before escalating.", points: ["HTTP responses", "Application logs", "Docker service status", "Database connectivity checks", "API responses"] },
          { title: "Automation", body: "Use n8n workflows to practice support intake and operational follow-up.", points: ["Support request intake", "Priority assignment", "Incident deduplication", "SLA escalation", "Recovery verification", "Daily operational reporting"] },
          { title: "Recovery", body: "Demonstrate a database or service outage from health failure to confirmed recovery.", points: ["Health check failure", "Incident investigation", "Service recovery", "Check 01 — PASS", "Check 02 — PASS", "Check 03 — PASS"] },
          { title: "Testing", body: "Keep lab validation explicit and separate from professional production systems.", points: ["12 Application API tests", "6 n8n workflow tests"] },
        ],
        validation: [
          { value: "12", label: "Application API tests verified locally" },
          { value: "6", label: "n8n workflow tests verified locally" },
        ],
        validationLabel: "Local validation record",
        note: "Local verification recorded on 2026-08-06. Results are environment-specific and should be rerun after cloning. This is a portfolio lab, not a deployed company helpdesk platform.",
      },
      incidentWorkflow: {
        eyebrow: "Incident case study",
        title: "From Alert to Recovery",
        body: "A simulated Helpdesk Lab incident that demonstrates the thinking behind detection, diagnosis, evidence collection, recovery, and verification.",
        steps: [
          { label: "Service healthy", thinking: "Start with a known healthy baseline." },
          { label: "Database unavailable", thinking: "What dependency changed, and is it service-level or data-level?" },
          { label: "Application degraded", thinking: "Is the user-facing symptom caused by the application or a dependency?" },
          { label: "HTTP 503", thinking: "What is failing from the outside, and what evidence proves it?" },
          { label: "Initial diagnosis", thinking: "Separate application-level, service-level, and database-level causes." },
          { label: "Collect evidence", thinking: "Capture what another technical team would need if escalation is required." },
          { label: "Recover service", thinking: "Restore the affected service and watch for repeated failures." },
          { label: "Verify health", thinking: "Do not close an incident immediately after the first successful response." },
          { label: "Resolve incident", thinking: "Close only after recovery is confirmed and the learning is documented." },
        ],
        note: "Simulated portfolio lab incident · not production incident data",
      },
      handsOnLabs: {
        eyebrow: "Hands-on labs",
        title: "Hands-on Labs",
        body: "Smaller lab and learning work that supports the same support-and-automation direction without competing with Helpdesk Lab.",
        items: [
          {
            title: "Automated IT Asset Inventory",
            label: "LAB / LEARNING WORK",
            body: "A cross-platform inventory practice project for collecting basic workstation and system information into inspectable local outputs.",
            items: [
              "PowerShell / scripting",
              "Windows and Linux data collection",
              "Inventory-style CSV output",
              "Automation, logging, and documentation practice",
            ],
            href: `${githubBase}/Automated-IT-Asset-Inventory`,
          },
        ],
      },
      certifications: {
        eyebrow: "Certifications",
        title: "Certifications",
        body: "Certification and learning records that support networking, security, and English communication foundations.",
        items: [
          { title: "Aptis ESOL – CEFR B2", issuer: "British Council" },
          { title: "Cisco CCNA (200-301) Specialization", issuer: "Packt / Coursera", note: "Networking Learning Path · Coursera specialization; not the official Cisco CCNA certification." },
          { title: "Google Cybersecurity", issuer: "Coursera" },
        ],
      },
      projects: {
        eyebrow: "Additional project evidence",
        title: "More work — from investigation to implementation",
        body: "Explore additional evidence-backed learning projects with their current maturity, source links, and limitations kept visible.",
      },
      education: {
        eyebrow: "Education",
        title: "Education",
        body: "Formal IT education kept concise so the portfolio stays focused on support evidence.",
        items: [
          { title: "Bachelor of Information Technology", note: "Van Lang University · 2020–2024" },
        ],
      },
      english: {
        eyebrow: "English",
        title: "English communication",
        body: "Able to work with English technical documentation and communicate in everyday support situations while continuing to improve spoken fluency.",
        proof: "Aptis ESOL — CEFR B2",
      },
      devOpsDirection: {
        eyebrow: "Learning roadmap",
        title: "What I'm Building Toward",
        body: "This is a learning direction, not a claim of professional DevOps experience.",
        label: "Support to DevOps learning path",
        flow: ["Support", "Systems", "Automation", "Monitoring", "CI/CD", "Infrastructure", "DevOps"],
        currentLabel: "Current foundation",
        currentItems: ["Linux", "Networking", "Git", "Docker", "PowerShell / Bash", "Troubleshooting", "REST APIs", "SQL", "Incident Handling"],
        futureLabel: "Future learning direction",
        futureItems: ["CI/CD", "Monitoring", "Cloud", "Infrastructure Automation", "Container Operations"],
        statement: "DevOps is my long-term direction, but I want to reach it through real operational foundations rather than collecting tools.",
      },
      supportValues: {
        eyebrow: "Support mindset",
        title: "How I Approach Support",
        body: "A small set of habits I want to carry into real support work.",
        items: [
          { title: "Understand before escalating", body: "Collect enough information so the next person does not have to start from zero." },
          { title: "Communicate clearly", body: "A technical issue is also a user experience." },
          { title: "Verify before closing", body: "Recovery should be confirmed, not assumed." },
          { title: "Learn from incidents", body: "Every repeated issue is an opportunity for better documentation, monitoring, or automation." },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "I am still early in my technical journey — but I am serious about where I am going.",
        body: "I am currently looking for opportunities in Technical Support, IT Helpdesk, Service Desk L1, and Application Support in Ho Chi Minh City, where I can contribute my support experience while continuing to build stronger systems and operations foundations.",
      },
    },
    contact: {
      links: [
        { label: "Contact Me", href: "mailto:TruongHoanglong1802@gmail.com" },
        { label: "GitHub", href: githubBase },
        { label: "Helpdesk Lab", href: `${githubBase}/Helpdesk-Lab` },
      ],
      pendingNote: "Based in Ho Chi Minh City, Vietnam · Open to entry-level support opportunities.",
    },
    footer: {
      note: "Technical support portfolio with evidence-backed project limitations.",
      updatedLabel: "Content updated: 2026-08-20",
    },
    projectLabels: {
      backToProjects: "Back to projects",
      context: "Context",
      contributions: "Contributions",
      evidence: "Evidence",
      featuredProjects: "Featured projects",
      limitations: "Limitations",
      liveDemo: "Live demo",
      moreProjects: "More learning projects",
      projectNavigation: "Featured project navigation",
      projectOf: "Project {current} of {total}",
      problem: "Problem",
      readCaseStudy: "View case study",
      role: "My verified role",
      sourceRepository: "Source code",
      techStack: "Tech stack",
      value: "Value demonstrated",
    },
    notFound: {
      actionLabel: "Return home",
      body: "The requested portfolio page does not exist in the current audited content model.",
      eyebrow: "Not found",
      title: "This page is outside the current portfolio scope.",
    },
    projects: englishProjects,
  },
  vi: {
    locale: "vi",
    lang: "vi",
    languageSwitchLabel: "English",
    site: {
      title: "Trương Hoàng Long | Technical Support & IT Helpdesk",
      description: "Portfolio Technical Support và IT Helpdesk của Trương Hoàng Long, nổi bật kinh nghiệm hỗ trợ L1, troubleshooting, networking, SQL và dự án Helpdesk Lab.",
      lastUpdated: "2026-08-20",
    },
    profile: {
      email: "TruongHoanglong1802@gmail.com",
      github: githubBase,
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      name: "TRƯƠNG HOÀNG LONG",
      role: "Technical Support | IT Helpdesk | Service Desk L1",
      summary: "Ứng viên IT Support / Technical Support với 1 năm kinh nghiệm hỗ trợ nền tảng trực tiếp cho khách hàng và kinh nghiệm phát triển PHP/MySQL trước đó.",
    },
    a11y: {
      externalLink: "liên kết ngoài",
      languageSwitcher: "Chọn ngôn ngữ",
      mobileNavigation: "Điều hướng di động",
      mobileNavigationToggle: "Mở menu điều hướng",
      primaryNavigation: "Điều hướng chính",
      themeToggle: "Chuyển giao diện sáng/tối",
      skipToContent: "Bỏ qua tới nội dung",
    },
    navigation: [
      { label: "Trang chủ", href: "#home" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Dự án", href: "#project" },
      { label: "Chứng chỉ", href: "#certifications" },
      { label: "Liên hệ", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "Khám phá quy trình support", href: "#project" },
          { label: "Xem Helpdesk Lab", href: `${githubBase}/Helpdesk-Lab` },
          { label: "GitHub", href: githubBase },
          { label: "Liên hệ", href: "mailto:TruongHoanglong1802@gmail.com" },
        ],
        eyebrow: "Application Support · Systems · Hướng tới DevOps",
        title: "Technical Support | IT Helpdesk | Service Desk L1",
        summary: "Em hứng thú với việc tìm hiểu điều gì thực sự xảy ra phía sau một sự cố — vì sao nó xảy ra, cách khôi phục an toàn và làm thế nào để ngăn ngừa hoặc tự động hóa vấn đề tương tự trong tương lai.",
        highlightLabel: "Năng lực support cốt lõi",
        highlights: [
          "Xử lý incident L1",
          "Ticket triage & escalation",
          "Nền tảng networking",
          "SQL & application troubleshooting",
        ],
        statusLabel: "Trạng thái hệ thống",
        statusItems: [
          { label: "Ứng dụng", value: "Hoạt động" },
          { label: "Database", value: "Hoạt động" },
          { label: "Monitoring", value: "Đang chạy" },
          { label: "Hàng đợi support", value: "Sẵn sàng" },
        ],
        statusNote: "Môi trường demo · giao diện minh họa portfolio, không phải dữ liệu production",
      },
      supportFlow: {
        eyebrow: "Luồng từ hỗ trợ đến giải pháp",
        title: "Từ tín hiệu ban đầu đến bước tiếp theo đã kiểm chứng",
        description:
          "Minh họa khái niệm về cách chuyển một vấn đề chưa rõ thành phản hồi có cấu trúc và có thể kiểm chứng.",
        steps: [
          {
            title: "Tiếp nhận",
            body: "Ghi nhận bối cảnh, mức ảnh hưởng và workflow mong đợi.",
          },
          {
            title: "Điều tra",
            body: "Tái hiện vấn đề và kiểm tra bằng chứng hiện có.",
          },
          {
            title: "Xử lý",
            body: "Khắc phục, tự động hóa, tài liệu hóa hoặc escalation với ownership rõ ràng.",
          },
          {
            title: "Xác minh",
            body: "Xác nhận bước tiếp theo và lưu lại điều nhóm đã học được.",
          },
        ],
        note: "Minh họa quy trình · không phải dữ liệu hệ thống trực tiếp",
      },
      story: {
        eyebrow: "01 — Câu chuyện",
        title: "Hành trình em xây dựng hướng đi kỹ thuật",
        body: "Một hành trình chuyển từ phát triển phần mềm sang support, systems và automation.",
        paragraphs: [
          "Em bắt đầu hành trình nghề nghiệp với công việc phát triển phần mềm.",
          "PHP và MySQL giúp em hiểu cách một ứng dụng hoạt động phía sau giao diện — dữ liệu di chuyển như thế nào, lỗi có thể xuất hiện ở đâu và developer điều tra vấn đề ra sao.",
          "Sau đó, em chuyển sang công việc hỗ trợ nền tảng trực tiếp cho người dùng.",
          "Trải nghiệm đó khiến em nhìn công nghệ theo một góc độ khác.",
          "Một incident không còn chỉ là lỗi của hệ thống. Phía sau đó là một người dùng đang chờ câu trả lời, một quy trình công việc có thể đang bị gián đoạn và một vấn đề cần được hiểu rõ trước khi có thể xử lý hoặc escalate.",
          "Đó cũng là lúc em nhận ra mình thực sự thích troubleshooting.",
          "Em muốn hiểu không chỉ cách xử lý một vấn đề, mà còn vì sao nó xảy ra và làm thế nào để hệ thống có thể vận hành ổn định hơn.",
          "Sự tò mò đó đang từng bước đưa em đến với DevOps.",
        ],
      },
      metricsLabel: "Tổng quan hồ sơ support",
      metrics: [
        {
          label: "Kinh nghiệm hỗ trợ nền tảng trực tiếp cho khách hàng",
          source: "Nội dung do chủ sở hữu cung cấp, 2026-08-20",
          value: "1 năm",
          visibility: "public",
        },
        {
          label: "Số case xử lý mỗi tuần tại Concentrix",
          source: "Nội dung do chủ sở hữu cung cấp, 2026-08-20",
          value: "110+",
          visibility: "public",
        },
        {
          label: "Điểm đảm bảo chất lượng tại Concentrix",
          source: "Nội dung do chủ sở hữu cung cấp, 2026-08-20",
          value: "97% QA",
          visibility: "public",
        },
        {
          label: "Kinh nghiệm hỗ trợ incident",
          source: "Nội dung do chủ sở hữu cung cấp, 2026-08-20",
          value: "L1",
          visibility: "public",
        },
        {
          label: "Application API tests trong Helpdesk Lab",
          source: "Kết quả kiểm thử cục bộ Helpdesk Lab, 2026-08-06",
          value: "12",
          visibility: "public",
        },
        {
          label: "n8n workflow tests trong Helpdesk Lab",
          source: "Kết quả kiểm thử cục bộ Helpdesk Lab, 2026-08-06",
          value: "6",
          visibility: "public",
        },
      ],
      scrollNavigation: {
        label: "Các chương trong câu chuyện portfolio",
        chapters: [
          { label: "Trang chủ", href: "#home" },
          { label: "Câu chuyện", href: "#story" },
          { label: "Bằng chứng", href: "#profile" },
          { label: "Mục tiêu", href: "#career-goal" },
          { label: "Kinh nghiệm", href: "#experience" },
          { label: "Lab", href: "#project" },
          { label: "Kỹ năng", href: "#skills" },
          { label: "Liên hệ", href: "#contact" },
        ],
      },
      supportProfileStory: {
        eyebrow: "02 — Hồ sơ",
        title: "Hồ sơ chuyên môn",
        description: [
          "Em có kinh nghiệm hỗ trợ người dùng, điều tra sự cố, thu thập thông tin kỹ thuật và phối hợp với các nhóm nội bộ để xử lý vấn đề.",
          "Kinh nghiệm phát triển phần mềm trước đây cũng giúp em hiểu ứng dụng không chỉ ở góc nhìn của người dùng mà còn ở phía hệ thống phía sau.",
        ],
        capabilities: ["Incident Triage", "Troubleshooting", "Thu thập bằng chứng", "Escalation", "Xác minh phục hồi"],
      },
      careerGoal: {
        eyebrow: "Định hướng nghề nghiệp",
        title: "Định hướng nghề nghiệp",
        opening: [
          "Trong ngắn hạn, em muốn xây dựng nền tảng thực tế vững chắc trong Technical Support / IT Helpdesk / Service Desk, đặc biệt ở troubleshooting, networking, system support và incident handling.",
          "Về dài hạn, em muốn phát triển qua Application / System Support và từng bước hướng tới DevOps, kết hợp kinh nghiệm support với Linux, networking, SQL, API, monitoring và automation.",
        ],
        insight:
          "Em muốn tiến tới DevOps bằng nền tảng vận hành thực tế thay vì chỉ học thật nhiều công cụ.",
        labStory:
          "DevOps là định hướng dài hạn của em, nhưng em muốn tiến tới đó bằng nền tảng vận hành thực tế thay vì chỉ học thật nhiều công cụ.",
        focusItems: [
          "Troubleshooting",
          "Networking & Systems",
          "Điều tra sự cố",
          "Giao tiếp kỹ thuật",
          "Tự động hóa Support",
        ],
        immediateGoal:
          "Current Foundation: Technical Support, Systems và Troubleshooting thực tế.",
        longTermTitle: "Hướng em đang xây dựng",
        longTermText: "DevOps",
        rationale:
          "Learning Next: Automation, Monitoring, CI/CD và Infrastructure — những năng lực em đang học từng bước, không phải kỹ năng professional đã hoàn tất.",
        connectionLabel: "Current Foundation → Learning Next",
        connectionFlow: ["Support", "Systems", "Automation", "Monitoring", "CI/CD", "Infrastructure", "DevOps"],
        closing: [
          "Em không muốn bỏ qua những nền tảng cần thiết.",
          "Em muốn xây dựng chúng một cách chắc chắn.",
        ],
        pathLabel: "Lộ trình em đang xây dựng",
        path: [
          { title: "Technical Support", description: "Xây dựng thói quen troubleshooting với người dùng và ticket thực tế" },
          { title: "Service Desk / IT Support", description: "Củng cố systems, networking, giao tiếp và escalation" },
          { title: "Application / System Support", description: "Làm việc gần hơn với ứng dụng, log, database, API và vận hành" },
          { title: "DevOps", description: "Tiến tới automation, monitoring, deployment và hệ thống đáng tin cậy" },
        ],
      },
      focus: {
        eyebrow: "Giới thiệu",
        title: "Kinh nghiệm support dựa trên nền tảng phần mềm",
        body: "Em kết hợp kinh nghiệm hỗ trợ nền tảng trực tiếp cho khách hàng với nền tảng phát triển phần mềm để điều tra vấn đề rõ ràng, truyền đạt bước tiếp theo thực tế và phối hợp hiệu quả với đội kỹ thuật.",
        items: [
          { title: "Công nghệ Thông tin", body: "Cử nhân Công nghệ Thông tin, Đại học Văn Lang, 2020–2024." },
          { title: "Hỗ trợ khách hàng", body: "Một năm hỗ trợ người dùng nền tảng quốc tế qua điện thoại, email, CRM và quy trình ticket." },
          { title: "Nền tảng phát triển", body: "Kinh nghiệm PHP/MySQL hỗ trợ điều tra bằng SQL, testing, xác minh bug fix và viết tài liệu kỹ thuật." },
        ],
      },
      experience: {
        eyebrow: "Kinh nghiệm",
        title: "Kinh nghiệm support thực tế và nền tảng development",
        body: "Kinh nghiệm hỗ trợ nền tảng trực tiếp cho người dùng, được bổ trợ bởi nền tảng phát triển PHP/MySQL trước đây. Các lab cá nhân được trình bày riêng và không được xem là kinh nghiệm production.",
        items: [
          {
            company: "Concentrix",
            label: "KINH NGHIỆM LÀM VIỆC THỰC TẾ",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "07/2025 – 07/2026",
            responsibilities: [
              "Cung cấp hỗ trợ nền tảng L1 cho người dùng quốc tế qua điện thoại, email, CRM và hệ thống ticket.",
              "Điều tra sự cố ứng dụng bằng dữ liệu tài khoản, ảnh chụp màn hình, thông tin hệ thống và quy trình troubleshooting.",
              "Thực hiện triage ban đầu, thu thập bước tái hiện lỗi và các thông tin hỗ trợ cần thiết.",
              "Escalate những incident chưa thể xử lý đến đội kỹ thuật phù hợp.",
              "Phối hợp với các nhóm nội bộ đến khi có kết quả và cập nhật cho người dùng trong suốt vòng đời incident.",
              "Hỗ trợ các vấn đề cấu hình liên quan đến Booking cho đối tác khách sạn.",
              "Xử lý 110+ case mỗi tuần và duy trì 97% QA.",
            ],
            highlights: ["110+ case mỗi tuần", "97% QA"],
            tags: ["L1 Support", "Troubleshooting", "Incident Triage", "Evidence Collection", "Escalation", "User Communication", "Ticket Management"],
          },
          {
            company: "OPPO Vietnam",
            label: "NỀN TẢNG DEVELOPMENT",
            headline: "Kinh nghiệm development giúp em hiểu điều gì có thể đang xảy ra phía sau một ticket.",
            role: "PHP Developer",
            period: "04/2024 – 11/2024",
            responsibilities: ["Điều tra và xử lý lỗi ứng dụng PHP/MySQL.", "Dùng truy vấn SQL để kiểm tra dữ liệu ứng dụng và điều tra vấn đề.", "Hỗ trợ kiểm thử ứng dụng.", "Xác minh bản sửa lỗi trước khi release.", "Phối hợp với developer và người dùng nghiệp vụ trong quá trình xử lý vấn đề.", "Chuẩn bị tài liệu kỹ thuật và ghi chú troubleshooting."],
            highlights: [],
            tags: ["PHP", "MySQL", "SQL", "Testing", "Troubleshooting"],
          },
        ],
      },
      skills: {
        eyebrow: "Kỹ năng kỹ thuật",
        title: "Bộ công cụ kỹ thuật",
        body: "Bộ công cụ support được tổ chức theo cách một vấn đề được chẩn đoán, điều tra, hỗ trợ và vận hành—không dùng thanh phần trăm hoặc claim quá mức.",
        groups: [
          { title: "Chẩn đoán", items: ["TCP/IP", "DNS", "DHCP", "HTTP / HTTPS", "Windows", "Linux", "Basic Networking"] },
          { title: "Điều tra", items: ["SQL", "MySQL", "MariaDB", "REST API", "Postman", "cURL", "Logs", "Screenshots", "System Information"] },
          { title: "Support", items: ["L1 Incident Handling", "Ticket Triage", "Escalation", "Issue Reproduction", "User Support", "Remote Support", "Technical Documentation", "SOPs"] },
          { title: "Vận hành", items: ["Docker", "Nginx", "PowerShell", "Bash", "Git", "GitHub", "GLPI", "Pega CRM", "n8n"] },
          { title: "Enterprise Support Fundamentals", items: ["Microsoft 365", "Windows 10 / 11", "VPN", "Basic Active Directory", "Printers / Peripherals", "Endpoint Troubleshooting"] },
        ],
      },
      featuredLab: {
        eyebrow: "DỰ ÁN LAB CÁ NHÂN / HỌC TẬP",
        title: "Helpdesk Lab – IT Support & Incident Automation",
        body: "Môi trường Helpdesk Lab cục bộ được xây dựng để mô phỏng monitoring dịch vụ, xử lý incident, SLA escalation, troubleshooting, xác minh recovery và tự động hóa quy trình support.",
        whyTitle: "Vì sao em xây dựng project này",
        whyBody: [
          "Em không muốn sự quan tâm của mình đối với Technical Support và DevOps chỉ tồn tại dưới dạng vài dòng trong CV.",
          "Vì vậy, em tự xây dựng một môi trường mà mình có thể chủ động tạo lỗi, điều tra, khôi phục, tự động hóa, kiểm thử và viết tài liệu cho toàn bộ quá trình.",
        ],
        whyStatement: "Helpdesk Lab là cách em biến sự quan tâm đó thành trải nghiệm thực hành.",
        actionLabel: "Xem project trên GitHub",
        sourceUrl: `${githubBase}/Helpdesk-Lab`,
        techStack: ["Docker Compose", "Nginx", "PHP", "MariaDB", "GLPI", "n8n", "PowerShell", "REST API"],
        techStackLabel: "Công nghệ của Helpdesk Lab",
        features: [
          { title: "Monitoring", body: "Thực hành đọc tín hiệu service health thay vì đoán từ triệu chứng đầu tiên.", points: ["HTTP health checks", "Application health", "Database status", "Service status", "Logs"] },
          { title: "Xử lý Incident", body: "Mô phỏng vòng đời incident từ phát hiện lỗi đến priority và trạng thái xử lý.", points: ["Detect failures", "Tạo incident context", "Assign priority", "Track incident state"] },
          { title: "Troubleshooting", body: "Chẩn đoán incident bằng bằng chứng kỹ thuật có thể lặp lại trước khi escalate.", points: ["HTTP responses", "Application logs", "Docker service status", "Database connectivity checks", "API responses"] },
          { title: "Automation", body: "Dùng n8n workflow để thực hành support intake và follow-up vận hành.", points: ["Support request intake", "Priority assignment", "Incident deduplication", "SLA escalation", "Recovery verification", "Daily operational reporting"] },
          { title: "Recovery", body: "Mô phỏng outage database hoặc service từ health failure đến recovery đã xác minh.", points: ["Health check failure", "Incident investigation", "Service recovery", "Check 01 — PASS", "Check 02 — PASS", "Check 03 — PASS"] },
          { title: "Kiểm thử & xác minh", body: "Giữ kết quả validation của lab rõ ràng và tách biệt với hệ thống production.", points: ["12 Application API tests", "6 n8n workflow tests"] },
        ],
        validation: [{ value: "12", label: "Application API tests đã xác minh cục bộ" }, { value: "6", label: "n8n workflow tests đã xác minh cục bộ" }],
        validationLabel: "Kết quả kiểm tra cục bộ",
        note: "Kết quả cục bộ được ghi nhận ngày 2026-08-06. Kết quả phụ thuộc môi trường và cần chạy lại sau khi clone. Đây là portfolio lab, không phải nền tảng helpdesk đã triển khai cho doanh nghiệp.",
      },
      incidentWorkflow: {
        eyebrow: "Quy trình incident",
        title: "Luồng rõ ràng từ tín hiệu đến đóng incident",
        body: "Quy trình giữ bằng chứng, ownership, giao tiếp và kiểm tra phục hồi luôn hiển thị trong suốt quá trình hỗ trợ L1.",
        steps: ["Người dùng / Monitoring", "Phát hiện incident", "Chẩn đoán ban đầu", "Ticket / Thu thập bằng chứng", "Troubleshooting", "Xử lý hoặc Escalate", "Xác minh phục hồi", "Đóng incident"],
        note: "Sơ đồ quy trình dựng bằng CSS · không dùng thư viện diagram bên ngoài",
      },
      certifications: {
        eyebrow: "Học vấn & chứng chỉ",
        title: "Nền tảng học tập hỗ trợ công việc kỹ thuật tuyến đầu",
        body: "Học vấn IT, năng lực tiếng Anh, kiến thức networking và nền tảng cybersecurity phù hợp với các vai trò technical support.",
        items: [
          { title: "Cử nhân Công nghệ Thông tin", issuer: "Đại học Văn Lang · 2020–2024" },
          { title: "Aptis ESOL – CEFR B2", issuer: "British Council" },
          { title: "Cisco CCNA (200-301) Specialization", issuer: "Packt / Coursera", note: "Chương trình chuyên môn trên Coursera; không phải chứng chỉ Cisco CCNA chính thức." },
          { title: "Google Cybersecurity", issuer: "Coursera" },
        ],
      },
      projects: {
        eyebrow: "Bằng chứng dự án khác",
        title: "Thêm dự án — từ điều tra đến triển khai",
        body: "Khám phá thêm các dự án học tập có bằng chứng, với mức độ hoàn thiện, liên kết mã nguồn và giới hạn được trình bày rõ ràng.",
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Em vẫn đang ở giai đoạn đầu của hành trình kỹ thuật — nhưng em nghiêm túc với hướng đi mình đã chọn.",
        body: "Hiện tại, em đang tìm kiếm cơ hội Technical Support, IT Helpdesk, Service Desk L1 hoặc Application Support tại TP. Hồ Chí Minh, nơi em có thể tận dụng kinh nghiệm support hiện tại đồng thời tiếp tục xây dựng nền tảng systems và operations vững chắc hơn.",
      },
    },
    contact: {
      links: [{ label: "Liên hệ", href: "mailto:TruongHoanglong1802@gmail.com" }, { label: "GitHub", href: githubBase }, { label: "Helpdesk Lab", href: `${githubBase}/Helpdesk-Lab` }],
      pendingNote: "Về dài hạn, em muốn phát triển theo hướng DevOps thông qua trải nghiệm thực tế về troubleshooting, systems, automation và reliability.",
    },
    footer: {
      note: "Portfolio technical support với giới hạn dự án được trình bày dựa trên bằng chứng.",
      updatedLabel: "Nội dung cập nhật: 2026-08-20",
    },
    projectLabels: {
      backToProjects: "Quay lại dự án",
      context: "Bối cảnh",
      contributions: "Đóng góp",
      evidence: "Bằng chứng",
      featuredProjects: "Dự án nổi bật",
      limitations: "Giới hạn",
      liveDemo: "Demo trực tiếp",
      moreProjects: "Thêm dự án học tập",
      projectNavigation: "Điều hướng dự án nổi bật",
      projectOf: "Dự án {current} / {total}",
      problem: "Vấn đề",
      readCaseStudy: "Xem case study",
      role: "Vai trò đã xác minh",
      sourceRepository: "Mã nguồn",
      techStack: "Tech stack",
      value: "Giá trị thể hiện",
    },
    notFound: {
      actionLabel: "Về trang chủ",
      body: "Trang portfolio được yêu cầu không tồn tại trong content model đã audit hiện tại.",
      eyebrow: "Không tìm thấy",
      title: "Trang này nằm ngoài phạm vi portfolio hiện tại.",
    },
    projects: vietnameseProjects,
  },
} as const satisfies Record<"en" | "vi", PortfolioContent>;
