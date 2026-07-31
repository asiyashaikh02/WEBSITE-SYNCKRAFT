export interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  features: string[];
  cta: string;
  iconName: string;
  image: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  badgeBg: string;
  glowColor: string;
  hexColor: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    badge: 'Healthcare & ABDM',
    description:
      'Automate patient engagement, appointments, EMR workflows, AI voice assistants and hospital operations.',
    features: [
      'CRM',
      'WhatsApp Automation',
      'AI Voice Agents',
      'Appointment Automation',
      'Analytics',
    ],
    cta: 'Explore Healthcare Solutions',
    iconName: 'HeartPulse',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#F0FDF4]/85',
    accentBorder: 'border-emerald-200/90',
    accentText: 'text-emerald-600',
    badgeBg: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
    glowColor: 'rgba(16, 185, 129, 0.18)',
    hexColor: '#059669',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    badge: 'Property & CRM',
    description:
      'Automate property listings, lead distribution, channel partner CRM and sales workflows across developers and brokers.',
    features: [
      'Real Estate CRM',
      'Lead Management',
      'AI Voice Agents',
      'WhatsApp Automation',
      'Property Portals',
    ],
    cta: 'Explore Real Estate Solutions',
    iconName: 'Building2',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#EFF6FF]/85',
    accentBorder: 'border-blue-200/90',
    accentText: 'text-blue-600',
    badgeBg: 'bg-blue-100/90 text-blue-800 border-blue-200',
    glowColor: 'rgba(37, 99, 235, 0.18)',
    hexColor: '#2563EB',
  },
  {
    id: 'education',
    name: 'Education',
    badge: 'EdTech & LMS',
    description:
      'Build modern digital platforms for schools, colleges, EdTech platforms and training institutes.',
    features: [
      'Student Portal',
      'Admission Management',
      'Fee Management',
      'Attendance Tracking',
      'Learning Platform',
    ],
    cta: 'Explore Education Solutions',
    iconName: 'GraduationCap',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#FAF5FF]/85',
    accentBorder: 'border-purple-200/90',
    accentText: 'text-purple-600',
    badgeBg: 'bg-purple-100/90 text-purple-800 border-purple-200',
    glowColor: 'rgba(147, 51, 234, 0.18)',
    hexColor: '#9333EA',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    badge: 'Supply Chain & Fleet',
    description:
      'Digitizing fleet dispatch, real-time supply chain tracking, inventory routing and operational workflows.',
    features: [
      'Fleet Management',
      'Dispatch Tracking',
      'Inventory Control',
      'Delivery Management',
      'Analytics',
    ],
    cta: 'Explore Logistics Solutions',
    iconName: 'Truck',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#FFF7ED]/85',
    accentBorder: 'border-orange-200/90',
    accentText: 'text-orange-600',
    badgeBg: 'bg-orange-100/90 text-orange-800 border-orange-200',
    glowColor: 'rgba(234, 88, 12, 0.18)',
    hexColor: '#EA580C',
  },
  {
    id: 'finance',
    name: 'Finance',
    badge: 'FinTech & Compliance',
    description:
      'Secure business software, GST compliance engines and office automation for CA firms and financial practices.',
    features: [
      'CA Office OS',
      'Automated Payroll',
      'Document Vault',
      'Tax Compliance',
      'Financial Analytics',
    ],
    cta: 'Explore Finance Solutions',
    iconName: 'Landmark',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#EEF2FF]/85',
    accentBorder: 'border-indigo-200/90',
    accentText: 'text-indigo-600',
    badgeBg: 'bg-indigo-100/90 text-indigo-800 border-indigo-200',
    glowColor: 'rgba(79, 70, 229, 0.18)',
    hexColor: '#4F46E5',
  },
  {
    id: 'retail',
    name: 'Retail',
    badge: 'POS & E-commerce',
    description:
      'Streamline physical retail checkout, real-time e-commerce inventory sync and customer loyalty workflows.',
    features: [
      'Cloud POS',
      'Inventory Sync',
      'Billing Engine',
      'Loyalty Programs',
      'Sales Analytics',
    ],
    cta: 'Explore Retail Solutions',
    iconName: 'ShoppingBag',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    accentBg: 'bg-[#FEFCE8]/85',
    accentBorder: 'border-amber-200/90',
    accentText: 'text-amber-700',
    badgeBg: 'bg-amber-100/90 text-amber-900 border-amber-200',
    glowColor: 'rgba(217, 119, 6, 0.18)',
    hexColor: '#D97706',
  },
];
