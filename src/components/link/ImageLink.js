import React from "react";
import './ImageLink.css';

const Link = () => {
    return(
        <div className="text-center mt6">
            <p className="f3 white">
                {'This site alows you to detect faces in your pictures. Try it!'}
            </p>
            <div className="center">
                <div className="center f4 pv3 ph5 br3 shadow-3 bg-iso">
                    <input className="f4 w-70 pa2 br2" type="text"/>
                    <button className="f4 w-30 grow link ph3 pv2 dib black bg-white pointer  br2">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default Link;