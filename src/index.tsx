import * as React from "react";
import * as ReactDOM from "react-dom";

import { Card } from "./component/Card";

require("./stylesheets/main.scss");

ReactDOM.render(
    <Card />,
    document.querySelector(".reactest")
);