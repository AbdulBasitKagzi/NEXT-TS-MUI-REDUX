import { user } from "@/forms/userInformation/userInformation.types";
import { backend_routes } from "@/routes/backend_routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { incrementPage } from "../cart/cart.slice";
import axios from "axios";
import { paymentInformation } from "@/forms/userPaymentInformation/userPaymentInformation";

import { getUserCart } from "../cart/cart.thunk";
import Router from "next/router";

export const login = createAsyncThunk(
  "user/login",
  async (
    body: {
      email: string;
      password: string;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await axios.post(backend_routes.user.login, body, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.status === 200) localStorage.setItem("email", body.email);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const user_shipping_detail = createAsyncThunk(
  "user/shipping",
  async (body: user, { dispatch, rejectWithValue }) => {
    try {
      console.log("body", body);
      const res = await axios.post(
        backend_routes.user.set_user_delivery_detail,
        body,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) dispatch(incrementPage());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const user_payment_detail = createAsyncThunk(
  "user/payment",
  async (body: paymentInformation, { dispatch, rejectWithValue }) => {
    try {
      console.log("body pay", body);
      const res = await axios.post(
        backend_routes.user.set_user_payment_detail,
        body,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) dispatch(incrementPage());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const place_order = createAsyncThunk(
  "user/order",
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post(backend_routes.user.place_order, body, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.status === 200) {
        Router.push("/");
        dispatch(getUserCart());
      }
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const get_like_products = createAsyncThunk(
  "user/getlikeProduct",
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(
        backend_routes.user.user_like_product,

        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
