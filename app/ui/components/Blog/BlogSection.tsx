import BlogPostCard from "./BlogPostCard";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: "Keyword Research",
      date: "January 29, 2025",
      title: "YouTube SEO: How to Rank YouTube Videos in 2025",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/420623b8-f2b4-4790-92a9-701eebecdd1a.png",
      imageAlt:
        "A person holding a tablet and shouting into a megaphone, vibrant neon lit",
    },
    {
      id: 2,
      category: "Content Marketing",
      date: "October 8, 2025",
      title: "What It's Actually All About Content Marketing",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89281cf0-5901-4246-a174-01ab7a95bb0c.png",
      imageAlt:
        "Close up on a person using a phone at a desk with design sketches and purple lighting",
    },
    {
      id: 3,
      category: "Keyword Research",
      date: "July 12, 2025",
      title: "10 Crucial SEO Ranking Factors You Need to Know",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4206ab9a-3e6d-497d-b071-467fc0beff37.png",
      imageAlt:
        "Hands typing near a computer screen showing SEO ranking graphs with blue lighting",
    },
  ];

  return (
    <div className="min-h-screen  text-white flex flex-col items-center px-6 py-16 sm:py-24 font-sans">
      {/* Badge */}
      <span className="bg-gray-800 text-gray-300 text-xs rounded-full px-3 py-1 mb-6 uppercase tracking-wider select-none">
        Blog
      </span>

      {/* Titles */}
      <h1 className="text-4xl sm:text-5xl font-semibold text-center max-w-4xl">
        Trending Topics
      </h1>
      <h2 className="text-orange-400 italic text-center text-2xl sm:text-3xl mt-5 font-serif max-w-3xl">
        You Should Follow
      </h2>

      {/* Blog Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-7xl w-full">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} isMiddleCard={index === 1} />
        ))}
      </div>

      {/* Explore More Button */}
      <button
        type="button"
        className="mt-16 px-8 py-3 rounded-full border border-gray-700 text-white bg-transparent hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 select-none"
      >
        Explore More Blogs
      </button>
    </div>
  );
};

export default BlogSection;
