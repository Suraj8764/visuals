"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowRight, Code2, Database, LayoutTemplate, Layers, Cpu, Server, Smartphone, Globe } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-1, 1], [20, 0]);
  const rotateY = useTransform(springX, [-1, 1], [-25, -5]);
  const translateX = useTransform(springX, [-1, 1], [-20, 20]);
  const translateY = useTransform(springY, [-1, 1], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex items-center pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-md bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono tracking-widest mx-auto lg:mx-0 text-start">
              <span className="w-2 h-2 bg-zinc-400 rounded-full animate-pulse"></span>
              Now accepting new projects
            </div>
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-[72px] font-bold tracking-tight leading-[1] mb-6 text-start">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">YOUR IDEA.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">OUR TECHNOLOGY.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-zinc-400 font-mono max-w-md mx-auto lg:mx-0 leading-relaxed text-start"
          >
            From business websites to complete digital platforms, we design and build powerful web, mobile and AI-powered applications for modern businesses.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4"
          >
            <a href="#contact" className="w-fit inline-flex items-center justify-center gap-2 px-6 h-10 bg-white text-black rounded-md font-medium shadow hover:bg-zinc-200 transition-all text-sm group">
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-fit inline-flex items-center justify-center gap-2 px-6 h-10 bg-black border border-white/10 hover:bg-white/5 rounded-md font-medium shadow transition-all text-sm group text-white">
              VIEW SHOWCASE
            </a>
          </motion.div>
        </div>

        {/* Floating UI Mockup */}
        <div className="flex-1 w-full relative min-h-[500px] hidden md:flex items-center justify-center perspective-[2000px]">
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
              x: translateX,
              y: translateY
            }}
          >
            {/* Main Center Dashboard */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 w-[400px] h-[500px] bg-[#0F1115] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 bg-[#1A1D23]">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <div className="flex-1 h-3 rounded-full bg-white/5 ml-2" />
                <div className="w-20 h-6 rounded-md bg-white/10 text-[10px] text-zinc-400 flex items-center justify-center font-bold">ADMIN</div>
              </div>
              {/* Body */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1 h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Globe className="w-4 h-4 text-zinc-400" /></div>
                    <div className="w-16 h-2 rounded-full bg-white/10 mt-2" />
                  </div>
                  <div className="flex-1 h-24 rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Smartphone className="w-4 h-4 text-zinc-400" /></div>
                    <div className="w-16 h-2 rounded-full bg-white/10 mt-2" />
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  <div className="w-32 h-3 rounded-full bg-white/10 mb-6" />
                  <div className="flex items-end gap-2 h-[120px] relative z-10">
                    {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Floating Card - Code */}
            <motion.div 
              animate={{ y: [10, -15, 10], x: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute z-10 -left-12 top-20 w-[240px] bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-4"
              style={{ transform: 'translateZ(-50px)' }}
            >
              <div className="text-[10px] text-gray-500 font-bold mb-3 uppercase tracking-wide">Core Stack</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-[10px]">React</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px]">Next.js</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px]">Node</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px]">AI</span>
              </div>
            </motion.div>

            {/* Right Floating Card - Database */}
            <motion.div 
              animate={{ y: [-15, 15, -15], x: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute z-30 -right-4 bottom-32 w-[220px] bg-[#111] rounded-xl border border-white/10 shadow-xl p-4 flex flex-col gap-3"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zinc-300 text-xs font-bold">✓</div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-300">Real-time Sync</div>
                  <div className="text-[8px] text-zinc-500 font-mono">Connected to Cloud</div>
                </div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-zinc-400" />
              </div>
            </motion.div>

            {/* Floating Tech Labels */}
            <FloatingLabel icon={<LayoutTemplate className="w-3 h-3"/>} text="Next.js" top="-10%" left="20%" delay={0} />
            <FloatingLabel icon={<Layers className="w-3 h-3"/>} text="TypeScript" top="10%" right="-5%" delay={1.5} />
            <FloatingLabel icon={<Server className="w-3 h-3"/>} text="Node.js" bottom="-5%" left="10%" delay={2.5} />
            <FloatingLabel icon={<Cpu className="w-3 h-3"/>} text="AI Integrations" bottom="20%" right="-15%" delay={3.5} />

          </motion.div>
        </div>

      </div>
    </section>
  );
}

function FloatingLabel({ text, icon, top, left, right, bottom, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className="absolute px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-zinc-300 flex items-center gap-2"
      style={{ top, left, right, bottom }}
    >
      {icon}
      {text}
    </motion.div>
  );
}
