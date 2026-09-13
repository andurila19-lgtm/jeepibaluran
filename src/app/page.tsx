import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
    <div className="flex flex-col min-h-screen bg-base-light text-charcoal">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections: Hero -> Paket -> Pengalaman -> Galeri -> Tentang -> FAQ -> WhatsApp */}
      <main className="flex-1">
        <Hero />
        <PackagesSection />
        <ExperienceSection />
        <GallerySection />
        <AboutSection />
        <FaqSection />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
