// import React from 'react';
// import IndustryTemplate from '../../components/IndustryTemplate';

// export default function Gym() {
//   return (
//     <IndustryTemplate
//       title="Gym Automation System"
//       subtitle="Fitness Facility Intelligence"
//       description="Modernize your fitness center with AI-driven member retention algorithms, automated billing workflows, and smart predictive facility maintenance. Provide the ultimate seamless digital experience from the app to the access gate."
//       features={[
//         {
//           title: "Predictive Retention AI",
//           description: "Identify members at risk of churning based on visit frequency and engagement patterns, automatically triggering personalized retention campaigns.",
//           icon: "model_training"
//         },
//         {
//           title: "Seamless Access Control",
//           description: "Integration with biometric scanners and mobile NFC logic for completely frictionless facility entry and 24/7 autonomous operations.",
//           icon: "sensor_door"
//         },
//         {
//           title: "Class Orchestration",
//           description: "Dynamic capacity forecasting, automatic waitlist management, and dynamic scheduling for trainers and studio spaces.",
//           icon: "event_available"
//         },
//         {
//           title: "Automated Billing Engine",
//           description: "Robust recurring payment processing with smart dunning management to recover failed payments without staff intervention.",
//           icon: "currency_exchange"
//         },
//         {
//           title: "Equipment Maintenance Tracking",
//           description: "IoT connectivity to log machine usage hours and automatically schedule preventative servicing to eliminate downtime.",
//           icon: "fitness_center"
//         },
//         {
//           title: "Member Analytics",
//           description: "Deep insights into peak hours, class profitability, and lifetime member value to optimize future facility investments.",
//           icon: "insights"
//         }
//       ]}
//     />
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Gym() {
  return (
    <>

{/* Premium Hero */}

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
Fitness Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Gym <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
Automate gym operations, improve member retention and deliver 
next-generation fitness experiences powered by AI.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Book Gym Demo
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Ecosystem
</button>

</div>

</motion.div>


{/* Gym Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">Retention Growth</p>
<p className="text-3xl font-bold">+162%</p>
</div>

</motion.div>

</div>

</section>



{/* Smart Gym Dashboard */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Smart Gym Intelligence Dashboard
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Track members, classes, trainers and revenue from one platform
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



{/* Gym Use Cases */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"Membership Automation",
icon:"badge",
desc:"Automate memberships and renewals"
},
{
title:"Trainer Management",
icon:"groups",
desc:"Manage trainers and sessions"
},
{
title:"Attendance Tracking",
icon:"analytics",
desc:"Track gym usage and performance"
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



{/* Original Features */}

<IndustryTemplate
title="Gym Automation System"
subtitle="Fitness Facility Intelligence"
description="Modernize your fitness center with AI-driven member retention algorithms, automated billing workflows, and smart predictive facility maintenance."
features={[
{
title: "Predictive Retention AI",
description: "Identify members at risk of churning",
icon: "model_training"
},
{
title: "Seamless Access Control",
description: "Biometric and NFC access",
icon: "sensor_door"
},
{
title: "Class Orchestration",
description: "Smart scheduling and waitlist",
icon: "event_available"
},
{
title: "Automated Billing Engine",
description: "Recurring payment automation",
icon: "currency_exchange"
},
{
title: "Equipment Maintenance Tracking",
description: "IoT maintenance alerts",
icon: "fitness_center"
},
{
title: "Member Analytics",
description: "Performance and retention insights",
icon: "insights"
}
]}

/>

</>
  );
}