import { DashboardProvider } from "../components/dashboard/dashboardContext/dashboardContext";
import Details from "../components/dashboard/details/Details";
import Orders from "../components/dashboard/orders/Orders";
import "./dashboard.css";

function Dashboard() {
  return (
    <DashboardProvider>
      <div className="dashboard-container">
        <Orders />
        <Details />
      </div>
    </DashboardProvider>
  );
}

export default Dashboard;
