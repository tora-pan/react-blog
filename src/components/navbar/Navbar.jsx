import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodepen, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav--left">
            <FontAwesomeIcon className="social--icons" icon={faGithub}/>
            <FontAwesomeIcon className="social--icons" icon={faLinkedin}/>
            <FontAwesomeIcon className="social--icons" icon={faCodepen}/>
            <FontAwesomeIcon className="social--icons" icon={faInstagram}/>
            </div>

            <div className="nav--center">
                <ul className="nav--list">
                    <a href="#"><li className="nav--item">HOME</li></a>
                    <a href="#"><li className="nav--item">ABOUT</li></a>
                    <a href="#"><li className="nav--item">CONTACT</li></a>
                    <a href="#"><li className="nav--item">WRITE</li></a>
                    <a href="#"><li className="nav--item">LOGOUT</li></a>
                </ul>
            </div>
            <div className="nav--right">
                <img className="nav--img" src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg" alt="" />
                <FontAwesomeIcon className="search--icon" icon={faSearch}/>
            </div>
        </div>
    )
}

export default Navbar
