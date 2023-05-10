import { filterQueryTypes } from "@/pages/product/product.types";
import { backend_routes } from "@/routes/backend_routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserCart } from "../cart/cart.thunk";
import { debounce } from "lodash";
import { Dispatch } from "react";

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
    try {
      const product = await axios.get(
        `${backend_routes.product.get_product}/${body}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (product.status === 200) dispatch(getUserCart());
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
      const filteredProducts = await axios.get(
        `${backend_routes.product.get_filtered_products}`,
        {
          params: {
            gender: body.gender,
            brands: body.brands,
            categories: body.categories,
            sizes: body.sizes,
            min: body.priceRange.min,
            max: body.priceRange.max,
            page: body.page,
          },
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (filteredProducts.status === 200) dispatch(getUserCart());
      return filteredProducts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const debouncedFilterProducts = debounce((params, dispatch) => {
  dispatch(getFilteredProducts(params));
});
