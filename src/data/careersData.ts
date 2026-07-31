import { JobListing } from '../types';

export interface DepartmentInfo {
  id: string;
  name: string;
  description: string;
  openRolesCount: number;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HiringStep {
  step: number;
  title: string;
  duration: string;
  description: string;
}

export interface EmployeeTestimonial {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  quote: string;
  joinYear: string;
  isPlaceholder?: boolean;
}

export const CAREER_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Build AI-powered business software, CRM platforms, and SaaS products for growing businesses.',
    openRolesCount: 2,
    iconName: 'Code',
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    description: 'Drive growth, outreach campaigns, and client partnerships across India.',
    openRolesCount: 1,
    iconName: 'TrendingUp',
  },
  {
    id: 'internship-program',
    name: 'Internship Program',
    description: 'Practical hands-on training on real products with direct founder mentorship.',
    openRolesCount: 2,
    iconName: 'GraduationCap',
  },
];

export const LIFE_AT_SYNCKRAFT_HIGHLIGHTS = [
  {
    id: 'life-1',
    title: 'Work on Real Products',
    description: 'Build AI Automation, CRM platforms, and business software deployed for live clients.',
    iconName: 'Layers',
  },
  {
    id: 'life-2',
    title: 'High Ownership',
    description: 'Take end-to-end responsibility for feature development, testing, and deployment without bureaucracy.',
    iconName: 'Zap',
  },
  {
    id: 'life-3',
    title: 'Learn Modern Technologies',
    description: 'Gain practical expertise in React, TypeScript, Node.js, AI APIs, and modern cloud stacks.',
    iconName: 'Code',
  },
  {
    id: 'life-4',
    title: 'Startup Culture',
    description: 'Fast-paced, highly collaborative, and driven by problem-solving rather than corporate politics.',
    iconName: 'Rocket',
  },
  {
    id: 'life-5',
    title: 'Direct Collaboration with the Founder',
    description: 'Work closely alongside the founder and core team to shape products and business strategies.',
    iconName: 'Users',
  },
  {
    id: 'life-6',
    title: 'Continuous Learning',
    description: 'Regular code reviews, practical assessments, and continuous mentorship to level up your career.',
    iconName: 'Sparkles',
  },
];

export const COMPANY_BENEFITS: BenefitItem[] = [
  {
    id: 'b-1',
    title: 'Work on Live Client Projects',
    description: 'Gain hands-on exposure working on active software, automation, and SaaS deployments.',
    iconName: 'Layers',
  },
  {
    id: 'b-2',
    title: 'Flexible Learning Environment',
    description: 'A fast-moving startup environment where you learn modern tools and software engineering best practices.',
    iconName: 'BookOpen',
  },
  {
    id: 'b-3',
    title: 'Performance-Based Growth',
    description: 'Meritocracy-driven advancement where your contributions and initiative dictate your growth.',
    iconName: 'TrendingUp',
  },
  {
    id: 'b-4',
    title: 'Mentorship & Guidance',
    description: 'Receive direct technical and career mentorship from experienced software developers and founders.',
    iconName: 'Users',
  },
  {
    id: 'b-5',
    title: 'Opportunity for Full-Time Offer',
    description: 'High-performing interns and contract team members have a direct path to full-time roles (PPO).',
    iconName: 'Award',
  },
  {
    id: 'b-6',
    title: 'Modern Development Tools',
    description: 'Access to modern dev tools, state-of-the-art AI APIs, cloud setups, and productive environments.',
    iconName: 'Laptop',
  },
  {
    id: 'b-7',
    title: 'Startup Exposure',
    description: 'Understand the end-to-end product lifecycle, client requirements, and business execution.',
    iconName: 'Rocket',
  },
  {
    id: 'b-8',
    title: 'Certificate of Internship',
    description: 'Official Certificate of Internship and recommendation letter awarded upon successful completion.',
    iconName: 'CheckCircle2',
  },
];

