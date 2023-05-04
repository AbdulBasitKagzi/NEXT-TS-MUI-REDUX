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
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartStates,
  reducers: {
    addProductToCart: (
      state: cartSliceState,
      action: PayloadAction<SelectedProductProps>
    ) => {
      // const data = state.cartProducts.find(
      //   (product) =>
      //     product.id === action.payload.id &&
      //     product.selectedSize === action.payload.selectedSize &&
      //     product.selectedColor === action.payload.selectedColor
      // );
      // if (data) {
      //   const index = state.cartProducts.indexOf(data);
      //   state.cartProducts[index].quantity++;
      // } else {
      // state.cartProducts = [
      //   ...state.cartProducts,
      //   { ...action.payload, quantity: 1, product_id: uuid() },
      // ];
      // }
      // state.added = true;
    },
    increment: (
      state: cartSliceState,
      action: PayloadAction<{ id: number }>
    ) => {
      const data = state.cartProducts.find(
        (product) => product.product_id === action.payload.id
      );

      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
      }
    },
    decrement: (
      state: cartSliceState,
      action: PayloadAction<{ id: number }>
    ) => {
      let index: number = 0;
      let temp;
      let tempData;

      temp = [...state.cartProducts].map((product) => {
        if (product.product_id === action.payload.id) {
          product.quantity--;
          return { ...product };
        } else {
          return { ...product };
        }
      });

      state.cartProducts = [...temp];

      tempData = [...state.cartProducts].filter(
        (product) => product.quantity !== 0
      );
      console.log("remaining", tempData);
      state.cartProducts = [...tempData];
    },
    removeProduct: (
      state: cartSliceState,
      action: PayloadAction<{ id: number }>
    ) => {
      let temp;
      temp = [...state.cartProducts].filter(
        (product) => product.product_id !== action.payload.id
      );
      state.cartProducts = [...temp];
    },
    emptyCart: (state: cartSliceState) => {
      state.cartProducts = [];
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
    });
    builder.addCase(addToCart.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.rejected, (state, action: AnyAction) => {});

    // get user cart
    builder.addCase(getUserCart.fulfilled, (state, action: AnyAction) => {
      console.log("full getCart", action.payload);
      state.cartProducts = action.payload.data.data.items;
      state.isLoading = false;
    });
    builder.addCase(getUserCart.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getUserCart.rejected, (state, action: AnyAction) => {
      console.log("reje", action.payload.response);
      state.message = action.payload.response.data.error.message;
      state.isLoading = false;
      state.cartProducts = action.payload.response.data.error.data;
      console.log("checccc", state.cartProducts);
    });

    // increment decrement cart product
    builder.addCase(
      increment_decrement_cartProduct.fulfilled,
      (state, action: AnyAction) => {
        state.isLoading = false;
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
        console.log("pend increment_decrement", action.payload);
        state.isLoading = false;
      }
    );

    // update cartProduct
    builder.addCase(
      update_cartProduct.fulfilled,
      (state, action: AnyAction) => {
        state.isLoading = false;
      }
    );
    builder.addCase(update_cartProduct.pending, (state, action: AnyAction) => {
      // state.isLoading = true;
    });
    builder.addCase(update_cartProduct.rejected, (state, action: AnyAction) => {
      console.log("pend increment_decrement", action.payload);
      state.isLoading = false;
    });
  },
});

export const {
  addProductToCart,
  calculateSubTotal,
  decrement,
  emptyCart,
  increment,
  notification,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
