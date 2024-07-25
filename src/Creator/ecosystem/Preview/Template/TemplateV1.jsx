import React, { Fragment } from "react";

import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { Link } from "react-router-dom";

// import "../assets/scss/theme.scss";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Accordion,
  Card,
  Form,
  Image,
  Carousel,
  ListGroup,
} from "react-bootstrap";

const PreviewTemplateV1 = () => {
  return (
    <Fragment>
      <SiteNavbar />
      <Hero />
      <section className="py-lg-5 py-5 bg-light">
        <About />
      </section>
      <section className="py-lg-5 py-5 bg-white">
        <Vision />
      </section>

      <section className="py-lg-5 py-5 bg-white">
        <Benefit />
      </section>
      <section className="py-lg-5 py-5 bg-light">
        <Audience />
      </section>
      <CTASection />

      <section className="py-lg-5 py-5 bg-white">
        <Container id="hero" className="py-lg-16 py-6">
          <Row>
            <Col xl={6} lg={6} xs={12} className="my-4">
              <FAQ />
            </Col>
            <Col xl={6} lg={6} xs={12}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </Fragment>
  );
};

const SiteNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <Image
          src={"https://gfa-tech.com/testnet/lagup/images/logo-placeholder.png"}
          height={40}
          alt=""
          className="logo-inverse"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto">
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#audience">Audience</Nav.Link>
          <Nav.Link href="#benefit">Benefits</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <div className="d-flex">
          <Button variant="outline-light" className="me-2">
            Login
          </Button>
          <Button variant="primary">Sign Up</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
const Hero = () => (
  <section
    className="hero-section text-white py-lg-20"
    style={{
      backgroundImage: "url(https://via.placeholder.com/1200x800)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "100px 0",
    }}
  >
    <Container id="hero">
      <Row className="d-flex align-items-center">
        <Col
          xxl={{ offset: 1, span: 5 }}
          xl={6}
          lg={6}
          xs={12}
          className="mt-5 mt-lg-10"
        >
          <h1 className="display-3 fw-bold mb-3">
            Your Preferred Ecosystem Title
          </h1>
          <p className="lead mb-4">
            We are a company dedicated to providing the best solutions for your
            business needs. Our team of experts is here to support you every
            step of the way.
          </p>

          <Button variant="primary" className="d-grid d-md-block mb-4">
            Read More
          </Button>
        </Col>
        {/* <Col xxl={5} xl={6} lg={6} xs={12}>
          <Image src="https://via.placeholder.com/500x300" rounded fluid />
        </Col> */}
      </Row>
    </Container>
  </section>
);
const About = () => (
  <Container id="about" className="text-center py-8 py-lg-12">
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12}>
        <h2 className="display-5 fw-bold mb-3">About Us</h2>
        <p className="lead mb-4">
          We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.
        </p>
        <p className="lead">
          We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.
        </p>
      </Col>
    </Row>
  </Container>
);
const Vision = () => (
  <Container id="vision" className="py-lg-12 py-6">
    <Row className="d-flex align-items-center">
      <Col
        xxl={5}
        xl={6}
        lg={6}
        xs={12}
        className="mt-0 mt-lg-10"
        style={{
          backgroundImage: "url(https://via.placeholder.com/150)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image src="https://via.placeholder.com/500x300" rounded fluid />
      </Col>
      <Col
        xxl={{ offset: 1, span: 5 }}
        xl={6}
        lg={6}
        xs={12}
        className="mt-5 mt-lg-10"
      >
        <h1 className="display-5 fw-bold mb-3">Our Vision and Mission</h1>
        <p className="lead mb-4">
          We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.
        </p>
        <p className="lead mb-4">
          We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.
        </p>

        <Button variant="primary" className="d-grid d-md-block">
          Read More
        </Button>
      </Col>
    </Row>
  </Container>
);

const Audience = () => (
  <Container id="benefit" className="py-5 ">
    <Row>
      <Col md={4} className="mb-4">
        <h1 className="display-5 fw-bold mb-3">
          Why should you apply for the program?
        </h1>
        <p className="lead mb-4">
          We are a company dedicated to providing the best solutions for your
          business needs. Our team of experts is here to support you every step
          of the way.
        </p>
      </Col>
      <Col md={8} className="mb-4">
        <Row className="gy-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Innovative Solutions</Card.Title>
                <Card.Text>
                  Our cutting-edge solutions are <br />
                  designed to address the unique
                  <br />
                  challenges of your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Expert Support</Card.Title>
                <Card.Text>
                  Our team of experts is available 24/7 to provide the support
                  you need to succeed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Scalable Services</Card.Title>
                <Card.Text>
                  Our services are designed to grow with your business, ensuring
                  you always have what you need.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Cost Effective</Card.Title>
                <Card.Text>
                  We offer competitive pricing to ensure you get the best value
                  for your investment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

const Benefit = () => (
  <Container id="audience" className="py-5">
    <h2 className="">Who Should Enroll?</h2>

    <Row>
      <Col md={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: "url(https://via.placeholder.com/150)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            height: "300px",
          }}
        >
          <Card.Body
            className="d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "15px",
            }}
          >
            <Card.Title>Professionals</Card.Title>
            <Card.Text>
              High-achieving individuals looking for advanced tools and
              resources to succeed.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: "url(https://via.placeholder.com/150)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            height: "300px",
          }}
        >
          <Card.Body
            className="d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "15px",
            }}
          >
            <Card.Title>Businesses</Card.Title>
            <Card.Text>
              Companies seeking innovative solutions to improve their operations
              and growth.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: "url(https://via.placeholder.com/150)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            height: "300px",
          }}
        >
          <Card.Body
            className="d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "15px",
            }}
          >
            <Card.Title>Entrepreneurs</Card.Title>
            <Card.Text>
              Visionary leaders ready to take their startups to the next level.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: "url(https://via.placeholder.com/150)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            height: "300px",
          }}
        >
          <Card.Body
            className="d-flex flex-column justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "15px",
            }}
          >
            <Card.Title>Entrepreneurs</Card.Title>
            <Card.Text>
              Visionary leaders ready to take their startups to the next level.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const FAQ = () => (
  <Container id="faq">
    <Row className="justify-content-center">
      <Col lg={12} md={12} sm={12}>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              We offer a wide range of services including consulting, software
              development, and project management.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I contact support?</Accordion.Header>
            <Accordion.Body>
              You can contact our support team via email, phone, or through our
              online chat system available on our website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What are your pricing plans?</Accordion.Header>
            <Accordion.Body>
              We offer flexible pricing plans to meet the needs of different
              types of businesses. Please visit our pricing page for more
              details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I customize the services to fit my needs?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer customizable service packages to ensure you get
              exactly what you need for your business.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);
