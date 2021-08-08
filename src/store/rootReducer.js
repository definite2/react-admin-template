import { combineReducers } from "redux";
import { authSlice } from "./auth/slice";
import { reviewsSlice } from "./reviews/slice";
import { uiSlice } from "./ui/slice";

export const combinedReducer = combineReducers({
  auth: authSlice.reducer,
  reviews: reviewsSlice.reducer,
  ui: uiSlice.reducer,
});
export const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    localStorage.clear();
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};
