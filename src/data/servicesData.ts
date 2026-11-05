export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  bestFor: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  deliverables?: string[];
  ctaLabel: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  categoryNumber: string;
  tagline: string;
  summary: string;
  heroHeadline: string;
  heroDescription: string;
  iconName: string;
  subservices: {
    title: string;
    description: string;
  }[];
  whoItsFor: {
    audience: string;
    need: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  packages: ServicePackage[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "web-services": {
    id: "web-services",
    slug: "web-services",
    categoryNumber: "01",
    title: "Web Services",
    tagline: "Build your digital presence.",
    summary:
      "Engineered web applications and brand platforms built with clean typography, fast load times, and conversion-focused architectures.",
    heroHeadline: "Websites Crafted for Credibility, Speed and Measurable Growth.",
    heroDescription:
      "We design and develop high-performance websites that communicate your positioning with clarity, load instantly across all devices, and turn qualified visitors into active inquiries.",
    iconName: "Globe",
    subservices: [
      {
        title: "Websites & Brand Platforms",
        description: "Custom digital platforms designed from the ground up to reflect your authentic brand identity and value proposition."
      },
      {
        title: "UI/UX & Product Design",
        description: "Research-driven user interfaces, wireframes, and design systems crafted for intuitive navigation and high engagement."
      },
      {
        title: "E-Commerce Solutions",
        description: "Modern, friction-free online stores with reliable product catalogs, secure payment flows, and inventory integration."
      },
      {
        title: "SEO & Performance Architecture",
        description: "Technical search engine optimization, semantic structured data, and Core Web Vitals optimization to win organic visibility."
      }
    ],
    whoItsFor: [
      {
        audience: "Emerging Startups & Founders",
        need: "Looking to establish an authentic, high-credibility digital foundation that wins customer trust on day one."
      },
      {
        audience: "Established Businesses",
        need: "Needing a comprehensive redesign to upgrade outmoded templates into streamlined, modern digital growth engines."
      },
      {
        audience: "D2C Brands & Retailers",
        need: "Requiring smooth shopping journeys, fast mobile checkouts, and seamless inventory management."
      },
      {
        audience: "Service & B2B Enterprises",
        need: "Demanding structured lead generation systems with WhatsApp, email, and CRM routing built right in."
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Information Architecture",
        description: "We map your brand positioning, study audience intent, and structure an intuitive content hierarchy."
      },
      {
        step: "02",
        title: "Bespoke UI/UX Design",
        description: "We design clean wireframes and high-fidelity desktop and mobile viewports with deliberate typography and contrast."
      },
      {
        step: "03",
        title: "Modern Front-End & Integration",
        description: "We build with clean, responsive code, integrating lead forms, analytics, domain setup, and high-speed hosting."
      },
      {
        step: "04",
        title: "SEO Audit, Testing & Launch",
        description: "We perform cross-browser audits, accessibility validation, and performance tests before a seamless production deployment."
      }
    ],
    packages: [
      {
        id: "web-starter",
        name: "Starter Package",
        badge: "Essential Launch",
        bestFor: "Perfect for growing businesses seeking to boost their online engagement and visibility.",
        description: "A solid foundation covering all the essential elements needed to launch a modern, professional web presence.",
        highlighted: false,
        features: [
          "Full Website Design (Modern & brand-focused)",
          "Mobile & Tablet Responsive Layouts",
          "SEO Basics & Meta Setup",
          "Domain & Hosting Setup Assistance",
          "Forms Integration (WhatsApp / Google Forms)",
          "1 Year Maintenance & Support Included"
        ],
        ctaLabel: "Request Starter Scope"
      },
      {
        id: "web-professional",
        name: "Professional Package",
        badge: "Most Popular",
        bestFor: "Designed for established businesses aiming for comprehensive digital solutions and tailored design.",
        description: "Our comprehensive web design package with custom UI/UX design, performance tuning, and full search optimization.",
        highlighted: true,
        features: [
          "All Starter Package Features Included",
          "Bespoke Custom UI/UX Design System",
          "Core Web Vitals & Performance Optimization",
          "Full SEO Setup with Monthly Technical Audits",
          "Multi-channel Lead Routing & Inquiries",
          "Dedicated Post-Launch Support & Monitoring"
        ],
        ctaLabel: "Request Professional Scope"
      },
      {
        id: "web-premium",
        name: "Premium Package",
        badge: "Advanced Presence",
        bestFor: "Tailored for growing companies requiring expanded digital services and dedicated support.",
        description: "A high-end web platform designed for maximum conversion with advanced lead capture pipelines and ongoing maintenance.",
        highlighted: false,
        features: [
          "All Basic and Professional Services",
          "Premium UI/UX Design with Custom Interactions",
          "Contact & Lead Generation System (Email, WhatsApp, Forms)",
          "Advanced On-page & Technical SEO Setup",
          "Custom System Integrations & Ongoing Maintenance",
          "Exclusive discount on Social Media management services"
        ],
        ctaLabel: "Request Premium Scope"
      },
      {
        id: "web-ecommerce",
        name: "Business / E-Commerce Package",
        badge: "Full Scale",
        bestFor: "Tailored for large businesses and retailers requiring extensive commerce features and strategic support.",
        description: "End-to-end digital commerce architecture designed for catalog scale, secure transactions, and digital market leadership.",
        highlighted: false,
        features: [
          "All Professional & Premium Tier Capabilities",
          "Business Strategy & Comprehensive Digital Planning",
          "Premium+ UI/UX Design & Advanced Development",
          "Complete E-Commerce / Storefront Architecture",
          "Advanced SEO & Analytics Event Tracking Setup",
          "Maximum monthly partner discount on Social Media services"
        ],
        ctaLabel: "Request E-Commerce Scope"
      }
    ],
    faqs: [
      {
        question: "How long does a custom website project typically take?",
        answer: "A standard website project ranges between 2 to 4 weeks depending on the selected package, scope complexity, and feedback cycles. We provide a transparent sprint schedule during our kickoff meeting."
      },
      {
        question: "Will my website look good and function properly on mobile devices?",
        answer: "Every website we engineer is built responsive-first. We rigorously test all layouts across mobile, tablet, and widescreen desktop displays to ensure flawless usability."
      },
      {
        question: "Do you handle hosting, domains, and technical deployment?",
        answer: "Yes. All our packages include setup assistance for domain registration, high-speed hosting configuration, SSL certificates, and DNS settings."
      },
      {
        question: "Can we add custom forms, WhatsApp buttons, and lead integrations?",
        answer: "Yes. Direct WhatsApp inquiry buttons, dynamic contact forms, and lead notification routing are built-in features across our web tiers."
      }
    ]
  },

  "app-services": {
    id: "app-services",
    slug: "app-services",
    categoryNumber: "02",
    title: "App Services",
    tagline: "Turn ideas into useful products.",
    summary:
      "Reliable web and mobile applications engineered to streamline operations, manage customer bookings, and power modern digital services.",
    heroHeadline: "Purpose-Built Applications That Simplify Operations and Serve Users.",
    heroDescription:
      "From internal workflow utilities and booking portals to customer-facing mobile applications, we build stable software that solves real operational bottlenecks.",
    iconName: "Smartphone",
    subservices: [
      {
        title: "Business & Operational Apps",
        description: "Internal tools for employee attendance, inventory tracking, task coordination, and daily expense recording."
      },
      {
        title: "Customer & Booking Platforms",
        description: "Smooth appointment scheduling, service booking, and automated reservation management systems."
      },
      {
        title: "E-Commerce & Delivery Apps",
        description: "Product catalog browsing, ordering pipelines, cart management, and real-time delivery status updates."
      },
      {
        title: "Custom Cloud & AI Applications",
        description: "Tailored software solutions integrating intelligent automation, database synchronization, and role-based access."
      }
    ],
    whoItsFor: [
      {
        audience: "Clinics, Salons & Service Providers",
        need: "Requiring self-service appointment booking and automated client reminder scheduling."
      },
      {
        audience: "Growing SMBs & Retailers",
        need: "Moving away from manual spreadsheets to structured employee, stock, and order management."
      },
      {
        audience: "Education & Coaching Academies",
        need: "Distributing course material, student progress tracking, and batch scheduling in one dashboard."
      },
      {
        audience: "Modern Tech Startups",
        need: "Building an MVP application with clean UX, reliable authentication, and scalable database schemas."
      }
    ],
    process: [
      {
        step: "01",
        title: "Scope & Schema Definition",
        description: "We map out user roles, primary user flows, state logic, and database schemas before writing code."
      },
      {
        step: "02",
        title: "Interactive Wireframes & UX",
        description: "We design clean, ergonomic application screens optimized for rapid task completion and minimal cognitive load."
      },
      {
        step: "03",
        title: "Full-Stack Development",
        description: "We build resilient frontend components connected to secure APIs, authentication, and database services."
      },
      {
        step: "04",
        title: "QA Testing & Deployment",
        description: "Rigorous end-to-end testing, error telemetry, and cloud deployment with clear administrative documentation."
      }
    ],
    packages: [
      {
        id: "app-basic",
        name: "Basic Applications",
        badge: "Essential Utility",
        bestFor: "Simple applications for individuals, startups, and small businesses needing focused utility.",
        description: "Focused digital applications designed to solve a single direct need like bookings or digital catalogs.",
        highlighted: false,
        features: [
          "Business Information Application",
          "Portfolio & Personal App",
          "Appointment Booking Application",
          "Restaurant Menu & Catalog App",
          "Event Information & Schedule System",
          "Clean Mobile-Responsive UI"
        ],
        ctaLabel: "Request Basic App Scope"
      },
      {
        id: "app-business",
        name: "Business Applications",
        badge: "Operational Backbone",
        bestFor: "Apps that help businesses manage customers, services, and daily internal activities.",
        description: "Streamlined operational tools that automate repetitive tracking, attendance, and customer touchpoints.",
        highlighted: true,
        features: [
          "Customer Management (CRM) App",
          "Full Service Booking Platform",
          "Employee Attendance & Shift App",
          "Expense & Payment Tracking App",
          "Inventory Management System",
          "Admin Dashboard with Export Capabilities"
        ],
        ctaLabel: "Request Business App Scope"
      },
      {
        id: "app-advanced",
        name: "Advanced Applications",
        badge: "Feature Rich",
        bestFor: "Feature-rich applications with databases, user accounts, and integrated multi-step workflows.",
        description: "Scalable application platforms built with robust authentication, role permissions, and realtime data.",
        highlighted: false,
        features: [
          "Full E-commerce & Cart Application",
          "Learning & Course Delivery App",
          "Delivery & Order Tracking Platform",
          "Fitness, Wellness & Workout App",
          "Healthcare & Multi-Doctor Appointment System",
          "Role-Based Authentication & Permissions"
        ],
        ctaLabel: "Request Advanced App Scope"
      },
      {
        id: "app-premium",
        name: "Premium Applications",
        badge: "Custom Architecture",
        bestFor: "Custom applications designed for complex operations, larger user bases, and scalable business needs.",
        description: "Bespoke digital product architecture with real-time sync, custom APIs, and AI integrations.",
        highlighted: false,
        features: [
          "AI-Powered Mobile & Web Application",
          "Multi-Vendor Marketplace Infrastructure",
          "Custom Enterprise Business Management System",
          "On-Demand Services Dispatch Application",
          "Real-Time Logistics & Fleet Tracking App",
          "Dedicated Infrastructure & SLA Monitoring"
        ],
        ctaLabel: "Request Custom App Scope"
      }
    ],
    faqs: [
      {
        question: "Can these applications be accessed on iOS and Android phones?",
        answer: "Yes. We develop progressive web apps (PWAs) and cross-platform native-ready applications that deliver native-grade experiences on both iPhone and Android devices."
      },
      {
        question: "Is data stored securely?",
        answer: "Yes. All applications implement encrypted transport (HTTPS/TLS), secure authentication, and isolated database schemas with automated backups."
      },
      {
        question: "Can we integrate WhatsApp notifications for new bookings or orders?",
        answer: "Absolutely. We routinely connect webhook pipelines that dispatch instant WhatsApp alerts to business owners and confirmation messages to customers."
      }
    ]
  },

  "social-media": {
    id: "social-media",
    slug: "social-media",
    categoryNumber: "03",
    title: "Social Media",
    tagline: "Create content that gets attention.",
    summary:
      "End-to-end content production, reels scripting, creative design, and Meta Ads campaigns designed to build authentic brand awareness.",
    heroHeadline: "Consistent Content, High-Impact Reels and Targeted Meta Ads.",
    heroDescription:
      "We handle complete content creation, filming, editing, and paid advertising under one roof — ensuring your brand consistently stands out on Instagram and Facebook.",
    iconName: "Share2",
    subservices: [
      {
        title: "Short-Form Reels Production",
        description: "Concept scripting, on-location shooting, and high-retention video editing tailored for Instagram and YouTube Shorts."
      },
      {
        title: "Designed Creatives & Carousels",
        description: "Brand-consistent social media posts, visual carousels, and educational infographics that communicate value."
      },
      {
        title: "Engaging Story Cadence",
        description: "Daily and weekly interactive stories, polls, and announcements that keep your existing community engaged."
      },
      {
        title: "Targeted Meta Ads Campaigns",
        description: "Campaign architecture, audience targeting, creative testing, and ROI optimization across Facebook and Instagram."
      }
    ],
    whoItsFor: [
      {
        audience: "Local Businesses & Studios",
        need: "Looking to attract foot traffic and local inquiries in Meerut, NCR, and regional territories."
      },
      {
        audience: "E-Commerce & Direct-to-Consumer Brands",
        need: "Requiring consistent video assets to run high-converting visual ads and build social proof."
      },
      {
        audience: "Professional Firms & Consultants",
        need: "Building authority, thought leadership, and clean visual identity on business social channels."
      },
      {
        audience: "Brands Scaling Their Social Footprint",
        need: "Needing a reliable creative team to handle scripting, editing, scheduling, and ads simultaneously."
      }
    ],
    process: [
      {
        step: "01",
        title: "Content Strategy & Calendar",
        description: "We analyze your audience, plan monthly content pillars, and write structured video scripts."
      },
      {
        step: "02",
        title: "Shooting & Creative Production",
        description: "Professional video shoots and high-resolution creative asset design aligned with brand visual tokens."
      },
      {
        step: "03",
        title: "Post-Production & Scheduling",
        description: "High-retention video editing with captions, sound design, hook optimization, and calendar scheduling."
      },
      {
        step: "04",
        title: "Meta Ads Launch & Optimization",
        description: "We deploy targeted ad sets, monitor cost-per-lead / acquisition, and optimize targeting weekly."
      }
    ],
    packages: [
      {
        id: "social-starter",
        name: "Starter Plan",
        badge: "Core Presence",
        bestFor: "Perfect for brands starting their video and social content presence with a consistent monthly cadence.",
        description: "Complete monthly content creation, professional reel editing, designed posts, and integrated Meta Ads.",
        highlighted: false,
        features: [
          "8 Reels (Shooting + High-Retention Editing + Scripting)",
          "15 Posts (Bespoke designed creatives & carousels)",
          "20 Stories (Engaging, interactive story content)",
          "Meta Ads Campaign Setup & Management Included",
          "Dedicated Social Page Optimization (Instagram & Facebook)",
          "Monthly Performance & Reach Summary"
        ],
        ctaLabel: "Request Starter Plan"
      },
      {
        id: "social-pro",
        name: "Pro Plan",
        badge: "Most Popular",
        bestFor: "Designed for ambitious brands aiming for strong weekly presence and accelerating customer inquiries.",
        description: "Our high-impact social media management tier with elevated video volume and continuous Meta Ads oversight.",
        highlighted: true,
        features: [
          "15 Reels (Shooting + High-Retention Editing + Scripting)",
          "20 Posts (Bespoke designed creatives & carousels)",
          "25 Stories (Engaging, interactive story content)",
          "Meta Ads Campaign Setup & Active Weekly Optimization Included",
          "Full Page Optimization & Community Lead Handling",
          "Monthly Growth & Conversion Strategy Review"
        ],
        ctaLabel: "Request Pro Plan"
      },
      {
        id: "social-premium",
        name: "Premium Plan",
        badge: "Market Dominance",
        bestFor: "Tailored for established brands demanding high-frequency publishing and aggressive market reach.",
        description: "Our comprehensive studio package offering daily brand visibility, extensive video assets, and multi-campaign ads.",
        highlighted: false,
        features: [
          "25 Reels (Shooting + High-Retention Editing + Scripting)",
          "25 Posts (Bespoke designed creatives & carousels)",
          "30 Stories (Engaging story content for daily presence)",
          "Meta Ads Campaign Included with Multi-Ad Set Targeting",
          "Full Priority Lead Handling (Instagram & Facebook DM/Comments)",
          "Bi-Weekly Strategy Consultations & Creative Direction"
        ],
        ctaLabel: "Request Premium Plan"
      }
    ],
    faqs: [
      {
        question: "How does the Meta Ads campaign work in these packages?",
        answer: "Meta Ads campaign setup, audience targeting, and weekly ad optimization are included in our management plans. Your media ad spend is paid directly to Meta, with our management fee handling all campaign structuring and performance tuning."
      },
      {
        question: "Do you offer localized geographic targeting?",
        answer: "Yes. We configure precise pincode, city, or radius-based geographic targeting for local businesses as well as broad national demographic campaigns."
      },
      {
        question: "Is there a bundle discount if we also take web services?",
        answer: "Yes. As detailed in our official proposal, clients pairing website services with social media management receive dedicated monthly partner savings."
      }
    ]
  },

  "ai-automation": {
    id: "ai-automation",
    slug: "ai-automation",
    categoryNumber: "04",
    title: "AI Automation",
    tagline: "Remove repetitive work.",
    summary:
      "Intelligent workflows, WhatsApp conversational bots, and automated CRM pipelines that eliminate manual tasks and accelerate response times.",
    heroHeadline: "Engineered Automation That Works While You Sleep.",
    heroDescription:
      "We replace messy manual data entry, missed inquiries, and slow response times with robust automation pipelines and intelligent AI agents.",
    iconName: "Cpu",
    subservices: [
      {
        title: "WhatsApp & Multi-Channel Bots",
        description: "Automated customer inquiry handling, service catalogs, and instant conversational support on WhatsApp."
      },
      {
        title: "Lead Capture & CRM Routing",
        description: "Instant data capture from web forms and ads, automatic deduplication, and direct CRM synchronization."
      },
      {
        title: "Appointment & Booking Pipelines",
        description: "Self-service booking workflows with calendar sync, confirmation alerts, and automated reminder sequences."
      },
      {
        title: "Intelligent AI Agents & Analytics",
        description: "Natural language query agents, automated report generation, and inventory alert mechanisms."
      }
    ],
    whoItsFor: [
      {
        audience: "Fast-Moving Sales Teams",
        need: "Losing leads due to delayed WhatsApp or email responses after hours."
      },
      {
        audience: "Appointment-Based Businesses",
        need: "Spending hours manually confirming appointments and handling cancellations."
      },
      {
        audience: "E-Commerce & Retail Stores",
        need: "Needing automated order notifications, shipping updates, and low-inventory alerts."
      },
      {
        audience: "Operations Managers",
        need: "Tired of repetitive data copying between spreadsheets, forms, and email clients."
      }
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit & Mapping",
        description: "We map your current manual touchpoints, bottlenecks, and the software tools your team uses daily."
      },
      {
        step: "02",
        title: "Pipeline Architecture",
        description: "We construct reliable DAG workflows with fail-safe triggers, data transformations, and notification channels."
      },
      {
        step: "03",
        title: "Integration & Testing",
        description: "We connect APIs, test edge cases, configure error alerts, and verify response latency across devices."
      },
      {
        step: "04",
        title: "Handover & Active Monitoring",
        description: "We provide your team with transparent dashboards and maintain operational monitoring for zero downtime."
      }
    ],
    packages: [
      {
        id: "ai-basic",
        name: "Basic Automation",
        badge: "Essential Triggers",
        bestFor: "Automating simple repetitive tasks like lead collection, email responses, and customer follow-ups.",
        description: "Save hours each week by replacing manual copy-pasting with automated lead notifications and instant email replies.",
        highlighted: false,
        features: [
          "Instant Lead Capture Automation",
          "Automated Email Confirmation & Replies",
          "Scheduled Follow-up Sequences",
          "Form & Document Ingestion Automation",
          "Inventory & Stock Threshold Alert Triggers",
          "Zero-Code Admin Notifications"
        ],
        ctaLabel: "Request Basic Automation"
      },
      {
        id: "ai-business",
        name: "Business Automation",
        badge: "Most Popular",
        bestFor: "Streamlining everyday business activities such as WhatsApp communication and appointment scheduling.",
        description: "The operational backbone for service businesses: turn incoming WhatsApp chats into scheduled calendar bookings effortlessly.",
        highlighted: true,
        features: [
          "WhatsApp Business API Automation",
          "Automated Appointment Booking & Calendar Sync",
          "Data Entry & Spreadsheets Synchronization",
          "Automated Customer Feedback Collection",
          "Instant Order Notification Workflows",
          "Multi-User Notification Routing"
        ],
        ctaLabel: "Request Business Automation"
      },
      {
        id: "ai-advanced",
        name: "Advanced Automation",
        badge: "Cross-Platform Pipeline",
        bestFor: "Connecting business tools, managing sales pipelines, and automating multi-step organizational workflows.",
        description: "Enterprise-grade workflow orchestration linking your marketing channels, CRM, and team communication channels.",
        highlighted: false,
        features: [
          "Custom Multi-Node Workflow Automation",
          "CRM & Sales Pipeline Stage Triggers",
          "Social Media Lead Routing & Instant Handover",
          "Advanced Inventory & Stock Synchronization",
          "Automated Weekly Report Generation & Delivery",
          "Error-Catching & Failover Alerting"
        ],
        ctaLabel: "Request Advanced Automation"
      },
      {
        id: "ai-premium",
        name: "Premium Automation",
        badge: "AI Agents & Intelligence",
        bestFor: "Leveraging AI-powered chatbots, voice agents, and e-commerce workflows to deliver smarter customer experiences.",
        description: "Deploy autonomous AI agents that qualify incoming prospects, resolve questions with context, and route high-value deals.",
        highlighted: false,
        features: [
          "Bespoke Website AI Knowledge Chatbot",
          "Intelligent E-commerce Order Support Agent",
          "AI Voice Agent Consultation Integration",
          "24/7 AI Customer Support Qualification",
          "Automated Sales & Deal Qualification Pipeline",
          "Custom Model Grounding with Your Business Docs"
        ],
        ctaLabel: "Request Custom AI Pipeline"
      }
    ],
    faqs: [
      {
        question: "Do we need technical staff to manage these automations?",
        answer: "No. We engineer turnkey systems that operate reliably in the background. If something needs adjusting, we provide clear controls and ongoing support."
      },
      {
        question: "Can automation connect with our existing WhatsApp and CRM accounts?",
        answer: "Yes. We connect with official WhatsApp Business APIs, Google Sheets, Airtable, Notion, HubSpot, and custom REST API endpoints."
      },
      {
        question: "What happens if a tool goes down or an API errors?",
        answer: "Our workflows incorporate error catching, retry logic, and instant alert notifications so you are never left wondering about missed messages."
      }
    ]
  },

  "3d-works": {
    id: "3d-works",
    slug: "3d-works",
    categoryNumber: "05",
    title: "3D Works",
    tagline: "Build models, animations, and CAD drawings.",
    summary:
      "Precision 3D modeling, kinetic product animation, CAD technical drawings, and studio-grade photorealistic product visualization.",
    heroHeadline: "Precision 3D Modeling, Product Animation and Technical CAD Drawings.",
    heroDescription:
      "We build high-accuracy 3D models, dynamic product animations, manufacturing-ready CAD drawings, and photorealistic CGI visuals that bring physical products and concepts to life.",
    iconName: "Box",
    subservices: [
      {
        title: "Photorealistic CGI Stills",
        description: "Studio-grade raytraced CGI stills with accurate PBR material textures, reflections, and commercial lighting setups."
      },
      {
        title: "3D Motion & Commercials",
        description: "Dynamic product animation, kinetic exploded views, mechanism movements, and high-impact commercial motion choreographies."
      },
      {
        title: "VFX & Environmental Scenes",
        description: "Atmospheric visual effects, realistic environmental simulations, cinematic scenes, and dynamic set dressing."
      },
      {
        title: "Product Visualization",
        description: "High-precision 3D CAD modeling, photorealistic rendering, and 360-degree interactive product showcases."
      }
    ],
    whoItsFor: [
      {
        audience: "Hardware Startups & Product Designers",
        need: "Looking to build precision 3D models, CAD blueprints, and functional animations before physical tooling."
      },
      {
        audience: "Manufacturing & Engineering Firms",
        need: "Requiring accurate CAD technical drawings, exploded assembly diagrams, and dimensional documentation."
      },
      {
        audience: "D2C Brands & E-Commerce Retailers",
        need: "Needing 360-degree turntable product animations and photorealistic studio renders for online storefronts."
      },
      {
        audience: "Inventors & Prototype Developers",
        need: "Turning concept sketches and raw specs into polished 3D models and demonstration video assets."
      }
    ],
    process: [
      {
        step: "01",
        title: "CAD Brief & Specification Review",
        description: "We review dimensions, concept sketches, sample photos, or existing technical files to establish precision requirements."
      },
      {
        step: "02",
        title: "3D Modeling & Technical Drafting",
        description: "We build precise 3D geometry, generate 2D/3D CAD technical drawings, and calibrate accurate real-world dimensions."
      },
      {
        step: "03",
        title: "Surfacing, Texturing & Animation",
        description: "We apply photorealistic PBR materials, set up studio lighting, and animate exploded mechanisms or camera sweeps."
      },
      {
        step: "04",
        title: "Raytrace Rendering & Production Export",
        description: "We render in 4K resolution and export manufacturing-ready CAD files (.STEP, .OBJ, .FBX) and high-res stills."
      }
    ],
    packages: [
      {
        id: "3d-custom-quote",
        name: "Custom 3D Engagement",
        badge: "Bespoke Production",
        bestFor: "Brands, hardware creators, and manufacturers needing 3D models, CAD drawings, or product animations.",
        description: "Every 3D model, animation sequence, and CAD drawing set has unique geometric complexity. We review your requirements and provide a milestone-based scope.",
        highlighted: true,
        features: [
          "Precision 3D CAD Modeling & Topology Optimization",
          "Exploded View Product Animations & Kinetic Movement",
          "2D/3D CAD Technical Drawings & Dimensional Blueprints",
          "Photorealistic PBR Materials & Studio Raytracing",
          "High-Resolution 4K Video Deliverables & CGI Stills",
          "Full Production Exports (.STEP, .OBJ, .FBX, 4K MP4, PNG)"
        ],
        ctaLabel: "Request 3D Custom Quote"
      }
    ],
    faqs: [
      {
        question: "What files do we need to provide to build a 3D model or CAD drawing?",
        answer: "You can provide existing CAD files (.step, .iges, .obj, .dwg), hand sketches with dimensions, reference photographs, or physical samples. We can build models and drawings from scratch based on your dimensions."
      },
      {
        question: "Can you create exploded view animations showing internal product parts?",
        answer: "Yes. We specialize in exploded view product animations that illustrate internal engineering, mechanical interactions, and step-by-step assembly workflows."
      },
      {
        question: "Do you supply manufacturing-ready CAD drawings?",
        answer: "Yes. We deliver precise 2D and 3D technical CAD drawings with dimensional callouts, orthographic views, and isometric cross-sections."
      },
      {
        question: "How do you quote 3D modeling and animation projects?",
        answer: "As noted in our guidelines, all 3D engagements are quoted on a custom scope basis depending on model geometry complexity, animation duration, and drawing deliverables."
      }
    ]
  }
};

