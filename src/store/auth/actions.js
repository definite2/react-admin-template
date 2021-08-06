import { authActions } from "./slice";
export const login = (value) => (dispatch) => {
  dispatch(authActions.login(value));
};
export const logout = () => (dispatch) => {
  dispatch(authActions.logout());
};