import HeroSection from "@/app/ui/components/HeroSection/HeroSection";
import dynamic from "next/dynamic";
import BlogSection from "../ui/components/Blog/BlogSection";

// Lazy load non-critical components
const About = dynamic(() => import("../../components/About/About"));
const ServiceSection = dynamic(
  () => import("@/components/ServiceSection/ServiceSection")
);
const Portfolio = dynamic(() => import("../../components/Portfolio/Portfolio"));
const Process = dynamic(() => import("../../components/Process/Process"));
const ContactSection = dynamic(
  () => import("@/components/ContactSection/ContactSection")
);
const TeamMembers = dynamic(
  () => import("../../components/TeamMembers/TeamMembers")
);
const PricingSection = dynamic(
  () => import("../../components/PricingSection/PricingSection")
);
const TrustIndicator = dynamic(
  () => import("../../components/TrustIndicator/TrustIndicator")
);
const TestimonialsSection = dynamic(
  () => import("../../components/Testimonials/Testimonial")
);

const LogoLoading = dynamic(() => import("../../components/LogoLoading"));

export default function HomePage() {
  return (
    <div className="max-w-[1800px] mx-auto">
      {/* Load hero section immediately */}
      <HeroSection />
      <BlogSection />

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
      <LogoLoading />
    </div>
  );
}
