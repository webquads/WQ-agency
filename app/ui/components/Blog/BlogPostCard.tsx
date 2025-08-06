"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  date: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  isMiddleCard?: boolean;
}

const BlogPostCard = ({ post, isMiddleCard = false }: BlogPostCardProps) => {
  return (
    <div>
      <Link
        href={`/blog/${post.id}`}
        className={`
          group relative rounded-lg shadow-lg overflow-hidden
          bg-gray-900 border border-gray-800 transition-transform transform
          hover:scale-105 focus:scale-105
          flex flex-col
        `}
        aria-labelledby={`blog-title-${post.id}`}
      >
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            width={600}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/420623b8-f2b4-4790-92a9-701eebecdd1a.png`;
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-50 rounded-full w-32 h-32 flex items-center justify-center backdrop-blur-sm drop-shadow-lg">
              <span className="text-white italic text-lg sm:text-xl font-semibold select-none">
                Read
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow justify-between">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span className="bg-gray-700 px-2 rounded-full whitespace-nowrap select-none">
              {post.category}
            </span>
            <time dateTime={new Date(post.date).toISOString()}>
              {post.date}
            </time>
          </div>
          <h3
            id={`blog-title-${post.id}`}
            className={`text-lg font-semibold leading-snug ${
              isMiddleCard ? "text-orange-400" : "text-white"
            }`}
          >
            {post.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
