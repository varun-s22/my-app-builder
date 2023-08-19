import { useEffect, useRef, useState } from "react";
function DropDown(props) {
  const dropDownRef = useRef(null);
  useEffect(() => {
    if (props.x && props.y && dropDownRef.current) {
      dropDownRef.current.style.position = "absolute";
      dropDownRef.current.style.left = props.x + "px";
      dropDownRef.current.style.top = props.y + "px";
      dropDownRef.current.style.outline = "indigo solid 2px";
      dropDownRef.current.style.background = "white";
      dropDownRef.current.style.borderRadius = "10px";
      dropDownRef.current.style.padding = "10px";
      dropDownRef.current.style.boxShadow = "3px 5px 10px 2px rgba(0,0,0,0.75)";
      if (props.width) dropDownRef.current.style.width = props.width + "px";
    }
  }, [props?.x, props?.y]);
  return (
    <div
      className="relative inline-block text-left border rounded-md p-2 bg-white shadow-md"
      style={{ width: props.width }}
      ref={dropDownRef}
    >
      <select
        className="dropdown-menu-option appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ref={dropDownRef}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="fill-current h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M6 8l4 4 4-4"></path>
        </svg>
      </div>
    </div>
  );
}

export default DropDown;
