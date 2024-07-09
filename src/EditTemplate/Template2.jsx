import React, { useState, Fragment, useRef } from "react";

import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateContent,
  updateStyles,
  updateFAQ,
} from "../features/Template/Template1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import useImageEditor from "./userImageEditor";

import "../assets/scss/theme.scss";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Accordion,
  Card,
  Form,
  Image,
  Carousel,
  ListGroup,
} from "react-bootstrap";

const Template2 = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.template1);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );
  const myLogo = useSelector((state) => state.template1.navbar.logo);
  const faqStyles = useSelector((state) => state.template1.faqStyles);
  const handleContentChange = (section, field, value, index = null) => {
    dispatch(updateContent({ section, field, value, index }));
  };

  const handleBackgroundColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { backgroundColor: color },
      })
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
      updateContent({
        section: "navbar",
        field: "links",
        value: updatedLinks,
      })
    );
  };

  const handleLogoChange = (value) => {
    handleContentChange("navbar", "logo", value);
  };

  const handleFooterLogoChange = (value) => {
    handleContentChange("footer", "logo", value);
  };

  const handleButtonTextChange = (value) => {
    handleContentChange("navbar", "buttonText", value);
  };

  const handleImageChange = (section, field, value) => {
    // Dispatch the action to update the image in the Redux store
    dispatch(updateContent({ section, field, value }));
  };
  const handleButtonColorChange = (sectionId, color) => {
    dispatch(
      updateContent({
        section: sectionId,
        field: "buttonColor",
        value: color, // Ensure this captures the correct value
      })
    );
  };

  const handleFaqContentChange = (section, index, field, value) => {
    if (section === "faq") {
      dispatch(updateFAQ({ index, field, value }));
    } else {
      // handle other sections
    }
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
        {children}
      </section>
    );
  };

  return (
    <div
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
              <SiteNavbar
                logo={content.navbar.logo}
                links={content.navbar.links}
                buttonText1={content.navbar.buttonText1}
                buttonText2={content.navbar.buttonText2}
                styles={content.navbar.styles}
                onLogoChange={handleLogoChange}
                onLinkChange={handleLinkChange}
                onButtonTextChange={handleButtonTextChange}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onFontFamilyChange={handleFontChange}
              />
            )}
            {renderSection(
              "hero",
              <Hero
                backgroundImage={content.hero.backgroundImage}
                header={content.hero.title}
                summary={content.hero.summary}
                styles={content.hero.styles}
                buttonText={content.hero.buttonText}
                buttonColor={content.hero.buttonColor}
                buttonColorChange={handleButtonColorChange}
                handleContentChange={handleContentChange}
              />
            )}
            {renderSection(
              "aboutUs",
              <About
                title={content.aboutUs.title}
                header={content.aboutUs.header}
                summary1={content.aboutUs.text1}
                summary2={content.aboutUs.text2}
                styles={content.aboutUs.styles}
                handleContentChange={handleContentChange}
              />
            )}
            {renderSection(
              "Vision",
              <Vision
                image={content.Vision.image}
                header={content.Vision.heading}
                summary1={content.Vision.text1}
                summary2={content.Vision.text2}
                styles={content.Vision.styles}
                buttonText={content.Vision.buttonText1}
                handleContentChange={handleContentChange}
              />
            )}

            {renderSection(
              "Audience",
              <Audience
                header={content.Audience.heading}
                title1={content.Audience.title1}
                summary1={content.Audience.body1}
                image1={content.Audience.image1}
                title2={content.Audience.title2}
                summary2={content.Audience.body2}
                image2={content.Audience.image2}
                title3={content.Audience.title3}
                summary3={content.Audience.body3}
                image3={content.Audience.image3}
                title4={content.Audience.title4}
                summary4={content.Audience.body4}
                image4={content.Audience.image4}
                styles={content.Audience.styles}
                handleContentChange={handleContentChange}
                handleImageChange={handleImageChange}
              />
            )}

            {renderSection(
              "WhyUs",
              <Benefit
                topic={content.WhyUs.topic}
                header={content.WhyUs.header}
                title1={content.WhyUs.title1}
                summary1={content.WhyUs.body1}
                title2={content.WhyUs.title2}
                summary2={content.WhyUs.body2}
                title3={content.WhyUs.title3}
                summary3={content.WhyUs.body3}
                title4={content.WhyUs.title4}
                summary4={content.WhyUs.body4}
                styles={content.WhyUs.styles}
                handleContentChange={handleContentChange}
              />
            )}

            {renderSection(
              "CTA",
              <CTASection
                header={content.CTA.heading}
                text={content.CTA.text1}
                buttonText={content.CTA.buttonText1}
                image1={content.CTA.image}
                styles={content.CTA.styles}
                handleContentChange={handleContentChange}
              />
            )}

            <section className="py-lg-5 py-5 bg-white">
              <Container id="hero" className="py-lg-16 py-6">
                <Row>
                  <Col xl={6} lg={6} xs={12} className="my-4">
                    {renderSection(
                      "faq",
                      <FAQ
                        faqs={content.faq}
                        handleContentChange={handleFaqContentChange}
                        styles={faqStyles}
                      />
                    )}
                  </Col>
                  <Col xl={6} lg={6} xs={12}>
                    {renderSection(
                      "contactUs",
                      <Contact
                        contactInfo={content.contactUs}
                        styles={content.contactUs.styles}
                        handleContentChange={handleContentChange}
                      />
                    )}
                  </Col>
                </Row>
              </Container>
            </section>
            {renderSection(
              "footer",
              <Footer
                onLogoChange={handleFooterLogoChange}
                footerInfo={content.footer}
                styles={content.footer.styles}
                handleContentChange={handleContentChange}
                logo={content.footer.logo}
                handleImageChange={handleImageChange}
              />
            )}
          </Col>
          <Col md={3}>
            {activeSection && (
              <SideEditor
                sectionId={activeSection}
                onBackgroundColorChange={handleBackgroundColorChange}
                onTextColorChange={handleTextColorChange}
                onFontChange={handleFontChange}
                onButtonColorChange={handleButtonColorChange}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Template2;

export const SiteNavbar = ({
  logo,
  links,
  buttonText1,
  buttonText2,
  onLogoChange,
  onLinkChange,
  onButtonTextChange,
  styles,
}) => (
  <Navbar
    expand="lg"
    style={{
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    }}
  >
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
            <Nav.Link
              key={index}
              // href={link.href}
              style={{ color: styles.color }}
            >
              <EditableBlock
                initialContent={link.text}
                onContentChange={(value) => onLinkChange(index, value)}
              />
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex">
          <Button variant="primary" className="me-2">
            <EditableBlock
              initialContent={buttonText1}
              onContentChange={(value) =>
                onButtonTextChange("buttonText1", value)
              }
            />
          </Button>
          <Button variant="primary">
            <EditableBlock
              initialContent={buttonText2}
              onContentChange={(value) =>
                onButtonTextChange("buttonText2", value)
              }
            />
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export const Hero = ({
  backgroundImage,
  onBackgroundChange,
  handleContentChange,
  header,
  summary,
  buttonColor,
  buttonText,
  styles,
}) => {
  const { fileInputRef, handleEditImageClick, handleImageChange } =
    useImageEditor("hero", "backgroundImage");
  return (
    <Container
      id="hero"
      className="hero-section my-0  text-white px-4 py-5 py-lg-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Row className="d-flex align-items-center">
        <Col xxl={{ offset: 1, span: 5 }} xl={6} lg={6} xs={12} className="">
          <h1 className="mb-3">
            <EditableBlock
              initialContent={header}
              onContentChange={(value) =>
                handleContentChange("hero", "title", value)
              }
            />
          </h1>
          <p className="lead mb-4" style={{ color: styles.color }}>
            <EditableBlock
              initialContent={summary}
              onContentChange={(value) =>
                handleContentChange("hero", "summary", value)
              }
            />
          </p>

          <Button variant="primary">
            <EditableBlock
              initialContent={buttonText}
              onContentChange={(value) =>
                handleContentChange("hero", "buttonText", value)
              }
            />
          </Button>
        </Col>
      </Row>
      <Button
        variant="primary"
        size="lg"
        onClick={handleEditImageClick}
        style={{
          width: "300px",
          position: "absolute",
          top: "70px",
          right: "70px",
          zIndex: 1000,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
        }}
      >
        Edit Background Image
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        // onChange={(value) =>
        //   handleImageChange("hero", "backgroundImage", value)
        // }
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </Container>
  );
};

export const About = ({
  title,
  header,
  summary1,
  summary2,
  styles,
  handleContentChange,
}) => (
  <Container
    id="about"
    className="text-center py-8 py-lg-12"
    style={{
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    }}
  >
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12}>
        <h2 className="display-5 fw-bold mb-2">
          <EditableBlock
            initialContent={title}
            onContentChange={(value) =>
              handleContentChange("aboutUs", "title", value)
            }
          />
        </h2>
        <p>
          <EditableBlock
            initialContent={header}
            onContentChange={(value) =>
              handleContentChange("aboutUs", "header", value)
            }
          />
        </p>
        <p className="lead mb-4 mt-5">
          <EditableBlock
            initialContent={summary1}
            onContentChange={(value) =>
              handleContentChange("aboutUs", "summary1", value)
            }
          />
        </p>
        <p className="lead">
          <EditableBlock
            initialContent={summary2}
            onContentChange={(value) =>
              handleContentChange("aboutUs", "summary2", value)
            }
          />
        </p>
      </Col>
    </Row>
  </Container>
);
export const Vision = ({
  header,
  summary1,
  summary2,
  styles,
  buttonText,
  handleContentChange,
  image,
}) => {
  const { fileInputRef, handleEditImageClick, handleImageChange } =
    useImageEditor("Vision", "image");

  return (
    <Container
      id="vision"
      className="py-lg-12 py-6"
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontFamily: styles.fontFamily,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Row className="d-flex align-items-center">
        <Col
          xxl={5}
          xl={6}
          lg={6}
          xs={12}
          className="mt-0 mt-lg-10"
          style={{
            // backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleEditImageClick}
            style={{
              width: "300px",
              position: "absolute",
              top: "70px",
              left: "70px",
              zIndex: 1000,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
            }}
          >
            Edit Image
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            // onChange={(value) => handleImageChange("Vision", "image", value)}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Image src={image} rounded fluid />
          {/* <img src={Image} /> */}
        </Col>
        <Col
          xxl={{ offset: 1, span: 5 }}
          xl={6}
          lg={6}
          xs={12}
          className="mt-5 mt-lg-10"
        >
          <h1 className="display-5 fw-bold mb-3">
            <EditableBlock
              initialContent={header}
              onContentChange={(value) =>
                handleContentChange("Vision", "heading", value)
              }
            />
          </h1>
          <p className="lead mb-4">
            <EditableBlock
              initialContent={summary1}
              onContentChange={(value) =>
                handleContentChange("Vision", "summary1", value)
              }
            />
          </p>
          <p className="lead mb-4">
            <EditableBlock
              initialContent={summary2}
              onContentChange={(value) =>
                handleContentChange("Vision", "summary2", value)
              }
            />
          </p>

          <Button variant="primary" className="d-grid d-md-block">
            <EditableBlock
              initialContent={buttonText}
              onContentChange={(value) =>
                handleContentChange("Vision", "buttonText1", value)
              }
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export const Benefit = ({
  topic,
  header,
  title1,
  summary1,
  title2,
  summary2,
  title3,
  summary3,
  title4,
  summary4,
  handleContentChange,
  handleImageChange,
  styles,
}) => (
  <Container id="benefit" className="py-5 ">
    <Row>
      <Col md={4} className="mb-4">
        <h1 className="display-5 fw-bold mb-3">
          <EditableBlock
            initialContent={topic}
            onContentChange={(value) =>
              handleContentChange("WhyUs", "topic", value)
            }
          />
        </h1>
        <p className="lead mb-4">
          <EditableBlock
            initialContent={header}
            onContentChange={(value) =>
              handleContentChange("WhyUs", "header", value)
            }
          />
        </p>
      </Col>
      <Col md={8} className="mb-4">
        <Row className="gy-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <EditableBlock
                    initialContent={title1}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "title1", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary1}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "body1", value)
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <EditableBlock
                    initialContent={title2}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "title2", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary2}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "body2", value)
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <EditableBlock
                    initialContent={title3}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "title3", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary3}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "body3", value)
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <EditableBlock
                    initialContent={title4}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "title4", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary4}
                    onContentChange={(value) =>
                      handleContentChange("WhyUs", "body4", value)
                    }
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export const Audience = ({
  header,
  title1,
  summary1,
  image1,
  title2,
  summary2,
  image2,
  title3,
  summary3,
  image3,
  title4,
  summary4,
  image4,
  handleContentChange,
  handleImageChange,
}) => {
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);

  const handleEditImageClick = (fileInputRef) => {
    fileInputRef.current.click();
  };

  const onImageChange = (e, section, field) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      handleImageChange(section, field, reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <Container
      id="audience"
      className="d-flex justify-content-center align-items-center my-auto"
      style={{
        minHeight: "600px",
      }}
    >
      <div>
        <h2 className="">
          <EditableBlock
            initialContent={header}
            onContentChange={(value) =>
              handleContentChange("Audience", "heading", value)
            }
          />
        </h2>

        <Row>
          <Col md={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>
                  <EditableBlock
                    initialContent={title1}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "title1", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary1}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "body1", value)
                    }
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEditImageClick(fileInputRef1)}
                >
                  Edit Image
                </Button>
                <input
                  type="file"
                  ref={fileInputRef1}
                  style={{ display: "none" }}
                  onChange={(e) => onImageChange(e, "Audience", "image1")}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>
                  <EditableBlock
                    initialContent={title2}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "title2", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary2}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "body2", value)
                    }
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEditImageClick(fileInputRef2)}
                >
                  Edit Image
                </Button>
                <input
                  type="file"
                  ref={fileInputRef2}
                  style={{ display: "none" }}
                  onChange={(e) => onImageChange(e, "Audience", "image2")}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>
                  <EditableBlock
                    initialContent={title3}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "title3", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary3}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "body3", value)
                    }
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEditImageClick(fileInputRef3)}
                >
                  Edit Image
                </Button>
                <input
                  type="file"
                  ref={fileInputRef3}
                  style={{ display: "none" }}
                  onChange={(e) => onImageChange(e, "Audience", "image3")}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>
                  <EditableBlock
                    initialContent={title4}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "title4", value)
                    }
                  />
                </Card.Title>
                <Card.Text>
                  <EditableBlock
                    initialContent={summary4}
                    onContentChange={(value) =>
                      handleContentChange("Audience", "body4", value)
                    }
                  />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleEditImageClick(fileInputRef4)}
                >
                  Edit Image
                </Button>
                <input
                  type="file"
                  ref={fileInputRef4}
                  style={{ display: "none" }}
                  onChange={(e) => onImageChange(e, "Audience", "image4")}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const FAQ = ({ faqs, handleContentChange }) => (
  <Container id="faq">
    <Row className="justify-content-center">
      <Col lg={12} md={12} sm={12}>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" styles={{}}>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                <EditableBlock
                  initialContent={faq.question}
                  onContentChange={(value) =>
                    handleContentChange("faq", index, "question", value)
                  }
                />
              </Accordion.Header>
              <Accordion.Body>
                <EditableBlock
                  initialContent={faq.answer}
                  onContentChange={(value) =>
                    handleContentChange("faq", index, "answer", value)
                  }
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export const CTASection = ({
  header,
  text,
  buttonText,
  image1,
  styles,
  handleContentChange,
}) => {
  const { fileInputRef, handleEditImageClick, handleImageChange } =
    useImageEditor("CTA", "image");
  return (
    <div
      className="cta-section text-white text-center"
      style={{
        backgroundImage: `url(${image1})`,
        color: styles.color,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        minHeight: "400px",
        position: "relative",
      }}
    >
      <Button
        variant="primary"
        size="lg"
        onClick={handleEditImageClick}
        style={{
          width: "300px",
          position: "absolute",
          top: "40px",
          left: "70px",
          zIndex: 1000,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
        }}
      >
        Edit Background Image
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        // onChange={(value) => handleImageChange("Vision", "image", value)}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <Container style={{ color: styles.color }}>
        <h1 className="mb-3">
          <EditableBlock
            initialContent={header}
            onContentChange={(value) =>
              handleContentChange("Audience", "header", value)
            }
          />
        </h1>
        <p className="mb-4">
          <EditableBlock
            initialContent={text}
            onContentChange={(value) =>
              handleContentChange("Audience", "text", value)
            }
          />
        </p>
        <Button variant="primary" size="md">
          <EditableBlock
            initialContent={buttonText}
            onContentChange={(value) =>
              handleContentChange("CTA", "buttonText1", value)
            }
          />
        </Button>
      </Container>
    </div>
  );
};

export const Contact = ({ contactInfo, styles, handleContentChange }) => (
  <Container id="contact">
    <h2 className="text-center">
      <EditableBlock
        initialContent={contactInfo.heading}
        onContentChange={(value) =>
          handleContentChange("contactUs", "heading", value)
        }
      />
    </h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>
              <EditableBlock
                initialContent={contactInfo.Name}
                onContentChange={(value) =>
                  handleContentChange("contactUs", "Name", value)
                }
              />
            </Form.Label>
            <Form.Control disabled type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>
              <EditableBlock
                initialContent={contactInfo.Email}
                onContentChange={(value) =>
                  handleContentChange("contactUs", "Email", value)
                }
              />
            </Form.Label>
            <Form.Control
              disabled
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>
              <EditableBlock
                initialContent={contactInfo.Message}
                onContentChange={(value) =>
                  handleContentChange("contactUs", "Message", value)
                }
              />
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              disabled
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export const Footer = ({
  footerInfo,
  styles,
  handleContentChange,
  logo,
  onLogoChange,
}) => {
  return (
    <Fragment>
      <footer
        className="pt-lg-10 pt-5 footer"
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.color,
        }}
      >
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              {/* about company  */}
              <div className="mb-4">
                <EditableImage
                  initialImage={logo}
                  onImageChange={onLogoChange}
                />

                <div className="mt-4">
                  <p>
                    <EditableBlock
                      initialContent={footerInfo.header}
                      onContentChange={(value) =>
                        handleContentChange("footer", "header", value)
                      }
                    />
                  </p>
                  {/* social media */}
                  <div className="fs-4 mt-4">
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiLinkedin} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiFacebook} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-twitter text-white me-2">
                      <Icon path={mdiTwitter} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-instagram text-white ">
                      <Icon path={mdiInstagram} size={0.7} />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
              <div className="mb-4 ">
                {/* list */}
                <h3 className="fw-bold mb-3 text-white">
                  <EditableBlock
                    initialContent={footerInfo.title1}
                    onContentChange={(value) =>
                      handleContentChange("footer", "title1", value)
                    }
                  />
                </h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <EditableBlock
                      initialContent={footerInfo.body1name1}
                      onContentChange={(value) =>
                        handleContentChange("footer", "body1name1", value)
                      }
                    />
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <EditableBlock
                      initialContent={footerInfo.body1name2}
                      onContentChange={(value) =>
                        handleContentChange("footer", "body1name2", value)
                      }
                    />
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <EditableBlock
                      initialContent={footerInfo.body1name3}
                      onContentChange={(value) =>
                        handleContentChange("footer", "body1name3", value)
                      }
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                {/* list  */}
                <h3 className="fw-bold mb-3 text-white">
                  <EditableBlock
                    initialContent={footerInfo.title2}
                    onContentChange={(value) =>
                      handleContentChange("footer", "title2", value)
                    }
                  />
                </h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <EditableBlock
                      initialContent={footerInfo.body2name1}
                      onContentChange={(value) =>
                        handleContentChange("footer", "body2name1", value)
                      }
                    />
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <EditableBlock
                      initialContent={footerInfo.body2name2}
                      onContentChange={(value) =>
                        handleContentChange("footer", "body2name2", value)
                      }
                    />
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              {/* contact info */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-white">
                  <EditableBlock
                    initialContent={footerInfo.title3}
                    onContentChange={(value) =>
                      handleContentChange("footer", "title1", value)
                    }
                  />
                </h3>
                <p>
                  {" "}
                  <EditableBlock
                    initialContent={footerInfo.body3name1}
                    onContentChange={(value) =>
                      handleContentChange("footer", "body3name1", value)
                    }
                  />
                </p>
                <p className="mb-1">
                  <EditableBlock
                    initialContent={footerInfo.body3name2}
                    onContentChange={(value) =>
                      handleContentChange("footer", "body3name2", value)
                    }
                  />
                </p>
                <p>
                  <EditableBlock
                    initialContent={footerInfo.body3name3}
                    onContentChange={(value) =>
                      handleContentChange("footer", "body3name3", value)
                    }
                  />
                </p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 text-center g-0 border-top py-2 mt-6">
            {/* Desc  */}
            <Col sm={12}>
              <p>
                <EditableBlock
                  initialContent={footerInfo.footerTage}
                  onContentChange={(value) =>
                    handleContentChange("footer", "footerTage", value)
                  }
                />
              </p>
            </Col>
            {/*  Links  */}
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

// editable logo image
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
      <img src={initialImage} alt="logo" width="100" />
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

// editable logo image
export const EditableBackgroundImage = ({ initialImage, onImageChange }) => {
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
      <img src={initialImage} alt="image" />
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
