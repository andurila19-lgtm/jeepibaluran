import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PackagesSection from "@/components/PackagesSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Intro Section */}
        <IntroSection />

        {/* Paket Section */}
        <PackagesSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Galeri Section */}
        <GallerySection />

        {/* Tentang Kami Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Section */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
