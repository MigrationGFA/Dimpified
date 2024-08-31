import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Carousel,
  ButtonGroup,
} from "react-bootstrap";

const GymTemplate = () => {
  return (
    <Fragment>
      <Navbar bg="transparent" expand="lg" className="px-lg-10 py-lg-3">
        <Container>
          <Navbar.Brand
            className="fw-bold text-dark d-flex align-items-center"
            href="#home"
          >
            FASHION DESIGNER
            <img
              src="https://craftohtml.themezaa.com/images/demo-barber-icon-04.svg"
              alt="Icon"
              style={{ marginLeft: "10px", height: "24px" }} // Adjust the margin and height as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                className="text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#about"
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#services"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                className="text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#gallery"
              >
                GALLERY
              </Nav.Link>
              <Nav.Link
                className="text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#testimonials"
              >
                TESTIMONIALS
              </Nav.Link>
              <Nav.Link
                className="text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#contact"
              >
                CONTACT
              </Nav.Link>
            </Nav>
            <Button variant="dark" className="btn-lg">
              <i className="feather icon-feather-calendar me-2"></i>
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="jumbotron text-center"
        style={{ padding: "50px", backgroundColor: "#f8f9fa" }}
      >
        <h1 className="display-4">Welcome to FashionDesign</h1>
        <p className="lead">Your style, our passion.</p>
      </div>
      <div
        id="about"
        className="container text-center"
        style={{ padding: "50px 0" }}
      >
        <h2>About Us</h2>
        <p>
          We are a team of passionate fashion designers dedicated to bringing
          your unique style to life.
        </p>
      </div>
      <div
        id="services"
        className="container text-center"
        style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
      >
        <h2>Our Services</h2>
        <p>
          We offer a wide range of fashion design services, including custom
          clothing, alterations, and more.
        </p>
      </div>
      <div
        id="gallery"
        className="container text-center"
        style={{ padding: "50px 0" }}
      >
        <h2>Gallery</h2>
        <p>Check out some of our latest designs.</p>
      </div>
      <div
        id="testimonials"
        className="container text-center"
        style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
      >
        <h2>Testimonials</h2>
        <p>Read what our clients have to say about us.</p>
      </div>
      <div
        id="contact"
        className="container text-center"
        style={{ padding: "50px 0" }}
      >
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Get in touch with us today.</p>
      </div>
      <footer
        className="text-center"
        style={{ padding: "20px", backgroundColor: "#343a40", color: "white" }}
      >
        <p>&copy; 2024 FashionDesign. All rights reserved.</p>
      </footer>
    </Fragment>
  );
};

export default GymTemplate;
