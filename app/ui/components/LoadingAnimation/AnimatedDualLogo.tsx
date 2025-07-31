import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AnimatedDualLogoProps {
  src1: string; // Artboard 1 copy 2.png (blue and orange)
  src2: string; // Artboard 1 copy 3.png (blue gradient)
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  duration?: number;
  minScale?: number;
}

export default function AnimatedDualLogo({
  src1,
  src2,
  alt = "Logo",
  width = 200,
  height = 200,
  className = "",
  duration = 3,
  minScale = 0.5,
}: AnimatedDualLogoProps) {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const [activeLogo, setActiveLogo] = useState(1);

  useEffect(() => {
    if (isInView) {
      const animate = async () => {
        // Start with first logo (blue and orange)
        setActiveLogo(1);

        // Reset both logos
        await Promise.all([
          controls1.start({
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scale: minScale,
            opacity: 1,
            rotate: 0,
          }),
          controls2.start({
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scale: minScale,
            opacity: 0,
            rotate: 0,
          }),
        ]);

        // Draw first logo with a geometric reveal pattern
        await controls1.start({
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          rotate: 5,
          transition: {
            duration: duration,
            ease: "easeInOut",
          },
        });

        // Pause with a subtle rotation
        await controls1.start({
          rotate: -5,
          transition: { duration: 1, ease: "easeInOut" },
        });

        // Transition to second logo with a morphing effect
        setActiveLogo(2);
        await Promise.all([
          controls1.start({
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            scale: 0.8,
            opacity: 0.7,
            rotate: 0,
            transition: { duration: duration / 2, ease: "easeInOut" },
          }),
          controls2.start({
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            scale: 0.8,
            opacity: 0.7,
            rotate: 0,
            transition: { duration: duration / 2, ease: "easeInOut" },
          }),
        ]);

        // Fully reveal second logo
        await Promise.all([
          controls1.start({
            opacity: 0,
            scale: minScale,
            transition: { duration: duration / 2, ease: "easeInOut" },
          }),
          controls2.start({
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            opacity: 1,
            rotate: 5,
            transition: { duration: duration / 2, ease: "easeInOut" },
          }),
        ]);

        // Pause with a subtle rotation
        await controls2.start({
          rotate: -5,
          transition: { duration: 1, ease: "easeInOut" },
        });

        // Reset and restart
        await controls2.start({
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          scale: minScale,
          opacity: 0,
          rotate: 0,
          transition: { duration: duration / 2, ease: "easeInOut" },
        });

        // Restart the animation
        animate();
      };

      animate();
    }
  }, [isInView, controls1, controls2, duration, minScale]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Background element for visual interest */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-orange-50 opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: duration * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* First Logo (Blue and Orange) */}
      <motion.div className="relative z-10" animate={controls1}>
        <Image
          src={src1}
          alt={`${alt} 1`}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>

      {/* Second Logo (Blue Gradient) */}
      <motion.div className="relative z-10" animate={controls2}>
        <Image
          src={src2}
          alt={`${alt} 2`}
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>

      {/* Active indicator */}
      <div className="absolute bottom-0 flex space-x-2">
        {[1, 2].map((logo) => (
          <motion.div
            key={logo}
            className="w-2 h-2 rounded-full bg-blue-500"
            animate={{
              scale: activeLogo === logo ? 1.5 : 1,
              opacity: activeLogo === logo ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
