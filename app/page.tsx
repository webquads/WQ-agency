import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
// import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
// import NavBarJs from "@/components/Navbar/NavBarJs";
// import Navbar from "@/components/Navbar/NavMenu";
// import NavbarMotion from "@/components/Navbar/NavbarMotion";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TableShapeBackground from "@/components/TableShapeBackground";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import AnimatedLogo from "./ui/components/LoadingAnimation/WebquadsAnimation";
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
      <AnimatedLogo />
    </>
  );
}
