import { createSlice } from "@reduxjs/toolkit";
import { userstate } from "./user.types";

const userState: userstate = {
  User: {},
  routeValue: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login: (state, action) => {
      state.User = action.payload.userCredentials;
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(state.User));
    },
    makeRoute: (state, action) => {
      state.routeValue = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
