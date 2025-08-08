import BlogButton from "../ui/components/Blog/BlogButton";
import BlogGridDemo from "../ui/components/Blog/BlogGridDemo";
import blogsData from "../../public/data/blogsData";

export default function BlogListPage() {
  return (
    <div className="py-12 px-4 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-2">All Our Blogs</h1>
      <p className="text-gray-400 mb-10">Dive deeper into our insights</p>
      <BlogGridDemo blogs={blogsData} />
      <BlogButton href="/" text="Back to Home" />
    </div>
  );
}
