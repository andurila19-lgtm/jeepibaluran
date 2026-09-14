import Hero from "@/components/Hero";
import PackagesSection from "@/components/PackagesSection";
import ExperienceSection from "@/components/ExperienceSection";
import GoogleMapsRoute from "@/components/GoogleMapsRoute";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PackagesSection />
      <ExperienceSection />
      <GoogleMapsRoute />
      <GallerySection />
      <AboutSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
