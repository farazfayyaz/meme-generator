import React from 'react'
import trollFace from '../images/troll-face.png'

const Header = () => {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}

export default Header