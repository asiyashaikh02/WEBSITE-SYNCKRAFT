// import React from 'react';
// import IndustryTemplate from '../../components/IndustryTemplate';

// export default function Hospitality() {
//   return (
//     <IndustryTemplate
//       title="Hospitality Management System"
//       subtitle="Unified Guest Experience"
//       description="Elevate your hotel or resort operations with intelligent booking engines, contactless guest services, and centralized housekeeping management. Deliver a five-star digital experience tightly integrated with your property management stack."
//       features={[
//         {
//           title: "Intelligent Booking Engine",
//           description: "Maximize occupancy and revenue with dynamic predictive pricing models and direct integration to global distribution systems.",
//           icon: "event_seat"
//         },
//         {
//           title: "Contactless Check-in & Keys",
//           description: "Allow guests to bypass the front desk using robust mobile apps for ID verification and encrypted digital room keys via NFC.",
//           icon: "vpn_key"
//         },
//         {
//           title: "Smart Room Operations",
//           description: "IoT integrations granting guests control over room lighting, climate, and concierge requests directly from their personal devices.",
//           icon: "living"
//         },
//         {
//           title: "Housekeeping Routing",
//           description: "Algorithmic task assignment optimizing housekeeping staff routes in real-time based on live guest checkout statuses.",
//           icon: "cleaning_services"
//         },
//         {
//           title: "Integrated CRM",
//           description: "Track deep guest preferences, past stays, and spending patterns to trigger highly personalized pre-arrival marketing sequences.",
//           icon: "diversity_3"
//         },
//         {
//           title: "F&B POS Synchronization",
//           description: "Seamless synchronization between bars, restaurants, and room service requests directly to the guest folio ledger.",
//           icon: "room_service"
//         }
//       ]}
//     />
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Hospitality() {
  return (
    <>

{/* Luxury Hero */}

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
Hospitality Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Hospitality <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
Deliver premium guest experiences with intelligent booking,
contactless services and smart hotel automation.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Book Hospitality Demo
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Ecosystem
</button>

</div>

</motion.div>


{/* Hotel Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">Guest Satisfaction</p>
<p className="text-3xl font-bold">+148%</p>
</div>

</motion.div>

</div>

</section>



{/* Hotel Dashboard */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Hotel Intelligence Dashboard
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Manage guests, rooms, bookings and services from one unified platform
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



{/* Hospitality Use Cases */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"Guest Management",
icon:"hotel",
desc:"Manage guest lifecycle and bookings"
},
{
title:"Room Automation",
icon:"meeting_room",
desc:"Smart room and service automation"
},
{
title:"Revenue Analytics",
icon:"monitoring",
desc:"Track occupancy and revenue"
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



{/* Template */}

<IndustryTemplate
title="Hospitality Management System"
subtitle="Unified Guest Experience"
description="Elevate your hotel or resort operations with intelligent booking engines, contactless guest services, and centralized housekeeping management."
features={[
{
title: "Intelligent Booking Engine",
description: "Dynamic pricing and occupancy optimization",
icon: "event_seat"
},
{
title: "Contactless Check-in & Keys",
description: "Mobile digital key access",
icon: "vpn_key"
},
{
title: "Smart Room Operations",
description: "IoT based room automation",
icon: "living"
},
{
title: "Housekeeping Routing",
description: "Smart housekeeping workflows",
icon: "cleaning_services"
},
{
title: "Integrated CRM",
description: "Guest personalization system",
icon: "diversity_3"
},
{
title: "F&B POS Synchronization",
description: "Restaurant and room service sync",
icon: "room_service"
}
]}

/>

</>
  );
}