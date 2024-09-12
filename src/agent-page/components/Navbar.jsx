import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../../src/assets/DIMP logo colored.png";
import "./NavbarComponent.module.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-md-8 px-sm-2 py-2">
      <Navbar.Brand href="/dimp/agent-page">
        <img
          src={Logo}
          width="100"
          height="50"
          className="d-inline-block align-center"
          alt="dimp logo"
        />{" "}
        Affliate program
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <NavDropdown
            title={
              <Link to="" className="text-black">
                Join
              </Link>
            }
            id="join-dropdown"
            className="no-arrow"
          >
            <NavDropdown.Item href="">
              About the Developers Program
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#benefits">Benefits</NavDropdown.Item>
            <NavDropdown.Item href="#policies">Policies</NavDropdown.Item> */}
            <NavDropdown.Item href="">
              API License Agreement
            </NavDropdown.Item>
          </NavDropdown>
          {/* <NavDropdown
            title={
              <Link to="#develop"  className="text-black">
                Develop
              </Link>
            }
            id="develop-dropdown"
          >
            <NavDropdown.Item href="#getStarted">Get Started</NavDropdown.Item>
            <NavDropdown.Item href="#apis">APIs</NavDropdown.Item>
            <NavDropdown.Item href="#tools">Tools</NavDropdown.Item>
            <NavDropdown.Item href="#sdks">SDKs</NavDropdown.Item>
            <NavDropdown.Item href="#widgets">Widgets</NavDropdown.Item>
            <NavDropdown.Item href="#guides">Guides</NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown
            title={
              <Link to="" className="text-black">
                Grow
              </Link>
            }
            id="grow-dropdown"
          >
            {/* <NavDropdown.Item href="#getStarted">
              Application Growth Check
            </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#">Affiliate Program</NavDropdown.Item> */}
            <NavDropdown.Item href="">
              Loyalty Program
            </NavDropdown.Item>
            <NavDropdown.Item href="">
              Events
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#">Awards</NavDropdown.Item> */}
          </NavDropdown>
          {/* <Nav.Link href="#updates">Updates</Nav.Link> */}
          <Nav.Link
            href=""
            className="display-4"
          >
            Support
          </Nav.Link>
          {/* <Nav.Link></Nav.Link> */}
          <NavDropdown
            title={<i className="fas fa-user"></i>}
            href="#account"
            id="icon-dropdown"
          >
            <NavDropdown.Item href="/dimp/agent-page/auth?tab=signIn">
              Sign In
            </NavDropdown.Item>
            <NavDropdown.Item href="/dimp/agent-page/auth?tab=register">
              Sign Up
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
