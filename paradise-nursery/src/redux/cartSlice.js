import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // This will store objects like { ...plant, quantity: 1 }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find(
        item => item.id === itemToAdd.id
      );

      if (existingItem) {
        // If item already exists, just increase quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add the new item with quantity 1
        state.cartItems.push({...itemToAdd, quantity: 1});
      }
    },

    // Action to remove an item completely
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload; // Expects just the item id
      state.cartItems = state.cartItems.filter(
        item => item.id !== itemIdToRemove
      );
    },

    // Action to increase quantity
    incrementQuantity: (state, action) => {
      const itemIdToIncrement = action.payload; // Expects just the item id
      const item = state.cartItems.find(item => item.id === itemIdToIncrement);
      if (item) {
        item.quantity++;
      }
    },

    // Action to decrease quantity
    decrementQuantity: (state, action) => {
      const itemIdToDecrement = action.payload; // Expects just the item id
      const item = state.cartItems.find(item => item.id === itemIdToDecrement);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        // Optional: remove item if quantity becomes 0
        // Or you can just let the 'removeItem' action handle this
        state.cartItems = state.cartItems.filter(
          item => item.id !== itemIdToDecrement
        );
      }
    },
  },
});

// Export the actions
export const {addItem, removeItem, incrementQuantity, decrementQuantity} =
  cartSlice.actions;

// --- Selectors ---
// These are functions to "read" data from the state
// Gets the total number of items in the cart
export const selectTotalItemCount = state =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

// Gets the total price of all items in the cart
export const selectTotalPrice = state =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

// Export the reducer
export default cartSlice.reducer;
