import {
  Code2, // Custom Web Application Development
  ShoppingCart, // E-commerce Web App Development
  Plug, // API Integration & Development
  SearchCheck, // Next.js SEO Optimized Website
  LayoutDashboard, // Dashboard & Admin Panel Development
  Wrench, // Maintenance & Support
} from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Application Development",
      description:
        "Tailored solutions for complex business needs with scalable and secure web apps.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Web App Development",
      description:
        "Build seamless online shopping experiences with integrated payment & cart systems.",
    },
    {
      icon: Plug,
      title: "API Integration & Development",
      description:
        "Connect your services smoothly with custom API integration and RESTful architecture.",
    },
    {
      icon: SearchCheck,
      title: "Next.js SEO Optimized Website",
      description:
        "From keyword optimization to link-building, we enhance both on-site and technical SEO.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard & Admin Panel Development",
      description:
        "Clean, user-friendly interfaces for managing and visualizing your data effectively.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing support and updates to keep your web app running smoothly and securely.",
    },
  ];

  return (
    <section className="bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border-2 border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-orange-500/50  group cursor-pointer hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-slate-700/50 border border-slate-600/50 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
