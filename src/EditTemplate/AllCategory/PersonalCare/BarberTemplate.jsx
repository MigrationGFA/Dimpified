import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Carousel,
  ButtonGroup,
} from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

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

const iconStyle = {
  color: "#222",
  fontSize: "1.5rem" /* Adjust size as needed */,
  backgroundColor: "#fff" /* Adjust background color as needed */,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem" /* Adjust width as needed */,
  height: "2.5rem" /* Adjust height as needed */,
  textAlign: "center",
  margin: "0 0.5rem" /* Adjust spacing as needed */,
  transition: "background-color 0.3s",
};
const hoverStyle = {
  backgroundColor: "#333",
};
const MAX_MESSAGE_LENGTH = 44;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const BarberTemplate = () => {
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

  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const sectionStyle = {
    backgroundColor: "#f7f3e8",
    paddingBottom: "3rem" /* Adjust padding as needed */,
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "2rem" /* Increased font size for the header */,
  };

  const pricingStyle = {
    borderBottom: "1px solid #ddd",
    padding: "1rem 0",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.25rem" /* Reduced font size for the title */,
    fontWeight: "bold",
    color: "#333",
  };

  const priceStyle = {
    fontSize: "1.25rem",
    color: "#333",
  };

  const descriptionStyle = {
    color: "#666",
  };

  const counters = [
    {
      value: content.Statistics.section1header,
      label: content.Statistics.section1span,
    },
    {
      value: content.Statistics.section2header,
      label: content.Statistics.section2span,
    },
    {
      value: content.Statistics.section3header,
      label: content.Statistics.section3span,
    },
    {
      value: content.Statistics.section4header,
      label: content.Statistics.section4span,
    },
  ];
  const testimonials = [
    {
      text: content.Reviews.summary1,
      client: content.Reviews.header1,
      img: "https://via.placeholder.com/80",
    },
    {
      text: content.Reviews.summary2,
      client: content.Reviews.header2,
      img: "https://via.placeholder.com/80",
    },
    {
      text: content.Reviews.summary3,
      client: content.Reviews.header3,
      img: "https://via.placeholder.com/80",
    },
  ];

  const images = [
    content.Gallery.image1,
    content.Gallery.image2,
    content.Gallery.image3,
  ];

  const [formData, setFormData] = useState({
    name: "",
    serviceLocation: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });
  const [notification, setNotification] = useState(null);
  const [barbingServices, setBarbingServices] = useState([]);

  const serviceOptions = {
    "Home service": [
      "Haircut - #3000",
      "Shave - #2500",
      "Hair Dye - #5000",
      "Beard Trim - #3000",
    ],
    Shop: [
      "Haircut - #2000",
      "Shave - #1500",
      "Hair Dye - #4000",
      "Beard Trim - #3000",
    ],
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "serviceLocation") {
      setBarbingServices(serviceOptions[value]);
      setFormData({ ...formData, serviceLocation: value, service: "" });
    }
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.post("/api/check-availability", {
        date: formData.date,
        time: formData.time,
      });
      return response.data.isAvailable;
    } catch (error) {
      console.error("Error checking availability:", error);
      return false;
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
    <div>
      {/* Navbar */}
      <Col md={9}>
        {renderSection(
          "navbar",
          <Navbar
            bg="transparent"
            variant=""
            expand="lg"
            className="px-lg-3 py-lg-3"
          >
            <Container>
              <Navbar.Brand
                className="fw-bold text-dark d-flex align-items-center"
                href="#home"
              >
                <EditableBlock
                  initialContent={
                    ecosystemDetails.ecosystemName || content.navbar.brand
                  }
                  onContentChange={(value) =>
                    handleContentChange("navbar", "brand", value)
                  }
                />

                <img
                  src={content.navbar.logo}
                  alt="Icon"
                  style={{ marginLeft: "10px", height: "24px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto ">
                  <Nav.Link
                    className="text-dark"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#about"
                  >
                    ABOUT
                  </Nav.Link>
                  <Nav.Link
                    className="text-dark"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#services"
                  >
                    SERVICES
                  </Nav.Link>
                  <Nav.Link
                    className="text-dark"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#gallery"
                  >
                    GALLERY
                  </Nav.Link>

                  <Nav.Link
                    className="text-dark"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#crew"
                  >
                    CREW
                  </Nav.Link>
                  <Nav.Link
                    className="text-dark"
                    style={{ fontWeight: "600", fontSize: "1rem" }}
                    href="#testimonials"
                  >
                    TESTIMONIALS
                  </Nav.Link>
                </Nav>
                <Button variant="dark" className="btn-lg" onClick={handleShow}>
                  <i className="feather icon-feather-calendar me-2"></i>
                  Book an appointment
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}

        {/* Hero Section */}
        {renderSection(
          "hero",
          <section
            style={{
              backgroundImage: `url(${content.hero.backgroundImage1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              color: content.hero.styles.color || "black",
              textAlign: "center",
              padding: "100px 0",
            }}
          >
            <Container
              style={{
                color: content.hero.styles.color,
              }}
            >
              <Row className="justify-content-center mb-4">
                <Col xl={7} lg={7} md={12}>
                  <div className="py-6 py-lg-0 text-center pt-lg-14">
                    <h1 className="display-3 fw-bold mb-3 text-white">
                      <span
                        className=" px-3  "
                        style={{
                          color: content.hero.styles.color,
                        }}
                      >
                        <EditableBlock
                          initialContent={content.hero.title1}
                          onContentChange={(value) =>
                            handleContentChange("hero", "title1", value)
                          }
                        />
                      </span>
                    </h1>
                    <p
                      className="mb-6 h2"
                      style={{
                        color: content.hero.styles.color,
                      }}
                    >
                      <EditableBlock
                        initialContent={content.hero.span1}
                        onContentChange={(value) =>
                          handleContentChange("hero", "span1", value)
                        }
                      />
                    </p>
                  </div>
                </Col>
                <Row className="justify-content-center text-center mt-6">
                  <Col md={9} sm={12}>
                    <div className="d-grid d-md-block">
                      <Link
                        onClick={handleShow}
                        className="btn btn-white btn-lg mb-2 mb-md-0"
                      >
                        Book an appointment
                      </Link>{" "}
                    </div>
                  </Col>
                </Row>
              </Row>
              {/* Add image editing functionality */}
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

        {/* Modal Form */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book an appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {notification && <Alert variant="danger">{notification}</Alert>}
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phone" className="mt-1">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="serviceLocation" className="mt-1">
                <Form.Label>Where should we attend to you?</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.serviceLocation}
                  onChange={handleChange}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    background: `url('https://www.svgrepo.com/show/315098/caret-down.svg`,
                    paddingRight: "1.75rem",
                  }}
                >
                  <option value="">Select convenient location</option>
                  <option value="Home service">Home service</option>
                  <option value="Shop">Shop</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="address" className="mt-1">
                <Form.Label>Your address please? (for Home service)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="service" className="mt-1">
                <Form.Label>Choose your preferred barbing service</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={!formData.serviceLocation}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    background: `url('https://www.svgrepo.com/show/315098/caret-down.svg') no-repeat right 1.75rem center/8px 10px`,
                    paddingRight: "1.75rem",
                  }}
                >
                  <option value="">Select service</option>
                  {barbingServices.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Row className="g-2 mt-2">
                <Form.Label>What date and time do you want to book?</Form.Label>
                <Col xl={6} className="mb-3">
                  <Form.Control
                    className="border-color-transparent-dark-very-light bg-transparent"
                    type="date"
                    name="date"
                    defaultValue="2023-01-01"
                    min="2023-01-01"
                    max="2099-12-31"
                  />
                </Col>
                <Col xl={6}>
                  <Form.Control
                    className="border-color-transparent-dark-very-light bg-transparent"
                    type="time"
                    name="time"
                    defaultValue="09:12"
                    min="09:00"
                    max="12:00"
                  />
                </Col>
              </Row>
              <Modal.Footer>
                <Button variant="secondary" href="/payment">
                  Pay-on-delivery
                </Button>
                <Button variant="dark" type="submit">
                  Proceed to Payment
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>

        {/* About Section */}
        {renderSection(
          "aboutUs",
          <section
            id="about"
            className="py-3 px-3 py-lg-10"
            style={{
              color: content.aboutUs.styles.color,
            }}
          >
            <Container>
              <Row>
                <Col xxl={6} xl={6} lg={6} xs={12}>
                  <div>
                    <p>double tab a section to edit the texts</p>
                    <h1 className="display-4 fw-bold mb-3">
                      <span className="  px-md-0">
                        <EditableBlock
                          initialContent={content.aboutUs.title1}
                          onContentChange={(value) =>
                            handleContentChange("aboutUs", "title1", value)
                          }
                        />
                      </span>
                    </h1>
                    <p className=" fs-4 mb-4 pe-xl-12 ">
                      <EditableBlock
                        initialContent={content.aboutUs.text1}
                        onContentChange={(value) =>
                          handleContentChange("aboutUs", "text1", value)
                        }
                      />
                    </p>
                    <p className=" fs-4 mb-4 pe-xl-12 ">
                      <EditableBlock
                        initialContent={content.aboutUs.text2}
                        onContentChange={(value) =>
                          handleContentChange("aboutUs", "text2", value)
                        }
                      />
                    </p>

                    <div className="d-grid d-md-block">
                      <Link
                        onClick={handleShow}
                        className="btn btn-dark btn-lg mb-2 mb-md-0"
                      >
                        Book an appointment
                      </Link>{" "}
                    </div>
                  </div>
                </Col>
                <Col lg={6} xs={12}>
                  <Row>
                    <Col md={6} xs={6} className="px-1">
                      <div
                        className="bg-cover rounded-3 mb-2 h-14rem"
                        style={{
                          backgroundImage: `url(${content.aboutUs.image1})`,
                          position: "relative",
                        }}
                      >
                        <Button
                          onClick={() =>
                            handleEditImageClick("aboutUs", "image1")
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
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          ) : (
                            "Edit Image 1"
                          )}
                        </Button>
                      </div>
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
                      <div
                        className="bg-cover rounded-3 mb-2 h-14rem"
                        style={{
                          backgroundImage: `url(${content.aboutUs.image2})`,
                          position: "relative",
                        }}
                      >
                        {" "}
                        <Button
                          onClick={() =>
                            handleEditImageClick("aboutUs", "image2")
                          }
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
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          ) : (
                            "Edit Image 2"
                          )}
                        </Button>
                      </div>
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
                    </Col>
                    <Col md={6} xs={6} className="pt-6">
                      <div
                        className="bg-cover rounded-3 mt-6 mb-2 h-18rem"
                        style={{
                          backgroundImage: `url(${content.aboutUs.image3})`,
                          position: "relative",
                        }}
                      >
                        <Button
                          onClick={() =>
                            handleEditImageClick("aboutUs", "image3")
                          }
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
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          ) : (
                            "Edit Image 3"
                          )}
                        </Button>
                      </div>
                      <input
                        type="file"
                        ref={(ref) =>
                          (fileInputRefs.current["aboutUs-image3"] = ref)
                        }
                        onChange={(e) =>
                          handleImageChange(e, "aboutUs", "image3")
                        }
                        style={{ display: "none" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {/* Services/Menu Section */}
        <section
          id="services"
          className="py-lg-10 px-3 py-6"
          style={{
            padding: "50px 0",
            textAlign: "center",
            backgroundColor: "#f7f3e8",
          }}
        >
          <p>section not editable</p>
          <Container>
            <h2 className="fs-2">Our Services</h2>
            <Row>
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
          </Container>
          {/* gallery part */}
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
                          (fileInputRefs.current[`Gallery-image${idx + 1}`] =
                            ref)
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
        </section>

        <section id="pricing px-3" style={sectionStyle}>
          <Container>
            <Row className="mb-4">
              <Col xs={12}>
                <p className="text-center">section not editable</p>
                <h2 style={headerStyle}>
                  Flexible <span className="text-highlight">Pricing</span>
                </h2>
              </Col>
            </Row>
            <Row>
              {services.map((service, idx) => (
                <Col md={6} className="mb-4 px-4" key={idx}>
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
          </Container>
        </section>

        {/* Crew Section */}
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
                <Col xs={12}>
                  <h2 className="text-dark fs-2">Meet Our Talented Barbers</h2>
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
                  <div className="fs-4 text-dark d-inline-block align-middle">
                    Our dedicated team of skilled barbers is here to provide you
                    with exceptional grooming services.
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {/* testimonial section */}
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
                            initialContent={
                              content.Reviews[`summary${idx + 1}`]
                            }
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
                            initialContent={content.Reviews[`header${idx + 1}`]} // Dynamically access summary1, summary2, etc.
                            onContentChange={(value) =>
                              handleContentChange(
                                "Reviews",
                                `header${idx + 1}`,
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

            {/* Counters Section */}
            <Container>
              <Row className="">
                {counters.map((counter, idx) => (
                  <Col key={index} className="mb-3">
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
                          content.Statistics[`section${idx + 1}span`]
                        }
                        onContentChange={(value) =>
                          handleContentChange(
                            "Statistics",
                            `section${idx + 1}span`,
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

        {/* sechedule and appointment */}
        <section
          style={{
            backgroundColor: "#fff",
            padding: "50px 0",
            textAlign: "center",
          }}
          id="appointment"
          className="py-lg-10 px-3 py-3"
        >
          <Container>
            <Row>
              <Col
                xl={4}
                lg={5}
                className="mb-4 mb-lg-0"
                style={{ textAlign: "left" }}
              >
                <p>You can not editable this section </p>
                <h2 className="text-dark fs-2 mb-4">
                  Schedule an{" "}
                  <span className="text-highlight">
                    appointment
                    <span className="bg-base-color h-2px bottom-8px separator-animation"></span>
                  </span>
                </h2>
                <p>
                  Your information will be forwarded to a scheduling specialist
                  who will contact you.
                </p>
                <div className="feature-box bg-medium-yellow p-3 border-radius-6px text-start">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://craftohtml.themezaa.com/images/demo-barber-home-13.jpg"
                      className="h-60px me-3"
                      height={40}
                      alt="Phone appointment"
                    />
                    <div>
                      <p className="mb-0">Phone appointment</p>
                      <a
                        href="tel:12345678910"
                        className="fs-22 ls-minus-1px fw-600 text-dark"
                      >
                        {ecosystemDetails.expectedAudienceNumber}
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={8} lg={7}>
                <Form action="email-templates/contact-form.php" method="post">
                  <Row className="justify-content-center">
                    <Col md={6} className="mb-3">
                      <Form.Control
                        className="mb-3 border-color-transparent-dark-very-light bg-transparent"
                        type="text"
                        name="name"
                        placeholder="Your name*"
                        required
                      />
                      <Form.Control
                        className="mb-3 border-color-transparent-dark-very-light bg-transparent"
                        type="email"
                        name="email"
                        placeholder="Your email address*"
                        required
                      />
                      <Row className="g-2">
                        <Col xl={6} className="mb-3">
                          <Form.Control
                            className="border-color-transparent-dark-very-light bg-transparent"
                            type="date"
                            name="date"
                            defaultValue="2023-01-01"
                            min="2023-01-01"
                            max="2099-12-31"
                          />
                        </Col>
                        <Col xl={6}>
                          <Form.Control
                            className="border-color-transparent-dark-very-light bg-transparent"
                            type="time"
                            name="time"
                            defaultValue="09:12"
                            min="09:00"
                            max="12:00"
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Form.Select
                        className="mb-3 border-color-transparent-dark-very-light bg-transparent"
                        name="select"
                        defaultValue=""
                      >
                        <option value="">Select barber service</option>
                        <option value="Haircut">Haircut</option>
                        <option value="Hair styling">Hair styling</option>
                        <option value="Shaving">Shaving</option>
                        <option value="Beard sculpting">Beard sculpting</option>
                        <option value="Kids haircut">Kids haircut</option>
                      </Form.Select>
                      <Form.Control
                        as="textarea"
                        className="border-color-transparent-dark-very-light bg-transparent h-140px"
                        rows="4"
                        name="comment"
                        placeholder="Your message"
                      />
                    </Col>
                    <Col md={6} className="mt-3 text-center text-md-start">
                      <p className="fs-14 lh-22 opacity-7 mb-0">
                        We are committed to protecting your privacy. We will
                        never collect information about you.
                      </p>
                    </Col>
                    <Col md={6} className="mt-3 text-center text-md-end">
                      <Button
                        className="btn btn-lg  btn-dark w-100"
                        type="submit"
                      >
                        <i className="feather icon-feather-calendar me-2"></i>
                        <span className="btn-double-text">
                          Book appointment
                        </span>
                      </Button>
                    </Col>
                    <Col md={12}>
                      <div className="form-results d-none text-center mt-3 px-3"></div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
        {renderSection(
          "footer",
          <footer
            style={{
              backgroundImage: `url(https://craftohtml.themezaa.com/images/demo-barber-home-footer-bg.jpg)`,
              color: "white",
              textAlign: "center",
            }}
          >
            <Container className="py-lg-14 px-3 py-4">
              <h1 className="display-3 fw-bold mb-3 text-white">
                <span className=" px-3 px-md-0 ">
                  <EditableBlock
                    initialContent={content.footer.header}
                    onContentChange={(value) =>
                      handleContentChange("footer", "header", value)
                    }
                  />
                </span>
              </h1>
              <p>
                <EditableBlock
                  initialContent={content.footer.title1}
                  onContentChange={(value) =>
                    handleContentChange("footer", "title1", value)
                  }
                />
              </p>
              <p>
                <EditableBlock
                  initialContent={content.footer.paragraph1}
                  onContentChange={(value) =>
                    handleContentChange("footer", "paragraph1", value)
                  }
                />
              </p>
              <Nav className="justify-content-center">
                <Nav.Link
                  href="#facebook"
                  style={{
                    ...iconStyle,
                    fontSize: "20rem",
                    ":hover": hoverStyle,
                  }}
                >
                  <FaFacebookF />
                </Nav.Link>
                <Nav.Link
                  href="#instagram"
                  style={{
                    ...iconStyle,
                    fontSize: "20rem",
                    ":hover": hoverStyle,
                  }}
                >
                  <FaInstagram />
                </Nav.Link>
                <Nav.Link
                  href="#twitter"
                  style={{ ...iconStyle, ":hover": hoverStyle }}
                >
                  <FaTwitter />
                </Nav.Link>
              </Nav>
            </Container>
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
    </div>
  );
};

export default BarberTemplate;