export const HIRING_PROCESS: HiringStep[] = [
  {
    step: 1,
    title: 'Application Review',
    duration: '24–48 Hours',
    description: 'We review your profile, projects, GitHub/portfolio links, and alignment with open requirements.',
  },
  {
    step: 2,
    title: 'Introductory Discussion',
    duration: '20–30 Minutes',
    description: 'A brief interaction to learn about your background, career goals, and interest in Synckraft.',
  },
  {
    step: 3,
    title: 'Technical / Practical Assessment',
    duration: '1–2 Days',
    description: 'A short practical task or technical conversation focused on real-world problem solving.',
  },
  {
    step: 4,
    title: 'Final Discussion & Offer',
    duration: '24 Hours',
    description: 'Discussion on role expectations, start date, stipend/compensation, and formal onboarding.',
  },
];

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'job-1',
    title: 'Software Developer',
    department: 'Software Engineering',
    employmentType: 'Full-time',
    experienceLevel: '1–3 Years',
    location: 'Amravati / Hybrid',
    workType: 'Hybrid',
    salaryRange: 'Competitive Startup Compensation',
    isHot: true,
    departmentIcon: 'Code',
    overview: 'We are looking for a passionate Software Developer to design, build, and deploy custom business software, CRM platforms, and AI automation systems for client projects and internal products.',
    responsibilities: [
      'Develop frontend web applications using React, TypeScript, and Tailwind CSS.',
      'Build robust backend APIs and services using Node.js, Express, and database systems.',
      'Work on live client deployments, requirement scoping, and bug fixes.',
      'Collaborate directly with the founder and product leads to ship features rapidly.',
    ],
    requirements: [
      '1+ years of experience or strong project portfolio in full-stack web development (React & Node.js).',
      'Solid understanding of JavaScript/TypeScript, REST APIs, Git, and SQL/NoSQL databases.',
      'Proactive problem-solving attitude and ability to thrive in a startup culture.',
      'Good communication skills and willingness to take ownership of features.',
    ],
    preferredSkills: [
      'Familiarity with Gemini/LLM APIs, WebSockets, or Cloud deployment tools.',
      'Prior experience in CRM or SaaS application development.',
    ],
    benefits: [
      'Work on live client projects with real business impact.',
      'Direct collaboration with founders and senior engineers.',
      'Flexible hybrid working model and high growth trajectory.',
    ],
    status: 'open',
  },
  {
    id: 'job-2',
    title: 'Software Development Intern',
    department: 'Internship Program',
    employmentType: 'Internship',
    experienceLevel: '0–1 Years / Freshers',
    location: 'Amravati',
    workType: 'On-site',
    salaryRange: 'Performance Stipend + Certificate',
    isHot: true,
    departmentIcon: 'GraduationCap',
    overview: 'Join Synckraft as a Software Development Intern and gain hands-on experience building real-world software products, AI automation tools, and web applications alongside our core team.',
    responsibilities: [
      'Assist in developing user interfaces in React and Tailwind CSS.',
      'Help build and test backend API endpoints in Node.js.',
      'Debug issues, write clean code, and participate in daily development reviews.',
      'Learn modern software architecture and real-world deployment practices.',
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, JavaScript, and React or Node.js fundamentals.',
      'Eagerness to learn rapidly and build real software products.',
      'Currently pursuing or recently completed B.E. / B.Tech / BCA / MCA in CS or related field.',
    ],
    preferredSkills: ['Showcase personal side projects, GitHub repositories, or college projects.'],
    benefits: [
      'Hands-on experience on live products and client projects.',
      'Official Certificate of Internship & Letter of Recommendation.',
      'Opportunity for Pre-Placement Full-Time Offer (PPO).',
      'Direct 1-on-1 mentorship.',
    ],
    status: 'open',
  },
  {
    id: 'job-3',
    title: 'Sales & Marketing Intern',
    department: 'Sales & Marketing',
    employmentType: 'Internship',
    experienceLevel: '0–1 Years / Freshers',
    location: 'Amravati',
    workType: 'On-site',
    salaryRange: 'Performance Stipend + Incentives',
    isHot: false,
    departmentIcon: 'TrendingUp',
    overview: 'We are seeking an energetic Sales & Marketing Intern to assist in lead generation, client communication, market research, and outreach for Synckraft business software and CRM solutions.',
    responsibilities: [
      'Identify potential business leads and research target industries across India.',
      'Assist in preparing sales presentations, proposals, and product demos.',
      'Engage with prospective clients via calls, emails, and social channels.',
      'Support digital marketing campaigns and social media presence.',
    ],
    requirements: [
      'Strong verbal and written communication skills in English and Hindi / Marathi.',
      'Interest in business software, SaaS, technology, and startup sales.',
      'Proactive, persuasive, and goal-oriented mindset.',
    ],
    preferredSkills: ['Familiarity with CRM tools, LinkedIn outreach, or social media management.'],
    benefits: [
      'Real-world exposure to B2B technology sales and startup marketing.',
      'Certificate of Internship and performance-based monetary incentives.',
      'Opportunity for full-time career conversion upon performance.',
    ],
    status: 'open',
  },
];

