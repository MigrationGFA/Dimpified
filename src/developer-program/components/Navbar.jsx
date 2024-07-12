import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../../src/assets/GFA logo Rebrand Blue.png";
import "./NavbarComponent.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg" className="p-3 px-6">
      {/* <Container> */}
      <Navbar.Brand href="/dimp/developer-program">
        <img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-center"
          alt="dimp logo"
        />{" "}
        Developers program
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <NavDropdown
            title={
              <Link to="#join" className="nav-link">
                Join
              </Link>
            }
            id="join-dropdown"
            className="no-arrow" // Apply the custom class here
          >
            <NavDropdown.Item href="#about">
              About the Developers Program
            </NavDropdown.Item>
            <NavDropdown.Item href="#benefits">Benefits</NavDropdown.Item>
            <NavDropdown.Item href="#policies">Policies</NavDropdown.Item>
            <NavDropdown.Item href="#license">
              API License Agreement
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <Link to="#develop" className="nav-link">
                Develop
              </Link>
            }
            id="join-dropdown"
          >
            <NavDropdown.Item href="#getStarted">Get Started</NavDropdown.Item>
            <NavDropdown.Item href="#apis">APIs</NavDropdown.Item>
            <NavDropdown.Item href="#tools">Tools</NavDropdown.Item>
            <NavDropdown.Item href="#sdks">SDKs</NavDropdown.Item>
            <NavDropdown.Item href="#widgets">Widgets</NavDropdown.Item>
            <NavDropdown.Item href="#guides">Guides</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={
              <Link to="#Grow" className="nav-link">
                Grow
              </Link>
            }
            id="join-dropdown"
          >
            <NavDropdown.Item href="#getStarted">
              Application Growth Check
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Affiliate Program</NavDropdown.Item>
            <NavDropdown.Item href="#">Loyalty Program</NavDropdown.Item>
            <NavDropdown.Item href="#">Events</NavDropdown.Item>
            <NavDropdown.Item href="#">Awards</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#updates">Updates</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <Nav.Link href="#account">
            <i className="fas fa-user"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavbarComponent;
