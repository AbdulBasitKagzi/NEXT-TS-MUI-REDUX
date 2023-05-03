import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { userstate } from "./user.types";
import { login } from "./user.thunk";

const userState: userstate = {
  User: {},
  routeValue: "",
  isLoading: false,
  token: "",
  message: "",
  error: false,
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
    });
    builder.addCase(login.pending, (state, action: AnyAction) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action: AnyAction) => {
      console.log("reje pay", action.payload);
      state.message = action.payload.response.data.error.message;
      state.error = true;
    });
  },
});

export const { makeRoute, setErrorState } = userSlice.actions;

export default userSlice.reducer;
