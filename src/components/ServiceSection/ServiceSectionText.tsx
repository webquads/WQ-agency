import { instrumentSerif } from "@/app/font";

const HeroText = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5  z-50">
      <h2 className="text-8xl text-center font-bold text-gray-600 mb-4">
        The Best Service
      </h2>
      <h2
        className={`text-6xl text-[#F99E5E] font-semibold  ${instrumentSerif.className}`}
      >
        Package For You
      </h2>
    </div>
  );
};

export default HeroText;
