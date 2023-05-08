import { filterQueryTypes } from "@/pages/product/product.types";
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

export const getFilteredProducts = createAsyncThunk(
  "product/getfilterProduct",
  async (body: filterQueryTypes, { dispatch, rejectWithValue }) => {
    try {
      console.log("body", body);
      const filteredProducts = await axios.get(
        `${backend_routes.product.get_filtered_products}`,
        {
          params: {
            gender: body.gender,
            page: body.page,
            brands: body.brands,
            categories: body.categories,
            min: body.priceRange.min,
            max: body.priceRange.max,
          },
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return filteredProducts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
