
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login"; 
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
