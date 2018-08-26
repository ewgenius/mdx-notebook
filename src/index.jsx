import * as React from "react";
import { render } from "react-dom";

import Test from "./test.md";

console.log(Test);

render(
  <div>
    test
    <Test />
  </div>,
  document.querySelector("#root")
);
