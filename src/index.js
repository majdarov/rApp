import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

/** RENDER */
function renderApp() {
  ReactDOM.render(<App 
    state={store.getState()} 
    dispatch={store.dispatch.bind(store)}
  />, document.getElementById("root"));
}

renderApp();

store.subscribe(renderApp);
