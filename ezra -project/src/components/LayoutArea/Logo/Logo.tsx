import "./Logo.css";
import logoSrc from "../../../Assets/images/ezraLogo.jpg";
// import logoSrc from "../../../Assets/images/ezraLogo.jpg";
import React from "react";

function Logo() {
    return (
        <div className='Logo'>
            <img src={logoSrc} alt="Logo" />
        </div>
    )
}

export default Logo;