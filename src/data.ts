export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  category: 'eCommerce' | 'AI & IoT' | 'FinTech' | 'Logistics' | 'SaaS';
  stats: { label: string; value: string }[];
  architecture?: {
    components: string[];
    flow: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  projects: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; info?: string }[];
}

export const STR_PORT_TITLE = "Noor-A-Alam Siddique";
export const STR_PORT_SUBTITLE = "Backend Architect & Senior Software Engineer";
export const STR_PORT_EMAIL = "kisorniru@gmail.com";
export const STR_PORT_PHONE = "+880 1725 156 188";
export const STR_PORT_LOCATION = "Dhaka, Bangladesh";
export const STR_PORT_GITHUB = "https://github.com/kisorniru";
export const STR_PORT_LINKEDIN = "https://linkedin.com/in/kisorniru";
export const STR_PORT_RESUME = "/resume.pdf";
export const STR_PORT_IMAGE = "/profile.jpeg";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "tabletap",
    title: "TableTap",
    category: "AI & IoT",
    role: "Lead Architect & Senior Engineer",
    description: "QR-based automated restaurant ordering and operations platform powered by an autonomous, real-time AI dispatcher.",
    longDescription: "TableTap revolutionizes hospitality operations. Built as a high-throughput microservices ecosystem, it features an autonomous AI agent that ingests order items, calculates prep queue delays, routes instructions to kitchen IoT displays, and automates real-time dining operations over WebSockets.",
    tech: ["Laravel", "Node.js", "Python (FastAPI)", "Redis", "AWS (EC2, S3)", "WebSockets"],
    stats: [
      { label: "AI Routing Accuracy", value: "99.4%" },
      { label: "Prep Dispatch Latency", value: "<150ms" },
      { label: "Queue Optimization", value: "28% Faster" }
    ],
    architecture: {
      components: ["Laravel Gateway Enforcer", "Python FastAPI Intelligent Dispatcher", "Redis Event Hub Broker", "Browser/Tablet Client (React/Vue)"],
      flow: ["Guest scans QR code and places order on unified payment-intent node.", "FastAPI agent calculates real-time prep load and routes order.", "Redis Event Broker dispatches order items immediately to corresponding kitchen terminals.", "Stripe is invoked as secondary hook upon meal completion or checkout intent."]
    }
  },
  {
    id: "tokisuki",
    title: "Tokisuki Auction Hub",
    category: "FinTech",
    role: "Senior Microservices Engineer",
    description: "High-frequency luxury watch auction portal designed with dedicated queue engines to ensure real-time bid validation.",
    longDescription: "Tokisuki is a premium luxury watch marketplace that features live-bidding pools. Every incoming bid must be validated against current reserve prices, security tokens, and user balances in real-time under extreme concurrency spikes.",
    tech: ["Symfony", "Laravel", "Node.js Microservices", "Redis Key-Val Vault", "PostgreSQL Clusters"],
    stats: [
      { label: "Concurrent Bid Handling", value: "15,000/sec" },
      { label: "Bid Dispute Auditability", value: "100.0%" },
      { label: "Transaction Trust Value", value: "$4.5M+" }
    ],
    architecture: {
      components: ["Bid Buffer (Node.js/Redis)", "State Validation Master (Laravel)", "Double-Ledger Financial Auditor (PostgreSQL)"],
      flow: ["Bidders join the real-time bid pool.", "Bids stream into high-speed memory buffers (Redis) to prevent DB locks.", "Successful bids trigger atomic state updates in under 20ms and cache invalidation.", "Financial double-entry ledgers capture historical transactions."]
    }
  },
  {
    id: "kayi",
    title: "KAYi Marketplace",
    category: "eCommerce",
    role: "Senior Lead Engineer",
    description: "Location-aware, multi-lingual peer-to-peer marketplace utilizing geo-fenced index fields and escrow payments.",
    longDescription: "KAYi connects localized buyers and sellers safely. Features strict multi-currency, multi-lingual translation structures and localized marketplace query algorithms optimized over Postgres and Redis spatial arrays.",
    tech: ["Laravel", "PostgreSQL (GIS-Fields)", "Redis", "Docker", "Stripe Connect Escrow"],
    stats: [
      { label: "Geo-Query Range Search", value: "0.04s" },
      { label: "Languages Managed", value: "Multi-Locale" },
      { label: "Transaction Margin", value: "Secure Escrow" }
    ],
    architecture: {
      components: ["Core API Platform", "PostGIS Geo-Database", "Globalized Content Dispatcher", "Stripe Escrow Split Engines"],
      flow: ["Sellers post goods with latitude/longitude records.", "Buyers enter spatial boundaries in client interface.", "Laravel performs optimized radial database queries with PostGIS indexing.", "Escrow holds funds until physical check-ins trigger confirmation API."]
    }
  },
  {
    id: "angelflight",
    title: "Angel Flight West App",
    category: "Logistics",
    role: "API & Logistics Engineer",
    description: "Mission management platform coordinate system matching volunteer pilots with patients needing non-emergency medical flights.",
    longDescription: "A specialized ERP and routing network built for USA-based non-profit Angel Flight West. Integrated secure pilot KYC checks, volunteer management matrices, flight booking pipelines, and automated airport and ERP integration.",
    tech: ["Laravel", "Symfony RESTful APIs", "MySQL Cluster", "Ansible Deployment", "Mangopay Escrow / KYC"],
    stats: [
      { label: "Mission Dispatch Success", value: "98.9%" },
      { label: "Flight Miles Coordinated", value: "2.4M Miles" },
      { label: "Volunteer Pilot Base", value: "3,000+ Active" }
    ]
  },
  {
    id: "ichibankuji",
    title: "Ichiban Kuji Game Core",
    category: "SaaS",
    role: "Python Backend Developer",
    description: "Online real-time lottery ticketing and dynamic prize delivery game backend processing thousands of simultaneous claims.",
    longDescription: "Built with high-speed Python FastAPI to coordinate real-time prize-pools and ticketholder verification. Relies heavily on cached state-machines inside Redis to ensure exact, atomic ticket drawings with zero double-claim errors.",
    tech: ["Python", "FastAPI", "Redis Cache States", "MySQL", "AWS RDS"],
    stats: [
      { label: "Daily Active Tickets", value: "80,000+" },
      { label: "Draw-Atomic Protection", value: "100% Reliable" },
      { label: "Claim Speed", value: "90ms" }
    ]
  }
];

