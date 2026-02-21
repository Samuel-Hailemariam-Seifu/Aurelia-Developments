import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDevelopments from "@/components/FeaturedDevelopments";
import About from "@/components/About";
import InvestmentHighlights from "@/components/InvestmentHighlights";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDevelopments />
      <About />
      <InvestmentHighlights />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
