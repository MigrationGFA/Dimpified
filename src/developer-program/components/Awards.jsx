import { Button, Col, Row } from "react-bootstrap";
import award from "../images/awards.png";

const Awards = () => {
  return (
    <div>
      <div className="px-8 py-6 overflow-hidden">
        <Row className="position-relative overflow-hidden">
          <Col className="p-0">
            <img
              src={award}
              alt="Developer"
              className="img-fluid w-100"
              style={{ position: "relative" }}
            />
            <div
              className="position-absolute text-white p-3"
              style={{
                top: "0",
                left: "0",
              }}
            >
              <h1 className="text-primary display-4 display-md-1 display-sm-5 mb-3">
                Dimp Developers <br className="d-none d-md-block" />
                Awards
              </h1>
              <p className="lead lead-md lead-sm">
                Check out award-winning developers and apps.
              </p>
              <Button variant="primary">Learn more</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Awards;
