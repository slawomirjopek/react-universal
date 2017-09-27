import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import Template from "./containers/Template";

ReactDOM.render(
    <Router>
        <Template/>
    </Router>,
    document.getElementById("app")
);