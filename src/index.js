import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import App from "./App";
import "./styles/main.scss";
import "semantic-ui-css/semantic.min.css";
const { PUBLIC_URL } = process.env;
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App basename={PUBLIC_URL} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