const CTASection = () => (
  <div
    className="cta-section text-white text-center"
    style={{
      backgroundImage: "url(https://via.placeholder.com/1200x600)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 0",
    }}
  >
    <Container>
      <h1 className="mb-3">Join Us Today</h1>
      <p className="mb-4">
        Become part of our community and start enjoying the benefits right away!
      </p>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Container>
  </div>
);

const Contact = () => (
  <Container id="contact">
    <h2 className="text-center">Contact Us</h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

const Footer = () => {
  return (
    <Fragment>
      <footer className="pt-lg-10 pt-5 footer bg-dark text-white">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              {/* about company  */}
              <div className="mb-4">
                <Image
                  src={
                    "https://gfa-tech.com/testnet/lagup/images/logo-placeholder.png"
                  }
                  height={50}
                  alt=""
                  className="logo-inverse"
                />

                <div className="mt-4">
                  <p>Your Ecosystem Summary</p>
                  {/* social media */}
                  <div className="fs-4 mt-4">
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiLinkedin} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiFacebook} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-twitter text-white me-2">
                      <Icon path={mdiTwitter} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-instagram text-white ">
                      <Icon path={mdiInstagram} size={0.7} />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
              <div className="mb-4 text-white">
                {/* list */}
                <h3 className="fw-bold mb-3 text-white">Company</h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      About
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      Benefit
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      Audience
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                {/* list  */}
                <h3 className="fw-bold mb-3 text-white">Support</h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      FAQs
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      Contact Us
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              {/* contact info */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-white">Get in touch</h3>
                <p>Your Address</p>
                <p className="mb-1">
                  Email: <Link to="#">info@yourdomain.com</Link>
                </p>
                <p>
                  Phone:{" "}
                  <span className="text-dark fw-semi-bold">
                    +234 81 8080 8080
                  </span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center g-0 border-top py-2 mt-6">
            {/* Desc  */}
            <Col lg={4} md={5} sm={12}>
              <span>© 2024 GFA-Tech, Inc. All Rights Reserved</span>
            </Col>
            {/*  Links  */}
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};
export default PreviewTemplateV1;
