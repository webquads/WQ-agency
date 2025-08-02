import Image from "next/image";
import logo2 from "../../../public/images/webQuads_logo-Q2.png";
import logo from "../../../public/images/webQuads_logoQ.png";

export default function Logo() {
  return (
    <>
      <Image
        src={logo}
        alt="WebQuads Logo"
        width={270}
        height={100}
        className="h-12 w-auto"
      />
      <Image
        src={logo2}
        alt="WebQuads Logo"
        width={270}
        height={100}
        className="h-12 w-auto"
      />
    </>
  );
}
