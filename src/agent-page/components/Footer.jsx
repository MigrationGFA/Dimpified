import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import { footerAgentDefaultLink } from "../utils/footerDefaultRoutes";

// Import media files
import FooterLogo from "../../assets/DIMP logo colored.png";

// Define footer links (replace this with your actual footerDefaultLink array)

// const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Fragment>
      <footer className="pt-lg-10 pt-5 footer bg-light text-black">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12} className="text-md-left mb-4">
              <Image
                src={FooterLogo}
                alt="Footer Logo"
                className="logo-inverse"
                style={{ height: "50px", width: "100px" }}
              />
              <div>
                <p>
                  DIMP is an Ecosystem management platform that allows you to
                  create, manage and monetize your ecosystem.
                </p>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Company</h3>
                <ul className="list-unstyled">
                  {footerAgentDefaultLink.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <Link to={item.link} className="nav-link text-black">
                        {item.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Support</h3>
                <ul className="list-unstyled">
                  {footerAgentDefaultLink.slice(3).map((item) => (
                    <li key={item.id}>
                      <Link to={item.link} className="nav-link text-black">
                        {item.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Get in touch</h3>
                <p>Ogun Tech Hub, Abeokuta</p>
                <p className="mb-1">
                  Email: <Link to="#"> info@dimpified.com</Link>
                </p>
                <p>
                  Phone:{" "}
                  <span className="text-dark fw-semi-bold">
                    +234 808 009 4426
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center g-0 border-top py-2 mt-6">
            <Col lg={4} md={5} sm={12} className="text-center text-md-left">
              <span>©2024 Dimp. All Rights Reserved</span>
              {/* {currentYear} */}
            </Col>
            <Col
              lg={8}
              md={7}
              sm={12}
              className="d-md-flex justify-content-center justify-content-md-end"
            >
              <nav className="nav nav-footer">
                <Link className="nav-link ps-0 text-black" to="#">
                  Privacy Policy
                </Link>
                <Link className="nav-link px-2 px-md-3 text-black" to="#">
                  Cookie Notice
                </Link>
                <Link className="nav-link d-none d-lg-block text-black" to="#">
                  Do Not Sell My Personal Information
                </Link>
                <Link className="nav-link text-black" to="#">
                  Terms of Use
                </Link>
              </nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default Footer;
