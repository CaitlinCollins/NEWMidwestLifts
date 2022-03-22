import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";

function Footer() {
    return (
        <div>
            <footer className="footer ">
            <Row>
            <Col md={3} className="text-center">
            <Link to="/lifts" className="footerlinks">LIFTS</Link>
            <Link to="/lighting" className="footerlinks">LIGHTING</Link>
            <Link to="/flooring" className="footerlinks">FLOORING</Link>
            <Link to="/contact" className="footerlinks">CONTACT</Link>
            </Col>
            <Col md={3} className="icons ms-auto text-center">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
            </Col>
            <Col md={3} className="copyright ms-auto text-center"><p>&copy; 2022 CAITLIN COLLINS</p></Col>
            </Row>
            </footer>
        </div>
    )

}

export default Footer;