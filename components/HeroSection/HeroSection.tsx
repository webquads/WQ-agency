import TableShapeBackground from "../TableShapeBackground";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center  p-8 relative">
      <div className="w-full h-full absolute top-0 left-0">
        <TableShapeBackground />
      </div>
      <HeroText />
    </div>
  );
};

export default HeroSection;
