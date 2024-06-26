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
// import logo from "../../../assets/digital.png";
import EcoHeader from "./ecoHeader";
import Template1 from "../../../EditTemplate/Template1";
import Template2 from "../../../EditTemplate/Template2";
import TemplateOne from "../../../EditTemplate/TemplateOneV1";
import PreviewPage from "../../../EditTemplate/Preview";
import Templates from "../../../data/Template/LandingPageTemplate";

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

const EditTemplate = () => {
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
  const renderTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return <Template2 />;
      case 2:
        return <Template1 />;
      // Add cases for Template3 and Template4...
      default:
        return <div>Invalid template</div>;
    }
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Selected Template:", selectedTemplate);
    console.log("Answers:", answers);
    navigate("/creator/dashboard/Create-Form");
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
    <Container fluid className="p-0 mb-5">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <h2>Select Template</h2>
          <p>Select and Edit your ecosystem template</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
        </div>

        <div>
          {step === 1 && (
            <div>
              <h3>Template Sections</h3>
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
                <h3 className="">Select a Template</h3>
                <div className="d-flex ">
                  <div className="me-5" onClick={handleShow}>
                    <Link to="">
                      <Button variant="primary">
                        {/* <i className="fe fe-edit me-2"></i> */}
                        Get Premium Template
                      </Button>
                    </Link>
                  </div>

                  <Link to="/creator/dashboard/new-template">
                    <Button variant="primary">
                      <i className="fe fe-edit me-2"></i>
                      Create New Template
                    </Button>
                  </Link>
                </div>
              </div>
              <Row className={showModal ? "blurred" : ""}>
                {Templates.map((template) => (
                  <Col key={template.id} md={4} className="mt-5 md-mt-0">
                    <Card className="template-card">
                      <Card.Img
                        variant="top"
                        src={template.img}
                        style={{
                          height: "250px",
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
                            Preview Template
                          </Button>
                          <Button
                            variant="primary"
                            className="select-button"
                            onClick={() => handleTemplateSelect(template.id)}
                          >
                            Select Template
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              
            </div>
          )}
          {step === 2 && (
            <div>
              <h3>Edit Template Content</h3>
              {/* <Template1 /> */}
              {renderTemplate(selectedTemplate)}
              {/* <TemplateOne /> */}
              <div className="d-flex justify-content-between mt-3 w-75">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Backs
                </Button>
                <Button
                  variant="primary"
                  className="ml-12"
                  onClick={() => setStep(3)}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <PreviewPage />
              <div className="d-flex justify-content-between mt-3">
                <Button variant="secondary" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
              {/* <h3>Preview Template</h3>
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
               */}
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
          <Modal.Title>Preview Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TemplateOne />
          {/* <img src={template1} alt="template" />
          <img src={template2} alt="template2" className="mt-5" />
          <img src={template3} alt="template3" className="mt-5" /> */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EditTemplate;
