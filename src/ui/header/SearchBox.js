import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import "./searchbox.css";

function SearchBox() {
  return (
    <div className="search-box">
      <FiSearch className="search-icon" />
      <input className="search-input" placeholder="Search" />
      <SearchCategory />
    </div>
  );
}

function SearchCategory() {
  return (
    <button className="search-category-btn">
      All
      <IoMdArrowDropdown />
    </button>
  );
}

export default SearchBox;
