import React from "react";
import {Routes, Route} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import Plants from "./pages/Plants";
import KitchenGarden from "./pages/KitchenGarden";
import Seeds from "./pages/Seeds";

import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      {/* Landing Page (No Header) */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Pages WITH Header/Footer */}
      <Route element={<Layout />}>
        <Route
          path="/products"
          element={<ProductListingPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* Services Pages */}
        <Route
          path="/plants"
          element={<Plants />}
        />
        <Route
          path="/kitchen-garden"
          element={<KitchenGarden />}
        />
        <Route
          path="/seeds"
          element={<Seeds />}
        />
      </Route>
    </Routes>
  );
}

export default App;
