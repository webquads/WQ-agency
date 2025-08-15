"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TeamMembers = () => {
  const [id, setId] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (id === 5) {
        setId(1);
      } else {
        setId((prevCount) => prevCount + 1);
      }
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [id]);
  return (
    <div className="w-full h-[55vh] max-h-[500px] bg-transparent flex items-center justify-center relative overflow-hidden">
      {/* <div
        id="3"
        className={`${
          id == 3
            ? "animate-[reviewZ_1s_forwards]"
            : (id == 3 + 1 || id == 0)
            ? " animate-[reviewPlus_1s_forwards]"
            : id == 3 - 1
            ? "animate-[reviewBefore_1s_forwards]"
            : "-scale-0"
        } w-[27%] h-full absolute rounded-md shadow-md shadow-gray-50/50`}
      >
        4
      </div>

      <div
        id="0"
        className={`${
          id == 0
            ? "animate-[reviewZ_1s_forwards]"
            : id == 0 + 1
            ? " animate-[reviewPlus_1s_forwards]"
            : (id == 0 - 1 || id == 0 + 3)
            ? "animate-[reviewBefore_1s_forwards]"
            : "-scale-0"
        } w-[27%] h-full absolute rounded-md shadow-md shadow-gray-50/50`}
      >
        1
      </div>

      <div
        id="1"
        className={`${
          id == 1
            ? "animate-[reviewZ_1s_forwards]"
            : id == 1 + 1
            ? " animate-[reviewPlus_1s_forwards]"
            : id == 1 - 1
            ? "animate-[reviewBefore_1s_forwards]"
            : "-scale-0"
        } w-[27%] h-full absolute rounded-md shadow-md shadow-gray-50/50`}
      >
        2
      </div>

      <div
        id="2"
        className={`${
          id == 2
            ? "animate-[reviewZ_1s_forwards]"
            : id == 2 + 1
            ? " animate-[reviewPlus_1s_forwards]"
            : id == 2 - 1
            ? "animate-[reviewBefore_1s_forwards]"
            : "-scale-0"
        } w-[27%] h-full absolute rounded-md shadow-md shadow-gray-50/50`}
      >
        3
      </div> */}

      {/* 
        1 ==> "-translate-x-[180%] -rotate-8 translate-y-22"
        2 ==> "-translate-x-[90%] -rotate-4 translate-8"
        3 ==> "z-30"
        4==> "translate-x-[90%] translate-y-8 rotate-4 z-20"
        5 ==> "translate-x-[180%] rotate-8 translate-y-22"
      */}

      <div
        id="1"
        className={`h-full w-[20%] border bg-[#161D21] absolute transition-all duration-900 transform flex items-center justify-center rounded-md ${
          id === 1
            ? "z-50"
            : id === 2
            ? "-translate-x-[90%] -rotate-4 translate-8 z-40"
            : id === 3
            ? "-translate-x-[180%] -rotate-8 translate-y-22 z-30"
            : id === 4
            ? "animate-[teamCard_1s_forwards] z-30"
            : id === 5 && "translate-x-[90%] translate-y-8 rotate-4 z-40"
        }`}
      >
        <Image src={"/pic-1.png"} alt="pic-1" width={300} height={300} />
      </div>
      <div
        id="2"
        className={`h-full w-[20%] border bg-[#161D21] absolute transition-all duration-900 transform flex items-center justify-center rounded-md ${
          id === 2
            ? "z-50"
            : id === 3
            ? "-translate-x-[90%] -rotate-4 translate-8 z-40"
            : id === 4
            ? "-translate-x-[180%] -rotate-8 translate-y-22 z-30"
            : id === 5
            ? "animate-[teamCard_1s_forwards] z-30"
            : id === 1 && "translate-x-[90%] translate-y-8 rotate-4 z-40"
        }`}
      >
        <Image src={"/pic-2.png"} alt="pic-1" width={300} height={300} />
      </div>

      <div
        id="3"
        className={`h-full w-[20%] border bg-[#161D21] absolute transition-all duration-900 transform flex items-center justify-center rounded-md ${
          id === 3
            ? "z-50"
            : id === 4
            ? "-translate-x-[90%] -rotate-4 translate-8 z-40"
            : id === 5
            ? "-translate-x-[180%] -rotate-8 translate-y-22 z-30"
            : id === 1
            ? "animate-[teamCard_1s_forwards] z-30"
            : id === 2 && "translate-x-[90%] translate-y-8 rotate-4 z-40"
        }`}
      >
        <Image src={"/pic-3.png"} alt="pic-1" width={300} height={300} />
      </div>

      <div
        id="4"
        className={`h-full w-[20%] border bg-[#161D21] absolute transition-all duration-900 transform flex items-center justify-center rounded-md ${
          id === 4
            ? "z-50"
            : id === 5
            ? "-translate-x-[90%] -rotate-4 translate-8 z-40"
            : id === 1
            ? "-translate-x-[180%] -rotate-8 translate-y-22 z-30"
            : id === 2
            ? "animate-[teamCard_1s_forwards] z-30"
            : id === 3 && "translate-x-[90%] translate-y-8 rotate-4 z-40"
        }`}
      >
        <Image src={"/pic-4.png"} alt="pic-1" width={300} height={300} />
      </div>
      <div
        id="5"
        className={`h-full w-[20%] border bg-[#161D21] absolute transition-all duration-900 transform flex items-center justify-center rounded-md ${
          id === 5
            ? "z-50"
            : id === 1
            ? "-translate-x-[90%] -rotate-4 translate-8 z-40"
            : id === 2
            ? "-translate-x-[180%] -rotate-8 translate-y-22 z-30"
            : id === 3
            ? "animate-[teamCard_1s_forwards] z-30"
            : id === 4 && "translate-x-[90%] translate-y-8 rotate-4 z-40"
        }`}
      >
        <Image src={"/pic-1.png"} alt="pic-1" width={300} height={300} />
      </div>
    </div>
  );
};

export default TeamMembers;
