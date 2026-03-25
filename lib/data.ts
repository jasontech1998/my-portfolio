export const projects: { title: string; href: string; description: string }[] =
  [
    {
      title: "Silhouette",
      href: "/projects/silhouette",
      description:
        "Ambient computing technology that enhances spaces while vanishing into the background.",
    },
    {
      title: "Linear Dashboard",
      href: "/projects/lineardashboard",
      description:
        "Linear-inspired dashboard with advanced due date indicators for efficient task management.",
    },
    {
      title: "FestiFaves",
      href: "/projects/festifaves",
      description:
        "Leverages AI to curate personalized Spotify playlists based on festival lineups, enhancing your music discovery experience",
    },
    {
      title: "LikeMix",
      href: "/projects/likemix",
      description:
        "Automate the sharing of your liked songs from any album",
    },
    {
      title: "Real Time Trivia Game",
      href: "/projects/triviagame",
      description:
        "A fast-paced, real-time game challenging players to test their knowledge across diverse topics",
    },
    {
      title: "Podspot",
      href: "/projects/podspot",
      description: "Listen, comment and rate your favorite podcasts",
    },
    {
      title: "Pumpr",
      href: "/projects/pumpr",
      description:
        "Fitness Social Media Platform for users to meet workout partners with similar strength, goals and schedules",
    },
  ];

import { TWorkSection } from "./types";

export const roeblingWork: TWorkSection = {
  company: "Roebling",
  companyUrl: "https://www.roebling.com",
  role: "Founding Software Engineer",
  period: "Apr. 2025 – Present",
  headline:
    "Built an AI-powered SaaS platform from an empty repository to production.",
  intro:
    "One of two founding engineers at Roebling — an AI-powered process modeling platform for biotech and chemical engineering. Architected and own the entire frontend, serving process engineers daily.",
  projects: [
    {
      title: "AI Chat Experience",
      description:
        "Designed and built an integrated AI chat experience for engineering editors — a resizable sidebar with canvas viewport auto-panning, streaming responses, animated plan cards, and persistent conversation state across sessions. The chat enables process engineers to interact with AI directly within their workflow without context switching.",
      techStack: ["Next.js", "TypeScript", "React", "Supabase", "Claude API", "Framer Motion"],
      media: [
        { type: "video", src: "/assets/work/roebling/AIChatFinalDemo.mp4" },
      ],
    },
    {
      title: "Login",
      description:
        "Polished authentication flow with smooth transitions and motion design.",
      techStack: ["Next.js", "TypeScript", "React", "Framer Motion"],
      media: [
        { type: "video", src: "/assets/work/roebling/LoginFinalDemo.mp4" },
      ],
    },
    {
      title: "Visual Graph Editors",
      description:
        "Built interactive visual graph editors with React Flow — typed connections, auto-layout, undo/redo, and drag-to-reconnect — powering the core product experience used by process engineers daily. These editors allow engineers to model complex biotech and chemical engineering processes visually.",
      techStack: ["React Flow", "TypeScript", "React", "Next.js", "Framer Motion"],
    },
    {
      title: "Real-time Collaboration",
      description:
        "Built a real-time collaboration layer using Supabase Realtime — designed a generic subscription factory hook and 7 domain-specific hooks powering live updates across files, blocks, projects, and equipment for concurrent multi-user editing. Also designed a custom Git-like version control system (branching, merging, drafts, checkpoints) for collaborative engineering documents on PostgreSQL, enabling conflict-safe autosave.",
      techStack: ["Supabase Realtime", "TypeScript", "React", "PostgreSQL", "WebSockets"],
    },
    {
      title: "AI Analysis Dashboards",
      description:
        "Architected a schema-driven rendering system for AI-generated analysis dashboards that auto-renders charts, tables, and cost breakdowns from typed JSON contracts without per-dashboard code. This system enables the AI to produce rich, structured engineering analyses that render automatically in the frontend.",
      techStack: ["TypeScript", "React", "Next.js", "Python", "FastAPI", "Claude API"],
    },
    {
      title: "AI Automation Infrastructure",
      description:
        "Built AI-powered automation infrastructure: a two-Lambda ticket triage system using Claude and Bedrock with HMAC webhook security that reduced bug investigation time by 3x, and a nightly post-merge bug scanner that posts risk-sorted findings to Slack.",
      techStack: ["AWS Lambda", "Claude API", "Bedrock", "TypeScript", "Slack API"],
    },
    {
      title: "MCP Adoption & AI Tooling",
      description:
        "Pioneered MCP (Model Context Protocol) adoption across the team — configured tiered database access controls, wrote documentation, built 12 custom AI agent skills, and mentored engineers on AI-native development workflows.",
      techStack: ["MCP", "Claude", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Structural Diff Engine",
      description:
        "Engineered a full-stack structural diff engine for nested engineering documents with cross-reference-aware warnings, backed by 39 tests. Enables engineers to compare document versions with precise, meaningful change detection.",
      techStack: ["Python", "React", "TypeScript"],
    },
    {
      title: "Design System",
      description:
        "Created a 55+ component design system with light/dark theming, animation, and domain-specific UI patterns including equation editors, formula fields, and stream visualizations. The system standardizes the product experience across the entire Roebling platform.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Shadcn/Radix", "Framer Motion", "Storybook"],
    },
  ],
};

