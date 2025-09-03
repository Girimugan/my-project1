
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import tabletImg from "../assets/img/tablet img.jpg";

import "./Products.css";

const sampleProducts = [
  { id: 1, name: "Paracetamol", price: 50, image: tabletImg },
  { id: 2, name: "Cough Syrup", price: 120, image: tabletImg },
  { id: 3, name: "Vitamin C Tablets", price: 200, image: tabletImg },
  { id: 4, name: "Pain Relief Balm", price: 80, image: tabletImg },
];


export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="products-container">
      <h1 className="products-title"> Products</h1>

      <div className="products-grid">
        {sampleProducts.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-img" />
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
