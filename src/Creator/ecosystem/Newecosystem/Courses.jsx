import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
  Card,
  Form,
} from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Draggable from "react-draggable";
import ModalVideo from "react-modal-video";
import PlayBtn from "../../../assets/play-btn.svg";
import EcoHeader from "./ecoHeader";
import AddNewCourse from "../AddNewCourse";
import "./Course.css";
import PostService from "./PostService";

// Example templates and dummy data
const templates = [
  {
    id: 1,
    name: "Why Choose GetFundedAfrica",
    img: "https://via.placeholder.com/150",
    description: "We all know Nigeria has been hard....",
    type: "video",
  },
  {
    id: 2,
    name: "Why Choose GetFundedAfrica",
    img: "https://via.placeholder.com/150",
    description: "We all know Nigeria has been hard....",
    type: "video",
  },
  {
    id: 3,
    name: "Why Choose GetFundedAfrica",
    img: "https://via.placeholder.com/150",
    description: "We all know Nigeria has been hard....",
    type: "video",
  },
];

const dummyAudioCourses = [
  {
    id: 4,
    name: "Audio Course 1",
    description: "Description for Audio Course 1",
    type: "audio",
  },
  {
    id: 5,
    name: "Audio Course 2",
    description: "Description for Audio Course 2",
    type: "audio",
  },
];

const dummyDocumentCourses = [
  {
    id: 6,
    name: "Document Course 1",
    description: "Description for Document Course 1",
    type: "document",
  },
  {
    id: 7,
    name: "Document Course 2",
    description: "Description for Document Course 2",
    type: "document",
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
const Courses = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [activeSection, setActiveSection] = useState(1);
  const [answers, setAnswers] = useState({});
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [showPostService, setShowPostService] = useState(false);
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
    navigate("/creator/dashboard/Integrations");
  };

  const handleContinue = () => {
    if (selectedTemplates.length > 0) {
      setStep(3);
    }
  };

  const handlePrevious = () => {
    navigate("/creator/dashboard/Create-Form");
  };

  const handleService = () => {
    setStep(2);
    setShowPostService(true);
    // navigate("/creator/dashboard/Post-Service");
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

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log("Selected Templates:", selectedTemplates);
    console.log("Answers:", answers);
    navigate("/creator/dashboard/Integrations");
  };

  const renderCourses = (courses) => {
    return (
      <div>
        {courses.map((course) => (
          <Draggable key={course.id}>
            <div className="mb-3">
              <Card className="templates-card">
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Draggable>
        ))}
      </div>
    );
  };

  const videoCourses = templates.filter(
    (template) =>
      selectedTemplates.includes(template.id) && template.type === "video"
  );
  const audioCourses = dummyAudioCourses.filter(
    (course) => selectedTemplates.includes(course.id) && course.type === "audio"
  );
  const documentCourses = dummyDocumentCourses.filter(
    (course) =>
      selectedTemplates.includes(course.id) && course.type === "document"
  );

  return (
    <Container fluid className="p-0">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <h2>Product Section</h2>
          <p>Select and create your products</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
        </div>

        <div>
          {step === 1 && (
            <div>
              <h3>Product Sections</h3>
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
                <div>
               
                <Button
                    variant="primary"
                    className="mx-2"
                    onClick={handleService}
                  >
                    Upload Service
                  </Button>
                
                <Link to="">
                  <Button
                    variant="primary"
                    onClick=""
                    className="mx-2"
                  >
                    Upload Product
                  </Button>
                </Link>
                <Link to="">
                  <Button
                    variant="primary"
                    onClick={handleCreateNewCourse}
                    className="mx-2"
                  >
                    Upload Course
                  </Button>
                </Link>
                </div>
                
              </div>

              <Row className="mt-5">
                <h4>Video Courses</h4>
                {templates.map((template) => (
                  <Col key={template.id} md={4} className="mt-1 md-mt-0">
                    <Card className="templates-card position-relative">
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
              <h3>Select from our Existing Product</h3>
                {/* Dummy audio courses, you can add similar code for rendering */}
              </Row>

              <Row className="mt-5">
              <h3>Select from our Existing Services</h3>
                {/* Dummy document courses, you can add similar code for rendering */}
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
                  <Button
                    variant="primary"
                    disabled={selectedTemplates.length === 0}
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}
          {step === 2 && showPostService && (
            
            <div>
              <h3>Create Your Service</h3>
              <PostService />
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
              <h3>Preview Course</h3>

              <h4 className="mt-4">Video Courses</h4>
              <p className="mt-4">
                Drag the cards to rearrange your course as you like
              </p>
              {renderCourses(videoCourses)}

              <h4 className="mt-4">Audio Courses</h4>
              {renderCourses(audioCourses)}

              <h4 className="mt-4">Document Courses</h4>
              {renderCourses(documentCourses)}

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

