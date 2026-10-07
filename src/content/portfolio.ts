import type { PortfolioContent, Project } from "@/types/portfolio";

const githubBase = "https://github.com/HoangLong1802";

const customerSupportAnalytics: Project = {
  slug: "customer-support-operations-analytics",
  title: "Customer Support Operations Analytics",
  category: "data-science-learning",
  categoryLabel: "Operations analytics case study",
  maturityLabel: "Synthetic dataset · portfolio project",
  summary:
    "An end-to-end analysis of service quality, SLA breaches, backlog aging, demand patterns, and workforce capacity using a reproducible synthetic support dataset.",
  problem:
    "Support managers need to locate weak service stages, understand breach contributors, find aged backlog and demand peaks, then compare workload with capacity before changing staffing.",
  story: {
    role:
      "Built the Python analysis and Excel workbook, prepared SQL analysis files, and documented the Power BI model, measures, and dashboard specification.",
    value:
      "Shows how operational questions can be translated into reconciled data, measurable service KPIs, findings, and practical next steps.",
    visualAlt:
      "Verified support operations findings: technical cases account for 29.49% of tickets and 50.09% of resolution SLA breaches.",
    visualLabels: ["14,774 tickets", "SLA analysis", "Backlog aging", "Capacity planning"],
  },
  contributions: [
    "Analyzed 14,774 cleaned ticket snapshots across 18 agents and three teams, using synthetic data covering October 2025 through September 2026.",
    "Reconciled duplicate, conflicting, invalid, and quarantined observations before analysis.",
    "Used Python calculations for published findings and prepared SQL queries for the project questions; MySQL execution remains pending.",
    "Produced an Excel workbook with 14 analytical sheets and four charts.",
    "Documented a Power BI data model, DAX measures, and a three-page dashboard specification.",
  ],
  techStack: ["Python", "pandas", "SQL", "Excel", "Power BI", "DAX"],
  evidence: [
    {
      label: "GitHub repository",
      href: `${githubBase}/support-ops-analytics`,
      note: "Source data, cleaning decisions, analysis, workbook, tests, and Power BI specifications.",
    },
    {
      label: "Excel analytical workbook",
      href: `${githubBase}/support-ops-analytics/blob/main/output/customer_support_analysis.xlsx`,
      note: "Fourteen sheets and four charts expose reconciled analytical outputs.",
    },
  ],
  caseStudy: {
    dataset:
      "Synthetic support operations data for 18 agents across three teams, covering October 2025 through September 2026. Cleaning retained 14,774 ticket snapshots. This is not employer or customer data.",
    cleaning: [
      "Removed 75 duplicate ticket copies and 36 duplicate work-log copies; normalized 120 channel values.",
      "Quarantined 60 conflicting ticket versions across 30 IDs and records with invalid lifecycles or unknown agent references.",
      "Set 23 invalid CSAT scores to null and retained logically valid extreme durations rather than treating unusual waits as errors.",
    ],
    analysis: [
      "Compared first-response and resolution SLA compliance, excluding each metric's own pending cases.",
      "Segmented resolution breaches by ticket category and compared weekday, weekend, and time-of-day demand.",
      "Reviewed backlog age, reopen/CSAT associations, and workload against daily productive capacity.",
    ],
    visualization:
      "The verified output is an Excel workbook with 14 sheets and four charts. Power BI data model, DAX measures, and dashboard specification are included, but the PBIX and dashboard screenshots have not been created.",
    findings: [
      "Technical cases are 29.49% of tickets but contribute 50.09% of resolution SLA breaches (1,760 of 3,514).",
      "First-response compliance is 87.93%, versus 76.19% for resolution and 67.66% overall; pending cases are excluded per measure.",
      "Average weekday arrivals are 1.92 times weekend arrivals; 35.70% arrive from 09:00 to 11:59 local time.",
    ],
    recommendations: [
      "Review technical queues, dependency aging, and ownership before increasing staffing across all teams.",
      "Check triage coverage around weekday demand peaks and validate handling-time assumptions before changing schedules.",
    ],
  },
  limitations: [
    "The dataset is synthetic and does not represent proprietary data, a former employer, or real customers.",
    "Published calculations are from Python; MySQL execution and Power BI Desktop validation remain pending.",
    "No PBIX or dashboard screenshots exist yet. Synthetic associations do not establish causes; reopen rate is not first-contact resolution.",
  ],
};

