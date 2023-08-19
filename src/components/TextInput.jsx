import { useEffect, useRef } from "react";

function TextInput(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (props.options && inputRef.current) {
      Object.assign(inputRef.current.style, props.options);
      inputRef.current.style.width = props.width + "px";
    }
  }, [props?.x, props?.y, props?.options]);
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
