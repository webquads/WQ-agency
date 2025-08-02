import ContactSection from "@/app/ui/components/ContactSection/ContactSection";
import HeroSection from "@/app/ui/components/HeroSection/HeroSection";
// import ScrollNavbar from "@/components/Navbar/ScrollNavbar";
// import NavBarJs from "@/components/Navbar/NavBarJs";
// import Navbar from "@/components/Navbar/NavMenu";
// import NavbarMotion from "@/components/Navbar/NavbarMotion";
import ServiceSection from "@/app/ui/components/ServiceSection/ServiceSection";
import TeamMembers from "@/app/ui/components/TeamMembers/TeamMembers";
import About from "./ui/components/About/About";
import AnimatedDualLogo from "./ui/components/LoadingAnimation/AnimatedDualLogo";
import AnimatedSVGLogo from "./ui/components/LoadingAnimation/AnimatedSVGLogo";
import AnimatedDualLogo1 from "./ui/components/LoadingAnimation/DrawingLogo1";
import AnimatedLogo from "./ui/components/LoadingAnimation/WebquadsAnimation";
import LogoLoading from "./ui/components/LogoLoading";
import Portfolio from "./ui/components/Portfolio/Portfolio";
import PricingSection from "./ui/components/PricingSection/PricingSection";
import Process from "./ui/components/Process/Process";
import TestimonialsSection from "./ui/components/Testimonials/Testimonial";
import TrustIndicator from "./ui/components/TrustIndicator/TrustIndicator";

// Your SVG content as a string

export default function Home() {
  return (
    <>
      {/* <ScrollNavbar /> */}
      {/* <NavBarJs /> */}
      {/* <NavbarMotion /> */}
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <ServiceSection />
      <Portfolio />
      <Process />
      <ContactSection />
      <TeamMembers />
      <PricingSection />
      <TrustIndicator />
      <TestimonialsSection />
      <div className="flex justify-center items-center">
        {" "}
        <AnimatedLogo
          src="/animLogo.png"
          alt="Company Logo"
          width={300}
          height={300}
          duration={2.5}
          repeatDelay={0.5}
          minScale={0.3}
          maxScale={1}
        />
        <AnimatedSVGLogo
          src="/animLogo.png"
          alt="Company Logo"
          width={300}
          height={300}
          duration={4}
          minScale={0.3}
        />
        <AnimatedDualLogo
          fullLogoSrc="/animLogo.png"
          part1Src="/logoPart1.png"
          part2Src="/logoPart2.png"
          width={300}
          height={300}
          duration={5}
        />
        <AnimatedDualLogo1
          fullLogoSrc="/animLogo.png"
          part1Src="/logoPart1.png"
          part2Src="/logoPart2.png"
          width={300}
          height={300}
          duration={5}
        />
      </div>
      <LogoLoading />
    </>
  );
}
