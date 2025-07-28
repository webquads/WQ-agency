import { instrumentSerif } from "@/app/font";

const HeroText = () => {
  return (
    <div className="text-center z-50">
      <h2 className="text-6xl text-center font-bold text-gray-600 mb-4">
        Your Vision, Our Code
      </h2>
      <h2
        className={`text-6xl text-[#F99E5E] font-semibold  ${instrumentSerif.className}`}
      >
        Let’s Build Together
      </h2>
    </div>
  );
};

export default HeroText;
