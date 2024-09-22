import { FiLifeBuoy } from "react-icons/fi";
import { PiBellBold } from "react-icons/pi";
import "./buttonGroup.css";
import Button from "../Button";

function ButtonGroup() {
  return (
    <ul className="btn-container">
      <li>
        <Button type="header">
          <FiLifeBuoy />
        </Button>
      </li>
      <li>
        <Button type="header" notify={true}>
          <PiBellBold />
        </Button>
      </li>
    </ul>
  );
}

export default ButtonGroup;
