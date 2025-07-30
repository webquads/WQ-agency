"use client";
// import { useEffect, useState } from "react";

interface GradientBorderButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorderButton = ({
  children,
  className = "",
}: GradientBorderButtonProps) => {
  //   const [degree, setDegree] = useState(0);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setDegree((prev) => (prev >= 360 ? 0 : prev + 1));
  //     }, 8);
  //     return () => clearInterval(interval);
  //   }, []);
  // const [degree, setDegree] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDegree((prev) => (prev >= 360 ? 0 : prev + 1));
  //   }, 8);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    // <div
    //   className="w-36 h-16 rounded-full px-[0.13%] pt-[0.17%] pb-[0.13%]"
    //   style={{
    //     background: `conic-gradient(from ${degree}deg, red 0% 14%, transparent 14% 100%)`,
    //     filter: "drop-shadow(0 0 10px rgba(255, 50, 50, 0.8))",
    //     boxShadow: "inset 0 0 15px rgba(255, 0, 0, 0.6)",
    //   }}
    // >
    //   <div className="w-full h-full bg-black rounded-full"></div>
    // </div>
    <div
      className={`w-36 h-14 rounded-full relative overflow-hidden flex items-center justify-center group/buttonGlow hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-900 z-30 ${className}`}
    >
      <div
        //       className={` w-[120%] h-[60%]
        // bg-linear-to-l from-transparent from-65% to-[rgba(59,130,246,0.7)] to-35%
        // animate-[spin_4s_linear_infinite_forwards]
        // group-hover/buttonGlow:hidden
        // `}
        //Testing by sumaiya
        className={`  w-[130%] h-[70%] 
          bg-gradient-to-l from-transparent from-60% to-[rgba(59,130,246,0.7)] to-30% 
          animate-[spin_3s_linear_infinite_forwards]
          group-hover/buttonGlow:hidden
          shadow-[0_0_25px_10px_rgba(59,130,246,0.7)] 
  `}
      ></div>
      <div className="w-[96.5%] h-[92%] rounded-full bg-black absolute top-[4.6%] left-[1.82%] flex items-center justify-center text-white text-xl">
        {children}
      </div>
    </div>
  );
};

export default GradientBorderButton;
