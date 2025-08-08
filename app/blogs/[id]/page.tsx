import BlogButton from "@/app/ui/components/Blog/BlogButton";
import blogsData from "@/public/Data/blogsData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }) {
  const blog = blogsData.find((b) => b.id === Number(params.id));

  if (!blog) return notFound();

  return (
    <div className="py-12 px-4 flex flex-col items-center min-h-screen">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover object-center rounded-lg mb-8"
          // onError={(e) => {
          //   e.target.onerror = null;
          //   e.target.src =
          //     "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/420623b8-f2b4-4790-92a9-701eebecdd1a.png";
          // }}
        />
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{blog.category}</span>
          <span>{blog.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="text-gray-300 leading-relaxed text-lg">{blog.content}</p>
      </div>
      <BlogButton href="/blogs" text="Back to All Blogs" />
    </div>
  );
}
