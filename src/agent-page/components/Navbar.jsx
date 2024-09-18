import { useEffect, useState } from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import Logo from "../../../src/assets/DIMP logo colored.png";
import "./NavbarComponent.module.css";

const NavbarComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

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
          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <Link to="/dimp/agent-page/profile">
              <IoMdPerson size={30} />
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
