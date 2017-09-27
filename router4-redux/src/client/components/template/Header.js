import React from "react";

import Nav from "./Nav";
import img from "../../../../assets/images/header.png";

const Header = () => (
    <header>
        <img src={img}/>
        <Nav/>
    </header>
);

export default Header;
