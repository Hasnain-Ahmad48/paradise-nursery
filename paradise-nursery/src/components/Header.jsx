import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTotalItemCount} from "../redux/cartSlice";
import {FaShoppingCart} from "react-icons/fa"; // (Install: npm install react-icons)

const Header = () => {
  // Read the total item count from the Redux store
  const totalItemCount = useSelector(selectTotalItemCount);

  return (
    <header className="app-header">
      <Link
        to="/products"
        className="header-title-link"
      >
        <h1>Paradise Nursery</h1>
      </Link>
      <nav>
        <Link
          to="/cart"
          className="cart-icon-link"
        >
          <FaShoppingCart />
          {totalItemCount > 0 && (
            <span className="cart-count">{totalItemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
