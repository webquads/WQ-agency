import Image from "next/image";
import Link from "next/link";
// import logo from "../../../public/images/webQuads_logoQ.png";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/webQuads_logo-Q2.png"
          alt="WebQuads Logo"
          width={270}
          height={100}
          className="h-8 lg:h-12 w-auto"
        />
      </Link>
    </>
  );
}
