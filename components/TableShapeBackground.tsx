const TableShapeBackground = () => {
  return (
    <div className="w-full h-screen border border-red-500 overflow-hidden">
      <table className="w-[220%] h-[220%] border-separate border-spacing-0 transform  -skew-30 -rotate-10 -translate-y-280 -translate-x-30">
        <tbody>
          {Array.from({ length: 30 }).map((_, i) => (
            <tr key={i} className="border">
              {Array.from({ length: 60 }).map((_, i) => (
                <td key={i} className="border hover:bg-orange-600/50"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShapeBackground;
