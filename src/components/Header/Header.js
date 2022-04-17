import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Header() {
    return (
        <div>
            <header>
            <Row>
                <Col md={9}>
                <Link to="/home"><div id="overlay">
                    <img src="/assets/logo.png" alt="logo" id="logo"></img>
                </div></Link>
                </Col>
                <Col md={3}>
                <p className="contactInfo phone">Phone: 555-555-5555</p>
                <p className="contactInfo">Email: hello@midwestliftsllc.com</p>
                </Col>
            </Row>
            </header>
            
            
             <div className="navWrapper">  
            <Navbar collapseOnSelect expand="lg"  sticky="top" className="navbar text-center">
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
                    <Nav.Link><Link to="/contact" className="nav-link">ABOUT</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div> 



    </div>
    )

}

export default Header;