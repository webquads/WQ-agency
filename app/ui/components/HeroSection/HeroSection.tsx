import TableShapeBackground from "../TableShapeBackground";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  p-8 relative">
      <div className="w-full h-full absolute top-0 left-0">
        <TableShapeBackground />
      </div>
      <div className="h-20"></div>
      <HeroText />
    </div>
  );
};

export default HeroSection;
