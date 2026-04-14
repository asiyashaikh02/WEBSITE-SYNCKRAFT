// import React from 'react';
// import IndustryTemplate from '../../components/IndustryTemplate';

// export default function Beauty() {
//   return (
//     <IndustryTemplate
//       title="Beauty OS"
//       subtitle="Personalized Cosmetics AI"
//       description="Leverage facial recognition and skin analysis AI to offer highly tailored beauty product recommendations to every customer."
//       features={[
//         {
//           title: "Virtual Try-On",
//           description: "High fidelity AR tools to simulate makeup applications.",
//           icon: "face_retouching_natural"
//         },
//         {
//           title: "Skin Analytics",
//           description: "Automated analysis identifying user skin patterns to propose perfect routines.",
//           icon: "science"
//         }
//       ]}
//     />
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Beauty() {
  return (
    <>

{/* Premium Beauty Hero */}

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
Luxury Beauty Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Beauty <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
Transform beauty consultations with AI powered skin analytics, 
virtual try-ons and personalized product intelligence designed for 
premium beauty brands and salons.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Book Beauty Demo
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Ecosystem
</button>

</div>

</motion.div>


{/* Luxury Beauty Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">Customer Conversion</p>
<p className="text-3xl font-bold">+214%</p>
</div>

</motion.div>

</div>

</section>



{/* Beauty AI Experience */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
AI Beauty Consultation Experience
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Deliver personalized beauty recommendations using facial AI and skin analytics
</p>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="rounded-3xl overflow-hidden shadow-2xl"
>

<img
src="https://images.unsplash.com/photo-1487412912498-0447578fcca8"
className="w-full"
/>

</motion.div>

</div>

</section>



{/* Beauty Use Cases */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"Salon Automation",
icon:"content_cut",
desc:"Manage bookings, clients and services with AI powered automation"
},
{
title:"Product Recommendation AI",
icon:"auto_awesome",
desc:"Suggest personalized skincare and makeup products"
},
{
title:"Client Analytics",
icon:"insights",
desc:"Track customer behavior and lifetime value"
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



{/* Existing Template */}

<IndustryTemplate
title="Beauty OS"
subtitle="Personalized Cosmetics AI"
description="Leverage facial recognition and skin analysis AI to offer highly tailored beauty product recommendations, automate salon workflows and enhance customer experience."
features={[
{
title: "Virtual Try-On",
description: "High fidelity AR tools to simulate makeup applications.",
icon: "face_retouching_natural"
},
{
title: "Skin Analytics",
description: "Automated analysis identifying user skin patterns to propose perfect routines.",
icon: "science"
},
{
title:"Appointment Automation",
description:"Smart booking system with reminders",
icon:"calendar_month"
},
{
title:"Client CRM",
description:"Track beauty clients and preferences",
icon:"groups"
},
{
title:"Inventory Management",
description:"Track cosmetics and product inventory",
icon:"inventory"
},
{
title:"Loyalty Programs",
description:"Customer retention and membership system",
icon:"workspace_premium"
}
]}

/>

</>
  );
}