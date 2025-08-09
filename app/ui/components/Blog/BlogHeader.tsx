export default function BlogHeader({ title, subtitle }) {
  return (
    <header className="text-center  mb-10">
      <span className="bg-gray-800 text-gray-300 text-xs rounded-full px-3 py-1 mb-12 uppercase tracking-wider select-none">
        Blog
      </span>
      <h1 className="text-white text-4xl sm:text-5xl font-semibold text-center max-w-4xl mt-4">
        {title}
      </h1>
      <h2 className="text-orange-500 italic text-center text-2xl sm:text-4xl mt-5 font-serif max-w-3xl">
        {subtitle}
      </h2>
    </header>
  );
}
