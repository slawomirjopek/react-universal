import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";

import Template from "./containers/Template";

ReactDOM.render(
    <BrowserRouter>
        <Template/>
    </BrowserRouter>,
    document.getElementById("app")
);