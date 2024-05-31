import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const CustomNavbar = ({ logo, links, buttonText }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img src={logo} alt="logo" width="50" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {links.map((link, index) => (
          <Nav.Link key={index} href={link.href}>
            {link.text}
          </Nav.Link>
        ))}
        <Button variant="primary">{buttonText}</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;
