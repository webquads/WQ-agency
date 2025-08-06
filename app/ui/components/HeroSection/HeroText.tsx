import { instrumentSerif } from "@/app/font";
import GradientBorderButton from "../Button";

const HeroText = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 z-30">
      <h2 className="text-4xl lg:text-8xl text-center font-bold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-600 to-orange-600 animate-textGradient bg-[length:200%_auto] ">
        Your Vision, Our Code
      </h2>
      <h2
        className={`text-3xl lg:text-6xl text-center  text-[#F99E5E] font-semibold  ${instrumentSerif.className}`}
      >
        Let’s Build Together
      </h2>
      <GradientBorderButton>Hello</GradientBorderButton>
    </div>
  );
};

export default HeroText;
