import { ReactNode } from "react";
import ParticleBackground from "./ParticleBackground";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative  min-h-screen">
      <ParticleBackground />
      {/* <div className="w-full h-full overflow-y-scroll">{children}</div> */}
      <div className="w-full ">{children}</div>
    </div>
  );
}
