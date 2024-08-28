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
            <UserNavbar />
            <Hero />
            <About />
            <Services />
            <Statistics />
            <Team />
            <Testimonials />
            <Blog />
            <MiniCTA />
            <Footer />
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

// Navbar Component
const UserNavbar = () => (
  <Navbar
    expand="lg"
    bg="transparent"
    variant="transparent"
    className="px-4 primary-font align-items-center  disable-fixed border-bottom "
  >
    <Container fluid>
      <Navbar.Brand href="demo-lawyer.html">
        <img
          src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-logo-white.png"
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
          <Nav.Link href="#home" className="nav-item text-white active">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-item text-white">
            About
          </Nav.Link>
          <Nav.Link href="#services" className="nav-item text-white active">
            Practice areas
          </Nav.Link>
          <Nav.Link href="#team" className="nav-item text-white">
            Attourneys
          </Nav.Link>

          <Nav.Link href="#blog" className="nav-item text-white">
            Journal
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-item text-white">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="d-none d-lg-flex ms-auto header-icon">
        <div className="d-none d-xxl-flex me-25px align-items-center">
          <span className="w-40px h-40px bg-base-color d-flex align-items-center justify-content-center me-10px rounded-circle fs-15">
            <TelephoneOutbound />
          </span>
          <a href="tel:1234567890" className="widget-text text-white-hover">
            123 456 7890
          </a>
        </div>
        <div className="header-button">
          <Button
            href="cdn-cgi/l/email-protection.html#9cf5f2faf3dce5f3e9eef8f3f1fdf5f2b2fff3f1"
            variant="medium btn-transparent-white border-1 border-color-transparent-white-light btn-rounded"
          >
            <i className="feather icon-feather-mail"></i>Send a message
          </Button>
        </div>
      </div>
    </Container>
  </Navbar>
);

