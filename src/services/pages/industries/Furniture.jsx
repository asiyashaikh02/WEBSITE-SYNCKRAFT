// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Furniture() {
//   return (
// <>
// <main className="pt-24 overflow-hidden">

// {/* HERO */}

// <section className="relative px-8 py-32 overflow-hidden">

// <motion.div
// initial={{opacity:0}}
// animate={{opacity:1}}
// className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
// >

// <motion.div
// initial={{opacity:0,y:40}}
// animate={{opacity:1,y:0}}
// transition={{duration:0.8}}
// >

// <span className="text-sm font-bold uppercase text-primary">
// Furniture Intelligence
// </span>

// <h1 className="text-6xl font-bold mt-4 mb-6">
// Furniture <span className="text-primary">Operating System</span>
// </h1>

// <p className="text-lg opacity-70 mb-8">
// 3D visualization, AR placement and intelligent commerce
// for next generation furniture brands.
// </p>

// <div className="flex gap-4">

// <motion.button
// whileHover={{scale:1.05}}
// className="px-8 py-4 bg-primary rounded-xl font-bold"
// >
// Book Demo
// </motion.button>

// <motion.button
// whileHover={{scale:1.05}}
// className="px-8 py-4 border border-outline-variant rounded-xl"
// >
// View Ecosystem
// </motion.button>

// </div>

// </motion.div>



// {/* Floating Visual */}

// <motion.div
// initial={{opacity:0,scale:0.9}}
// animate={{opacity:1,scale:1}}
// className="relative"
// >

// <motion.img
// animate={{y:[0,-20,0]}}
// transition={{duration:6,repeat:Infinity}}
// src="https://images.unsplash.com/photo-1493666438817-866a91353ca9"
// className="rounded-3xl shadow-2xl"
// />

// <div className="absolute bottom-6 left-6 p-6 bg-surface-container-high rounded-2xl">
// <p className="text-xs">Conversion</p>
// <p className="text-3xl font-bold">+176%</p>
// </div>

// </motion.div>

// </motion.div>

// </section>



// {/* 3D Visualization */}

// <motion.section
// initial={{opacity:0,y:40}}
// whileInView={{opacity:1,y:0}}
// className="px-8 py-24 bg-surface-container-low"
// >

// <div className="max-w-7xl mx-auto text-center">

// <h2 className="text-4xl font-bold mb-12">
// 3D Furniture Visualization
// </h2>

// <img
// src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
// className="rounded-3xl shadow-2xl"
// />

// </div>

// </motion.section>



// {/* Features */}

// <section className="px-8 py-24">

// <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

// {[
// {
// title:"3D Products",
// icon:"view_in_ar",
// desc:"Photorealistic furniture visualization"
// },
// {
// title:"AR Placement",
// icon:"vrpano",
// desc:"Place furniture in real space"
// },
// {
// title:"Inventory AI",
// icon:"inventory",
// desc:"Smart inventory tracking"
// }
// ].map((item,i)=>(

// <motion.div
// key={i}
// initial={{opacity:0,y:40}}
// whileInView={{opacity:1,y:0}}
// whileHover={{y:-8}}
// className="p-8 rounded-2xl bg-surface-container-low"
// >

// <span className="material-symbols-outlined text-4xl text-primary mb-4">
// {item.icon}
// </span>

// <h3 className="text-xl font-bold mb-3">
// {item.title}
// </h3>

// <p className="opacity-70">
// {item.desc}
// </p>

// </motion.div>

// ))}

// </div>

// </section>



// {/* CTA */}

// <section className="text-center py-32">

// <h2 className="text-5xl font-bold mb-8">
// Build Your Furniture OS
// </h2>

// <motion.button
// whileHover={{scale:1.05}}
// className="px-12 py-5 bg-primary rounded-2xl font-bold"
// >
// Book Demo
// </motion.button>

// </section>


// </main>
// </>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';

export default function Furniture() {
  return (
<>
<main className="pt-24 overflow-hidden">

{/* HERO */}

<section className="relative px-8 py-32 overflow-hidden">

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<span className="text-sm font-bold uppercase text-primary">
Furniture Intelligence
</span>

<h1 className="text-6xl font-bold mt-4 mb-6">
Furniture <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg opacity-70 mb-8">
3D visualization, AR placement and intelligent commerce
for next generation furniture brands.
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
className="px-8 py-4 border border-outline-variant rounded-xl"
>
View Ecosystem
</motion.button>

</div>

</motion.div>



{/* Floating Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
className="relative"
>

<motion.img
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1493666438817-866a91353ca9"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 p-6 bg-surface-container-high rounded-2xl">
<p className="text-xs">Conversion</p>
<p className="text-3xl font-bold">+176%</p>
</div>

</motion.div>

</motion.div>

</section>



{/* 3D Visualization */}

<motion.section
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="px-8 py-24 bg-surface-container-low"
>

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-12">
3D Furniture Visualization
</h2>

<img
src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
className="rounded-3xl shadow-2xl"
/>

</div>

</motion.section>



{/* Features */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"3D Products",
icon:"view_in_ar",
desc:"Photorealistic furniture visualization"
},
{
title:"AR Placement",
icon:"vrpano",
desc:"Place furniture in real space"
},
{
title:"Inventory AI",
icon:"inventory",
desc:"Smart inventory tracking"
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
Build Your Furniture OS
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