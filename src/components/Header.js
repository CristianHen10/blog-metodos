import React from "react";
import logo from "../assets/images/icon-blog.png";
import "../assets/css/header.css";
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand>
          <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/paradigmas">Paradigmas</Link></Nav.Link>
            <Nav.Link><Link to="/lenguajes">Lenguajes</Link></Nav.Link>
            <Nav.Link><Link to="/referencias">Referencias</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
