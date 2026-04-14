import React from "react";
import { motion } from "framer-motion";

export default function RealEstate() {
  return (
    <main className="pt-24 overflow-hidden">

{/* HERO SECTION */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="space-y-8"
>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
<span className="material-symbols-outlined text-primary text-sm">
auto_awesome
</span>
<span className="text-xs font-bold tracking-widest uppercase">
Future Real Estate Platform
</span>
</div>

<h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05]">
Real Estate <br/>

<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
Engineered
</span>

</h1>

<p className="text-xl opacity-70 max-w-xl">
Scale your real estate business with AI powered lead generation,
automation and premium property visualization.
</p>

<div className="flex gap-4">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="bg-gradient-to-r from-primary to-tertiary px-8 py-4 rounded-xl font-bold"
>

Book Real Estate Demo

</motion.button>

<motion.button
whileHover={{scale:1.05}}
className="border border-primary/20 px-8 py-4 rounded-xl"
>

View Ecosystem

</motion.button>

</div>

</motion.div>



{/* Animated Building */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
className="rounded-3xl shadow-2xl"
src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600"
alt="Real Estate"
/>

<motion.div
animate={{y:[0,-10,0]}}
transition={{duration:4,repeat:Infinity}}
className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl"
>

<p className="text-xs">Lead Growth</p>
<p className="text-4xl font-bold">+312%</p>

</motion.div>

</motion.div>

</div>

</section>



{/* AI INTELLIGENCE SECTION */}

<motion.section
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
className="py-32 text-center"
>

<h2 className="text-5xl font-bold mb-6">
AI Powered Real Estate Intelligence
</h2>

<p className="opacity-70 max-w-2xl mx-auto">
Automate leads, track buyers, visualize properties and close deals faster
</p>

</motion.section>



{/* SERVICES GRID */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<div className="grid md:grid-cols-3 gap-8">

{[
{
title:"Lead Generation",
icon:"trending_up",
desc:"AI powered lead capture and qualification"
},
{
title:"CRM Automation",
icon:"hub",
desc:"Track buyers and manage property lifecycle"
},
{
title:"Property Visualization",
icon:"apartment",
desc:"3D renders and immersive walkthrough"
},
{
title:"Landing Pages",
icon:"web",
desc:"High converting property landing pages"
},
{
title:"WhatsApp Automation",
icon:"forum",
desc:"Instant lead response automation"
},
{
title:"Sales Automation",
icon:"bolt",
desc:"Auto followup and closing system"
}
].map((item,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
whileHover={{y:-8}}
className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 transition-all"
>

<span className="material-symbols-outlined text-4xl text-primary mb-4">
{item.icon}
</span>

<h3 className="text-2xl font-bold mb-3">
{item.title}
</h3>

<p className="opacity-70">
{item.desc}
</p>

</motion.div>
))}

</div>

</section>



{/* VISUAL IMMERSION */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center font-bold mb-20">
Visual Property Experience
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"https://images.unsplash.com/photo-1600585154340-be6161a56a0",
"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
].map((img,i)=>(
<motion.div
key={i}
whileHover={{scale:1.05}}
className="rounded-3xl overflow-hidden"
>

<img
src={img}
className="h-[400px] w-full object-cover"
/>

</motion.div>
))}

</div>

</section>



{/* SALES AUTOMATION */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
>

<h2 className="text-5xl font-bold mb-6">
Sales Automation
</h2>

<p className="opacity-70 mb-6">
AI followups, lead nurturing and auto closing pipelines
</p>

<ul className="space-y-4">

<li>✓ Lead Tracking</li>
<li>✓ AI Followups</li>
<li>✓ Booking Automation</li>
<li>✓ Smart Notifications</li>

</ul>

</motion.div>


<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
className="rounded-3xl shadow-2xl"
src="https://images.unsplash.com/photo-1551281044-8d8c7c2c9f9d"
/>

</div>

</section>



{/* FINAL CTA */}

<section className="text-center py-32">

<h2 className="text-6xl font-bold mb-8">
Ready to Sync ?
</h2>

<p className="opacity-70 mb-10">
Build your AI powered Real Estate Engine
</p>

<motion.button
whileHover={{scale:1.05}}
className="px-12 py-5 rounded-2xl bg-gradient-to-r from-primary to-tertiary font-bold"
>

Book Real Estate Demo

</motion.button>

</section>



</main>
);
}