import ContactSection from "@/app/ui/components/ContactSection/ContactSection";
import HeroSection from "@/app/ui/components/HeroSection/HeroSection";
// import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
// import NavBarJs from "@/components/Navbar/NavBarJs";
// import Navbar from "@/components/Navbar/NavMenu";
// import NavbarMotion from "@/components/Navbar/NavbarMotion";
import ServiceSection from "@/app/ui/components/ServiceSection/ServiceSection";
import TableShapeBackground from "@/app/ui/components/TableShapeBackground";
import TeamMembers from "@/app/ui/components/TeamMembers/TeamMembers";
import PricingSection from "./ui/components/PricingSection/PricingSection";

export default function Home() {
  return (
    <>
      {/* <ScrollNavbar /> */}
      {/* <NavBarJs /> */}
      {/* <NavbarMotion /> */}
      {/* <Navbar /> */}
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <TeamMembers />
      <TableShapeBackground />
      <PricingSection />
    </>
  );
}
