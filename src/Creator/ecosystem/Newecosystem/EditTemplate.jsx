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
} from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Steps.css";
import logo from "../../../assets/digital.png";

const templates = [
  { id: 1, name: "Template 1", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Template 2", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Template 3", img: "https://via.placeholder.com/150" },
];

const questions = [
  { id: 1, question: "Do you have experience with online training?" },
  { id: 2, question: "What is the size of your audience?" },
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

const EditTemplate = () => {
  const location = useLocation();
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

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Selected Template:", selectedTemplate);
    console.log("Answers:", answers);
    navigate("/creator/dashboard/Create-Form")
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
                    className={`scroll-arrow ${
                      !canScrollLeft ? "disabled" : ""
                    }`}
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
                <h3 className="mt-8">Select a Template</h3>
                <Row>
                  {templates.map((template) => (
                    <Col key={template.id} md={4} className="mt-5 md-mt-0">
                      <Card className="template-card">
                        <Card.Img variant="top" src={template.img} />
                        <Card.Body className="text-center">
                          <Card.Title>{template.name}</Card.Title>
                          <Button
                            variant="primary"
                            className="select-button"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            Select & Continue
                          </Button>
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
                <Form>
                  <Form.Group>
                    <Form.Label>Logo</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.logo}
                      onChange={(e) =>
                        handleContentChange("logo", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Header</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.header}
                      onChange={(e) =>
                        handleContentChange("header", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Main Text</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={content.mainText}
                      onChange={(e) =>
                        handleContentChange("mainText", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Footer</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.footer}
                      onChange={(e) =>
                        handleContentChange("footer", e.target.value)
                      }
                    />
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-between mt-3">
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
                <h3>Preview Template</h3>
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

export default EditTemplate;
