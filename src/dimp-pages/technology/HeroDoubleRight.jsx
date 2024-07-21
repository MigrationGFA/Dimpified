// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files

import GradientBG from "../../assets/images/background/gradient-bg.png";
import Graphics from "./images/software-developer.png";
const HeroDoubleRight = () => {
  return (
    <section
      className="px-lg-12 px-4 py-lg-16 py-6 bg-cover"
      style={{ backgroundImage: `url(${GradientBG})` }}
    >
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={6} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="display-3 fw-bold mb-3">
                <span className="text-dark  px-md-0">
                  Cash in on your expertise as a
                </span>
                <span className="text-primary ms-2">
                  <Typewriter
                    words={[
                      "web developer",
                      "data analyst",
                      "mobile app developer",
                      "software engineer",
                      "cloud engineer",
                      "technical writer",
                      "cybersecurity expert",
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
                Leverage DIMP to unlock the full potential of your tech
                expertise. Build stunning portfolios to showcase your projects,
                get more freeance jobs, provide training using our LMS, manage
                payments and contracts seamlessly, and build a strong online
                presence.
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
                  to="https://calendly.com/jesutofunmi-ne2s"
                  className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
                >
                  Schedule a demo
                </Link>{" "}
              </div>
            </div>
          </Col>
          <Col lg={6} xs={12} className="order-md-2">
            <div className="mb-2 mb-md-0 ">
              <Image
                src={Graphics}
                alt=""
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroDoubleRight;
