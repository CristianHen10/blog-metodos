import React from "react";
import logo from "../assets/images/icon-blog.png";
import "../assets/css/header.css";
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/paradigmas">Paradigmas</Link></Nav.Link>
            <Nav.Link><Link to="/referencias">Referencias</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
