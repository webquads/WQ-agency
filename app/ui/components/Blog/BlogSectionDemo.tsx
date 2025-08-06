import blogsData from "../../../../public/data/blogsData";
import BlogButton from "./BlogButton";
import BlogGridDemo from "./BlogGridDemo";
import BlogHeader from "./BlogHeader";

export default function BlogSectionDemo() {
  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div className="py-12 px-4 flex flex-col items-center min-h-screen">
      <BlogHeader title="Future SEO Trends" subtitle="You Should Follow" />
      <BlogGridDemo blogs={featuredBlogs} />
      <BlogButton href="/blogs" text="Explore More Blogs" />
    </div>
  );
}
