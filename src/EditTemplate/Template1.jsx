// Template1.js
import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Template1.css";

const Template1 = () => {
  const logo = "https://via.placeholder.com/50";
  const links = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "Who We Are", href: "#who" },
    { text: "Contact Us", href: "#contact" },
    { text: "FAQ", href: "#faq" },
  ];
  const footerInfo = "© 2024 Company Name. All rights reserved.";
  const socialLinks = [
    { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
  ];

  const initialContent = {
    landingPage: {
      heading: "Welcome to Our Company",
      subheading: "We provide the best solutions for your business.",
      buttonText: "Get Started",
    },
    aboutUs: {
      heading: "About Us",
      text: "We are a leading company in our industry, committed to providing top-notch services to our clients.",
    },
    whoWeAre: {
      heading: "Who We Are",
      text: "Our team consists of experts with extensive experience and a passion for excellence.",
    },
    contactUs: {
      heading: "Contact Us",
      address: "123 Business St, Business City, BC 12345",
      phone: "(123) 456-7890",
      email: "info@company.com",
    },
    faq: [
      {
        question: "What services do you offer?",
        answer: "We offer a variety of services tailored to your needs.",
      },
      {
        question: "How can we contact you?",
        answer: "You can contact us via phone or email.",
      },
    ],
  };

  const [styles, setStyles] = useState({
    home: { backgroundColor: "#ffffff", color: "#000000" },
    about: { backgroundColor: "#ffffff", color: "#000000" },
    who: { backgroundColor: "#ffffff", color: "#000000" },
    contact: { backgroundColor: "#ffffff", color: "#000000" },
    faq: { backgroundColor: "#ffffff", color: "#000000" },
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleBackgroundColorChange = (sectionId, color) => {
    setStyles({
      ...styles,
      [sectionId]: { ...styles[sectionId], backgroundColor: color },
    });
  };

  const handleTextColorChange = (sectionId, color) => {
    setStyles({
      ...styles,
      [sectionId]: { ...styles[sectionId], color: color },
    });
  };

  const renderSection = (id, content, children) => (
    <section
      id={id}
      className="py-5"
      style={styles[id]}
      onClick={() => setActiveSection(id)}
    >
      <Container>{children}</Container>
    </section>
  );

  return (
    <div className="template-container">
      <CustomNavbar logo={logo} links={links} buttonText="Get Started" />
      <Container fluid className="mt-5">
        <Row>
          <Col md={10}>
            {renderSection(
              "home",
              initialContent.landingPage,
              <>
                <EditableBlock
                  initialContent={initialContent.landingPage.heading}
                />
                <EditableBlock
                  initialContent={initialContent.landingPage.subheading}
                />
                <Button variant="primary">
                  {initialContent.landingPage.buttonText}
                </Button>
              </>
            )}

            {renderSection(
              "about",
              initialContent.aboutUs,
              <>
                <h2>
                  <EditableBlock
                    initialContent={initialContent.aboutUs.heading}
                  />
                </h2>
                <EditableBlock initialContent={initialContent.aboutUs.text} />
              </>
            )}

            {renderSection(
              "who",
              initialContent.whoWeAre,
              <>
                <h2>
                  <EditableBlock
                    initialContent={initialContent.whoWeAre.heading}
                  />
                </h2>
                <EditableBlock initialContent={initialContent.whoWeAre.text} />
              </>
            )}

            {renderSection(
              "contact",
              initialContent.contactUs,
              <>
                <h2>
                  <EditableBlock
                    initialContent={initialContent.contactUs.heading}
                  />
                </h2>
                <p>
                  Address:{" "}
                  <EditableBlock
                    initialContent={initialContent.contactUs.address}
                  />
                </p>
                <p>
                  Phone:{" "}
                  <EditableBlock
                    initialContent={initialContent.contactUs.phone}
                  />
                </p>
                <p>
                  Email:{" "}
                  <EditableBlock
                    initialContent={initialContent.contactUs.email}
                  />
                </p>
              </>
            )}

            {renderSection(
              "faq",
              initialContent.faq,
              <>
                <h2>Frequently Asked Questions</h2>
                {initialContent.faq.map((item, index) => (
                  <div key={index}>
                    <h5>
                      <EditableBlock initialContent={item.question} />
                    </h5>
                    <EditableBlock initialContent={item.answer} />
                  </div>
                ))}
              </>
            )}
          </Col>
          <Col md={2}>
            {activeSection && (
              <SideEditor
                sectionId={activeSection}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
    </div>
  );
};

export default Template1;
