import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const INITIAL_STATE = {};
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
