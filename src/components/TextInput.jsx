import { useRef } from "react";

function TextInput(props) {
  const inputRef = useRef(null);

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="w-full px-9 py-2 border border-gray-300 rounded-md text-sm mb-4"
      ref={inputRef}
      {...(props.handleSearch && { onChange: props.handleSearch })}
      style={props.options}
    />
  );
}
export default TextInput;
