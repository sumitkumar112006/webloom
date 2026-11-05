export interface ProjectSticker {
  label: string;
  variant: 'yellow-star' | 'holographic' | 'stamp' | 'tape' | 'badge';
  rotation?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Web" | "Apps" | "Social" | "AI" | "3D";
  categoryLabel: string;
  featured: boolean;
  gridSpan?: "large" | "medium" | "tall" | "standard";
  year: string;
  thumbnail: string;
  mediaType: "image" | "youtube" | "gdrive" | "video";
  mediaUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  client?: string;
  impact?: string;
  status?: string;
  sticker?: ProjectSticker;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  galleryImages?: string[];
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "web-automation",
    title: "Web Automation — Agentic Browser Platform",
    tagline: "Autonomous browser automation engine with visual DAG workflows, Stagehand v4, & Trigger.dev",
    category: "AI",
    categoryLabel: "AI & Full-Stack",
    featured: true,
    gridSpan: "large",
    year: "2026",
    client: "Autonomous Systems Lab",
    impact: "Self-Healing DOM Engine",
    status: "Live Production",
    sticker: {
      label: "AGENTIC ENGINE ✦ 0% OUTSOURCED",
      variant: "yellow-star",
      rotation: "-rotate-2"
    },
    thumbnail: "/assets/project_web_automation.png",
    mediaType: "image",
    mediaUrl: "/assets/project_web_automation.png",
    liveUrl: "https://web-automation-zxvp.onrender.com/",
    githubUrl: "https://github.com/sumitkumar112006/Web-automation",
    overview:
      "An enterprise-grade agentic browser automation platform that transforms natural language instructions and visual node graphs into resilient, self-healing browser execution pipelines. Users can visually construct automation workflows using an interactive canvas, collaborate in real time with Liveblocks, and orchestrate autonomous AI agents powered by Stagehand v4 and Browserbase to navigate, interact with, and extract structured data from complex modern web applications.",
    challenge:
      "Traditional browser scrapers and bots constantly break when website DOM structures, class names, or layouts change. Additionally, non-technical teams struggle to configure complex cron tasks or script headless browsers without developer assistance.",
    solution:
      "We engineered an intuitive visual drag-and-drop workflow canvas with custom action nodes (Open URL, Act, Observe, Extract, AI Agent). By integrating Stagehand v4 with Browserbase cloud browsers, the system uses LLM vision and DOM understanding to self-heal and adapt to layout shifts in real time.",
    deliverables: [
      "Visual Node Graph Studio (@xyflow/react)",
      "Stagehand v4 Autonomous Browser Execution",
      "Topologically Sorted DAG Task Orchestrator (Trigger.dev)",
      "Real-time Collaboration Engine (Liveblocks)",
      "Multi-tenant Auth & Workspace System (Clerk)",
      "Serverless PostgreSQL Schema with Drizzle ORM"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Stagehand v4",
      "Browserbase",
      "Trigger.dev",
      "React Flow",
      "Liveblocks",
      "Neon Postgres",
      "Drizzle ORM",
      "Clerk Auth",
      "Tailwind CSS"
    ],
    galleryImages: [
      "/assets/project_web_automation.png",
      "/assets/service_ai.png"
    ]
  },
  {
    id: "beauty-parlour",
    title: "Lady Boss — Beauty Parlour & Bridal Studio",
    tagline: "High-conversion bridal studio web platform for Tanmatra Makeup Artist",
    category: "Web",
    categoryLabel: "Web Design & Branding",
    featured: true,
    gridSpan: "medium",
    year: "2025",
    client: "Tanmatra Bridal Studio",
    impact: "+340% Direct Inquiries",
    status: "Active Client",
    sticker: {
      label: "BESPOKE BRANDING ✦ ZERO FLUFF",
      variant: "tape",
      rotation: "rotate-3"
    },
    thumbnail: "/assets/project_luxury_studio.png",
    mediaType: "image",
    mediaUrl: "/assets/project_luxury_studio.png",
    liveUrl: "https://sumitkumar112006.github.io/Beauty_Parlour/",
    githubUrl: "https://github.com/sumitkumar112006/Beauty_Parlour",
    overview:
      "A premium bridal studio website designed for 'Lady Boss by Tanmatra Makeup Artist', a specialized bridal and beauty studio based in Meerut, UP. Designed to capture high-ticket bridal bookings with an elegant, royal visual aesthetic, clear service tiers, portfolio showcases, and a direct inquiry pipeline.",
    challenge:
      "The client relied on unstructured Instagram direct messages and phone calls, resulting in lost inquiries, repetitive questions regarding package inclusions, and difficulty showcasing before-and-after transformations elegantly.",
    solution:
      "We structured a clean digital landing page with dedicated sections for Bridal, Pre-Bridal, Party Makeup, and Hair styling. We integrated an instant WhatsApp appointment booking flow and an optimized photo showcase that highlights genuine bridal stories without clutter.",
    deliverables: [
      "Bespoke Bridal Brand Identity & Palette",
      "Mobile-First Responsive Web Architecture",
      "Interactive Service Package Breakdown",
      "Transformation Portfolio Gallery",
      "Direct WhatsApp Booking Action Trigger"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WhatsApp API Integration"],
    galleryImages: [
      "/assets/project_luxury_studio.png",
      "/assets/service_web.png"
    ]
  },
  {
    id: "kivi-ai",
    title: "Kivi AI — Interview Simulator & Coaching Engine",
    tagline: "AI-powered mock interview platform with real-time dynamic feedback",
    category: "AI",
    categoryLabel: "AI & Full-Stack",
    featured: true,
    gridSpan: "medium",
    year: "2026",
    client: "Talent Engine Inc.",
    impact: "Google Gemini AI Orchestration",
    status: "Production Deployed",
    sticker: {
      label: "VERIFIED ARCHITECTURE // 2026",
      variant: "stamp",
      rotation: "-rotate-3"
    },
    thumbnail: "/assets/project_ai_interview.png",
    mediaType: "image",
    mediaUrl: "/assets/project_ai_interview.png",
    liveUrl: "https://ai-interviewer-silk.vercel.app/login",
    githubUrl: "https://github.com/sumitkumar112006/ai-interviewer",
    overview:
      "Kivi AI is an intelligent interview preparation and evaluation platform that simulates realistic technical and managerial interview scenarios using Google Gemini AI. Candidates receive dynamic follow-up questions tailored to their responses and immediate constructive feedback on clarity, technical accuracy, and structure.",
    challenge:
      "Standard mock interview tools either rely on static, multiple-choice questions or require expensive human coaches, making continuous practice inaccessible for emerging candidates.",
    solution:
      "We implemented a real-time conversational flow that ingests candidate answers, prompts Gemini with evaluation criteria, and synthesizes score breakdowns alongside actionable suggestions to hone communication.",
    deliverables: [
      "Role-Based Dynamic Interview Engine",
      "Google Gemini AI Prompt Orchestration",
      "Secure JWT User Authentication",
      "Real-Time Response Evaluation & Scoring",
      "Performance History Dashboard"
    ],
    techStack: ["React", "Node.js", "Gemini AI", "JWT Auth", "MongoDB", "Tailwind CSS"],
    galleryImages: [
      "/assets/project_ai_interview.png"
    ]
  },
  {
    id: "agency-ui",
    title: "Webloom Visual System — Studio Identity",
    tagline: "Modern creative studio interface with strict geometric typography",
    category: "Web",
    categoryLabel: "Web Design & UI/UX",
    featured: false,
    gridSpan: "standard",
    year: "2025",
    client: "Webloom Studio",
    impact: "Sub-100ms Performance",
    status: "Studio System",
    sticker: {
      label: "GEOMETRIC DISCIPLINE ✦ 100% LIGHT",
      variant: "badge",
      rotation: "rotate-2"
    },
    thumbnail: "/assets/service_web.png",
    mediaType: "image",
    mediaUrl: "/assets/service_web.png",
    liveUrl: "https://sumitkumar112006.github.io/Agency_Project/",
    githubUrl: "https://github.com/sumitkumar112006/Agency_Project",
    overview:
      "A bold, disciplined digital studio design system emphasizing deep blues, geometric typography, and whitespace discipline. Built to prove that creative agencies do not need chaotic floating animations to make an enduring impression.",
    challenge:
      "Modern agency websites often suffer from template fatigue — excessive pastel gradients, unreadable floating text, and poor performance across mobile viewports.",
    solution:
      "We constructed a restrained design system using royal and deep blue accents, clear 8px grid hierarchy, and lightweight code delivering near-instant page transitions.",
    deliverables: [
      "Minimalist Design System Tokens",
      "Sticky Responsive Navigation & Drawer",
      "Modular Capability Discovery Blocks",
      "Accessible Color Contrast Compliance"
    ],
    techStack: ["Vite", "React", "CSS Modules", "Tailwind CSS", "GitHub Pages"],
    galleryImages: [
      "/assets/service_web.png",
      "/assets/hero_showcase.png"
    ]
  },
  {
    id: "fitness-mobile-app",
    title: "Apex Track — Workout & Health Companion",
    tagline: "Ergonomic mobile application for daily routine tracking and workout logging",
    category: "Apps",
    categoryLabel: "Mobile & Application",
    featured: true,
    gridSpan: "standard",
    year: "2025",
    client: "Apex Athletics",
    impact: "Offline-First SQLite Cache",
    status: "Client Mobile Build",
    sticker: {
      label: "ONE-THUMB ERGONOMICS ✦ RN",
      variant: "tape",
      rotation: "-rotate-2"
    },
    thumbnail: "/assets/project_mobile_app.png",
    mediaType: "image",
    mediaUrl: "/assets/project_mobile_app.png",
    overview:
      "A distraction-free mobile fitness logging application engineered with rapid one-thumb entry, offline workout caching, and progressive overload graphs. Designed for athletes who prioritize speed over bloated social feeds.",
    challenge:
      "Most commercial fitness apps are cluttered with paywalls, social feeds, and sluggish interfaces that frustrate users mid-workout.",
    solution:
      "We prioritized single-tap set completion, offline-first data synchronization, and high-contrast dark visual modes suited for gym lighting environments.",
    deliverables: [
      "Mobile UX & Ergonomic Thumb-Zone Mapping",
      "Offline SQLite / Local Storage Sync",
      "Progressive Volume & Intensity Analytics",
      "Rest Timer with Background Notifications"
    ],
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "SQLite"],
    galleryImages: [
      "/assets/project_mobile_app.png"
    ]
  },
  {
    id: "kinetic-3d-visuals",
    title: "Aura Chrono — 3D CAD Modeling & Product Animation",
    tagline: "Sub-millimeter 3D modeling, technical CAD drawings, and exploded mechanism product animation",
    category: "3D",
    categoryLabel: "3D Modeling & Animation",
    featured: true,
    gridSpan: "large",
    year: "2026",
    client: "Aura Horology Studio",
    impact: "4K Exploded CAD Simulation",
    status: "Featured CGI Case",
    sticker: {
      label: "CGI & 3D MOTION AWARDS ✦ 4K",
      variant: "holographic",
      rotation: "-rotate-3"
    },
    thumbnail: "/assets/project_3d_chrono.png",
    mediaType: "image",
    mediaUrl: "/assets/project_3d_chrono.png",
    overview:
      "A luxury mechanical timepiece project showcasing precision 3D CAD modeling, 2D technical drawings, and dynamic exploded view product animation. Demonstrates internal gear escapements, sapphire crystal refraction, and titanium bezel micro-textures created for digital launches without expensive physical sets.",
    challenge:
      "The physical watch was in prototype stage overseas, making commercial photography and video shoots impossible prior to public launch announcements.",
    solution:
      "Using engineering CAD blueprints and manufacturing specs, we reconstructed the timepiece with exact dimensional tolerances, generated technical drawings, calibrated custom PBR metallic and anti-reflective glass shaders, and animated dramatic exploded view camera sweeps with realistic mechanics.",
    deliverables: [
      "Sub-millimeter 3D CAD Modeling & Mesh Optimization",
      "Exploded View Kinetic Product Animation (Escapement & Gears)",
      "2D/3D CAD Technical Drafting & Dimensional Blueprints",
      "Custom PBR Material Shaders (Titanium, Gold, Sapphire)",
      "4K Macro Product Animation & Exploded Stills"
    ],
    techStack: ["CAD Drafting", "Blender 3D", "Cycles Raytracing", "Substance Painter", "DaVinci Resolve"],
    galleryImages: [
      "/assets/project_3d_chrono.png",
      "/assets/project_cad_drawings.png"
    ]
  },
  {
    id: "social-growth-campaign",
    title: "Regional Brand Launch — Meta Ads & Content",
    tagline: "High-retention video reels, graphic posts, and targeted local customer acquisition",
    category: "Social",
    categoryLabel: "Social Media & Meta Ads",
    featured: false,
    gridSpan: "standard",
    year: "2025",
    client: "Regional Retail Brand",
    impact: "+220% Footfall Growth",
    status: "Active Campaign",
    sticker: {
      label: "HIGH-RETENTION REELS ✦ META ADS",
      variant: "yellow-star",
      rotation: "rotate-3"
    },
    thumbnail: "/assets/project_social_campaign.png",
    mediaType: "image",
    mediaUrl: "/assets/project_social_campaign.png",
    overview:
      "An integrated social media presence and Meta Ads campaign designed to take an emerging consumer retail brand from obscurity to regional awareness across Western UP and Delhi NCR.",
    challenge:
      "The client struggled with low engagement on static product posts and fragmented advertising spend that generated clicks without qualified local footfalls.",
    solution:
      "We produced 15 targeted short-form reels focusing on product craftsmanship, deployed structured weekly story sequences, and paired organic content with pincode-specific Meta Ads campaigns.",
    deliverables: [
      "15 High-Retention Short-Form Reels",
      "20 Designed Static & Carousel Creatives",
      "Meta Ads Campaign Setup & Radius Audience Targeting",
      "Bi-Weekly Conversion & Inquiries Reporting"
    ],
    techStack: ["Premiere Pro", "After Effects", "Meta Ads Manager", "Figma"],
    galleryImages: [
      "/assets/project_social_campaign.png"
    ]
  }
];

