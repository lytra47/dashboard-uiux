import { HiFingerPrint } from "react-icons/hi";
import "./logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <HiFingerPrint className="logo-icon" />
      <a
        href="home\placeholder"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        Sales orders
      </a>
    </div>
  );
}

export default Logo;
