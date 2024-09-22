import "./details.css";

import DetailsSummary from "./DetailsSummary";
import DetailsNavigation from "./DetailsNavigation";
import DetailsList from "./DetailsList";
import { useDashboard } from "../dashboardContext/dashboardContext";

function Details() {
  const { selectedCustomer = {} } = useDashboard();

  return (
    <div className="details-container">
      <DetailsNavigation />
      {selectedCustomer.id ? (
        <div className="details-body">
          <DetailsSummary />
          <DetailsList />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Details;

function Empty() {
  return (
    <div className="empty-info-container">
      <h2>Select any order to view its details.</h2>
    </div>
  );
}
