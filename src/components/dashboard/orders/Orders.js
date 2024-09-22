import "./orders.css";
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlinePrinter,
  HiOutlineMail,
  HiOutlineX,
} from "react-icons/hi";
import { PiDotsThreeOutline } from "react-icons/pi";

import { useDashboard } from "../dashboardContext/dashboardContext.js";
import OrderListItem from "./OrderListItem.js";
import OrderListHeader from "./OrderListHeader.js";
import Button from "../../../ui/Button.js";

function Orders() {
  const { selectedOrderID, customerDetails, dispatch } = useDashboard();

  console.log(selectedOrderID);

  return (
    <div className="orders-container">
      <OrderListHeader />
      <div className="orders-list">
        <ul>
          {customerDetails.map((customer) => (
            <li key={customer.id}>
              <OrderListItem
                customer={customer}
                dispatch={dispatch}
                selected={selectedOrderID}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="order-list-options">
        <div className="options-buttons">
          <Button type="trash">
            <HiOutlineTrash />
          </Button>
          <Button type="options">
            <HiOutlineMail />
          </Button>
          <Button type="options">
            <HiOutlinePrinter />
          </Button>
          <Button type="options">
            <HiOutlinePencil />
          </Button>
          <Button type="options">
            <PiDotsThreeOutline />
          </Button>
        </div>
        <div>
          <Button type="optionsClose">
            <HiOutlineX />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Orders;
