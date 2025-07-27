"use client";
import { useEffect, useRef, useState } from "react";

const ScrollNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = navRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <>
      {/* Original Navbar - Slides up when hiding */}
      <nav
        ref={navRef}
        className={`w-full h-[60px] bg-green-500 transition-all duration-500 ease-in-out ${
          isSticky ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        all navbar menu content
      </nav>

      <div
        className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-500 ease-in-out ${
          isSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="w-[70%] h-[60px] bg-green-500 flex items-center justify-center rounded-full">
          all navbar menu content
        </div>
      </div>
    </>
  );
};

export default ScrollNavbar;
