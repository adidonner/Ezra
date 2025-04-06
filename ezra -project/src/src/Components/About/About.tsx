import React, { JSX } from "react";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
            <h2>This website is a development practice</h2>
            <h2>made by Adi Donner</h2>
            <img src="ezraLogo.jpg" alt="Ezra Ministry Logo" height={70} className="ezra-logo" />
        </div>
    );
}

export default About;
