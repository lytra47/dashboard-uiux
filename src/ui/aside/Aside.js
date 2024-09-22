import SidebarButtonList from "./SidebarButtonList";
import UserOptions from "./UserOptions";
import "./aside.css";

function Aside() {
  return (
    <aside className="sidebar">
      <SidebarButtonList />
      <UserOptions />
    </aside>
  );
}

export default Aside;
