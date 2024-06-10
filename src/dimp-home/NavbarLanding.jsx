// import node module libraries
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Navbar, Nav, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import custom components
import FeaturesMenu from "./FeaturesMenu";
import UseCasesMenu from "./UseCasesMenu";
import SupportMenu from "./SupportMenu";

// import media files
import Logo from "./images/gfa-blue.png";

// import data files

const NavbarLanding = (props) => {
  const { transparent, center } = props;
  const [expandedMenu, setExpandedMenu] = useState(false);
  // Media queries for different device types
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isIpadPro = useMediaQuery({ minWidth: 1024, maxWidth: 1366 }); // Adjust as needed for iPad Pro dimensions

  const linkStyle = {
    fontWeight: "500",
    color: "black",
    fontSize: isDesktop
      ? "1rem"
      : isIpadPro
      ? "1.25rem" // Different value for iPad Pro
      : isTablet || isMobile
      ? "1.25rem"
      : "1.25rem", // Default for other devices
  };

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className={`navbar navbar-default bg-white shadow-none ${
          transparent ? "navbar-transparent" : ""
        }`}
      >
        <Container className="px-6">
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} alt="" height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${"mx-auto"}`}>
              <FeaturesMenu />
              <UseCasesMenu />
              <Nav.Link
                href="/pricing"
                className="dropdown-arrow d-block nav-link lh-1 pt-2"
                style={linkStyle}
              >
                Pricing
              </Nav.Link>

              <SupportMenu />
            </Nav>
            <Nav
              className={`${
                center
                  ? "d-flex align-items-center order-lg-3 flex-row"
                  : "navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap"
              }`}
            >
              <div className={`mt-3 mt-lg-0`}>
                <Nav.Link
                  href="/creator/signup"
                  bsPrefix="btn"
                  className="btn btn-outline-primary mx-2"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link
                  href="/creator/signup"
                  bsPrefix="btn"
                  className="btn btn-primary"
                >
                  Get Started For Free
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

// Specifies the default values for props
NavbarLanding.defaultProps = {
  transparent: false,
};

// Typechecking With PropTypes
NavbarLanding.propTypes = {
  transparent: PropTypes.bool,
};

export default NavbarLanding;
