import { Navbar, Button, Container } from "react-bootstrap";
import Logo from "../../../src/assets/DIMP logo colored.png";
import { Link } from "react-router-dom";
import "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-md-8 px-sm-2 py-2">
      <Container>
        <Navbar.Brand href="/dimp/agent-page">
          <img
            src={Logo}
            width="100"
            height="50"
            className="d-inline-block align-center"
            alt="dimp logo"
          />{" "}
          Affiliate Program
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button
            variant="primary"
            as={Link}
            to="/dimp/agent-page/auth?tab=register"
            className="me-2"
          >
            Sign Up
          </Button>
          <Button
            variant="outline-primary"
            as={Link}
            to="/dimp/agent-page/auth?tab=signIn"
          >
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
