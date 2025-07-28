const TableShapeBackground = () => {
  return (
    <div className="w-full h-screen border border-red-500 overflow-hidden">
      <table className="w-[190%] h-[190%] border-separate border-spacing-0 transform -skew-12 -rotate-10 -translate-y-120 -translate-x-16">
        <tbody>
          {Array.from({ length: 30 }).map((_, i) => (
            <tr key={i} className="border">
              {Array.from({ length: 60 }).map((_, i) => (
                <td key={i} className="border hover:bg-amber-400"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShapeBackground;
