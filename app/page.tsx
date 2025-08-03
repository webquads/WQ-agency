import dynamic from "next/dynamic";
import HeroSection from "@/app/ui/components/HeroSection/HeroSection";

// Lazy load non-critical components
const About = dynamic(() => import("./ui/components/About/About"));
const ServiceSection = dynamic(
  () => import("@/app/ui/components/ServiceSection/ServiceSection")
);
const Portfolio = dynamic(() => import("./ui/components/Portfolio/Portfolio"));
const Process = dynamic(() => import("./ui/components/Process/Process"));
const ContactSection = dynamic(
  () => import("@/app/ui/components/ContactSection/ContactSection")
);
const TeamMembers = dynamic(
  () => import("./ui/components/TeamMembers/TeamMembers")
);
const PricingSection = dynamic(
  () => import("./ui/components/PricingSection/PricingSection")
);
const TrustIndicator = dynamic(
  () => import("./ui/components/TrustIndicator/TrustIndicator")
);
const TestimonialsSection = dynamic(
  () => import("./ui/components/Testimonials/Testimonial")
);

// Load logo animations only when needed
const AnimatedLogo = dynamic(
  () => import("./ui/components/LoadingAnimation/WebquadsAnimation")
);
const AnimatedSVGLogo = dynamic(
  () => import("./ui/components/LoadingAnimation/AnimatedSVGLogo")
);
const AnimatedDualLogo = dynamic(
  () => import("./ui/components/LoadingAnimation/AnimatedDualLogo")
);
const AnimatedDualLogo1 = dynamic(
  () => import("./ui/components/LoadingAnimation/DrawingLogo1")
);
const LogoLoading = dynamic(() => import("./ui/components/LogoLoading"));

export default function Home() {
  return (
    <>
      {/* Load hero section immediately */}
      <HeroSection />

      {/* Lazy load other sections */}
      <About />
      <ServiceSection />
      <Portfolio />
      <Process />
      <ContactSection />
      <TeamMembers />
      <PricingSection />
      <TrustIndicator />
      <TestimonialsSection />

      {/* Load animations last */}
      <div className="flex justify-center items-center">
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