export const EMPLOYEE_TESTIMONIALS: EmployeeTestimonial[] = [
  {
    id: 'emp-1',
    name: 'Pratik Sharma',
    role: 'Software Developer',
    department: 'Software Engineering',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    quote: 'At Synckraft, you own what you build. Working on real client software and AI automation from day one helped me grow faster than I ever could at a traditional corporate company.',
    joinYear: 'Full-Time Team',
  },
  {
    id: 'emp-2',
    name: 'Aniket Deshmukh',
    role: 'Software Development Intern',
    department: 'Internship Program',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: 'The mentorship here is incredible. I went from knowing basic web development to building real APIs and UI components deployed on live production environments.',
    joinYear: 'Internship Alum',
  },
  {
    id: 'emp-3',
    name: 'Synckraft Team Member',
    role: 'Join Our Team',
    department: 'Growing Startup',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&auto=format&fit=crop&q=80',
    quote: 'We are expanding our core engineering and growth team in Amravati. If you love building software and learning modern technology, we would love to connect with you!',
    joinYear: 'Open Position',
    isPlaceholder: true,
  },
];

export const CAREER_FAQS = [
  {
    question: 'Who can apply for internships at Synckraft?',
    answer: 'Students, recent graduates, or aspiring developers and marketers who have strong fundamentals, enthusiasm for software, and a desire to learn in a real startup environment can apply.',
  },
  {
    question: 'Do I need prior experience to apply for an internship?',
    answer: 'No prior formal job experience is required for internships. We value your eagerness to learn, project work, problem-solving ability, and fundamental skills.',
  },
  {
    question: 'Is this an on-site internship?',
    answer: 'Yes, our internship roles are primarily based on-site at our Amravati location to enable close hands-on collaboration, peer learning, and direct mentorship.',
  },
  {
    question: 'Will interns receive an official certificate?',
    answer: 'Yes! Upon successful completion of your internship duration, you will receive an official Certificate of Internship and a detailed performance recommendation letter.',
  },
  {
    question: 'Is there an opportunity for a full-time role after the internship?',
    answer: 'Absolutely. Top-performing interns have a direct path to a Pre-Placement Full-Time Offer (PPO) to join Synckraft as permanent team members.',
  },
  {
    question: 'What technologies will I work with at Synckraft?',
    answer: 'You will work with modern software technologies including React, TypeScript, Node.js, Tailwind CSS, PostgreSQL, AI APIs, and business automation software.',
  },
  {
    question: 'How can I apply if no suitable position is currently open?',
    answer: "You can email your resume to grow@synckraft.in. We'll keep your profile in our talent pool and contact you when a suitable opportunity becomes available.",
  },
];
