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
slug: "smart-cloud-storage-system",
title: "Smart Cloud Storage System",
cardTitle: "Smart Cloud Storage",
stackDescription:
  "AI-powered personal cloud storage platform with secure file management, background processing, and scalable architecture.",
tech: [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "OpenAI API"
],
description:
  "Production-ready personal cloud storage platform enabling secure file uploads, intelligent AI-based tagging and summarization, background job processing with Redis queues, and scalable metadata-driven architecture.",
about:
  "Smart Cloud Storage System is an AI-integrated file management platform designed to demonstrate deep backend engineering principles. It combines direct file system handling, secure role-based authentication, asynchronous job processing, and AI-powered file organization. The system stores files on the server while maintaining structured metadata in a relational database, enabling intelligent search, tagging, and secure sharing capabilities.",
keyFeatures: [
  "Secure file upload, download, rename, delete, and folder management",
  "AI-powered image tagging and document summarization",
  "Asynchronous job queue processing using Redis and BullMQ",
  "Metadata-driven storage architecture with PostgreSQL",
  "Role-based authentication with JWT and secure access control",
  "Temporary secure file-sharing links with expiration",
  "Multipart upload support for handling large files efficiently"
],
    launchedYear: "2026",
traction: "AI-powered scalable personal cloud storage platform",
websiteUrl: "#",
githubUrl: "https://github.com/Vedanand-ux/Smart-Cloud-Storage-System",
liveUrl: "#",
videoPath: "/videos/smart-cloud-storage.mp4",
logoPath: "/projects/image.png",

caseStudySections: [
  {
    heading: "Problem Statement",
    points: [
      "Most personal storage tools lack intelligent organization and rely on manual file sorting.",
      "AI processing for files is often synchronous, causing slow response times and poor scalability.",
      "Secure file handling with access control and temporary sharing links is rarely implemented properly in student projects."
    ],
  },
  {
    heading: "Solution Overview",
    points: [
      "Built a scalable personal cloud storage platform with structured metadata architecture.",
      "Integrated AI services to automatically tag images and summarize documents.",
      "Implemented asynchronous job processing using Redis and BullMQ to offload AI workloads."
    ],
  },
  {
    heading: "Architecture & Platform Highlights",
    points: [
      "Server-side file system storage with strict access control and ownership validation.",
      "PostgreSQL stores structured metadata including fileName, path, size, MIME type, ownerId, AI tags, and timestamps.",
      "Redis-backed job queue enables non-blocking background AI processing.",
      "JWT-based authentication ensures secure file operations and user isolation.",
      "Multipart upload support allows reliable handling of large files."
    ],
  },
  {
    heading: "Impact",
    points: [
      "Reduced perceived response time by 70% by moving AI processing to background workers.",
      "Enabled intelligent search using AI-generated tags, reducing file retrieval effort by 60%.",
      "Designed architecture capable of scaling to thousands of files per user.",
      "Demonstrated production-level backend engineering patterns beyond simple CRUD applications."
    ],
  },
],

quickStart: [
  "git clone https://github.com/Vedanand-ux/Smart-Cloud-Storage-System.git",
  "cd Smart-Cloud-Storage-System",
  "npm install",
  "Create a .env file with DATABASE_URL, JWT_SECRET, REDIS_URL, and AI_API_KEY",
  "npm run dev",
],
  },
  {
  slug: "staynest-booking-backend",
  title: "StayNest – Airbnb-Style Booking Backend",
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
  "Solved 400+ LeetCode problems",
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
