import "./orderListItem.css";
import { FaCheck } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const statusStyle = {
  fullfilled: "#29a632",
  confirmed: "#04b1fa",
  partially: "#feaf00",
};

const borderTypes = {
  default: {
    outline: "2px dashed var(--gray)",
    outlineOffset: "2px",
  },
  verified: {
    outline: "2px solid var(--primary-blue)",
    outlineOffset: "2px",
  },
};

export default function OrderListItem({ customer, selected, dispatch }) {
  return (
    <div
      className={`order-item ${
        selected === customer.id ? "active-customer" : ""
      }`}
      onClick={() => dispatch({ type: "order/selectID", payload: customer.id })}
    >
      <div className="flex">
        <div className="order-item-image-container">
          <img
            className="order-item-image"
            style={
              !customer.verified ? borderTypes.default : borderTypes.verified
            }
            src={customer.image}
            alt={customer.name}
          />
          {customer.verified && (
            <span className="verified">
              <FaCheck />
            </span>
          )}
        </div>
        <div>
          <p className="customer-name">{customer.name}</p>
          <p
            className="status"
            style={{ color: `${statusStyle[customer.status.split(" ")[0]]}` }}
          >
            <span
              className="dot"
              style={{
                backgroundColor: `${
                  statusStyle[customer.status.split(" ")[0]]
                }`,
              }}
            />
            {customer.status}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="order-item-pricing">
          <p>{customer.price} $</p>
          <p className="order-item-sub">SO-00001</p>
        </div>
        <SlOptionsVertical style={{ color: "var(--gray)" }} />
      </div>
    </div>
  );
}
