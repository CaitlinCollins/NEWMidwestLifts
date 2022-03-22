import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  sticky="top" className="navbar">
                <Navbar.Brand><Link to="/home" className="navbar-brand">MIDWEST LIFTS, LLC</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto navbarpadding">
                    <Nav.Link className="nav-link"><Link to="/home" className="nav-link">HOME</Link></Nav.Link>
                    <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/lifts" className="nav-link">LIFTS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/lighting" className="nav-link">LIGHTING</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/flooring" className="nav-link">FLOORING</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/galleries" className="nav-link">GALLERIES</Link></Nav.Link>
                    <Nav.Link><Link to="/contact" className="nav-link">CONTACT</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>



    </div>
    )

}

export default Header;