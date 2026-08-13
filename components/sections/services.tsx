"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe, ShoppingCart, Layout, Smartphone, Cloud, Key, Users, Brain, Calendar, Zap } from "lucide-react";

const services = [
  { id: "01", title: "Business Websites", desc: "High-performance, SEO-optimized marketing sites.", icon: <Globe className="w-6 h-6" /> },
  { id: "02", title: "E-Commerce Platforms", desc: "Custom storefronts, carts, and payment integrations.", icon: <ShoppingCart className="w-6 h-6" /> },
  { id: "03", title: "Custom Web Applications", desc: "Complex business logic in browser-based apps.", icon: <Layout className="w-6 h-6" /> },
  { id: "04", title: "Mobile Applications", desc: "Native-feeling apps for iOS and Android.", icon: <Smartphone className="w-6 h-6" /> },
  { id: "05", title: "SaaS Products", desc: "Multi-tenant architectures and subscription billing.", icon: <Cloud className="w-6 h-6" /> },
  { id: "06", title: "Admin Dashboards", desc: "Internal tools to manage your data and operations.", icon: <Key className="w-6 h-6" /> },
  { id: "07", title: "CRM & ERP Systems", desc: "Bespoke systems to run your entire enterprise.", icon: <Users className="w-6 h-6" /> },
  { id: "08", title: "AI-Powered Applications", desc: "LLM integrations, computer vision, and automation.", icon: <Brain className="w-6 h-6" /> },
  { id: "09", title: "Booking & Management", desc: "Scheduling, inventory, and resource allocation.", icon: <Calendar className="w-6 h-6" /> },
  { id: "10", title: "Automation Solutions", desc: "Connecting APIs to eliminate manual work.", icon: <Zap className="w-6 h-6" /> },
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
            WE BUILD MORE THAN WEBSITES.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-mono max-w-2xl">
            Complete digital products designed around your business. We don&apos;t just use templates; we engineer scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    {service.icon}
                  </div>
                  <span className="text-sm font-mono text-zinc-600 group-hover:text-zinc-300 transition-colors">{service.id}</span>
                </div>
                <h3 className="font-orbitron text-xl font-bold text-zinc-200 mb-3">{service.title}</h3>
                <p className="text-zinc-400 font-mono text-sm leading-relaxed">{service.desc}</p>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                EXPLORE SOLUTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
