import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import IndustryTemplate from "../../components/IndustryTemplate";

export default function Supermarket() {
  return (
    <>

{/* Hero */}

<section className="pt-24 px-8 pb-20 overflow-hidden">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="space-y-6"
>

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
AI Retail Intelligence
</div>

<h1 className="text-5xl md:text-7xl font-extrabold">
Supermarket <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg opacity-70">
Automate supply chain, manage inventory and optimize
supermarket operations using AI powered systems.
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
src="https://images.unsplash.com/photo-1542838132-92c53300491e"
className="rounded-3xl shadow-2xl"
/>

</motion.div>

</div>

</section>



{/* Stats */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<div className="grid md:grid-cols-4 gap-8">

{[
{label:"Inventory Accuracy",value:96},
{label:"Waste Reduction",value:38},
{label:"Sales Growth",value:120},
{label:"Automation",value:210}
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



{/* Modules */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Supermarket Intelligence
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"Smart Shelf Tracking",
"Perishables Management",
"Supplier Automation",
"POS Integration",
"Multi Store Sync",
"Customer Analytics"
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



{/* Analytics */}

<section className="max-w-7xl mx-auto px-8 mb-32">

<h2 className="text-5xl text-center mb-20">
Supermarket Dashboard
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



{/* Template */}

<IndustryTemplate
title="Supermarket AI"
subtitle="Advanced Retail Orchestration"
description="Automate grocery supply chains, manage perishables and streamline checkout with AI."
features={[
{
title: "Smart Shelf Tracking",
description: "Automated low stock alerts",
icon: "kitchen"
},
{
title: "Perishables AI",
description: "Reduce food waste",
icon: "local_florist"
},
{
title:"Supplier Sync",
description:"Vendor automation",
icon:"sync"
},
{
title:"Demand Forecasting",
description:"AI demand prediction",
icon:"monitoring"
},
{
title:"Checkout Automation",
description:"Fast checkout",
icon:"point_of_sale"
},
{
title:"Analytics Dashboard",
description:"Retail insights",
icon:"analytics"
}
]}

/>

</>
  );
}