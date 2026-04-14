// import React from 'react';
// import IndustryTemplate from '../../components/IndustryTemplate';

// export default function Education() {
//   return (
//     <IndustryTemplate
//       title="Cognitive Education"
//       subtitle="Smart Institutional Management"
//       description="Automate administrative burdens, provide a centralized digital campus for students, and use analytics to predict student performance and optimize curriculum delivery. Modernize the educational lifecycle from admission to alumni relations."
//       features={[
//         {
//           title: "Unified Student Portal",
//           description: "One-stop seamless access for assignments, syllabus tracking, digital billing, and real-time campus notifications.",
//           icon: "school"
//         },
//         {
//           title: "Administrative Automation",
//           description: "Massively reduce staff workload with automated enrollment workflows, seamless fee collection systems, and dynamic room scheduling.",
//           icon: "admin_panel_settings"
//         },
//         {
//           title: "Performance AI & Risk Models",
//           description: "Identify at-risk students securely using predictive grade and attendance data patterns, triggering early counselor intervention.",
//           icon: "insights"
//         },
//         {
//           title: "Digital Admissions",
//           description: "End-to-end paperless pipeline for processing student applications, reviewing credentials, and issuing automated acceptance notices.",
//           icon: "how_to_reg"
//         },
//         {
//           title: "Alumni CRM",
//           description: "Maintain lifelong engagement post-graduation with targeted donation campaigns, event invites, and career network tracking.",
//           icon: "diversity_1"
//         },
//         {
//           title: "Compliance & Reporting",
//           description: "Generate highly accurate, instantly exportable demographic and performance reports to fulfill stringent government accreditation standards.",
//           icon: "assured_workload"
//         }
//       ]}
//     />
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Education() {
  return (
    <>

{/* Premium Education Hero */}

<section className="pt-24 px-8 pb-20 overflow-hidden">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="space-y-6"
>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-widest">
Education Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Education <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
Transform institutions into intelligent digital campuses with AI-powered
student analytics, automation and unified academic management.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Book Education Demo
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Ecosystem
</button>

</div>

</motion.div>


{/* Education Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">Student Engagement</p>
<p className="text-3xl font-bold">+189%</p>
</div>

</motion.div>

</div>

</section>



{/* Digital Campus Section */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Digital Campus Intelligence
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Manage admissions, academics, performance and communication 
from a single intelligent platform
</p>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="rounded-3xl overflow-hidden shadow-2xl"
>

<img
src="https://images.unsplash.com/photo-1551281044-8d8c7c2c9f9d"
className="w-full"
/>

</motion.div>

</div>

</section>



{/* Education Use Cases */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"Student Lifecycle Management",
icon:"school",
desc:"Manage admissions, academics and alumni lifecycle"
},
{
title:"Faculty Automation",
icon:"groups",
desc:"Schedule classes and manage teachers intelligently"
},
{
title:"Performance Analytics",
icon:"insights",
desc:"Track student performance with predictive AI"
}
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
whileHover={{y:-8}}
className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10"
>

<span className="material-symbols-outlined text-4xl text-primary mb-4">
{item.icon}
</span>

<h3 className="text-xl font-bold mb-3">
{item.title}
</h3>

<p className="text-on-surface-variant">
{item.desc}
</p>

</motion.div>

))}

</div>

</section>



{/* Original Template Features */}

<IndustryTemplate
title="Cognitive Education"
subtitle="Smart Institutional Management"
description="Automate administrative burdens, provide a centralized digital campus for students, and use analytics to predict student performance and optimize curriculum delivery. Modernize the educational lifecycle from admission to alumni relations."
features={[
{
title: "Unified Student Portal",
description: "One-stop seamless access for assignments, syllabus tracking, digital billing, and real-time campus notifications.",
icon: "school"
},
{
title: "Administrative Automation",
description: "Massively reduce staff workload with automated enrollment workflows, seamless fee collection systems, and dynamic room scheduling.",
icon: "admin_panel_settings"
},
{
title: "Performance AI & Risk Models",
description: "Identify at-risk students securely using predictive grade and attendance data patterns.",
icon: "insights"
},
{
title: "Digital Admissions",
description: "End-to-end paperless admission pipeline",
icon: "how_to_reg"
},
{
title: "Alumni CRM",
description: "Maintain lifelong alumni engagement",
icon: "diversity_1"
},
{
title: "Compliance & Reporting",
description: "Government and accreditation reports",
icon: "assured_workload"
}
]}

/>

</>
  );
}