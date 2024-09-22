import "./button.css";

const variants = {
  header: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "var(--primary-btn-blue)",
  },
  details: {
    color: "var(--dark-gray2)",
    backgroundColor: "var(--light-gray3)",
  },
  optionsClose: {
    color: "#535169",
    width: "40px",
    height: "40px",
  },
};

export default function Button({
  children,
  notify,
  type = "",
  onClick,
  isActive,
  tooltipText,
}) {
  console.log(onClick);

  if (type === "sidebar")
    return (
      <button
        className={`btn btn-sidebar  ${isActive ? "btn-active" : ""} `}
        onClick={onClick}
      >
        {children}
        {notify && <span className="sidebar-notification-dot" />}
        {type === "details" && <span className="tooltip">{tooltipText}</span>}
      </button>
    );

  if (type === "order-list")
    return (
      <button
        className={`btn-orders ${isActive ? "btn-active" : ""}`}
        style={variants[type]}
      >
        {children}
      </button>
    );

  if (type === "order-shipping")
    return (
      <button
        className="btn-order-shipping"
        style={variants[type]}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === "options" || type === "trash")
    return (
      <button
        className={`btn-order-options ${
          type === "trash" ? "btn-trash" : "btn-options"
        }`}
        style={variants[type]}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`btn  user-options${isActive ? "btn-active" : ""} `}
      style={variants[type]}
      onClick={onClick}
    >
      {children}
      {notify && <span className="notification-dot" />}
      {type === "details" && <span className="tooltip">{tooltipText}</span>}
    </button>
  );
}
