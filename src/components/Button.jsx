import "../styles/Button.css";
function Button(props) {
  return (
    <button className="bg-transparent space-y-5 sm:py-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 shadow-none border-b border-gray-300">
      <div className="flex items-center justify-center w-12 h-12 bg-white-200 bg-white shadow-xl">
        <img className="p-2 bg-white" src={props.icon} alt="icon" />
      </div>

      <div className="w-64 text-center space-y-2 sm:text-left">
        <div className="space-y-1.5">
          <p className="text-md text-black font-normal">{props.heading}</p>
          <p className="text-xs text-slate-500">{props.innerText}</p>
        </div>
      </div>
    </button>
  );
}
export default Button;
