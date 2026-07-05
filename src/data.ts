export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  category:
    | 'Python APIs'
    | 'FinTech'
    | 'SaaS'
    | 'Data & Analytics'
    | 'Aviation & Logistics';
  stats: { label: string; value: string }[];
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

export const STR_PORT_TITLE = 'Noor-A-Alam Siddique';
export const STR_PORT_SUBTITLE = 'Solutions Architect & Senior Software Engineer | Django, FastAPI, Laravel, Node.js, AWS';
export const STR_PORT_EMAIL = 'kisorniru@gmail.com';
export const STR_PORT_PHONE = '+880 1725 156 188';
export const STR_PORT_LOCATION = 'Dhaka, Bangladesh';
export const STR_PORT_GITHUB = 'https://github.com/kisorniru';
export const STR_PORT_LINKEDIN = 'https://linkedin.com/in/kisorniru';
export const STR_PORT_RESUME = '/Resume_Noor-A-Alam%20Siddique_2026.pdf';
export const STR_PORT_IMAGE = '/Noor-A-Alam_Siddique.jpeg';

export const PORTFOLIO_PROJECTS: Project[] = [  
  {
    id: 'lixve-box',
    title: 'Lixve Box',
    category: 'Python APIs',
    role: 'Senior Software Engineer',
    description:
      'Python-based API supporting secure online lottery ticket purchases and real-time prize claiming.',
    longDescription:
      'Lixve Box is an online lottery platform backed by Python services. The work centered on secure ticket-purchase APIs and a real-time prize-claiming workflow.',
    tech: ['Python', 'REST APIs', 'Real-time Processing'],
    stats: [
      { label: 'Backend Focus', value: 'Python API' },
      { label: 'Core Workflow', value: 'Ticket Sales' },
      { label: 'Claiming', value: 'Real-time' },
    ],
  },
  {
    id: 'tokisuki',
    title: 'Tokisuki',
    category: 'FinTech',
    role: 'Senior Software Engineer',
    description:
      'Luxury-watch auction platform using Python microservices for live bidding and transactions.',
    longDescription:
      'Tokisuki supports luxury-watch auctions with live bidding and transaction workflows. Python microservices provide the backend foundation for its real-time auction capabilities.',
    tech: ['Python', 'Microservices', 'REST APIs', 'Real-time Bidding'],
    stats: [
      { label: 'Service Style', value: 'Microservices' },
      { label: 'Core Feature', value: 'Live Bidding' },
      { label: 'Backend', value: 'Python' },
    ],
  },
  {
    id: 'weltag',
    title: 'WelTag',
    category: 'SaaS',
    role: 'Senior Software Engineer',
    description:
      'Real-time fitness platform with live video, booking, and payment capabilities exposed through Laravel REST APIs.',
    longDescription:
      'WelTag combines live video, scheduling, reservations, and payment workflows in a real-time fitness platform. Laravel REST APIs support the product backend and its client integrations.',
    tech: ['Laravel', 'REST APIs', 'Live Video', 'Booking', 'Payments'],
    stats: [
      { label: 'Backend', value: 'Laravel REST' },
      { label: 'Experience', value: 'Live Video' },
      { label: 'Commerce', value: 'Payments' },
    ],
  },
  {
    id: 'saas-analytics',
    title: 'E-commerce Analytics SaaS',
    category: 'Data & Analytics',
    role: 'Senior Software Engineer',
    description:
      'Analytics platform for e-commerce stores that processes and visualizes billions of click and sales events.',
    longDescription:
      'This SaaS platform turns high-volume e-commerce activity into useful analytics. Its backend processes and visualizes billions of events, including clicks and sales, for data-driven decision making.',
    tech: ['Python', 'Data Processing', 'Analytics', 'AWS', 'Redis'],
    stats: [
      { label: 'Data Scale', value: 'Billions' },
      { label: 'Event Types', value: 'Clicks & Sales' },
      { label: 'Product', value: 'SaaS' },
    ],
  },
  {
    id: 'angel-flight-west',
    title: 'Angel Flight West',
    category: 'Aviation & Logistics',
    role: 'Software Engineer',
    description:
      'Mobile and ERP-connected platform helping volunteer pilots manage missions, flight details, and trip information.',
    longDescription:
      'Angel Flight West enables volunteer pilots to sign up for missions, manage flight details, and access trip information through integration with the organization\'s main ERP system.',
    tech: ['Symfony', 'REST APIs', 'ERP Integration'],
    stats: [
      { label: 'Frameworks', value: 'Symfony REST' },
      { label: 'Integration', value: 'ERP' },
      { label: 'Domain', value: 'Aviation' },
    ],
  },
];

