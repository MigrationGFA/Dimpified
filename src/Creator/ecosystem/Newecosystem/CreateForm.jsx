import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import Ecosystem from "../../../assets/ecosystem.png";

const CreateForm = () => {
  const location = useLocation();

  return (
    <Container fluid className="p-0">
      <Row
        style={{ backgroundColor: "#00008B" }}
        className="rounded-3 text-white d-flex align-items-center p-2"
      >
        <Col>
          <Nav className="d-flex justify-content-center align-items-center">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/New-Ecosystem"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Information About Ecosystem
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Edit-Template"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Edit Template
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Create-Form"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Create Form
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Preview-and-Send"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Preview and Send
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs="auto">
          <Link to="/creator/dashboard/All-Ecosystem">
            <Button variant="outline-light"> Cancel</Button>
          </Link>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <div className=" d-lg-flex justify-content-between align-items-center border-bottom mb-4 ">
                <div className=" mb-lg-0">
                  <h3 className="mb-0 h3 fw-bold">Create Form</h3>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={Ecosystem}
                    alt="Onboarding"
                    className="img-fluid vh-100 vw-100"
                  />
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <Link to="/creator/dashboard/Preview-and-Send">
                    <Button variant="primary">Next</Button>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateForm;
