import clientPortraitImg from '../assets/images/regenerated_image_1785494800565.jpg';
import {
  ProductItem,
  ServiceItem,
  ProjectItem,
  TeamMember,
  FAQItem,
  OfficeLocation,
  TestimonialItem,
  WhatWeBuildItem,
  SuccessStory,
} from '../types';

export const SUCCESS_STORIES_DATA: SuccessStory[] = [
  {
    id: 'story-1',
    company: 'CA Harish Sarda',
    industry: 'Accounting & Payroll',
    clientName: 'CA Harish Sarda',
    designation: 'Principal CA & Founder',
    avatar: clientPortraitImg,
    rating: 5,
    review:
      'Synckraft delivered a seamless Payroll Management System that completely eliminated manual salary calculation errors and simplified our monthly payroll processing.',
    challenge:
      'Complex manual calculations for payroll processing, employee tax deductions, and month-end salary slip generation.',
    solution:
      'Designed a dedicated Payroll Management System tailored for automated salary processing, tax deductions, attendance tracking, and instant pay slip generation.',
    results: [
      'Simplified payroll processing',
      'Reduced manual work',
      'Organized employee records',
      'Improved employee management',
    ],
    metrics: [
      { label: 'Payroll Processing', value: 'Simplified' },
      { label: 'Manual Calculation', value: 'Eliminated' },
      { label: 'Employee Records', value: 'Organized' },
    ],
    project: 'Payroll Management System',
    techStack: ['React', 'TypeScript', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Verified Partner',
    beforeAfter: {
      before: 'Manual spreadsheets for salary calculations, unorganized employee tax records, and delayed pay slip delivery.',
      after: 'Automated salary calculations, streamlined tax deductions, and instant digital pay slip generation.',
    },
    businessKpis: [
      'Business Challenge: Complex manual calculations for payroll processing and tax deductions.',
      'Solution Delivered: Dedicated Payroll Management System for automated processing and pay slip generation.',
      'Operational Improvements: Simplified payroll processing, reduced manual work, and organized employee records.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-2',
    company: 'CA Meher Pawar',
    industry: 'Chartered Accountancy',
    clientName: 'CA Meher Pawar',
    designation: 'Managing Partner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'Our client records and compliance tracking are now centralized under one unified Office Management system. Synckraft brought total order and clarity to our practice.',
    challenge:
      'Unorganized client files, manual tracking of tax compliance due dates, and fragmented office task allocation.',
    solution:
      'Developed an integrated Office & Client Management System featuring centralized client records, compliance task assignment, and automated status tracking.',
    results: [
      'Centralized operations',
      'Organized client records',
      'Better workflow management',
      'Streamlined billing',
    ],
    metrics: [
      { label: 'Client Records', value: 'Centralized' },
      { label: 'Compliance Workflow', value: 'Automated' },
      { label: 'Office Tracking', value: 'Organized' },
    ],
    project: 'Office & Client Management System',
    techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Direct Client Review',
    beforeAfter: {
      before: 'Fragmented paper client folders, manual compliance reminders, and unorganized office task assignments.',
      after: 'Single-source digital client database, automated compliance tracking, and transparent task delegation.',
    },
    businessKpis: [
      'Business Challenge: Unorganized client files and manual compliance due-date tracking.',
      'Solution Delivered: Centralized Office & Client Management System with workflow assignment.',
      'Operational Improvements: Centralized operations, organized client records, and streamlined billing.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-3',
    company: 'Dr. Mohammad Imran Shaikh',
    industry: 'Healthcare & Medicine',
    clientName: 'Dr. Mohammad Imran Shaikh',
    designation: 'Medical Director & Consultant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'The healthcare website enhanced our digital presence significantly, while the Commission Management System made partner payouts completely transparent and error-free.',
    challenge:
      'Limited online patient reach and manual tracking of referral commission distributions across diagnostic partners.',
    solution:
      'Built a modern healthcare web platform for patient inquiries paired with an automated Commission Management System for transparent tracking and payout calculations.',
    results: [
      'Enhanced digital presence',
      'Streamlined billing',
      'Reduced manual work',
      'Faster internal coordination',
    ],
    metrics: [
      { label: 'Digital Presence', value: 'Enhanced' },
      { label: 'Commission Payouts', value: 'Automated' },
      { label: 'Partner Coordination', value: 'Streamlined' },
    ],
    project: 'Healthcare Website & Commission OS',
    techStack: ['React', 'Node.js', 'Cloud Firestore', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Direct Client Review',
    beforeAfter: {
      before: 'Minimal web visibility, manual paper ledger for referral partner payouts, and billing delays.',
      after: 'Modern patient inquiry platform, automated commission ledger, and error-free payout calculations.',
    },
    businessKpis: [
      'Business Challenge: Limited digital reach and manual referral commission tracking.',
      'Solution Delivered: Professional healthcare web platform and automated Commission Management System.',
      'Operational Improvements: Enhanced digital presence, streamlined billing, and faster partner coordination.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-dr-harish-kamaraj',
    company: 'Dr. Harish Kamaraj',
    industry: 'Healthcare & Pharmacy',
    clientName: 'Dr. Harish Kamaraj',
    designation: 'Medical Consultant & Pharmacy Founder',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'Synckraft designed our healthcare website, WhatsApp automation, and pharmacy store management system. Centralizing our medicine inventory and automating patient communication transformed our daily workflow.',
    challenge:
      'The client required a modern digital presence while improving communication with patients and streamlining pharmacy inventory and daily business operations.',
    solution:
      'Designed and developed a professional Healthcare Website, an automated WhatsApp Patient Communication System, and a dedicated Pharmacy Store Management System with medicine stock tracking.',
    results: [
      'Professional digital presence established',
      'Automated patient communication',
      'Centralized pharmacy inventory',
      'Organized medicine stock management',
      'Improved daily pharmacy workflow',
      'Better customer engagement',
    ],
    metrics: [
      { label: 'Patient Communication', value: 'Automated' },
      { label: 'Pharmacy Inventory', value: 'Centralized' },
      { label: 'Medicine Stock Tracking', value: 'Organized' },
    ],
    project: 'Healthcare Website, WhatsApp Automation & Pharmacy Store Management System',
    techStack: ['React', 'TypeScript', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    timeline: 'In Progress',
    projectValue: 'Client Project',
    source: 'Direct Client Review',
    beforeAfter: {
      before: 'Unorganized paper inventory, manual patient follow-ups, and limited digital reach.',
      after: 'Centralized pharmacy inventory, automated WhatsApp patient updates, and a professional healthcare web portal.',
    },
    businessKpis: [
      'Business Challenge: Modern digital presence, patient communication, and pharmacy inventory management.',
      'Solution Delivered: Healthcare Website, WhatsApp Automation & Pharmacy Store Management System.',
      'Operational Improvements: Centralized pharmacy inventory, automated patient communication, organized medicine stock tracking.',
      'Project Status: In Progress',
    ],
  },
  {
    id: 'story-4',
    company: 'Trinity Homes Dubai',
    industry: 'Real Estate (Dubai)',
    clientName: 'Sajid Tanwar',
    designation: 'Founder & Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'Synckraft built our real estate website and custom CRM, streamlining buyer lead distribution and automating our sales team workflow across Dubai properties.',
    challenge:
      'Fragmented buyer lead tracking from multiple digital channels, slow follow-ups, and manual deal workflow management.',
    solution:
      'Created a high-converting real estate website integrated with a custom real estate CRM and automated lead-to-agent workflow routing.',
    results: [
      'Improved lead management',
      'Enhanced digital presence',
      'Better workflow management',
      'Centralized operations',
    ],
    metrics: [
      { label: 'Lead Management', value: 'Improved' },
      { label: 'Workflow Routing', value: 'Automated' },
      { label: 'Dubai Showcase', value: 'Enhanced' },
    ],
    project: 'Real Estate Website & Custom CRM',
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Verified Partner',
    beforeAfter: {
      before: 'Unassigned leads sitting in inboxes, slow agent response times, and manual property listing updates.',
      after: 'Real-time property portal, instant automated lead distribution, and unified buyer CRM pipeline.',
    },
    businessKpis: [
      'Business Challenge: Fragmented buyer leads and manual sales team follow-up routing.',
      'Solution Delivered: High-converting real estate web portal with automated CRM workflow engine.',
      'Operational Improvements: Improved lead management, enhanced digital presence, and centralized operations.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-5',
    company: 'Talwalkars Gym',
    industry: 'Fitness & Gym Management',
    clientName: 'Talwalkars Gym Management',
    designation: 'Operations Head',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'SyncFyre transformed how we manage member memberships, biometric attendance, and automated WhatsApp fee reminders. It made gym operations smooth and effortless.',
    challenge:
      'Manual membership tracking, paper attendance logs, payment follow-ups, and difficulty managing trainer schedules.',
    solution:
      'Implemented SyncFyre Gym Management System with biometric attendance integration, automated WhatsApp fee reminders, and digital workout/diet plans.',
    results: [
      'Centralized operations',
      'Automated membership renewals',
      'Streamlined billing',
      'Reduced manual work',
    ],
    metrics: [
      { label: 'Biometric Access', value: 'Integrated' },
      { label: 'Fee Reminders', value: 'Automated' },
      { label: 'Gym Operations', value: 'Centralized' },
    ],
    project: 'SyncFyre Gym Management System',
    techStack: ['React', 'Node.js', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Google Business Profile',
    beforeAfter: {
      before: 'Paper register entry at front desk, manual phone calls for overdue fees, and lost member records.',
      after: 'Instant biometric gate check-in, automated WhatsApp payment alerts, and digital trainer workout plans.',
    },
    businessKpis: [
      'Business Challenge: Manual member records, paper attendance logs, and manual fee collection.',
      'Solution Delivered: SyncFyre Gym Management System with biometric gate access and WhatsApp reminders.',
      'Operational Improvements: Centralized operations, automated renewals, and streamlined billing.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-6',
    company: 'Anant Leather',
    industry: 'Retail & E-commerce',
    clientName: 'Anant Leather Management',
    designation: 'Founder & Managing Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'With Synckraft\'s custom e-commerce and store management system, our retail store inventory and online orders are seamlessly synchronized in real time.',
    challenge:
      'Offline store inventory disjointed from online sales, manual order processing, and unorganized customer order tracking.',
    solution:
      'Built a custom E-commerce Platform synchronized with an internal Store & Inventory Management System for real-time stock sync and automated order routing.',
    results: [
      'Better inventory management',
      'Enhanced digital presence',
      'Streamlined billing',
      'Reduced manual work',
    ],
    metrics: [
      { label: 'Inventory Sync', value: 'Real-time' },
      { label: 'Digital Storefront', value: 'Enhanced' },
      { label: 'Order Processing', value: 'Automated' },
    ],
    project: 'E-commerce Platform & Store OS',
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Client Project',
    source: 'Direct Client Review',
    beforeAfter: {
      before: 'Stock mismatches between physical store and online orders, manual inventory counting, and delayed shipments.',
      after: 'Single synchronized inventory ledger, automated order dispatch, and digital storefront.',
    },
    businessKpis: [
      'Business Challenge: Unsynchronized retail store inventory and manual online order tracking.',
      'Solution Delivered: Custom E-commerce Platform with real-time internal Store Management System.',
      'Operational Improvements: Better inventory management, enhanced digital presence, and streamlined billing.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
  {
    id: 'story-7',
    company: 'Synckraft Technologies',
    industry: 'Software Engineering & IT',
    clientName: 'Shaan Solanki',
    designation: 'Principal Architect',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    review:
      'Our internal CRM and business operations platform centralized project tracking, invoicing, and team handoffs, keeping all engineering deliverables on schedule.',
    challenge:
      'Managing client project pipelines, developer time allocations, invoice tracking, and internal task handoffs across disparate tools.',
    solution:
      'Architected an all-in-one internal CRM & Business Operations Platform unifying lead management, project milestones, automated invoicing, and team execution.',
    results: [
      'Centralized operations',
      'Faster internal coordination',
      'Better workflow management',
      'Improved lead management',
    ],
    metrics: [
      { label: 'Operations Engine', value: 'Centralized' },
      { label: 'Project Milestones', value: 'Real-time' },
      { label: 'Team Coordination', value: 'Accelerated' },
    ],
    project: 'Internal CRM & Business Operations Platform',
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    timeline: 'Active Production',
    projectValue: 'Internal Platform',
    source: 'Internal Case Study',
    beforeAfter: {
      before: 'Disparate spreadsheets for project tracking, manual invoice preparation, and untracked client inquiries.',
      after: 'Unified operations hub, automated milestone invoicing, and centralized engineering task delegation.',
    },
    businessKpis: [
      'Business Challenge: Disparate tools for client tracking, invoicing, and engineering task handoffs.',
      'Solution Delivered: Custom internal CRM and Business Operations Platform.',
      'Operational Improvements: Centralized operations, faster internal coordination, and better workflow management.',
      'Project Status: Completed & Deployed in Active Production',
    ],
  },
];

export const WHAT_WE_BUILD_PILLARS: WhatWeBuildItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    badge: 'Bespoke Cloud & Web Apps',
    description:
      'High-performance, secure web applications, mobile platforms, and cloud microservices built to your exact business requirements.',
    businessOutcome:
      '100% tailored functionality, zero technical debt, and scalable architecture that grows with your business.',
    iconName: 'Code2',
    features: [
      'Full-Stack Web & Mobile Engineering',
      'API-First Microservice Architecture',
      'Legacy System Modernization',
      'High-Concurrency Cloud Deployment',
    ],
  },
  {
    id: 'business-systems',
    title: 'Business Systems (CRM / ERP)',
    badge: 'Centralized Operations',
    description:
      'Custom CRM, ERP, and internal operational platforms that unify fragmented company data and automate core business workflows.',
    businessOutcome:
      'Eliminate spreadsheets, boost operational team productivity by 40%+, and establish single-source-of-truth analytics.',
    iconName: 'Building2',
    features: [
      'Custom Sales & Lead Management Pipelines',
      'Inventory, Procurement & Financial ERPs',
      'Role-Based Executive Analytics Dashboards',
      'Cross-Departmental SLA Workflow Engines',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Workflow Integrations',
    badge: 'Intelligent Efficiency',
    description:
      'Smart LLM workflows, automated document processors, and AI agents integrated into your existing daily business stack.',
    businessOutcome:
      'Reduce manual administrative tasks by 80%, eliminate human entry error, and accelerate turnaround times.',
    iconName: 'Sparkles',
    features: [
      'Automated Document OCR & Data Extraction',
      '24/7 AI Lead Qualifiers & Customer Bots',
      'Predictive Analytics & Sentiment Scoring',
      'Custom Zapier/Make & API Integrations',
    ],
  },
];

/* Real Client Testimonials */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'CA Harish Sarda',
    clientRole: 'Principal CA & Founder',
    companyName: 'CA Harish Sarda',
    review:
      'Synckraft delivered a seamless Payroll Management System that completely eliminated manual salary calculation errors and simplified our monthly payroll processing.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'CA HARISH SARDA',
  },
  {
    id: 'test-2',
    clientName: 'CA Meher Pawar',
    clientRole: 'Managing Partner',
    companyName: 'CA Meher Pawar',
    review:
      'Our client records and compliance tracking are now centralized under one unified Office Management system. Synckraft brought total order and clarity to our practice.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'CA MEHER PAWAR',
  },
  {
    id: 'test-3',
    clientName: 'Dr. Mohammad Imran Shaikh',
    clientRole: 'Medical Director & Consultant',
    companyName: 'Dr. Mohammad Imran Shaikh',
    review:
      'The healthcare website enhanced our digital presence significantly, while the Commission Management System made partner payouts completely transparent and error-free.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'DR. IMRAN SHAIKH',
  },
  {
    id: 'test-dr-harish-kamaraj',
    clientName: 'Dr. Harish Kamaraj',
    clientRole: 'Medical Consultant & Founder',
    companyName: 'Dr. Harish Kamaraj',
    review:
      'Synckraft delivered our healthcare website, WhatsApp automation, and pharmacy management system. Patient communication and medicine inventory tracking are now smooth and organized.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'DR. HARISH KAMARAJ',
  },
  {
    id: 'test-4',
    clientName: 'Sajid Tanwar',
    clientRole: 'Founder & Director',
    companyName: 'Trinity Homes Dubai',
    review:
      'Synckraft built our real estate website and custom CRM, streamlining buyer lead distribution and automating our sales team workflow across Dubai properties.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'TRINITY HOMES',
  },
  {
    id: 'test-5',
    clientName: 'Talwalkars Gym Management',
    clientRole: 'Operations Head',
    companyName: 'Talwalkars Gym',
    review:
      'SyncFyre transformed how we manage member memberships, biometric attendance, and automated WhatsApp fee reminders. It made gym operations smooth and effortless.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'TALWALKARS GYM',
  },
  {
    id: 'test-6',
    clientName: 'Anant Leather Management',
    clientRole: 'Founder & Managing Director',
    companyName: 'Anant Leather',
    review:
      'With Synckraft\'s custom e-commerce and store management system, our retail store inventory and online orders are seamlessly synchronized in real time.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'ANANT LEATHER',
  },
  {
    id: 'test-7',
    clientName: 'Shaan Solanki',
    clientRole: 'Principal Architect',
    companyName: 'Synckraft Technologies',
    review:
      'Our internal CRM and business operations platform centralized project tracking, invoicing, and team handoffs, keeping all engineering deliverables on schedule.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    companyLogoText: 'SYNCKRAFT',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'unstopr',
    name: 'Unstopr',
    logoUrl: '/unstopr-logo.png',
    tagline: 'AI Voice Agents & Sales Automation',
    description:
      'AI Voice Agents, WhatsApp Automation, CRM, Lead Management, and Sales Automation built to scale revenue.',
    website: 'https://unstopr.com',
    category: 'AI & Sales Automation',
    iconName: 'Bot',
    brandColor: '#0080FF',
    accentBg: '#EFF6FF',
    badgeText: 'AI & Automation',
    targetAudience: 'Sales Teams, Agencies & High-Volume Call Operations',
    primaryOutcome: 'Automate 24/7 lead response, AI voice calls & WhatsApp conversions.',
    features: [
      '24/7 AI Voice Calling & Screening',
      'WhatsApp Automation & Drip Campaigns',
      'Smart Lead Capture & CRM Pipeline',
      'Sales Workflow & Appointment Booking',
    ],
    ctaText: 'Explore Unstopr Specs',
    overview:
      'Unstopr empowers sales and marketing teams with autonomous 24/7 AI Voice Agents and automated WhatsApp sequences to capture, qualify, and close leads instantly.',
    metrics: [
      { label: 'Lead Response', value: 'Real-Time' },
      { label: 'Sales Pipeline', value: 'Automated' },
      { label: 'Voice AI Operations', value: 'Active Engine' },
    ],
    useCases: [
      'Automated Outbound & Inbound Sales',
      'Instant Lead Qualification & Booking',
      'Broadcast WhatsApp & Follow-Up Automation',
    ],
  },
  {
    id: 'runtilldone',
    name: 'RunTillDone',
    logoUrl: '/runtilldone-logo.png',
    tagline: 'Real Estate & Builder Operating System',
    description:
      'Real Estate CRM, Builder & Broker management, automated sales pipelines, and targeted marketing campaigns.',
    website: 'https://runtilldone.in',
    category: 'Real Estate CRM',
    iconName: 'Building2',
    brandColor: '#10B981',
    accentBg: '#ECFDF5',
    badgeText: 'Builder & Broker OS',
    targetAudience: 'Property Developers, Builders, Brokers & Real Estate Agencies',
    primaryOutcome: 'Accelerate property sales velocity, track broker payouts & booking lifecycles.',
    features: [
      'Real Estate CRM & Buyer Pipeline',
      'Builder & Channel Partner Portal',
      'Automated Booking & Inventory Ledger',
      'Omnichannel Real Estate Marketing',
    ],
    ctaText: 'Explore RunTillDone Specs',
    overview:
      'Purpose-built for real estate developers and brokers to manage property inventories, lead distribution, channel partner commissions, and site visit schedules seamlessly.',
    metrics: [
      { label: 'Property Pipeline', value: 'Centralized' },
      { label: 'Broker Management', value: 'Automated' },
      { label: 'Booking Workflow', value: 'Streamlined' },
    ],
    useCases: [
      'Residential & Commercial Developers',
      'Channel Partner & Broker Network Management',
      'Site Visit Tracking & Booking Records',
    ],
  },
  {
    id: 'ordrji',
    name: 'Ordrji',
    logoUrl: '/ordrji-logo.png',
    tagline: 'Restaurant POS & Kitchen ERP Suite',
    description:
      'End-to-end cloud POS, instant billing, inventory depletion, Kitchen Display System (KDS) & multi-outlet ERP.',
    website: 'https://www.ordrji.com',
    category: 'Hospitality & POS',
    iconName: 'Utensils',
    brandColor: '#F97316',
    accentBg: '#FFF7ED',
    badgeText: 'Hospitality POS',
    targetAudience: 'Fine Dining, QSR Chains, Cafes & Cloud Kitchens',
    primaryOutcome: 'Faster checkout billing and automated kitchen order synchronization.',
    features: [
      'Cloud POS & Lightning Billing',
      'Real-Time Kitchen Display System (KDS)',
      'Automated Inventory & Recipe Depletion',
      'Multi-Chain Central ERP Analytics',
    ],
    ctaText: 'Explore Ordrji Specs',
    overview:
      'A high-speed cloud POS and restaurant ERP engineered to eliminate billing queues, synchronize kitchen orders in milliseconds, and optimize ingredient margins.',
    metrics: [
      { label: 'Checkout Billing', value: 'Streamlined' },
      { label: 'Kitchen Screen Sync', value: 'Real-Time' },
      { label: 'Inventory Depletion', value: 'Automated' },
    ],
    useCases: [
      'Multi-Outlet QSR & Fast Food Chains',
      'Fine Dining & Table QR Ordering',
      'Cloud Kitchen Franchises',
    ],
  },
  {
    id: 'solaroft',
    name: 'Solaroft',
    logoUrl: '/solaroft-logo.png',
    tagline: 'Solar ERP & Field Maintenance OS',
    description:
      'Solar operations ERP for installation tracking, AMC maintenance, employee GPS tracking, and commissions.',
    website: 'https://solaroft.com',
    category: 'Clean Tech & ERP',
    iconName: 'Sun',
    brandColor: '#FACC15',
    accentBg: '#FEFCE8',
    badgeText: 'Solar & AMC OS',
    targetAudience: 'Solar EPC Contractors, AMC Technicians & Energy Enterprises',
    primaryOutcome: 'Streamline solar plant deployments, technician field routes & AMC SLA response.',
    features: [
      'Solar Project Execution & Milestones',
      'AMC Maintenance & Service SLA Engine',
      'Field Duty & GPS Staff Tracking',
      'Commission & Revenue Payout Ledger',
    ],
    ctaText: 'Explore Solaroft Specs',
    overview:
      'An enterprise ERP tailored specifically for solar companies to manage project lifecycles, engineer field visits, preventive AMC servicing, and revenue sharing.',
    metrics: [
      { label: 'Field SLA Tracking', value: 'Integrated' },
      { label: 'Project Milestones', value: 'Real-Time' },
      { label: 'AMC Maintenance', value: 'Automated' },
    ],
    useCases: [
      'Rooftop & Industrial Solar EPCs',
      'Preventive Maintenance & AMC Servicing',
      'Field Staff Location & Commission Tracking',
    ],
  },
  {
    id: 'solveit-india',
    name: 'SolveIt India',
    logoUrl: '/solveitindia-logo.png',
    tagline: 'CA & Legal Practice OS',
    description:
      'All-in-one software suite for Chartered Accountants, Lawyers, Tax Consultants & Compliance Professionals.',
    website: 'https://www.solveitindia.com',
    category: 'Finance & Compliance',
    iconName: 'FileCheck',
    brandColor: '#4F46E5',
    accentBg: '#EEF2FF',
    badgeText: 'Tax & Compliance OS',
    targetAudience: 'Chartered Accountants, Law Practice Firms & Tax Consultants',
    primaryOutcome: 'Save audit hours and eliminate statutory filing delays.',
    features: [
      'GST & Tax Portal Synchronization',
      'CA & Legal Practice Case Management',
      'Automated Document Vault & Indexing',
      'Statutory Deadline Alerts & Invoicing',
    ],
    ctaText: 'Explore SolveIt Specs',
    overview:
      'Built specifically for Indian CA firms, tax advocates, and corporate legal practices to manage GST returns, compliance calendars, and client communication automated vaults.',
    metrics: [
      { label: 'GST Portal Sync', value: 'Automated' },
      { label: 'Client Document Vault', value: 'Centralized' },
      { label: 'Statutory Reminders', value: 'Active' },
    ],
    useCases: [
      'Chartered Accountant Audit Firms',
      'Corporate Law Practitioners',
      'Tax & Statutory Compliance Practices',
    ],
  },
  {
    id: 'syncfyre',
    name: 'SyncFyre',
    logoUrl: '/syncfyre-logoo.png',
    tagline: 'Gym Management System',
    description:
      'All-in-one Gym Management Software for memberships, attendance, biometric access, billing, trainers, workout plans, and WhatsApp reminders.',
    website: 'https://syncfyre.com',
    category: 'Gym Management System',
    iconName: 'Dumbbell',
    brandColor: '#E11D48',
    accentBg: '#FFF1F2',
    badgeText: 'Gym & Fitness OS',
    targetAudience: 'Gym Owners, Fitness Studios, Health Clubs & Personal Trainers',
    primaryOutcome: 'Automate gym memberships, biometric access, billing, trainer allocations & WhatsApp reminders.',
    features: [
      'Gym Management Software',
      'Membership Management',
      'Attendance Tracking',
      'Biometric Access Control',
      'Billing & Automated Payments',
      'Trainer Management & Commissions',
      'Workout & Diet Plans',
      'Reports & Financial Analytics',
      'Automated WhatsApp Reminders',
      'Mobile App for Members & Staff',
    ],
    ctaText: 'Explore SyncFyre Specs',
    overview:
      'SyncFyre is an all-in-one operating system designed specifically for gyms and fitness centers to automate member onboarding, biometric gate access, billing cycles, diet plans, and automated WhatsApp payment reminders.',
    metrics: [
      { label: 'Biometric Gate Access', value: 'Integrated' },
      { label: 'WhatsApp Fee Alerts', value: 'Automated' },
      { label: 'Gym Operations', value: 'Centralized' },
    ],
    useCases: [
      'Gyms & Fitness Centers',
      'CrossFit & Martial Arts Studios',
      'Personal Training & Wellness Clubs',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    description: 'Bespoke web applications, mobile platforms, and enterprise cloud systems engineered to replace rigid off-the-shelf software.',
    iconName: 'Code2',
    problemSolved: 'Off-the-shelf software limits operational flexibility or incurs high recurring seat licensing costs.',
    typicalClients: 'High-Growth Tech Startups, Mid-Market Enterprises & Digital Agencies',
    deliverables: [
      'Full-Stack Web & SaaS Application Engineering',
      'Native & Cross-Platform Mobile Apps (iOS/Android)',
      'Legacy Code Modernization & API Integration',
    ],
    benefits: [
      '100% intellectual property & code ownership',
      'Zero monthly per-user licensing fees',
      'Scalable architecture handling high concurrency',
    ],
  },
  {
    id: 'crm-erp',
    title: 'CRM & Custom ERP Platforms',
    description: 'Centralized operational operating systems tailored to your unique sales pipelines, inventory loops, and financial workflows.',
    iconName: 'Users2',
    problemSolved: 'Fragmented data across spreadsheets, missed sales follow-ups, and disconnected team handoffs.',
    typicalClients: 'Manufacturing Firms, Logistics Operators, Professional Services & Sales Teams',
    deliverables: [
      'Custom Sales Lead Pipelines & Auto-Assignments',
      'Multi-Warehouse Inventory & Invoicing Modules',
      'Executive KPI & Financial Cashflow Dashboards',
    ],
    benefits: [
      'Complete visibility across customer touchpoints',
      '40% faster quote-to-cash turnaround time',
      'Real-time automated inventory tracking',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Workflow Integration',
    description: 'Intelligent automation pipelines, OCR document extractors, and AI agents that eliminate repetitive manual office tasks.',
    iconName: 'Sparkles',
    problemSolved: 'Employees spending hours copying data between platforms, handling routine queries, or manually processing invoices.',
    typicalClients: 'Healthcare Networks, Accounting Practices, E-Commerce & Customer Service Centers',
    deliverables: [
      'Automated Document OCR & Data Ingestion',
      'Custom AI Chatbots & Customer Qualification Bots',
      'Zapier/Make & Webhook Workflow Automation',
    ],
    benefits: [
      '80% reduction in manual data entry overhead',
      '24/7 instant customer qualification response',
      'Near-zero human error rate in document indexing',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Secure, automated cloud setups with CI/CD deployment pipelines, automated backups, and 99.9% uptime monitoring.',
    iconName: 'Cloud',
    problemSolved: 'Unreliable server crashes during traffic peaks, manual deployment risks, and spiraling cloud bill costs.',
    typicalClients: 'SaaS Companies, E-Commerce Brands & Enterprise Digital Platforms',
    deliverables: [
      'AWS / GCP / Cloud Run Infrastructure Provisioning',
      'Automated CI/CD Zero-Downtime Pipeline Setup',
      'Containerization (Docker & Kubernetes) Management',
    ],
    benefits: [
      '99.9% guaranteed platform uptime SLA',
      'Automated deployment rollback protections',
      'Up to 30% reduction in monthly cloud infrastructure costs',
    ],
  },
  {
    id: 'business-consulting',
    title: 'Digital Strategy & Tech Roadmap',
    description: 'Strategic technical guidance to help executives evaluate architecture options, select technology stacks, and execute digital transformation.',
    iconName: 'BarChart3',
    problemSolved: 'Uncertainty over technology choices, vendor selection paralysis, or fear of failed software investments.',
    typicalClients: 'CEOs, Founders, Operations Directors & Investment Groups',
    deliverables: [
      'System Architecture & Feasibility Audits',
      'Technology Stack Selection & Cost Projection',
      'Agile Software Development Roadmapping',
    ],
    benefits: [
      'Clear, predictable software development budget',
      'Risk mitigation prior to committing capital',
      'Direct access to senior solutions architects',
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Enterprise Maintenance & Support SLA',
    description: 'Proactive 24/7 server monitoring, security patching, performance optimization, and dedicated emergency developer availability.',
    iconName: 'Headphones',
    problemSolved: 'Post-launch downtime, unpatched security vulnerabilities, or lack of in-house engineers to fix critical bugs.',
    typicalClients: 'Companies with Mission-Critical Web Apps & E-Commerce Infrastructure',
    deliverables: [
      '24/7 Server & Uptime Monitoring Alerts',
      'Weekly Security Updates & Database Backups',
      'Guaranteed Emergency Bug Fix SLA (<2 hours)',
    ],
    benefits: [
      'Peace of mind with proactive monitoring',
      'Continuous security vulnerability patching',
      'Dedicated engineering team on standby',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ca-harish-sarda-project',
    title: 'CA Harish Sarda – Payroll Management System',
    subtitle: 'Automated Salary & Tax Processing',
    description:
      'A dedicated Payroll Management System designed to handle employee salary calculations, tax deductions, attendance tracking, and instant pay slip generation.',
    category: 'Accounting & Payroll',
    client: 'CA Harish Sarda',
    gradientBg: 'from-blue-600/10 via-indigo-500/10 to-blue-50/50',
    problemStatement:
      'Complex manual calculations for payroll processing, employee tax deductions, and month-end salary slip generation.',
    solutionDelivered:
      'Designed a dedicated Payroll Management System tailored for automated salary processing, tax deductions, attendance tracking, and instant pay slip generation.',
    features: [
      'Automated Salary Calculations',
      'Tax Deduction Engine',
      'Attendance & Leave Sync',
      'Instant Digital Pay Slip Generation',
    ],
    results: [
      { metric: 'Simplified', label: 'Payroll Processing' },
      { metric: 'Reduced', label: 'Manual Work' },
    ],
    techStack: ['React', 'TypeScript', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    imagePlaceholderText: 'Payroll Management System UI',
  },
  {
    id: 'ca-meher-pawar-project',
    title: 'CA Meher Pawar – Office & Client Management System',
    subtitle: 'Centralized Practice Operations',
    description:
      'An integrated Office & Client Management System featuring centralized client records, compliance task assignment, and automated status tracking.',
    category: 'Chartered Accountancy',
    client: 'CA Meher Pawar',
    gradientBg: 'from-emerald-600/10 via-teal-500/10 to-emerald-50/50',
    problemStatement:
      'Unorganized client files, manual tracking of tax compliance due dates, and fragmented office task allocation.',
    solutionDelivered:
      'Developed an integrated Office & Client Management System featuring centralized client records, compliance task assignment, and automated status tracking.',
    features: [
      'Centralized Client Database',
      'Compliance Task Delegation',
      'Status Tracking Dashboard',
      'Streamlined Billing Records',
    ],
    results: [
      { metric: 'Centralized', label: 'Client Records' },
      { metric: 'Automated', label: 'Compliance Workflow' },
    ],
    techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    imagePlaceholderText: 'Office Management System UI',
  },
  {
    id: 'dr-imran-shaikh-project',
    title: 'Dr. Mohammad Imran Shaikh – Healthcare & Commission OS',
    subtitle: 'Patient Portal & Automated Partner Payouts',
    description:
      'A modern healthcare web platform for patient inquiries paired with an automated Commission Management System for transparent partner payouts.',
    category: 'Healthcare & Medicine',
    client: 'Dr. Mohammad Imran Shaikh',
    gradientBg: 'from-purple-600/10 via-violet-500/10 to-purple-50/50',
    problemStatement:
      'Limited online patient reach and manual tracking of referral commission distributions across diagnostic partners.',
    solutionDelivered:
      'Built a modern healthcare web platform for patient inquiries paired with an automated Commission Management System for transparent tracking and payout calculations.',
    features: [
      'Healthcare Patient Portal',
      'Automated Commission Ledger',
      'Diagnostic Partner Tracking',
      'Error-Free Payout Calculations',
    ],
    results: [
      { metric: 'Enhanced', label: 'Digital Presence' },
      { metric: 'Transparent', label: 'Partner Payouts' },
    ],
    techStack: ['React', 'Node.js', 'Cloud Firestore', 'Tailwind CSS'],
    imagePlaceholderText: 'Healthcare & Commission System UI',
  },
  {
    id: 'dr-harish-kamaraj-project',
    title: 'Dr. Harish Kamaraj – Healthcare Website, WhatsApp Automation & Pharmacy Store Management System',
    subtitle: 'Healthcare Portal, WhatsApp Automation & Pharmacy Inventory',
    description:
      'A professional healthcare website, automated WhatsApp patient communication system, and Pharmacy Store Management System with medicine stock tracking and inventory management.',
    category: 'Healthcare / Pharmacy',
    client: 'Dr. Harish Kamaraj (Bangalore, India)',
    gradientBg: 'from-teal-600/10 via-emerald-500/10 to-teal-50/50',
    problemStatement:
      'The client required a modern digital presence while improving communication with patients and streamlining pharmacy inventory and daily business operations.',
    solutionDelivered:
      'Designed and developed a professional Healthcare Website, an automated WhatsApp Patient Communication System, and a comprehensive Pharmacy Store Management System with medicine stock tracking.',
    features: [
      'Professional Healthcare Website',
      'WhatsApp Patient Communication Automation',
      'Pharmacy Store Management System',
      'Medicine Stock Tracking & Inventory Sync',
      'Automated Customer Communication',
      'Organized Daily Pharmacy Workflow',
    ],
    results: [
      { metric: 'Centralized', label: 'Pharmacy Inventory' },
      { metric: 'In Progress', label: 'Active Development' },
    ],
    techStack: ['React', 'TypeScript', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    imagePlaceholderText: 'Healthcare & Pharmacy OS UI',
  },
  {
    id: 'trinity-homes-project',
    title: 'Trinity Homes Dubai – Real Estate Portal & Custom CRM',
    subtitle: 'Property Showcase & Lead Workflow Automation',
    description:
      'A high-converting real estate website integrated with a custom real estate CRM and automated lead-to-agent workflow routing across Dubai properties.',
    category: 'Real Estate (Dubai)',
    client: 'Sajid Tanwar (Trinity Homes)',
    gradientBg: 'from-amber-600/10 via-orange-500/10 to-amber-50/50',
    problemStatement:
      'Fragmented buyer lead tracking from multiple digital channels, slow follow-ups, and manual deal workflow management.',
    solutionDelivered:
      'Created a high-converting real estate website integrated with a custom real estate CRM and automated lead-to-agent workflow routing.',
    features: [
      'Dubai Property Showcase',
      'Real Estate Buyer CRM',
      'Automated Lead Distribution',
      'Sales Pipeline Analytics',
    ],
    results: [
      { metric: 'Improved', label: 'Lead Management' },
      { metric: 'Automated', label: 'Workflow Routing' },
    ],
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    imagePlaceholderText: 'Trinity Homes Dubai Platform UI',
  },
  {
    id: 'talwalkars-gym-project',
    title: 'Talwalkars Gym – SyncFyre Gym Management System',
    subtitle: 'Biometric Access & Membership Automation',
    description:
      'An all-in-one Gym Management System featuring biometric gate integration, automated WhatsApp fee reminders, trainer tracking, and diet plans.',
    category: 'Fitness & Gym Management',
    client: 'Talwalkars Gym',
    gradientBg: 'from-rose-600/10 via-pink-500/10 to-rose-50/50',
    problemStatement:
      'Manual membership tracking, paper attendance logs, payment follow-ups, and difficulty managing trainer schedules.',
    solutionDelivered:
      'Implemented SyncFyre Gym Management System with biometric attendance integration, automated WhatsApp fee reminders, and digital workout/diet plans.',
    features: [
      'Biometric Access Control',
      'Automated WhatsApp Reminders',
      'Digital Workout & Diet Plans',
      'Trainer Schedule Management',
    ],
    results: [
      { metric: 'Centralized', label: 'Gym Operations' },
      { metric: 'Automated', label: 'Fee Collections' },
    ],
    techStack: ['React', 'Node.js', 'Express', 'Cloud Firestore', 'Tailwind CSS'],
    imagePlaceholderText: 'SyncFyre Gym Management UI',
  },
  {
    id: 'anant-leather-project',
    title: 'Anant Leather – E-commerce & Store Management System',
    subtitle: 'Real-Time Inventory & Online Storefront',
    description:
      'A custom E-commerce Platform synchronized with an internal Store & Inventory Management System for real-time stock sync and automated order routing.',
    category: 'Retail & E-commerce',
    client: 'Anant Leather',
    gradientBg: 'from-amber-700/10 via-yellow-600/10 to-amber-50/50',
    problemStatement:
      'Offline store inventory disjointed from online sales, manual order processing, and unorganized customer order tracking.',
    solutionDelivered:
      'Built a custom E-commerce Platform synchronized with an internal Store & Inventory Management System for real-time stock sync and automated order routing.',
    features: [
      'Real-time Store Inventory Sync',
      'Custom Online Storefront',
      'Automated Order Dispatch',
      'Digital Customer Accounts',
    ],
    results: [
      { metric: 'Real-time', label: 'Inventory Synchronization' },
      { metric: 'Streamlined', label: 'Retail Billing' },
    ],
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    imagePlaceholderText: 'Anant Leather E-commerce UI',
  },
  {
    id: 'synckraft-crm-project',
    title: 'Synckraft Technologies – Internal Business Operations CRM',
    subtitle: 'Core Operations & Engineering Platform',
    description:
      'An all-in-one internal CRM & Business Operations Platform unifying lead management, project milestones, automated invoicing, and team execution.',
    category: 'Software Engineering & IT',
    client: 'Synckraft Technologies',
    gradientBg: 'from-blue-600/10 via-cyan-500/10 to-blue-50/50',
    problemStatement:
      'Managing client project pipelines, developer time allocations, invoice tracking, and internal task handoffs across disparate tools.',
    solutionDelivered:
      'Architected an all-in-one internal CRM & Business Operations Platform unifying lead management, project milestones, automated invoicing, and team execution.',
    features: [
      'Client Pipeline & Lead Engine',
      'Project Milestone Tracker',
      'Automated Milestone Invoicing',
      'Engineering Task Handoffs',
    ],
    results: [
      { metric: 'Centralized', label: 'Business Operations' },
      { metric: 'Accelerated', label: 'Internal Coordination' },
    ],
    techStack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    imagePlaceholderText: 'Synckraft Operations OS UI',
  },
];



export const ENGINEERING_MEMBERS: TeamMember[] = [
  {
    id: 'shaan-solanki',
    name: 'Shaan Solanki',
    role: 'Team Lead',
    description: 'Leading development teams and delivering intelligent automation solutions.',
    image: '/team/shaan.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'chinmey-dipke',
    name: 'Chinmey Dipke',
    role: 'AI Automation Specialist',
    description: 'Crafting intelligent products with purpose through AI and workflow automation.',
    image: '/team/chinmey.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'aryan-pande',
    name: 'Aryan Pande',
    role: 'Full Stack Developer',
    description: 'Building innovative, scalable web applications with clean code and exceptional user experiences.',
    image: "/team/aryan'.jpeg",
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'kalashsingh-solanke',
    name: 'Kalashsingh Solanke',
    role: 'Software Developer',
    description: 'Turning innovative ideas into reliable software solutions.',
    image: '/team/kalash.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'astha-jaiswal',
    name: 'Astha Jaiswal',
    role: 'Full Stack Developer',
    description: 'Designing, developing and continuously improving modern web applications.',
    image: '/team/astha.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'vansh-bhagat',
    name: 'Vansh G. Bhagat',
    role: 'Full Stack Developer & QA Tester',
    description: 'Building reliable software features and ensuring quality through comprehensive testing.',
    image: '/team/vansh.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'pranav-maske',
    name: 'Pranav Maske',
    role: 'Full Stack Developer',
    description: 'Learning, building and delivering high-quality software solutions every day.',
    image: '/team/pranav.jpeg',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 'shraddha-koturwar',
    name: 'Shraddha Koturwar',
    role: 'Full Stack Developer',
    description: 'Crafting user-centric digital products from design through deployment.',
    image: '/team/shraddha.jpeg',
    linkedIn: 'https://linkedin.com',
  },
];

export const MARKETING_MEMBERS: TeamMember[] = [
  {
    id: 'leher-yadav',
    name: 'Leher Yadav',
    role: 'Marketing Executive',
    description: 'Building brand visibility through creative campaigns, content and digital marketing.',
    image: '/team/leher.jpeg',
    linkedIn: 'https://linkedin.com',
  },
];

export const HR_MEMBERS: TeamMember[] = [
  {
    id: 'sharayu-yeotikar',
    name: 'Sharayu Yeotikar',
    role: 'HR Executive',
    description: 'I connect great talent with the right opportunities.',
    image: '/team/sharayu.jpeg',
    linkedIn: 'https://linkedin.com',
  },
];

export const SALES_MEMBERS: TeamMember[] = [
  {
    id: 'shraddha-murai',
    name: 'Shraddha Murai',
    role: 'Sales Team Lead',
    description: 'Leading the sales team to build client relationships and drive sustainable business growth.',
    image: '/team/shraddha 2.jpeg',
    linkedIn: 'https://linkedin.com',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  ...ENGINEERING_MEMBERS,
  ...MARKETING_MEMBERS,
  ...HR_MEMBERS,
  ...SALES_MEMBERS,
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to start a project?',
    answer:
      'We typically initiate new client engagements within 3 to 5 business days following our initial strategy consultation, scope alignment, and agreement finalization.',
  },
  {
    id: 'faq-2',
    question: 'What technologies do you work with?',
    answer:
      'We specialize in modern web and mobile stacks including React, Next.js, Node.js, Express, TypeScript, Python, Tailwind CSS, PostgreSQL, Cloud Firestore, AWS, and GCP.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with startups or enterprise only?',
    answer:
      'We work with high-growth startups as well as established enterprises. Our engagement model scales from MVP development to full enterprise digital transformation.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer comprehensive post-launch support SLA packages including 24/7 server monitoring, bug fixes, feature iteration, and security maintenance.',
  },
  {
    id: 'faq-5',
    question: 'What is your engagement process?',
    answer:
      'Our 5-step process spans Discover, Plan, Build, Deploy, and Scale. We maintain complete transparency with sprint demos and weekly progress reports.',
  },
  {
    id: 'faq-6',
    question: 'How do I get a quote for my project?',
    answer:
      'You can book a free 30-minute strategy call through our website or submit your requirements via our contact form. Our team will prepare a detailed proposal within 24 hours.',
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'India Headquarters',
    title: 'India Headquarters',
    badge: 'Main Office',
    companyName: 'Synckraft Technologies Pvt. Ltd.',
    address: 'Tapadiya City Centre, Amravati, Maharashtra 444601',
    country: 'India',
    mapUrl: 'https://share.google/3kEA43BAadSyiyNvB',
  },
];

export const BRAND_LOGOS = [
  { name: 'CA HARISH SARDA', font: 'font-semibold tracking-wider' },
  { name: 'CA MEHER PAWAR', font: 'font-bold tracking-wider' },
  { name: 'DR. MOHAMMAD IMRAN SHAIKH', font: 'font-serif font-bold tracking-tight' },
  { name: 'DR. HARISH KAMARAJ', font: 'font-serif font-bold tracking-wide' },
  { name: 'TRINITY HOMES DUBAI', font: 'font-sans font-extrabold tracking-tight text-blue-600' },
  { name: 'TALWALKARS GYM', font: 'font-sans font-bold tracking-tight' },
  { name: 'ANANT LEATHER', font: 'font-serif italic font-bold' },
  { name: 'SYNCKRAFT TECHNOLOGIES', font: 'font-semibold tracking-tight' },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We understand your business, challenges and goals in depth.',
    iconName: 'Search',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We design the right strategy and solution tailored to your needs.',
    iconName: 'Target',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We build powerful systems with clean code and strict quality standards.',
    iconName: 'Code',
  },
  {
    step: '04',
    title: 'Deploy',
    description:
      'We deploy your solution seamlessly with zero downtime.',
    iconName: 'Rocket',
  },
  {
    step: '05',
    title: 'Scale',
    description:
      'We optimize, monitor and scale to ensure long term success.',
    iconName: 'TrendingUp',
  },
];

export const WHY_CHOOSE_PRODUCT_CARDS = [
  {
    title: 'Scalable Solutions',
    description: 'Products built to grow with your business needs.',
    iconName: 'Boxes',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime assurance.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Easy to Use',
    description: 'Intuitive interfaces that your team can adopt instantly.',
    iconName: 'Smile',
  },
  {
    title: 'Seamless Integration',
    description: 'Works smoothly with your existing tools and platforms.',
    iconName: 'Layers',
  },
  {
    title: 'Expert Support',
    description: 'Our team is always here to support your journey.',
    iconName: 'UserCheck',
  },
];

export const WHY_CHOOSE_SERVICES_CARDS = [
  {
    title: 'Proven Expertise',
    description: 'Experienced team with deep industry knowledge.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime for your needs.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Agile & Flexible',
    description: 'We adapt quickly and deliver solutions that evolve with you.',
    iconName: 'Zap',
  },
  {
    title: 'Client Focused',
    description: 'Your success is our priority at every stage.',
    iconName: 'Users',
  },
  {
    title: 'Measurable Results',
    description: 'Solutions built to deliver real impact and growth.',
    iconName: 'TrendingUp',
  },
];

export const INDUSTRIES_LIST = [
  { name: 'Healthcare', iconName: 'HeartPulse' },
  { name: 'Real Estate', iconName: 'Building2' },
  { name: 'Education', iconName: 'GraduationCap' },
  { name: 'Logistics', iconName: 'Truck' },
  { name: 'Finance', iconName: 'Landmark' },
  { name: 'Retail', iconName: 'ShoppingBag' },
];
