"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, 6));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Showcase Section */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500">
            IMAGINE YOUR BUSINESS, <span className="block text-zinc-600">DIGITALLY.</span>
          </h2>
        </div>

        {/* Abstract floating screens parallax */}
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
          <motion.div 
            initial={{ rotateX: 20, y: 100, opacity: 0 }}
            whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute z-30 w-full max-w-3xl aspect-[16/9] bg-[#0F1115] rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
             <div className="w-full h-12 bg-[#1A1D23] border-b border-white/10 flex items-center px-6">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/50"/><div className="w-3 h-3 rounded-full bg-yellow-500/50"/><div className="w-3 h-3 rounded-full bg-green-500/50"/></div>
             </div>
             <div className="p-8 grid grid-cols-3 gap-6 h-full">
                <div className="col-span-2 space-y-6">
                  <div className="w-1/2 h-8 bg-white/5 rounded" />
                  <div className="w-full h-48 bg-white/5 rounded-xl border border-white/5" />
                  <div className="w-full h-24 bg-white/5 rounded-xl border border-white/5" />
                </div>
                <div className="space-y-6">
                  <div className="w-full h-full bg-white/5 rounded-xl border border-white/5" />
                </div>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ rotateX: 30, y: 200, x: -200, opacity: 0 }}
            whileInView={{ rotateX: 10, y: 50, x: -100, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute z-20 w-full max-w-xl aspect-[16/9] bg-[#0A0B0E] rounded-2xl border border-white/10"
          />

          <motion.div 
            initial={{ rotateX: 30, y: 200, x: 200, opacity: 0 }}
            whileInView={{ rotateX: 10, y: 50, x: 100, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute z-10 w-full max-w-xl aspect-[16/9] bg-[#0A0B0E] rounded-2xl border border-white/10"
          />
        </div>
      </section>

      {/* Targets & Capabilities text block */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest mb-6">WHO WE BUILD FOR</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["STARTUPS", "SMALL BUSINESSES", "ENTERPRISES", "RETAILERS", "SERVICE BUSINESSES", "ENTREPRENEURS", "ORGANIZATIONS"].map(t => (
                    <span key={t} className="px-4 py-2 rounded-md border border-white/10 text-zinc-200 text-xs font-mono bg-white/5">{t}</span>
                  ))}
                </div>
                <p className="text-lg text-zinc-400 font-mono">
                  Whether you&apos;re starting from zero or upgrading an existing system, we can build the technology around your business.
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest mb-6">TECHNICAL CAPABILITIES</h3>
                <div className="flex flex-wrap gap-2">
                  {["Frontend Development", "Backend Development", "Mobile Development", "API Development", "Database Architecture", "Cloud Deployment", "AI Integration", "Payment Integration", "Authentication", "Real-Time Systems", "Admin Panels", "Business Automation"].map(t => (
                    <span key={t} className="text-zinc-300 text-sm font-medium">
                      {t} <span className="text-zinc-500/50 mx-2">/</span>
                    </span>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA & Form Section */}
      <section id="contact" className="py-32 relative overflow-hidden border-t border-white/5">
        {/* Glow effect */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] bg-blue-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-16">
                <h2 className="font-orbitron text-4xl md:text-6xl font-bold tracking-tight text-zinc-200 mb-6 leading-tight">
                  YOUR NEXT DIGITAL PRODUCT <br/> STARTS WITH A CONVERSATION.
                </h2>
                <p className="text-lg md:text-xl text-zinc-400 font-mono">
                  Tell us what you want to build. We&apos;ll help turn the idea into a real application.
                </p>
              </div>

              {/* Multi-step Form */}
              <div className="bg-[#0F1115] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors ${i <= step ? 'bg-white' : 'bg-white/10'}`} />
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="min-h-[250px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step === 1 && (
                        <div className="space-y-4">
                          <label className="text-xl font-medium text-white block">What is your name?</label>
                          <input required type="text" placeholder="John Doe" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-2xl text-white outline-none transition-colors" />
                        </div>
                      )}
                      
                      {step === 2 && (
                        <div className="space-y-4">
                          <label className="text-xl font-medium text-white block">What is your company or business name?</label>
                          <input required type="text" placeholder="Acme Corp" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-2xl text-white outline-none transition-colors" />
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6">
                          <label className="text-xl font-medium text-white block">What do you want to build?</label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {["Website", "E-Commerce", "Mobile App", "Web Application", "SaaS", "CRM", "AI Application", "Other"].map(opt => (
                              <label key={opt} className="flex items-center gap-2 p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
                                <input type="radio" name="project_type" value={opt} className="w-4 h-4 accent-white" />
                                <span className="text-sm text-zinc-300">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 4 && (
                        <div className="space-y-4">
                          <label className="text-xl font-medium text-white block">Tell us a bit about your project.</label>
                          <textarea required placeholder="We need a platform to..." rows={3} className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-xl text-white outline-none transition-colors resize-none" />
                        </div>
                      )}

                      {step === 5 && (
                        <div className="space-y-6">
                          <label className="text-xl font-medium text-white block">What is your budget range?</label>
                          <div className="flex flex-col gap-3">
                            {["<$10k", "$10k - $25k", "$25k - $50k", "$50k+"].map(opt => (
                              <label key={opt} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
                                <input type="radio" name="budget" value={opt} className="w-5 h-5 accent-white" />
                                <span className="text-lg text-zinc-300">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 6 && (
                        <div className="space-y-4">
                          <label className="text-xl font-medium text-white block">How can we reach you?</label>
                          <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-2xl text-white outline-none transition-colors mb-4" />
                          <input type="tel" placeholder="Phone Number (Optional)" className="w-full bg-transparent border-b-2 border-white/20 focus:border-white py-4 text-2xl text-white outline-none transition-colors" />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center justify-between mt-12">
                    {step > 1 ? (
                      <button type="button" onClick={handlePrev} className="text-gray-500 hover:text-white font-bold transition-colors">
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    
                    {step < 6 ? (
                      <button type="button" onClick={handleNext} className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/10 text-[#F9FAFB] font-bold rounded-md hover:bg-white/20 transition-all text-sm">
                        NEXT <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button type="submit" className="flex items-center justify-center gap-2 px-6 h-10 bg-white text-black font-medium rounded-md hover:bg-zinc-200 shadow transition-all text-sm group">
                        SUBMIT PROJECT REQUEST <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-[#0F1115] rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-orbitron text-3xl font-bold text-zinc-200 mb-4">Thanks. We&apos;ve received your project idea.</h3>
              <p className="text-zinc-400 font-mono text-sm">Our team will review your request and get back to you shortly.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
