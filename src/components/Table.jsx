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
    <table class="table-auto" ref={tableRef}>
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
