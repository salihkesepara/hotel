import "babel-polyfill";
import "react-hot-loader/patch";

import React from "react";
import { render } from "react-dom";
import Main from "./main";
import { AppContainer } from "react-hot-loader";

render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./main", () => {
    const NextApp = require("./main").default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
