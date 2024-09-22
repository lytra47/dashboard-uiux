import { createContext, useContext, useEffect, useReducer } from "react";
import { customerDetails } from "../../../data/fakedata.js";

const DashboardContext = createContext();

const initalState = {
  selectedOrderID: 1,
  customerDetails,
  orders: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "order/load":
      return { ...state, orders: [...action.payload] };
    case "order/selectID":
      return { ...state, selectedOrderID: action.payload };
    default:
      throw new Error("Invalid command.");
  }
}

function DashboardProvider({ children }) {
  const [{ selectedOrderID, orders }, dispatch] = useReducer(
    reducer,
    initalState
  );

  useEffect(function () {
    async function fetchProducts() {
      const result = await fetch(`https://fakestoreapi.com/products`);
      const data = await result.json();
      dispatch({ type: "order/load", payload: data });
    }
    fetchProducts();
  }, []);

  const selectedCustomer = customerDetails.find(
    (cust) => cust.id === selectedOrderID
  );

  return (
    <DashboardContext.Provider
      value={{
        selectedOrderID,
        selectedCustomer,
        orders,
        customerDetails,
        dispatch,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined)
    throw new Error("DashboardContext was used outside of its scope.");

  return context;
}

export { DashboardProvider, useDashboard };
