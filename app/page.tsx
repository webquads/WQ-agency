import ContactSection from "@/app/ui/components/ContactSection/ContactSection";
import HeroSection from "@/app/ui/components/HeroSection/HeroSection";
// import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
// import NavBarJs from "@/components/Navbar/NavBarJs";
// import Navbar from "@/components/Navbar/NavMenu";
// import NavbarMotion from "@/components/Navbar/NavbarMotion";
import ServiceSection from "@/app/ui/components/ServiceSection/ServiceSection";
import TableShapeBackground from "@/app/ui/components/TableShapeBackground";
import TeamMembers from "@/app/ui/components/TeamMembers/TeamMembers";

import AdvancedDrawingLogo from "./ui/components/LoadingAnimation/AdvancedDrawingLogo";
import AnimatedSVGLogo from "./ui/components/LoadingAnimation/AnimatedSVGLogo";
import AnimatedLogo from "./ui/components/LoadingAnimation/WebquadsAnimation";
import PricingSection from "./ui/components/PricingSection/PricingSection";
import TestimonialsSection from "./ui/components/Testimonials/Testimonial";

// Your SVG content as a string

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
      <TestimonialsSection />
      <AnimatedLogo
        src="/animLogo.png"
        alt="Company Logo"
        width={300}
        height={300}
        duration={2.5}
        repeatDelay={0.5}
        minScale={0.3} // Start at 30% size
        maxScale={1} // Grow to 100% size
      />
      {/* <DrawingLogo1
        src="/animLogo.png.png"
        alt="Company Logo"
        width={300}
        height={300}
        duration={2.5}
        repeatDelay={0.5}
      /> */}
      <AdvancedDrawingLogo
        src="/animLogo.png"
        alt="Company Logo"
        width={300}
        height={300}
        duration={2.5}
        repeatDelay={0.5}
      />
      <AnimatedSVGLogo
        src="/animLogo.png"
        alt="Company Logo"
        width={300}
        height={300}
        duration={4}
        minScale={0.3}
      />
    </>
  );
}
