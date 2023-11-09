import React from "react";
import Logo from "../logotype/Logo";
import './NavBar.css'

const Navigation = () => {
    return(
        <div className="navbar">
            <Logo />
            <div className="box">
                <p className="pa4 ma0 f3 link dim pointer white underline">LOG OUT</p>
            </div>
        </div>
    )
}

export default Navigation;