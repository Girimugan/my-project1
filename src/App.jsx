
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Admin from "./Pages/Admin";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (

    <>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>

        <button onClick={() => dispatch(increment())}> + Increment </button>
        <button onClick={() => dispatch(decrement())}> - Decrement </button>
      </div>

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


    </>
  );
}

export default App;
