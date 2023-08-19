import { useEffect, useRef, useState } from "react";
import "../styles/Button.css";

function Button(props) {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (props.x && props.y && buttonRef.current) {
      buttonRef.current.style.position = "absolute";
      buttonRef.current.style.left = props.x + "px";
      buttonRef.current.style.top = props.y + "px";
      buttonRef.current.style.outline = "indigo solid 2px";
      buttonRef.current.style.background = "white";
      buttonRef.current.style.borderRadius = "10px";
      buttonRef.current.style.padding = "10px";
      buttonRef.current.style.boxShadow =
        "3px 5px 10px 2px rgba(0, 0, 0, 0.75)";
      if (props.width) buttonRef.current.style.width = props.width + "px";
    }
  }, [props?.x, props?.y]);

  return (
    <button
      className="bg-transparent space-y-5 sm:py-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 shadow-none border-b border-gray-300 component-btn"
      {...(props.onClick && { onClick: props.onClick })}
      ref={buttonRef}
    >
      {props && props.icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-white-200 bg-white shadow-xl ml-2">
          <img className="p-2 bg-white" src={props.icon} alt="icon" />
        </div>
      )}
      <div className="w-64 text-center space-y-2 sm:text-left">
        <div className="space-y-1.5">
          <p className={`text-md text-black font-normal`}>{props.heading}</p>
          {props && props.innerText && (
            <p className="text-xs text-slate-500">{props.innerText}</p>
          )}
        </div>
      </div>
    </button>
  );
}
export default Button;
