import Button from "../Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./userOptions.css";

function UserOptions() {
  return (
    <div className="user-options">
      <div>
        <img src="https://i.pravatar.cc/48?u=legendaryNPC" alt="user-image" />
        <span className="user-dot" />
      </div>
      <Button type="header">
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
}

export default UserOptions;
