import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Navbar as BootstrapNavbar,
  Nav,
  Carousel,
  ButtonGroup,
  Figure,
} from "react-bootstrap";

import {
  ArrowRight,
  PlayCircle,
  Mouse,
  StarFill,
  Person,
  Envelope,
  ChatSquareDots,
  Calendar2Check,
} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  updateContent,
  updateStyles,
  updateNavbarFromEcosystem,
} from "../../../features/Template/MainTemplate";
import { setActiveSection } from "../../../features/Template/activeTemplateSection";
import EditableBlock from "../../EditableBlock";
import SideEditor from "../../SideEditor";
import useImageEditor from "../../userImageEditor";

const BarberTemplate2 = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const ecosystemDetails = useSelector((state) => state.ecosystem);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

  const services = useSelector((state) => state.service.services);

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

  const headerStyle = {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "2rem" /* Increased font size for the header */,
  };
  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  const MAX_MESSAGE_LENGTH = 44;

  const truncateMessage = (messages) => {
    if (messages.length > MAX_MESSAGE_LENGTH) {
      return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
    }
    return messages;
  };

  const contents = [
    {
      image: content.Team.image1,
      header: content.Team.header1,
      summary: content.Team.summary1,
    },
    {
      image: content.Team.image2,
      header: content.Team.header2,
      summary: content.Team.summary2,
    },
    {
      image: content.Team.image3,
      header: content.Team.header3,
      summary: content.Team.summary3,
    },
    {
      image: content.Team.image4,
      header: content.Team.header4,
      summary: content.Team.summary4,
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const testimonials = [
    {
      title: content.Reviews.title1,
      text: content.Reviews.summary1,
      client: content.Reviews.header1,
      img: content.Reviews.image1,
    },
    {
      title: content.Reviews.title2,
      text: content.Reviews.summary2,
      client: content.Reviews.header2,
      img: content.Reviews.image2,
    },
    {
      title: content.Reviews.title3,
      text: content.Reviews.summary3,
      client: content.Reviews.header3,
      img: content.Reviews.image3,
    },
  ];

  const counters = [
    {
      value: content.Statistics.section1header,
      label: content.Statistics.section1paragraphy,
    },
    {
      value: content.Statistics.section2header,
      label: content.Statistics.section2paragraphy,
    },
    {
      value: content.Statistics.section3header,
      label: content.Statistics.section3paragraphy,
    },
    {
      value: content.Statistics.section4header,
      label: content.Statistics.section4paragraphy,
    },
  ];

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

  const pricingStyle = {
    borderRadius: "4px",
    padding: "15px 35px",
    marginBottom: "20px",
    border: "1px solid #fce38a", // Matches light-yellow border
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.6s ease-out", // Animation for hover or other effects
  };

  const titleStyle = {
    fontSize: "19px",
    fontWeight: "700",
    color: "#333", // Matches text-dark-gray
    letterSpacing: "-0.5px",
  };

  const priceStyle = {
    fontSize: "19px",
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
  };

  const descriptionStyle = {
    marginTop: "10px",
    fontSize: "14px",
    color: "#777", // Description text style
  };

  const highlightStyle = {
    backgroundColor: "#fce38a",
    padding: "10px 30px",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "13px",
  };

  const {
    fileInputRefs,
    handleEditImageClick,
    handleImageChange,
    loadingImage,
  } = useImageEditor();

  const images = [
    content.Gallery.image1,
    content.Gallery.image2,
    content.Gallery.image3,
    content.Gallery.image4,
    content.Gallery.image5,
    content.Gallery.image6,
    
  ];
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Group images into chunks of 4
  const imageChunks = chunkArray(images, 3);
  return (
    <Fragment>
      <Col md={9}>
        {renderSection(
          "navbar",
          <BootstrapNavbar
            bg="transparent"
            variant=""
            expand="lg"
            className="px-lg-3 py-lg-3"
          >
            <Container>
              <BootstrapNavbar.Brand
                className="fw-bold d-flex align-items-center position-relative"
                href="#home"
              >
                {/* Logo Image */}
                <img
                  src={content.navbar.logo}
                  alt="Logo"
                  style={{ width: "100px" }}
                />

                {/* Edit Logo Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleEditImageClick("navbar", "logo")}
                  style={{
                    width: "250px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  {loadingImage ? (
                    <div
                      className="spinner-border spinner-border-sm text-primary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Edit Logo Image"
                  )}
                </Button>

                {/* Hidden File Input for Image Upload */}
                <input
                  type="file"
                  ref={(ref) => (fileInputRefs.current["navbar-logo"] = ref)}
                  onChange={(e) => handleImageChange(e, "navbar", "logo")}
                  style={{ display: "none" }}
                />
              </BootstrapNavbar.Brand>

              <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
              <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto barber-link">
                  <Nav.Link
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#about"
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#services"
                  >
                    Hair Services
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#gallery"
                  >
                    Gallery
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#barbers"
                  >
                    Barbers
                  </Nav.Link>
                  <Nav.Link
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#testimonials"
                  >
                    Reviews
                  </Nav.Link>
                </Nav>
                <Button
                  href="#appointment"
                  className="btn-large btn-round-edge btn-box-shadow btn-white left-icon section-link"
                >
                  <span>
                    <span className="btn-double-text">
                      <EditableBlock
                        initialContent={content.navbar.buttonText1}
                        onContentChange={(value) =>
                          handleContentChange("navbar", "buttonText1", value)
                        }
                      />
                    </span>
                  </span>
                </Button>
              </BootstrapNavbar.Collapse>
            </Container>
          </BootstrapNavbar>
        )}

        {renderSection(
          "hero",
          <section
            id="home"
            className="barber px-4 full-screen bg-dark-gray position-relative"
            style={{
              backgroundImage: `url(${content.hero.backgroundImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container className="h-100">
              <Row className="align-items-center justify-content-center h-100">
                <Col lg={9} md={12} className="text-center">
                  <span className="fs-16 text-white text-uppercase text-shadow-double-large ls-3px d-block mb-25px sm-mb-15px">
                    <EditableBlock
                      initialContent={content.hero.title1}
                      onContentChange={(value) =>
                        handleContentChange("hero", "title1", value)
                      }
                    />
                  </span>
                  <h1 className="fs-90 md-fs-80 ls-minus-4px alt-font text-white mb-35px md-mb-20px text-shadow-double-large xs-fs-60 xs-ls-minus-2px">
                    <EditableBlock
                      initialContent={content.hero.title2}
                      onContentChange={(value) =>
                        handleContentChange("hero", "title2", value)
                      }
                    />
                  </h1>
                  <Button
                    onClick={() => setModalShow(true)}
                    className="btn-extra-large btn-round-edge btn-box-shadow btn-switch-text btn-white left-icon section-link"
                  >
                    <span>
                      <span
                        className="btn-double-text"
                        data-text="Online appointment"
                      >
                        <EditableBlock
                          initialContent={content.hero.buttonText1}
                          onContentChange={(value) =>
                            handleContentChange("hero", "buttonText1", value)
                          }
                        />
                      </span>
                      {""}
                      <Calendar2Check />
                    </span>
                  </Button>
                </Col>
                <div className="text-center position-absolute left-0px bottom-50px md-bottom-30px w-100 animation-float">
                  <a href="#about" className="d-block text-white section-link">
                    <Mouse />
                  </a>
                </div>
              </Row>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleEditImageClick("hero", "backgroundImage1")}
                style={{
                  width: "250px",
                  position: "absolute",
                  top: "600px",
                  left: "120px",
                  zIndex: 1000,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  border: "none",
                }}
              >
                {loadingImage ? (
                  <div
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Edit Background Image"
                )}
              </Button>
              <input
                type="file"
                ref={(ref) =>
                  (fileInputRefs.current["hero-backgroundImage1"] = ref)
                }
                onChange={(e) =>
                  handleImageChange(e, "hero", "backgroundImage1")
                }
                style={{ display: "none" }}
              />
            </Container>
          </section>
        )}

        {renderSection(
          "aboutUs",
          <section
            id="about"
            className="barber px-4 bg-very-light-yellow position-relative pb-8"
          >
            <Container>
              <Row className="align-items-center mb-50px sm-mb-40px">
                <Col
                  xl={5}
                  lg={6}
                  className="align-self-end mt-15 xl-mt-18 md-mt-22 xs-mt-30"
                >
                  <h2 className="fs-60 alt-font  fw-400 ls-minus-2px text-white-gray mb-15px shadow-none">
                    <EditableBlock
                      initialContent={content.aboutUs.title1}
                      onContentChange={(value) =>
                        handleContentChange("aboutUs", "title1", value)
                      }
                    />
                  </h2>
                  <p className="w-90 xl-w-100 mb-30px sm-mb-25px">
                    <EditableBlock
                      initialContent={content.aboutUs.text1}
                      onContentChange={(value) =>
                        handleContentChange("aboutUs", "text1", value)
                      }
                    />
                  </p>
                  <div className="d-inline-block">
                    <Button
                      href="#services"
                      className="btn btn-extra-large btn-base-color btn-hover-animation-switch btn-round-edge btn-box-shadow me-4"
                    >
                      <span>
                        <span className="primary-font btn-text text-white">
                          <EditableBlock
                            initialContent={content.aboutUs.buttonText1}
                            onContentChange={(value) =>
                              handleContentChange(
                                "aboutUs",
                                "buttonText1",
                                value
                              )
                            }
                          />
                        </span>
                        <span className="primary-font btn-icon text-white">
                          <i className="fa-solid fa-arrow-right fs-14"></i>
                        </span>
                        <span className="primary-font btn-icon text-white">
                          <i className="fa-solid fa-arrow-right fs-14"></i>
                        </span>
                      </span>
                    </Button>
                  </div>
                </Col>
                <Col
                  lg={6}
                  className="offset-xl-1 position-relative md-mt-45px md-mb-50px"
                >
                  <div
                    className="position-relative w-70 md-w-60"
                    style={{ transition: "transform 0.6s ease-out" }}
                  >
                    {/* First Image Section */}
                    <img
                      src={content.aboutUs.image1}
                      className="border-radius-6px "
                      width={450}
                      height={450}
                      alt="Barber Studio"
                    />

                    {/* Edit Image Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => handleEditImageClick("aboutUs", "image1")}
                      style={{
                        width: "250px",
                        position: "absolute",
                        top: "0", // Align at the top
                        left: "50%", // Center horizontally
                        transform: "translateX(-50%)", // Center horizontally
                        zIndex: 1000,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 1"
                      )}
                    </Button>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["aboutUs-image1"] = ref)
                      }
                      onChange={(e) =>
                        handleImageChange(e, "aboutUs", "image1")
                      }
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className="position-absolute right-15px bottom-minus-60px border-radius-6px lg-w-65 md-w-50 overflow-hidden">
                    {/* Second Image Section */}
                    <img
                      src={content.aboutUs.image2}
                      className="box-shadow-quadruple-large"
                      alt="Barber Studio"
                      width={400}
                      height={350}
                    />

                    {/* Edit Image Button (Top center) */}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => handleEditImageClick("aboutUs", "image2")}
                      style={{
                        width: "250px",
                        position: "absolute",
                        top: "0", // Align at the top
                        left: "50%", // Center horizontally
                        transform: "translateX(-50%)", // Center horizontally
                        zIndex: 1000,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 2"
                      )}
                    </Button>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["aboutUs-image2"] = ref)
                      }
                      onChange={(e) =>
                        handleImageChange(e, "aboutUs", "image2")
                      }
                      style={{ display: "none" }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        <section
          id="services"
          className="barber px-4 bg-medium-yellow position-relative overlap-height pt-4"
        >
          <div
            className="position-absolute left-0 top-minus-50px md-top-minus-30px sm-top-minus-25px xs-top-minus-15px background-position-left-top w-100 h-100px md-h-50px background-size-100 background-no-repeat"
            style={{
              backgroundImage: `url(images/demo-barber-home-bg-up.png)`,
            }}
          ></div>
          <div className="position-absolute left-0 top-minus-130px lg-top-minus-90px d-none d-md-block">
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-03.png"
              alt=""
              style={{ transform: "translateY(50px)" }}
              onLoad={(e) => {
                e.currentTarget.style.transform = "translateY(-50px)";
              }}
            />
          </div>
          <Container className="overlap-gap-section">
            <Row className="mb-3">
              <Col className="text-center">
                <h2 className="alt-font fs-2 ls-minus-2px text-dark-gray shadow-none">
                  Barbershop{" "}
                  <span className="text-highlight">
                    services
                    <span className="bg-base-color h-2px bottom-8px separator-animation"></span>
                  </span>
                </h2>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 g-0 align-items-center mb-5 md-mb-7">
              {services.map((service, index) => (
                <Col key={index} xl={3} lg={3} sm={12}>
                  <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                    <Card.Img
                      variant="top"
                      height={100}
                      src="https://craftohtml.themezaa.com/images/demo-barber-icon-01.svg" // Replace this with your dynamic image link if available
                      className="py-4"
                    />
                    <Card.Body>
                      <Card.Title className="text-dark fs-3">
                        {service.name}
                      </Card.Title>
                      <Card.Text className="fs-4">
                        {truncateMessage(service.shortDescription)}
                      </Card.Text>
                      <Card.Text className="fs-5">
                        Price: {service.price} {service.priceFormat}
                      </Card.Text>
                      <Card.Text className="fs-6">
                        Delivery Time: {service.deliveryTime}
                      </Card.Text>
                      <Button variant="dark" onClick={handleShow}>
                        Book a Visit
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center">
              <Col className="text-center last-paragraph-no-margin">
                <div className="d-inline-block align-middle me-5px">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-05.png"
                    className="h-20px"
                    alt=""
                  />
                </div>
                <div className="fs-20 ls-minus-05px text-dark-gray d-inline-block align-middle">
                  We're dedicated to empowering men to look and feel fantastic.
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          id="pricing"
          class="barber px-4 bg-very-light-yellow overlap-height"
        >
          <div class="container overlap-gap-section">
            <Row className="mb-4">
              <Col xs={12}>
                <p className="text-center">section not editable</p>
              </Col>
            </Row>
            <div class="row mb-1">
              <div class="col-12 text-center">
                <h2
                  class="alt-font fs-2 ls-minus-2px text-dark-gray shadow-none"
                  data-shadow-animation="true"
                  data-animation-delay="700"
                >
                  Flexible{" "}
                  <span class="text-highlight">
                    pricing
                    <span class="bg-base-color h-2px bottom-8px separator-animation"></span>
                  </span>
                </h2>
              </div>
            </div>
            <Row className="row-cols-1 row-cols-lg-2 row-cols-md-1">
              {services.map((service, idx) => (
                <Col md={6} className="mb-4 px-4" key={idx}>
                  {/* If you need to highlight a particular service like "Barber specials" */}
                  {service.highlight && (
                    <div style={highlightStyle}>{service.highlight}</div>
                  )}
                  <div style={pricingStyle}>
                    <Row>
                      <Col>
                        <div style={titleStyle}>{service.name}</div>
                      </Col>
                      <Col>
                        <div style={priceStyle}>₦{service.price}</div>
                      </Col>
                    </Row>
                    <p style={descriptionStyle}>{service.shortDescription}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {renderSection(
          "Gallery",

          <Row>
            {images.map((src, idx) => (
              <Col key={idx} xl={4} lg={4} sm={12}>
                <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                  <Card.Img
                    variant="top"
                    height={300}
                    src={src}
                    className="py-4"
                  />
                  <Card.Body>
                    <Button
                      variant="dark"
                      onClick={() =>
                        handleEditImageClick("Gallery", `image${idx + 1}`)
                      }
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current[`Gallery-image${idx + 1}`] = ref)
                      }
                      onChange={(e) =>
                        handleImageChange(e, "Gallery", `image${idx + 1}`)
                      }
                      style={{ display: "none" }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* {renderSection(
  "Team",
  <section
    id="barbers"
    className="barber px-4 bg-very-light-yellow overlap-height position-relative"
  >
    <div
      className="position-absolute left-0 top-minus-50 lg-top-minus-10 background-position-left-top w-100 h-100 background-size-100 background-no-repeat"
      style={{
        backgroundImage: "url('images/demo-barber-home-bg-down.png')",
      }}
    ></div>
    <Container className="overlap-gap-section">
      <Row className="mb-3 animate__animated animate__fadeIn animate__delay-1s">
        <Col xs={12} className="text-center">
          <h2 className="alt-font fs-2 ls-minus-2px text-dark-gray shadow-none">
            Talented{" "}
            <span className="text-highlight">
              barbers
              <span className="bg-base-color h-2px bottom-8px separator-animation"></span>
            </span>
          </h2>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center mb-5 animate__animated animate__fadeIn">
        {contents.map((member, idx) => (
          <Col
            key={idx}
            className="team-style-08 border-radius-6px md-mb-30px position-relative"
          >
            <Figure className="mb-0 position-relative">
              <Figure.Image
                className="border-radius-6px"
                src={member.image}
                alt={member.header}
              />
              <Figure.Caption className="w-100 h-100 d-flex align-items-end p-12 lg-p-8 bg-gradient-base-transparent border-radius-6px">
                <div className="w-100">
                  <span className="team-member-name fs-18 text-white d-block">
                    <EditableBlock
                      initialContent={member.header}
                      onContentChange={(value) =>
                        handleContentChange("Team", `header${idx + 1}`, value)
                      }
                    />
                  </span>
                  <span className="member-designation lh-20 text-white d-block">
                    <EditableBlock
                      initialContent={member.summary}
                      onContentChange={(value) =>
                        handleContentChange("Team", `summary${idx + 1}`, value)
                      }
                    />
                  </span>
                </div>
              </Figure.Caption>
            </Figure>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleEditImageClick("Team", `image${idx + 1}`)}
              style={{
                width: "250px",
                position: "absolute",
                top: `${600 + idx * 70}px`, // Adjust positioning based on index
                left: "120px",
                zIndex: 1000,
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "none",
              }}
            >
              {loadingImage ? (
                <div
                  className="spinner-border spinner-border-sm text-primary"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                `Edit Team Image ${idx + 1}`
              )}
            </Button>
            <input
              type="file"
              ref={(ref) =>
                (fileInputRefs.current[`Team-image${idx + 1}`] = ref)
              }
              onChange={(e) =>
                handleImageChange(e, "Team", `image${idx + 1}`)
              }
              style={{ display: "none" }}
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center animate__animated animate__fadeIn">
        <Col
          xs="auto"
          className="text-center last-paragraph-no-margin sm-mb-20 xs-mb-0"
        >
          <div className="d-inline-block align-middle me-5px">
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-05.png"
              className="h-20px"
              alt="Barber Icon"
            />
          </div>
          <div className="fs-20 ls-minus-05px text-dark-gray d-inline-block align-middle">
            Our nearly 80 committed talented barbers are ready to help.
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)} */}

        {renderSection(
          "Team",
          <section
            id="crew"
            className="py-lg-10 px-3 py-3"
            style={{ height: "inherit", backgroundColor: "#f1f1f1" }}
          >
            <div className="position-absolute top-0 start-0 w-100" />
            <Container className="pt-5">
              <Row className="mb-3 text-center">
                <Col xs={12} className="text-center">
                  <h2 className="alt-font fs-2 ls-minus-2px text-dark-gray shadow-none">
                    Talented{" "}
                    <span className="text-highlight">
                      barbers
                      <span className="bg-base-color h-2px bottom-8px separator-animation"></span>
                    </span>
                  </h2>
                </Col>
              </Row>
              <Row className="g-4 justify-content-center mb-5">
                <Col xs={12} md={6} lg={3}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ position: "relative" }}
                  >
                    <Card.Img
                      variant="top"
                      src={content.Team.image1}
                      style={{
                        height: "260px",
                      }}
                      className="rounded-3"
                    />
                    <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                      <div>
                        <Card.Title className="text-white fs-5">
                          <EditableBlock
                            initialContent={content.Team.header1}
                            onContentChange={(value) =>
                              handleContentChange("Team", "header1", value)
                            }
                          />
                        </Card.Title>
                        <Card.Subtitle className="text-white fs-6">
                          <EditableBlock
                            initialContent={content.Team.summary1}
                            onContentChange={(value) =>
                              handleContentChange("Team", "summary1", value)
                            }
                          />
                        </Card.Subtitle>
                      </div>
                      <div className="d-flex flex-column flex-shrink-1"></div>
                    </Card.ImgOverlay>
                    <Button
                      onClick={() => handleEditImageClick("Team", "image1")}
                      style={{
                        position: "absolute",
                        top: "70px",
                        right: "10px",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 1"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["Team-image1"] = ref)
                      }
                      onChange={(e) => handleImageChange(e, "Team", "image1")}
                      style={{ display: "none" }}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ position: "relative" }}
                  >
                    <Card.Img
                      variant="top"
                      src={content.Team.image2}
                      style={{
                        height: "260px",
                      }}
                      className="rounded-3"
                    />
                    <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                      <div>
                        <Card.Title className="text-white fs-5">
                          <EditableBlock
                            initialContent={content.Team.header2}
                            onContentChange={(value) =>
                              handleContentChange("Team", "header2", value)
                            }
                          />
                        </Card.Title>
                        <Card.Subtitle className="text-white fs-6">
                          <EditableBlock
                            initialContent={content.Team.summary2}
                            onContentChange={(value) =>
                              handleContentChange("Team", "summary2", value)
                            }
                          />
                        </Card.Subtitle>
                      </div>
                      <div className="d-flex flex-column flex-shrink-1"></div>
                    </Card.ImgOverlay>
                    <Button
                      onClick={() => handleEditImageClick("Team", "image2")}
                      style={{
                        position: "absolute",
                        top: "70px",
                        right: "10px",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 2"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["Team-image2"] = ref)
                      }
                      onChange={(e) => handleImageChange(e, "Team", "image2")}
                      style={{ display: "none" }}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ position: "relative" }}
                  >
                    <Card.Img
                      variant="top"
                      src={content.Team.image3}
                      style={{
                        height: "260px",
                      }}
                      className="rounded-3 h-80"
                    />
                    <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                      <div>
                        <Card.Title className="text-white fs-5">
                          <EditableBlock
                            initialContent={content.Team.header3}
                            onContentChange={(value) =>
                              handleContentChange("Team", "header3", value)
                            }
                          />
                        </Card.Title>
                        <Card.Subtitle className="text-white fs-6">
                          <EditableBlock
                            initialContent={content.Team.summary3}
                            onContentChange={(value) =>
                              handleContentChange("Team", "summary3", value)
                            }
                          />
                        </Card.Subtitle>
                      </div>
                      <div className="d-flex flex-column flex-shrink-1"></div>
                    </Card.ImgOverlay>
                    <Button
                      onClick={() => handleEditImageClick("Team", "image3")}
                      style={{
                        position: "absolute",
                        top: "70px",
                        right: "10px",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 3"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["Team-image3"] = ref)
                      }
                      onChange={(e) => handleImageChange(e, "Team", "image3")}
                      style={{ display: "none" }}
                    />
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card
                    className="border-0 rounded-3"
                    style={{ position: "relative" }}
                  >
                    <Card.Img
                      variant="top"
                      src={content.Team.image4}
                      style={{
                        height: "260px",
                      }}
                      className="rounded-3"
                    />
                    <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                      <div>
                        <Card.Title className="text-white fs-5">
                          <EditableBlock
                            initialContent={content.Team.header4}
                            onContentChange={(value) =>
                              handleContentChange("Team", "header4", value)
                            }
                          />
                        </Card.Title>
                        <Card.Subtitle className="text-white fs-6">
                          <EditableBlock
                            initialContent={content.Team.summary4}
                            onContentChange={(value) =>
                              handleContentChange("Team", "summary4", value)
                            }
                          />
                        </Card.Subtitle>
                      </div>
                      <div className="d-flex flex-column flex-shrink-1"></div>
                    </Card.ImgOverlay>
                    <Button
                      onClick={() => handleEditImageClick("Team", "image4")}
                      style={{
                        position: "absolute",
                        top: "70px",
                        right: "10px",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image 4"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["Team-image4"] = ref)
                      }
                      onChange={(e) => handleImageChange(e, "Team", "image4")}
                      style={{ display: "none" }}
                    />
                  </Card>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col xs="auto">
                  <div className="d-inline-block align-middle me-2">
                    <img
                      src="images/demo-barber-icon-05.png"
                      className="h-20px"
                      alt=""
                    />
                  </div>
                  <div className="fs-20 ls-minus-05px text-dark-gray d-inline-block align-middle">
                  <EditableBlock
                            initialContent={content.Blog.header1}
                            onContentChange={(value) =>
                              handleContentChange("Blog", "header1", value)
                            }
                          />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {renderSection(
          "Reviews",
          <section
            id="testimonials"
            className="py-3 px-3 py-lg-10"
            style={{ backgroundColor: "#f7f3e8", textAlign: "center" }}
          >
            <Container>
              <h2 className="mb-4 fs-2">Satisfied Customers</h2>
              {/* Display Testimonials in Static Cards */}
              <Row className="justify-content-center">
                {testimonials.map((testimonial, idx) => (
                  <Col md={6} key={idx} className="mb-4">
                    <Card
                      className="px-3 px-lg-0"
                      style={{
                        backgroundColor: "#f7f3e8",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        {/* Editable Testimonial Text */}
                        <Card.Text className="font-italic fs-3 text-dark">
                          <EditableBlock
                            initialContent={testimonial.text}
                            onContentChange={(value) =>
                              handleContentChange(
                                "Reviews",
                                `summary${idx + 1}`,
                                value
                              )
                            }
                          />
                        </Card.Text>

                        {/* Editable Client Name */}
                        <Card.Title className="mt-3 font-weight-bold mb-3">
                          <EditableBlock
                            initialContent={testimonial.title}
                            onContentChange={(value) =>
                              handleContentChange(
                                "Reviews",
                                `title${idx + 1}`,
                                value
                              )
                            }
                          />
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>

            <Container>
            <Row>
                {counters.map((counter, idx) => (
                  <Col key={idx} className="mb-3">
                    <h2 className="fs-2">
                      <EditableBlock
                        initialContent={
                          content.Statistics[`section${idx + 1}header`]
                        }
                        onContentChange={(value) =>
                          handleContentChange(
                            "Statistics",
                            `section${idx + 1}header`,
                            value
                          )
                        }
                      />
                    </h2>
                    <span className="lh-22 text-dark-gray d-block">
                      <EditableBlock
                        initialContent={
                          content.Statistics[`section${idx + 1}paragraphy`]
                        }
                        onContentChange={(value) =>
                          handleContentChange(
                            "Statistics",
                            `section${idx + 1}paragraphy`,
                            value
                          )
                        }
                      />
                    </span>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        )}

       

        {renderSection(
          "footer",
          <footer
            className="barber px-4 footer-light position-relative cover-background"
            style={{
              backgroundImage: `url(${content.footer.title1})`,
            }}
          >
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col md={10} className="text-center">
                  <div
                   
                    className="footer-logo position-relative z-index-1 d-inline-block"
                  >
                    <img
                      src={content.footer.logo}
                      alt="Barber Logo"
                    />
                     <Button
                        variant="dark"
                        onClick={() =>
                          handleEditImageClick("footer", "logo")
                        }
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: 1000,
                          backgroundColor: "rgba(0,0,0,0.5)",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        {loadingImage ? (
                          <div
                            className="spinner-border spinner-border-sm text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Edit Footer Logo"
                        )}
                      </Button>
                      <input
                        type="file"
                        ref={(ref) =>
                          (fileInputRefs.current["footer-logo"] =
                            ref)
                        }
                        onChange={(e) =>
                          handleImageChange(e, "footer", "logo")
                        }
                        style={{ display: "none" }}
                      />
                  </div>
                  <span className="fs-90 xs-fs-60 alt-font fs-2 text-base-color opacity-4 d-block mt-minus-50px mb-30px ls-minus-4px xs-ls-minus-2px">
                  <EditableBlock
                        initialContent={
                          content.footer.header
                        }
                        onContentChange={(value) =>
                          handleContentChange(
                            "Statistics",
                            "header",
                            value
                          )
                        }
                      />
                  </span>
                  <Col
                    xs={12}
                    className="text-center elements-social social-icon-style-09 mb-30px"
                  >
                    <ul className="medium-icon light">
                        {ecosystemDetails.socialMedia.map((social, index) => {
                          // Determine the icon class and the link based on the social media name
                          let iconClass = "";
                          let socialLink = social.link || "#";

                          switch (social.name.toLowerCase()) {
                            case "facebook":
                              iconClass = "fa-brands fa-facebook-f";
                              break;
                            case "instagram":
                              iconClass = "fa-brands fa-instagram";
                              break;
                            case "twitter":
                              iconClass = "fa-brands fa-twitter";
                              break;
                            // Add more cases for other social media platforms if needed
                            default:
                              break;
                          }

                          return (
                            iconClass && (
                              <li key={index}>
                                <a
                                  className={social.name.toLowerCase()}
                                  href={socialLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className={iconClass}></i>
                                  <span></span>
                                </a>
                              </li>
                            )
                          );
                        })}
                      </ul>
                  </Col>
                  <p className="mb-0 fs-16">
                    &copy; 2024 Proudly powered by{" "}
                    <a
                      href="https://www.dimpified.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-line-bottom text-white"
                    >
                      DIMP
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
            <Button
                        variant="dark"
                        onClick={() =>
                          handleEditImageClick("footer", "title1")
                        }
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          zIndex: 1000,
                          backgroundColor: "rgba(0,0,0,0.5)",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        {loadingImage ? (
                          <div
                            className="spinner-border spinner-border-sm text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Edit Footer Background"
                        )}
                      </Button>
                      <input
                        type="file"
                        ref={(ref) =>
                          (fileInputRefs.current["footer-title1"] =
                            ref)
                        }
                        onChange={(e) =>
                          handleImageChange(e, "footer", "title1")
                        }
                        style={{ display: "none" }}
                      />
          </footer>
        )}
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
    </Fragment>
  );
};

export default BarberTemplate2;
