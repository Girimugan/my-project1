
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#fff" : "#333",
    background: isActive ? "#007bff" : "transparent",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "500",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",
        padding: "12px 20px",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/products" style={linkStyle}>
        Products
      </NavLink>
      <NavLink to="/admin" style={linkStyle}>
        Admin Area
      </NavLink>
    </nav>
  );
};

export default Navbar;
