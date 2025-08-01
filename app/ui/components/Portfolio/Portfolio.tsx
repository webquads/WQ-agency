const Portfolio = () => {
  const items = Array(15).fill(null);
  return (
    <div className="w-full flex justify-center items-center flex-col gap-3 mt-8">
      <h1 className="text-3xl text-white">Our Clients & Partners</h1>
      <div className="w-full h-[20vh] mx-h-[100px] p-5 relative overflow-hidden">
        <div className="flex items-center gap-8 h-full animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {items.map((_, i) => (
            <div
              key={i}
              className="h-full aspect-square rounded-md bg-[#161D21] flex-shrink-0"
            />
          ))}
          {items.map((_, i) => (
            <div
              key={`copy-${i}`}
              className="h-full aspect-square rounded-md bg-[#161D21] flex-shrink-0"
            />
          ))}
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(to_right,black,transparent_35%_65%,black)] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Portfolio;
