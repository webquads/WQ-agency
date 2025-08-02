const TableShapeBackground = () => {
  type TailwindColor =
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink"
    | "gray"
    | "orange"
    | "teal";
  type TailwindShade = "400" | "500" | "600";

  const allColors: `bg-${TailwindColor}-${TailwindShade}`[] = [
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-teal-400",
    "bg-teal-500",
    "bg-teal-600",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
  ];

  const getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <table className="w-[300%] h-[300%] border-spacing-0 transform origin-top -skew-x-[40deg] absolute top-0 left-0">
        <tbody>
          {Array.from({ length: 55 }).map((_, i) => (
            <tr key={i}>
              {Array.from({ length: 90 }).map((_, j) => (
                <td
                  key={`${i}-${j}`}
                  className="border border-opacity-10 p-0 group"
                >
                  <div
                    className={`w-full h-full ${getRandomColor()} opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 group-hover:transition-none`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none bg-radial from-transparent from-30% to-black"></div>
    </div>
  );
};

export default TableShapeBackground;
