import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/product.slice";
import cartSlice from "./cart/cart.slice";
import userSlice from "./user/user.slice";

let store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
