import NavBarJs from "@/components/Navbar/NavBarJs";
import ParticleBackground from "@/components/ParticleBackground";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParticleBackground />
      <NavBarJs />
      {children}
    </>
  );
}
