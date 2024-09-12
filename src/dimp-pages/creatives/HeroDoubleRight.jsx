// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import Mosque from "./images/photographers.jpg";
import Church from "./images/web-designer.jpg";
import Muslim from "./images/videographers.jpg";
import Christian from "./images/content-creators.jpg";

const HeroDoubleRight = () => {
  return (
    <section className="px-lg-12 px-4 py-lg-7 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={6} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="fs-70 sm-fs-50 pe-lg-8 text-dark lh-75 fw-500 mb-6 ls-minus-3px fancy-text-style-4">
                <span className="text-dark  px-md-0">
                  Ecosystem Management Platform for
                </span>{" "}
                <span className="fw-700 d-inline-block text-gradient-fast-blue-purple-light-orange">
                  <Typewriter
                    words={[
                      "Designers",
                      "Content Creators",
                      "Photgraphers",
                      "Brand Agencies",
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
              <p className=" mb-4 pe-xl-12 ">
                Transform your creative business with our comprehensive
                ecosystem management platform. From web design to content
                creation, our tool integrates everything you need to showcase
                your talent, manage your projects, and grow your business
                effectively.
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
                  className="btn medium btn-big fs-16 btn-hover-animation-switch rounded-3 btn-box-shadow  fw-400 xs-mt-10px xs-mb-10px me-2"
                >
                  Get started for free
                </Link>{" "}
                <Link
                  to="https://calendly.com/jesutofunmi-ne2s"
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
