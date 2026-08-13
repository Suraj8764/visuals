"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: "automotive",
    name: "AUTOMOTIVE",
    desc: "We build digital platforms for automobile businesses.",
    features: ["Auto Parts Store", "Product Catalogue", "Dealer Portal", "Inventory Management", "Service Booking", "Customer Portal", "Admin Dashboard"],
    color: "from-blue-600/20 to-blue-900/20",
    accent: "bg-blue-500"
  },
  {
    id: "healthcare",
    name: "HEALTHCARE",
    desc: "Secure, compliant systems for medical professionals and patients.",
    features: ["Patient Portals", "Telemedicine Video", "EMR/EHR Systems", "Appointment Booking", "Prescription Tracking", "Clinic Dashboard", "Billing Automation"],
    color: "from-emerald-600/20 to-emerald-900/20",
    accent: "bg-emerald-500"
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    desc: "High-conversion storefronts and robust backend operations.",
    features: ["Custom Storefronts", "Multi-vendor Marketplaces", "Order Management", "Payment Gateways", "Inventory Sync", "Analytics Dashboard", "Customer Loyalty"],
    color: "from-purple-600/20 to-purple-900/20",
    accent: "bg-purple-500"
  },
  {
    id: "realestate",
    name: "REAL ESTATE",
    desc: "Platforms to manage properties, agents, and buyers.",
    features: ["Property Listings", "Virtual Tours", "Agent CRM", "Lead Management", "Tenant Portals", "Document Signing", "Payment Collection"],
    color: "from-orange-600/20 to-orange-900/20",
    accent: "bg-orange-500"
  },
  {
    id: "finance",
    name: "FINANCE",
    desc: "Fintech solutions built for security and scale.",
    features: ["Investment Dashboards", "Loan Origination", "Payment Processing", "Banking Portals", "Financial Reporting", "KYC Workflows", "Admin Controls"],
    color: "from-yellow-600/20 to-yellow-900/20",
    accent: "bg-yellow-500"
  },
];

export function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeIndustry = industries.find(i => i.id === activeId)!;

  return (
    <section id="industries" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
            YOUR INDUSTRY. YOUR APPLICATION.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-mono max-w-2xl">
            We adapt our technology stack to fit the exact requirements and regulations of your specific market.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sidebar list */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveId(industry.id)}
                className={`text-left px-6 py-4 rounded-md transition-all duration-300 ${
                  activeId === industry.id 
                    ? "bg-white/10 text-zinc-200 font-bold" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-lg tracking-tight">{industry.name}</span>
                  {activeId === industry.id && (
                    <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  )}
                </div>
              </button>
            ))}
            <div className="px-6 py-4 mt-4 border-t border-white/5 text-sm text-zinc-500">
              + MORE INDUSTRIES SUPPORTED
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Visual Representation */}
                <div className={`w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl bg-gradient-to-br ${activeIndustry.color} border border-white/10 p-8 flex flex-col relative overflow-hidden mb-10`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-3 h-3 rounded-full ${activeIndustry.accent} shadow-[0_0_15px_currentColor]`} />
                      <span className="text-sm font-mono text-white/70">{activeIndustry.name} PLATFORM</span>
                    </div>

                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 auto-rows-max">
                      {activeIndustry.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 + 0.2 }}
                          className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-md whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-zinc-200 mb-4">
                    {activeIndustry.desc}
                  </h3>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 mt-6 px-6 h-10 bg-white text-black font-medium rounded-md hover:bg-zinc-200 shadow transition-all text-sm group">
                    BUILD MY {activeIndustry.name} PLATFORM
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
