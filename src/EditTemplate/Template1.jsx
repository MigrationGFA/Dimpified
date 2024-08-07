import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContent, updateStyles } from "../features/Template/Template1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
import Footer from "./Footer";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import "./Template1.css";

const Template1 = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.template1);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );
  const faqStyles = useSelector((state) => state.template1.faqStyles);

  const footerInfo = "© 2024 Company Name. All rights reserved.";
  const socialLinks = [
    { name: "Facebook", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "Twitter", icon: "https://via.placeholder.com/20", href: "#" },
    { name: "LinkedIn", icon: "https://via.placeholder.com/20", href: "#" },
  ];

  const handleContentChange = (section, field, value, index = null) => {
    dispatch(updateContent({ section, field, value, index }));
  };

  const handleBackgroundColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({ section: sectionId, styles: { backgroundColor: color } })
    );
  };

  const handleTextColorChange = (sectionId, color) => {
    dispatch(updateStyles({ section: sectionId, styles: { color: color } }));
  };

  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = content.navbar.links.map((link, i) =>
      i === index ? { ...link, text: value } : link
    );
    dispatch(
      updateContent({ section: "navbar", field: "links", value: updatedLinks })
    );
  };

  const handleLogoChange = (value) => {
    handleContentChange("navbar", "logo", value);
  };

  const handleButtonTextChange = (value) => {
    handleContentChange("navbar", "buttonText", value);
  };

  const renderSection = (id, children) => {
    return (
      <section
        id={id}
        className="py-5"
        style={{
          ...content[id].styles,
          border: activeSection === id ? "2px dotted black" : "none",
        }}
        onClick={() => dispatch(setActiveSection(id))}
      >
        <Container>{children}</Container>
      </section>
    );
  };

  return (
    <div
      className=""
      style={{
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <Container fluid className="mt-5">
        <Row>
          <Col md={9}>
            {renderSection(
              "navbar",
              <CustomNavbar
                logo={content.navbar.logo}
                links={content.navbar.links}
                buttonText={content.navbar.buttonText}
                onLogoChange={handleLogoChange}
                onLinkChange={handleLinkChange}
                onButtonTextChange={handleButtonTextChange}
              />
            )}
            {renderSection(
              "landingPage",
              <>
                <EditableBlock
                  initialContent={content.landingPage.heading}
                  onContentChange={(value) =>
                    handleContentChange("landingPage", "heading", value)
                  }
                />
                <EditableBlock
                  initialContent={content.landingPage.subheading}
                  onContentChange={(value) =>
                    handleContentChange("landingPage", "subheading", value)
                  }
                />
                <Button variant="primary">
                  {content.landingPage.buttonText}
                </Button>
              </>
            )}
            {renderSection(
              "aboutUs",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.aboutUs.heading}
                    onContentChange={(value) =>
                      handleContentChange("aboutUs", "heading", value)
                    }
                  />
                </h2>
                <EditableBlock
                  initialContent={content.aboutUs.text}
                  onContentChange={(value) =>
                    handleContentChange("aboutUs", "text", value)
                  }
                />
              </>
            )}
            {renderSection(
              "whoWeAre",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.whoWeAre.heading}
                    onContentChange={(value) =>
                      handleContentChange("whoWeAre", "heading", value)
                    }
                  />
                </h2>
                <EditableBlock
                  initialContent={content.whoWeAre.text}
                  onContentChange={(value) =>
                    handleContentChange("whoWeAre", "text", value)
                  }
                />
              </>
            )}
            {renderSection(
              "contactUs",
              <>
                <h2>
                  <EditableBlock
                    initialContent={content.contactUs.heading}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "heading", value)
                    }
                  />
                </h2>
                <p>
                  Address:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.address}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "address", value)
                    }
                  />
                </p>
                <p>
                  Phone:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.phone}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "phone", value)
                    }
                  />
                </p>
                <p>
                  Email:{" "}
                  <EditableBlock
                    initialContent={content.contactUs.email}
                    onContentChange={(value) =>
                      handleContentChange("contactUs", "email", value)
                    }
                  />
                </p>
              </>
            )}
            {renderSection(
              "faq",
              <div style={faqStyles}>
                <h2>
                  <EditableBlock initialContent={"FAQ"} />
                </h2>
                {content.faq.map((item, index) => (
                  <div key={index}>
                    <h5>
                      <EditableBlock
                        initialContent={item.question}
                        onContentChange={(value) =>
                          handleContentChange("faq", "question", value, index)
                        }
                      />
                    </h5>
                    <EditableBlock
                      initialContent={item.answer}
                      onContentChange={(value) =>
                        handleContentChange("faq", "answer", value, index)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
            <Footer companyInfo={footerInfo} socialLinks={socialLinks} />
          </Col>
          <Col md={3}>
            {activeSection && (
              <SideEditor
                sectionId={activeSection}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onFontChange={handleFontChange}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Template1;

// for navbar
export const CustomNavbar = ({
  logo,
  links,
  buttonText,
  onLogoChange,
  onLinkChange,
  onButtonTextChange,
}) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <EditableImage initialImage={logo} onImageChange={onLogoChange} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              <EditableBlock
                initialContent={link.text}
                onContentChange={(value) => onLinkChange(index, value)}
              />
            </Nav.Link>
          ))}
        </Nav>
        <Button variant="primary">
          <EditableBlock
            initialContent={buttonText}
            onContentChange={onButtonTextChange}
          />
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// editable image
export const EditableImage = ({ initialImage, onImageChange }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageChange(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
      <img src={initialImage} alt="logo" width="50" />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};
