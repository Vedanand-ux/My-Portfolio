import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export type Project = {
  slug: string;
  title: string;
  cardTitle?: string;
  stackDescription?: string;
  tech: string[];
  description: string;
  about?: string;
  keyFeatures?: string[];
  launchedYear?: string;
  traction?: string;
  websiteUrl?: string;
  githubUrl: string;
  liveUrl: string;
  videoPath: string;
  logoPath?: string;
  hasShield?: boolean;
  caseStudySections: {
    heading: string;
    points: string[];
  }[];
  quickStart?: string[];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chat", label: "Chat" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const projects: Project[] = [
  {
slug: "microservice-based-online-job-portal",
title: "Online Job Portal",
cardTitle: "Job Portal",
stackDescription:
  "Microservice-based online job portal with user management, job listing, and application tracking.",
tech: [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",        //Node.js · TypeScript · Apache Kafka · PostgreSQL · Next.js
  "Apache Kafka"
],
description:
  "Production-ready job portal platform enabling seamless candidate applications, recruiter hiring workflows, AI-powered resume analysis, event-driven microservices communication, and scalable distributed architecture.",
about:
  "Microservices-Based Job Portal is a distributed recruitment platform designed to demonstrate advanced backend engineering concepts. Built using Node.js microservices and Apache Kafka, it enables scalable communication between recruiters and candidates through event-driven architecture. The system incorporates secure JWT authentication, role-based access control, AI-powered resume analysis, and optimized PostgreSQL data management to deliver a robust and extensible hiring ecosystem.",
keyFeatures: [
 "Candidate and recruiter role-based authentication with JWT and RBAC",
  "Job posting, application tracking, and recruiter dashboard management",
  "Event-driven microservices communication using Apache Kafka",
  "AI-powered resume analysis and career guidance modules",
  "Forgot password, reset password, and refresh token workflows",
  "PostgreSQL-backed scalable data architecture for jobs and applications",
  "API versioning and service contract management for backward compatibility",
  "Distributed microservices architecture enabling independent deployment and scaling"
],
    launchedYear: "2026",
traction: "Enterprise grade hiring and recruitment management system",
websiteUrl: "#",
githubUrl: "https://github.com/Vedanand-ux/Microservices---Based-Online-Job-Portal",
liveUrl: "#",
videoPath: "/videos/smart-cloud-storage.mp4",
logoPath: "/projects/job portal.png",

caseStudySections: [
  {
    heading: "Problem Statement",
    points: [
      "Traditional job portals often struggle with scalability as user traffic and application volume increase.",
      "Tightly coupled systems make it difficult to introduce new features without impacting existing services.",
      "Recruiters face challenges in efficiently evaluating large numbers of resumes and managing hiring workflows."
    ],
  },
  {
    heading: "Solution Overview",
    points: [
      "Built a distributed job portal using a microservices architecture to enable independent service scaling and deployment.",
      "Implemented event-driven communication with Apache Kafka for reliable asynchronous interactions between services.",
      "Integrated AI-powered resume analysis and career guidance modules to enhance candidate evaluation."
    ],
  },
  {
    heading: "Architecture & Platform Highlights",
    points: [
      "Microservices-based architecture with separate Candidate, Recruiter, Authentication, and Job Management services.",
      "Apache Kafka handles event-driven workflows such as job applications, notifications, and profile updates.",
      "PostgreSQL stores structured data for users, jobs, applications, and recruiter analytics.",
      "JWT-based authentication with role-based access control (RBAC) ensures secure multi-role access.",
      "API versioning and service contracts maintain backward compatibility across independently deployable services."
    ],
  },
  {
    heading: "Impact",
    points: [
      "Enabled independent scaling of services, improving system flexibility and maintainability.",
      "Reduced service coupling through event-driven communication, allowing faster feature development.",
      "Streamlined recruiter workflows with centralized job and application management.",
      "Demonstrated enterprise-level backend engineering concepts including microservices, distributed systems, and asynchronous messaging."
    ],
  },
],

quickStart: [
  "git clone https://github.com/Vedanand-ux/Microservices---Based-Online-Job-Portal",
  "cd Microservices---Based-Online-Job-Portal",
  "npm install",
  "Create a .env file with DATABASE_URL, JWT_SECRET, REDIS_URL, and AI_API_KEY",
  "npm run dev",
],
  },
  {
  slug: "staynest-booking-backend",
  title: "StayNest – property rental Booking Backend",
  cardTitle: "StayNest",
  stackDescription: "Scalable Node.js backend for property listing, booking, authentication, and admin management.",
  tech: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC Architecture"],
  description:
    "Full-stack Airbnb-inspired backend system with property listings, booking flows, authentication, and admin controls. Designed using MVC architecture with RESTful APIs and server-side rendering.",
  about:
    "StayNest is a backend-focused Airbnb clone that handles property listings, user authentication, booking logic, and role-based access. Built to demonstrate scalable backend architecture, database relationships, and production-style routing.",
  keyFeatures: [
    "User authentication with secure session management",
    "CRUD operations for property listings",
    "Booking system with availability validation",
    "Role-based access control (Host / Guest / Admin)",
    "RESTful routing with MVC architecture",
    "Server-side validation and error handling",
    "Secure password hashing using bcrypt",
  ],
  launchedYear: "2026",
  traction: "Simulated production-ready booking flow with end-to-end CRUD operations",
  websiteUrl: "#",
  githubUrl: "https://github.com/Vedanand-ux/StayNest",
  liveUrl: "#",
  videoPath: "/videos/project1.mp4",
  logoPath: "/projects/stay nest.png",
  hasShield: false,
  caseStudySections: [
    {
      heading: "Problem Statement",
      points: [
        "Building scalable booking systems requires structured architecture and secure authentication.",
        "Managing listings, users, and reservations while maintaining clean routing can quickly become complex.",
      ],
    },
    {
      heading: "Solution Overview",
      points: [
        "Implemented MVC architecture to separate business logic, routing, and database layers.",
        "Designed RESTful APIs for listings, bookings, and user flows.",
        "Used MongoDB for flexible schema management and relational references between users and properties.",
      ],
    },
    {
      heading: "Booking System Logic",
      points: [
        "Validated booking dates to prevent overlapping reservations.",
        "Connected user accounts with property ownership and reservations.",
        "Implemented middleware-based authentication guards for protected routes.",
      ],
    },
    {
      heading: "Scalability Considerations",
      points: [
        "Structured codebase for modular feature expansion.",
        "Applied middleware for centralized error handling.",
        "Used environment variables for secure configuration management.",
      ],
    },
  ],
  quickStart: [
    "git clone YOUR_GITHUB_LINK",
    "cd staynest-backend",
    "npm install",
    "npm run dev",
  ],
},
  {
    slug: "collaborative-realtime-whiteboard",
    title: "Real-Time Collaborative Drawing App",
    cardTitle: "Collaborative Drawing",
    stackDescription: "Low-latency collaborative canvas with WebSocket synchronization and conflict-aware editing sessions.",
    tech: ["React", "WebSocket", "TypeScript"],
    description:
      "Low-latency collaborative drawing platform with real-time synchronization, conflict-aware interactions, and optimized undo/redo session handling.",
    about:
      "A real-time collaborative drawing application designed for low-latency co-editing, predictable conflict handling, and smooth session workflows across connected clients.",
    keyFeatures: [
      "Live collaborative canvas updates over WebSockets",
      "Conflict-aware synchronization for simultaneous drawing",
      "Optimized undo/redo behavior for shared sessions",
      "Type-safe event contracts using TypeScript",
      "Scalable architecture direction for future feature expansion",
    ],
    launchedYear: "2026",
    traction: "Work in progress",
    websiteUrl: "#",
    githubUrl: "",
    liveUrl: "#",
    videoPath: "/videos/project1.mp4",
    logoPath: "/projects/ic-drawing-app.svg",
    caseStudySections: [
      {
        heading: "Problem Statement",
        points: [
          "Realtime drawing tools often suffer from lag, conflicting edits, and unstable session state.",
          "Undo/redo across multiple collaborators is hard to keep consistent without efficient state modeling.",
        ],
      },
      {
        heading: "Solution Overview",
        points: [
          "Built a collaborative whiteboard around WebSocket-driven state synchronization.",
          "Focused on low-latency event propagation and predictable reconciliation for simultaneous edits.",
          "Used TypeScript for strict contracts across drawing events and session state.",
        ],
      },
      {
        heading: "Current Engineering Focus",
        points: [
          "Conflict resolution strategies for overlapping updates.",
          "Session-level undo/redo optimization with minimal payload overhead.",
          "Improving canvas rendering efficiency for smoother collaborative UX.",
        ],
      },
      {
        heading: "Status",
        points: [
          "Work in progress with production-style backend communication patterns.",
          "Architecture is being designed for scalability and future feature expansion.",
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "REST APIs",
      "Microservices",
      "Kafka",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Git",
      "Linux",
      "Prisma",
    ],
  },
  {
    title: "Core CS",
    skills: ["DSA", "Distributed Systems", "System Design", "OOP", "DBMS"],
  },
];

export const achievements = [
  "Solved 300+ LeetCode problems",
  "93th percentile in JEE Mains among 1M+ candidates",
];

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/vedanand-ux",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/peddaboina-vedanand/",
    icon: FaLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/vedanand/",
    icon: SiLeetcode,
  },
];
