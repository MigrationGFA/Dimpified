import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card, Modal } from "react-bootstrap";
import EcoHeader from "./ecoHeader";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../../features/ecosystem";
import { useDispatch, useSelector } from "react-redux";
import PreviewPage from "../../../EditTemplate/Preview";
import EcoFormPreview from "../../../EditTemplate/EcoFormPreview";

const PreviewAndSend = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [content, setContent] = useState({
    logo: "Your Logo",
    header: "Welcome to Our Website",
    mainText:
      "This is the main content of your landing page. You can edit this text.",
    footer: "© 2024 Your Company. All rights reserved.",
  });
  const handlePrevious = () => {
    navigate("/creator/dashboard/Payment");
  };

  const dispatch = useDispatch();

  const handleCancle = async () => {
    dispatch(resetState());
    navigate("/creator/dashboard/All-Ecosystem");
  };

  const ecosystem = useSelector((state) => state.ecosystem);
  return (
    <Container fluid className="p-0">
      <EcoHeader />

      <Container className="mt-4 mb-12">
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
                <p>{ecosystem.ecosystemName}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Ecosystem Domain:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.ecosystemDomain}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Target Audience Sector:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.targetAudienceSector}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Main Objective:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.mainObjective}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Contact:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.contact}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Address:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.address}</p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={6}>
                <p>
                  <strong>Ecosystem Description:</strong>
                </p>
              </Col>
              <Col lg={6}>
                <p>{ecosystem.ecosystemDescription}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <hr />
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>View Template</Card.Title>
            <PreviewPage />
          </Card.Body>
        </Card>
        <hr />
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Create Form</Card.Title>
            <EcoFormPreview />
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="primary" onClick={handleShowModal}>
            Publish Ecosystem
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Make this Ecosystem Live for users to have
          access to?
          <br />
          <strong>Note:</strong> <br />
          If you click on No, you can still edit the ecosystem from your
          ecosystempage
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancle}>
            No
          </Button>

          <Button variant="primary" onClick={handleCancle}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PreviewAndSend;
