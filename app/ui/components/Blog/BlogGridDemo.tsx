import BlogCardDemo from "./BlogCardDemo";

export default function BlogGridDemo({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
      {blogs.map((blog) => (
        <BlogCardDemo key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
