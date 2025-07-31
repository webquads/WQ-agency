"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LogoLoading = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className={`${
          loading ? "w-fit animate-[loader_3s_linear_infinite]" : "w-full"
        } flex items-center justify-center`}
      >
        <span
          className={`${
            loading ? "translate-x-[34.5%]" : "-translate-x-[700%]"
          } transform duration-1500`}
        >
          <Image
            src={"/logoPart1.png"}
            width={100}
            height={100}
            alt="logo im2age"
          />
        </span>
        <span
          className={`${
            loading
              ? "-translate-x-[34.5%] "
              : "translate-x-[700%]"
          } transform translate-y-[3.8%] duration-1500`}
        >
          <Image
            src={"/logoPart2.png"}
            width={100}
            height={100}
            alt="logo image"
          />
        </span>
      </div>
    </div>
  );
};

export default LogoLoading;
