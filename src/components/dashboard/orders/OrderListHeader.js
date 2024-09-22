import "./orderListHeader.css";
import Button from "../../../ui/Button.js";
import { IoFilterSharp } from "react-icons/io5";
import { FiPlus, FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

export default function OrderListHeader() {
  return (
    <div className="order-list-header">
      <div className="order-list-heading">
        <h3>All sales orders</h3>
        <IoMdArrowDropdown />
      </div>
      <div className="order-list-buttons">
        <Button type="order-list">
          <IoFilterSharp />
        </Button>
        <Button type="order-list">
          <FiSearch />
        </Button>
        <Button type="order-list">
          <FiPlus />
        </Button>
      </div>
    </div>
  );
}
