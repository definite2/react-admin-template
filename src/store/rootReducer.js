import { combineReducers } from "redux";
import { authSlice } from "./auth/slice";
import { reviewsSlice } from "./reviews/slice";
import { uiSlice } from "./ui/slice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  reviews: reviewsSlice.reducer,
  ui: uiSlice.reducer,
});
