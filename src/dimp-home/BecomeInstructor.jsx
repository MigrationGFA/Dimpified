// import node module libraries
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const BecomeInstructor = () => {
  return (
    <Container>
      <Row className="mb-0 justify-content-center">
        <Col lg={12} md={12}>
          <Row className="align-items-center">
            {/* heading */}
            <Col lg={6} md={5} sm={12} className="mb-2">
              <h1 className="display-5 alt-font fw-bold">Perfect for your business.</h1>
              <p className="lead">
                Leverage DIMP in any business of yours, be it enterprise or
                consumer.
              </p>
            </Col>
          </Row>
          {/* row */}
        </Col>
      </Row>
    </Container>
  );
};
export default BecomeInstructor;
