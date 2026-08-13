"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const processSteps = [
  { num: "01", title: "IDEA", desc: "Tell us what you want to build." },
  { num: "02", title: "DISCOVERY", desc: "We understand your business, users and requirements." },
  { num: "03", title: "DESIGN", desc: "We transform the idea into a modern user experience." },
  { num: "04", title: "DEVELOPMENT", desc: "Frontend, backend, database, APIs and integrations." },
  { num: "05", title: "TESTING", desc: "Performance, security and real-world testing." },
  { num: "06", title: "DEPLOYMENT", desc: "Launch your product to production." },
  { num: "07", title: "SUPPORT", desc: "Continuous improvements, maintenance and scaling." },
];

const technologies = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"], pos: "top-10 left-10 md:top-20 md:left-20" },
  { category: "Backend", items: ["Node.js", "Express.js", "FastAPI"], pos: "top-10 right-10 md:top-20 md:right-20" },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis"], pos: "bottom-10 left-10 md:bottom-20 md:left-20" },
  { category: "Cloud & AI", items: ["AWS", "Vercel", "Docker", "OpenAI", "Gemini"], pos: "bottom-10 right-10 md:bottom-20 md:right-20" },
];

const architecture = [
  "CUSTOMER APP",
  "WEB APPLICATION",
  "BACKEND API",
  "DATABASE",
  "ADMIN PANEL",
  "ANALYTICS",
  "PAYMENTS",
  "AI / AUTOMATION",
  "CLOUD INFRASTRUCTURE"
];

export function ProcessAndTech() {
  return (
    <>
      {/* Process Section */}
      <section id="process" className="py-32 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-20 text-center">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 mb-6">
              FROM IDEA TO PRODUCT.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 -translate-x-1/2" />
            
            <div className="flex flex-col gap-12">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block flex-1" />
                  
                  {/* Center Node */}
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-sm font-mono text-zinc-300">
                    {step.num}
                  </div>

                  <div className={`flex-1 md:px-12 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="font-orbitron text-xl font-bold text-zinc-200 mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm font-mono">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
              POWERED BY MODERN TECHNOLOGY.
            </h2>
          </div>

          <div className="relative w-full aspect-square md:aspect-[2/1] max-w-5xl mx-auto flex items-center justify-center">
            {/* Center Node */}
            <motion.div 
              animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.1)", "0 0 0px rgba(255,255,255,0)"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-20 w-48 h-48 rounded-full bg-black border border-white/20 flex items-center justify-center flex-col gap-2 shadow-lg"
            >
              <span className="font-orbitron text-zinc-200 font-bold tracking-tight text-center px-4 leading-tight">YOUR<br/>APPLICATION</span>
            </motion.div>

            {/* Orbiting Tech Groups */}
            {technologies.map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`absolute z-10 ${group.pos} flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md`}
              >
                <h4 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">{group.category}</h4>
                <div className="flex flex-col gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-sm text-zinc-300 font-medium">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 text-white" xmlns="http://www.w3.org/2000/svg">
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="mb-20">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
              YOUR BUSINESS NEEDS. ONE PLATFORM.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-mono">Everything working seamlessly together.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            {architecture.map((layer, i) => (
              <div key={layer} className="w-full max-w-md">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full py-4 px-6 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-medium hover:bg-white hover:text-black hover:border-white shadow hover:scale-105 transition-all cursor-pointer font-mono text-sm"
                >
                  {layer}
                </motion.div>
                {i < architecture.length - 1 && (
                  <div className="w-px h-6 bg-white/10 mx-auto my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
