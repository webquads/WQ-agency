"use client";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
export default function NavBarJs() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = ["Pricing", "About", "Press", "Support"];
  return (
    <nav
      style={{
        width: isScrolled ? "50%" : "100%",
        borderRadius: isScrolled ? "999px" : "0px",
        paddingLeft: isScrolled ? "16px" : "24px",
        paddingRight: isScrolled ? "16px" : "24px",
        transition: "all 0.3s ease-in-out",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
      }}
      className="mx-auto fixed top-0 left-0 right-0 z-50"
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
          <button className="hidden lg:flex items-center gap-1 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full">
            Get A Quote <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
