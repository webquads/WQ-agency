import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavMenu from "@/components/Navbar/NavMenu";
import ServiceSection from "@/components/ServiceSection/ServiceSection";

export default function Home() {
  return (
    <div>
      <NavMenu />

      <HeroSection />

      <ServiceSection />
      <ContactSection />
    </div>
  );
}
