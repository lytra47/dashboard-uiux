import "./detailsNavigation.css";
import {
  HiOutlinePencil,
  HiOutlinePrinter,
  HiOutlineMail,
  HiOutlinePaperClip,
  HiOutlineX,
} from "react-icons/hi";
import { PiDotsThreeOutline } from "react-icons/pi";
import Button from "../../../ui/Button";
import { useState } from "react";

export default function DetailsNavigation() {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="details-header">
      <div className="details-header-left">
        <a
          className={`tab-name ${isActive === 1 && "tab-active"}`}
          onClick={() => setIsActive(1)}
        >
          Packages
        </a>
        <a
          className={`tab-name ${isActive === 2 && "tab-active"}`}
          onClick={() => setIsActive(2)}
        >
          Invoices
        </a>
        <a
          className={`tab-name ${isActive === 3 && "tab-active"}`}
          onClick={() => setIsActive(3)}
        >
          History
        </a>
      </div>
      <DetailsButtons />
    </div>
  );
}

function DetailsButtons() {
  return (
    <div className="details-header-right">
      <Button type="details" tooltipText="Edit">
        <HiOutlinePencil />
      </Button>
      <Button type="details" tooltipText="Print">
        <HiOutlinePrinter />
      </Button>
      <Button type="details" tooltipText="E-mail">
        <HiOutlineMail />
      </Button>
      <Button type="details" tooltipText="Save">
        <HiOutlinePaperClip />
      </Button>
      <Button type="details" tooltipText="options">
        <PiDotsThreeOutline />
      </Button>
      <Button>
        <HiOutlineX />
      </Button>
    </div>
  );
}
