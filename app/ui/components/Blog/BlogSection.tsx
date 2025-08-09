import blogsData from "../../../../public/data/blogsData";
import { HeadingText } from "../HeadingText/HeadingText";
import BlogButton from "./BlogButton";
import BlogGrid from "./BlogGrid";

export default function BlogSection() {
  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div className="py-12 px-4 flex flex-col   items-center justify-center min-h-screen">
      <HeadingText
        badge="Blog"
        heading="discover latest technology"
        subHeading="you should follow"
      />

      <BlogGrid blogs={featuredBlogs} />
      <BlogButton href="/blogs" text="Explore More Blogs" />
    </div>
  );
}
