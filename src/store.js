import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice/CartSlice';
import categoryReducer from './Slice/CategorySlice';
import searchSlice from './Slice/SearchSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchSlice,
  },
});

export default store;
