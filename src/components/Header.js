import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="header-name">Resume Generator</h1>
            <div className="header-links">
                <Link className="header-item" to="/">Edit</Link>
                <Link className="header-item" to="/resume">Resume</Link>
            </div>
        </div>
    )
}

export default Header;