export const WORK_HISTORY: Experience[] = [
  {
    id: "dreamonline",
    company: "DreamOnline Ltd.",
    role: "Senior Software Engineer",
    period: "Jan 2021 – Present",
    location: "Dhaka, Bangladesh (Hybrid-Remote)",
    type: "Hybrid-Remote",
    description: [
      "Led technical design and microservices implementation of premium eCommerce & EdTech platforms using Laravel & Node.js on AWS.",
      "Developed high-traffic Python (FastAPI/Django) microservices running on containers alongside Laravel API gateways.",
      "Successfully integrated Stripe, PayPal, Apple Pay, Google Pay to handle secure global financial distributions.",
      "Architected data marketing and analytics modules that process 1M+ database records nightly to derive commercial decisions.",
      "Optimized event-driven real-time networks via custom Redis PUB/SUB structures and transaction caching layers.",
      "Collaborated direct-line with international stakeholders in Japan and USA and guided local junior developers."
    ],
    projects: ["TableTap", "KAYi", "Ichiban Kuji", "Tokisuki", "WelTag"]
  },
  {
    id: "bglobal",
    company: "bGlobal LLC.",
    role: "Software Engineer",
    period: "Apr 2017 – Dec 2020",
    location: "Dhaka, Bangladesh",
    type: "On-Site",
    description: [
      "Designed and engineered Laravel and Symfony RESTful APIs for highly specialized aviation logistics & patient-transport systems.",
      "Configured robust third-party system handshakes and integrated Mangopay/Stripe secure tokens for global KYC onboarding regulations.",
      "Established strict test compliance structures leading to 35% decrease in post-deployment hotfixes."
    ],
    projects: ["Angel Flight West", "Koach"]
  },
  {
    id: "getsmart",
    company: "The Get Smart Group LLC, USA",
    role: "Software Engineer",
    period: "Nov 2019 – Jun 2020",
    location: "USA (Remote)",
    type: "Remote",
    description: [
      "Created highly modular Laravel e-commerce engines, proprietary WordPress plugins, and robust database synchronization tools.",
      "Improved server response speed by 40% using database schema compression and query refactoring."
    ],
    projects: []
  },
  {
    id: "fluxar",
    company: "Fluxar Studios Inc., USA",
    role: "Software Engineer",
    period: "Jan 2018 – Sep 2018",
    location: "USA (Remote)",
    type: "Remote",
    description: [
      "Engineered clean PHP-Laravel backend architectures, REST API controllers, and customized premium WordPress themes.",
      "Consulted clients on legacy API migrations to modern containerized micro-architectures."
    ],
    projects: []
  },
  {
    id: "livewell",
    company: "Live Well BD",
    role: "Software Engineer",
    period: "2015 – 2017",
    location: "Dhaka, Bangladesh",
    type: "On-Site",
    description: [
      "Developed PHP-Laravel web backend for Livewellbd.com, an online pharmacy service operating real-time pharmaceutical logs.",
      "Configured secure, high-integrity transaction databases with automated backup matrices."
    ],
    projects: ["Livewellbd.com"]
  },
  {
    id: "hungrynaki",
    company: "Hungraynaki.com",
    role: "SQA Engineer",
    period: "2013 – 2014",
    location: "Dhaka, Bangladesh",
    type: "On-Site",
    description: [
      "Pioneer food delivery service in Bangladesh later acquired by Alibaba-owned Daraz in 2021.",
      "Undertook black-box & white-box platform testing, database sanity reviews, and QA automation workflows.",
      "Coordinated directly with backend developers, laying down the core foundation of product-wide quality engineering."
    ],
    projects: ["Hungrynaki.com"]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages & Core",
    skills: [
      { name: "PHP (Laravel / Symfony)", level: 95, info: "Expert - 8+ years deep core architect" },
      { name: "JavaScript / TypeScript (Node.js)", level: 88, info: "High-concurrency microservices, event-loops" },
      { name: "Python (Django / FastAPI)", level: 82, info: "AI Agent systems and data pipeline processing" }
    ]
  },
  {
    category: "System & Architecture",
    skills: [
      { name: "API (REST, GraphQL, gRPC)", level: 92, info: "Contract-first development, secure tokens" },
      { name: "Databases (PostgreSQL, MySQL, Redis)", level: 90, info: "Schema refinement, transactional safety" },
      { name: "Real-time Event Systems (Redis, WebSockets)", level: 87, info: "PUB/SUB event brokers, sub-100ms queues" }
    ]
  },
  {
    category: "Cloud, DevOps & SQA",
    skills: [
      { name: "AWS Cloud Landscape (EC2, S3, RDS)", level: 80, info: "Solutions Architect Training standard" },
      { name: "DevOps (Docker, CI/CD Actions)", level: 85, info: "Automated container builds, Ansible scripts" },
      { name: "Quality Assurance (ISTQB Foundation Standard)", level: 90, info: "Root-level QA, defensive writing, crash resilience" }
    ]
  },
  {
    category: "Engineering Leadership",
    skills: [
      { name: "Cross-functional Team Steering", level: 88, info: "Agile, code standards, review gatekeeper" },
      { name: "Stakeholder Collaboration", level: 85, info: "Expert at USA & Japan commercial alignment" },
      { name: "AI Productivity Integrations", level: 92, info: "Leveraging Claude Code, Copilot to double output velocity" }
    ]
  }
];