const englishProjects = [
  {
    slug: "devmentor-ai",
    title: "DevMentor AI",
    backendUrl: "https://devmentor-backend-oauk.onrender.com/",
    backendHealthUrl: "https://devmentor-backend-oauk.onrender.com/health",
    category: "ai-full-stack",
    categoryLabel: "AI-powered full-stack learning platform",
    maturityLabel: "Public full-stack demo",
    summary:
      "An AI-assisted technical interview and tutoring platform that turns role-specific PDF learning material into document-grounded conversations, assessments, scoring, and actionable feedback.",
    problem:
      "Generic AI interview tools can generate questions that are disconnected from a learner's actual curriculum or technical role. DevMentor AI explores how document-grounded retrieval, structured AI prompting, authentication, and assessment state can be combined into one reproducible learning workflow.",
    story: {
      role:
        "Built the React and FastAPI application boundary, document ingestion and retrieval pipeline, authentication flow, AI evaluation workflow, assessment state, and deployment setup.",
      value:
        "Demonstrates practical full-stack AI engineering through document-grounded interviews, protected APIs, role-based access, scored assessments, and browser-based assessment monitoring.",
      visualAlt:
        "DevMentor AI interface showing role-based technical learning, PDF-grounded chat, assessment scoring, and interview feedback.",
      visualLabels: ["PDF-grounded AI", "Technical interview", "Assessment scoring", "JWT / RBAC"],
    },
    contributions: [
      "Built a responsive React SPA with desktop, tablet, and mobile workflows.",
      "Implemented a FastAPI backend with Pydantic request validation.",
      "Extracted PDF text with PyPDF2 and indexed overlapping document chunks.",
      "Added bounded relevance retrieval so prompts use position-specific document context.",
      "Generated technical interview questions and evaluated answers with structured AI responses.",
      "Scored correctness, technical understanding, explanation, and practical application.",
      "Implemented bcrypt password hashing, expiring JWT access tokens, and user/admin authorization.",
      "Persisted users in MongoDB with local JSON fallback for development.",
      "Protected chat, assessment, document, report, and administrator routes.",
      "Handled camera permission and browser visibility events during assessments.",
      "Recorded assessment state, answers, feedback, scores, and violation history.",
      "Added Docker, Docker Compose, Nginx, and service health-check support.",
    ],
    demoNotice:
      "Render's free backend may need a moment to wake. Check the backend first, wait for a response, then open the frontend demo.",
    techStack: ["React", "Vite", "FastAPI", "Python", "OpenAI API", "PyPDF2", "MongoDB", "JWT", "Docker"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/test_chat_bot`,
        note: "README, application source, deployment files, and backend tests document the listed capabilities.",
      },
      {
        label: "Live demo",
        href: "https://test-chat-bot-iota.vercel.app/",
        note: "Public frontend deployment; the Render-hosted API may need a short cold-start.",
      },
    ],
    limitations: [
      "No verified real-world user base or hardened production deployment is claimed.",
      "Retrieval uses bounded chunking and relevance ranking rather than an embeddings-based vector index.",
      "AI features require a configured backend provider key; browser-facing environment variables must not expose secrets.",
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
    caseStudy: {
      dataset: "Local machine inventory output is written to CSV and log files. TODO: verify the collected fields and sample records from the repository.",
      cleaning: ["TODO: document any validation, normalization, or duplicate handling after reviewing the generated files."],
      analysis: ["TODO: document a verified data question and reproducible analysis from the repository output."],
      visualization: "No dashboard or visualization is documented for this script-based project.",
      findings: ["TODO: add a finding only after inspecting and reproducing the repository output."],
      recommendations: ["TODO: add a practical recommendation after validating the collected inventory fields."],
    },
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
    slug: "jewelry-commerce",
    title: "Jewelry Commerce Platform",
    category: "full-stack-ecommerce",
    categoryLabel: "Full-stack e-commerce platform",
    maturityLabel: "Deployed full-stack demo",
    summary:
      "A full-stack jewelry e-commerce platform with separate customer and administrator experiences for product discovery, shopping, order management, and store administration.",
    problem:
      "An online retail platform requires more than a product catalog: customers need reliable browsing, cart, authentication, and ordering workflows while administrators need secure tools for managing products, categories, customers, and orders.",
    story: {
      role:
        "Built a modular full-stack commerce application with separate React customer and administrator clients backed by a Node.js and Express API.",
      value:
        "Demonstrates end-to-end e-commerce workflows, authentication, CRUD administration, API security, MongoDB persistence, and multi-client application architecture.",
      visualAlt:
        "Jewelry commerce interface showing product browsing, shopping flows, and store administration.",
      visualLabels: ["E-commerce", "Admin dashboard", "Product management", "JWT authentication"],
    },
    contributions: [
      "Built dedicated React applications for customer and administrator experiences.",
      "Implemented product browsing, search, and category-based filtering.",
      "Added shopping-cart, order-placement, and order-tracking workflows.",
      "Implemented customer registration, authentication, and profile management.",
      "Protected administrator operations with JWT authentication and authorization.",
      "Built category and product CRUD workflows with image handling.",
      "Added order-status operations, customer management, and dashboard analytics.",
      "Used bcrypt password hashing with MongoDB and Mongoose persistence.",
      "Applied request validation and sanitization at API boundaries.",
      "Configured Helmet security headers and API rate limiting.",
      "Added email-notification support through Nodemailer.",
      "Shared API services and application utilities across the multi-client architecture.",
    ],
    demoNotice:
      "Demo availability may vary on Render; the source repository remains available if the deployed service is waking or temporarily unavailable.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Axios", "Context API"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/webbanjewry`,
        note: "README, package manifests, middleware, API routes, React clients, and data models support the listed capabilities.",
      },
      {
        label: "Live demo",
        href: "https://website-ban-jewry.onrender.com/",
        note: "Owner-supplied Render deployment; availability can vary while the service wakes.",
      },
    ],
    limitations: [
      "The server test script intentionally exits with no tests.",
      "Default admin credentials in the source repository are not production-safe and must not be reused.",
      "A public deployment URL is supplied, but no production traffic, customer usage, or uptime claim is made.",
    ],
  },
  {
    slug: "stock-prediction-ai",
    title: "Stock Data Exploration & Model Evaluation",
    category: "data-science-learning",
    categoryLabel: "Data science learning project",
    maturityLabel: "Experiment repository",
    summary:
      "A learning repository exploring stock prediction workflows with classical models and neural-network approaches.",
    problem:
      "Practice data preparation, model training, and saved experiment artifacts without presenting financial advice.",
    caseStudy: {
      dataset: "TODO: verify the source, date range, fields, and split strategy used by the experiment repository.",
      cleaning: ["TODO: verify and document the preprocessing steps from the source code."],
      analysis: ["The repository explores several model approaches; comparable, reproducible evaluation evidence was not found in the audit."],
      visualization: "TODO: verify whether the repository contains a usable evaluation chart or other analytical output.",
      findings: ["No verified predictive-performance finding is available; accuracy claims are intentionally omitted."],
      recommendations: ["Use time-aware baselines and leakage checks before interpreting any future model comparisons."],
    },
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
    categoryLabel: "Software learning project",
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
    categoryLabel: "Nền tảng học full-stack có AI",
    maturityLabel: "Demo full-stack công khai",
    summary:
      "Nền tảng luyện phỏng vấn và học kỹ thuật có AI, sử dụng tài liệu PDF theo từng vị trí để tạo hội thoại, bài assessment, chấm điểm và phản hồi theo ngữ cảnh.",
    problem:
      "Các công cụ phỏng vấn AI chung có thể tạo câu hỏi không gắn với curriculum hoặc vị trí kỹ thuật cụ thể. DevMentor AI kết hợp retrieval dựa trên tài liệu, prompting có cấu trúc, authentication và trạng thái assessment thành một workflow học tập có thể tái lập.",
    story: {
      role:
        "Xây dựng ranh giới React/FastAPI, pipeline nạp và retrieval tài liệu, authentication flow, AI evaluation workflow, assessment state và cấu hình deployment.",
      value:
        "Thể hiện full-stack AI engineering thực tế qua phỏng vấn dựa trên tài liệu, API được bảo vệ, role-based access, assessment có chấm điểm và browser monitoring.",
      visualAlt:
        "Giao diện DevMentor AI thể hiện học kỹ thuật theo vị trí, chat dựa trên PDF, chấm điểm assessment và phản hồi phỏng vấn.",
      visualLabels: ["AI dựa trên PDF", "Phỏng vấn kỹ thuật", "Chấm điểm", "JWT / RBAC"],
    },
    contributions: [
      "Xây dựng React SPA responsive cho desktop, tablet và mobile.",
      "Triển khai backend FastAPI với Pydantic validation.",
      "Trích xuất PDF bằng PyPDF2 và lập chỉ mục các document chunk có overlap.",
      "Giới hạn relevance retrieval theo tài liệu của từng vị trí.",
      "Tạo câu hỏi phỏng vấn kỹ thuật và đánh giá câu trả lời bằng structured AI responses.",
      "Chấm điểm correctness, technical understanding, explanation và practical application.",
      "Triển khai bcrypt, JWT có thời hạn và phân quyền user/admin.",
      "Lưu user bằng MongoDB với JSON fallback cho môi trường development.",
      "Bảo vệ các route chat, assessment, document, report và admin.",
      "Xử lý camera permission và browser visibility events trong assessment.",
      "Lưu assessment state, câu trả lời, feedback, score và violation history.",
      "Hỗ trợ Docker, Docker Compose, Nginx và service health check.",
    ],
    demoNotice:
      "Backend miễn phí trên Render có thể cần một lúc để khởi động. Hãy kiểm tra backend trước, chờ phản hồi, rồi mở frontend demo.",
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/test_chat_bot`,
        note: "README, application source, deployment files và backend tests mô tả các capability được liệt kê.",
      },
      {
        label: "Live demo",
        href: "https://test-chat-bot-iota.vercel.app/",
        note: "Frontend deployment công khai; API trên Render có thể cần một khoảng cold-start ngắn.",
      },
    ],
    limitations: [
      "Không claim user base thực tế hoặc production deployment đã harden.",
      "Retrieval sử dụng document chunk và relevance ranking có giới hạn, chưa dùng embeddings/vector index.",
      "Tính năng AI cần provider key ở backend; không được expose secret qua biến môi trường phía browser.",
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
    caseStudy: {
      dataset: "TODO: Xác minh các trường dữ liệu và bản ghi mẫu từ output của repository.",
      cleaning: ["TODO: Ghi lại bước validation, normalization hoặc xử lý trùng sau khi kiểm tra output."],
      analysis: ["TODO: Xác định câu hỏi dữ liệu và phân tích có thể tái lập từ output đã xác minh."],
      visualization: "Project dùng script; chưa có dashboard hoặc visualization được ghi nhận.",
      findings: ["TODO: Chỉ thêm insight sau khi kiểm tra và tái lập output của repository."],
      recommendations: ["TODO: Đề xuất bước tiếp theo sau khi xác minh các trường inventory đã thu thập."],
    },
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
    categoryLabel: "Nền tảng e-commerce full-stack",
    maturityLabel: "Demo full-stack đã deploy",
    summary:
      "Nền tảng thương mại điện tử trang sức full-stack với giao diện riêng cho khách hàng và quản trị viên, hỗ trợ duyệt sản phẩm, giỏ hàng, đơn hàng và các nghiệp vụ quản trị.",
    problem:
      "Một cửa hàng online cần nhiều hơn product catalog: khách hàng cần authentication, browsing, cart và order flow; quản trị viên cần công cụ bảo vệ cho product, category, customer và order operations.",
    story: {
      role:
        "Xây dựng ứng dụng commerce modular với React client riêng cho customer và admin, sử dụng Node.js/Express API ở backend.",
      value:
        "Thể hiện e-commerce workflow end-to-end, authentication, CRUD administration, API security, MongoDB persistence và kiến trúc application multi-client.",
      visualAlt:
        "Giao diện thương mại trang sức thể hiện product browsing, shopping flow và quản trị cửa hàng.",
      visualLabels: ["E-commerce", "Admin dashboard", "Quản lý sản phẩm", "JWT authentication"],
    },
    contributions: [
      "Xây dựng React application riêng cho customer và administrator.",
      "Triển khai product browsing, search và category filtering.",
      "Thêm shopping cart, order placement và order tracking.",
      "Triển khai customer registration, authentication và profile management.",
      "Bảo vệ admin operations bằng JWT authentication và authorization.",
      "Xây dựng category/product CRUD cùng image handling.",
      "Thêm order status, customer management và dashboard analytics.",
      "Dùng bcrypt với MongoDB/Mongoose persistence.",
      "Áp dụng request validation và sanitization ở API boundary.",
      "Cấu hình Helmet security headers và API rate limiting.",
      "Hỗ trợ email notification qua Nodemailer.",
      "Chia sẻ API services và utility giữa các client.",
    ],
    demoNotice:
      "Demo trên Render có thể cần thời gian khởi động hoặc tạm thời không truy cập được; source repository luôn được giữ làm bằng chứng chính.",
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/webbanjewry`,
        note: "README, package manifests, middleware, API routes, React clients và data models hỗ trợ các capability được liệt kê.",
      },
      {
        label: "Live demo",
        href: "https://website-ban-jewry.onrender.com/",
        note: "Render deployment do chủ sở hữu cung cấp; availability có thể thay đổi khi service khởi động.",
      },
    ],
    limitations: [
      "Script test của server chủ động thoát với trạng thái chưa có test.",
      "Default admin credentials trong repository nguồn không an toàn cho production và không được tái sử dụng.",
      "Có URL deployment công khai nhưng không claim production traffic, customer usage hoặc uptime.",
    ],
  },
  {
    ...englishProjects[4],
    title: "Khám phá dữ liệu cổ phiếu và đánh giá mô hình",
    categoryLabel: "Dự án học data science",
    maturityLabel: "Repository thí nghiệm",
    summary:
      "Repository học tập khám phá workflow dự đoán cổ phiếu với mô hình cổ điển và neural network.",
    problem:
      "Luyện chuẩn bị dữ liệu, huấn luyện mô hình và lưu artifact thí nghiệm mà không biến thành lời khuyên tài chính.",
    caseStudy: {
      dataset: "TODO: Xác minh nguồn, khoảng thời gian, trường dữ liệu và cách chia tập từ repository.",
      cleaning: ["TODO: Xác minh và mô tả bước preprocessing trong source code."],
      analysis: ["Repository thử nghiệm nhiều mô hình; chưa tìm thấy bằng chứng evaluation có thể tái lập để so sánh."],
      visualization: "TODO: Kiểm tra repository có biểu đồ evaluation hoặc output phân tích sử dụng được không.",
      findings: ["Chưa có kết quả dự đoán được xác minh; không đưa ra claim về accuracy."],
      recommendations: ["Dùng baseline theo thời gian và kiểm tra data leakage trước khi diễn giải các so sánh mô hình sau này."],
    },
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

const vietnameseCustomerSupportAnalytics: Project = {
  ...customerSupportAnalytics,
  categoryLabel: "Case study phân tích vận hành",
  maturityLabel: "Dữ liệu tổng hợp · dự án portfolio",
  summary: "Phân tích chất lượng dịch vụ, SLA, backlog, nhu cầu theo thời gian và năng lực xử lý bằng dữ liệu support tổng hợp có thể tái lập.",
  problem: "Quản lý support cần xác định giai đoạn dịch vụ yếu, yếu tố đóng góp vào SLA breach, backlog lâu ngày và giờ cao điểm trước khi thay đổi cách phân bổ nhân sự.",
  story: {
    role: "Xây dựng phân tích Python và workbook Excel, chuẩn bị file truy vấn SQL, đồng thời tài liệu hóa model, DAX measures và dashboard specification cho Power BI.",
    value: "Chuyển câu hỏi vận hành thành dữ liệu đã đối soát, KPI dịch vụ, phát hiện và bước hành động thực tế.",
    visualAlt: "Ticket technical chiếm 29,49% tổng ticket và 50,09% resolution SLA breach trong dữ liệu tổng hợp.",
    visualLabels: ["14.774 ticket", "Phân tích SLA", "Tuổi backlog", "Năng lực xử lý"],
  },
  contributions: [
    "Phân tích 14.774 ticket snapshot đã làm sạch của 18 agent thuộc ba team, từ tháng 10/2025 đến tháng 9/2026.",
    "Đối soát bản ghi trùng, xung đột, không hợp lệ và được đưa vào quarantine trước khi phân tích.",
    "Dùng Python để tính kết quả đã công bố và chuẩn bị truy vấn SQL; MySQL chưa được chạy xác minh.",
    "Tạo workbook Excel gồm 14 sheet phân tích và bốn biểu đồ.",
    "Tài liệu hóa data model, DAX measures và dashboard specification ba trang cho Power BI.",
  ],
  evidence: [
    { label: "Repository GitHub", href: `${githubBase}/support-ops-analytics`, note: "Source data, cleaning, analysis, workbook, tests và tài liệu Power BI." },
    { label: "Workbook phân tích Excel", href: `${githubBase}/support-ops-analytics/blob/main/output/customer_support_analysis.xlsx`, note: "Mười bốn sheet và bốn biểu đồ thể hiện kết quả đã đối soát." },
  ],
  caseStudy: {
    dataset: "Dữ liệu support tổng hợp của 18 agent thuộc ba team, từ tháng 10/2025 đến tháng 9/2026; sau làm sạch còn 14.774 ticket snapshot. Đây không phải dữ liệu của công ty hay khách hàng trước đây.",
    cleaning: [
      "Loại 75 bản sao ticket và 36 bản sao work log; chuẩn hóa 120 giá trị channel.",
      "Đưa 60 phiên bản ticket xung đột thuộc 30 ID, lifecycle không hợp lệ và bản ghi thiếu agent hợp lệ vào quarantine.",
      "Đặt 23 điểm CSAT không hợp lệ thành null; giữ duration cực đoan nhưng hợp lệ thay vì coi thời gian chờ bất thường là lỗi.",
    ],
    analysis: [
      "So sánh first-response và resolution SLA compliance; mỗi chỉ số loại các trường hợp pending tương ứng.",
      "Phân nhóm resolution breach theo loại ticket và so sánh nhu cầu ngày thường, cuối tuần, khung giờ.",
      "Đánh giá tuổi backlog, mối liên hệ reopen/CSAT và workload so với productive capacity theo ngày.",
    ],
    visualization: "Workbook Excel đã xác minh gồm 14 sheet và bốn biểu đồ. Repository có data model, DAX measures và dashboard specification, nhưng chưa có PBIX hoặc ảnh dashboard.",
    findings: [
      "Ticket technical chiếm 29,49% tổng ticket nhưng góp 50,09% resolution SLA breach (1.760 trên 3.514).",
      "First-response compliance là 87,93%, so với 76,19% của resolution và 67,66% tổng thể; mỗi chỉ số loại các trường hợp pending.",
      "Lượng ticket trung bình ngày thường cao gấp 1,92 lần cuối tuần; 35,70% đến trong khung 09:00–11:59 giờ địa phương.",
    ],
    recommendations: [
      "Rà soát queue technical, thời gian chờ dependency và ownership trước khi tăng nhân sự trên tất cả team.",
      "Kiểm tra triage vào giờ cao điểm ngày thường và xác minh giả định handling time trước khi điều chỉnh lịch.",
    ],
  },
  limitations: [
    "Dataset là dữ liệu tổng hợp, không đại diện cho dữ liệu độc quyền, công ty cũ hay khách hàng thực tế.",
    "Kết quả công bố được tính bằng Python; MySQL chưa chạy xác minh và Power BI Desktop chưa được kiểm tra.",
    "Chưa có PBIX hoặc ảnh dashboard. Mối liên hệ trong dữ liệu tổng hợp không chứng minh nguyên nhân; reopen rate không đồng nghĩa first-contact resolution.",
  ],
};

const projectPriority = [
  "customer-support-operations-analytics",
  "stock-prediction-ai",
  "automated-it-asset-inventory",
  "devmentor-ai",
  "jewelry-commerce",
  "helpdesk-lab",
  "educational-platform",
  "user-setup-tool",
] as const;

function prioritizeProjects(projects: readonly Project[]): readonly Project[] {
  return projectPriority.map((slug) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Missing prioritized project: ${slug}`);
    return project;
  });
}

const prioritizedEnglishProjects = prioritizeProjects([customerSupportAnalytics, ...englishProjects]);
const prioritizedVietnameseProjects = prioritizeProjects([vietnameseCustomerSupportAnalytics, ...vietnameseProjects]);

export const portfolioContent = {
  en: {
    locale: "en",
    lang: "en",
    languageSwitchLabel: "Tiếng Việt",
    site: {
      title: "Truong Hoang Long | Data Analyst · Operations Analytics",
      description:
        "Entry-level Data Analyst portfolio focused on operations analytics, service performance, SQL, Excel, Python, and Power BI.",
      lastUpdated: "2026-10-07",
    },
    profile: {
      email: "TruongHoanglong1802@gmail.com",
      github: githubBase,
      // TODO: Add the verified LinkedIn profile URL when provided.
      linkedinUrl: null,
      location: "Ho Chi Minh City, Vietnam",
      name: "TRUONG HOANG LONG",
      // TODO: Add a verified current CV PDF before enabling the download action.
      resumeUrl: null,
      role: "Data Analyst | Operations Analytics",
      summary:
        "Entry-level Data Analyst focused on operations, bringing an IT and customer-support background to service performance, operational questions, and business decisions.",
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
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "About", href: "#profile" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "View Data Projects", href: "#projects" },
          { label: "GitHub", href: githubBase },
        ],
        eyebrow: "DATA ANALYST · OPERATIONS ANALYTICS",
        title: "Turning operational data into clear, actionable insights.",
        summary:
          "I combine an IT and support-operations background with SQL, Excel, Python, and Power BI to examine service performance, find operational bottlenecks, and support better decisions.",
        highlightLabel: "Data analysis toolkit",
        highlights: [
          "SQL",
          "Excel",
          "Power BI",
          "Python",
          "Data Cleaning",
          "KPI Analysis",
        ],
        statusLabel: "Target roles",
        statusItems: [
          { label: "Primary", value: "Data Analyst" },
          { label: "Focus", value: "Operations Analytics" },
          { label: "Also open to", value: "Operations Analyst" },
          { label: "Location", value: "Ho Chi Minh City" },
        ],
        statusNote: "Entry-level analytics candidate with IT and support operations experience.",
      },
      supportFlow: {
        eyebrow: "ANALYTICAL WORKFLOW",
        title: "How I Approach Data Problems",
        description:
          "A practical sequence from a business decision to evidence and a useful next step.",
        steps: [
          {
            title: "Ask",
            body: "Define the business question and the decision that needs support.",
          },
          {
            title: "Prepare",
            body: "Understand the sources, schema, and limitations of the data.",
          },
          {
            title: "Clean",
            body: "Validate, normalize, and reconcile unreliable records.",
          },
          {
            title: "Analyze",
            body: "Use SQL, Excel, or Python to test hypotheses and calculate KPIs.",
          },
          {
            title: "Visualize",
            body: "Communicate patterns through clear charts and dashboards.",
          },
          {
            title: "Recommend",
            body: "Translate findings into practical next actions.",
          },
        ],
        note: "Methods depend on the question, source quality, and intended decision.",
      },
      story: {
        eyebrow: "ABOUT",
        title: "From support operations to data analysis",
        body: "The questions behind daily support work led me toward operational analytics.",
        paragraphs: [
          "My background began in IT and software support, working directly with users, technical issues, and operational processes.",
          "Over time, I became more interested in the data behind those operations: why issues repeat, where service performance drops, which steps create bottlenecks, and what the evidence suggests should change.",
          "I am building that direction through SQL, Excel, Python, and Power BI, with a focus on operational and business analysis. My support experience helps me keep the people and process behind the numbers in view.",
        ],
      },
      metricsLabel: "",
      metrics: [],
      scrollNavigation: {
        label: "Portfolio sections",
        chapters: [
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },
          { label: "Skills", href: "#skills" },
          { label: "Workflow", href: "#workflow" },
          { label: "About", href: "#profile" },
          { label: "Contact", href: "#contact" },
        ],
      },
      supportProfileStory: {
        eyebrow: "TRANSFERABLE STRENGTHS",
        title: "Operational context, technical foundations",
        description: [
          "Support work gave me direct context on tickets, incidents, service expectations, and recurring user problems.",
          "My IT and software background helps me investigate structured data and communicate findings with both technical and operations teams.",
        ],
        capabilities: ["Data preparation", "KPI analysis", "Operational context", "Clear recommendations"],
      },
      careerGoal: {
        eyebrow: "Career direction",
        title: "Data Analyst focused on operations",
        opening: [
          "I am targeting entry-level Data Analyst roles, with a particular interest in operations, service performance, and business data.",
          "My IT and support background is the context I bring; SQL, Excel, Python, and Power BI are the tools I am using to build analytical evidence.",
        ],
        insight: "The transition is grounded in work I already understand: service workflows, cases, incidents, and operational handoffs.",
        labStory: "My portfolio projects let me practice turning those operational questions into analysis, findings, and recommendations.",
        focusItems: [
          "Service performance",
          "Operational bottlenecks",
          "Data quality",
          "Decision support",
        ],
        immediateGoal: "Currently looking for entry-level Data Analyst, Operations Analyst, Business Data Analyst, and Support Operations Analyst opportunities.",
        longTermTitle: "Primary target",
        longTermText: "Data Analyst",
        rationale: "A practical analytical workflow built on domain context and evidence:",
        connectionLabel: "From support work to analysis",
        connectionFlow: ["IT foundation", "Operations context", "Data quality", "SQL", "Analysis", "Recommendations"],
        closing: [
          "I am making a deliberate transition into analytics.",
          "The work is backed by projects, not a claim of prior analyst employment.",
        ],
        pathLabel: "The direction I am building",
        path: [
          { title: "IT & support", description: "Understand users, cases, systems, and operational handoffs" },
          { title: "Data practice", description: "Build skills in SQL, Excel, Python, data cleaning, and BI" },
          { title: "Operations analytics", description: "Connect reliable analysis to practical business decisions" },
        ],
      },
      focus: {
        eyebrow: "HOW I CAN CONTRIBUTE",
        title: "Useful analysis starts with trustworthy data",
        body: "I bring operational context to the analytical process, from preparing records to explaining what the results can and cannot support.",
        items: [
          {
            title: "Data Preparation",
            body: "Cleaning, validation, reconciliation, and data quality checks.",
          },
          {
            title: "Analysis",
            body: "SQL, Python/pandas, KPI analysis, and exploratory analysis.",
          },
          {
            title: "Visualization",
            body: "Excel reporting and Power BI data modeling and dashboard design.",
          },
          {
            title: "Business Thinking",
            body: "Turning findings into practical operational recommendations.",
          },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "Operations experience, analytical direction",
        body: "These are support and software roles, not previous Data Analyst positions. They provide context for the operational questions I now investigate through data.",
        items: [
          // TODO: Verify whether FPT belongs in this employment history and confirm its role, dates, and responsibilities.
          {
            company: "Concentrix",
            label: "REAL WORK EXPERIENCE",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "Jul 2025 – Jul 2026",
            responsibilities: [
              "Provided L1 platform support for international users through phone, email, CRM, and ticketing systems.",
              "Worked with a high-volume case queue while following service quality standards and structured support processes.",
              "Categorized issues, documented symptoms and reproduction details, and escalated cases with relevant evidence.",
              "Noticed recurring issue patterns while handling tickets and shared context through case notes and internal handoffs.",
              "Coordinated with internal teams and kept users informed through the case lifecycle.",
              "Supported Booking-related configuration issues for hotel partners.",
              "Owner-provided role context includes 110+ cases per week and 97% QA.",
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
              "Worked with PHP and MySQL while investigating and reproducing application issues.",
              "Queried or validated application data where needed to support troubleshooting.",
              "Tested fixes and documented technical details for follow-up.",
              "Coordinated with developers and business users during issue resolution.",
            ],
            highlights: [],
            tags: ["PHP", "MySQL", "SQL", "Testing", "Troubleshooting"],
          },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Tools for analysis and operations",
        body: "A focused toolkit grouped by how I prepare, analyze, communicate, and investigate operational data.",
        groups: [
          { title: "Data Analysis", items: ["Excel", "SQL", "Python", "pandas", "Data Cleaning", "Exploratory Data Analysis"] },
          { title: "Business Intelligence", items: ["Power BI", "Power Query", "DAX", "KPI Reporting", "Dashboard Design"] },
          { title: "Data & Technical Foundations", items: ["MySQL", "CSV / structured data", "REST APIs", "Git / GitHub"] },
          { title: "Professional / Operations", items: ["Problem Solving", "Root Cause Analysis", "Documentation", "Customer Support Operations", "Incident Investigation"] },
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
        eyebrow: "Data projects",
        title: "Analysis grounded in operational questions",
        body: "Start with a support operations case study using synthetic data, then review smaller projects in data exploration and automation.",
      },
      projectOverview: {
        eyebrow: "Featured work",
        title: "Customer Support Operations Analytics",
        body: "A reproducible project about service quality, SLA risk, demand, backlog, and workforce capacity. The dataset is synthetic; the repository separates verified outputs from unfinished Power BI work.",
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
        title: "Interested in how I approach real business data?",
        body: "I am looking for entry-level Data Analyst, Operations Analyst, Business Data Analyst, and Support Operations Analyst opportunities in Ho Chi Minh City.",
      },
    },
    contact: {
      links: [
        { label: "Email Me", href: "mailto:TruongHoanglong1802@gmail.com" },
        { label: "GitHub", href: githubBase },
      ],
      pendingNote: "TODO: Add the verified LinkedIn profile URL and current CV PDF when available.",
    },
    footer: {
      note: "Entry-level data analytics portfolio · Project evidence and limitations are stated explicitly.",
      updatedLabel: "Content updated: 2026-10-07",
    },
    projectLabels: {
      analysis: "Analysis",
      backToProjects: "Back to projects",
      cleaning: "Data Cleaning",
      context: "Context",
      dataset: "Dataset",
      contributions: "Contributions",
      evidence: "Evidence",
      earlierProjects: "Earlier Software Projects",
      featuredProjects: "Featured data projects",
      findings: "Key Findings",
      limitations: "Limitations",
      liveDemo: "Open Live Demo",
      moreProjects: "More learning projects",
      projectNavigation: "Featured project navigation",
      projectOf: "Project {current} of {total}",
      problem: "Problem",
      readCaseStudy: "View case study",
      recommendation: "Recommendation",
      resumePending: "Resume PDF pending",
      role: "My verified role",
      selectProject: "Select project",
      selectedProject: "Selected",
      sourceRepository: "Source code",
      techStack: "Tech stack",
      visualization: "Visualization",
      value: "Value demonstrated",
      wakeBackend: "Wake / Check Backend",
      linkedinPending: "LinkedIn profile pending",
    },
    notFound: {
      actionLabel: "Return home",
      body: "The requested portfolio page does not exist in the current audited content model.",
      eyebrow: "Not found",
      title: "This page is outside the current portfolio scope.",
    },
    projects: prioritizedEnglishProjects,
  },
  vi: {
    locale: "vi",
    lang: "vi",
    languageSwitchLabel: "English",
    site: {
      title: "Trương Hoàng Long | Data Analyst · Operations Analytics",
      description: "Portfolio Data Analyst entry-level tập trung vào phân tích vận hành, hiệu quả dịch vụ, SQL, Excel, Python và Power BI.",
      lastUpdated: "2026-10-07",
    },
    profile: {
      email: "TruongHoanglong1802@gmail.com",
      github: githubBase,
      // TODO: Bổ sung URL LinkedIn đã xác minh khi có thông tin.
      linkedinUrl: null,
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      name: "TRƯƠNG HOÀNG LONG",
      // TODO: Bổ sung CV PDF hiện tại đã xác minh trước khi bật nút tải.
      resumeUrl: null,
      role: "Data Analyst | Operations Analytics",
      summary: "Ứng viên Data Analyst entry-level tập trung vào vận hành, kết hợp nền tảng IT và customer support để phân tích hiệu quả dịch vụ, vấn đề vận hành và dữ liệu kinh doanh.",
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
      { label: "Dự án", href: "#projects" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Kỹ năng", href: "#skills" },
      { label: "Giới thiệu", href: "#profile" },
      { label: "Liên hệ", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "Xem dự án dữ liệu", href: "#projects" },
          { label: "GitHub", href: githubBase },
        ],
        eyebrow: "DATA ANALYST · OPERATIONS ANALYTICS",
        title: "Biến dữ liệu vận hành thành insight rõ ràng, hữu ích.",
        summary: "Em kết hợp nền tảng IT và support operations với SQL, Excel, Python và Power BI để phân tích hiệu quả dịch vụ, tìm điểm nghẽn vận hành và hỗ trợ ra quyết định.",
        highlightLabel: "Công cụ phân tích dữ liệu",
        highlights: [
          "SQL",
          "Excel",
          "Power BI",
          "Python",
          "Data Cleaning",
          "KPI Analysis",
        ],
        statusLabel: "Vị trí đang hướng tới",
        statusItems: [
          { label: "Mục tiêu chính", value: "Data Analyst" },
          { label: "Trọng tâm", value: "Operations Analytics" },
          { label: "Cũng quan tâm", value: "Operations Analyst" },
          { label: "Địa điểm", value: "TP. Hồ Chí Minh" },
        ],
        statusNote: "Ứng viên phân tích entry-level với kinh nghiệm IT và support operations.",
      },
      supportFlow: {
        eyebrow: "QUY TRÌNH PHÂN TÍCH",
        title: "Cách em tiếp cận bài toán dữ liệu",
        description: "Một quy trình thực tế từ quyết định kinh doanh đến bằng chứng và bước tiếp theo hữu ích.",
        steps: [
          {
            title: "Ask",
            body: "Xác định câu hỏi kinh doanh và quyết định cần được hỗ trợ.",
          },
          {
            title: "Prepare",
            body: "Tìm hiểu nguồn, schema và giới hạn của dữ liệu.",
          },
          {
            title: "Clean",
            body: "Kiểm tra, chuẩn hóa và đối soát các bản ghi chưa đáng tin cậy.",
          },
          {
            title: "Analyze",
            body: "Dùng SQL, Excel hoặc Python để kiểm tra giả thuyết và tính KPI.",
          },
          {
            title: "Visualize",
            body: "Trình bày xu hướng bằng biểu đồ và dashboard rõ ràng.",
          },
          {
            title: "Recommend",
            body: "Chuyển phát hiện thành những bước hành động thực tế.",
          },
        ],
        note: "Phương pháp được chọn theo câu hỏi, chất lượng nguồn và quyết định cần hỗ trợ.",
      },
      story: {
        eyebrow: "GIỚI THIỆU",
        title: "Từ support operations đến phân tích dữ liệu",
        body: "Những câu hỏi phía sau công việc support hằng ngày đã đưa em đến với phân tích vận hành.",
        paragraphs: [
          "Nền tảng của em bắt đầu từ IT và software support, nơi em làm việc trực tiếp với người dùng, vấn đề kỹ thuật và quy trình vận hành.",
          "Dần dần, em quan tâm nhiều hơn đến dữ liệu phía sau những hoạt động đó: vì sao vấn đề lặp lại, khi nào chất lượng dịch vụ giảm, bước nào tạo ra điểm nghẽn và dữ liệu gợi ý nên thay đổi điều gì.",
          "Em đang phát triển hướng đi này bằng SQL, Excel, Python và Power BI, tập trung vào phân tích vận hành và kinh doanh. Kinh nghiệm support giúp em luôn nhìn thấy con người và quy trình phía sau các con số.",
        ],
      },
      metricsLabel: "",
      metrics: [],
      scrollNavigation: {
        label: "Các mục portfolio",
        chapters: [
          { label: "Trang chủ", href: "#home" },
          { label: "Dự án", href: "#projects" },
          { label: "Kinh nghiệm", href: "#experience" },
          { label: "Kỹ năng", href: "#skills" },
          { label: "Quy trình", href: "#workflow" },
          { label: "Giới thiệu", href: "#profile" },
          { label: "Liên hệ", href: "#contact" },
        ],
      },
      supportProfileStory: {
        eyebrow: "NĂNG LỰC CÓ THỂ CHUYỂN ĐỔI",
        title: "Hiểu vận hành, có nền tảng kỹ thuật",
        description: [
          "Công việc support giúp em hiểu ticket, incident, kỳ vọng dịch vụ và những vấn đề người dùng thường gặp lại.",
          "Nền tảng IT và software giúp em điều tra dữ liệu có cấu trúc và trao đổi kết quả với cả nhóm kỹ thuật lẫn vận hành.",
        ],
        capabilities: ["Chuẩn bị dữ liệu", "Phân tích KPI", "Hiểu bối cảnh vận hành", "Đề xuất rõ ràng"],
      },
      careerGoal: {
        eyebrow: "Hướng nghề nghiệp",
        title: "Data Analyst tập trung vào vận hành",
        opening: [
          "Em đang hướng tới các vị trí Data Analyst entry-level, đặc biệt quan tâm đến vận hành, hiệu quả dịch vụ và dữ liệu kinh doanh.",
          "Kinh nghiệm IT và support là bối cảnh em mang theo; SQL, Excel, Python và Power BI là những công cụ em đang dùng để xây dựng bằng chứng phân tích.",
        ],
        insight: "Hướng chuyển đổi này bắt đầu từ những quy trình em đã hiểu: service workflow, case, incident và bàn giao vận hành.",
        labStory: "Các project portfolio giúp em thực hành chuyển câu hỏi vận hành thành phân tích, phát hiện và đề xuất.",
        focusItems: [
          "Hiệu quả dịch vụ",
          "Điểm nghẽn vận hành",
          "Chất lượng dữ liệu",
          "Hỗ trợ quyết định",
        ],
        immediateGoal: "Hiện em đang tìm kiếm cơ hội Data Analyst, Operations Analyst, Business Data Analyst và Support Operations Analyst entry-level.",
        longTermTitle: "Mục tiêu chính",
        longTermText: "Data Analyst",
        rationale: "Quy trình phân tích thực tế bắt đầu từ bối cảnh và bằng chứng:",
        connectionLabel: "Từ support đến phân tích",
        connectionFlow: ["Nền tảng IT", "Bối cảnh vận hành", "Chất lượng dữ liệu", "SQL", "Phân tích", "Đề xuất"],
        closing: [
          "Em đang chuyển hướng có chủ đích sang phân tích dữ liệu.",
          "Portfolio thể hiện năng lực qua project, không phải claim đã từng làm Data Analyst.",
        ],
        pathLabel: "Hướng em đang xây dựng",
        path: [
          { title: "IT & support", description: "Hiểu người dùng, case, hệ thống và quy trình bàn giao" },
          { title: "Thực hành dữ liệu", description: "Phát triển SQL, Excel, Python, data cleaning và BI" },
          { title: "Phân tích vận hành", description: "Kết nối phân tích đáng tin cậy với quyết định kinh doanh" },
        ],
      },
      focus: {
        eyebrow: "EM CÓ THỂ ĐÓNG GÓP",
        title: "Phân tích hữu ích bắt đầu từ dữ liệu đáng tin cậy",
        body: "Em mang bối cảnh vận hành vào quá trình phân tích, từ chuẩn bị dữ liệu đến giải thích điều gì có thể và chưa thể kết luận từ kết quả.",
        items: [
          { title: "Chuẩn bị dữ liệu", body: "Làm sạch, xác thực, đối soát và kiểm tra chất lượng dữ liệu." },
          { title: "Phân tích", body: "SQL, Python/pandas, KPI analysis và exploratory analysis." },
          { title: "Trực quan hóa", body: "Báo cáo Excel, data modeling và dashboard design bằng Power BI." },
          { title: "Tư duy kinh doanh", body: "Chuyển phát hiện thành đề xuất thực tế cho hoạt động vận hành." },
        ],
      },
      experience: {
        eyebrow: "Kinh nghiệm",
        title: "Kinh nghiệm vận hành, định hướng phân tích",
        body: "Đây là các vai trò support và software, không phải vị trí Data Analyst trước đây. Chúng tạo bối cảnh cho những câu hỏi vận hành em đang tìm hiểu bằng dữ liệu.",
        items: [
          // TODO: Xác minh có cần thêm FPT vào quá trình làm việc và kiểm tra chức danh, thời gian, trách nhiệm.
          {
            company: "Concentrix",
            label: "KINH NGHIỆM LÀM VIỆC THỰC TẾ",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "07/2025 – 07/2026",
            responsibilities: [
              "Cung cấp hỗ trợ nền tảng L1 cho người dùng quốc tế qua điện thoại, email, CRM và hệ thống ticket.",
              "Xử lý queue case với khối lượng cao theo tiêu chuẩn chất lượng dịch vụ và quy trình support có cấu trúc.",
              "Phân loại vấn đề, ghi nhận triệu chứng và bước tái hiện, chuyển escalation kèm bằng chứng phù hợp.",
              "Nhận diện các dạng vấn đề lặp lại trong quá trình xử lý ticket và chia sẻ bối cảnh qua case note, bàn giao nội bộ.",
              "Phối hợp với các nhóm nội bộ và cập nhật cho người dùng trong suốt vòng đời case.",
              "Hỗ trợ các vấn đề cấu hình liên quan đến Booking cho đối tác khách sạn.",
              "Thông tin vai trò do chủ sở hữu cung cấp gồm 110+ case mỗi tuần và 97% QA.",
            ],
            highlights: ["110+ case mỗi tuần", "97% QA"],
            tags: ["L1 Support", "Troubleshooting", "Incident Triage", "Evidence Collection", "Escalation", "User Communication", "Ticket Management"],
          },
          {
            company: "OPPO Vietnam",
            label: "NỀN TẢNG DEVELOPMENT",
            headline: "Nền tảng software giúp em hiểu thêm bối cảnh phía sau một ticket.",
            role: "PHP Developer",
            period: "04/2024 – 11/2024",
            responsibilities: ["Làm việc với PHP và MySQL khi điều tra, tái hiện vấn đề ứng dụng.", "Truy vấn hoặc kiểm tra dữ liệu ứng dụng khi cần để hỗ trợ troubleshooting.", "Kiểm thử bản sửa lỗi và ghi lại thông tin kỹ thuật để theo dõi.", "Phối hợp với developer và người dùng nghiệp vụ trong quá trình xử lý vấn đề."],
            highlights: [],
            tags: ["PHP", "MySQL", "SQL", "Testing", "Troubleshooting"],
          },
        ],
      },
      skills: {
        eyebrow: "Kỹ năng",
        title: "Công cụ cho phân tích và vận hành",
        body: "Bộ công cụ tập trung vào cách em chuẩn bị, phân tích, truyền đạt và điều tra dữ liệu vận hành.",
        groups: [
          { title: "Data Analysis", items: ["Excel", "SQL", "Python", "pandas", "Data Cleaning", "Exploratory Data Analysis"] },
          { title: "Business Intelligence", items: ["Power BI", "Power Query", "DAX", "KPI Reporting", "Dashboard Design"] },
          { title: "Data & Technical Foundations", items: ["MySQL", "CSV / structured data", "REST APIs", "Git / GitHub"] },
          { title: "Professional / Operations", items: ["Problem Solving", "Root Cause Analysis", "Documentation", "Customer Support Operations", "Incident Investigation"] },
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
      supportValues: {
        eyebrow: "Tư duy Support",
        title: "Cách em tiếp cận công việc Support",
        body: "Những nguyên tắc em muốn duy trì khi hỗ trợ người dùng và xử lý Incident.",
        items: [
          { title: "Hiểu vấn đề trước khi escalate", body: "Em cố gắng thu thập đủ thông tin để người tiếp nhận không phải bắt đầu điều tra lại từ đầu." },
          { title: "Giao tiếp rõ ràng", body: "Một vấn đề kỹ thuật cũng là trải nghiệm của người dùng. Em muốn người dùng hiểu chuyện gì đang xảy ra và bước tiếp theo là gì." },
          { title: "Xác minh trước khi đóng Incident", body: "Em không muốn mặc định rằng vấn đề đã được giải quyết chỉ vì một lần kiểm tra thành công." },
          { title: "Học từ Incident", body: "Nếu một vấn đề liên tục lặp lại, em muốn tìm cách cải thiện documentation, monitoring hoặc automation thay vì chỉ xử lý lại từ đầu." },
        ],
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
        eyebrow: "Dự án dữ liệu",
        title: "Phân tích từ những câu hỏi vận hành thực tế",
        body: "Bắt đầu với case study support operations dùng dữ liệu tổng hợp, sau đó xem các project nhỏ hơn về data exploration và automation.",
      },
      projectOverview: {
        eyebrow: "Dự án nổi bật",
        title: "Customer Support Operations Analytics",
        body: "Project có thể tái lập về chất lượng dịch vụ, SLA risk, demand, backlog và workforce capacity. Dataset là dữ liệu tổng hợp; repository phân biệt kết quả đã xác minh với phần Power BI chưa hoàn tất.",
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Anh/chị muốn tìm hiểu cách em tiếp cận dữ liệu kinh doanh thực tế?",
        body: "Em đang tìm kiếm cơ hội Data Analyst, Operations Analyst, Business Data Analyst và Support Operations Analyst entry-level tại TP. Hồ Chí Minh.",
      },
    },
    contact: {
      links: [{ label: "Email cho em", href: "mailto:TruongHoanglong1802@gmail.com" }, { label: "GitHub", href: githubBase }],
      pendingNote: "TODO: Bổ sung URL LinkedIn đã xác minh và CV PDF hiện tại khi có thông tin.",
    },
    footer: {
      note: "Portfolio phân tích dữ liệu entry-level · Bằng chứng và giới hạn của dự án được trình bày rõ.",
      updatedLabel: "Nội dung cập nhật: 2026-10-07",
    },
    projectLabels: {
      analysis: "Phân tích",
      backToProjects: "Quay lại dự án",
      cleaning: "Làm sạch dữ liệu",
      context: "Bối cảnh",
      dataset: "Dataset",
      contributions: "Đóng góp",
      evidence: "Bằng chứng",
      earlierProjects: "Các dự án phần mềm trước đây",
      featuredProjects: "Dự án dữ liệu nổi bật",
      findings: "Phát hiện chính",
      limitations: "Giới hạn",
      liveDemo: "Mở Live Demo",
      moreProjects: "Thêm dự án học tập",
      projectNavigation: "Điều hướng dự án nổi bật",
      projectOf: "Dự án {current} / {total}",
      problem: "Vấn đề",
      readCaseStudy: "Xem case study",
      recommendation: "Đề xuất",
      resumePending: "CV PDF chưa có",
      role: "Vai trò đã xác minh",
      selectProject: "Chọn dự án",
      selectedProject: "Đang chọn",
      sourceRepository: "Mã nguồn",
      techStack: "Tech stack",
      visualization: "Trực quan hóa",
      value: "Giá trị thể hiện",
      wakeBackend: "Khởi động / Kiểm tra Backend",
      linkedinPending: "Chưa có hồ sơ LinkedIn",
    },
    notFound: {
      actionLabel: "Về trang chủ",
      body: "Trang portfolio được yêu cầu không tồn tại trong content model đã audit hiện tại.",
      eyebrow: "Không tìm thấy",
      title: "Trang này nằm ngoài phạm vi portfolio hiện tại.",
    },
    projects: prioritizedVietnameseProjects,
  },
} as const satisfies Record<"en" | "vi", PortfolioContent>;
