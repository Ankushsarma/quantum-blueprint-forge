import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { CTABanner } from "@/components/landing/CTABanner";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0F0718] text-white">
      <Navbar />
      <Hero />
      <About />
      <CTABanner />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
