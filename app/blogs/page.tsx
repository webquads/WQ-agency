import BlogButton from "../ui/components/Blog/BlogButton";

import blogsData from "../../public/data/blogsData";
import BlogGrid from "../ui/components/Blog/BlogGrid";
import { HeadingText } from "../ui/components/HeadingText/HeadingText";

export default function BlogListPage() {
  return (
    <div className="py-12 px-4 flex flex-col mt-32 items-center min-h-screen text-white">
      <HeadingText
        badge="Blogs"
        heading="All Our Blogs"
        subHeading="Dive deeper into our insights"
      />
      <BlogGrid blogs={blogsData} />
      <BlogButton href="/" text="Back to Home" />
    </div>
  );
}
