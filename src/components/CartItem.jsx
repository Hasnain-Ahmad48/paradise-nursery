import React from "react";
import {useDispatch} from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";

// 'item' is passed as a prop from the CartPage
const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      </div>
      <div className="cart-item-total">
        Subtotal: ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        className="cart-item-delete"
        onClick={() => dispatch(removeItem(item.id))}
      >
        &times; {/* This is a "times" (X) symbol for delete */}
      </button>
    </div>
  );
};

export default CartItem;
