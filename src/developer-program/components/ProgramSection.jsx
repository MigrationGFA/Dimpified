import { Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProgramSection = () => {
  return (
    <div className="px-8 mb-4">
      <Row className="mt-6 d-flex justify-content-between" id="programs">
        <Col lg={3} xs={10} className="mt-6">
          <h3 className="display-5">Join</h3>
          <p>Join now to find out how to join the Dimp Developers Program.</p>
          <div className="d-flex justify-content-between">
            <Link
              to="/dimp/developer-program/join"
              className="align-self-center"
            >
              Learn more
            </Link>
            <Link
              variant="secondary"
              className="btn btn-outline-secondary align-self-center rounded-pill"
            >
              Register now <ArrowRight />
            </Link>
          </div>
        </Col>
        {/* <Col lg={3} xs={10} className="mt-6">
          <h3 className="display-5">Develop</h3>
          <p>Get tools, resources, and support to develop on Dimp.</p>
          <div className="d-flex justify-content-between">
            <Link variant="primary" className="align-self-center">
              Learn more
            </Link>
            <Link
              variant="secondary"
              className="btn btn-outline-secondary align-self-center rounded-pill"
            >
              See APIs <ArrowRight />
            </Link>
          </div>
        </Col> */}
        <Col lg={3} xs={10} className="mt-6">
          <h3 className="display-5">Grow</h3>
          <p>Receive support for your application in the Dimp ecosystem.</p>
          <Link variant="primary" className="align-self-center">
            Learn more
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ProgramSection;
