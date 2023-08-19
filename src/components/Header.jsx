import menuIcon from "../images/menu.png";

function Header() {
  return (
    <div className="App-header">
      <img className="w-5 h-5 mt-1" src={menuIcon} alt="icon" />
      <h1 className="App-header-text">Design Board (Draft)</h1>
    </div>
  );
}
export default Header;
