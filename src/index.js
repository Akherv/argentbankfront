import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalCSS from "./GlobalStyle";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import infoReducer from "./slices/infoSlice";

// The configureStore method combined the slice reducers & under the hood => added redux-thunk middleware & enable DevTools extension
const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
  },
});

// The Provider component encompass all the application & pass the global state "store" as props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalCSS />
      <App />
    </Provider>
  </React.StrictMode>
);
