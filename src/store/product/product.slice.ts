import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/Constants";
import { ProductSliceType } from "../product/product.types";
import {
  getAllProduct,
  getFilteredProducts,
  getProduct,
} from "./product.thunk";

const productState: ProductSliceType = {
  Products: [],
  ProductsList: [],
  filteredProducts: [],
  selectedProduct: undefined,
  isLoading: false,
  totalProduct: 0,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: productState,
  reducers: {
    addSize: (state: ProductSliceType, action) => {
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    addColor: (state: ProductSliceType, action) => {
      state.selectedProduct = { ...state.selectedProduct, ...action.payload };
    },
    filterProduct: (
      state: ProductSliceType,
      { payload }: PayloadAction<string>
    ) => {
      state.Products = [...products].filter((_) => _.type === payload);
    },
  },
  extraReducers: function (builder) {
    // get all products
    builder.addCase(getAllProduct.fulfilled, (state, action: AnyAction) => {
      state.ProductsList = action.payload.data.data.items;
      state.isLoading = false;
    });
    builder.addCase(getAllProduct.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
    });

    // get single porduct based on id
    builder.addCase(getProduct.fulfilled, (state, action: AnyAction) => {
      console.log("full getProd", action);
      state.selectedProduct = action.payload.data.data;
      if (state.selectedProduct) {
        state.selectedProduct = {
          ...state.selectedProduct,
          selectedColor: state.selectedProduct?.colors[0].id,
        };
        state.selectedProduct = {
          ...state.selectedProduct,
          selectedSize: state.selectedProduct?.sizes[0].id,
        };
      }
      console.log("selected", state.selectedProduct);
      state.isLoading = false;
    });
    builder.addCase(getProduct.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.rejected, (state, action: AnyAction) => {
      console.log("reje getProd", action);
      state.isLoading = false;
    });

    builder.addCase(
      getFilteredProducts.fulfilled,
      (state, action: AnyAction) => {
        console.log("full fillterProd", action);
        state.filteredProducts = action.payload.data.data.items;
        state.totalProduct = action.payload.data.totalCount;
        state.isLoading = false;
      }
    );
    builder.addCase(getFilteredProducts.pending, (state, action: AnyAction) => {
      console.log("pend fillterProd", action);
      state.isLoading = true;
    });
    builder.addCase(
      getFilteredProducts.rejected,
      (state, action: AnyAction) => {
        console.log("reje fillterProd", action);
        state.isLoading = false;
      }
    );
  },
});

export const { addColor, addSize, filterProduct } = productSlice.actions;

export default productSlice.reducer;
