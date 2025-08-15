import { instrumentSerif } from "@/src/app/font";
import GradientBorderButton from "../GradientBorderButton";

const TrustIndicator = () => {
  return (
    <div className="w-full h-[100vh] flex items-center px-18 relative">
      <div className="w-full h-full flex items-center">
        <div className="w-[50%] h-fit flex flex-col gap-7">
          <span className="w-fit px-4 py-1 rounded-full bg-[#161D21] text-white text-sm">
            Why choose us
          </span>
          <h1 className="text-6xl text-white font-semibold">Our Commitment</h1>
          <h3
            className={`text-6xl text-[#F99E5E] ${instrumentSerif.className}`}
          >
            Your Success
          </h3>
          <p className="text-white">
            Our team of skilled content creators develops engaging informative
            content that resonates with your target audience By optimizing
            social media profiles, creating shareable content.
          </p>
          <GradientBorderButton>See our plan</GradientBorderButton>
        </div>
        <div className="w-[50%] h-full relative">
          <div className="w-full h-full flex items-center justify-end absolute">
            <div className="w-[90%] h-[90%] rounded-full relative">
              <div className="w-full h-full absolute">
                <div className="h-full aspect-square rounded-full bg-conic-295 from-transparent to-blue-600 from-40% relative p-[2px] animate-[spin_7s_linear_infinite] border">
                  <div className="w-full h-full bg-black rounded-full"></div>
                  <div className="w-[85px] h-[85px] rounded-full bg-gray-400/50 absolute top-23 flex items-center justify-center text-white text-6xl animate-[spin_7s_reverse_linear_infinite]">
                    A
                  </div>
                </div>
              </div>
              <div className="w-full h-full rounded-full absolute flex items-center justify-center">
                <div className="h-[80%] aspect-square rounded-full bg-conic-300 from-transparent to-blue-600 from-40% relative p-[2px] animate-[spin_7s_linear_infinite] transform -rotate-180 border">
                  <div className="w-full h-full bg-black rounded-full"></div>
                  <div className="w-[70px] aspect-square rounded-full bg-gray-400/50 absolute top-12 flex items-center justify-center animate-[spin_7s_reverse_linear_infinite] text-4xl transform rotate-180 text-white">
                    B
                  </div>
                </div>
              </div>
              <div className="w-full h-full absolute flex items-center justify-center rounded-full">
                <div className="w-[60%] h-[60%] rounded-full bg-[#081525] blur-[35px]"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-full absolute flex items-center">
            <div className="w-full h-[60%] flex gap-5 justify-end">
              <div className="w-[30%] flex items-center">
                <div className="w-full h-[60%] bg-[#1B222A] rounded-md"></div>
              </div>
              <div className="w-[40%] flex flex-col gap-5">
                <div className="bg-[#1B222A] rounded-md w-full h-[68%]"></div>
                <div className="bg-[#1B222A] rounded-md w-full h-[30%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] aspect-square absolute right-60 top-36 rounded-full bg-[linear-gradient(180deg,#6957ba00_0%,#7ec2f4_48.08%,#6957ba00_81.05%)] blur-[274px] -z-10 border opacity-80"></div>
    </div>
  );
};

export default TrustIndicator;
