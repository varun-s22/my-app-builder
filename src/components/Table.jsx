import { useRef, useEffect } from "react";

function Table(props) {
  const tableRef = useRef(null);
  useEffect(() => {
    if (props.x && props.y && tableRef.current) {
      tableRef.current.style.position = "absolute";
      tableRef.current.style.left = props.x + "px";
      tableRef.current.style.top = props.y + "px";
      tableRef.current.style.outline = "indigo solid 2px";
      tableRef.current.style.background = "white";
      tableRef.current.style.borderRadius = "10px";
      tableRef.current.style.padding = "10px";
      tableRef.current.style.boxShadow = "3px 5px 10px 2px rgba(0,0,0,0.75)";
      if (props.width) tableRef.current.style.width = props.width + "px";
    }
  }, [props?.x, props?.y]);
  return (
    <table
      className="table-auto border-collapse border border-gray-300"
      style={{ width: props.width }}
      ref={tableRef}
    >
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 p-2">Song</th>
          <th className="border border-gray-300 p-2">Artist</th>
          <th className="border border-gray-300 p-2">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">The Sliding Mr. Bones</td>
          <td className="border border-gray-300 p-2">Malcolm Lockyer</td>
          <td className="border border-gray-300 p-2">1961</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">Witchy Woman</td>
          <td className="border border-gray-300 p-2">Eagles</td>
          <td className="border border-gray-300 p-2">1972</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">Shining Star</td>
          <td className="border border-gray-300 p-2">Earth, Wind & Fire</td>
          <td className="border border-gray-300 p-2">1975</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">The Chain</td>
          <td className="border border-gray-300 p-2">Fleetwood Mac</td>
          <td className="border border-gray-300 p-2">1977</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">Dance With Me</td>
          <td className="border border-gray-300 p-2">Orleans</td>
          <td className="border border-gray-300 p-2">1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
