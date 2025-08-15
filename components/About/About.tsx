import { instrumentSerif } from "@/app/font";
import GradientBorderButton from "../GradientBorderButton";

const About = () => {
  return (
    <div className="w-full h-[100vh] flex items-center px-18 relative">
      <div className="w-full h-[65%] flex">
        <div className="w-[50%] flex flex-col gap-7">
          <span className="w-fit px-4 py-1 rounded-full bg-[#161D21] text-white text-sm">
            About
          </span>
          <h1 className="text-6xl text-white font-semibold">
            Powered by Results
          </h1>
          <h3
            className={`text-6xl text-[#F99E5E] ${instrumentSerif.className}`}
          >
            Built on Integrity
          </h3>
          <p className="text-white">
            At OptiRank, we drive organic growth with data-driven SEO strategies
            that boost rankings, attract the right audience, and convert
            visitors into customers. Whether youre a startup or a leading brand
          </p>
          <GradientBorderButton>Contact</GradientBorderButton>
        </div>
        <div className="w-[50%] flex justify-end">
          <div className="w-[65%] h-full flex flex-col gap-3">
            <div className="h-[55%] w-full flex gap-3">
              <div className="w-full bg-[#131618] rounded-md"></div>
              <div className="w-full bg-[#131618] rounded-md"></div>
            </div>
            <div className="h-[45%] w-full bg-[#131618] rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="w-[25%] aspect-square absolute right-60 top-42 rounded-full bg-[linear-gradient(180deg,#6957ba00_0%,#7ec2f4_48.08%,#6957ba00_81.05%)] blur-[274px] -z-10 border opacity-80"></div>
    </div>
  );
};

export default About;
