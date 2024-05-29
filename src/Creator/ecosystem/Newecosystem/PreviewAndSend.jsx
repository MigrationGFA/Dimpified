import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card, Modal } from "react-bootstrap";
import Ecosystem from "../../../assets/ecosystem.png";
import EcoHeader from "./ecoHeader";

const PreviewAndSend = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [content, setContent] = useState({
    logo: "Your Logo",
    header: "Welcome to Our Website",
    mainText:
      "This is the main content of your landing page. You can edit this text.",
    footer: "© 2024 Your Company. All rights reserved.",
  });

  return (
    <Container fluid className="p-0">
      <EcoHeader />

      <Container className="mt-4">
        <Card className="mb-4">
          <Card.Body>
            <Card.Title className="mb-3 h2 ">
              Basic Ecosystem Information
            </Card.Title>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>EcoSystem Name:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>Awesome Ecosystem</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Ecosystem Domain:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>awesome.dimplified.com</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Target Audience Sector:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>Digital Marketing</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Main Objective:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>Educating customers or partners</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Expected Audience Number:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>1001 - 5000</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Experience with Creating Ecosystem:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>Yes</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Ecosystem Description:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>
                  This ecosystem focuses on educating customers about the latest
                  trends in digital marketing.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <hr />
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Edit Template</Card.Title>
            <div
              className="template-preview p-3"
              style={{
                backgroundColor: "#f8f9fa",
                border: "1px solid #ddd",
              }}
            >
              <header className="text-center">
                <h1>{content.logo}</h1>
                <h2>{content.header}</h2>
              </header>
              <main className="mt-4">
                <p>{content.mainText}</p>
              </main>
              <footer className="text-center mt-4">
                <p>{content.footer}</p>
              </footer>
            </div>
          </Card.Body>
        </Card>
        <hr />
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Create Form</Card.Title>
            <div>
                  <img
                    src={Ecosystem}
                    alt="Onboarding"
                    className="img-fluid vh-100 vw-100"
                  />
                </div>
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleShowModal}>
            Create Ecosystem
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to create this ecosystem?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PreviewAndSend;
