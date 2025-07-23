import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black p-8 ">
      <HeroText />
    </div>
  );
};

export default HeroSection;
