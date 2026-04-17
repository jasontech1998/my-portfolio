import { TProject, TCreativeItem, TWorkSection } from "./types";

export const projects: TProject[] = [
  {
    title: "Wavetext",
    description:
      "Audio-reactive lyrics visualizer that flows text around a live frequency-driven blob using the Pretext text layout engine. Features multi-column text reflow, dynamic font sizing, particle effects, and word-level lyric highlighting synced to music.",
    techStack: ["Next.js 15", "TypeScript", "Canvas API", "Web Audio API", "@chenglou/pretext", "Tailwind CSS 4"],
    date: "March 2026",
    media: [{ type: "video", src: "/assets/projects/wavetext-demo.mp4" }],
    github: "https://github.com/jasontech1998/pretext-audio",
    demo: "https://wavetext-audio.vercel.app/",
  },
  {
    title: "Silhouette",
    description:
      "A marketing landing page for a computing technology brand, built with Tremor and Next.js as an exercise in high-polish landing page design.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Tremor"],
    date: "February 2025",
    media: [{ type: "video", src: "/assets/projects/silhouette-demo.mp4" }],
    github: "https://github.com/jasontech1998/silhouette-exercise",
    demo: "https://silhouette-exercise.vercel.app/",
    note: "Silhouette is a fictional/concept company created for demonstration purposes.",
  },
  {
    title: "Linear Dashboard",
    description:
      "A Next.js project featuring a Linear-inspired dashboard with advanced due date indicators for efficient task management.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "hello-pangea/dnd"],
    date: "September 2024",
    media: [{ type: "video", src: "/assets/projects/lineardashboard_demo.mp4" }],
    github: "https://github.com/jasontech1998/linear-dashboard",
    demo: "https://linear-dashboard.vercel.app/",
  },
  {
    title: "FestiFaves",
    description:
      "Leverages the OpenAI API to analyze festival lineups and generate personalized Spotify playlists. Uses advanced language models to understand artist styles and user preferences, with AWS S3 for scalable storage of festival lineup images.",
    techStack: ["Next.js", "React", "TypeScript", "NextAuth", "OpenAI API", "Spotify Web API", "AWS", "Tailwind", "shadcn"],
    date: "June 2024",
    media: [{ type: "video", src: "/assets/projects/festifaves_demo.mp4" }],
    github: "https://github.com/jasontech1998/festifaves",
    demo: "https://festifaves.vercel.app/",
    note: "To use the demo, please contact me for Spotify API access (currently in dev mode).",
  },
  {
    title: "LikeMix",
    description:
      "An app designed to automate the sharing of your liked songs from any album, making it easy for music enthusiasts to share their favorite tracks effortlessly.",
    techStack: ["Next.js", "React", "TypeScript", "NextAuth", "Spotify Web API", "Tailwind", "shadcn"],
    date: "June 2024",
    media: [{ type: "video", src: "/assets/projects/likemix_demo.mp4" }],
    github: "https://github.com/jasontech1998/likemix",
    demo: "https://likemix.vercel.app/",
    note: "To use the demo, please contact me for Spotify API access (currently in dev mode).",
  },
];



export const roeblingWork: TWorkSection = {
  company: "Roebling",
  companyUrl: "https://www.roebling.com",
  role: "Senior Founding Engineer",
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
        { type: "video", src: "/assets/work/roebling/ai-chat.mp4" },
      ],
    },
    {
      title: "Roebot — AI Agent Orchestrator",
      description:
        "Co-building an autonomous AI agent system that listens for events across Linear, Slack, and Notion, then routes tasks to isolated Claude agents running in Docker containers. For code tasks, agents spin up with a full git checkout, write and test code, push branches, and open PRs. For non-code tasks, they research and respond directly. Built the real-time monitoring dashboard — a React SPA where the team supervises active jobs, streams Claude output logs, and visualizes the trigger/agent topology. Evolved from prior AI automation infrastructure (Lambda-based triage and bug scanning) into a unified orchestration platform.",
      techStack: ["React", "TypeScript", "Docker", "Claude API", "AWS", "Linear API", "Slack API"],
      media: [
        { type: "video", src: "/assets/work/roebling/roebot-initial.mp4" },
      ],
    },
    {
      title: "Visual Graph Editors",
      description:
        "Built interactive visual graph editors with React Flow — typed connections, auto-layout, undo/redo, and drag-to-reconnect — powering the core product experience used by process engineers daily. These editors allow engineers to model complex biotech and chemical engineering processes visually.",
      techStack: ["React Flow", "TypeScript", "React", "Next.js", "Framer Motion"],
      media: [
        { type: "video", src: "/assets/work/roebling/visual-graph-editors.mp4" },
      ],
    },
    {
      title: "Structural Diff Engine",
      description:
        "Engineered a full-stack structural diff engine for nested engineering documents with cross-reference-aware warnings, backed by 39 tests. Enables engineers to compare document versions with precise, meaningful change detection.",
      techStack: ["Python", "React", "TypeScript"],
      media: [
        { type: "video", src: "/assets/work/roebling/structural-diff.mp4" },
      ],
    },
    {
      title: "Design System",
      description:
        "Created a 55+ component design system with light/dark theming, animation, and domain-specific UI patterns including equation editors, formula fields, and stream visualizations. The system standardizes the product experience across the entire Roebling platform.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Shadcn/Radix", "Framer Motion", "Storybook"],
      media: [
        { type: "video", src: "/assets/work/roebling/design-system.mp4" },
      ],
    },
    {
      title: "Login",
      description:
        "Polished authentication flow with smooth transitions and motion design.",
      techStack: ["Next.js", "TypeScript", "React", "Framer Motion"],
      media: [
        { type: "video", src: "/assets/work/roebling/login.mp4" },
      ],
    },
    {
      title: "Unit Settings",
      description:
        "Built configurable default unit settings for blocks and projects, allowing process engineers to customize measurement units across their simulations.",
      techStack: ["Next.js", "TypeScript", "React"],
      media: [
        { type: "video", src: "/assets/work/roebling/unit-settings.mp4" },
      ],
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

export const creative: TCreativeItem[] = [
  {
    title: "Pretext Canvas Reflow",
    description: "DVD-style bouncing cube that reflows text in real-time, powered by Pretext's layoutNextLine API — zero DOM measurement",
    techStack: ["React", "TypeScript", "Canvas", "Pretext"],
    date: "March 2026",
    componentKey: "PretextReflow",
  },
  {
    title: "Custom Article Links",
    description: "Grid system article links with animated hover motion",
    techStack: ["React", "TypeScript", "Tailwind"],
    date: "February 2025",
    componentKey: "ListArticleLink",
  },
  {
    title: "Custom Cubes Animation",
    description: "Expanding cube grid that transforms to show content within using Framer Motion animations",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    date: "February 2025",
    componentKey: "ExpandingCubes",
  },
  {
    title: "Custom Animated Counter",
    description: "A React component that smoothly animates numbers incrementing with a flipping effect",
    techStack: ["React", "TypeScript"],
    date: "January 2025",
    componentKey: "AnimatedNumber",
  },
  {
    title: "Custom Desktop Navbar",
    description: "A custom desktop navbar using spring animation from Framer Motion",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    date: "June 2024",
    componentKey: "CustomNav",
  },
];
