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
import "./Course.css";
import AddNewCourse from "../AddNewCourse";
import ModalVideo from "react-modal-video";
// import logo from "../../../assets/digital.png";
import PlayBtn from "../../../assets/play-btn.svg";
import EcoHeader from "./ecoHeader";

const templates = [
  { id: 1, name: "Why Choose GetFundedAfrica", img: "https://via.placeholder.com/150", description: "We all know Nigeria has been hard...." },
  { id: 2, name: "Why Choose GetFundedAfrica", img: "https://via.placeholder.com/150", description: "We all know Nigeria has been hard...." },
  { id: 3, name: "Why Choose GetFundedAfrica", img: "https://via.placeholder.com/150", description: "We all know Nigeria has been hard...." },
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

const Courses = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [selectedTemplates, setSelectedTemplates] = useState([]);
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
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("hns6IABNVn4");

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplates((prevSelected) => {
      if (prevSelected.includes(templateId)) {
        return prevSelected.filter((id) => id !== templateId);
      } else {
        return [...prevSelected, templateId];
      }
    });
  };

  const handleCreateNewCourse = () => {
    setStep(2);
  };

  const handleSkipAndContinue = () => {
    setStep(3);
  };

  const handleContinue = () => {
    if (selectedTemplates.length > 0) {
      setStep(3);
    }
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
    navigate("/creator/dashboard/Payment");
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
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <h2>Course Section</h2>
          <p>Select and create your courses</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
        </div>

        <div>
          {step === 1 && (
            <div>
              <h3>Course Sections</h3>
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
              <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
                <h3>Select from our Existing Courses</h3>
                <Link to="">
                  <Button variant="primary" onClick={handleCreateNewCourse}>
                    Create Course
                  </Button>
                </Link>
              </div>

              <Row className="mt-5">
                <h4>Video Courses</h4>
                {templates.map((template) => (
                  <Col key={template.id} md={4} className="mt-1 md-mt-0">
                    <Card className="template-card position-relative">
                      
                      <div className="position-relative">
                      <div className="position-absolute top-0 end-0 m-3">
                        <Form.Check
                          type="checkbox"
                          style={{ transform: "scale(1.5)" }}
                          onChange={() => handleTemplateSelect(template.id)}
                          checked={selectedTemplates.includes(template.id)}
                        />
                      </div>
                        <Card.Img variant="top" src={template.img} />
                        <div className="position-absolute bottom-50 start-50 translate-middle-x">
                          <Link
                            to="#"
                            onClick={() => setOpen(true)}
                            className="popup-youtube fs-4 text-inherit"
                          >
                            <img src={PlayBtn} alt="" className="me-2" />
                            Watch Demo
                          </Link>
                        </div>
                      </div>

                      <Card.Body className="text-center">
                        <Card.Title>{template.name}</Card.Title>
                        <Card.Text>{template.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}

                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                />
              </Row>

              <Row className="mt-5">
                <h4>Audio Courses</h4>  
              </Row>

              <Row className="mt-5">
                <h4>Document Courses</h4>  
              </Row>

              <div className="d-flex justify-content-end mt-4">
                <Button
                  variant="secondary"
                  className="me-2"
                  onClick={handleSkipAndContinue}
                >
                  Skip and Continue
                </Button>
                <Button
                  variant="primary"
                  disabled={selectedTemplates.length === 0}
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h3>Create Your Course</h3>
              <AddNewCourse />

              <Button variant="primary" onClick={() => setStep(3)}>
                Continue
              </Button>
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

export default Courses;
