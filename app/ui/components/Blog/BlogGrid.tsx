import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs }) {
  return (
    <div className="group  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-12 mt-10 ">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
