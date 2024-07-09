import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Card,
  Button,
} from "react-bootstrap";
import EcoHeader from "./ecoHeader";
import AddNewCourse from "../AddNewCourse";
import PostAService from "./PostAService/PostAService";
import "./Course.css";
import ServiceImg from '../../../assets/services-img.jpg';
import DigitalImg from '../../../assets/digital-img.jpg';
import CourseImg from '../../../assets/create-course.jpg';

const Courses = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [showPostService, setShowPostService] = useState(false);
  const navigate = useNavigate();

  const handleCreateNewCourse = () => {
    setStep(2);
    setShowPostService();
  };

  const handleSkipAndContinue = () => {
    navigate("/creator/dashboard/Integrations");
  };

  const handlePrevious = () => {
    navigate("/creator/dashboard/Create-Form");
  };

  const handleService = () => {
    setStep(2);
    setShowPostService(true);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(3);
    } else if (step === 2) {
      setStep(3);
    }
  };

  useEffect(() => {
    console.log("Step:", step);
    console.log("Location pathname:", location.pathname);
  }, [step, location.pathname]);

  const handleSubmit = () => {
    alert("Form submitted!");
    navigate("/creator/dashboard/Integrations");
  };

  return (
    <Container fluid className="p-0">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <h2>Product Section</h2>
          <p>Select and create your digital products</p>
          <div className="w-50 mb-2" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
          <div className="mb-4 mt-2" style={{ fontSize: "1.2rem" }}>
            Step {step} of 3
          </div>
        </div>

        <div>
          {step === 1 && (
            <div>
              <div className="d-flex justify-content-between align-items-center mt-5 mb-3"></div>

              <Row className="mt-5 mb-4 align-items-center justify-content-center">
                <Col md={3} className="mt-1 md-mt-0">
                  <Card
                    className="templates-card position-relative"
                    onClick={handleService}
                    style={{ cursor: "pointer", backgroundColor: "#8458B3" }}
                  >
                    <Card.Body className="text-center">
                      <Card.Title
                        className="text-white"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Add Service
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={ServiceImg}
                      />
                      <Card.Text className="text-white mt-3">
                        Create and manage your services easily.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mt-1 md-mt-0">
                  <Card
                    className="templates-card position-relative"
                    onClick={() => alert("Upload Product")}
                    style={{ cursor: "pointer", backgroundColor: "#f75990" }}
                  >
                    <Card.Body className="text-center">
                      <Card.Title
                        className="text-white"
                        style={{ fontSize: "1.35rem" }}
                      >
                        Add Digital Product
                      </Card.Title>
                      <div style={{ height: "150px" }}>
                      <Card.Img
                        variant="top"
                        src={DigitalImg}
                       
                      />
                      </div>
                      
                      <Card.Text className="text-white mt-3">
                        Upload and sell your digital products.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mt-1 md-mt-0">
                  <Card
                    className="templates-card position-relative"
                    onClick={handleCreateNewCourse}
                    style={{ cursor: "pointer", backgroundColor: "#0049B7" }}
                  >
                    <Card.Body className="text-center">
                      <Card.Title
                        className="text-white"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Add Course
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={CourseImg}
                      />
                      <Card.Text className="text-white mt-3">
                        Create and publish your courses.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div className="d-flex justify-content-between align-content-center">
                <div>
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                </div>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={handleSkipAndContinue}
                  >
                    Skip and Continue
                  </Button>
                  <Button variant="primary" onClick={handleContinue}>
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && showPostService && (
            <div>
              <h3>Create Your Service</h3>
              <PostAService />
              <div className="d-flex justify-content-between w-100 mt-4">
                <Button variant="primary" onClick={() => setStep(1)}>
                  Previous
                </Button>
                <Button variant="primary" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && !showPostService && (
            <div>
              <h3>Create Your Course</h3>
              <AddNewCourse />
              <div className="d-flex justify-content-between w-100">
                <Button variant="primary" onClick={() => setStep(1)}>
                  Previous
                </Button>
                <Button variant="primary" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h3>Preview Products</h3>
              <p className="mt-4">
                Drag the cards to rearrange your products as you like
              </p>
              {/* Render the selected courses here */}
              <div className="d-flex justify-content-between mt-3">
                <Button variant="secondary" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default Courses;
