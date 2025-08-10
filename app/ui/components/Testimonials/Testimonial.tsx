"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart,
  Cloud,
  Code,
  Database,
  Globe,
  LayoutTemplate,
  Server,
  Shield,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { HeadingText } from "../HeadingText/HeadingText";

// Define a type for the star properties
interface Star {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
}
const icons = {
  LayoutTemplate,
  Server,
  Globe,
  Zap,
  Shield,
  Database,
  ShoppingCart,
  BarChart,
  Cloud,
};
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CTO | TechStart Inc",
    rating: 4,
    text: "We needed a custom web application that could handle complex user interactions and scale with our growth. This agency delivered a robust solution that exceeded our technical requirements and performance expectations.",
    icon: Code,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director | RetailPro",
    rating: 5,
    text: "Our new e-commerce platform transformed our online business. The seamless payment integration and intuitive admin panel increased our conversion rate by 45% within the first month. Exceptional development work!",
    icon: Server,
  },
  {
    id: 3,
    name: "Mike Davis",
    position: "Founder | StartupXYZ",
    rating: 5,
    text: "As a non-technical founder, I needed a development team that could translate my vision into a functional product. They built our MVP in record time with clean code and impressive performance metrics.",
    icon: Database,
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "Product Manager | DesignHub",
    rating: 4,
    text: "The dashboard they developed for our analytics platform is both powerful and user-friendly. Their attention to UX details and responsive design made our complex data accessible to all team members.",
    icon: BarChart,
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Operations Lead | GrowthCo",
    rating: 5,
    text: "Their cloud deployment strategy reduced our server costs by 30% while improving site speed. The security implementation gave us peace of mind, and their ongoing support has been invaluable.",
    icon: LayoutTemplate,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // don’t render anything until we are on the client
  const [mounted, setMounted] = useState(false);

  // Auto-cycle through testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-orange-400 fill-orange-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen  text-white py-20 px-4 relative overflow-hidden">
      {/* Background dots pattern */}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 p-10">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300 mb-8 backdrop-blur-sm border border-gray-700/30">
            Testimonials
          </div>

          <HeadingText
            heading="Built for Results"
            subHeading="Praised by People"
          />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left Side - Icon Constellation */}
          <div className="flex items-center mx-auto justify-center lg:justify-end">
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Center icon (largest) - Non-interactive */}
              <div className="absolute z-40">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center border-3 ${
                    activeIndex === 0
                      ? "bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 shadow-2xl shadow-orange-500/40"
                      : "bg-gray-800/90 border-gray-600 backdrop-blur-sm"
                  }`}
                >
                  {(() => {
                    const Icon = testimonials[0].icon;
                    return (
                      <Icon
                        className={`w-10 h-10 ${
                          activeIndex === 0 ? "text-white" : "text-gray-400"
                        }`}
                      />
                    );
                  })()}
                </div>
              </div>

              {/* Surrounding icons in perfect circle */}
              {testimonials.slice(1).map((testimonial, index) => {
                const realIndex = index + 1;
                const angle = index * 90 - 45; // 4 icons at 90-degree intervals
                const radius = 140;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                const isActive = activeIndex === realIndex;

                return (
                  <div
                    key={testimonial.id}
                    className={`absolute z-30 cursor-pointer ${
                      isActive ? "z-50" : ""
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onClick={() => handleIconClick(realIndex)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-[border-color] duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 shadow-xl shadow-orange-500/30"
                          : "bg-gray-800/90 border-gray-600 hover:border-gray-500 backdrop-blur-sm"
                      }`}
                    >
                      <testimonial.icon
                        className={`w-7 h-7 ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.95 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
                >
                  {/* Stars */}
                  <div className="flex mb-6 space-x-1">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 font-light">
                    &quot;{testimonials[activeIndex].text}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg mb-1">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {testimonials[activeIndex].position}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleIconClick(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "bg-gradient-to-r from-orange-400 to-orange-600 w-8 shadow-lg shadow-orange-500/30"
                        : "bg-gray-600 hover:bg-gray-500 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
