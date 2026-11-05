export interface CompanyInfo {
  name: string;
  legalLocation: string;
  email: string;
  phones: string[];
  primaryPhone: string;
  tagline: string;
  subheadline: string;
  mission: string;
  vision: string;
  coreBelief: string;
  approach: {
    number: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  onboarding: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Webloom",
  legalLocation: "Partapur, Meerut (Uttar Pradesh)",
  email: "info.webloom4u@gmail.com",
  phones: ["+91 90588 38478", "+91 6207919163", "+91 92588 15761"],
  primaryPhone: "+91 90588 38478",
  tagline: "Build digital experiences that move your business forward.",
  subheadline:
    "Webloom combines technology, creative design, automation and digital marketing to help businesses build, grow and scale online.",
  coreBelief:
    "At Webloom, we believe a website should be more than just a digital business card. It should be an experience, a communication tool, and a driver of growth. We bring together thoughtful web design, development, UI/UX, branding, and digital marketing to help businesses build a stronger and more memorable online identity.",
  mission:
    "Our mission at Webloom is to help businesses build a strong, meaningful, and results-driven digital presence. We combine creative design, modern technology, and strategic digital marketing to create solutions that not only capture attention but also connect brands with their audience and support long-term growth. We aim to make high-quality digital solutions more accessible, practical, and impactful for businesses of all sizes.",
  vision:
    "Our vision is to become a trusted digital growth partner for ambitious businesses, helping them thrive in an increasingly digital world. We envision a future where every business has a digital presence that truly represents its identity, creates memorable experiences, and turns opportunities into lasting growth. Through continuous innovation, creativity, and a results-focused approach, Webloom aims to build digital experiences that leave a lasting impression.",
  approach: [
    {
      number: "01",
      title: "Understanding Your Business",
      description:
        "Every engagement begins with thorough discovery: understanding your operational goals, competitive landscape, audience intent, and unique value proposition.",
      deliverables: ["Discovery Workshop", "Scope Architecture", "Competitor Review"]
    },
    {
      number: "02",
      title: "Creative Execution",
      description:
        "We translate strategy into clean, human-centered UI/UX design and production-ready code with responsive layouts, accessible contrast, and zero bloat.",
      deliverables: ["Figma Prototypes", "Design System Tokens", "Production Code"]
    },
    {
      number: "03",
      title: "Data-Driven Optimization",
      description:
        "From technical SEO and Core Web Vitals to workflow automation pipelines, we structure every system for measurable reliability and speed.",
      deliverables: ["Performance Auditing", "Technical SEO Setup", "Workflow Testing"]
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description:
        "Post-launch support, ongoing maintenance, and progressive capability rollouts ensure your digital infrastructure continues to scale with your organization.",
      deliverables: ["Launch Handover", "Post-Launch Monitoring", "Long-term Support"]
    }
  ],
  onboarding: [
    {
      step: "01",
      title: "Introduction Call",
      description: "Schedule a focused call to introduce our team, explore your specific needs, and define project boundaries."
    },
    {
      step: "02",
      title: "Proposal & Scope Agreement",
      description: "Receive a transparent, documented scope of work outlining deliverables, technical architecture, and timelines."
    },
    {
      step: "03",
      title: "Kickoff Meeting",
      description: "Align key stakeholders, establish communication channels, and detail project milestones and design direction."
    },
    {
      step: "04",
      title: "Information Gathering & Execution",
      description: "Collect necessary assets, credentials, and content, transitioning directly into active design and development sprints."
    }
  ]
};

