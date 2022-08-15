import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalCSS from "./GlobalStyle";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import infoReducer from "./slices/infoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalCSS />
      <App />
    </Provider>
  </React.StrictMode>
);
