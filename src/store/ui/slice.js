import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSidebarOpen: true,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setSideBarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
  },
});


