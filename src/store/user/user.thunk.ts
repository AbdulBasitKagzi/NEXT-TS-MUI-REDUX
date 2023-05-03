import { backend_routes } from "@/routes/backend_routes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      const res = await axios.post(backend_routes.login, body, {
        headers: {
          "content-type": "application/json",
        },
      });

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
