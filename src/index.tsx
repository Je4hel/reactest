import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./component/App";

require("./stylesheets/main.scss");

ReactDOM.render(
    <App />,
    document.querySelector(".reactest")
);