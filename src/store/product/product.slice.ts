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
    // filterProducts: (
    //   state: ProductSliceType,
    //   {
    //     payload,
    //   }: PayloadAction<{
    //     gender: number;
    //     brands: Array<number> | null;
    //     categories: Array<number> | null;
    //     sizes: Array<number> | null;
    //     priceRange: { min: number; max: number };
    //   }>
    // ) => {
    //   // let updatedProducts = [...productLists];
    //   let updatedProducts = [...state.ProductsList];

    //   if (payload?.gender) {
    //     updatedProducts = updatedProducts.filter(
    //       (item) => item.gender.id === payload.gender
    //     );
    //   }
    //   if (payload?.priceRange) {
    //     updatedProducts = updatedProducts?.filter(
    //       (item) =>
    //         item.productCurrentPrice >= payload?.priceRange.min &&
    //         item.productCurrentPrice <= payload?.priceRange.max
    //     );
    //   }
    //   if (payload.brands !== null && payload.brands.length !== 0) {
    //     updatedProducts = updatedProducts?.filter((item) =>
    //       payload?.brands?.includes(item.brand.id)
    //     );
    //   }
    //   if (payload.categories !== null && payload.categories.length) {
    //     updatedProducts = updatedProducts?.filter((item) =>
    //       payload?.categories?.includes(item.category.id)
    //     );
    //   }
    //   if (payload.sizes !== null && payload.sizes.length !== 0) {
    //     payload.sizes.map((size) => {
    //       updatedProducts.filter((item) => {
    //         if (item.productSizes.includes(size)) updatedProducts.push(item);
    //       });
    //     });

    //     // removing duplicate data with the help of set
    //     let data = new Set(updatedProducts.flatMap((i) => i));
    //     updatedProducts = Array.from(data);

    //     state.filter = updatedProducts;
    //   }
    //   state.filter = [...updatedProducts];
    // },

    // selectedProduct: (state: ProductSliceType, action) => {
    //   if (!action.payload.slug) {
    //     if (productLists !== undefined) {
    //       state.selectedProduct = productLists?.find(
    //         (product) => product.slug === action.payload.id
    //       );
    //       if (state.selectedProduct) {
    //         state.selectedProduct = {
    //           ...state.selectedProduct,
    //           selectedSize: state.selectedProduct.size[0],
    //           selectedColor: state.selectedProduct.color[0],
    //           remainingStars: 5 - state.selectedProduct.reviewRate,
    //         };
    //       }
    //     }
    //   } else {
    //     state.selectedProduct = { ...state.selectedProduct, ...action.payload };

    //     if (state.selectedProduct) {
    //       state.selectedProduct = {
    //         ...state.selectedProduct,
    //         selectedSize: state.selectedProduct.size[0],
    //         selectedColor: state.selectedProduct.color[0],
    //         remainingStars: 5 - state.selectedProduct.reviewRate,
    //       };
    //     }
    //   }
    // },
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
          selectedColor: state.selectedProduct?.productColors[0].color.id,
        };

        state.selectedProduct = {
          ...state.selectedProduct,
          selectedSize: state.selectedProduct?.productSizes[0].size.id,
        };
      }

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
