import blogsData from "../../../../public/data/blogsData";
import BlogButton from "./BlogButton";
import BlogGrid from "./BlogGrid";

import BlogHeader from "./BlogHeader";

export default function BlogSection() {
  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div className="py-12 px-4 flex flex-col mt-16  items-center min-h-screen">
      <BlogHeader title="Future SEO Trends" subtitle="You Should Follow" />
      <BlogGrid blogs={featuredBlogs} />
      <BlogButton href="/blogs" text="Explore More Blogs" />
    </div>
  );
}
