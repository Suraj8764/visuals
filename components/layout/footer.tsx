import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-sm">
                <svg viewBox="0 0 374 313" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white rotate-180">
                  <path d="M247 181L237.5 236.5L373.5 313L247 181Z" fill="currentColor"></path>
                  <path d="M187.5 0L154 209L173.5 195L237.5 83L187.5 0Z" fill="currentColor"></path>
                  <path d="M373.5 313L253.761 110.5L197.5 195L237.5 181L212.5 222L0 313H187.5L237.5 236.5L247 181L373.5 313Z" fill="currentColor"></path>
                  <path d="M187.5 0L0 313L154 209L187.5 0Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="font-orbitron text-xl font-bold tracking-tight text-white">VENGEANCE<span className="text-zinc-500">UI</span></span>
            </div>
            <p className="font-mono text-lg md:text-xl font-medium tracking-tight text-zinc-400 max-w-md mb-8">
              Next-gen UI interactions and layouts for modern marketing websites.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
              hello@vengenceui.com <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
