import { createSlice, AnyAction } from "@reduxjs/toolkit";
import { userstate } from "./user.types";
import {
  get_like_products,
  login,
  user_payment_detail,
  user_shipping_detail,
} from "./user.thunk";

const userState: userstate = {
  User: {},
  routeValue: "",
  isLoading: false,
  token: "",
  message: "",
  error: false,
  userShippingDetail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    makeRoute: (state, action) => {
      state.routeValue = action.payload;
    },
    setErrorState: (state) => {
      state.error = false;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(login.fulfilled, (state, action: AnyAction) => {
      state.User = action.payload?.data.data.user;
      state.token = action.payload.data.data.token;
      if (state.token) localStorage.setItem("token", state.token);
      state.error = false;
    });
    builder.addCase(login.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action: AnyAction) => {
      state.message = action.payload.response.data.error.message;
      state.error = true;
    });

    //adding  user shipping detail to database
    builder.addCase(
      user_shipping_detail.fulfilled,
      (state, action: AnyAction) => {
        console.log("full pay", action.payload.data.data.addShippingDetail);
        state.userShippingDetail = action.payload.data.data.addShippingDetail;
        state.error = false;
      }
    );
    builder.addCase(
      user_shipping_detail.rejected,
      (state, action: AnyAction) => {
        console.log("reje pay", action.payload);
        // state.message = action.payload.response.data.error.message;
        state.error = true;
      }
    );
    builder.addCase(
      user_shipping_detail.pending,
      (state, action: AnyAction) => {
        console.log("pend pay", action.payload);
        // state.message = action.payload.response.data.error.message;
      }
    );

    // adding payment detail to database
    builder.addCase(user_payment_detail.pending, (state, action: AnyAction) => {
      // state.message = action.payload.response.data.error.message;
      state.error = false;
    });
    builder.addCase(
      user_payment_detail.fulfilled,
      (state, action: AnyAction) => {
        // state.message = action.payload.response.data.error.message;
        console.log("action", action.payload);
      }
    );
    builder.addCase(
      user_payment_detail.rejected,
      (state, action: AnyAction) => {
        // state.message = action.payload.response.data.error.message;
        console.log("reje", action.payload);
        state.error = true;
      }
    );

    // get like products
    builder.addCase(get_like_products.fulfilled, (state, action: AnyAction) => {
      // state.message = action.payload.response.data.error.message;
      console.log("full like product", action.payload);
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(get_like_products.pending, (state, action: AnyAction) => {
      // state.message = action.payload.response.data.error.message;
      state.isLoading = true;
    });
    builder.addCase(get_like_products.rejected, (state, action: AnyAction) => {
      // state.message = action.payload.response.data.error.message;
      console.log("full like product", action.payload);
      state.message = action.payload.response.data.error.message;
      console.log(state.message);
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const { makeRoute, setErrorState } = userSlice.actions;

export default userSlice.reducer;
