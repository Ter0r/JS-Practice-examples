import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from "./components/component-styles/index.style";
import { App } from "./app";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />{" "}
  </>,
  document.getElementById("root")
);
