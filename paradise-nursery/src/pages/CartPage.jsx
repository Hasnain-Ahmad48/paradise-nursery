import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectTotalItemCount, selectTotalPrice} from "../redux/cartSlice";
import CartItem from "../components/CartItem";

const CartPage = () => {
  // Get all items, total count, and total price from the Redux store
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItemCount = useSelector(selectTotalItemCount);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Summary</h3>
            <p>
              Total Items: <span>{totalItemCount}</span>
            </p>
            <p>
              Total Price: <span>${totalPrice.toFixed(2)}</span>
            </p>
            <Link
              to="/products"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>
            <button
              className="checkout-btn"
              onClick={() => alert("Checkout not implemented yet!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
