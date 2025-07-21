import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <div>
      <h1>Web Quads</h1>
      <h3>Where Ideas Meet Innovation</h3>
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
