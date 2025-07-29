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
        width: isScrolled ? "60%" : "100%",
        borderRadius: isScrolled ? "999px" : "0px",
        paddingLeft: isScrolled ? "16px" : "24px",
        paddingRight: isScrolled ? "16px" : "24px",
        transition: "all 0.3s ease-in-out",
        backgroundColor: isScrolled ? " rgb(119,136,153,0.8)" : "transparent",
      }}
      className="mx-auto fixed top-0 left-0 right-0 z-50"
    >
      <div className=" flex items-center justify-between py-2 px-2 z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center text-amber-100 justify-center   ">
            {/* Placeholder for  Logo */}
            LOGO
          </div>
          <span className="font-bold text-2xl text-amber-100 hidden sm:block">
            HERE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[18px] text-white hover:text-black transition-colors"
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
