import React from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/cartSlice";

// 'plant' is passed as a prop from the ProductListingPage
const ProductCard = ({plant}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the 'addItem' action with the plant object as payload
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
      <img
        src={plant.image}
        alt={plant.name}
        className="product-card-image"
      />
      <h3 className="product-card-name">{plant.name}</h3>
      <p className="product-card-price">${plant.price.toFixed(2)}</p>
      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
