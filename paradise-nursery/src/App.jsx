import React from "react";
import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout"; // We'll create this

function App() {
  return (
    <Routes>
      {/* Route 1: Landing Page (no header) */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Routes 2 & 3: Pages with the Header */}
      <Route element={<Layout />}>
        <Route
          path="/products"
          element={<ProductListingPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
