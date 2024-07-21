// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import Mosque from "./images/mosque.jpg";
import Church from "./images/church.jpg";
import Muslim from "./images/muslim-praying.webp";
import Christian from "./images/praise.jpg";

const HeroDoubleRight = () => {
  return (
    <section className="px-lg-12 px-4 py-lg-7 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={6} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="display-3 fw-bold mb-3">
                <span className="text-dark  px-md-0">
                  Ecosystem Management Platform for
                </span>
                <span className="text-primary ms-2">
                  <Typewriter
                    words={[
                      "Religious Events",
                      "Religious Bodies",
                      "Religious Organizations",
                      "Religious Volunteers",
                      "Religious Donations",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="lead mb-4 pe-xl-12 ">
                Streamline your religious organization's operations with our
                comprehensive ecosystem management platform. From donor
                management to event coordination, volunteer tracking to surveys,
                our platform integrates everything you need to nurture and grow
                your community effectively.
              </p>
              {/* <ListGroup as="ul" bsPrefix='list-unstyled' className="mb-5">
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No credit card required</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Customer service 24/7</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No setup fee</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Cancel any time</span>
                </ListGroup.Item>
              </ListGroup> */}
              <div className="d-grid d-md-block">
                <Link
                  to="/creator/signup"
                  className="btn btn-primary btn-lg mb-2 mb-md-0"
                >
                  Get started for free
                </Link>{" "}
                <Link
                  href="https://calendly.com/jesutofunmi-ne2s"
                  className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
                >
                  Schedule a demo
                </Link>{" "}
              </div>
            </div>
            
          </Col>
          <Col lg={6} xs={12}>
            <Row>
              <Col md={6} xs={6} className="px-1">
                <div
                  className="bg-cover rounded-3 mb-2 h-12rem"
                  style={{ backgroundImage: `url(${Mosque})` }}
                ></div>
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Church})` }}
                ></div>
              </Col>
              <Col md={6} xs={6} className="px-1">
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Muslim})` }}
                ></div>
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Christian})` }}
                ></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroDoubleRight;
