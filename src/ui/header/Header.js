import "./header.css";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import ButtonGroup from "./ButtonGroup";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="header-util-group">
        <SearchBox />
        <ButtonGroup />
      </div>
    </div>
  );
}

export default Header;
