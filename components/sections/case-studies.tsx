"use client";

import { motion } from "motion/react";
import { ArrowRight, Code2, ShieldCheck, Zap, Layers, Cpu, Server } from "lucide-react";

const features = [
  { icon: <Code2 />, title: "CUSTOM-BUILT", desc: "No unnecessary features. We build around your actual business processes." },
  { icon: <Layers />, title: "SCALABLE", desc: "Cloud-native architectures designed to grow securely with your users." },
  { icon: <Layout />, title: "MODERN UI", desc: "Premium, accessible interfaces that customers and employees actually enjoy using." },
  { icon: <ShieldCheck />, title: "SECURE", desc: "Enterprise-grade authentication, authorization and encrypted APIs." },
  { icon: <Cpu />, title: "AI READY", desc: "Integrate Large Language Models and AI where it creates real business value." },
  { icon: <Server />, title: "PRODUCTION READY", desc: "Not just a prototype. A heavily tested, deployable real-world product." },
];

function Layout() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
}

export function CaseStudies() {
  return (
    <>
      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
              PROVEN RESULTS.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-mono max-w-2xl">
              Real applications solving real business problems.
            </p>
          </div>

          {/* Example Case Study */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row bg-[#0F1115] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Visual Side */}
            <div className="lg:w-1/2 bg-[#050505] p-8 md:p-12 relative flex items-center justify-center min-h-[400px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)] pointer-events-none" />
              
              {/* Abstract Mockup */}
              <div className="relative z-10 w-full max-w-sm rounded-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden aspect-[4/5] flex flex-col backdrop-blur-sm">
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="w-1/2 h-6 bg-white/10 rounded-md mb-4" />
                  <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/10" />
                    <div className="h-20 bg-white/5 rounded-xl border border-white/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="text-[10px] font-mono font-bold text-zinc-500 mb-4 uppercase tracking-widest">Automotive E-Commerce Platform</div>
              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-zinc-200 mb-6">MS BULLET HUB</h3>
              
              <div className="mb-8">
                <h4 className="text-zinc-200 font-bold mb-2 font-mono">The Solution</h4>
                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                  A comprehensive digital platform replacing manual operations. Features include a full product catalogue, customer portal, secure shopping cart, and a robust admin dashboard for inventory and order management with manual UPI payment workflows.
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-zinc-200 font-bold mb-4 font-mono">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded bg-white/5 text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 h-10 bg-white text-black font-medium rounded-md hover:bg-zinc-200 shadow transition-all text-sm group w-fit">
                VIEW CASE STUDY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
              BUILT AROUND YOUR BUSINESS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-zinc-300 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  {feature.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold text-zinc-200 mb-3">{feature.title}</h3>
                <p className="text-zinc-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
