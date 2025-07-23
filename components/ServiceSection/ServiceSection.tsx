import { instrumentSerif } from "@/app/layout";
import React from "react";

const ServiceSection = () => {
  return (
    <div className="h-screen    px-8 border-2 border-red-600">
      <h1 className="text-white">Our Strategies</h1>
      <h2 className={`text-[#F99E5E] ${instrumentSerif.className}`}>
        Where Ideas Meet Innovation
      </h2>
    </div>
  );
};

export default ServiceSection;
