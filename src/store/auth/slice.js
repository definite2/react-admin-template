import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false, //TODO remove this later implement accesToken
  user: { email: "" },
  accessToken: undefined,
  error: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { email } = action.payload;
      state.user.email = email;
      state.isAuthorized=true;
    },
    logout(state) {
      state.user = {};
      state.accessToken = "";
      state.isAuthorized = false;
    },
  },
});

export const authActions = authSlice.actions;
