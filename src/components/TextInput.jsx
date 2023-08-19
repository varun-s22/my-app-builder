import { useEffect, useRef } from "react";

function TextInput(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.x && props.y && inputRef.current) {
      inputRef.current.style.position = "absolute";
      inputRef.current.style.left = props.x + "px";
      inputRef.current.style.top = props.y + "px";
      inputRef.current.style.outline = "indigo solid 2px";
      inputRef.current.style.background = "white";
      inputRef.current.style.borderRadius = "10px";
      inputRef.current.style.padding = "10px";
      inputRef.current.style.boxShadow = "3px 5px 10px 2px rgba(0,0,0,0.75)";
      if (props.width) inputRef.current.style.width = props.width + "px";
    }
  }, [props?.x, props?.y]);
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="w-full px-9 py-2 border border-gray-300 rounded-md text-sm mb-4"
      ref={inputRef}
      {...(props.handleSearch && { onChange: props.handleSearch })}
    />
  );
}
export default TextInput;
