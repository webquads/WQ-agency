import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavMenu from "@/components/Navbar/NavMenu";
import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TeamMembers from "@/components/TeamMembers/TeamMembers";

export default function Home() {
  return (
    <>
      <NavMenu />
      <ScrollNavbar/>
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <TeamMembers />
    </>
  );
}
