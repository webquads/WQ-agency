import blogsData from "@/data/blogsData";
import { Blog } from "@/shared/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog: Blog | undefined = blogsData.find(
    (b: Blog) => b.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="text-red-500 text-center py-12">
        Blog not found.{" "}
        <Link href="/blogs" className="underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 flex flex-col items-center min-h-screen">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover object-center rounded-lg mb-8"
        />
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{blog.category}</span>
          <span>{blog.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="text-gray-300 leading-relaxed text-lg">{blog.content}</p>
      </div>
      <Link
        href="/blogs"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Back to All Blogs
      </Link>
    </div>
  );
}
