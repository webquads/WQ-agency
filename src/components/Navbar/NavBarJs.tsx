"use client";
import Logo from "@/components/Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBarJs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkMobile);
  }, []);

  const navLinks = ["Pricing", "About", "Press", "Support"];

  return (
    <>
      <nav
        style={{
          width: isMobile ? "100%" : isScrolled ? "60%" : "100%",
          borderRadius: isScrolled ? "999px" : "0px",
          border: isScrolled ? "1px solid rgb(85,85,85)" : "0px",
          paddingLeft: isScrolled ? "16px" : "24px",
          paddingRight: isScrolled ? "16px" : "24px",
          transition: "all 0.3s ease-in-out",
          backgroundColor: isScrolled ? "rgb(35,43,43,0.6)" : "transparent",
        }}
        className="mx-auto fixed top-5 left-0 right-0 z-50"
      >
        <div className="flex items-center justify-between py-2 px-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center text-amber-100 justify-center">
              <Logo />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[18px] text-white hover-gradient-text transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden lg:flex items-center gap-1 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full">
              Get A Quote <ArrowUpRight size={16} />
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full text-white"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 pt-20 bg-gray-900 bg-opacity-95 z-40">
          <div className="flex flex-col items-center gap-8 py-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-2xl text-white hover:text-amber-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="flex items-center gap-1 bg-white text-gray-900 text-lg font-medium px-6 py-3 rounded-full mt-4">
              Get A Quote <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
