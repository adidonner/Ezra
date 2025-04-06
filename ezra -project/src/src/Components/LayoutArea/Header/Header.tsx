import React from "react";
import './Header.css';
import Logo from "../Logo/Logo.tsx";

function Header() {
    return (
        <div className="header">
            <Logo/>
            <h1 className="header-title">Lets make the Great Commission!</h1>
        </div>
    )
}

export default Header;