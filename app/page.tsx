import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBarJs from "@/components/Navbar/NavBarJs";
// import Navbar from "@/components/Navbar/NavMenu";
// import NavbarMotion from "@/components/Navbar/NavbarMotion";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TeamMembers from "@/components/TeamMembers/TeamMembers";

export default function Home() {
  return (
    <>
      <NavBarJs />
      {/* <NavbarMotion /> */}
      {/* <Navbar /> */}
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <TeamMembers />
    </>
  );
}
