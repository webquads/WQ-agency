import { instrumentSerif } from "@/app/font";

interface HeadingTextProps {
  heading?: string;
  subHeading?: string;
  className?: string;
}

export const HeadingText = ({
  badge,
  heading,
  subHeading,
  className = "",
}: HeadingTextProps) => {
  return (
    <div
      className={`flex justify-center flex-col items-center  z-50 ${className}`}
    >
      <span className="bg-gray-800 text-gray-300 text-xs rounded-full px-3 py-1  uppercase tracking-wider select-none">
        {badge}
      </span>
      <h2 className="text-[clamp(2.25rem,3vw,4rem)]  text-center font-bold text-gray-200 mb-2 capitalize">
        {heading}
      </h2>
      <h2
        className={`capitalize text-[clamp(2rem,3vw,3rem)] pb-3  gradient-text font-semibold ${instrumentSerif.className}`}
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
