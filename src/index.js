import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
const { PUBLIC_URL } = process.env;
ReactDOM.render(
  <Provider store={store}>
    <App basename={PUBLIC_URL} />
  </Provider>,
  document.getElementById("root")
);
