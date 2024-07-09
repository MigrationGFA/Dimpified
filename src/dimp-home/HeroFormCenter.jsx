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
import Dashboard from "./images/dashboard.png";

const HeroFormCenter = () => {
  return (
    <section className="pt-md-14  pb-14 bg-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xl={7} lg={7} md={12}>
            <div className="py-8 py-lg-0 text-center">
              <h1 className="display-3 fw-bold mb-3 text-primary">
                <span className="text-dark px-3 px-md-0">
                  Ecosystem Management Platform for
                </span>
                <span className="text-primary ms-2">
                  <Typewriter
                    words={[
                      "Governments",
                      "Corporations",
                      "Professionals",
                      "Creatives",
                      "Foundations",
                      "Educators",
                      "Events",
                      "Religious Bodies",
                      "Incubator",
                      "Accelerator",
                      "Licensing",
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
              <p className="mb-6 h2 text-dark">
                DIMP allows you to create, manage and monetize your ecosystem.
              </p>
            </div>
          </Col>
          <Row className="justify-content-center text-center mt-6">
            <Col md={9} sm={12}>
              <div className="d-grid d-md-block">
                <Link
                  to="/creator/signup"
                  className="btn btn-primary btn-lg mb-2 mb-md-0"
                >
                  Get started for free
                </Link>{" "}
                <Link
                  to=""
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
