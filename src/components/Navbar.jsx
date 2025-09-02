import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        NetMeds
      </Link>


      <Link to="/cart" className="navbar-cart">
        🛒 Cart
        <span className="cart-count">{items.length}</span>
      </Link>
    </nav>
  );
}