export const WORK_HISTORY: Experience[] = [
  {
    id: 'dreamonline',
    company: 'DreamOnline Ltd.',
    role: 'Senior Software Engineer',
    period: 'Jan 2021 - Present',
    location: 'Dhaka, Bangladesh',
    type: 'Hybrid-Remote',
    description: [
      'Led the architecture, design, and development of scalable backend systems using Python (Django, FastAPI) and PHP (Laravel).',
      'Integrated Stripe, PayPal, Apple Pay, Google Pay, and Mangopay to enable secure and seamless transactions.',
      'Processed large-scale datasets (1M+ records) in marketing and analytics modules to drive data-driven decisions.',
      'Improved performance using Redis, async jobs, database tuning, and AWS cloud optimization.',
      'Implemented AWS auto-scaling using EC2, ASG, and ELB for seamless scaling during traffic spikes.',
      'Collaborated with frontend teams (React.js, Vue.js) to deliver scalable and high-performance user experiences.',
    ],
    projects: ['Lixve Box', 'Tokisuki', 'WelTag', 'E-commerce Analytics SaaS'],
  },
  {
    id: 'bglobal',
    company: 'bGlobal LLC.',
    role: 'Software Engineer',
    period: 'Apr 2017 - Dec 2020',
    location: 'Dhaka, Bangladesh',
    type: 'On-Site',
    description: [
      'Designed and implemented Laravel and Symfony-based RESTful APIs for aviation and logistics systems.',
      'Integrated Stripe and Mangopay for secure transactions and KYC document submission.',
    ],
    projects: ['Angel Flight West', 'Koach'],
  },
  {
    id: 'getsmart',
    company: 'The Get Smart Group LLC, USA',
    role: 'Software Engineer',
    period: 'Nov 2019 - Jun 2020',
    location: 'USA',
    type: 'Contract Remote',
    description: [
      'Developed Laravel e-commerce applications and a WordPress plugin.',
    ],
    projects: [],
  },
  {
    id: 'fluxar',
    company: 'Fluxar Studios Inc., USA',
    role: 'Software Engineer',
    period: 'Jan 2018 - Sep 2018',
    location: 'USA',
    type: 'Contract Remote',
    description: [
      'Developed backend systems and APIs with PHP and Laravel, along with a WordPress theme.',
    ],
    projects: [],
  },
  {
    id: 'livewell',
    company: 'Live Well BD',
    role: 'Software Engineer',
    period: '2015 - 2017',
    location: 'Dhaka, Bangladesh',
    type: 'On-Site',
    description: [
      'Developed PHP-Laravel backend systems and APIs handling real-time data updates.',
    ],
    projects: [],
  },
  {
    id: 'hungraynaki',
    company: 'Hungraynaki.com',
    role: 'Software Engineer',
    period: '2014',
    location: 'Dhaka, Bangladesh',
    type: 'On-Site',
    description: [
      'Contributed to entry-level software development and team collaboration.',
    ],
    projects: [],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Python & Backend Core',
    skills: [
      {
        name: 'Python (Django / Flask / FastAPI)',
        level: 95,
        info: '5+ years building RESTful APIs, microservices, and large-scale data workflows',
      },
      {
        name: 'PHP (Laravel / Symfony)',
        level: 90,
        info: 'REST APIs, e-commerce, aviation, logistics, payments, and KYC',
      },
      {
        name: 'JavaScript (Node.js)',
        level: 82,
        info: 'Backend JavaScript and event-driven service development',
      },
    ],
  },
  {
    category: 'APIs, Data & Microservices',
    skills: [
      {
        name: 'REST, GraphQL & gRPC',
        level: 92,
        info: 'Secure API design and microservice communication',
      },
      {
        name: 'PostgreSQL, MySQL & MongoDB',
        level: 90,
        info: 'Schema design and optimization for large datasets',
      },
      {
        name: 'Redis & Event-driven Systems',
        level: 88,
        info: 'Real-time processing, caching, and high-availability workloads',
      },
    ],
  },
  {
    category: 'Cloud, DevOps & Payments',
    skills: [
      {
        name: 'AWS (EC2 / S3 / RDS, ASG / ELB)',
        level: 85,
        info: 'Cloud-native backend deployment and high-availability environments',
      },
      {
        name: 'Docker, CI/CD & Ansible AAP',
        level: 84,
        info: 'Automated delivery with GitHub Actions and deployment tooling',
      },
      {
        name: 'Global Payment Gateways',
        level: 90,
        info: 'Stripe, PayPal, Mangopay, Apple Pay, and Google Pay',
      },
    ],
  },
  {
    category: 'Engineering Leadership',
    skills: [
      {
        name: 'Cross-functional Team Leadership',
        level: 88,
        info: 'Agile/Scrum, code reviews, project planning, and delivery',
      },
      {
        name: 'Stakeholder Management',
        level: 86,
        info: 'Expectation management and collaboration across technical teams',
      },
      {
        name: 'Frontend Collaboration',
        level: 82,
        info: 'Backend integration with React.js and Vue.js teams',
      },
    ],
  },
];
