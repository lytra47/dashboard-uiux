import { useEffect, useState } from "react";
import "./detailsList.css";
import { FcOk } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDashboard } from "../dashboardContext/dashboardContext";

function DetailsList() {
  const { orders, selectedCustomer } = useDashboard();

  if (orders.length < 1) return <div className="loader">Loading...</div>;

  if (!selectedCustomer.id) return null;

  return (
    <div className="details-list-container">
      <TableHeader />
      {orders.map((order) => (
        <TableRow key={order.id} order={order} />
      ))}
    </div>
  );
}

export default DetailsList;

function TableHeader() {
  return (
    <div className="table-header">
      <div>Items & Description</div>
      <div>Invoiced</div>
      <div>Packed</div>
      <div>Shipped</div>
      <div>Rate</div>
      <div>Amount</div>
    </div>
  );
}

function TableRow({ order }) {
  const randomItemCount = Math.trunc(1 + Math.random() * 9);
  const itemCountPercent = Math.ceil((randomItemCount / 9) * 100);
  const progressStyle = {
    text: {
      fill: itemCountPercent === 100 ? "green" : "black",
      fontSize: "3rem",
    },
    path: {
      stroke: itemCountPercent === 100 ? "green" : "#f88",
    },
    trail: {
      stroke: "#d6d6d6",
    },
    background: {
      fill: "white",
    },
  };

  return (
    <div className="table-row">
      <div className="title-cell">
        <div className="product-image-container">
          <CircularProgressbar
            value={itemCountPercent}
            text={`${randomItemCount}`}
            className="product-count "
            background={true}
            styles={progressStyle}
          />
          <img src={order.image} alt={order.title} className="product-image" />
        </div>
        <span>
          <p className="text-dark">
            {order.title.length > 20
              ? `${order.title.slice(0, 20)} ...`
              : `${order.title}`}
          </p>
          <p>SKU: {Math.trunc(Math.random() * 1000000)}</p>
        </span>
      </div>
      <div>
        <FcOk />
      </div>
      <div className="text-center">
        {order.rating.rate > 3 ? <FcOk /> : <FcMediumPriority />}
      </div>
      <div className="text-center">
        {order.rating.rate > 3 ? <FcOk /> : <FcMediumPriority />}
      </div>
      <div className="text-right">{order.price.toFixed(2)} $</div>
      <div className="text-right text-dark">
        {(order.price * randomItemCount).toFixed(2)} $
      </div>
    </div>
  );
}