export const eabWork: TWorkSection = {
  company: "EAB",
  companyUrl: "https://eab.com/",
  role: "Software Engineer",
  period: "Jan. 2021 – Aug. 2024",
  projects: [
    {
      title: "Native App",
      description:
        "Contributed to developing a new native experience using the Ionic framework. This project involved rapidly rebuilding features from the old native app while adapting to an ongoing development process.",
      techStack: ["LitElement", "Ionic", "Angular", "TypeScript"],
    },
    {
      title: "CareerAscent",
      description:
        "Held a key role in developing CareerAscent from scratch, architecting the app using React, Material UI, and Tailwind. This startup-like project demanded rapid development and adaptability to tight deadlines.",
      techStack: ["React", "Tailwind", "MaterialUI", "TypeScript"],
    },
    {
      title: "Visualization",
      description:
        "Led the comprehensive upgrade of EAB's visualization library, managing the project from research to implementation. Selected and customized an open-source library, crafted each chart type, and mentored developers on utilizing the new charts.",
      techStack: ["LitElement", "Chart.js", "TypeScript"],
    },
    {
      title: "HIL3",
      description:
        "Helped develop HIL3, an improved version of EAB's custom JSON parser language. Enhanced readability and simplified syntax, reducing code complexity and easing adoption across multiple products.",
      techStack: ["LitElement", "TypeScript"],
    },
    {
      title: "UI Library",
      description:
        "Played a pivotal role in developing and maintaining an internal UI component library utilized by multiple product teams across the organization, enhancing consistency and efficiency in development processes.",
      techStack: ["LitElement", "Polymer", "TypeScript"],
    },
  ],
};

// Compat export for creative components that still use the old shape
export const workData = [
  ...roeblingWork.projects.map((p) => ({
    title: p.title,
    href: "#",
    description: p.description,
  })),
  ...eabWork.projects.map((p) => ({
    title: p.title,
    href: "#",
    description: p.description,
  })),
];

export const creative: { title: string; href: string; description: string }[] =
  [
    {
      title: "Custom Article Links",
      href: "/creative/custom_article_links",
      description: "Article links with animation",
    },
    {
      title: "Custom Cubes Animation",
      href: "/creative/custom_expand_cubes",
      description: "Cube grid with content animation",
    },
    {
      title: "Custom Animated Counter",
      href: "/creative/custom_animated_counter",
      description: "Incrementing number ticker",
    },
    {
      title: "Custom Chat",
      href: "/creative/custom_chat",
      description: "AI Chat about my resume",
    },
    {
      title: "Custom Desktop Navbar",
      href: "/creative/custom_nav",
      description: "Navbar with spring hover animation",
    },
    {
      title: "Custom Stack Items",
      href: "/creative/custom_stack_items",
      description: "Stacked nav items with custom hover animation",
    },
    {
      title: "Custom Animated Button",
      href: "/creative/custom_button",
      description: "Button with custom loading animation",
    },
    {
      title: "Custom Hover Card",
      href: "/creative/custom_hover_card",
      description: "Card that shows additional content on hover",
    },
  ];
