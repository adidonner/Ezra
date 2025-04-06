import { NavLink } from "react-router-dom";
import "./Menu.css";
import { JSX } from "react";
import React from "react";

function Menu(): JSX.Element{

    return (
        <div className="Menu">

			<NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/about">About</NavLink>
            <span> | </span>

        </div>
    );
}

export default Menu;
