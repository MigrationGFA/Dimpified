import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate, Navigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  ProgressBar,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Steps.css";
import template1 from "../../../assets/template/form1.png";

import EcoHeader from "./ecoHeader";
import EcoForm from "../../../EditTemplate/EcoForm";
import EcoFormPreview from "../../../EditTemplate/EcoFormPreview";

const templates = [
  {
    id: 1,
    name: "Template Form 1",
    img: template1,
  },
];

const templateSections = [
  { id: 1, name: "All" },
  { id: 2, name: "Up-Skilling" },
  { id: 3, name: "Art & Designing" },
  { id: 4, name: "Fashion" },
  { id: 5, name: "Religion" },
  { id: 6, name: "Health" },
  { id: 7, name: "Fitness" },
  { id: 8, name: "NGOs" },
  { id: 9, name: "Training" },
  { id: 10, name: "Training-1" },
  { id: 11, name: "Training-2" },
];

const CreateForm = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [answers, setAnswers] = useState({});
  const [activeSection, setActiveSection] = useState(templateSections[0].id);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [content, setContent] = useState({
    logo: "Your Logo",
    header: "Welcome to Our Website",
    mainText:
      "This is the main content of your landing page. You can edit this text.",
    footer: "© 2024 Your Company. All rights reserved.",
  });
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep(2);
  };

  const handleContentChange = (field, value) => {
    setContent({ ...content, [field]: value });
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handlePrevious = () => {
    navigate("/creator/dashboard/Edit-Template");
  };
  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Selected Template:", selectedTemplate);
    console.log("Answers:", answers);
    navigate("/creator/dashboard/Courses");
  };

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="p-0 mb-10">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <h2>Select Form Template</h2>
          <p>Select and Edit your ecosystem form template</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
        </div>

        <div>
          {step === 1 && (
            <div>
              <h3>Form Template Sections</h3>
              <div className="d-flex align-items-center position-relative">
                <FaChevronLeft
                  className={`scroll-arrow ${!canScrollLeft ? "disabled" : ""}`}
                  onClick={() => scroll(-100)}
                  disabled={!canScrollLeft}
                />
                <div
                  className="template-sections flex-nowrap overflow-auto mx-8"
                  ref={scrollRef}
                  onScroll={checkScroll}
                  style={{ display: "flex", whiteSpace: "nowrap" }}
                >
                  {templateSections.map((section) => (
                    <div
                      key={section.id}
                      className={`template-section ${
                        activeSection === section.id
                          ? "bg-primary text-white"
                          : "bg-body-secondary"
                      }`}
                      onClick={() => setActiveSection(section.id)}
                      style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                      }}
                    >
                      {section.name}
                    </div>
                  ))}
                </div>
                <FaChevronRight
                  className={`scroll-arrow ${
                    !canScrollRight ? "disabled" : ""
                  }`}
                  onClick={() => scroll(100)}
                  disabled={!canScrollRight}
                />
              </div>
              <div className="d-sm-flex justify-content-between align-items-center mt-8">
                <h3 className="">Select a form Template</h3>
                <div className="d-flex ">
                  <Link to="">
                    <Button variant="primary">
                      <i className="fe fe-edit me-2"></i>
                      Create New Form
                    </Button>
                  </Link>
                </div>
              </div>
              <Row className={showModal ? "blurred" : ""}>
                {templates.map((template) => (
                  <Col key={template.id} md={4} className="mt-5 md-mt-0">
                    <Card className="template-card">
                      <Card.Img
                        variant="top"
                        src={template.img}
                        style={{
                          height: "400px",
                        }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title>{template.name}</Card.Title>
                        <div className="overlay">
                          <Button
                            variant="primary"
                            className="select-preview"
                            onClick={handleShow}
                          >
                            Preview Form
                          </Button>
                          <Button
                            variant="primary"
                            className="select-button"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            Select Form
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h3>Edit Form Content</h3>
              <EcoForm />

              <div className="d-flex justify-content-between mt-3 w-75">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button variant="primary" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h3>Preview Form</h3>
              <EcoFormPreview />
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
      <Modal
        className="custom-modal"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Preview Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EcoForm />
          {/* <img src={template1} alt="template" />
          <img src={template2} alt="template2" className="mt-5" />
          <img src={template3} alt="template3" className="mt-5" /> */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateForm;
