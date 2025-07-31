"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Code, Palette, Search, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Project Manager | WFC",
    rating: 4,
    text: "As an SEO consultant, I needed a website that not only looked professional but also performed exceptionally in search rankings. OptiRank made it effortless to set up a high-converting, SEO-optimized site!",
    icon: ChevronUp,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director | TechCorp",
    rating: 5,
    text: "The team at OptiRank transformed our digital presence completely. Our website traffic increased by 300% within just 3 months of launch. Absolutely incredible results!",
    icon: Search,
  },
  {
    id: 3,
    name: "Mike Davis",
    position: "CEO | StartupXYZ",
    rating: 5,
    text: "Working with OptiRank was a game-changer for our startup. They delivered a stunning, fast-loading website that perfectly represents our brand and converts visitors into customers.",
    icon: Code,
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "Creative Director | DesignHub",
    rating: 4,
    text: "The design quality and attention to detail exceeded our expectations. OptiRank created a beautiful, user-friendly interface that our clients absolutely love.",
    icon: Palette,
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Operations Manager | GrowthCo",
    rating: 5,
    text: "Fast, reliable, and results-driven. OptiRank delivered our project on time and the performance improvements were immediate. Highly recommend their services!",
    icon: Zap,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300 mb-8 backdrop-blur-sm border border-gray-700/30">
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            What Our Clients
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text italic">
            Are Saying
          </h3>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left Side - Icon Constellation */}
          <div className="flex justify-center lg:justify-end">
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
