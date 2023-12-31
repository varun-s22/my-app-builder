import { useEffect, useRef } from "react";
import "../styles/Button.css";

function Button(props) {
  const buttonRef = useRef(null);
  const color = props?.options?.color || "black";

  return (
    <button
      className="bg-transparent space-y-5 py-6 flex sm:items-center sm:space-y-0 sm:space-x-6 shadow-none border-b border-gray-300 component-btn"
      {...(props.onClick && { onClick: props.onClick })}
      ref={buttonRef}
      style={props.options}
    >
      {props && props.icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-white-200 bg-white shadow-xl ml-2">
          <img className="p-2 bg-white" src={props.icon} alt="icon" />
        </div>
      )}
      <div className="w-inherit text-center space-y-2 sm:text-left">
        <div className="space-y-1.5">
          <p className={`text-md text-${color} font-normal`}>{props.heading}</p>
          {props && props.innerText && (
            <p className="text-xs text-slate-500">{props.innerText}</p>
          )}
        </div>
      </div>
    </button>
  );
}
export default Button;
