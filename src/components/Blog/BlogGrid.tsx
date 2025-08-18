import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  content: string;
}

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className="group  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-12 mt-10 ">
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
