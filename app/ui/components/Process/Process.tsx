const Process = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-2">
      <h1 className="text-3xl text-white text-center">How WebQuads Works?</h1>
      <div className="w-full flex-1 py-5 px-32 flex flex-col gap-5">
        <div className="w-full h-[24%] relative">
          <div className="w-[20%] h-full absolute left-0 top-0 text-8xl text-[#3A3A3C] font-semibold flex items-center justify-end opacity-75">
            01
          </div>
          <div className="w-[81.1%] h-full absolute right-0 top-0 rounded-md bg-[#1B222A]"></div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="w-[20%] h-full absolute left-0 top-0 text-8xl text-[#3A3A3C] font-semibold flex items-center justify-end opacity-75">
            02
          </div>
          <div className="w-[81.1%] h-full absolute right-0 top-0 rounded-md bg-[#1B222A]"></div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="w-[20%] h-full absolute left-0 top-0 text-8xl text-[#3A3A3C] font-semibold flex items-center justify-end opacity-75">
            03
          </div>
          <div className="w-[81.1%] h-full absolute right-0 top-0 rounded-md bg-[#1B222A]"></div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="w-[20%] h-full absolute left-0 top-0 text-8xl text-[#3A3A3C] font-semibold flex items-center justify-end opacity-75">
            04
          </div>
          <div className="w-[81.1%] h-full absolute right-0 top-0 rounded-md bg-[#1B222A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Process;
