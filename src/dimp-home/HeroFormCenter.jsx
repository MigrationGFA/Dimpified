// import node module libraries
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  Badge,
  ListGroup,
  Container,
} from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

// import media files
import Dashboard from "./images/ecosystem.png";

const HeroFormCenter = () => {
  return (
    <section className="pt-md-14 px-3 pb-4 bg-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xl={7} lg={7} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-3 sm-fs-40 fw-bold mb-3 text-primary">
                <span className="text-dark alt-font">
                  Ecosystem Management Platform For{" "}
                </span>
                <span className="text-gradient-fast-blue-purple-light-orange">
                  <Typewriter
                    words={[
                      "Barbers",
                      "Fashion Designers",
                      "Professionals",
                      "Creatives",
                      "Foundations",
                      "Educators",
                      "Events",
                      "Religious Bodies",
                      "Designers",
                      "Traders",
                      "Consultants",
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
              <p className="mb-4 fs-20 sm-fs-20 text-dark">
                DIMP allows you to create, manage and monetize your ecosystem.
              </p>
            </div>
          </Col>
          <Row className="justify-content-center text-center mt-3">
            <Col md={9} sm={12}>
              <div className="d-grid d-md-block">
                <Link
                  to="/creator/signup"
                  className="btn btn-primary btn-lg mb-2 me-2 mb-md-0"
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
            </Col>
          </Row>

          <Col xl={{ span: 10, offset: 0 }} sm={12} className="mt-12">
            <Card className="bg-gradient-mix-shade px-md-5 pt-md-5  pt-4 rounded-3">
              <Image
                src={Dashboard}
                alt=""
                className="rounded-3 mb-n5 img-fluid smooth-shadow-md"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroFormCenter;
