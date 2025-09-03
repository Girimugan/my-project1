import React, { useEffect, useState } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
let id=3
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
