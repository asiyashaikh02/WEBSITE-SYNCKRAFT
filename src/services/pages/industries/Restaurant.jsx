import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Restaurant() {
return (

<main className="pt-24 overflow-hidden">


{/* HERO */}

<section className="max-w-screen-2xl mx-auto px-8 py-24">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="space-y-8"
>

<div className="px-4 py-1 bg-primary/10 rounded-full w-fit">
Restaurant Intelligence
</div>

<h1 className="text-6xl font-bold">
Restaurant <span className="text-primary">Operating System</span>
</h1>

<p className="text-xl opacity-70">
Automate ordering, kitchen workflows and customer engagement
with AI powered restaurant OS.
</p>

<div className="flex gap-4">

<motion.button
whileHover={{scale:1.05}}
className="px-8 py-4 bg-primary rounded-xl"
>
Book Demo
</motion.button>

</div>

</motion.div>


<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
className="rounded-3xl shadow-2xl"
/>

</motion.div>

</div>

</section>



{/* STATS */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<div className="grid md:grid-cols-4 gap-8">

{[
{label:"Orders Processed",value:340},
{label:"Revenue Growth",value:180},
{label:"Automation Boost",value:220},
{label:"Customer Retention",value:92}
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="p-8 rounded-2xl bg-surface-container-low text-center"
>

<h3 className="text-4xl text-primary font-bold">
<CountUp end={item.value}/>%
</h3>

<p className="opacity-70">
{item.label}
</p>

</motion.div>

))}

</div>

</section>



{/* DIGITAL MENU */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Smart Digital Menu
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"QR Menu",
"3D Food Preview",
"Instant Ordering"
].map((item,i)=>(

<motion.div
key={i}
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



{/* ANALYTICS */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Restaurant Analytics
</h2>

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
className="rounded-3xl overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1551281044-8d8c7c2c9f9d"
className="w-full"
/>

</motion.div>

</section>



{/* STAFF AUTOMATION */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Kitchen Automation
</h2>

<div className="space-y-6">

{[
"Order Routing",
"Kitchen Display",
"Packing Automation"
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



{/* CTA */}

<section className="text-center py-32">

<h2 className="text-6xl font-bold mb-8">
Build Your Restaurant OS
</h2>

<motion.button
whileHover={{scale:1.05}}
className="px-12 py-6 bg-primary rounded-2xl"
>

Book Demo

</motion.button>

</section>



</main>

);
}