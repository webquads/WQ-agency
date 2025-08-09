import { instrumentSerif } from "@/app/font";

interface HeadingTextProps {
  heading?: string;
  subHeading?: string;
  className?: string;
}

export const HeadingText = ({
  heading = "Expert Development Packages",
  subHeading = "Transparent Pricing for Your Success",

  className = "",
}: HeadingTextProps) => {
  return (
    <div
      className={`flex justify-center flex-col items-center gap-2 z-50 ${className}`}
    >
      <h2 className="text-8xl text-center font-bold text-gray-200 mb-2">
        {heading}
      </h2>
      <h2
        className={`text-4xl pb-3 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-semibold ${instrumentSerif.className}`}
      >
        {subHeading}
      </h2>
    </div>
  );
};

// Default usage (shows original text)
{
  /* <HeadingText />

// Custom text
<HeadingText 
  heading="Premium Plans" 
  subHeading="For Your Business" 
/> */
}

// With additional styling
