import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from './883039.png'
import './Logo.css'

const Logo = () => {
    return(
        <Tilt className="tilt parallax-effect br3 shadow-3" perspective={500}>
            <div>
                <img className="logo" src={logo} alt="brain" />
            </div>
        </Tilt>
    )
}

export default Logo;