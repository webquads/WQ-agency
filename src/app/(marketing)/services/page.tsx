import PricingSection from "@/components/PricingSection/PricingSection";
import Process from "@/components/Process/Process";
import ServiceSection from "@/components/ServiceSection/ServiceSection";

export const metadata = {
  title: "Our Services - WebQuads Agency",
  description:
    "Explore our comprehensive web development, mobile app development, and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a full range of digital services to help your business grow
            and succeed online.
          </p>
        </div>
        <ServiceSection />
        <Process />
        <PricingSection />
      </div>
    </div>
  );
}
