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
import { useSelector } from "react-redux";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";

import EcoHeader from "./ecoHeader";
import EcoForm from "../../../EditTemplate/EcoForm";
import EcoFormPreview from "../../../EditTemplate/EcoFormPreview";
import PreviewPageSize from "./PreviewPageSize";

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
  const [loading, setLoading] = useState(false);
  const [showSubmitModal, setSubmitShowModal] = useState(false);
  const handleShowModal = () => setSubmitShowModal(true);
  const handleCloseModal = () => setSubmitShowModal(false);

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [answers, setAnswers] = useState({});
  const [activeSection, setActiveSection] = useState(templateSections[0].id);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const navigate = useNavigate();
  const content = useSelector((state) => state.form1);
  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );
  const ecosystemId = useSelector((state) => state.ecosystem.ecosystemId);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setStep(2);
  };

  const handlePrevious = () => {
    navigate("/creator/dashboard/Edit-Template");
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
    // formData.append("templateNumber", localStorage.getItem("templateId"));

    // Convert nested objects to JSON and append to FormData
    formData.append("sidebar", JSON.stringify(content.sidebar));
    formData.append("logo", JSON.stringify(content.logo));
    formData.append("Page1", JSON.stringify(content.Page1));
    formData.append("Page2", JSON.stringify(content.Page2));
    formData.append("Page3", JSON.stringify(content.Page3));

    // Convert and append base64 images directly to FormData
    const imageProperties = {
      "sidebar.image": "sidebarImage.png",
      "logo.image": "logoImage.png",
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
        `${import.meta.env.VITE_API_URL}/ecosystem/create-form`,
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
      showToast("Form creation Failed");
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
    <Container fluid className="p-0 mb-10">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <p>Step 3 of 7</p>
          <h2>Select Form Template</h2>
          <p>Select and Edit your ecosystem form template</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
          <p>{`Step 3.${step} of 3.3`}</p>
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
              <PreviewPageSize />
              <EcoFormPreview />
              <div
                className="d-flex justify-content-between mt-3"
                style={{ marginTop: "200px" }}
              >
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* submit template modal */}
      <Modal show={showSubmitModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please cross check for spelling or any error before submiting
          <br />
          <p className="mt-5">
            <strong>Note:</strong> <br />
            If you click on No, you can still edit the form by clicking on the
            previous button bellow the form
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={loading}
            variant="secondary"
            onClick={handleCloseModal}
          >
            No
          </Button>

          <Button variant="primary" disabled={loading} onClick={handleSubmit}>
            {loading ? "Processing" : "Yes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateForm;
