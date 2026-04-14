// import React from 'react';
import { motion } from 'framer-motion';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Automobile() {
  return (
    <>

{/* Premium Hero Section */}

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
Automobile Intelligence
</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
Automobile <span className="text-primary">Operating System</span>
</h1>

<p className="text-lg text-on-surface-variant leading-relaxed">
Digitize dealership operations, automate service reminders, and create 
immersive vehicle buying experiences powered by Synckraft AI.
</p>

<div className="flex gap-4 pt-4">

<button className="px-8 py-4 bg-primary rounded-xl font-bold hover:scale-105 transition">
Book Demo
</button>

<button className="px-8 py-4 border border-outline-variant rounded-xl hover:bg-surface-container">
View Ecosystem
</button>

</div>

</motion.div>


{/* Animated Automobile Visual */}

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
className="relative"
>

<motion.img
animate={{y:[0,-20,0]}}
transition={{duration:6,repeat:Infinity}}
src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
className="rounded-3xl shadow-2xl"
/>

<div className="absolute bottom-6 left-6 bg-surface-container-high/80 backdrop-blur-lg p-6 rounded-2xl">
<p className="text-xs uppercase opacity-70">Sales Growth</p>
<p className="text-3xl font-bold">+287%</p>
</div>

</motion.div>

</div>

</section>



{/* Dealership Dashboard Section */}

<section className="px-8 py-24 bg-surface-container-low">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Dealership Intelligence Dashboard
</h2>

<p className="text-on-surface-variant max-w-2xl mx-auto mb-16">
Track leads, inventory, servicing and financing from one unified platform
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



{/* Use Existing Industry Template */}

<IndustryTemplate
title="Automobile OS"
subtitle="Vehicle & Dealership Management"
description="Streamline dealership operations, automate customer servicing reminders, and digitize the showroom experience with cutting edge AR vehicle visualization and automated lead follow-ups. Centralize your auto operations into one system."
features={[
{
title: "Virtual Showrooms",
description: "High-fidelity 3D visualization allowing customers to configure vehicle trims, paint, and accessories in AR before arriving at the dealership.",
icon: "directions_car"
},
{
title: "Dealership CRM",
description: "End-to-end sales pipelines tracking from first test drive to final auto financing and vehicle delivery.",
icon: "handshake"
},
{
title: "Servicing Automation",
description: "Predictive maintenance scheduling and automated customer text reminders synced flawlessly with your parts inventory.",
icon: "build"
},
{
title: "Fleet Inventory Sync",
description: "Real-time synchronization across manufacturer allocation, on-lot inventory, and digital marketplace listings.",
icon: "inventory_2"
},
{
title: "Digital Financing",
description: "Secure, automated credit application workflows bridging the gap between sales floors and external lending institutions.",
icon: "account_balance"
},
{
title: "Aftermarket Upselling",
description: "Algorithmic recommendations for warranty extensions and accessories based on primary vehicle profiles.",
icon: "workspace_premium"
}
]}

/>

</>
  );
}