import { instrumentSerif } from "@/app/font";
import GradientBorderButton from "../Button";

const HeroText = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 z-30">
      <h2 className="text-[clamp(4rem,5vw,9rem)] text-center font-bold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-600 to-orange-600 animate-textGradient bg-[length:200%_auto] leading-tight">
        Your Vision, <br /> Our Code
      </h2>
      <h2
        className={`capitalize text-[clamp(2rem,3vw,3rem)] pb-3  gradient-text font-semibold ${instrumentSerif.className}`}
      >
        Let’s Build Together
      </h2>
      <GradientBorderButton>Hello</GradientBorderButton>
    </div>
  );
};

export default HeroText;
