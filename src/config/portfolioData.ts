// ============================================================
// portfolioData.ts — Centralized Portfolio Configuration
// Update this file to personalize your portfolio details.
// ============================================================

export interface PersonalDetails {
  name: string;
  initials: string;
  subtitle: string;
  headerSummary: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    resumePdf: string;
  };
}

export interface AboutPillar {
  id: string;
  icon: string;
  title: string;
  body: string;
}

export interface AboutSection {
  sectionTitle: string;
  pillars: AboutPillar[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  problemStatement: string;
  solution: string;
  toolsUsed: string[];
  thumbnailPath: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  year: string;
}

export interface PortfolioConfig {
  personalDetails: PersonalDetails;
  aboutSection: AboutSection;
  skills: SkillCategory[];
  projects: Project[];
  drawings: string[];
}

// ============================================================
// ✏️  EDIT YOUR DETAILS BELOW
// ============================================================

export const portfolioData: PortfolioConfig = {
  personalDetails: {
    name: "Trushi J.",
    initials: "TJ",
    subtitle: "IT Engineering Student",
    headerSummary:
      "Third-year IT student , Gujarat · Building scalable systems, contributing to open source, and exploring the intersection of algorithms and elegant design.",
    links: {
      github: "https://github.com/trushi-jasani",
      linkedin: "https://linkedin.com/in/trushij",
      email: "jasanitrushi@example.com",
      resumePdf: "/assets/resume.pdf",
    },
  },

  aboutSection: {
    sectionTitle: "About",
    pillars: [
      {
        id: "core-drive",
        icon: "⚙️",
        title: "The Core Drive",
        body: "I'm driven by a deep desire to build full-stack systems that actually work under pressure — systems where every layer, from database schema to API contract to UI state, has been deliberately engineered. I find the backend architectural layer the most intellectually satisfying: picking the right data structure, designing clean service boundaries, and making sure a system degrades gracefully under load. That mindset carries through to every side project and open-source contribution I tackle.",
      },
      {
        id: "metric-profile",
        icon: "📊",
        title: "Metric-Driven Profile",
        body: "Consistency in algorithmic thinking is something I treat like a discipline. I hold a CodeChef rating of 1350+ and have solved 120+ problems on LeetCode, spanning dynamic programming, graph traversal, and system-design primitives. I contribute actively to open source — including documentation and implementation work on the Algo repository — because writing clear, correct algorithms for others to read is the hardest test of your own understanding.",
      },
      {
        id: "current-focus",
        icon: "🎯",
        title: "Current Focus",
        body: "Currently in my third year of Information Technology engineering at Rajkot, Gujarat, I'm deeply invested in scalable backend architectures: REST and microservice design patterns, database optimization strategies, and cloud-native deployment workflows. My academic journey runs in parallel with hands-on building — from IoT systems to MERN-stack web apps — so that theory and practice stay tightly coupled.",
      },
    ],
  },

  skills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
    },
    {
      category: "Frameworks & Web",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
    },
    {
      category: "Tools & Cloud",
      skills: [
        "Git & GitHub",
        "Docker",
        "Vercel",
        "AWS (S3, EC2)",
        "Linux",
        "Postman",
      ],
    },
  ],

  projects: [
    {
      id: "devboard",
      title: "DevBoard — Engineering Task Manager",
      shortDesc:
        "A full-stack MERN project management platform with real-time collaboration, role-based permissions, and sprint analytics.",
      longDesc:
        "DevBoard is a production-grade task management system built specifically for small engineering teams. It supports kanban boards, sprint planning, burndown chart generation, and real-time notification delivery via WebSockets. The auth system uses refresh/access JWT token rotation to minimize attack surface.",
      problemStatement:
        "Most task managers are generic productivity tools that don't speak the language of software teams — no concept of sprints, velocity, or PR-linked tasks. Small engineering teams end up managing their work in spreadsheets or paying for expensive enterprise tools.",
      solution:
        "Built a purpose-specific platform using the MERN stack with a WebSocket layer (Socket.io) for real-time board updates. Implemented a role-permission matrix (Admin / Developer / Viewer) at the Express middleware level. Designed a MongoDB schema that keeps sprint data normalized while keeping task read latency under 50ms using compound indexes.",
      toolsUsed: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS",
        "Vercel",
      ],
      thumbnailPath: "/assets/projects/devboard.png",
      githubUrl: "https://github.com/trushij/devboard",
      liveUrl: "https://devboard-demo.vercel.app",
      featured: true,
      year: "2024",
    },
    {
      id: "rain-detector",
      title: "AutoRain — IoT Rain Detection System",
      shortDesc:
        "An ESP32-based IoT system that detects rainfall and triggers automated relay closures with cloud-logging via MQTT.",
      longDesc:
        "AutoRain uses a resistive rain sensor wired to an ESP32 microcontroller. Sensor readings are normalized and thresholded, triggering hardware relay switches (for awning motors, window closers) and publishing an MQTT event to an AWS IoT Core broker. A lightweight Node.js microservice consumes the MQTT stream and writes structured logs to a PostgreSQL time-series table, accessible via a simple dashboard.",
      problemStatement:
        "Manually closing windows and retracting awnings during unexpected rain events wastes time and often results in water damage. Existing commercial solutions are expensive and non-customizable.",
      solution:
        "Designed a sub-₹600 hardware assembly using off-the-shelf components. Wrote firmware in C++ (Arduino framework) with debounce logic and Wi-Fi reconnection handling. Connected to AWS IoT Core over TLS/MQTT for reliable cloud delivery even on intermittent home Wi-Fi. The dashboard queries the PostgreSQL table to show rain frequency patterns by week.",
      toolsUsed: [
        "ESP32",
        "C++ (Arduino)",
        "MQTT",
        "AWS IoT Core",
        "Node.js",
        "PostgreSQL",
        "React",
      ],
      thumbnailPath: "/assets/projects/autorain.png",
      githubUrl: "https://github.com/trushij/autorain",
      liveUrl: "",
      featured: true,
      year: "2024",
    },
    {
      id: "algo-docs",
      title: "Algo Docs Contribution — Bellman-Ford",
      shortDesc:
        "Open-source documentation authored for the Bellman-Ford Algorithm in the community Algo repository (issue #2359).",
      longDesc:
        "Contributed a complete, production-ready documentation page for the Bellman-Ford shortest path algorithm to the Algo open-source repository. The doc covers algorithm intuition, step-by-step edge relaxation, all three time-complexity cases, pseudocode, and a working Python implementation, all formatted to match the Docusaurus-based site's conventions exactly.",
      problemStatement:
        "The Algo repository was missing documentation for Bellman-Ford despite it being a core graph algorithm tested in competitive programming and system design interviews. Existing informal resources online had incorrect Big-O claims for the best-case.",
      solution:
        "Studied the repository's existing Docusaurus markdown patterns and formatting conventions before writing. Corrected the widely circulated misconception about best-case complexity. Stripped LaTeX delimiters (unsupported by the site renderer) in favor of plain-text notation. PR was reviewed, approved, and merged.",
      toolsUsed: [
        "Markdown",
        "Docusaurus",
        "Python",
        "Git",
        "GitHub",
        "Graph Algorithms",
      ],
      thumbnailPath: "/assets/projects/algodocs.png",
      githubUrl: "https://github.com/TheAlgorithms/Algo/issues/2359",
      liveUrl: "",
      featured: true,
      year: "2024",
    },
    {
      id: "dsa-roadmap",
      title: "DSA Roadmap — Student Learning App",
      shortDesc:
        "A level-adaptive DSA learning app featuring diagnostic quizzes, topic checklists, progress tracking, and company-topic mapping.",
      longDesc:
        "A web application designed to give IT students a structured, level-aware path through data structures and algorithms. Users select Beginner, Intermediate, or Advanced level, complete a diagnostic quiz to validate placement, then work through a progressive checklist of topics. A confidence heatmap tracks subjective mastery and a streak system encourages daily practice.",
      problemStatement:
        "Most DSA study resources are either too theory-heavy (textbooks) or unstructured (random LeetCode grinding). Students lack a clear, adaptive roadmap that knows where they are and shows exactly what to learn next.",
      solution:
        "Built with Next.js and a static data layer (no backend required for MVP). Implemented localStorage-persisted progress state. Diagnostic quiz uses a weighted scoring algorithm to validate self-reported level. Company-topic mapping renders a filterable matrix showing which topics are tested by which companies.",
      toolsUsed: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "localStorage",
        "Vercel",
      ],
      thumbnailPath: "/assets/projects/dsa-roadmap.png",
      githubUrl: "https://github.com/trushij/dsa-roadmap",
      liveUrl: "https://dsa-roadmap.vercel.app",
      featured: false,
      year: "2025",
    },
    {
      id: "portfolio",
      title: "This Portfolio — TJ",
      shortDesc:
        "Personal engineering portfolio built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.",
      longDesc:
        "A clean, performance-optimized personal portfolio site featuring animated section reveals, a slide-over project detail drawer, a masonry art gallery with lightbox, and a fully responsive design system built around a soft rose/neutral palette.",
      problemStatement:
        "Generic portfolio templates don't reflect an engineer's design sensibility or technical depth. I needed a portfolio that felt crafted — not cloned.",
      solution:
        "Designed and built entirely from scratch. The data layer is fully decoupled into a single TypeScript config file so content updates never require touching component code. Project detail drawers avoid full-page navigations and keep users engaged on the same surface.",
      toolsUsed: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      thumbnailPath: "/assets/projects/portfolio.png",
      githubUrl: "https://github.com/trushij/portfolio",
      liveUrl: "https://trushij.vercel.app",
      featured: false,
      year: "2025",
    },
  ],

  drawings: [
    "/assets/drawings/image1.jpeg",
    "/assets/drawings/image2.jpeg",
    "/assets/drawings/image3.jpeg",
    "/assets/drawings/image4.jpeg",
    "/assets/drawings/image5.jpeg",
    "/assets/drawings/image6.jpeg",
    "/assets/drawings/image7.jpeg",
    "/assets/drawings/image8.jpeg",
    "/assets/drawings/image9.jpeg",
    "/assets/drawings/image10.jpeg",
    "/assets/drawings/image11.jpeg",
    "/assets/drawings/image12.jpeg",
    "/assets/drawings/image13.jpeg",
  ],
};