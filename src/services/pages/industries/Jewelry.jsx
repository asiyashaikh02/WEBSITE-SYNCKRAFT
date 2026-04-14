import React from 'react';
import { motion } from 'framer-motion';

export default function Jewelry() {
  return (
<>
<main className="pt-24 overflow-hidden">


{/* HERO */}

<section className="relative px-8 py-28 overflow-hidden">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<div className="inline-flex px-4 py-1 rounded-full bg-primary/10 mb-6">
Luxury Jewellery Intelligence
</div>

<h1 className="text-6xl font-bold mb-6">
Jewellery <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg opacity-70 mb-8">
3D visualization, virtual try-on and AI sales automation 
for modern jewellery brands.
</p>

<div className="flex gap-4">

<motion.button
whileHover={{scale:1.05}}
className="px-8 py-4 bg-primary rounded-xl font-bold"
>
Book Demo
</motion.button>

<motion.button
whileHover={{scale:1.05}}
className="px-8 py-4 border border-outline rounded-xl"
>
View Ecosystem
</motion.button>

</div>

</motion.div>


{/* Floating Jewelry */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
className="relative"
>

<motion.img
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 p-6 bg-surface-container-high rounded-2xl">
<p className="text-xs">Conversion</p>
<p className="text-3xl font-bold">+192%</p>
</div>

</motion.div>

</div>

</section>



{/* 3D Visualization */}

<motion.section
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="px-8 py-24 bg-surface-container-low"
>

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-12">
3D Jewellery Visualization
</h2>

<img
src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
className="rounded-3xl shadow-2xl"
/>

</div>

</motion.section>



{/* Features */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"3D Jewellery",
icon:"diamond",
desc:"Photorealistic jewellery rendering"
},
{
title:"Virtual Try-On",
icon:"face",
desc:"Try jewellery using AR"
},
{
title:"AI Sales",
icon:"insights",
desc:"Lead tracking and automation"
}
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
whileHover={{y:-8}}
className="p-8 rounded-2xl bg-surface-container-low"
>

<span className="material-symbols-outlined text-4xl text-primary mb-4">
{item.icon}
</span>

<h3 className="text-xl font-bold mb-3">
{item.title}
</h3>

<p className="opacity-70">
{item.desc}
</p>

</motion.div>

))}

</div>

</section>



{/* CTA */}

<section className="text-center py-32">

<h2 className="text-5xl font-bold mb-8">
Build Your Jewellery OS
</h2>

<motion.button
whileHover={{scale:1.05}}
className="px-12 py-5 bg-primary rounded-2xl font-bold"
>
Book Demo
</motion.button>

</section>



</main>
</>
  );
}