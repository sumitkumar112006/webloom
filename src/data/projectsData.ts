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
    rating?: number;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "deeps-hospital",
    title: "Deeps Hospital — Multi-Specialty Healthcare & Patient Portal",
    tagline: "Comprehensive medical department index, doctor consultation booking, and 24/7 emergency portal",
    category: "Web",
    categoryLabel: "Healthcare & Web",
    featured: true,
    gridSpan: "large",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.deepshospital.com/",
    overview:
      "An enterprise multi-specialty healthcare web portal built for Deeps Hospital, providing patients with department directories, physician profiles, direct appointment requests, and emergency care hotlines. Engineered with accessibility standards and sub-second load times.",
    challenge:
      "Healthcare users in distress need immediate, unambiguous access to emergency contact numbers, doctor specializations, and transparent hospital facilities without navigating complex menus.",
    solution:
      "Constructed a clinically clean, high-accessibility interface with instant emergency dialing buttons, categorized medical departments (Cardiology, Orthopedics, Pediatrics, ICU), and simple appointment booking forms.",
    deliverables: [
      "Clinical UX & High-Accessibility Architecture",
      "Multi-Specialty Department Directories",
      "Doctor Appointment Lead Flow",
      "24/7 Emergency Quick-Action Action Bar",
      "SEO & Local Healthcare Authority Setup"
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "SSL Secure Hosting", "Mobile Optimization"],
    galleryImages: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "Webloom rebuilt our entire digital hospital presence. Patients now easily find our emergency contacts and book OPD consultations online. Load times dropped under 1 second. Exceptional engineering.",
      author: "Dr. Deepak Sharma",
      role: "Medical Director, Deeps Hospital",
      rating: 5
    }
  },
  {
    id: "flora-cafe",
    title: "Flora Cafe — Artisanal Dining & Botanical Cafe Experience",
    tagline: "Warm botanical aesthetic with digital menu, reservations, and WhatsApp table booking",
    category: "Web",
    categoryLabel: "Web Design & Hospitality",
    featured: true,
    gridSpan: "medium",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://floracafesite.netlify.app/",
    overview:
      "A vibrant botanical culinary web platform designed for Flora Cafe, showcasing handcrafted coffee menus, daily specials, aesthetic indoor atmospheres, and seamless direct table reservations on Netlify.",
    challenge:
      "The cafe struggled with phone-only inquiries during peak brunch hours, lacking an accessible digital menu and direct location discovery.",
    solution:
      "Engineered an appetizing mobile-first menu experience with categorized items, high-res photography, direct WhatsApp table bookings, and Google Maps integration.",
    deliverables: [
      "Botanical Brand Identity Palette",
      "Mobile-First Responsive Menu",
      "Instant WhatsApp Table Reservation",
      "Google Maps & Contact Integration"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Netlify", "WhatsApp API"],
    galleryImages: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "The botanical design captures our cafe's exact vibe. Customers love scanning our digital menu, and weekend reservations have become seamless. Zero bugs, delivered right on schedule.",
      author: "Rohan Mehta",
      role: "Operations Partner, Flora Cafe",
      rating: 5
    }
  },
  {
    id: "kadappa-cafe",
    title: "Kadappa Cafe — Authentic South Indian Culinary Dining",
    tagline: "Rich culinary branding, digital menu showcase, and online orders deployed on Vercel",
    category: "Web",
    categoryLabel: "Hospitality & Dining",
    featured: true,
    gridSpan: "medium",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://kadappacafe-weld.vercel.app/",
    overview:
      "A traditional South Indian culinary brand web presence celebrating authentic flavors, specialty dosas, filter coffee, and hassle-free dining reservations deployed on Vercel.",
    challenge:
      "Differentiating from generic local eateries and establishing an authentic, clean digital presence that drives real weekend dining visits.",
    solution:
      "Engineered an appetizing responsive site with high-contrast dish photography, verified operating hours, one-click calling, and instant location navigation.",
    deliverables: [
      "Authentic Culinary Design System",
      "Interactive Dish & Combo Menu",
      "Instant Calling & Map Routing",
      "Vercel Edge Deployment"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    galleryImages: [
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "Webloom understood the cultural heritage and culinary appeal of our brand. The site is super fast on mobile and brings us continuous footfalls. Highly recommend.",
      author: "Priya Raghavan",
      role: "Co-Founder, Kadappa Cafe",
      rating: 5
    }
  },
  {
    id: "animated-boba",
    title: "Boba Bliss — Interactive Animated Beverage Experience",
    tagline: "Kinetic 3D-inspired micro-interactions and interactive bubble tea customizer",
    category: "Web",
    categoryLabel: "Interactive Web & Creative",
    featured: true,
    gridSpan: "standard",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://animated-boba-914138.netlify.app/",
    overview:
      "An engaging, playful web platform featuring animated beverage visuals, interactive topping selectors, and fluid UI animations built to elevate modern Gen-Z dessert brands.",
    challenge:
      "Standard restaurant templates fail to capture the fun, energetic vibe of artisanal boba and fail to engage younger demographics.",
    solution:
      "Constructed custom CSS/JS micro-animations with buoyant physics, responsive flavor carousels, and rapid time-to-interactive.",
    deliverables: [
      "Playful Kinetic UI Interactions",
      "Flavor & Topping Customizer UI",
      "Sub-second Mobile Performance",
      "Netlify Edge Deployment"
    ],
    techStack: ["HTML5", "CSS3 Animation", "JavaScript", "Netlify"],
    galleryImages: [
      "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "The animated customizer and playful micro-interactions brought our boba brand alive! Our Gen-Z customer engagement increased by over 40%.",
      author: "Ananya Gupta",
      role: "Product Manager, Boba Bliss",
      rating: 5
    }
  },
  {
    id: "kingfisher-lifestyle",
    title: "Kingfisher Experiences — Premium Lifestyle & Hospitality",
    tagline: "Bold visual storytelling, experiential events showcase, and fluid responsive design on Vercel",
    category: "Web",
    categoryLabel: "Brand & Lifestyle",
    featured: true,
    gridSpan: "standard",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://kingfisher-wheat.vercel.app/",
    overview:
      "A vibrant lifestyle brand landing page built to spotlight premium dining experiences, social gatherings, curated venues, and seasonal brand activities.",
    challenge:
      "Creating a dynamic, energetic atmosphere on mobile screens while maintaining sub-second performance.",
    solution:
      "High-impact visual grids, smooth scroll behaviors, and responsive typography tuned for mobile social discovery.",
    deliverables: [
      "Dynamic Lifestyle Branding",
      "Venue & Experience Showcase",
      "Event Schedule & Inquiries",
      "Vercel CDN Optimization"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    galleryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "From fluid responsive animations to crisp typography, the experience is top notch. The deployment on Vercel has been rock solid.",
      author: "Vikramaditya Rao",
      role: "Brand Lead, Kingfisher Experiences",
      rating: 5
    }
  },
  {
    id: "dazzling-melba",
    title: "Melba Studio — Creative Agency & Brand Showcase",
    tagline: "High-contrast dark editorial interface with fluid typography and structured case grids",
    category: "Web",
    categoryLabel: "Web Design & Studio",
    featured: false,
    gridSpan: "standard",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://dazzling-melba-4264c5.netlify.app/",
    overview:
      "An ultra-clean modern studio portfolio emphasizing architectural negative space, smooth layout transitions, and high-contrast typography hierarchy.",
    challenge:
      "Creating a portfolio template that balances visual authority without sacrificing sub-second load times.",
    solution:
      "Lightweight semantic markup with utility styling, custom SVG line graphics, and accessible contrast ratios.",
    deliverables: [
      "Architectural Grid System",
      "Minimalist Portfolio Gallery",
      "Responsive Client Presentation"
    ],
    techStack: ["React", "Tailwind CSS", "Netlify"],
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "Clean, uncompromising code. No template junk. The Webloom team engineered our portfolio with sub-millisecond precision.",
      author: "Kabir Sen",
      role: "Creative Director, Melba Digital Studio",
      rating: 5
    }
  },
  {
    id: "warm-kashata",
    title: "Kashata Crafts — Artisanal Heritage & E-Commerce",
    tagline: "Warm earthy palette, storytelling typography, and curated product gallery",
    category: "Web",
    categoryLabel: "E-Commerce & Crafts",
    featured: false,
    gridSpan: "standard",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://warm-kashata-3f0e8d.netlify.app/",
    overview:
      "A heritage-focused artisanal showcase highlighting handcrafted goods with tactile textures, warm lighting palettes, and detailed maker stories.",
    challenge:
      "Translating tactile physical craftsmanship into a digital browser screen without sterile corporate aesthetics.",
    solution:
      "Warm earthy tone curves, editorial serif accents, and generous whitespace celebrating product photography.",
    deliverables: [
      "Heritage Brand Styling",
      "Product Catalog Grid",
      "Inquiry & Order Flow"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Netlify"],
    galleryImages: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "The earthy palette and storytelling typography showcase our handcrafted products with the dignity they deserve. Great communication throughout.",
      author: "Meenakshi Sundaram",
      role: "Director, Kashata Studio Crafts",
      rating: 5
    }
  },
  {
    id: "web-automation",
    title: "Web Automation — Agentic Browser Platform",
    tagline: "Autonomous browser automation engine with visual DAG workflows, Stagehand v4, & Trigger.dev",
    category: "AI",
    categoryLabel: "AI & Full-Stack",
    featured: true,
    gridSpan: "large",
    year: "2026",
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
    ],
    testimonial: {
      quote: "Building an agentic browser DAG with Stagehand v4 and Trigger.dev required deep full-stack architecture. Webloom delivered beyond expectations.",
      author: "Aditya Verma",
      role: "Technical Founder, Web Automation Platform",
      rating: 5
    }
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
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    testimonial: {
      quote: "Our bridal bookings doubled after launching the website. The direct WhatsApp inquiry flow filters serious brides and saves me 3 hours of messaging every day. Truly five-star work.",
      author: "Tanmatra",
      role: "Founder & Lead Artist, Lady Boss Bridal",
      rating: 5
    }
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
    id: "kinetic-3d-visuals",
    title: "Aura Chrono — 3D CAD Modeling & Product Animation",
    tagline: "Sub-millimeter 3D modeling, technical CAD drawings, and exploded mechanism product animation",
    category: "3D",
    categoryLabel: "3D Modeling & Animation",
    featured: true,
    gridSpan: "large",
    year: "2026",
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
    ],
    testimonial: {
      quote: "The sub-millimeter 3D CAD modeling and exploded mechanical gears animation let us launch our watch collection before physical tooling was completed. Phenomenal CGI.",
      author: "Siddharth Jain",
      role: "Engineering Lead, Aura Chrono Horology",
      rating: 5
    }
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
    id: "social-growth-campaign",
    title: "Regional Brand Launch — Meta Ads & Content",
    tagline: "High-retention video reels, graphic posts, and targeted local customer acquisition",
    category: "Social",
    categoryLabel: "Social Media & Meta Ads",
    featured: false,
    gridSpan: "standard",
    year: "2025",
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
    ],
    testimonial: {
      quote: "15 short-form reels and hyper-targeted Meta ads delivered a 3.8x ROAS across Western UP in our first month. Complete in-house production.",
      author: "Neha Kapoor",
      role: "Growth Strategist, Regional Retail Brand",
      rating: 5
    }
  }
];
