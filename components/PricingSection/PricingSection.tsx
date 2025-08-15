"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";
import GradientBorderButton from "../GradientBorderButton";
import { HeadingText } from "../HeadingText/HeadingText";

interface Services {
  name: string;
  included: boolean; // Package IDs that include this feature
}

interface Packages {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  services: Services[];
}

const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState("basic");

  const packages: Packages[] = [
    {
      id: "basic",
      name: "Basic Package",
      price: 3500,
      duration: "month",
      features: ["No Hidden Fees", "Upgrade Anytime", "Cancel Anytime"],
      services: [
        { name: "Custom Web Application Development", included: true },
        { name: "Next.js SEO Optimized Website", included: true },
        { name: "Weekly Reporting", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "E-commerce Web App Development", included: false },
        { name: "API Integration & Development", included: false },
        { name: "Dashboard & Admin Panel Development", included: false },
        { name: "Monthly Performance Reports", included: false },
        { name: "Advanced Security Implementation", included: false },
        { name: "Cloud Deployment & DevOps", included: false },
        { name: "Payment Gateway Integration", included: false },
        { name: "Maintenance & Support", included: false },
      ],
    },
    {
      id: "advanced",
      name: "Advanced Package",
      price: 5500,
      duration: "month",
      features: ["No Hidden Fees", "Upgrade Anytime", "Cancel Anytime"],
      services: [
        { name: "Custom Web Application Development", included: true },
        { name: "Next.js SEO Optimized Website", included: true },
        { name: "Weekly Reporting", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "E-commerce Web App Development", included: true },
        { name: "API Integration & Development", included: true },
        { name: "Payment Gateway Integration", included: true },
        { name: "Dashboard & Admin Panel Development", included: false },
        { name: "Monthly Performance Reports", included: true },
        { name: "Advanced Security Implementation", included: false },
        { name: "Cloud Deployment & DevOps", included: false },
        { name: "Maintenance & Support", included: false },
      ],
    },
    {
      id: "custom",
      name: "Custom Package",
      price: 6500,
      duration: "month",
      features: ["No Hidden Fees", "Upgrade Anytime", "Cancel Anytime"],
      services: [
        { name: "Custom Web Application Development", included: true },
        { name: "Next.js SEO Optimized Website", included: true },
        { name: "Weekly Reporting", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "E-commerce Web App Development", included: true },
        { name: "API Integration & Development", included: true },
        { name: "Dashboard & Admin Panel Development", included: true },
        { name: "Monthly Performance Reports", included: true },
        { name: "Advanced Security Implementation", included: true },
        { name: "Cloud Deployment & DevOps", included: true },
        { name: "Payment Gateway Integration", included: true },
        { name: "Maintenance & Support", included: true },
      ],
    },
  ];

  const allServices = [
    "Custom Web Application Development",
    "Next.js SEO Optimized Website",
    "Weekly Reporting",
    "Basic SEO Optimization",
    "E-commerce Web App Development",
    "API Integration & Development",
    "Dashboard & Admin Panel Development",
    "Monthly Performance Reports",
    "Advanced Security Implementation",
    "Cloud Deployment & DevOps",
    "Payment Gateway Integration",
    "Maintenance & Support",
  ];

  const getServiceAvailability = (service: string) => {
    const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage);
    if (!selectedPkg) return false;

    const serviceInPackage = selectedPkg.services.find(
      (s) => s.name === service
    );
    return serviceInPackage ? serviceInPackage.included : false;
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="pt-20 pb-16 text-center">
        <div className="inline-block px-4 hover- py-2 gradi mb-6 text-sm font-medium text-orange-400 bg-orange-400/10 rounded-full border border-orange-400/20">
          Pricing Plan
        </div>
        {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The Best Service
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Package For You
          </span>
        </h1> */}
        <HeadingText
          heading="Investment Blueprints"
          subHeading="Clear Pricing, No Surprises"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className=" rounded-3xl border border-slate-700/50 p-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Pricing Cards */}
            <div className="lg:col-span-5 my-auto space-y-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedPackage === pkg.id
                      ? "opacity-100"
                      : "opacity-80 hover:opacity-95"
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div
                    className={` rounded-xl border p-5 transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? "border-orange-500/90  bg-slate-800/80 backdrop-blur-sm shadow-lg shadow-orange-500/20"
                        : "border-slate-600/60 hover:border-slate-500/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 transition-colors duration-300 ${
                            selectedPackage === pkg.id
                              ? "border-orange-500"
                              : "border-slate-500"
                          }`}
                        >
                          {selectedPackage === pkg.id && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full m-0.5"></div>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {pkg.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">
                          ${pkg.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-400">
                          /{pkg.duration}
                        </div>
                      </div>
                    </div>

                    {/* Features section with CSS Grid animation */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                        selectedPackage === pkg.id
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 pb-1">
                          {pkg.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-slate-300"
                            >
                              <Check className="w-3 h-3 text-green-400 mr-1" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Dynamic Services List */}
            <div className="lg:col-span-7 bg-slate-800/60 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
              <div className="space-y-4">
                {allServices.map((service, index) => {
                  const isIncluded = getServiceAvailability(service);
                  return (
                    <div
                      key={index}
                      className="flex items-center transition-all duration-500 ease-in-out"
                    >
                      {isIncluded ? (
                        <Check className="w-5 h-5 text-green-400 mr-4 flex-shrink-0 transition-all duration-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 transition-all duration-500" />
                      )}
                      <span
                        className={`text-base font-medium transition-all duration-500 ${
                          isIncluded ? "text-slate-200" : "text-slate-500"
                        }`}
                      >
                        {service}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}

        <GradientBorderButton className="text-center m-auto mt-12">
          Get Started
        </GradientBorderButton>
      </div>
    </div>
  );
};

export default PricingSection;
