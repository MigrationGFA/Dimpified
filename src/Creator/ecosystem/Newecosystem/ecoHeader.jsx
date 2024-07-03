import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import { resetState } from "../../../features/ecosystem";
import { useDispatch } from "react-redux";

const ecoHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancle = async () => {
    dispatch(resetState());
    navigate("/creator/dashboard/All-Ecosystem");
  };
  return (
    <Row
      style={{ backgroundColor: "#00008B" }}
      className="text-white d-flex align-items-center p-2 overflow-hidden"
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
              About Ecosystem
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
              Select Template
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
              Select Form
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
                location.pathname === "/creator/dashboard/Courses"
                  ? "bg-white text-blue-800"
                  : "text-white hover:bg-gray-100 hover:text-blue-800"
              }`}
            >
              Courses
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
                location.pathname === "/creator/dashboard/Integrations"
                  ? "bg-white text-blue-800"
                  : "text-white hover:bg-gray-100 hover:text-blue-800"
              }`}
            >
              Integration
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
                location.pathname === "/creator/dashboard/Payment"
                  ? "bg-white text-blue-800"
                  : "text-white hover:bg-gray-100 hover:text-blue-800"
              }`}
            >
              Payments
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
              Preview and Publish
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col xs="auto" onClick={handleCancle}>
        <Button variant="outline-light"> Cancel</Button>
      </Col>
    </Row>
  );
};

export default ecoHeader;
