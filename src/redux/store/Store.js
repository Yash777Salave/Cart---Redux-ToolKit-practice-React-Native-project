import {configureStore} from '@reduxjs/toolkit';
import productSlice from '../slice/AddProductSlice';
export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
