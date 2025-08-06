"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCardDemo({ blog }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blogs/${blog.id}`)}
      className="bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden transform transition hover:scale-105"
    >
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/1a202c/ffffff?text=Image+Error";
        }}
      />
      <div className="p-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{blog.category}</span>
          <span>{blog.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-gray-300 text-sm">{blog.content.slice(0, 100)}...</p>
      </div>
    </div>
  );
}