export const DISCOVERY_ANALYSIS_STRATEGY = {
  strongestSellingPoints: [
    {
      title: "11+ Years Full-Lifecycle Experience",
      desc: "Proven track record running multi-industry backend cores (FinTech, FoodTech, eCommerce, Logistics) with substantial global transactional scaling."
    },
    {
      title: "SQA Core-Mindset (Defensive Coding)",
      desc: "Starting as a pioneer SQA engineer means he is obsessed with safety protocols, edge-case validation, strict database consistency, and resilient error-handling."
    },
    {
      title: "Global Team Steering (US & Japan)",
      desc: "Over 5 years of hand-selected cross-cultural leadership, bridging time zones, cultural requirements, and stakeholder business goals smoothly."
    },
    {
      title: "Modern AI Engineering Adaptor",
      desc: "Creator of real-world automated systems (like TableTap's AI Dispatch bot) demonstrating proactive practical utilization of modern generative models."
    }
  ],
  whatMakesHimDifferent: [
    {
      label: "Zero-Leaky Finance Integrations",
      desc: "Designed multiple secure core integrations across five major international gateways (Stripe, Mangopay, PayPal, Apple & Google Pay) with zero reconciliation leakage."
    },
    {
      label: "Architectural Agility",
      desc: "Agile use of Laravel/Symfony (structured API routers), FastAPI (AI/Data processing loops), and Node.js WebSockets (real-time queues) to match technical demands precisely."
    },
    {
      label: "AWS SAA Training Background",
      desc: "High competency in designing cloud environments with strict security, high-availability, caching tiers, and predictable workloads."
    }
  ],
  missingInformationAndGaps: [
    {
      title: "Client-Side Representation",
      desc: "His focus is backend, but high-performance portals demand deep collaboration. We project him as a 'Technical Lead & Backend Architect with Modern Frontend Alignment'."
    },
    {
      title: "Deep Case Studies",
      desc: "Instead of raw bullets, we will implement interactive diagrams of Tokisuki (auction bidding buffer states) and TableTap (intelligent AI dispatch flow) in the portfolio."
    }
  ],
  photoAnalysis: {
    portraitTone: "Black & White low-key studio lighting showcasing intellectual concentration, deep experience, and authority.",
    usageLocation: "Positioned as a heavy editorial column feature in Hero and About sections to command respect rather than feel like a basic landing page."
  },
  targetAudience: [
    { title: "CTOs & Engineering Directors", focus: "Interested in technical scalability, cloud efficiency, architectural patterns, and defensive programming protocols." },
    { title: "Hiring & Talent Teams", focus: "Looking for senior reliability, 11+ years maturity, instant project onboarding capacity, and team-best awards." },
    { title: "Global Enterprise Clients", focus: "Demanding high-end secure marketplace code, absolute payment safety, and direct remote leadership." }
  ],
  brandColors: {
    primary: "Obsidian Black & Slate Grey (90% of visual gravity)",
    accent: "Champagne / Amber Gold (Used purposefully for metrics, keys, and primary CTA triggers)"
  },
  keyMessages: [
    "I do not just write code; I engineer lasting digital systems.",
    "Quality isn't a final audit. It's the starting foundation.",
    "Bridges technologies, scales data pipelines, coordinates global teams on time."
  ]
};
