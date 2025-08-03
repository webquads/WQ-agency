import { instrumentSerif } from "@/app/font";
import GradientBorderButton from "../Button";

const HeroText = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 z-50">
      <h2 className="text-8xl text-center font-bold text-gray-600 mb-4">
        Your Vision, Our Code
      </h2>
      <h2
        className={`text-6xl text-[#F99E5E] font-semibold  ${instrumentSerif.className}`}
      >
        Let’s Build Together
      </h2>
      <GradientBorderButton>Hello</GradientBorderButton>
    </div>
  );
};

export default HeroText;
