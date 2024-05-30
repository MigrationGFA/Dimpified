import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Button, Card, Col, Form } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EcoHeader from "./ecoHeader";

const templateSections = [
  { id: 1, name: "Live Section" },
  { id: 2, name: "Videos" },
  { id: 3, name: "Analytics" },
  { id: 4, name: "Automation" },
  { id: 5, name: "Growth" },
  { id: 6, name: "Customer Service" },
  { id: 7, name: "Social Media" },
  { id: 8, name: "E-commerce" },
  { id: 9, name: "Security" },
  { id: 10, name: "Communication" },
  { id: 11, name: "Storage" },
];

// Integration companies data
const integrationCompanies = {
  "Live Section": [
    { id: 1, name: "Twilio" },
    { id: 2, name: "Zoom" },
    { id: 3, name: "StreamYard" },
    { id: 4, name: "OBS Studio" },
  ],
  Videos: [
    { id: 1, name: "YouTube API" },
    { id: 2, name: "Vimeo" },
    { id: 3, name: "Brightcove" },
    { id: 4, name: "Wistia" },
  ],
  Analytics: [
    { id: 1, name: "Google Analytics" },
    { id: 2, name: "Mixpanel" },
    { id: 3, name: "Amplitude" },
    { id: 4, name: "Segment" },
  ],
  Automation: [
    { id: 1, name: "Zapier" },
    { id: 2, name: "Integromat" },
    { id: 3, name: "IFTTT" },
    { id: 4, name: "Microsoft Power Automate" },
  ],
  Growth: [
    { id: 1, name: "Mailchimp" },
    { id: 2, name: "HubSpot" },
    { id: 3, name: "Salesforce" },
    { id: 4, name: "Intercom" },
  ],
  "Customer Service": [
    { id: 1, name: "Zendesk" },
    { id: 2, name: "Freshdesk" },
    { id: 3, name: "Help Scout" },
    { id: 4, name: "LiveChat" },
  ],
  "Social Media": [
    { id: 1, name: "Facebook" },
    { id: 2, name: "Twitter" },
    { id: 3, name: "Instagram" },
    { id: 4, name: "LinkedIn" },
  ],
  "E-commerce": [
    { id: 1, name: "Shopify" },
    { id: 2, name: "WooCommerce" },
    { id: 3, name: "Magento" },
    { id: 4, name: "BigCommerce" },
  ],
  Security: [
    { id: 1, name: "Auth0" },
    { id: 2, name: "Okta" },
    { id: 3, name: "OneLogin" },
    { id: 4, name: "Ping Identity" },
  ],
  Communication: [
    { id: 1, name: "Slack" },
    { id: 2, name: "Microsoft Teams" },
    { id: 3, name: "Zoom" },
    { id: 4, name: "Google Meet" },
  ],
  Storage: [
    { id: 1, name: "Dropbox" },
    { id: 2, name: "Google Drive" },
    { id: 3, name: "OneDrive" },
    { id: 4, name: "Box" },
  ],
};

const Integration = () => {
  const [activeSection, setActiveSection] = useState(templateSections[0].name);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const navigate = useNavigate();

  const handleTemplateSectionSelect = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleCheckboxChange = (companyId) => {
    setSelectedCompanies((prevSelected) => {
      if (prevSelected.includes(companyId)) {
        return prevSelected.filter((id) => id !== companyId);
      } else {
        return [...prevSelected, companyId];
      }
    });
  };

  const isContinueDisabled = selectedCompanies.length === 0;
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

      <Container className="mt-5">
        <div className="d-flex flex-column align-items-center">
          <h2>Integrations Section</h2>
          <p>Select your preferred integrations</p>
        </div>

        <div>
          <h3> Integration Sections</h3>
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
                    activeSection === section.name
                      ? "bg-primary text-white"
                      : "bg-body-secondary"
                  }`}
                  onClick={() => handleTemplateSectionSelect(section.name)}
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
              className={`scroll-arrow ${!canScrollRight ? "disabled" : ""}`}
              onClick={() => scroll(100)}
              disabled={!canScrollRight}
            />
          </div>

          <div className="mt-5">
            <h3>Integration Companies</h3>
            <Row xs={2} md={4} lg={5} className="g-4">
              {integrationCompanies[activeSection].map((company) => (
                <Col key={company.id}>
                  <Card>
                    <Card.Body>
                      <Form.Check
                        type="checkbox"
                        label={company.name}
                        onChange={() => handleCheckboxChange(company.id)}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() => navigate("/creator/dashboard/Payment")}
            >
              Skip
            </Button>
            <Button
              variant="primary"
              onClick={() => navigate("/creator/dashboard/Payment")}
              disabled={isContinueDisabled}
            >
              Continue
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Integration;
