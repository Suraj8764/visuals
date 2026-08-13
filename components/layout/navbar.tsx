"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-sm">
              <svg viewBox="0 0 374 313" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white rotate-180">
                <path d="M247 181L237.5 236.5L373.5 313L247 181Z" fill="currentColor"></path>
                <path d="M187.5 0L154 209L173.5 195L237.5 83L187.5 0Z" fill="currentColor"></path>
                <path d="M373.5 313L253.761 110.5L197.5 195L237.5 181L212.5 222L0 313H187.5L237.5 236.5L247 181L373.5 313Z" fill="currentColor"></path>
                <path d="M187.5 0L0 313L154 209L187.5 0Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="font-orbitron text-xl font-bold tracking-tight">VENGEANCE<span className="text-zinc-500">UI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Solutions</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Work</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-5 py-2 bg-white text-black rounded-md text-xs font-semibold hover:bg-zinc-200 shadow transition-all">
              START PROJECT
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-3xl flex flex-col px-6 py-8"
        >
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-8 mt-12 text-3xl font-medium tracking-tight">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-400 transition-colors">Solutions</a>
            <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-400 transition-colors">Industries</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-400 transition-colors">Process</a>
            <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-zinc-400 transition-colors">Work</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 group flex items-center justify-between px-6 py-4 bg-white text-black font-semibold rounded-2xl">
              Start Project
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
