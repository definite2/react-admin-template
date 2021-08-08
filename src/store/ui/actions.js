import { uiSlice } from "./slice";
export const uiActions = uiSlice.actions;

export const setSideBarOpen = (value) => (dispatch) => {
  return dispatch(uiActions.setSideBarOpen(value));
};
