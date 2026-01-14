import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        {/* Outlet renders the active nested route (e.g., ProductListingPage) */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
