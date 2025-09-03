import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";


import "./App.css";



function App() {


  return (

    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
        
    </>
  );
}

export default App;

