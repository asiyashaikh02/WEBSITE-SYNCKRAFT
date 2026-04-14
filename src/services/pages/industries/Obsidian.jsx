import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Obsidian() {
  return (
    <>

{/* Futuristic Hero */}

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
Synckraft Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Obsidian <span className="text-primary">Core</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
The universal AI command center powering every Synckraft system.
Connect industries, automate workflows and build your enterprise brain.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Explore Obsidian
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Architecture
</button>

</div>

</motion.div>



{/* AI Brain Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-15,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">AI Automation</p>
<p className="text-3xl font-bold">+340%</p>
</div>

</motion.div>

</div>

</section>



{/* AI Architecture */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Enterprise AI Architecture
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Connect industries, workflows and automation into one intelligence layer
</p>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
className="rounded-3xl overflow-hidden shadow-2xl"
>

<img
src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
className="w-full"
/>

</motion.div>

</div>

</section>



{/* Core Capabilities */}

<section className="px-8 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

{[
{
title:"Unified Intelligence",
icon:"hub",
desc:"Connect all Synckraft systems"
},
{
title:"AI Automation",
icon:"smart_toy",
desc:"Automate workflows with AI agents"
},
{
title:"Predictive Insights",
icon:"monitoring",
desc:"Enterprise predictive analytics"
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



{/* Original Template */}

<IndustryTemplate
title="Obsidian Core"
subtitle="Universal AI Command Center"
description="The absolute peak of AI integration. Obsidian connects disparate industry silos into one unified predictive enterprise system."
features={[
{
title: "Global Brain",
description: "Centralized neural networks training on all your company data.",
icon: "hub"
},
{
title: "Automated Execution",
description: "Agents capable of performing heavy administrative tasks.",
icon: "smart_toy"
},
{
title:"Predictive Intelligence",
description:"Forecast business decisions",
icon:"monitoring"
},
{
title:"Cross Industry Sync",
description:"Connect all industries",
icon:"sync"
},
{
title:"AI Workflow Engine",
description:"Automated process orchestration",
icon:"auto_mode"
},
{
title:"Enterprise Analytics",
description:"Real time insights",
icon:"insights"
}
]}

/>

</>
  );
}