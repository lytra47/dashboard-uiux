import Button from "../Button";
import "./sidebarButtonList.css";
import {
  HiOutlineChartPie,
  HiOutlineUserGroup,
  HiOutlineFolder,
  HiOutlineDocumentText,
  HiOutlineCube,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";
import { PiNewspaperClipping } from "react-icons/pi";
import { BsNut } from "react-icons/bs";
import { LuPlug } from "react-icons/lu";
import { useState } from "react";

function SidebarButtonList() {
  const [selectedBtn, setSelectedBtn] = useState("");

  return (
    <ul className="sidebar-btn-list">
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "pie"}
          onClick={() => setSelectedBtn("pie")}
        >
          <HiOutlineChartPie />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          notify={true}
          isActive={selectedBtn === "group"}
          onClick={() => setSelectedBtn("group")}
        >
          <HiOutlineUserGroup />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "folder"}
          onClick={() => setSelectedBtn("folder")}
        >
          <HiOutlineFolder />
        </Button>
      </li>
      <li>
        <RxDotFilled />
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "text"}
          onClick={() => setSelectedBtn("text")}
        >
          <HiOutlineDocumentText />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "cube"}
          onClick={() => setSelectedBtn("cube")}
        >
          <HiOutlineCube />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "bag"}
          onClick={() => setSelectedBtn("bag")}
        >
          <HiOutlineShoppingBag />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "clipping"}
          onClick={() => setSelectedBtn("clipping")}
        >
          <PiNewspaperClipping />
        </Button>
      </li>
      <li>
        <RxDotFilled />
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "nut"}
          onClick={() => setSelectedBtn("nut")}
        >
          <BsNut />
        </Button>
      </li>
      <li>
        <Button
          type="sidebar"
          isActive={selectedBtn === "plug"}
          onClick={() => setSelectedBtn("plug")}
        >
          <LuPlug />
        </Button>
      </li>
    </ul>
  );
}

export default SidebarButtonList;
