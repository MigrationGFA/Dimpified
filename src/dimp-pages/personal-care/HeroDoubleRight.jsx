// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import Carpenter from "./images/chiropractor.jpg";
import Plumber from "./images/fitness-coach.jpg";
import Handyman from "./images/tatoo-artist.jpeg";
import Cleaner from "./images/make-up.jpg";
import Electician from "./images/barber.jpg";
import Mechanic from "./images/massage-therapist.jpg";

const HeroDoubleRight = () => {
  return (
    <section className="py-lg-10 py-6 px-4 fs-xs-16">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={6} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="fs-70 sm-fs-50 pe-lg-8 text-dark lh-75 fw-500 mb-6 ls-minus-3px fancy-text-style-4">
                <span className="text-dark  px-md-0">
                  Showcase your creativity as a
                </span>{" "}
                <span className="fw-700 d-inline-block text-gradient-fast-blue-purple-light-orange">
                  <Typewriter
                    words={[
                      "barber",
                      "hair stylist",
                      "make-Up artist",
                      "massage therapist",
                      "nail technician",
                      "chiropractor",
                      "tattoo Artist",
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
              <p className="fs-20 text-dark lh-34 xs-fs-19 mb-35px xs-mb-20px w-85 lg-w-95 sm-w-100 ls-minus-05px">
                Transform your personal care service business with our
                all-in-one ecosystem management platform.
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
              <Col md={4} xs={4} className="px-1">
                <div
                  className="bg-cover rounded-3 mb-2 h-12rem"
                  style={{ backgroundImage: `url(${Handyman})` }}
                ></div>
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Cleaner})` }}
                ></div>
              </Col>
              <Col md={4} xs={4} className="px-1">
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Carpenter})` }}
                ></div>
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Plumber})` }}
                ></div>
              </Col>
              <Col md={4} xs={4} className="px-1">
                <div
                  className="bg-cover rounded-3 mb-2 h-12rem"
                  style={{ backgroundImage: `url(${Electician})` }}
                ></div>
                <div
                  className="bg-cover rounded-3 mb-2 h-18rem"
                  style={{ backgroundImage: `url(${Mechanic})` }}
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
