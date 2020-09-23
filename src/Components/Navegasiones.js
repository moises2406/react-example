import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navegasiones extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
      <img
        src={require('../Img/Logo.png')}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="mr-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/react-example" className="nav-link">
                  Cuenta
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Lunes" className="nav-link">
                  Lunes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Sabados" className="nav-link">
                  Sabados
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Datos" className="nav-link">
                  Datos
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
