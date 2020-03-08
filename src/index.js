import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

/** RENDER */
function renderApp(state) {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
window.state = store.getState();

renderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();  
  renderApp(state)
});
