import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "../redux/cartSlice";
import "./CartPage.css";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="cart-title"> Cart Page</h1>

      {items.length === 0 ? (
        <p className="cart-empty">Cart is Empty</p>
      ) : (
        <div className="cart-grid">
          {items.map((item) => (
            <div key={item.id} className="cart-card">
              <h3 className="cart-name">{item.name}</h3>
              <p className="cart-price">₹{item.price}</p>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="reset-container">
          <button className="reset-btn" onClick={() => dispatch(resetCart())}>
             Reset Cart
          </button>
        </div>
      )}
    </div>
  );
}
