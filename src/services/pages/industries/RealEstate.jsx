import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function RealEstate() {
  return (
    <main className="pt-24 overflow-hidden">


{/* HERO */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="space-y-8"
>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
Future Real Estate Platform
</div>

<h1 className="text-6xl md:text-8xl font-extrabold leading-[1.05]">
Real Estate <br/>

<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
Engineered
</span>

</h1>

<p className="text-xl opacity-70 max-w-xl">
Scale your real estate business with AI powered automation and smart sales pipelines.
</p>

<div className="flex gap-4">

<motion.button
whileHover={{scale:1.05}}
className="bg-gradient-to-r from-primary to-tertiary px-8 py-4 rounded-xl font-bold"
>

Book Demo

</motion.button>

</div>

</motion.div>


<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
className="relative"
>

<motion.img
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
className="rounded-3xl shadow-2xl"
/>

</motion.div>

</div>

</section>



{/* STATS */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<div className="grid md:grid-cols-4 gap-8">

{[
{label:"Leads Generated",value:320},
{label:"Conversion Boost",value:87},
{label:"Automation",value:240},
{label:"Revenue Growth",value:180}
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="p-8 rounded-2xl bg-surface-container-low text-center"
>

<h3 className="text-4xl font-bold text-primary">
<CountUp end={item.value} duration={2}/>%
</h3>

<p className="opacity-70">
{item.label}
</p>

</motion.div>

))}

</div>

</section>



{/* SERVICES */}

<section className="max-w-screen-2xl mx-auto px-8 mb-32">

<div className="grid md:grid-cols-3 gap-8">

{[
"Lead Generation",
"CRM Automation",
"Property Visualization",
"Landing Pages",
"WhatsApp Automation",
"Sales Automation"
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
whileHover={{y:-8}}
className="p-8 rounded-2xl bg-surface-container-low"
>

<h3 className="text-xl font-bold">
{item}
</h3>

</motion.div>

))}

</div>

</section>



{/* SALES FUNNEL */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Sales Funnel
</h2>

<div className="space-y-6">

{[
"Lead Capture",
"Lead Qualification",
"Site Visit",
"Negotiation",
"Booking"
].map((step,i)=>(

<motion.div
key={i}
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
className="p-6 rounded-xl bg-surface-container-low"
>

{step}

</motion.div>

))}

</div>

</section>



{/* PROPERTY VISUAL */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Smart Property Dashboard
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[1,2,3].map((i)=>(
<motion.div
key={i}
whileHover={{scale:1.05}}
className="rounded-3xl overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1600585154340-be6161a56a0"
className="h-[350px] w-full object-cover"
/>

</motion.div>
))}

</div>

</section>



{/* CTA */}

<section className="text-center py-32">

<h2 className="text-6xl font-bold mb-8">
Build Your Real Estate OS
</h2>

<motion.button
whileHover={{scale:1.05}}
className="px-12 py-6 bg-primary rounded-2xl font-bold"
>

Book Demo

</motion.button>

</section>



</main>
  );
}