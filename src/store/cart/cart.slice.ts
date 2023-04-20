import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { cartProducts, cartSliceState } from "./cart.types";

import { uuid } from "uuidv4";
import { SelectedProductProps } from "../product/product.types";

const cartStates: cartSliceState = {
  cartProducts: [],
  added: false,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartStates,
  reducers: {
    addProductToCart: (
      state: cartSliceState,
      action: PayloadAction<SelectedProductProps>
    ) => {
      const data = state.cartProducts.find(
        (product) =>
          product.id === action.payload.id &&
          product.selectedSize === action.payload.selectedSize &&
          product.selectedColor === action.payload.selectedColor
      );

      if (data) {
        const index = state.cartProducts.indexOf(data);
        state.cartProducts[index].quantity++;
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { ...action.payload, quantity: 1, product_id: uuid() },
        ];
      }

      state.added = true;
    },
    increment: (
      state: cartSliceState,
      action: PayloadAction<{ id: string }>
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
      action: PayloadAction<{ id: string }>
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
      action: PayloadAction<{ id: string }>
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
        return acc + curr.quantity * curr.productCurrentPrice;
      }, 0);
      state.subTotal = totalAmount;
    },
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
