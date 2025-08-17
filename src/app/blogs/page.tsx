import BlogButton from "@/components/Blog/BlogButton";
import BlogGrid from "@/components/Blog/BlogGrid";
import blogsData from "../../../public/Data/blogsData";

export default function BlogListPage() {
  return (
    <div className="py-12 px-4 flex flex-col mt-32 items-center min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-2">All Our Blogs</h1>
      <p className=" mb-10">Dive deeper into our insights</p>
      <BlogGrid blogs={blogsData} />
      <BlogButton href="/" text="Back to Home" />
    </div>
  );
}
