import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};
const existingItem = (state, action) => {
  return state.cartItems.find((item) => item.id === action.payload.id);
};
const existingItemIndex = (state, action) =>
  state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItem = existingItem(state, action);
      if (existedItem) {
        existedItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },

    deleteFromCart(state, action) {
      const existedItemIndex = existingItemIndex(state, action);
      if (existedItemIndex !== -1) {
        state.cartItems.splice(existedItemIndex, 1);
      }
    },
    incrementQTY: (state, action) => {
      const existedItem = existingItem(state, action);
      if (existedItem) {
        existedItem.qty += 1;
      }
    },
    decrementQTY: (state, action) => {
      const existedItem = existingItem(state, action);
      const existedItemIndex = existingItemIndex(state, action);
      existedItem.qty -= 1;
      if (state.cartItems[existedItemIndex].qty === 0) {
        state.cartItems.splice(existedItemIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementQTY, decrementQTY } =
  cartSlice.actions;
export default cartSlice.reducer;
