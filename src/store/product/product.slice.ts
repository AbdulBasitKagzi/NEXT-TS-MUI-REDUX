import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/Constants";
import { productLists } from "../../data/ProductsContant";
import { ProductSliceType } from "../product/product.types";

const productState: ProductSliceType = {
  Products: products,
  ProductsList: productLists,
  filter: [],
  selectedProduct: undefined,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: productState,
  reducers: {
    filterProducts: (
      state: ProductSliceType,
      {
        payload,
      }: PayloadAction<{
        gender: number;
        brands: Array<number> | null;
        categories: Array<number> | null;
        sizes: Array<number> | null;
        priceRange: { min: number; max: number };
      }>
    ) => {
      let updatedProducts = [...productLists];

      if (payload?.gender) {
        updatedProducts = updatedProducts.filter(
          (item) => item.gender === payload.gender
        );
      }
      if (payload?.priceRange) {
        updatedProducts = updatedProducts?.filter(
          (item) =>
            item.productCurrentPrice >= payload?.priceRange.min &&
            item.productCurrentPrice <= payload?.priceRange.max
        );
      }
      if (payload.brands !== null && payload.brands.length !== 0) {
        updatedProducts = updatedProducts?.filter((item) =>
          payload?.brands?.includes(item.brand)
        );
      }
      if (payload.categories !== null && payload.categories.length) {
        updatedProducts = updatedProducts?.filter((item) =>
          payload?.categories?.includes(item.category)
        );
      }
      if (payload.sizes !== null && payload.sizes.length !== 0) {
        payload.sizes.map((size) => {
          updatedProducts.filter((item) => {
            if (item.size.includes(size)) updatedProducts.push(item);
          });
        });

        // removing duplicate data with the help of set
        let data = new Set(updatedProducts.flatMap((i) => i));
        updatedProducts = Array.from(data);

        state.filter = updatedProducts;
      }
      state.filter = [...updatedProducts];
    },

    selectedProduct: (state: ProductSliceType, action) => {
      if (!action.payload.slug) {
        if (productLists !== undefined) {
          state.selectedProduct = productLists?.find(
            (product) => product.slug === action.payload.id
          );
          if (state.selectedProduct) {
            state.selectedProduct = {
              ...state.selectedProduct,
              selectedSize: state.selectedProduct.size[0],
              selectedColor: state.selectedProduct.color[0],
              remainingStars: 5 - state.selectedProduct.reviewRate,
            };
          }
        }
      } else {
        state.selectedProduct = { ...state.selectedProduct, ...action.payload };

        if (state.selectedProduct) {
          state.selectedProduct = {
            ...state.selectedProduct,
            selectedSize: state.selectedProduct.size[0],
            selectedColor: state.selectedProduct.color[0],
            remainingStars: 5 - state.selectedProduct.reviewRate,
          };
        }
      }
    },
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
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
