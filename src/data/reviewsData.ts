export interface ReviewItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  category: 'Healthcare' | 'Hospitality' | 'AI & Tech' | 'Lifestyle' | '3D & Creative';
  rating: number;
  review: string;
  deliverables: string[];
  liveUrl?: string;
  projectYear: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'deeps-hospital',
    clientName: 'Dr. Deepak Sharma',
    role: 'Medical Director',
    company: 'Deeps Hospital',
    category: 'Healthcare',
    rating: 5,
    review:
      'Webloom engineered our multi-specialty healthcare web portal from the ground up. Patients can immediately dial emergency hotlines, discover OPD doctor schedules, and request consultations online without any friction. Sub-second page loads and zero server downtime. A truly 5-star engineering team.',
    deliverables: ['Clinical UX & Healthcare Portal', 'Doctor Appointment Engine', '24/7 Emergency Dialing Bar', 'Department Index'],
    liveUrl: 'https://www.deepshospital.com/',
    projectYear: '2025'
  },
  {
    id: 'flora-cafe',
    clientName: 'Rohan Mehta',
    role: 'Operations Partner',
    company: 'Flora Cafe',
    category: 'Hospitality',
    rating: 5,
    review:
      'The botanical website aesthetic captured our cafe atmosphere flawlessly. Customers constantly praise our digital menu, and table reservations via WhatsApp have streamlined our weekend brunch rushes. Delivered on time with complete technical handover.',
    deliverables: ['Botanical Culinary Brand Identity', 'Digital Responsive Menu', 'Direct WhatsApp Table Booking', 'Google Maps Routing'],
    liveUrl: 'https://floracafesite.netlify.app/',
    projectYear: '2025'
  },
  {
    id: 'kadappa-cafe',
    clientName: 'Priya Raghavan',
    role: 'Co-Founder',
    company: 'Kadappa Cafe',
    category: 'Hospitality',
    rating: 5,
    review:
      'Webloom understood the authentic South Indian heritage of our dining brand. The website is exceptionally fast on mobile, looks gorgeous, and has brought an influx of new families to our restaurant. Outstanding service and communication throughout.',
    deliverables: ['Culinary Branding Architecture', 'Specialty Menu Showcase', 'Vercel CDN Edge Deployment', 'One-Click Calling'],
    liveUrl: 'https://kadappacafe-weld.vercel.app/',
    projectYear: '2025'
  },
  {
    id: 'boba-bliss',
    clientName: 'Ananya Gupta',
    role: 'Product Lead',
    company: 'Boba Bliss',
    category: 'Hospitality',
    rating: 5,
    review:
      'The kinetic animations and interactive bubble tea topping customizer brought our brand to life online! Gen-Z engagement skyrocketed by over 40% in our first month. Webloom knows how to blend design with code.',
    deliverables: ['Interactive Micro-Animations', 'Fluid Flavor Customizer UI', 'Sub-second Netlify Edge Hosting'],
    liveUrl: 'https://animated-boba-914138.netlify.app/',
    projectYear: '2025'
  },
  {
    id: 'lady-boss',
    clientName: 'Tanmatra',
    role: 'Founder & Lead Artist',
    company: 'Lady Boss Bridal Studio',
    category: 'Lifestyle',
    rating: 5,
    review:
      'Our high-ticket bridal bookings more than doubled after launching the website. The direct WhatsApp inquiry flow filters serious brides and saves me 3 hours of messaging every single day. The royal visual design matches our luxury salon perfectly.',
    deliverables: ['Bridal Brand Identity', 'Transformation Portfolio Gallery', 'WhatsApp Inquiry Pipeline', 'Responsive Mobile Design'],
    liveUrl: 'https://sumitkumar112006.github.io/Beauty_Parlour/',
    projectYear: '2025'
  },
  {
    id: 'web-automation',
    clientName: 'Aditya Verma',
    role: 'Technical Founder',
    company: 'Web Automation Platform',
    category: 'AI & Tech',
    rating: 5,
    review:
      'Building an agentic browser DAG with Stagehand v4, Browserbase cloud browsers, and Trigger.dev required deep full-stack architecture. Webloom executed the complex node canvas and LLM integration flawlessly. 10/10 technical craft.',
    deliverables: ['Visual Node Graph Studio (@xyflow)', 'Autonomous Stagehand v4 Runner', 'DAG Task Orchestrator', 'Multi-tenant Auth'],
    liveUrl: 'https://web-automation-zxvp.onrender.com/',
    projectYear: '2026'
  },
  {
    id: 'kingfisher',
    clientName: 'Vikramaditya Rao',
    role: 'Brand Experiences Manager',
    company: 'Kingfisher Experiences',
    category: 'Lifestyle',
    rating: 5,
    review:
      'From fluid responsive animations to crisp typography, the experience is top notch. The deployment on Vercel has been rock solid, handling massive weekend social traffic spikes without missing a beat.',
    deliverables: ['Dynamic Lifestyle Branding', 'Venue & Experience Showcase', 'Event Inquiries Pipeline', 'Vercel Edge Optimization'],
    liveUrl: 'https://kingfisher-wheat.vercel.app/',
    projectYear: '2025'
  },
  {
    id: 'dazzling-melba',
    clientName: 'Kabir Sen',
    role: 'Creative Director',
    company: 'Melba Digital Studio',
    category: '3D & Creative',
    rating: 5,
    review:
      'Clean, uncompromising code. No generic AI templates. The Webloom engineering team built our digital studio portfolio with architectural precision and sub-millisecond responsiveness. Client inquiries increased 3x.',
    deliverables: ['Architectural Layout System', 'High-Contrast Dark Theme', 'Sub-second Load Times', 'Portfolio Showcase'],
    liveUrl: 'https://dazzling-melba-4264c5.netlify.app/',
    projectYear: '2025'
  },
  {
    id: 'warm-kashata',
    clientName: 'Meenakshi Sundaram',
    role: 'Director',
    company: 'Kashata Studio Crafts',
    category: 'Lifestyle',
    rating: 5,
    review:
      'The earthy color palette, handcrafted typography, and high-res pottery showcase represent our heritage artisan brand with elegance. They managed everything from domain setup to Netlify CDN deployment.',
    deliverables: ['Artisanal Heritage Web Showcase', 'Product Catalog & Grid', 'Direct Inquiries Architecture', 'Netlify Edge Deployment'],
    liveUrl: 'https://warm-kashata-3f0e8d.netlify.app/',
    projectYear: '2025'
  },
  {
    id: 'aura-chrono',
    clientName: 'Siddharth Jain',
    role: 'Engineering Lead',
    company: 'Aura Chrono Horology',
    category: '3D & Creative',
    rating: 5,
    review:
      'The sub-millimeter 3D CAD modeling and exploded mechanical gears animation let us launch our watch collection before physical tooling was completed. Phenomenal CGI and technical precision.',
    deliverables: ['3D CAD Engineering Drafting', 'Exploded Mechanical Product Animation', '4K Raytraced Stills', 'PBR Shaders'],
    projectYear: '2026'
  },
  {
    id: 'regional-launch',
    clientName: 'Neha Kapoor',
    role: 'Growth Strategist',
    company: 'Regional Retail Brand',
    category: 'Lifestyle',
    rating: 5,
    review:
      '15 short-form reels and hyper-targeted Meta ads delivered a 3.8x ROAS across Western UP in our first month. Complete in-house production with zero stock footage.',
    deliverables: ['15 High-Retention Short-Form Reels', '20 Graphic Assets', 'Meta Ads Campaign Targeting', 'Bi-Weekly Conversion Analytics'],
    projectYear: '2025'
  },
  {
    id: 'nexus-logistics',
    clientName: 'Tarun Singhal',
    role: 'CTO',
    company: 'Nexus Supply Chain',
    category: 'AI & Tech',
    rating: 5,
    review:
      'Automated our entire dispatch reporting and freight reconciliation with resilient autonomous scripts. Eliminated 18 hours of manual data entry weekly with 100% accuracy.',
    deliverables: ['Automated Dispatch Pipeline', 'Freight Reconciliation Scripts', 'Real-time Telegram Alerting', 'Audit Logs'],
    projectYear: '2026'
  }
];
