import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../Styles/headerStyle.css";
import { Link } from "react-scroll";
import Logo from "../Images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="sm" fixed="top" className="navContainer text-right">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <img src={Logo} width="50" height="63" alt="logo" />
          <Nav className="links">
            <NavItem>
              <NavLink>
                <Link
                  to="projectsLinkTo"
                  smooth={true}
                  offset={-126}
                  duration={1000}
                >
                  Projects
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  to="aboutLinkTo"
                  smooth={true}
                  offset={-126}
                  duration={1000}
                >
                  About Me
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="footerLinkTo" smooth={true} duration={1000}>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
