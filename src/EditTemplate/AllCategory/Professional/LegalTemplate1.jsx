import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftShort,
  ArrowRightShort,
  ChevronUp,
  ChevronDown,
  Facebook,
  Dribbble,
  Twitter,
  Instagram,
  Award,
  Quote,
  PersonFill,
  Heart,
  GeoAlt,
  TelephoneOutbound,
  ArrowRight,
} from "react-bootstrap-icons";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Image,
  Accordion,
  Navbar,
  Nav,
  Carousel,
} from "react-bootstrap";
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

const Template3 = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const ecosystemDetails = useSelector((state) => state.ecosystem);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

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

  const {
    fileInputRefs,
    handleEditImageClick,
    handleImageChange,
    loadingImage,
  } = useImageEditor();
  return (
    <div
      style={{
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <Container fluid>
        <Row>
          <Col md={9}>
            {renderSection(
              "navbar",
              <Navbar
                expand="lg"
                bg="transparent"
                //variant="transparent"
                className="px-4 primary-font align-items-center  disable-fixed border-bottom "
              >
                <Container fluid>
                  <Navbar.Brand href="#home">
                    <img
                      src={content.navbar.logo}
                      alt="Logo"
                      className="default-logo"
                      width="138"
                      height="36"
                    />
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls="BootstrapNavbarNav" />
                  <Navbar.Collapse
                    id="BootstrapNavbarNav"
                    className="justify-content-center"
                  >
                    <Nav className="mx-auto">
                      <Nav.Link
                        href="#home"
                        className="nav-item text-white active text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        href="#about"
                        className="nav-item text-white"
                        style={{ fontSize: "0.875rem" }}
                      >
                        About
                      </Nav.Link>
                      <Nav.Link
                        href="#services"
                        className="nav-item text-white active text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Practice areas
                      </Nav.Link>
                      <Nav.Link
                        href="#team"
                        className="nav-item text-white text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Attourneys
                      </Nav.Link>
                      <Nav.Link
                        href="#blog"
                        className="nav-item text-white text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Journal
                      </Nav.Link>
                      <Nav.Link
                        href="#contact"
                        className="nav-item text-white text-sm"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>

                  <div className="d-none d-lg-flex ms-auto header-icon">
                    <div className="d-none d-xxl-flex me-25px align-items-center">
                      <span className="w-40px h-40px bg-base-color d-flex align-items-center justify-content-center me-10px rounded-circle fs-15">
                        <TelephoneOutbound />
                      </span>
                      <a
                        href=""
                        className="widget-text text-white-hover"
                      >
                        {ecosystemDetails.contact}
                      </a>
                    </div>
                    <div className="header-button">
                      <Button
                        href="#"
                        variant="medium btn-transparent-white border-1 border-color-transparent-white-light btn-rounded"
                      >
                        <i className="feather icon-feather-mail"></i>Send a
                        message
                      </Button>
                    </div>
                  </div>
                </Container>
              </Navbar>
            )}

            {renderSection(
              "hero",
              <section
                className="legal px-4 p-0 bg-dark-gray"
                id="home"
                style={{
                  height: "100vh",
                  backgroundImage: `url(${content.hero.backgroundImage1})`,
                  backgroundSize: "cover",
                }}
              >
                <Container className="h-100">
                  <Row className="align-items-center h-100">
                    <Col md={7} className="position-relative text-white">
                      <span className="fs-19 text-base-color mb-30px md-mb-20px d-inline-block text-decoration-line-bottom">
                        <EditableBlock
                          initialContent={content.hero.span1}
                          onContentChange={(value) =>
                            handleContentChange("hero", "span1", value)
                          }
                        />
                      </span>
                      <div className="alt-font fs-60 lg-fs-65 xs-fs-60 mb-60px md-mb-45px xs-mb-35px w-70 xl-w-80 md-w-100 ls-minus-2px text-shadow-double-large">
                        <EditableBlock
                          initialContent={content.hero.span2}
                          onContentChange={(value) =>
                            handleContentChange("hero", "span2", value)
                          }
                        />
                      </div>
                      <Button
                        href="#contact"
                        className="btn-extra-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
                      >
                        <EditableBlock
                          initialContent={content.hero.buttonText1}
                          onContentChange={(value) =>
                            handleContentChange("hero", "buttonText1", value)
                          }
                        />
                        <span className="bg-dark-gray text-white">
                          <ArrowRight />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    handleEditImageClick("hero", "backgroundImage1")
                  }
                  style={{
                    width: "250px",
                    position: "absolute",
                    top: "500px",
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
              </section>
            )}

            {renderSection(
              "aboutUs",
              <section id="about" className="legal px-4">
                <Container>
                  <Row className="align-items-center">
                    <Col lg={6} className="position-relative mb-4 md-mb-50px">
                      <div className="overflow-hidden position-relative w-80 md-w-90 ms-auto">
                        <Image
                          src={content.aboutUs.image1}
                          className="w-100 border-radius-6px"
                          alt="Experienced Lawyer"
                        />
                      </div>
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={() =>
                          handleEditImageClick("aboutUs", "image1")
                        }
                        style={{
                          width: "250px",
                          position: "absolute",
                          top: "500px",
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
                          "Edit Image"
                        )}
                      </Button>
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
                    </Col>
                    <Col lg={5} className="offset-lg-1 legal">
                      <Image
                        src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-03.png"
                        className="w-60px mb-4"
                        alt="Law Firm Logo"
                      />
                      <h3 className="legal alt-font fs-2 fw-500 text-dark-gray ls-minus-1px">
                        <EditableBlock
                          initialContent={content.aboutUs.title1}
                          onContentChange={(value) =>
                            handleContentChange("aboutUs", "title1", value)
                          }
                        />
                      </h3>
                      <p className="legal primary-font w-85 lg-w-100 mb-4">
                        <EditableBlock
                          initialContent={content.aboutUs.text1}
                          onContentChange={(value) =>
                            handleContentChange("aboutUs", "text1", value)
                          }
                        />
                      </p>
                      <ul className="p-0 m-0 list-style-02">
                        <li className="pb-5px fs-18 text-dark-gray ls-minus-05px fw-600">
                          <i className="feather icon-feather-check-circle icon-small me-10px"></i>
                          <EditableBlock
                            initialContent={content.aboutUs.text2}
                            onContentChange={(value) =>
                              handleContentChange("aboutUs", "text2", value)
                            }
                          />
                        </li>
                      </ul>
                      <div className="d-inline-block mt-30px">
                        <Button
                          href="#services"
                          variant="dark"
                          size="lg"
                          className="btn-extra-large btn-rounded with-rounded btn-box-shadow me-20px"
                        >
                          Learn more
                          <span className="bg-blue-licorice text-white">
                            <ArrowRight />
                          </span>
                        </Button>
                        {/* <a
                          href="tel:1234567890"
                          className="fw-600 d-inline-block align-middle text-dark-gray xs-mt-15px xs-mb-15px"
                        >
                          <i className="feather icon-feather-phone-outgoing icon-small me-10px"></i>
                          123 456 7890
                        </a> */}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            )}

            <section
              id="services"
              className="legal px-4 overflow-hidden bg-blue-whale position-relative"
            >
              <Container>
                <Row className="align-items-center">
                  <Col lg={4} className="text-center text-lg-start">
                    <span className="fs-20 text-base-color mb-10px d-block">
                      Areas of Practice
                    </span>
                    <h3 className="alt-font text-white mb-55px md-mb-40px ls-minus-1px">
                      Different cases need{" "}
                      <span className="fw-600 font-style-italic text-decoration-line-bottom-medium">
                        different
                      </span>{" "}
                      <span className="fw-600 font-style-italic text-decoration-line-bottom-medium">
                        services.
                      </span>
                    </h3>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <Button
                        variant="outline-light"
                        className="me-2"
                        onClick={() => CarouselRef.current.prev()}
                      >
                        <ArrowLeftShort className="icon-very-medium" />
                      </Button>
                      <Button
                        variant="outline-light"
                        onClick={() => CarouselRef.current.next()}
                      >
                        <ArrowRightShort className="icon-very-medium" />
                      </Button>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <Carousel
                      ref={Carousel}
                      indicators={false}
                      controls={false}
                      interval={2000}
                      className="carousel-fade"
                    >
                      <Carousel.Item>
                        <Row>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-01.jpg"
                                alt="Business law advisor"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-01.png"
                                    className="w-60px"
                                    alt="Business law advisor icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Business law advisor
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-02.jpg"
                                alt="Investment litigation"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-02.png"
                                    className="w-60px"
                                    alt="Investment litigation icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Investment litigation
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-03.jpg"
                                alt="Trust and estates"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-03.png"
                                    className="w-60px"
                                    alt="Trust and estates icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Trust and estates
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                        </Row>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Row>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-04.jpg"
                                alt="Child care support"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-4.png"
                                    className="w-60px"
                                    alt="Child care support icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Child care support
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-05.jpg"
                                alt="Personal injury advisor"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-5.png"
                                    className="w-60px"
                                    alt="Personal injury advisor icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Personal injury advisor
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                          <Col>
                            <figure className="m-0 hover-box overflow-hidden position-relative border-radius-6px">
                              <img
                                src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-01.jpg"
                                alt="Employment law advisor"
                                className="w-100"
                              />
                              <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-55px xl-p-35px">
                                <a href="#">
                                  <img
                                    src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-icon-5.png"
                                    className="w-60px"
                                    alt="Employment law advisor icon"
                                  />
                                </a>
                                <div className="d-flex w-100 align-items-center mt-auto">
                                  <div className="col last-paragraph-no-margin">
                                    <h6 className="alt-font fw-500 font-style-italic mb-0 w-80 xl-w-95">
                                      <a href="#" className="text-white">
                                        Employment law advisor
                                      </a>
                                    </h6>
                                  </div>
                                  <a
                                    href="#"
                                    className="circle-box bg-white w-55px h-55px rounded-circle ms-auto position-relative rounded-box"
                                  >
                                    <ArrowRightShort className="icon-very-medium lh-0px text-dark-gray absolute-middle-center" />
                                  </a>
                                </div>
                                <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
                              </figcaption>
                            </figure>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Container>
              <div className="position-absolute bottom-minus-40px left-0px w-100 text-center d-none d-sm-block">
                <Container fluid>
                  <div className="fs-170 lg-fs-140 md-fs-130 sm-fs-100 fw-600 text-outline text-outline-color-white opacity-05 ls-minus-4px sm-ls-minus-1px">
                    legal practices
                  </div>
                </Container>
              </div>
            </section>

            {renderSection(
              "Statistics",
              <section className="legal px-4 bg-white ">
                <Container>
                  <Row className="mb-5">
                    <Col lg={6} className="position-relative mb-5">
                      <div className="d-flex  flex-column shadow-lg bg-white rounded overflow-hidden position-relative z-index-9">
                        <Row className="row-cols-1 row-cols-sm-2 justify-content-center m-0">
                          <Col className="p-3 text-center border-bottom border-end text-center">
                            <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                              <EditableBlock
                                initialContent={
                                  content.Statistics.section1header
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section1header",
                                    value
                                  )
                                }
                              />
                            </h2>
                            <span className=" fs-17">
                              {" "}
                              <EditableBlock
                                initialContent={content.Statistics.section1span}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section1span",
                                    value
                                  )
                                }
                              />
                            </span>
                          </Col>
                          <Col className="p-3 text-center border-bottom text-center">
                            <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                              <EditableBlock
                                initialContent={
                                  content.Statistics.section4header
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section4header",
                                    value
                                  )
                                }
                              />
                            </h2>
                            <span className="fs-17">
                              <EditableBlock
                                initialContent={content.Statistics.section4span}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section4span",
                                    value
                                  )
                                }
                              />
                            </span>
                          </Col>
                          <Col className="p-3 text-center border-end text-center">
                            <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                              <EditableBlock
                                initialContent={
                                  content.Statistics.section2header
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section2header",
                                    value
                                  )
                                }
                              />
                            </h2>
                            <span className="fs-17">
                              <EditableBlock
                                initialContent={content.Statistics.section2span}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section2span",
                                    value
                                  )
                                }
                              />
                            </span>
                          </Col>
                          <Col className="p-3 text-center text-center">
                            <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                              <EditableBlock
                                initialContent={
                                  content.Statistics.section3header
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section3header",
                                    value
                                  )
                                }
                              />
                            </h2>
                            <span className="fs-17">
                              <EditableBlock
                                initialContent={content.Statistics.section3span}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Statistics",
                                    "section3span",
                                    value
                                  )
                                }
                              />
                            </span>
                          </Col>
                        </Row>
                      </div>
                      <Image
                        src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-dotted-pattern.png"
                        className="position-absolute end-0 bottom-0 opacity-50"
                        alt="Pattern"
                        style={{ right: "-20px", bottom: "-30px" }}
                      />
                    </Col>
                    <Col xl={{ span: 5, offset: 1 }} lg={6}>
                      <h3 className="legal alt-font fs-2 fw-normal text-dark w-85 ls-minus-1px">
                        <EditableBlock
                          initialContent={content.contactUs.heading2}
                          onContentChange={(value) =>
                            handleContentChange("contactUs", "heading2", value)
                          }
                        />
                      </h3>
                      <Accordion
                        defaultActiveKey="0"
                        className="legal primary-font"
                      >
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <ChevronUp className="me-2" />
                            <EditableBlock
                              initialContent={
                              content.Statistics.section1paragraphy  
                              }
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section1paragraphy",
                                  value
                                )
                              }
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            <EditableBlock
                              initialContent={content.Statistics.section1icon}
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section1icon",
                                  value
                                )
                              }
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <ChevronDown className="me-2" />
                            <EditableBlock
                              initialContent={
                                content.Statistics.section2paragraphy
                              }
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section2paragraphy",
                                  value
                                )
                              }
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            <EditableBlock
                              initialContent={content.Statistics.section2icon}
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section2icon",
                                  value
                                )
                              }
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <ChevronDown className="me-2" />
                            <EditableBlock
                              initialContent={
                                content.Statistics.section3paragraphy
                              }
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section3paragraphy",
                                  value
                                )
                              }
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            <EditableBlock
                              initialContent={content.Statistics.section3icon}
                              onContentChange={(value) =>
                                handleContentChange(
                                  "Statistics",
                                  "section3icon",
                                  value
                                )
                              }
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Container>
              </section>
            )}

            {renderSection(
              "Team",
              <section
                id="team"
                className="legal px-4 bg-very-light-gray overlap-height position-relative"
              >
                <Container className="overlap-gap-section">
                  <Row className="justify-content-center mb-3">
                    <Col lg={7} className="text-center">
                      <span className="fs-20 primary-font">
                        Meet Our Experts
                      </span>
                      <h3 className="alt-font fw-500 fs-2 text-dark ls-minus-1">
                        Our Team of{" "}
                        <span className="fw-700 font-style-italic text-decoration-line-bottom-medium">
                          Attorneys
                        </span>
                      </h3>
                    </Col>
                  </Row>

                  <Row className="row-cols-1 row-cols-xl-4 row-cols-sm-2 mb-lg-8 mb-4 justify-content-center">
                    {["image1", "image2", "image3", "image4"].map(
                      (imageKey, index) => (
                        <Col
                          key={index}
                          className="transition-inner-all team-style-06 lg-mb-30px"
                        >
                          <div className="d-flex flex-column p-4 pb-3 md-p-3 h-100 align-items-center text-center border rounded bg-white shadow">
                            <div className="position-relative">
                              <a href="#Team">
                                <img
                                  className="rounded-circle w-150px h-150px mb-3"
                                  src={content.Team[imageKey]}
                                  alt={content.Team[`header${index + 1}`]}
                                />
                              </a>
                              <Button
                                variant="primary"
                                size="lg"
                                onClick={() =>
                                  handleEditImageClick("Team", imageKey)
                                }
                                style={{
                                  width: "120px", // Adjusted size for a more balanced button
                                  position: "absolute",
                                  top: "10px", // Adjust to position the button near the top of the image
                                  right: "10px", // Align to the right side of the image
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
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                ) : (
                                  `Edit Image ${index + 1}`
                                )}
                              </Button>
                              <input
                                type="file"
                                ref={(ref) =>
                                  (fileInputRefs.current[`Team-${imageKey}`] =
                                    ref)
                                }
                                onChange={(e) =>
                                  handleImageChange(e, "Team", imageKey)
                                }
                                style={{ display: "none" }}
                              />
                            </div>
                            <p
                              href=""
                              className="text-dark alt-font fs-19 fw-600 mb-2"
                            >
                              <EditableBlock
                                initialContent={
                                  content.Team[`header${index + 1}`]
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Team",
                                    `header${index + 1}`,
                                    value
                                  )
                                }
                              />
                            </p>
                            <p className="w-90 mx-auto lh-28">
                              <EditableBlock
                                initialContent={
                                  content.Team[`summary${index + 1}`]
                                }
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Team",
                                    `summary${index + 1}`,
                                    value
                                  )
                                }
                              />
                            </p>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                </Container>
              </section>
            )}

            {renderSection(
              "Reviews",
              <section className="legal px-4 py-3 mt-4 mt-lg-20">
                <Container
                  className="overlap-section"
                  style={{ marginTop: "-244.9px" }}
                >
                  <Row className="g-0 overflow-hidden">
                    <Col
                      xs={12}
                      className="cover-background p-10 border-radius-6px position-relative"
                      style={{
                        backgroundImage: `url(${content.Reviews.image1})`,
                      }}
                    >
                      <div className="fs-1 alt-font text-white d-block lh-1">
                        <Quote />
                      </div>
                      <h6 className="w-100 text-white fs-3 alt-font lh-2 mb-3 pe-6">
                        <EditableBlock
                          initialContent={content.Reviews.header1}
                          onContentChange={(value) =>
                            handleContentChange("Reviews", "header1", value)
                          }
                        />
                      </h6>
                      <p
                        href=""
                        className="text-white d-flex fs-6 fw-bold text-uppercase position-relative"
                      >
                        <PersonFill />{" "}
                        <EditableBlock
                          initialContent={content.Reviews.title1}
                          onContentChange={(value) =>
                            handleContentChange("Reviews", "title1", value)
                          }
                        />
                      </p>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleEditImageClick("Reviews", "image1")}
                    style={{
                      width: "250px",

                      top: "500px",
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
                      (fileInputRefs.current["Reviews-image1"] = ref)
                    }
                    onChange={(e) => handleImageChange(e, "Reviews", "image1")}
                    style={{ display: "none" }}
                  />
                </Container>
              </section>
            )}

            {/* {renderSection(
              "Blog",
              <section id="blog" className="legal px-4">
                <Container>
                  <Row className="justify-content-center mb-3">
                    <Col lg={7} className="text-center">
                      <span className="fs-20 primary-font">
                        Our News and Blog
                      </span>
                      <h3 className="fw-500 fs-2 alt-font text-dark">
                        Updated{" "}
                        <span className="fw-700 font-italic text-decoration-underline">
                          Latest News
                        </span>
                      </h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Row className="g-4">
                      
                        <Col lg={4} md={6}>
                          <Card className="border-0 rounded-3 shadow-lg">
                            <Card.Img
                              variant="top"
                              src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-blog-01.jpg"
                            />
                            <Card.Body>
                              <Button
                                variant="light"
                                className="text-dark fw-bold text-uppercase mb-3"
                              >
                                Lawyer
                              </Button>
                              <Card.Title className="mb-3">
                                What to do if teammates do not appreciate you?
                              </Card.Title>
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="text-muted">
                                    30 March 2023
                                  </span>
                                  <br />
                                  <span className="text-dark">
                                    By{" "}
                                    <a href="#" className="text-dark fw-bold">
                                      Den Viliamson
                                    </a>
                                  </span>
                                </div>
                                <div>
                                  <Heart className="text-danger" />
                                  <span className="ms-2 fw-bold">65</span>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                  
                        <Col lg={4} md={6}>
                          <Card className="border-0 rounded-3 shadow-lg">
                            <Card.Img
                              variant="top"
                              src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-blog-02.jpg"
                            />
                            <Card.Body>
                              <Button
                                variant="light"
                                className="text-dark fw-bold text-uppercase mb-3"
                              >
                                Lawyer
                              </Button>
                              <Card.Title className="mb-3">
                                Getting a consultant is the best decision.
                              </Card.Title>
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="text-muted">
                                    28 March 2023
                                  </span>
                                  <br />
                                  <span className="text-dark">
                                    By{" "}
                                    <a href="#" className="text-dark fw-bold">
                                      Hugh Macleod
                                    </a>
                                  </span>
                                </div>
                                <div>
                                  <Heart className="text-danger" />
                                  <span className="ms-2 fw-bold">25</span>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
               
                        <Col lg={4} md={6}>
                          <Card className="border-0 rounded-3 shadow-lg">
                            <Card.Img
                              variant="top"
                              src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-blog-03.jpg"
                            />
                            <Card.Body>
                              <Button
                                variant="light"
                                className="text-dark fw-bold text-uppercase mb-3"
                              >
                                Lawyer
                              </Button>
                              <Card.Title className="mb-3">
                                Research and strategy are vital for the market.
                              </Card.Title>
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <span className="text-muted">
                                    26 March 2023
                                  </span>
                                  <br />
                                  <span className="text-dark">
                                    By{" "}
                                    <a href="#" className="text-dark fw-bold">
                                      Walton Smith
                                    </a>
                                  </span>
                                </div>
                                <div>
                                  <Heart className="text-danger" />
                                  <span className="ms-2 fw-bold">30</span>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            )} */}

            {renderSection(
              "contactUs",
              <section id="contact" className="legal px-4 bg-blue-whale py-0">
                <Container className="footer-top pt-lg-8 pt-3 pb-50px md-pb-35px">
                  <Row className="justify-content-center">
                    <Col className="position-relative justify-content-center align-items-center text-center">
                      <Image
                        src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-07.png"
                        className="position-absolute left-90px lg-left-15px opacity-1 top-minus-35px sm-top-minus-25px w-10 sm-w-15 xs-w-80px"
                        alt="Lawyer Image"
                      />
                      <h5 className="alt-font fs-2 d-inline-block align-middle text-white mb-0 me-35px md-me-0 position-relative">
                        <EditableBlock
                          initialContent={content.contactUs.heading1}
                          onContentChange={(value) =>
                            handleContentChange("contactUs", "header1", value)
                          }
                        />
                      </h5>
                      <Button
                        variant="white"
                        className="btn-large btn-rounded with-rounded btn-box-shadow fw-600 md-mt-40px sm-mt-30px"
                      >
                        <EditableBlock
                          initialContent={content.contactUs.buttonText1}
                          onContentChange={(value) =>
                            handleContentChange(
                              "contactUs",
                              "buttonText1",
                              value
                            )
                          }
                        />
                        <span className="bg-dark-gray text-white ms-2">
                          <ArrowRight />
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col>
                      <div className="divider-style-03 divider-style-03-01 border-color-transparent-white-light"></div>
                    </Col>
                  </Row>
                </Container>
              </section>
            )}

            {renderSection(
              "footer",
              <footer className="footer-dark bg-blue-whale py-0">
                <Container>
                  <Row className="pt-50px pb-50px md-pt-35px md-pb-35px">
                    <Col
                      lg={2}
                      className="text-center text-lg-start last-paragraph-no-margin md-mb-15px"
                    >
                      <a href="#footer" className="footer-logo d-inline-block">
                        <Image
                          src={content.footer.logo}
                          alt="Logo"
                          width="138"
                          height="36"
                        />
                      </a>
                    </Col>

                    <Col
                      lg={4}
                      className="last-paragraph-no-margin text-center text-lg-start md-mb-40px sm-mb-30px"
                    >
                      <span className="fs-22 legal alt-font md-w-80 xs-w-100 m-auto d-inline-block">
                      <EditableBlock
                          initialContent={content.footer.title1}
                          onContentChange={(value) =>
                            handleContentChange(
                              "footer",
                              "title1",
                              value
                            )
                          }
                        />
                      </span>
                    </Col>

                    <Col
                      lg={3}
                      className="offset-xl-1 col-sm-6 text-center text-lg-start last-paragraph-no-margin xs-mb-30px"
                    >
                      <span className="legal alt-font d-inline-block text-white mb-5px fs-18">
                        <GeoAlt className="me-2" />
                        {ecosystemDetails.address}
                      </span>
                     
                    </Col>

                    <Col
                      xl={2}
                      lg={3}
                      className="col-sm-6 text-center text-lg-start last-paragraph-no-margin"
                    >
                      <span className="alt-font d-inline-block text-white mb-5px fs-18">
                        <TelephoneOutbound className="me-2" />
                        Contact
                      </span>
                      <p>
                        <a href="#">{ecosystemDetails.contact}</a>
                      </p>
                      <p
                        
                        className="text-white text-decoration-line-bottom"
                      >
                        <EditableBlock
                          initialContent={content.footer.paragraph3}
                          onContentChange={(value) =>
                            handleContentChange(
                              "footer",
                              "paragraph3",
                              value
                            )
                          }
                        />
                      </p>
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col>
                      <div className="divider-style-03 divider-style-03-01 border-color-transparent-white-light"></div>
                    </Col>
                  </Row>
                </Container>

                <Container className="footer-bottom pt-25px pb-25px">
                  <Row className="align-items-center">
                    <Col
                      lg={7}
                      className="text-center text-lg-start sm-pb-10px"
                    >
                      <ul className="footer-navbar md-lh-normal list-unstyled d-flex justify-content-center justify-content-lg-start mb-0">
                        <li className="nav-item">
                          <a
                            href="#home"
                            className="legal primary-font nav-link px-2"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#about"
                            className="legal primary-font nav-link px-2"
                          >
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#services"
                            className="legal primary-font nav-link px-2"
                          >
                            Practice areas
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#team"
                            className="legal primary-font nav-link px-2"
                          >
                            Attorneys
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#blogl"
                            className="legal primary-font nav-link px-2"
                          >
                            Journal
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#contact"
                            className="legal primary-font nav-link px-2"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </Col>

                    <Col
                      lg={5}
                      className="text-center text-lg-end last-paragraph-no-margin"
                    >
                      <p>
                        Powered by{" "}
                        <a
                          href="https://www.dimpified.com/"
                          target="_blank"
                          className="text-decoration-line-bottom text-white"
                        >
                          DIMP
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </footer>
            )}
          </Col>
        </Row>
      </Container>

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
    </div>
  );
};

export default Template3;
