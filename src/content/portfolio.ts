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
    title: "webbanjewry",
    category: "full-stack-learning",
    categoryLabel: "Full-stack learning project",
    maturityLabel: "Source-audited prototype",
    summary:
      "A jewelry commerce learning project with separate React clients and a Node/Express/MongoDB backend.",
    problem:
      "Practice e-commerce flows, authentication, product data, and separate client/server responsibilities.",
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
      title: "Truong Hoang Long Portfolio",
      description:
        "Evidence-backed portfolio for Truong Hoang Long, an application support and automation-focused developer.",
      lastUpdated: "2026-08-11",
    },
    profile: {
      name: "Trương Hoàng Long",
      role: "Application Support & Automation-Focused Developer",
      summary:
        "I bridge users, systems, and engineering by turning support problems into practical workflows, automation, and software experiments.",
    },
    a11y: {
      primaryNavigation: "Primary navigation",
      skipToContent: "Skip to content",
    },
    navigation: [
      { label: "Focus", href: "#focus" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      hero: {
        eyebrow: "Evidence-backed portfolio foundation",
        title: "Support-minded development with practical automation.",
        summary:
          "This portfolio is being built from audited source evidence first, so every public project claim has a visible source, a scope, and a limitation.",
        primaryActionLabel: "View Projects",
        secondaryActionLabel: "Contact Status",
      },
      metricsLabel: "Verified portfolio evidence",
      metrics: [
        {
          label: "Public repositories audited for this portfolio",
          source: "docs/PHASE_0_AUDIT.md",
          value: "7",
          visibility: "public",
        },
        {
          label: "Public demo URL returned HTTP 200 during audit",
          source: "docs/PHASE_0_AUDIT.md",
          value: "1",
          visibility: "public",
        },
        {
          label: "Unsupported senior or production claims allowed",
          source: "docs/PHASE_0_AUDIT.md",
          value: "0",
          visibility: "public",
        },
        {
          label: "Owner-approved support KPI metrics",
          source: "Requires CV or explicit owner permission",
          value: "TODO",
          visibility: "internal",
        },
      ],
      focus: {
        eyebrow: "Current positioning",
        title: "What the portfolio can claim today",
        body:
          "Phase 1 keeps the page honest while leaving room for verified CV, contact, screenshots, and experience details later.",
        items: [
          {
            title: "Application support thinking",
            body:
              "Projects are framed around user workflows, helpdesk practice, operational checks, and support automation.",
          },
          {
            title: "Automation practice",
            body:
              "PowerShell, Bash, Python, Docker Compose, and local workflow scripts are represented as learning and lab evidence.",
          },
          {
            title: "Full-stack learning",
            body:
              "React, Node/Express, FastAPI, MongoDB, and AI-provider experiments are described with their current maturity and limits.",
          },
        ],
      },
      projects: {
        eyebrow: "Case studies",
        title: "Audited project inventory",
        body:
          "Each project includes evidence and limitations so reviewers can see the actual level of completion without inflated claims.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Public contact details are pending owner verification.",
        body:
          "GitHub is available because it is the source of the audited repositories. Email, LinkedIn, CV, and exact job timeline wait for owner-approved data.",
      },
    },
    contact: {
      links: [{ label: "GitHub", href: githubBase }],
      pendingNote: "Email, LinkedIn, CV download, and job timeline are intentionally unpublished until verified.",
    },
    footer: {
      note: "Built from audited evidence; detailed phase work stays in docs/PORTFOLIO_PLAN.md.",
      updatedLabel: "Last content audit: 2026-08-11",
    },
    projectLabels: {
      backToProjects: "Back to projects",
      context: "Context",
      contributions: "Contributions",
      evidence: "Evidence",
      limitations: "Limitations",
      problem: "Problem",
      readCaseStudy: "Read case study",
      techStack: "Tech stack",
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
      title: "Portfolio Trương Hoàng Long",
      description:
        "Portfolio dựa trên bằng chứng cho Trương Hoàng Long, định vị quanh application support và automation.",
      lastUpdated: "2026-08-11",
    },
    profile: {
      name: "Trương Hoàng Long",
      role: "Application Support & Automation-Focused Developer",
      summary:
        "Tôi kết nối người dùng, hệ thống và kỹ thuật bằng cách chuyển vấn đề support thành workflow thực tế, automation và thử nghiệm phần mềm.",
    },
    a11y: {
      primaryNavigation: "Điều hướng chính",
      skipToContent: "Bỏ qua tới nội dung",
    },
    navigation: [
      { label: "Trọng tâm", href: "#focus" },
      { label: "Dự án", href: "#projects" },
      { label: "Liên hệ", href: "#contact" },
    ],
    home: {
      hero: {
        eyebrow: "Nền tảng portfolio dựa trên bằng chứng",
        title: "Phát triển theo tư duy support và automation thực tế.",
        summary:
          "Portfolio này được xây từ bằng chứng audit trước, nên mỗi claim công khai về dự án đều có nguồn, phạm vi và giới hạn rõ ràng.",
        primaryActionLabel: "Xem dự án",
        secondaryActionLabel: "Trạng thái liên hệ",
      },
      metricsLabel: "Bằng chứng portfolio đã xác minh",
      metrics: [
        {
          label: "Repository công khai đã audit cho portfolio",
          source: "docs/PHASE_0_AUDIT.md",
          value: "7",
          visibility: "public",
        },
        {
          label: "URL demo công khai trả HTTP 200 trong audit",
          source: "docs/PHASE_0_AUDIT.md",
          value: "1",
          visibility: "public",
        },
        {
          label: "Claim senior hoặc production thiếu bằng chứng được phép",
          source: "docs/PHASE_0_AUDIT.md",
          value: "0",
          visibility: "public",
        },
        {
          label: "KPI support được chủ sở hữu cho phép công khai",
          source: "Cần CV hoặc xác nhận rõ từ chủ sở hữu",
          value: "TODO",
          visibility: "internal",
        },
      ],
      focus: {
        eyebrow: "Định vị hiện tại",
        title: "Những gì portfolio có thể claim hôm nay",
        body:
          "Phase 1 giữ nội dung trung thực, đồng thời chừa chỗ cho CV, contact, screenshot và kinh nghiệm đã xác minh ở các phase sau.",
        items: [
          {
            title: "Tư duy application support",
            body:
              "Các dự án được đặt trong bối cảnh workflow người dùng, thực hành helpdesk, kiểm tra vận hành và support automation.",
          },
          {
            title: "Thực hành automation",
            body:
              "PowerShell, Bash, Python, Docker Compose và script workflow cục bộ được trình bày như bằng chứng học tập và lab.",
          },
          {
            title: "Học full-stack",
            body:
              "React, Node/Express, FastAPI, MongoDB và thử nghiệm AI-provider được mô tả đúng mức độ hoàn thiện và giới hạn hiện tại.",
          },
        ],
      },
      projects: {
        eyebrow: "Case study",
        title: "Danh mục dự án đã audit",
        body:
          "Mỗi dự án có bằng chứng và giới hạn để người xem hiểu đúng mức độ hoàn thiện, không bị thổi phồng claim.",
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Thông tin liên hệ công khai đang chờ xác minh.",
        body:
          "GitHub được hiển thị vì là nguồn của các repository đã audit. Email, LinkedIn, CV và timeline công việc chờ dữ liệu được chủ sở hữu duyệt.",
      },
    },
    contact: {
      links: [{ label: "GitHub", href: githubBase }],
      pendingNote: "Email, LinkedIn, CV download và timeline công việc cố ý chưa công khai cho đến khi được xác minh.",
    },
    footer: {
      note: "Xây từ bằng chứng audit; chi tiết phase nằm trong docs/PORTFOLIO_PLAN.md.",
      updatedLabel: "Audit nội dung gần nhất: 2026-08-11",
    },
    projectLabels: {
      backToProjects: "Quay lại dự án",
      context: "Bối cảnh",
      contributions: "Đóng góp",
      evidence: "Bằng chứng",
      limitations: "Giới hạn",
      problem: "Vấn đề",
      readCaseStudy: "Đọc case study",
      techStack: "Tech stack",
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