// Hero Section
const Hero = () => (
  <section
    className="legal px-4 p-0 bg-dark-gray"
    id="home"
    style={{
      height: "100vh",
      backgroundImage:
        "url(https://gfa-tech.com/dimp-template-images/images/demo-lawyer-slider-01.jpg)",
      backgroundSize: "cover",
    }}
  >
    <Container className="h-100">
      <Row className="align-items-center h-100">
        <Col md={7} className="position-relative text-white">
          <span className="fs-19 text-base-color mb-30px md-mb-20px d-inline-block text-decoration-line-bottom">
            Trusted legal advisors
          </span>
          <div className="alt-font fs-85 lg-fs-75 xs-fs-60 mb-60px md-mb-45px xs-mb-35px w-70 xl-w-80 md-w-100 ls-minus-2px text-shadow-double-large">
            We are here for the{" "}
            <span className="fw-700 font-style-italic">voice of justice.</span>
          </div>
          <Button
            href="#contact"
            className="btn-extra-large btn-rounded with-rounded btn-white btn-box-shadow fw-600"
          >
            Contact us
            <span className="bg-dark-gray text-white">
              <ArrowRight />
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="legal px-4">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="position-relative mb-4 md-mb-50px">
          <div className="overflow-hidden position-relative w-80 md-w-90 ms-auto">
            <Image
              src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-01.jpg"
              className="w-100 border-radius-6px"
              alt="Experienced Lawyer"
            />
          </div>
        </Col>
        <Col lg={5} className="offset-lg-1 legal">
          <Image
            src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-03.png"
            className="w-60px mb-4"
            alt="Law Firm Logo"
          />
          <h3 className="legal alt-font fs-2 fw-500 text-dark-gray ls-minus-1px">
            We are here to stand up against{" "}
            <span className="fw-700 font-style-italic text-decoration-line-bottom-medium">
              injustice and violence.
            </span>
          </h3>
          <p className="legal primary-font w-85 lg-w-100 mb-4">
            Our law firm has a longstanding history of providing top-notch legal
            services with a focus on delivering justice and protecting the
            rights of our clients.
          </p>
          <ul className="p-0 m-0 list-style-02">
            <li className="pb-5px fs-18 text-dark-gray ls-minus-05px fw-600">
              <i className="feather icon-feather-check-circle icon-small me-10px"></i>
              Comprehensive corporate & commercial law services.
            </li>
            <li className="pb-5px fs-18 text-dark-gray ls-minus-05px fw-600">
              <i className="feather icon-feather-check-circle icon-small me-10px"></i>
              Innovative and effective legal solutions tailored to your needs.
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
            <a
              href="tel:1234567890"
              className="fw-600 d-inline-block align-middle text-dark-gray xs-mt-15px xs-mb-15px"
            >
              <i className="feather icon-feather-phone-outgoing icon-small me-10px"></i>
              123 456 7890
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Services Section
const Services = () => (
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
);

// Gallery Section
const Statistics = () => (
  <section className="legal px-4 bg-white ">
    <Container>
      <Row className="mb-5">
        <Col lg={6} className="position-relative mb-5">
          <div className="d-flex  flex-column shadow-lg bg-white rounded overflow-hidden position-relative z-index-9">
            <Row className="row-cols-1 row-cols-sm-2 justify-content-center m-0">
              <Col className="p-3 text-center border-bottom border-end text-center">
                <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                  86%
                </h2>
                <span className=" fs-17">Cases Solved</span>
              </Col>
              <Col className="p-3 text-center border-bottom text-center">
                <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                  350
                </h2>
                <span className="fs-17">Happy Clients</span>
              </Col>
              <Col className="p-3 text-center border-end text-center">
                <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                  59+
                </h2>
                <span className="fs-17">Awards Won</span>
              </Col>
              <Col className="p-3 text-center text-center">
                <h2 className="legal alt-font fs-60 fw-bold text-dark mb-2">
                  100%
                </h2>
                <span className="fs-17">Success Rate</span>
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
            We feel very proud of{" "}
            <span className="fw-bold font-italic text-decoration-underline">
              our achievements.
            </span>
          </h3>
          <Accordion defaultActiveKey="0" className="legal primary-font">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <ChevronUp className="me-2" />
                You deserve time to recover
              </Accordion.Header>
              <Accordion.Body>
                Our team ensures you have the time and space to recover fully,
                handling all the legal work with utmost care and expertise.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <ChevronDown className="me-2" />
                Don't settle for less than you deserve
              </Accordion.Header>
              <Accordion.Body>
                We fight for your rights, ensuring you get the full compensation
                and justice you deserve.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <ChevronDown className="me-2" />
                Experience you can trust
              </Accordion.Header>
              <Accordion.Body>
                With years of experience, we bring a deep understanding of the
                legal landscape to every case.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      {/* <Row className="justify-content-center align-items-center">
      <Col xl={3} lg={4} className="mb-4 text-center text-lg-start">
        <h4 className="fw-normal text-dark mb-0">
          Powerful <span className="fw-bold font-italic text-decoration-underline">achievement</span>
        </h4>
      </Col>
      <Col xs={6} lg={2} md={3} className="mb-4 text-center">
        <Image src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-awards-01.png" alt="Award 1" />
      </Col>
      <Col xs={6} lg={2} md={3} className="mb-4 text-center">
        <Image src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-awards-02.png" alt="Award 2" />
      </Col>
      <Col xs={6} lg={2} md={3} className="mb-4 text-center">
        <Image src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-awards-03.png" alt="Award 3" />
      </Col>
      <Col xs={6} lg={2} md={3} className="mb-4 text-center">
        <Image src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-awards-04.png" alt="Award 4" />
      </Col>
    </Row> */}
    </Container>
  </section>
);

// Testimonials Section
const Team = () => (
  <section
    id="team"
    className="legal px-4 bg-very-light-gray overlap-height position-relative"
  >
    <Container className="overlap-gap-section">
      <Row className="justify-content-center mb-3">
        <Col lg={7} className="text-center">
          <span className="fs-20 primary-font">Meet Our Experts</span>
          <h3 className="alt-font fw-500 fs-2 text-dark ls-minus-1">
            Our Team of{" "}
            <span className="fw-700 font-style-italic text-decoration-line-bottom-medium">
              Attorneys
            </span>
          </h3>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-xl-4 row-cols-sm-2 mb-lg-8 mb-4 justify-content-center">
        <Col className="transition-inner-all team-style-06 lg-mb-30px">
          <div className="d-flex flex-column p-4 pb-3 md-p-3 h-100 align-items-center text-center border rounded bg-white shadow">
            <a href="/attorney-details/evan-thomson">
              <img
                className="rounded-circle w-150px h-150px mb-3"
                src="https://gfa-tech.com/dimp-template-images/images/team-22.jpg"
                alt="Evan Thomson"
              />
            </a>
            <a
              href="/attorney-details/evan-thomson"
              className="text-dark alt-font fs-19 fw-600 mb-2"
            >
              Evan Thomson
            </a>
            <p className="w-90 mx-auto lh-28">
              I'm Evan, an expert in{" "}
              <a
                href="/attorney-details/evan-thomson"
                className="text-dark text-decoration-line-bottom fw-500"
              >
                criminal law
              </a>
              .
            </p>
          </div>
        </Col>

        <Col className="transition-inner-all team-style-06 lg-mb-30px">
          <div className="d-flex flex-column p-4 pb-3 md-p-3 h-100 align-items-center text-center border rounded bg-white shadow">
            <a href="/attorney-details/bryan-johnson">
              <img
                className="rounded-circle w-150px h-150px mb-3"
                src="https://gfa-tech.com/dimp-template-images/images/team-21.jpg"
                alt="Bryan Johnson"
              />
            </a>
            <a
              href="/attorney-details/bryan-johnson"
              className="text-dark alt-font fs-19 fw-600 mb-2"
            >
              Bryan Johnson
            </a>
            <p className="w-90 mx-auto lh-28">
              I'm Bryan, an expert in{" "}
              <a
                href="/attorney-details/bryan-johnson"
                className="text-dark text-decoration-line-bottom fw-500"
              >
                family law
              </a>
              .
            </p>
          </div>
        </Col>

        <Col className="transition-inner-all team-style-06 xs-mb-30px">
          <div className="d-flex flex-column p-4 pb-3 md-p-3 h-100 align-items-center text-center border rounded bg-white shadow">
            <a href="/attorney-details/jemmy-watson">
              <img
                className="rounded-circle w-150px h-150px mb-3"
                src="https://gfa-tech.com/dimp-template-images/images/team-23.jpg"
                alt="Jemmy Watson"
              />
            </a>
            <a
              href="/attorney-details/jemmy-watson"
              className="text-dark alt-font fs-19 fw-600 mb-2"
            >
              Jemmy Watson
            </a>
            <p className="w-90 mx-auto lh-28">
              I'm Jemmy, an expert in{" "}
              <a
                href="/attorney-details/jemmy-watson"
                className="text-dark text-decoration-line-bottom fw-500"
              >
                corporate law
              </a>
              .
            </p>
          </div>
        </Col>

        <Col className="transition-inner-all team-style-06">
          <div className="d-flex flex-column p-4 pb-3 md-p-3 h-100 align-items-center text-center border rounded bg-white shadow">
            <a href="/attorney-details/jeremy-dupont">
              <img
                className="rounded-circle w-150px h-150px mb-3"
                src="https://gfa-tech.com/dimp-template-images/images/team-56.jpg"
                alt="Jeremy Dupont"
              />
            </a>
            <a
              href="/attorney-details/jeremy-dupont"
              className="text-dark alt-font fs-19 fw-600 mb-2"
            >
              Jeremy Dupont
            </a>
            <p className="w-90 mx-auto lh-28">
              I'm Jeremy, an expert in{" "}
              <a
                href="/attorney-details/jeremy-dupont"
                className="text-dark text-decoration-line-bottom fw-500"
              >
                business law
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Contact Section
const Testimonials = () => (
  <section className="legal px-4 py-3 mt-4 mt-lg-20">
    <Container className="overlap-section" style={{ marginTop: "-244.9px" }}>
      <Row className="g-0 overflow-hidden">
        <Col
          xs={12}
          className="cover-background p-10 border-radius-6px position-relative"
          style={{
            backgroundImage:
              "url(https://gfa-tech.com/dimp-template-images/images/demo-lawyer-home-07.jpg)",
          }}
        >
          <div className="fs-1 alt-font text-white d-block lh-1">
            <Quote />
          </div>
          <h6 className="w-100 text-white fs-3 alt-font lh-2 mb-3 pe-6">
            <span className="fw-bold  fst-italic text-decoration-underline">
              Everyone wants {""}
            </span>
            to say they hate
            <br /> lawyers and yet I've never <br />
            met a parent who didn't want their
            <br />
            <span className="fw-bold fst-italic text-decoration-underline">
              {" "}
              kid to be a lawyer.
            </span>
          </h6>
          <a
            href="#"
            className="text-white fs-6 fw-bold text-uppercase position-relative"
          >
            <PersonFill /> Jason Statham
          </a>
        </Col>
        <div
          className="position-absolute bottom-0 start-0 w-100 text-center"
          style={{ transform: "translateX(-83.7px)" }}
        >
          <div className="fs-1 fw-bold alt-font fst-italic text-white opacity-1">
            success
          </div>
        </div>
      </Row>
    </Container>
  </section>
);
const Blog = () => (
  <section id="blog" className="legal px-4">
    <Container>
      <Row className="justify-content-center mb-3">
        <Col lg={7} className="text-center">
          <span className="fs-20 primary-font">Our News and Blog</span>
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
            {/* Blog Item 1 */}
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
                      <span className="text-muted">30 March 2023</span>
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
            {/* Blog Item 2 */}
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
                      <span className="text-muted">28 March 2023</span>
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
            {/* Blog Item 3 */}
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
                      <span className="text-muted">26 March 2023</span>
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
);
const MiniCTA = () => (
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
            Contact us today for a{" "}
            <span className="text-decoration-line-bottom-medium fw-600 font-style-italic">
              free case evaluation?
            </span>
          </h5>
          <Button
            variant="white"
            className="btn-large btn-rounded with-rounded btn-box-shadow fw-600 md-mt-40px sm-mt-30px"
          >
            Free consultation
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
);

// Footer Section
const Footer = () => (
  <footer className="footer-dark bg-blue-whale py-0">
    <Container>
      <Row className="pt-50px pb-50px md-pt-35px md-pb-35px">
        <Col
          lg={2}
          className="text-center text-lg-start last-paragraph-no-margin md-mb-15px"
        >
          <a href="/" className="footer-logo d-inline-block">
            <Image
              src="https://gfa-tech.com/dimp-template-images/images/demo-lawyer-logo-white.png"
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
            Over the years, our commitment to excellence and passion for our{" "}
            {""}
            <span className="text-white font-style-italic fw-500 text-decoration-line-bottom">
              clients has been recognized.
            </span>
          </span>
        </Col>

        <Col
          lg={3}
          className="offset-xl-1 col-sm-6 text-center text-lg-start last-paragraph-no-margin xs-mb-30px"
        >
          <span className="legal alt-font d-inline-block text-white mb-5px fs-18">
            <GeoAlt className="me-2" />
            Landmark
          </span>
          <p className="w-80 xs-w-100 d-inline-block primary-font">
            27 Eden Centre, Orchard, Paris, France
          </p>
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
            <a href="tel:1234567890">(123) 456 7890</a>
          </p>
          <a
            href="mailto:info@domain.com"
            className="text-white text-decoration-line-bottom"
          >
            info@domain.com
          </a>
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
        <Col lg={7} className="text-center text-lg-start sm-pb-10px">
          <ul className="footer-navbar md-lh-normal list-unstyled d-flex justify-content-center justify-content-lg-start mb-0">
            <li className="nav-item">
              <a href="#home" className="legal primary-font nav-link px-2">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="legal primary-font nav-link px-2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="legal primary-font nav-link px-2">
                Practice areas
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="legal primary-font nav-link px-2">
                Attorneys
              </a>
            </li>
            <li className="nav-item">
              <a href="#blogl" className="legal primary-font nav-link px-2">
                Journal
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="legal primary-font nav-link px-2">
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
);
