import "./detailsSummary.css";
import Button from "../../../ui/Button";
import { LuTruck } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useDashboard } from "../dashboardContext/dashboardContext";

const statusStyle = {
  fullfilled: "#29a632",
  confirmed: "#04b1fa",
  partially: "#feaf00",
};

function DetailsSummary() {
  const { selectedCustomer = {} } = useDashboard();
  const { name, status, id } = selectedCustomer;
  console.log(name, status, id);

  if (!selectedCustomer.id) return null;

  return (
    <div className="details-body-header">
      <div className="details-body-sub">
        <div>
          <h1 className="text-dark">Sales Order</h1>
          <p className="details-order-id">#SO-00003</p>
          <p
            className="details-order-status"
            style={{ backgroundColor: `${statusStyle[status.split(" ")[0]]}` }}
          >
            <span className="stats-dot"></span> {status}
          </p>
        </div>
        <div className="details-order-data">
          <div className="details-order-date">
            <Button type="order-shipping">
              <HiOutlineDocumentText />
            </Button>
            <div>
              <p>Order date</p>
              <p className="text-dark">14 August 2015</p>
            </div>
          </div>
          <div className="details-order-date">
            <Button type="order-shipping">
              <LuTruck />
            </Button>

            <div>
              <p>Expected Shipment</p>
              <p className="text-dark">24 August 2015</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details-billing-container">
        <h3>Billing to</h3>
        <img
          className="details-billing-img"
          src={selectedCustomer.image}
          alt={selectedCustomer.name}
        />
        <p className="text-primary">{selectedCustomer.name}</p>
        <div className="text-address">
          <p className="text-dark ">2762 Mapleview Drive South Fulton</p>
          <p className="text-dark ">Tennessee — 38257</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsSummary;
