"use client";

import { BlogCardProps } from "@/types/blog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blogs/${blog.id}`)}
      className={`
          group relative rounded-lg shadow-lg overflow-hidden
          bg-gray-900 border border-gray-800 transition-transform transform
          hover:scale-105 focus:scale-105
          flex flex-col [&:not(:hover)]:opacity-100 group-hover:[&:not(:hover)]:opacity-50
        `}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="opacity-0 hover:opacity-70 transition-opacity duration-500 ease-in-out bg-black bg-opacity-50 rounded-full w-32 h-32 flex items-center justify-center backdrop-blur-sm drop-shadow-lg">
            <span className="text-white italic text-lg sm:text-xl font-semibold select-none">
              Read
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
          <span className="bg-gray-700 px-2 rounded-full whitespace-nowrap select-none">
            {blog.category}
          </span>
          <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
        </div>
        <h3
          id={`blog-title-${blog.id}`}
          className={`text-lg font-semibold leading-snug text-white`}
        >
          {blog.title}
        </h3>
      </div>
    </div>
  );
}
