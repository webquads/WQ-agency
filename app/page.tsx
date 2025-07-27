import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TableShapeBackground from "@/components/TableShapeBackground";
import TeamMembers from "@/components/TeamMembers/TeamMembers";

export default function Home() {
  return (
    <>
      <ScrollNavbar />
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <TeamMembers />
      <TableShapeBackground/>
    </>
  );
}
