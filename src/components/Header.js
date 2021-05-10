import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Resume Generator</h1>
            <Link to="/">Edit</Link>
            <Link to="/resume">Resume</Link>
        </div>
    )
}

export default Header;