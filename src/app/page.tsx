import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import BlogGrid from "@/components/BlogGrid";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExperienceDesignStrip from "@/components/ExperienceDesignStrip";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden">
      <Header />

      <div className="max-w-[1200px] mx-auto">
        <Hero />

        <ExperienceDesignStrip />

        <hr className="border-white/10 mx-6 md:mx-10 lg:mx-16" />
        <Testimonials />

        <hr className="border-white/10 mx-6 md:mx-10 lg:mx-16" />
        <Resume />

        <hr className="border-white/10 mx-6 md:mx-10 lg:mx-16" />
        <Portfolio />

        <hr className="border-white/10 mx-6 md:mx-10 lg:mx-16" />
        <BlogGrid />
      </div>

      <ClientLogos />

      <div className="max-w-[1200px] mx-auto">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
