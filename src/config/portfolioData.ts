// ============================================================
// portfolioData.ts — Centralized Portfolio Configuration
// Update this file to personalize your portfolio details.
// ============================================================

import { Certificate } from "crypto";

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
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  status: "Completed" | "Participation";
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
  certifications: Certification[];
  projects: Project[];
  drawings: string[];
}

// ============================================================
// ✏️  EDIT YOUR DETAILS BELOW
// ============================================================

export const portfolioData: PortfolioConfig = {
  personalDetails: {
    name: "Trushi J.",
    initials: "<TJ />",
    subtitle: "IT Engineering Student",
    headerSummary:
      "Third-year IT student in Nadiad , Gujarat · Building scalable systems, contributing to open source, and exploring the intersection of algorithms and elegant design.",
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
  id: "scholarai",
  title: "ScholarAI — AI-Powered Scholarship Discovery Platform",
  shortDesc:
    "A full-stack platform that automates scholarship discovery, eligibility matching, and AI-generated SOP creation for students.",

  longDesc:
    "ScholarAI is an intelligent scholarship recommendation system that helps students discover funding opportunities tailored to their academic and personal profiles. The platform automates scholarship aggregation through web scraping, performs strict eligibility validation, and generates personalized Statements of Purpose using large language models.",

  problemStatement:
    "Finding relevant scholarships is time-consuming because opportunities are distributed across multiple sources and eligibility requirements vary significantly. Students often apply to unsuitable scholarships or miss opportunities they qualify for.",

  solution:
    "Developed a React and Node.js based platform that automatically collects scholarship data, filters opportunities using rule-based eligibility matching, and ranks results according to user profiles. Integrated Google Gemini and OpenAI APIs to generate personalized SOPs, reducing application preparation time and improving the overall scholarship application experience.",

  toolsUsed: [
    "React",
    "Node.js",
    "Express",
    "SQLite",
    "Puppeteer",
    "Cheerio",
    "Google Gemini API",
    "OpenAI API",
    "Axios",
    "Nodemailer",
  ],
      thumbnailPath: "/assets/projects/ScholarAI.png",
      githubUrl: "https://github.com/trushij/devboard",
      liveUrl: "https://devboard-demo.vercel.app",
      featured: true,
      year: "2024",
    },
    {
  id: "noteflow",

  title: "NoteFlow — MERN Notes Management Platform",

  shortDesc:
    "A full-stack MERN notes application featuring a modern glassmorphism UI, secure REST APIs, rate limiting, and real-time responsive user experience.",

  longDesc:
    "NoteFlow is a modern note-taking and management platform built with the MERN stack. The application provides a premium SaaS-inspired user experience through a responsive glassmorphism interface, smooth animations, and secure backend services. Users can create, organize, edit, and delete notes while benefiting from optimized API performance through Redis-powered caching and rate limiting.",

  problemStatement:
    "Many note-taking applications either focus on functionality without a polished user experience or provide attractive interfaces without scalable backend architecture. Users need a lightweight yet modern platform that combines intuitive note management with performance, security, and responsiveness.",

  solution:
    "Developed a full-stack notes management platform using React, Node.js, Express, and MongoDB. Implemented complete CRUD operations through RESTful APIs, integrated MongoDB for persistent data storage, and enhanced API security using Upstash Redis-based rate limiting. Designed a premium glassmorphism interface with Tailwind CSS and Framer Motion animations, ensuring a smooth and responsive experience across desktop and mobile devices.",

  toolsUsed: [
    "React 19",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "React Router",
    "Axios",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Upstash Redis",
    "REST API",
    "JWT",
  ],
      thumbnailPath: "/assets/projects/autorain.png",
      githubUrl: "https://github.com/trushij/autorain",
      liveUrl: "",
      featured: true,
      year: "2024",
    },
    {
  id: "paintapp",
  title: "PaintApp — Java Swing Drawing Application",

  shortDesc:
    "A desktop drawing application built with Java Swing featuring freehand drawing, shape tools, flood fill, text editing, and undo/redo functionality.",

  longDesc:
    "PaintApp is a lightweight raster graphics editor developed using Java Swing and AWT. The application provides essential drawing and editing tools, enabling users to create digital artwork through freehand drawing, geometric shapes, text insertion, flood fill operations, and image export capabilities.",

  problemStatement:
    "Many beginner-friendly drawing applications lack customization options and are often dependent on external libraries. The goal was to build a standalone desktop graphics editor that demonstrates Java GUI development, event handling, and graphics rendering concepts while providing core image editing functionality.",

  solution:
    "Developed a Java Swing-based painting application with an interactive canvas and a collection of drawing tools including pen, eraser, geometric shapes, text insertion, and flood-fill operations. Implemented undo/redo functionality using action history management, integrated color selection through quick-access palettes, and enabled artwork export as PNG files for persistent storage.",

  toolsUsed: [
    "Java",
    "Java Swing",
    "AWT",
    "Graphics2D",
    "Event Handling",
    "File I/O",
    "OOP",
    "PNG Image Processing",
  ],
      thumbnailPath: "/assets/projects/algodocs.png",
      githubUrl: "https://github.com/TheAlgorithms/Algo/issues/2359",
      liveUrl: "",
      featured: true,
      year: "2024",
    },
    {
  id: "smartraindetector",

  title: "Smart Rain Detector — Automated Cloth Protection System",

  shortDesc:
    "An Arduino-based automation system that detects rainfall and automatically moves clothes under shelter to prevent them from getting wet.",

  longDesc:
    "Smart Rain Detector is an IoT-based automation project designed to protect drying clothes from unexpected rainfall. Using a rain sensor, Arduino microcontroller, motor driver, and DC motor, the system continuously monitors weather conditions and automatically moves clothes under a protective cover when rain is detected. Once the weather becomes clear, the clothes are returned outside for continued drying.",

  problemStatement:
    "During monsoon seasons, sudden rainfall often causes clothes left outside for drying to become wet again. Constant monitoring is inconvenient and time-consuming, especially when no one is available at home to react immediately.",

  solution:
    "Developed an Arduino-based automated cloth protection system that uses a rain sensor to detect rainfall in real time. When rain is detected, the microcontroller activates a motor through an L298N motor driver to retract the clothes under a shelter. Once rainfall stops, the system automatically reverses the motor direction to move the clothes back outside for drying. The prototype was successfully tested under real-world conditions and demonstrates practical IoT-based home automation.",

  toolsUsed: [
    "Arduino",
    "Embedded C",
    "Rain Sensor",
    "L298N Motor Driver",
    "DC Motor",
    "IoT",
    "Electronics Prototyping",
    "Automation Systems",
  ],
      thumbnailPath: "/assets/projects/dsa-roadmap.png",
      githubUrl: "https://github.com/trushij/dsa-roadmap",
      liveUrl: "https://dsa-roadmap.vercel.app",
      featured: false,
      year: "2025",
    },
    
   
  ],
   certifications: [
  {
    id: "ccna",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    credentialUrl: "",
    image: "/assets/certificates/ccna.png",
    status: "Completed",
  },
  {
    id: "mysql",
    title: "MySQL 8.0 Database Developer",
    issuer: "Oracle",
    date: "2025",
    credentialUrl: "",
    image: "/assets/certificates/mysql.png",
    status: "Completed",
  },
  {
    id: "aicte",
    title: "AICTE Virtual Internship",
    issuer: "AICTE",
    date: "2025",
    credentialUrl: "",
    image: "/assets/certificates/aicte.png",
    status: "Completed",
  },
],
  drawings: [
  
    "/assets/drawings/image2.jpeg",
    "/assets/drawings/image3.jpeg",
    "/assets/drawings/image4.jpeg",
    // "/assets/drawings/image5.jpeg",
    "/assets/drawings/image6.jpeg",
    // "/assets/drawings/image7.jpeg",
    "/assets/drawings/image8.jpeg",
    "/assets/drawings/image9.jpeg",
    "/assets/drawings/image10.jpeg",
    "/assets/drawings/image11.jpeg"
    ,"/assets/drawings/image1.jpeg",
    // "/assets/drawings/image12.jpeg",
    "/assets/drawings/image13.jpeg",
  ],
};