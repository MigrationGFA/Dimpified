import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Ecosystem from "../../assets/ecosystem.png";

const OnboardTwo = () => {
  const [ecosystemSetup, setEcosystemSetup] = useState(null);
  const navigate = useNavigate();

  const handleNoClick = () => {
    navigate("/creator/dashboard/overview");
  };
  const handleYesClick = () => {
    navigate("/creator/dashboard/New-Ecosystem");
  };
  

  const handlePreviousClick = () => {
    navigate("/creator/Onboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center vh-100"
          style={{ paddingLeft: "0px" }}
        >
          <div>
            <img
              src={Ecosystem}
              alt="Onboarding"
              className="img-fluid vh-100 vw-100"
            />
          </div>
        </Col>
        <Col md={6} className="overflow-auto vh-100">
          <Card className="border border-primary mt-5 mx-1 mx-sm-2 mx-md-4 mx-lg-5">
            <Card.Body>
              <div className="d-flex justify-content-center mb-4">
                <div className="d-flex align-items-center w-100">
                  <hr
                    className="flex-grow-1 me-2 rounded-3"
                    style={{ border: "5px solid blue", height: "5px" }}
                  />
                  <hr
                    className="flex-grow-1 ms-2 rounded-3"
                    style={{ border: "5px solid blue", height: "5px" }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <h2 className="mb-3">DO YOU WANT TO SET UP AN/A ECOSYSTEM</h2>
                <div className="d-flex justify-content-center">
                  <Button
                    variant={ecosystemSetup === "yes" ? "primary" : "outline-primary"}
                    className="me-2"
                    onClick={handleYesClick}
                  >
                    YES
                  </Button>
                  <Button
                    variant={ecosystemSetup === "no" ? "primary" : "outline-primary"}
                    onClick={handleNoClick}
                  >
                    NO
                  </Button>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handlePreviousClick}>
                Previous
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OnboardTwo;
