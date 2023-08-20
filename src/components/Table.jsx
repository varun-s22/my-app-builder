import { useRef } from "react";

function Table(props) {
  const tableRef = useRef(null);

  return (
    <table
      className="table-auto border-collapse border border-gray-300"
      style={props.options}
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
