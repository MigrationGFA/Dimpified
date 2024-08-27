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
import "../Steps.css";
// import logo from "../../../assets/digital.png";
import EcoHeader from "../Individual/individualHeader";

// template import part
import Template1 from "../../../../EditTemplate/Template1";
import Template2 from "../../../../EditTemplate/Template2";
import Template3 from "../../../../EditTemplate/AllCategory/PersonalCare/BarberTemplate";
import Template4 from "../../../../EditTemplate/AllCategory/PersonalCare/Salon1";
import Template6 from "../../../../EditTemplate/AllCategory/Government/Upskilling1";

// preview template
import BarberPreview1 from "../../../../EditTemplate/PreviewPage/BarberPreview1";
import Preview6 from "../../../../EditTemplate/PreviewPage/Government/UpskillingPreview1";

// others
import Templates from "../../../../data/Template/LandingPageTemplate";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showToast } from "../../../../Components/Showtoast";
import PreviewPageSize from "../PreviewPageSize";
import PreviewTemplateV1 from "../../Preview/Template/TemplateV1";

import { setTemplate } from "../../../../features/Template/MainTemplate";
import LoadingState from "../../../../Components/Loading";

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

  const dispatch = useDispatch();
  const [templateLoading, setTemplateLoading] = useState(false);

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
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );
  const ecosystemDomain = useSelector(
    (state) => state.ecosystem.ecosystemDomain
  );
  const userType = useSelector((state) => state.authentication.user.data.role);

  const navigate = useNavigate();

  const getTemplateDetails = async (templateId) => {
    setTemplateLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/reserved-template/${templateId}`
      );
      dispatch(setTemplate(response.data.template));
      setTemplateLoading(false);
      setStep(2);
    } catch (error) {
      setTemplateLoading(false);
      console.log("this is error", error);
    }
  };

  const handleTemplateSelect = (template) => {
    console.log("this is template id", template);
    getTemplateDetails(template);
    setStep(2);
    setSelectedTemplate(template);

    localStorage.setItem("templateId", template);
  };
  const renderTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return <Template3 />;
      case 2:
        return <Template2 />;
      case 3:
        return <Template1 />;
      case 4:
        return <Template4 />;
      case 6:
        return <Template6 />;
      default:
        return <div>Invalid template</div>;
    }
  };

  const renderPreviewTemplate = (templateId) => {
    switch (templateId) {
      case 1:
        return <BarberPreview1 />;
      case 2:
        return <Template2 />;
      case 3:
        return <Template1 />;
      case 6:
        return <Preview6 />;
      // Add cases for Template3 and Template4...
      default:
        return <div>Invalid template</div>;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Add template details to FormData
    const templateData = {
      creatorId: userId,
      ecosystemDomain: ecosystemDomain,
      templateId: selectedTemplate,
      navbar: content.navbar,
      hero: content.hero,
      aboutUs: content.aboutUs,
      Vision: content.Vision,
      Statistics: content.Statistics,
      Patrners: content.Patrners,
      Events: content.Events,
      Gallery: content.Gallery,
      LargeCta: content.LargeCta,
      Team: content.Team,
      Blog: content.Blog,
      Reviews: content.Reviews,
      contactUs: content.contactUs,
      faq: content.faq,
      faqStyles: content.faqStyles,
      footer: content.footer,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem/create-creator-template`,
        templateData
      );
      setLoading(false);
      navigate("/creator/dashboard/Payment/Individual");

      console.log("Template created successfully", response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
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

  const handleSectionSelect = (id) => {
    setActiveSection(id);
  };

  const filteredTemplates = Templates.filter(
    (template) => template.sectionId === activeSection
  );

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="p-0 mb-5">
      <EcoHeader />

      <Container className="mt-5 ">
        <div className="d-flex flex-column align-items-center">
          <p>Step 3 of 4</p>
          <h2>Select Template</h2>
          <p>Select and Edit your ecosystem template</p>
          <div className="w-50 mb-4" style={{ height: "1px" }}>
            <ProgressBar now={(step / 3) * 100} />
          </div>
          <p>{`Step 3.${step} of 3.3`}</p>
        </div>

        <div>
          {step === 1 && (
            <div>
              <h3>
                A. Template Sections (please select your industry to see the
                available templates)
              </h3>
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
                      onClick={() => handleSectionSelect(section.id)}
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
                <h3 className="">
                  B. Select a Template (select your desired template)
                </h3>
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
                {filteredTemplates.map((template) => (
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
          {step === 2 &&
            (templateLoading ? (
              <LoadingState />
            ) : (
              <div
                style={{
                  width: "full",
                }}
              >
                <div
                  style={{
                    width: "full",
                  }}
                >
                  <h3>Edit Template Content</h3>
                  <h4>Double tap a text field or header to edit it</h4>
                </div>

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
            ))}
          {step === 3 && (
            <div>
              <PreviewPageSize setView={setView} />
              {renderPreviewTemplate(selectedTemplate)}
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
            If you click on review, you’ll be able to check for spelling errors,
            if you click on continue, it will take you to the next page
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
