import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { ProcessAndTech } from "@/components/sections/process-and-tech";
import { CaseStudies } from "@/components/sections/case-studies";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <ProcessAndTech />
        <CaseStudies />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
