
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Products.css";

const sampleProducts = [
  { id: 1, name: "Paracetamol", price: 50 },
  { id: 2, name: "Cough Syrup", price: 120 },
  { id: 3, name: "Vitamin C Tablets", price: 200 },
  { id: 4, name: "Pain Relief Balm", price: 80 },

];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      <h1 className="products-title"> Products</h1>

      <div className="products-grid">
        {sampleProducts.map((p) => (
          <div key={p.id} className="product-card">
            <h3 className="product-name">{p.name}</h3>
            <p className="product-price">₹{p.price}</p>

            <button
              className="add-btn"
              onClick={() => dispatch(addToCart(p))}
            >
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
