"use client"

import { useEffect, useRef } from "react";

const Portfolio = () => {

  const marQueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const marquee = marQueeRef.current;
      if (!marquee) return;

      const newDiv = document.createElement('div');
      newDiv.className = 'bg-gray-700 rounded w-[15%] h-full absolute animate-[marquee1_20s_linear_forwards] cursor-pointer';

      newDiv.addEventListener('animationend', () => {
        if (newDiv.parentNode === marquee) {
          newDiv.remove();
        }
      });
      marquee.appendChild(newDiv);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="w-full flex justify-center items-center flex-col gap-3 mt-8">
      <h1 className="text-3xl text-white">Our Clients & Partners</h1>
      <div className="w-full h-[20vh] mx-h-[100px] p-5 relative overflow-hidden">
        {/* <div className="flex items-center gap-8 h-full animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {items.map((_, i) => (
            <div
              key={i}
              className="h-full w-[15%] min-w-[100px] rounded-md bg-[#161D21] flex-shrink-0 flex items-center justify-between px-4 text-white text-3xl cursor-pointer"
            >
              <AiFillAmazonCircle />
              <h2 className="hidden md:block">Amazon</h2>
            </div>
          ))}
          {items.map((_, i) => (
            <div
              key={`copy-${i}`}
              className="h-full w-[15%] min-w-[100px] rounded-md bg-[#161D21] flex-shrink-0 flex items-center justify-between px-4 text-white text-3xl cursor-pointer"
            >
              <AiFillBug />
              <h2 className="hidden md:block">Bug</h2>
            </div>
          ))}
        </div> */}
        <div id="marquee" ref={marQueeRef} className="w-full h-full flex items-center relative">
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(to_right,black,transparent_35%_65%,black)] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Portfolio;
