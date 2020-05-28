import React from 'react'
import '../Styles/headerStyle.css'
import { Link } from "react-scroll";

export default function header() {
    return (
        <nav className="navContainer">
            <div className="links text-right">
            <Link to='projects' smooth={true} duration={1000}>Projects</Link>
            <Link to='/home/#section1'>About Me</Link>
            <Link to='/home/#section1'>Contact</Link>
            </div>
        </nav>
    )
}
