import { BlogButtonProps } from "@/types/blog";
import Link from "next/link";

export default function BlogButton({ href, text }: BlogButtonProps) {
  return (
    <Link href={href}>
      <span className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 inline-block">
        {text}
      </span>
    </Link>
  );
}
