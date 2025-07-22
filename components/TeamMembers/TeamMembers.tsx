"use client";

import { useEffect, useState } from "react";

const TeamMembers = () => {
  const [id, setId] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (id === 3) {
        setId(0);
      } else {
        setId((prevCount) => prevCount + 1);
      }
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [id]);
  return (
    <div className="w-full h-[65vh] bg-transparent border border-red-500 flex items-center justify-center relative">
      <div
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
      </div>
    </div>
  );
};

export default TeamMembers;
