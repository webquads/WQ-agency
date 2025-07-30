// You can use this component in your Next.js project.
// Make sure to install the necessary dependencies:
// npm install framer-motion lucide-react

"use client";
// import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
// import {
//     motion,
//     useMotionValueEvent,
//     useScroll,
// } from 'framer-motion';
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const AnimatedNavbar = () => {
  const { scrollY } = useScroll();

  // State to track if the page is scrolled enough to trigger the "pill" state
  const [isScrolled, setIsScrolled] = useState(true);
  // State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This hook detects changes in the scrollY value.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log("Scroll Y:", latest);
    // Trigger the "scrolled" state for the pill animation
    setIsScrolled(latest > 50);
  });

  const navLinks = ["Pricing", "About", "Press", "Support"];

  return (
    <motion.div
      // This outer container is always fixed at the top
      className="fixed top-0 left-0 right-0 z-50 pt-3"
    >
      <motion.nav
        // The `animate` prop triggers animations when its values change.
        // We are animating width, border-radius, background, and other properties
        // based on the `isScrolled` and `isMenuOpen` states.
        animate={{
          width: isScrolled  ? "50%" : "90%",
          borderRadius: isScrolled || isMenuOpen ? "999px" : "0px",
          paddingLeft: isScrolled || isMenuOpen ? "16px" : "24px",
          paddingRight: isScrolled || isMenuOpen ? "16px" : "24px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mx-auto" // Center the nav when its width is 'auto'
      >
        <motion.div
          animate={{
            backgroundColor:
              isScrolled || isMenuOpen
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(0, 0, 0, 0.7)",
            backdropFilter:
              isScrolled || isMenuOpen ? "blur(16px)" : "blur(0px)",
            boxShadow:
              isScrolled || isMenuOpen
                ? "0px 2px 10px rgba(0,0,0,0.1)"
                : "none",
            borderBottomWidth: isScrolled || isMenuOpen ? "0px" : "1px",
            borderColor:
              isScrolled || isMenuOpen
                ? "rgba(0,0,0,0.08)"
                : "rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full"
        >
          <div className="relative flex items-center justify-between py-2 px-2 ">
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center bg-black w-8 h-8 rounded-full text-2xl ">
                {/* Placeholder for  Logo */}
                LOGO
              </div>
              <span className="font-bold text-3xl hidden sm:block">HERE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-1 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                Get A Quote <ArrowUpRight size={16} />
              </motion.button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Animates in and out */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg mx-4 mt-2"
        >
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:bg-gray-100 rounded p-2"
              >
                {link}
              </a>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <button className="flex items-center justify-center gap-1 bg-gray-900 text-white w-full font-medium px-4 py-2 rounded-full">
                Get A Quote <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// To use this in a page, you would import it and render it.
// You would also need some content to make the page scrollable.
export default function NavbarMotion() {
  return (
    <div className=" text-gray-800 font-sans min-h-screen ">
      <AnimatedNavbar />
       <div style={{ height: '200vh' }}></div>
    </div>
  );
}
