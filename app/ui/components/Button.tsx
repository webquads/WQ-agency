import React from "react";

interface GradientBorderButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-36 h-14 rounded-full relative overflow-hidden flex items-center justify-center 
                 group/buttonGlow hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] 
                 transition-all duration-900 z-30 ${className}`}
    >
      <div
        className={`w-[130%] h-[70%] 
                   bg-gradient-to-l from-transparent from-60% to-[rgba(59,130,246,0.7)] to-30% 
                   animate-[spin_3s_linear_infinite_forwards]
                   group-hover/buttonGlow:hidden
                   shadow-[0_0_25px_10px_rgba(59,130,246,0.7)]`}
      />
      <div
        className="w-[96.5%] h-[92%] rounded-full bg-black absolute top-[4.6%] left-[1.82%] 
                      flex items-center justify-center text-white text-xl"
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBorderButton;
