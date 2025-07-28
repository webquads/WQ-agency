
import GradientBorderButton from "../Button";
import ShapeBackground from "../ShapeBackground";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black p-8 relative">
      <div className="w-full h-full absolute top-0 left-0">
        <ShapeBackground />
      </div>
      <HeroText />
      <GradientBorderButton>Hello</GradientBorderButton>
    </div>
  );
};

export default HeroSection;
