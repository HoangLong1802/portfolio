import type { PortfolioContent, Project } from "@/types/portfolio";
import { personalContactLinks, personalInfo } from "@/config/personal-info";
import { supportReport } from "@/config/support-analytics";

const githubBase = personalInfo.github;

const customerSupportAnalytics: Project = {
  slug: "customer-support-operations-analytics",
  title: "Customer Support Operations Analytics",
  category: "data-science-learning",
  categoryLabel: "Operations analytics case study",
  maturityLabel: "Personal project · synthetic data",
  summary: "I analyzed ticket demand, SLA breaches and team workload to identify where support operations need closer attention.",
  problem: "Support teams need visibility into SLA breaches, ticket demand, backlog and agent workload to allocate resources and improve service performance.",
  story: {
    role: "Cleaned and analyzed the data in Python, wrote MySQL analysis queries, modeled it in Power BI with DAX and built an Excel reporting workbook.",
    value: "Connected service questions with data preparation, KPI analysis and practical recommendations.",
    visualAlt: "Technical cases account for 29.49% of tickets and 50.09% of resolution SLA breaches in the synthetic dataset.",
    visualLabels: ["14,774 tickets", "SLA analysis", "Backlog aging", "Workload planning"],
  },
  contributions: [
    "Analyzed 14,774 cleaned ticket snapshots across 18 agents and three teams.",
    "Reconciled duplicates, conflicting records and invalid data before calculating KPIs.",
    "Calculated findings in Python and wrote MySQL queries for service, customer and workforce questions.",
    "Built a five-page Power BI report on a star-schema model with 68 DAX measures.",
    "Checked the main KPIs against an independent Python calculation: 21 of 21 checks matched.",
    "Produced an Excel workbook with 14 reporting sheets and five charts.",
  ],
  techStack: ["Power BI", "DAX", "Power Query", "Python", "pandas", "SQL / MySQL", "Excel"],
  evidence: [
    { label: "GitHub repository", href: "https://github.com/HoangLong1802/support-ops-analytics", note: "Data, Python pipeline, SQL queries and reporting outputs." },
    { label: "Power BI model and DAX", href: supportReport.powerbiHref, note: "Report file, Power Query code and the DAX measures." },
    { label: "Validation report", href: supportReport.testReportHref, note: "Power BI results compared with an independent Python calculation." },
    { label: "Download Excel report", href: supportReport.workbookHref, note: "14 reporting sheets and five charts covering service, demand and workload." },
    { label: "Open SQL on GitHub", href: supportReport.sqlHref, note: "MySQL queries for SLA, demand, CSAT, backlog and workforce questions." },
    { label: "Data quality report", href: supportReport.qualityHref, note: "Cleaning decisions, row reconciliation and the limits of the analysis." },
  ],
  caseStudy: {
    dataset: "Five synthetic datasets cover tickets, handling work logs, daily workforce capacity, agents and SLA policies. They represent 18 agents in three teams from October 2025 to September 2026. After cleaning, 14,774 ticket snapshots remain, with dimensions for category, priority, channel, date and team.",
    workflow: ["Raw CSV", "Data validation", "Python cleaning", "SQL analysis (MySQL 8.4 in CI)", "Power BI model & DAX", "Power BI and Excel reporting"],
    cleaning: [
      "Removed 75 duplicate ticket copies and 36 duplicate work-log copies; normalized channel values.",
      "Separated conflicting ticket versions and invalid lifecycles from the records used for analysis.",
      "Set invalid CSAT scores to null and retained unusual durations when the underlying events were valid.",
    ],
    analysis: [
      "SLA performance — compared response and resolution compliance, then segmented breaches by category and priority.",
      "Ticket demand — compared daily arrivals, weekdays, weekends and local arrival hours.",
      "Backlog — grouped unresolved cases by age, category and owner.",
      "CSAT — compared survey participation, resolution duration and reopened-ticket cohorts.",
      "Agent and team performance — reviewed service outcomes alongside case mix and sample size.",
      "Workload and staffing — compared recorded handling effort with daily productive capacity.",
    ],
    visualization: "The Power BI report has five pages: overview, SLA and demand, workforce, customer experience, and backlog risk. The Excel report adds 14 sheets and five charts. The MySQL queries use JOINs, CTEs, aggregations and window functions; they run in a GitHub Actions workflow on MySQL 8.4, not on a local server.",
    findings: [
      "Technical cases are 29.49% of tickets but contribute 50.09% of resolution SLA breaches (1,760 of 3,514).",
      "Average daily arrivals are 46.90 on weekdays and 24.37 on weekends, a 1.92× ratio across 261 weekdays and 104 weekend days.",
      "At the 1 October 2026 snapshot, 552 of 578 unresolved tickets were over 48 hours old. This makes aged backlog another priority for review.",
    ],
    recommendations: [
      "Prioritize Technical-case root-cause review: inspect bug queues, handoffs and dependency aging before changing coverage.",
      "Review weekday assignment and morning triage coverage; compare arrival timing with handling effort before adjusting shifts.",
      "Review backlog by age, category, priority and owner, with a named next action for cases waiting on dependencies.",
      "Investigate agent and team SLA outliers alongside case mix, sample size and daily workload before drawing performance conclusions.",
    ],
  },
  limitations: [
    "This personal project uses synthetic data to practice operational analysis.",
    "Recommendations are proposals for further review; their business impact has not been measured.",
    "Arrival timing describes demand, while work logs measure handling effort. Daily capacity estimates cannot determine exact shift gaps. CSAT reflects respondents; ticket snapshots cannot reconstruct every handoff. Associations alone do not establish causes.",
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
      "A personal learning platform with a public demo.",
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
        "Helpdesk Lab workflow illustration: application health, a P2 incident, n8n workflow automation, and three-check recovery.",
      visualLabels: ["Health signal", "Incident P2", "n8n workflow", "3-check recovery"],
    },
    contributions: [
      "Composed GLPI, MariaDB, phpMyAdmin, n8n, and web services with Docker Compose.",
      "Documented architecture, release checks, and support workflow boundaries.",
      "Added PowerShell and Bash automation around local lab setup and verification.",
      "Documented the GLPI integration and local ticket-creation fallback.",
    ],
    techStack: ["Docker Compose", "GLPI", "MariaDB", "Nginx", "n8n", "PowerShell", "Bash"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/Helpdesk-Lab`,
        note: "Docker configuration, architecture and workflow documentation.",
      },
    ],
    limitations: [
      "Ticket creation uses a local database fallback alongside GLPI.",
      "A local portfolio lab for practicing incident workflows.",
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
        "Asset inventory workflow illustration: a device scan, Windows and Linux collectors, and CSV output.",
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
        note: "Windows and Linux collectors with setup documentation.",
      },
    ],
    limitations: [
      "The collectors write inventory records to local CSV and log files.",
      "Designed for local inventory collection practice.",
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
        note: "Public Render demo; availability can vary while the service wakes.",
      },
    ],
    limitations: [
      "Personal commerce demo with separate customer and administrator clients.",
    ],
  },
  {
    slug: "stock-prediction-ai",
    title: "Stock Data Exploration & Model Evaluation",
    category: "data-science-learning",
    categoryLabel: "Data science learning project",
    maturityLabel: "Experiment repository",
    summary:
      "Explored stock-price forecasting using multiple machine-learning architectures and compared preprocessing, feature engineering and modeling approaches.",
    problem:
      "Practice data preparation, model training, and saved experiment artifacts without presenting financial advice.",
    contributions: [
      "Explored Python data-science workflows with NumPy, pandas, scikit-learn, PyTorch, and XGBoost.",
      "Organized multiple model approaches and saved artifacts for later inspection.",
    ],
    techStack: ["Python", "NumPy", "pandas", "scikit-learn", "PyTorch", "XGBoost"],
    evidence: [
      {
        label: "Source repository",
        href: `${githubBase}/stock_prediction_AI`,
        note: "Python experiments, dependencies and model artifacts.",
      },
    ],
    limitations: [
      "A learning experiment focused on comparing time-series modeling approaches.",
      "Model exploration using historical stock data.",
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
        note: "React source, state management and mock-service implementation.",
      },
    ],
    limitations: [
      "AI behavior is simulated and must not be described as a production AI tutor.",
      "A frontend prototype using mock services.",
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
        note: "Cross-platform scripts and setup instructions.",
      },
    ],
    limitations: [
      "Local account creation requires administrator permissions.",
      "A scripting exercise for local account setup and logging.",
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
      "Nền tảng học tập cá nhân với demo công khai.",
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
        "Minh họa quy trình Helpdesk Lab: health ứng dụng, incident P2, n8n workflow và phục hồi ba lần kiểm tra.",
      visualLabels: ["Health signal", "Incident P2", "n8n workflow", "Phục hồi 3 bước"],
    },
    contributions: [
      "Compose GLPI, MariaDB, phpMyAdmin, n8n và web services bằng Docker Compose.",
      "Ghi tài liệu architecture, release checks và ranh giới workflow support.",
      "Thêm PowerShell và Bash automation cho thiết lập và kiểm tra lab cục bộ.",
      "Ghi tài liệu tích hợp GLPI và cách tạo ticket bằng local fallback.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/Helpdesk-Lab`,
        note: "Cấu hình Docker, kiến trúc và tài liệu quy trình.",
      },
    ],
    limitations: [
      "Tạo ticket bằng local database fallback bên cạnh GLPI.",
      "Lab portfolio cục bộ để thực hành quy trình incident.",
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
        "Minh họa quy trình asset inventory: quét thiết bị, collector Windows/Linux và output CSV.",
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
        note: "Script thu thập Windows/Linux và hướng dẫn thiết lập.",
      },
    ],
    limitations: [
      "Collector ghi dữ liệu inventory vào CSV và log cục bộ.",
      "Thiết kế cho thực hành thu thập inventory cục bộ.",
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
      "Demo trên Render có thể cần thời gian khởi động hoặc tạm thời không truy cập được; có thể xem mã nguồn và hướng dẫn trong repository.",
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/webbanjewry`,
        note: "README, package manifests, middleware, API routes, React clients và data models hỗ trợ các capability được liệt kê.",
      },
      {
        label: "Live demo",
        href: "https://website-ban-jewry.onrender.com/",
        note: "Demo Render công khai; availability có thể thay đổi khi service khởi động.",
      },
    ],
    limitations: [
      "Demo commerce cá nhân với client riêng cho khách hàng và quản trị viên.",
    ],
  },
  {
    ...englishProjects[4],
    title: "Khám phá dữ liệu cổ phiếu và đánh giá mô hình",
    categoryLabel: "Dự án học data science",
    maturityLabel: "Repository thí nghiệm",
    summary:
      "Khám phá dự báo giá cổ phiếu với nhiều kiến trúc học máy, so sánh cách tiền xử lý, xây dựng đặc trưng và mô hình hóa.",
    problem:
      "Luyện chuẩn bị dữ liệu, huấn luyện mô hình và lưu artifact thí nghiệm mà không biến thành lời khuyên tài chính.",
    contributions: [
      "Khám phá workflow data science Python với NumPy, pandas, scikit-learn, PyTorch và XGBoost.",
      "Tổ chức nhiều hướng mô hình và artifact đã lưu để kiểm tra sau.",
    ],
    evidence: [
      {
        label: "Repository nguồn",
        href: `${githubBase}/stock_prediction_AI`,
        note: "Thí nghiệm Python, thư viện và model artifact.",
      },
    ],
    limitations: [
      "Thí nghiệm học tập tập trung so sánh cách mô hình hóa chuỗi thời gian.",
      "Khám phá mô hình bằng dữ liệu cổ phiếu lịch sử.",
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
        note: "Source React, quản lý trạng thái và mock service.",
      },
    ],
    limitations: [
      "Hành vi AI là mô phỏng và không được mô tả như production AI tutor.",
      "Prototype frontend sử dụng mock service.",
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
        note: "Script đa nền tảng và hướng dẫn sử dụng.",
      },
    ],
    limitations: [
      "Tạo tài khoản cục bộ cần quyền quản trị viên.",
      "Bài thực hành scripting cho thiết lập tài khoản và ghi log cục bộ.",
    ],
  },
] as const satisfies readonly Project[];

const vietnameseCustomerSupportAnalytics: Project = {
  ...customerSupportAnalytics,
  categoryLabel: "Case study phân tích vận hành",
  maturityLabel: "Dự án cá nhân · dữ liệu mô phỏng",
  summary: "Em phân tích lượng ticket, vi phạm SLA và khối lượng công việc để xác định những vấn đề cần ưu tiên rà soát trong hoạt động hỗ trợ.",
  problem: "Nhóm hỗ trợ cần theo dõi vi phạm SLA, lượng ticket, backlog và khối lượng công việc để phân bổ nguồn lực và cải thiện chất lượng dịch vụ.",
  story: {
    role: "Làm sạch và phân tích dữ liệu bằng Python, viết truy vấn MySQL, xây dựng mô hình Power BI với DAX và workbook báo cáo Excel.",
    value: "Kết nối câu hỏi vận hành với chuẩn bị dữ liệu, phân tích KPI và đề xuất thực tế.",
    visualAlt: "Nhóm Technical chiếm 29,49% ticket và 50,09% vi phạm SLA xử lý trong bộ dữ liệu mô phỏng.",
    visualLabels: ["14.774 ticket", "Phân tích SLA", "Tuổi backlog", "Khối lượng công việc"],
  },
  contributions: [
    "Phân tích 14.774 ticket snapshot sau làm sạch, thuộc 18 nhân viên và ba nhóm.",
    "Đối soát dữ liệu trùng, xung đột và không hợp lệ trước khi tính KPI.",
    "Tính kết quả bằng Python và viết truy vấn MySQL cho các câu hỏi dịch vụ, khách hàng và nhân lực.",
    "Xây dựng báo cáo Power BI năm trang trên mô hình star schema với 68 measure DAX.",
    "Đối chiếu các KPI chính với phép tính Python độc lập: khớp 21 trên 21 kiểm tra.",
    "Tạo workbook Excel gồm 14 sheet báo cáo và năm biểu đồ.",
  ],
  evidence: [
    { label: "Repository GitHub", href: "https://github.com/HoangLong1802/support-ops-analytics", note: "Dữ liệu, pipeline Python, truy vấn SQL và báo cáo." },
    { label: "Mô hình Power BI và DAX", href: supportReport.powerbiHref, note: "File báo cáo, code Power Query và các measure DAX." },
    { label: "Báo cáo kiểm chứng", href: supportReport.testReportHref, note: "Kết quả Power BI được so với phép tính Python độc lập." },
    { label: "Tải báo cáo Excel", href: supportReport.workbookHref, note: "14 sheet và năm biểu đồ về dịch vụ, lượng ticket và khối lượng công việc." },
    { label: "Mở SQL trên GitHub", href: supportReport.sqlHref, note: "Truy vấn MySQL cho SLA, lượng ticket, CSAT, backlog và nhân lực." },
    { label: "Báo cáo chất lượng dữ liệu", href: supportReport.qualityHref, note: "Quyết định làm sạch, đối soát số dòng và giới hạn phân tích." },
  ],
  caseStudy: {
    dataset: "Năm bộ dữ liệu mô phỏng gồm ticket, nhật ký xử lý, năng lực nhân lực theo ngày, nhân viên và chính sách SLA. Dữ liệu bao gồm 18 nhân viên thuộc ba nhóm, từ tháng 10/2025 đến tháng 9/2026. Sau làm sạch còn 14.774 ticket snapshot, với các chiều loại vấn đề, độ ưu tiên, kênh, ngày và nhóm.",
    workflow: ["CSV gốc", "Kiểm tra dữ liệu", "Làm sạch bằng Python", "Phân tích SQL (MySQL 8.4 trong CI)", "Mô hình Power BI & DAX", "Báo cáo Power BI và Excel"],
    cleaning: [
      "Loại 75 bản sao ticket và 36 bản sao nhật ký xử lý; chuẩn hóa giá trị kênh.",
      "Tách phiên bản ticket xung đột và vòng đời không hợp lệ khỏi dữ liệu phân tích.",
      "Đặt điểm CSAT không hợp lệ thành null; giữ thời gian xử lý bất thường khi các mốc sự kiện vẫn hợp lệ.",
    ],
    analysis: [
      "Hiệu quả SLA — so sánh SLA phản hồi và xử lý, phân nhóm vi phạm theo loại vấn đề và độ ưu tiên.",
      "Lượng ticket — so sánh theo ngày, ngày thường, cuối tuần và giờ tiếp nhận địa phương.",
      "Backlog — nhóm các case chưa xử lý theo tuổi, loại vấn đề và người phụ trách.",
      "CSAT — so sánh tỷ lệ trả lời khảo sát, thời gian xử lý và nhóm ticket mở lại.",
      "Hiệu quả nhân viên và nhóm — xem kết quả dịch vụ cùng cơ cấu case và cỡ mẫu.",
      "Khối lượng công việc và nhân lực — so sánh thời gian xử lý ghi nhận với năng lực làm việc theo ngày.",
    ],
    visualization: "Báo cáo Power BI gồm năm trang: tổng quan, SLA và lượng ticket, nhân lực, trải nghiệm khách hàng, và rủi ro backlog. Báo cáo Excel bổ sung 14 sheet và năm biểu đồ. Truy vấn MySQL dùng JOIN, CTE, tổng hợp và hàm cửa sổ; chúng chạy trong workflow GitHub Actions trên MySQL 8.4, chưa chạy trên máy chủ cục bộ.",
    findings: [
      "Nhóm Technical chiếm 29,49% ticket nhưng đóng góp 50,09% vi phạm SLA xử lý (1.760 trên 3.514).",
      "Trung bình mỗi ngày có 46,90 ticket vào ngày thường và 24,37 vào cuối tuần, chênh lệch 1,92 lần trên 261 ngày thường và 104 ngày cuối tuần.",
      "Tại thời điểm chốt dữ liệu 01/10/2026, 552 trên 578 ticket chưa xử lý đã tồn tại hơn 48 giờ. Backlog lâu ngày là một nhóm cần ưu tiên rà soát.",
    ],
    recommendations: [
      "Ưu tiên tìm nguyên nhân ở nhóm Technical: rà soát hàng đợi lỗi, bàn giao và thời gian chờ bên liên quan trước khi đổi mức độ bao phủ.",
      "Rà soát phân công ngày thường và tiếp nhận buổi sáng; so sánh giờ đến với thời gian xử lý trước khi điều chỉnh ca.",
      "Theo dõi backlog theo tuổi, loại vấn đề, độ ưu tiên và người phụ trách, với bước tiếp theo cụ thể cho case đang chờ.",
      "Điều tra nhân viên hoặc nhóm có SLA khác biệt cùng cơ cấu case, cỡ mẫu và khối lượng công việc trước khi kết luận về hiệu suất.",
    ],
  },
  limitations: [
    "Dự án cá nhân sử dụng dữ liệu mô phỏng để thực hành phân tích vận hành.",
    "Các đề xuất phục vụ điều tra tiếp; tác động kinh doanh chưa được đo lường.",
    "Giờ tiếp nhận mô tả nhu cầu, còn nhật ký xử lý đo công sức thực tế. Ước tính năng lực theo ngày chưa xác định được thiếu hụt từng ca. CSAT chỉ phản ánh người trả lời; snapshot ticket không tái hiện mọi lần bàn giao. Mối liên hệ chưa đủ để kết luận nguyên nhân.",
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
      title: "Truong Hoang Long | Data Analyst Portfolio",
      description:
        "Junior Data Analyst portfolio featuring SQL, Python, Power BI and operations analytics projects.",
      lastUpdated: "2026-10-08",
    },
    profile: {
      email: personalInfo.email,
      phone: personalInfo.phone,
      github: githubBase,
      linkedinUrl: null,
      location: "Ho Chi Minh City, Vietnam",
      name: personalInfo.name,
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
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#profile" },
      { label: "Contact", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "View Projects", href: "#projects" },
          { label: "GitHub", href: githubBase },
        ],
        eyebrow: "DATA ANALYST · OPERATIONS ANALYTICS",
        title: "Understanding support operations through data.",
        summary:
          "IT graduate with experience in software, databases and customer-support operations. I use SQL, Python, Power BI and Excel to investigate service delays, ticket demand and team workload.",
        highlightLabel: "Data analysis toolkit",
        highlights: ["SQL", "Python", "Power BI", "Excel"],
        statusLabel: "Target roles",
        statusItems: [
          { label: "Primary", value: "Junior Data Analyst" },
          { label: "Focus", value: "Operations Analytics" },
          { label: "Also open to", value: "Operations · Reporting · Data Operations" },
          { label: "Location", value: "Ho Chi Minh City" },
        ],
        statusNote: "Entry-level analytics candidate with IT and support operations experience.",
      },
      supportFlow: {
        eyebrow: "ANALYTICAL WORKFLOW",
        title: "How I Approach Data Problems",
        description:
          "A practical sequence from a business decision to findings and a useful next step.",
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
          "Working with support cases made me curious about recurring issues, service delays and the way workload is distributed. I now explore those questions through operations analytics projects.",
          "I use SQL, Python and Excel to connect the numbers with the people and processes behind them.",
        ],
      },
      metricsLabel: "",
      metrics: [],
      scrollNavigation: {
        label: "Portfolio sections",
        chapters: [
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
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
          "My IT and support background is the context I bring; SQL, Excel and Python help me explore operational questions.",
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
        rationale: "A practical analytical workflow built on domain context and data:",
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
        body: "My support analytics project combines Python data cleaning, SQL analysis, a five-page Power BI report and a 14-sheet Excel report.",
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
            body: "Excel reports, KPI summaries and clear charts.",
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
        body: "Customer-support operations and software development gave me practical experience with structured cases, data checks and cross-team investigation.",
        items: [
          {
            company: "Concentrix",
            label: "REAL WORK EXPERIENCE",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "Jul 2025 – Jul 2026",
            responsibilities: [
              "Handled a high-volume queue of customer and partner cases through phone, email and CRM, following structured service processes.",
              "Reviewed account and case data, categorized issues and documented recurring patterns for follow-up.",
              "Worked to QA and service standards, maintaining clear case notes and handoffs.",
              "Coordinated cross-team investigations into platform and hotel-partner issues, keeping users informed.",
            ],
            highlights: ["110+ cases per week", "97% QA"],
            tags: ["Case Categorization", "QA / Service Metrics", "Documentation", "Cross-team Investigation"],
          },
          {
            company: "OPPO Vietnam",
            label: "DEVELOPMENT BACKGROUND",
            headline: "Development taught me what can happen behind the ticket.",
            role: "PHP Developer",
            period: "Apr 2024 – Apr 2025",
            responsibilities: [
              "Developed PHP applications and used SQL/MySQL queries to investigate data and application issues.",
              "Reproduced bugs and compared expected application behavior with system and database results.",
              "Validated data, tested fixes and documented technical findings for follow-up.",
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
          { title: "Data Analysis", items: ["SQL", "MySQL", "Python", "pandas", "NumPy", "Excel"] },
          { title: "SQL & Data", items: ["JOINs", "CTEs", "Aggregations", "Window Functions", "Data Cleaning", "Data Validation"] },
          { title: "Reporting", items: ["Power BI", "DAX", "Power Query", "Excel Reporting", "KPI Summaries"] },
          { title: "Technical", items: ["Git", "GitHub", "REST APIs", "PHP"] },
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
          { value: "12", label: "Local application API tests" },
          { value: "6", label: "Local n8n workflow tests" },
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
        body: "Further practice in data collection, automation and modeling.",
      },
      projectOverview: {
        eyebrow: "Featured work",
        title: "Customer Support Operations Analytics",
        body: "A personal project connecting support data with service performance and workload decisions.",
      },
      education: {
        eyebrow: "Education",
        title: "Education",
        body: "Information Technology graduate, Van Lang University.",
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
        title: "Let’s talk about data and operations.",
        body: "Open to Junior Data Analyst, Operations Analyst, Reporting Analyst and Data Operations roles in Ho Chi Minh City.",
      },
    },
    contact: {
      links: [
        { label: personalInfo.email, href: personalContactLinks.email },
        { label: personalInfo.phone, href: personalContactLinks.phone },
        { label: "GitHub", href: githubBase },
      ],
    },
    footer: {
      note: "Truong Hoang Long · Data Analyst | Operations Analytics",
      updatedLabel: "Ho Chi Minh City, Vietnam",
    },
    projectLabels: {
      analysis: "Analysis",
      backToProjects: "Back to projects",
      cleaning: "Data Cleaning",
      context: "Context",
      dataset: "Dataset",
      contributions: "Contributions",
      evidence: "Repository & reports",
      earlierProjects: "Earlier Software Projects",
      featuredProjects: "Featured data projects",
      findings: "Key Findings",
      limitations: "Limitations",
      liveDemo: "Open Live Demo",
      moreProjects: "Other selected projects",
      exploreProject: "Explore project",
      projectNavigation: "Featured project navigation",
      projectOf: "Project {current} of {total}",
      problem: "Business Problem",
      readCaseStudy: "View case study",
      recommendation: "Recommendations",
      overview: "Overview",
      workflow: "Workflow",
      role: "My contribution",
      selectProject: "Select project",
      selectedProject: "Selected",
      sourceRepository: "Source code",
      techStack: "Tools",
      visualization: "Visualization",
      value: "Value demonstrated",
      wakeBackend: "Wake / Check Backend",
    },
    notFound: {
      actionLabel: "Return home",
      body: "This page may have moved. You can find my projects and contact details on the homepage.",
      eyebrow: "Not found",
      title: "Page not found",
    },
    projects: prioritizedEnglishProjects,
  },
  vi: {
    locale: "vi",
    lang: "vi",
    languageSwitchLabel: "English",
    site: {
      title: "Truong Hoang Long | Portfolio Data Analyst",
      description: "Portfolio Junior Data Analyst với các dự án SQL, Python, Power BI và phân tích vận hành.",
      lastUpdated: "2026-10-08",
    },
    profile: {
      email: personalInfo.email,
      phone: personalInfo.phone,
      github: githubBase,
      linkedinUrl: null,
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      name: personalInfo.name,
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
      { label: "Kỹ năng", href: "#skills" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Giới thiệu", href: "#profile" },
      { label: "Liên hệ", href: "#contact" },
    ],
    home: {
      hero: {
        actions: [
          { label: "Xem dự án", href: "#projects" },
          { label: "GitHub", href: githubBase },
        ],
        eyebrow: "DATA ANALYST · OPERATIONS ANALYTICS",
        title: "Hiểu vận hành hỗ trợ qua dữ liệu.",
        summary: "Em tốt nghiệp CNTT, có kinh nghiệm phần mềm, cơ sở dữ liệu và hỗ trợ khách hàng. Em dùng SQL, Python, Power BI và Excel để phân tích chậm trễ dịch vụ, lượng ticket và khối lượng công việc.",
        highlightLabel: "Công cụ phân tích dữ liệu",
        highlights: ["SQL", "Python", "Power BI", "Excel"],
        statusLabel: "Vị trí đang hướng tới",
        statusItems: [
          { label: "Mục tiêu chính", value: "Junior Data Analyst" },
          { label: "Trọng tâm", value: "Operations Analytics" },
          { label: "Cũng quan tâm", value: "Operations · Reporting · Data Operations" },
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
          "Nền tảng của em bắt đầu từ IT và software support, với công việc phát triển PHP/MySQL, kiểm tra dữ liệu tài khoản và xử lý case.",
          "Những vấn đề lặp lại và thời gian chờ xử lý khiến em muốn tìm hiểu dữ liệu phía sau công việc hằng ngày. Dự án support analytics là cách em thực hành trả lời các câu hỏi đó bằng SQL, Python và Excel.",
        ],
      },
      metricsLabel: "",
      metrics: [],
      scrollNavigation: {
        label: "Các mục portfolio",
        chapters: [
          { label: "Trang chủ", href: "#home" },
          { label: "Dự án", href: "#projects" },
          { label: "Kỹ năng", href: "#skills" },
          { label: "Kinh nghiệm", href: "#experience" },
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
          "Kinh nghiệm IT và support là bối cảnh em mang theo; SQL, Excel và Python giúp em tìm hiểu các câu hỏi vận hành.",
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
        body: "Dự án support analytics kết hợp làm sạch dữ liệu bằng Python, phân tích SQL, báo cáo Power BI năm trang và báo cáo Excel 14 sheet.",
        items: [
          { title: "Chuẩn bị dữ liệu", body: "Làm sạch, xác thực, đối soát và kiểm tra chất lượng dữ liệu." },
          { title: "Phân tích", body: "SQL, Python/pandas, KPI analysis và exploratory analysis." },
          { title: "Trực quan hóa", body: "Báo cáo Excel, tổng hợp KPI và biểu đồ rõ ràng." },
          { title: "Tư duy kinh doanh", body: "Chuyển phát hiện thành đề xuất thực tế cho hoạt động vận hành." },
        ],
      },
      experience: {
        eyebrow: "Kinh nghiệm",
        title: "Kinh nghiệm vận hành, định hướng phân tích",
        body: "Kinh nghiệm hỗ trợ khách hàng và phát triển phần mềm giúp em hiểu cách xử lý case, kiểm tra dữ liệu và phối hợp điều tra vấn đề.",
        items: [
          {
            company: "Concentrix",
            label: "KINH NGHIỆM LÀM VIỆC THỰC TẾ",
            role: "Customer Service Specialist – Platform & Partner Support",
            period: "07/2025 – 07/2026",
            responsibilities: [
              "Xử lý lượng lớn case của khách hàng và đối tác qua điện thoại, email và CRM theo quy trình dịch vụ có cấu trúc.",
              "Kiểm tra dữ liệu tài khoản và case, phân loại vấn đề và ghi nhận các dạng lỗi lặp lại để theo dõi.",
              "Làm việc theo tiêu chuẩn QA và dịch vụ, giữ case note và thông tin bàn giao rõ ràng.",
              "Phối hợp điều tra vấn đề nền tảng và đối tác khách sạn giữa các nhóm, cập nhật cho người dùng.",
            ],
            highlights: ["110+ case mỗi tuần", "97% QA"],
            tags: ["Case Categorization", "QA / Service Metrics", "Documentation", "Cross-team Investigation"],
          },
          {
            company: "OPPO Vietnam",
            label: "NỀN TẢNG DEVELOPMENT",
            headline: "Nền tảng software giúp em hiểu thêm bối cảnh phía sau một ticket.",
            role: "PHP Developer",
            period: "04/2024 – 04/2025",
            responsibilities: ["Phát triển ứng dụng PHP và dùng truy vấn SQL/MySQL để điều tra vấn đề ứng dụng và dữ liệu.", "Tái hiện lỗi, so sánh hành vi mong đợi với kết quả hệ thống và cơ sở dữ liệu.", "Kiểm tra dữ liệu, kiểm thử bản sửa lỗi và ghi tài liệu kỹ thuật để theo dõi.", "Phối hợp với developer và người dùng nghiệp vụ trong quá trình xử lý vấn đề."],
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
          { title: "Data Analysis", items: ["SQL", "MySQL", "Python", "pandas", "NumPy", "Excel"] },
          { title: "SQL & Data", items: ["JOINs", "CTEs", "Aggregations", "Window Functions", "Data Cleaning", "Data Validation"] },
          { title: "Reporting", items: ["Power BI", "DAX", "Power Query", "Excel Reporting", "KPI Summaries"] },
          { title: "Technical", items: ["Git", "GitHub", "REST APIs", "PHP"] },
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
        body: "Thực hành thu thập dữ liệu, automation và mô hình hóa.",
      },
      projectOverview: {
        eyebrow: "Dự án nổi bật",
        title: "Customer Support Operations Analytics",
        body: "Dự án cá nhân kết nối dữ liệu support với hiệu quả dịch vụ và quyết định về khối lượng công việc.",
      },
      education: {
        eyebrow: "Học vấn",
        title: "Học vấn",
        body: "Tốt nghiệp Công nghệ Thông tin, Đại học Văn Lang.",
        items: [{ title: "Cử nhân Công nghệ Thông tin", note: "Đại học Văn Lang · 2020–2024" }],
      },
      english: {
        eyebrow: "Tiếng Anh",
        title: "Giao tiếp tiếng Anh",
        body: "Đọc tài liệu kỹ thuật và trao đổi với khách hàng bằng tiếng Anh.",
        proof: "Aptis ESOL — CEFR B2",
      },
      contact: {
        eyebrow: "Liên hệ",
        title: "Trao đổi về dữ liệu và vận hành.",
        body: "Em đang tìm kiếm cơ hội Junior Data Analyst, Operations Analyst, Reporting Analyst và Data Operations tại TP. Hồ Chí Minh.",
      },
    },
    contact: {
      links: [
        { label: personalInfo.email, href: personalContactLinks.email },
        { label: personalInfo.phone, href: personalContactLinks.phone },
        { label: "GitHub", href: githubBase },
      ],
    },
    footer: {
      note: "Truong Hoang Long · Data Analyst | Operations Analytics",
      updatedLabel: "TP. Hồ Chí Minh, Việt Nam",
    },
    projectLabels: {
      analysis: "Phân tích",
      backToProjects: "Quay lại dự án",
      cleaning: "Làm sạch dữ liệu",
      context: "Bối cảnh",
      dataset: "Dataset",
      contributions: "Đóng góp",
      evidence: "Repository và báo cáo",
      earlierProjects: "Các dự án phần mềm trước đây",
      featuredProjects: "Dự án dữ liệu nổi bật",
      findings: "Phát hiện chính",
      limitations: "Giới hạn",
      liveDemo: "Mở Live Demo",
      moreProjects: "Các dự án khác",
      exploreProject: "Xem dự án",
      projectNavigation: "Điều hướng dự án nổi bật",
      projectOf: "Dự án {current} / {total}",
      problem: "Bài toán nghiệp vụ",
      readCaseStudy: "Xem case study",
      recommendation: "Đề xuất",
      overview: "Tổng quan",
      workflow: "Quy trình",
      role: "Đóng góp của em",
      selectProject: "Chọn dự án",
      selectedProject: "Đang chọn",
      sourceRepository: "Mã nguồn",
      techStack: "Công cụ",
      visualization: "Trực quan hóa",
      value: "Giá trị thể hiện",
      wakeBackend: "Khởi động / Kiểm tra Backend",
    },
    notFound: {
      actionLabel: "Về trang chủ",
      body: "Trang có thể đã chuyển. Anh/chị có thể xem dự án và thông tin liên hệ ở trang chủ.",
      eyebrow: "Không tìm thấy",
      title: "Không tìm thấy trang",
    },
    projects: prioritizedVietnameseProjects,
  },
} as const satisfies Record<"en" | "vi", PortfolioContent>;
