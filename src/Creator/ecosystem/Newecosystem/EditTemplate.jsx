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
import Template3 from "../../../EditTemplate/Template1";
import PreviewPage from "../../../EditTemplate/Preview";
import Templates from "../../../data/Template/LandingPageTemplate";
import { useSelector } from "react-redux";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";
import PreviewPageSize from "./PreviewPageSize";
import PreviewTemplateV1 from "../Preview/Template/TemplateV1";


const templateSections = [
  { id: 1, name: "Professional Services" },
  { id: 2, name: "Creative Services" },
  { id: 3, name: "Trade Services" },
  { id: 4, name: "Personal Care Services" },
  { id: 5, name: "Educational Services" },
  { id: 6, name: "Event Services" },
  { id: 7, name: "Technology Services" },
  { id: 8, name: "Government" },
  { id: 9, name: "Corporations" },
  { id: 10, name: "Foundation/NGO's" },
  { id: 11, name: "Religious Bodies" },
 
];

const EditTemplate = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState("desktop");

  // submit modal
  const [showSubmitModal, setSubmitShowModal] = useState(false);
  const handleShowModal = () => setSubmitShowModal(true);
  const handleCloseModal = () => setSubmitShowModal(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [answers, setAnswers] = useState({});
  const [activeSection, setActiveSection] = useState(templateSections[0].id);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const content = useSelector((state) => state.template1);
  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );
  const ecosystemId = useSelector((state) => state.ecosystem.ecosystemId);

  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep(2);
    localStorage.setItem("templateId", template);
  };
  const renderTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return <Template2 />;
      case 2:
        return <Template2 />;
      case 3:
        return <Template1 />;
       
      // Add cases for Template3 and Template4...
      default:
        return <div>Invalid template</div>;
    }
  };

  // to convert to file type
  const convertBase64ToFile = (base64String, filename) => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();

    // Add template details to FormData
    formData.append("creatorId", userId);
    formData.append("ecosystemId", ecosystemId);
    formData.append("templateNumber", localStorage.getItem("templateId"));

    // Convert nested objects to JSON and append to FormData
    formData.append("navbar", JSON.stringify(content.navbar));
    formData.append("hero", JSON.stringify(content.hero));
    formData.append("aboutUs", JSON.stringify(content.aboutUs));
    formData.append("vision", JSON.stringify(content.Vision));
    formData.append("audience", JSON.stringify(content.Audience));
    formData.append("cta", JSON.stringify(content.CTA));
    formData.append("whyUs", JSON.stringify(content.WhyUs));
    formData.append("contactUs", JSON.stringify(content.contactUs));
    formData.append("faq", JSON.stringify(content.faq));
    formData.append("footer", JSON.stringify(content.footer));

    // Convert and append base64 images directly to FormData
    const imageProperties = {
      "navbar.logo": "navbarLogo.png",
      "hero.backgroundImage": "heroBackgroundImage.png",
      "Vision.image": "visionImage.png",
      "Audience.image1": "audienceImage1.png",
      "Audience.image2": "audienceImage2.png",
      "Audience.image3": "audienceImage3.png",
      "Audience.image4": "audienceImage4.png",
      "CTA.image": "ctaImage.png",
      "footer.logo": "footerLogo.png",
    };
    for (const [key, filename] of Object.entries(imageProperties)) {
      const keys = key.split(".");
      let imageProp = content;
      try {
        for (const k of keys) {
          imageProp = imageProp[k];
          if (imageProp === undefined) break; // Exit loop if property is undefined
        }
        if (
          typeof imageProp === "string" &&
          imageProp.startsWith("data:image")
        ) {
          const convertedFile = convertBase64ToFile(imageProp, filename);
          formData.append(key, convertedFile);
        }
      } catch (error) {
        console.error(`Error accessing property ${key}:`, error);
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem/create-templates`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      navigate("/creator/dashboard/Create-Form");
      showToast(response.data.message);
      console.log("Template created successfully", response.data);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
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
          <p>Step 2 of 7</p>
          <h2>Select Template</h2>
          <p>Select and Edit your ecosystem template</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
          <p>{`Step 2.${step} of 2.3`}</p>
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
                {/* <div className="d-flex ">
                  <div className="me-5" onClick={handleShow}>
                    <Link to="">
                      <Button variant="primary">
                        <i className="fe fe-edit me-2"></i>
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
                </div> */}
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
                          {/* <Button
                            variant="primary"
                            className="select-preview"
                            onClick={handleShow}
                          >
                            Preview Template
                          </Button> */}
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

              {renderTemplate(selectedTemplate)}
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
              <PreviewPageSize setView={setView} />
              <PreviewPage view={view} />
              <div className="d-flex justify-content-between mt-3">
                <Button variant="secondary" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button variant="primary" onClick={handleShowModal}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
      {/* select template modal */}
      <Modal
        className="custom-modal"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Preview Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PreviewTemplateV1 />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* submit template modal */}
      <Modal show={showSubmitModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Kindly check for errors including spelling errors before continuing.  
          <br />
          <p className="mt-5">
            <strong>Note:</strong> <br />
            If you click on review, you’ll be able to check for spelling errors, if you click on continue, it will take you to the next page
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={loading}
            variant="secondary"
            onClick={handleCloseModal}
          >
            Review
          </Button>

          <Button variant="primary" disabled={loading} onClick={handleSubmit}>
            {loading ? "Processing" : "Continue"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EditTemplate;
