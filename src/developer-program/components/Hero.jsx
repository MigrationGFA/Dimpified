import { Button, Col, Row } from "react-bootstrap";
import hero from "../images/hero5.png";

const Hero = () => {
  return (
    <div className="px-6 mt-5">
      <Row className="position-relative overflow-hidden" style={{ position: "relative" }}>
        <Col className="p-0">
          <img
            src={hero}
            alt="Developer"
            className="img-fluid w-100"
            style={{ position: "relative" }}
          />
          <div
            className="position-absolute text-white p-3"
            style={{
              top: "0",
              left: "0",
              // zIndex: 10, // Ensuring this is higher than the image
              // backgroundColor: "rgba(0, 0, 0, 0.5)", // Adding background for better visibility
              width: "100%", // Ensure it covers the width
            }}
          >
            <h1 className="text-primary display-2 display-md-3 display-sm-5 mb-3">
              Dimp Developers <br className="d-none d-md-block" /> Program
            </h1>
            <p className="lead lead-md lead-sm">
              Building blocks for jobs and services for Dimp
              <br className="d-none d-md-block" />
              from anywhere online
            </p>
            <Button variant="primary" href="#programs">Learn more</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
