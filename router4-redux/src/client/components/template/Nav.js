import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
        </ul>
    </nav>
);

export default Nav;
