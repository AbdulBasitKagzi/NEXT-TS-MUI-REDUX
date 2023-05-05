import { backend_routes } from "@/routes/backend_routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
  "product/getAll",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const products = await axios.get(
        backend_routes.product.get_all_products,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (
    body: string | string[] | undefined,
    { dispatch, rejectWithValue }
  ) => {
    console.log("body", body);
    try {
      const product = await axios.get(
        `${backend_routes.product.get_product}/${body}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return product;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
