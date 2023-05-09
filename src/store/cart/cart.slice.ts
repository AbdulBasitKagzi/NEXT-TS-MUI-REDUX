import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartProducts, cartSliceState } from "./cart.types";

import { uuid } from "uuidv4";
import { SelectedProductProps } from "../product/product.types";
import {
  addToCart,
  getUserCart,
  increment_decrement_cartProduct,
  update_cartProduct,
} from "./cart.thunk";

const cartStates: cartSliceState = {
  cartProducts: [],
  added: false,
  subTotal: 0,
  message: "",
  isLoading: false,
  page: 1,
  error: false,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartStates,
  reducers: {
    incrementPage: (state) => {
      state.page = state.page + 1;
    },
    decrementPage: (state) => {
      state.page = state.page - 1;
    },
    setCartError: (state) => {
      state.error = false;
    },

    notification: (state) => {
      state.added = false;
    },
    calculateSubTotal: (state: cartSliceState) => {
      const totalAmount = [...state.cartProducts].reduce((acc, curr) => {
        return acc + curr.total_amount;
      }, 0);
      state.subTotal = totalAmount;
    },
  },
  extraReducers: (builder) => {
    // add to cart
    builder.addCase(addToCart.fulfilled, (state, action: AnyAction) => {
      state.message = action.payload.data.message;
      state.added = true;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(addToCart.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.rejected, (state, action: AnyAction) => {
      state.error = true;
    });

    // get user cart
    builder.addCase(getUserCart.fulfilled, (state, action: AnyAction) => {
      console.log("full getCart", action.payload);
      state.cartProducts = action.payload.data.data.items;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(getUserCart.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getUserCart.rejected, (state, action: AnyAction) => {
      console.log("reje", action.payload.response);
      state.message = action.payload.response.data.error.message;
      state.isLoading = false;
      state.cartProducts = action.payload.response.data.error.data;
    });

    // increment decrement cart product
    builder.addCase(
      increment_decrement_cartProduct.fulfilled,
      (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      increment_decrement_cartProduct.pending,
      (state, action: AnyAction) => {
        // state.isLoading = true;
      }
    );
    builder.addCase(
      increment_decrement_cartProduct.rejected,
      (state, action: AnyAction) => {
        console.log("pend increment_decrement", action.payload.response.data);
        state.isLoading = false;
        state.message = action.payload.response.data.error.message;
        state.error = true;
      }
    );

    // update cartProduct
    builder.addCase(
      update_cartProduct.fulfilled,
      (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(update_cartProduct.pending, (state, action: AnyAction) => {
      // state.isLoading = true;
    });
    builder.addCase(update_cartProduct.rejected, (state, action: AnyAction) => {
      console.log("rejec update cart product", action.payload);
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const {
  calculateSubTotal,
  notification,
  incrementPage,
  decrementPage,
  setCartError,
} = cartSlice.actions;
export default cartSlice.reducer;
