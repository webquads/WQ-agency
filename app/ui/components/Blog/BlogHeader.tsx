export default function BlogHeader({ title, subtitle }) {
  return (
    <header className="text-center mb-12">
      <p className="text-lg text-gray-400">Blog</p>
      <h1 className="text-5xl font-bold mt-2">{title}</h1>
      <h2 className="text-5xl font-bold text-purple-400">{subtitle}</h2>
    </header>
  );
}
