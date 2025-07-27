"use client";
import { useEffect, useRef, useState } from "react";

const ScrollNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
    <nav className="w-full h-[60px]">
      <div className="w-full h-full relative">
        <div ref={navRef} className="w-full h-full absolute top-0 left-0"></div>
      </div>
      <div className="w-full h-[60px] fixed top-0 left-0 flex items-center justify-center z-40">
        <div
          className={`${
            isSticky ? "w-[70%] rounded-full" : "w-full"
          } h-full bg-gray-200 transition-all duration-600`}
        ></div>
      </div>
    </nav>
  );
};

export default ScrollNavbar;
