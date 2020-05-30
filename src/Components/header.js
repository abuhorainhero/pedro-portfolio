import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import '../Styles/headerStyle.css'
import { Link } from "react-scroll";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (

        <div>
            <Navbar light expand="sm" fixed='top' className="navContainer text-right">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="links">
                        <NavItem>
                            <NavLink><Link to='projects' smooth={true} duration={1000}>Projects</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='projects' smooth={true} duration={1000}>About Me</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='projects' smooth={true} duration={1000}>Contact</Link></NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
