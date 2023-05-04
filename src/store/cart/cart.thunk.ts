import { backend_routes } from "@/routes/backend_routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SelectedProductProps } from "../product/product.types";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (body: SelectedProductProps, { dispatch, rejectWithValue }) => {
    console.log("body", body);
    try {
      const response = await axios.post(
        `${backend_routes.cart.cart_add_update}/${body.id}`,
        body,
        {
          headers: {
            "content-type": "Application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) dispatch(getUserCart());
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "cart/getCart",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get(backend_routes.cart.get_user_cart, {
        headers: {
          "content-type": "Application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const increment_decrement_cartProduct = createAsyncThunk(
  "cart/increment_decrement_cartProduct",
  async (
    body: { type: string; id: number; product_id: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log("body", body);
      const response = await axios.patch(
        `${backend_routes.increment_decrement_cartProduct}/${body.id}`,
        body,
        {
          headers: {
            "content-type": "Application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) dispatch(getUserCart());
      console.log("res", response.status);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const update_cartProduct = createAsyncThunk(
  "cart/update_cartProduct",
  async (
    body: { id: number; color?: number; size?: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      console.log("body", body);
      const response = await axios.patch(
        `${backend_routes.cart.cart_update}/${body.id}`,
        body,
        {
          headers: {
            "content-type": "Application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) dispatch(getUserCart());
      console.log("res", response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
