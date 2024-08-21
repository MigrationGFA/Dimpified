import React, { useState, useEffect } from "react";
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
import sanitizeHtml from "sanitize-html";
import axios from "axios";

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

const MAX_MESSAGE_LENGTH = 44;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const hoverStyle = {
  backgroundColor: "#333" /* Adjust hover background color as needed */,
};
const Template1 = ({ details, subdomain }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [index, setIndex] = useState(0);

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
      value: details.Statistics.section1header,
      label: details.Statistics.section1span,
    },
    {
      value: details.Statistics.section2header,
      label: details.Statistics.section2span,
    },
    {
      value: details.Statistics.section3header,
      label: details.Statistics.section3span,
    },
    {
      value: details.Statistics.section4header,
      label: details.Statistics.section4span,
    },
  ];
  const testimonials = [
    {
      text: details.Reviews.summary1,
      client: details.Reviews.header1,
      img: "https://via.placeholder.com/80",
    },
    {
      text: details.Reviews.summary2,
      client: details.Reviews.header2,
      img: "https://via.placeholder.com/80",
    },
    {
      text: details.Reviews.summary3,
      client: details.Reviews.header3,
      img: "https://via.placeholder.com/80",
    },
  ];

  const images = [
    details.Gallery.image1,
    details.Gallery.image2,
    details.Gallery.image3,
  ];

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }
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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // services
  useEffect(() => {
    const getServiceeDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-all-services/${subdomain}`
        );
        setServices(response.data.services);
        console.log("this is service", response.data.services);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getServiceeDetails();
  }, [subdomain]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      setNotification(
        "The selected date and time are already booked. Please choose another."
      );
      return;
    }
    // Proceed with booking
    // Submit the booking form data to the server
    handleClose();
  };

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], // Disallow all tags
      allowedAttributes: {}, // Disallow all attributes
    });
  };

  return (
    <div>
      {/* Navbar */}
      <Col md={12}>
        <Navbar
          bg="transparent"
          variant=""
          expand="lg"
          className="px-lg-10 py-lg-3"
        >
          <Container>
            <Navbar.Brand
              className="fw-bold text-dark d-flex align-items-center"
              href="#home"
            >
              {sanitizeContent(details.navbar.brand)}
              <img
                src="https://craftohtml.themezaa.com/images/demo-barber-icon-04.svg"
                alt="Icon"
                style={{ marginLeft: "10px", height: "24px" }} // Adjust the margin and height as needed
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

        {/* Hero Section */}
        <section
          style={{
            backgroundImage: `url(${details.hero.backgroundImage1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            color: "white",
            textAlign: "center",
            padding: "100px 0",
          }}
        >
          <Container>
            <Row className="justify-content-center mb-4">
              <Col xl={7} lg={7} md={12}>
                <div className="py-6 py-lg-0 text-center pt-lg-14">
                  <h1 className="display-3 fw-bold mb-3 text-white">
                    <span className="text-white px-3  ">
                      {sanitizeContent(details.hero.title1)}
                    </span>
                  </h1>
                  <p className="mb-6 h2 text-white">
                    {sanitizeContent(details.hero.span1)}
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
          </Container>
        </section>

        {/* Modal Form */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book an appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {notification && <Alert variant="danger">{notification}</Alert>}
            <Form onSubmit={handleSubmit}>
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
        <section id="about" className="py-3 px-3 mt-10 py-lg-10">
          <Container>
            <Row>
              <Col xxl={6} xl={6} lg={6} xs={12}>
                <div>
                  <h1 className="display-4 fw-bold mb-3">
                    <span className="text-dark  px-md-0">
                      {sanitizeContent(details.aboutUs.title1)}
                    </span>
                  </h1>
                  <p className="text-dark fs-4 mb-4 pe-xl-12 ">
                    {sanitizeContent(details.aboutUs.text1)}
                  </p>
                  <p className="text-dark fs-4 mb-4 pe-xl-12 ">
                    {sanitizeContent(details.aboutUs.text2)}
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
                        backgroundImage: `url(${details.aboutUs.image1})`,
                      }}
                    ></div>
                    <div
                      className="bg-cover rounded-3 mb-2 h-14rem"
                      style={{
                        backgroundImage: `url(${details.aboutUs.image2})`,
                      }}
                    ></div>
                  </Col>
                  <Col md={6} xs={6} className="pt-6">
                    <div
                      className="bg-cover rounded-3 mt-6 mb-2 h-18rem"
                      style={{
                        backgroundImage: `url(${details.aboutUs.image3})`,
                      }}
                    ></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

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
          <Container>
            <h2 className="fs-2">Our Services</h2>
            <Row>
              {/* {services.map((service, idx) => (
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
              ))} */}
              {services.map((service, serviceIdx) => (
                <div key={serviceIdx}>
                  <h5>{service.header}</h5>
                  <Row>
                    {service.services.map((subService, idx) => (
                      <Col key={idx} xl={3} lg={3} sm={12}>
                        <Card
                          style={{ margin: "10px", backgroundColor: "#f7f3e8" }}
                        >
                          <Card.Img
                            variant="top"
                            height={100}
                            src="https://craftohtml.themezaa.com/images/demo-barber-icon-01.svg" // Replace this with your dynamic image link if available
                            className="py-4"
                          />
                          <Card.Body>
                            <Card.Title className="text-dark fs-3">
                              {subService.name}
                            </Card.Title>
                            <Card.Text className="fs-4">
                              {truncateMessage(subService.shortDescription)}
                            </Card.Text>
                            <Card.Text className="fs-5">
                              Price: {service.price} {subService.priceFormat}
                            </Card.Text>
                            <Card.Text className="fs-6">
                              Delivery Time: {subService.deliveryTime}
                            </Card.Text>
                            <Button variant="dark" onClick={handleShow}>
                              Book a Visit
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Row>
          </Container>
          <Container fluid className="pt-lg-10 pt-3 px-0">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={3000}
            >
              {groupedImages.map((group, idx) => (
                <Carousel.Item key={idx}>
                  <Row className="d-none d-lg-flex no-gutter">
                    {group.map((src, imgIdx) => (
                      <Col key={imgIdx} className="px-1">
                        <img
                          className="d-block w-100 img-fluid"
                          src={src}
                          alt={`Slide ${imgIdx + 1}`}
                        />
                      </Col>
                    ))}
                  </Row>
                  <Row className="d-flex d-lg-none no-gutters">
                    {group
                      .map((src, imgIdx) => (
                        <Col key={imgIdx} className="px-1">
                          <img
                            className="d-block w-100 img-fluid"
                            src={src}
                            alt={`Slide ${imgIdx + 1}`}
                          />
                        </Col>
                      ))
                      .slice(0, 1)}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
            <ButtonGroup className="mt-3">
              {groupedImages.map((_, idx) => (
                <Button
                  key={idx}
                  variant={index === idx ? "white" : "dark"}
                  onClick={() => handleSelect(idx)}
                >
                  {idx + 1}
                </Button>
              ))}
            </ButtonGroup>
          </Container>
        </section>

        <section id="pricing px-3" style={sectionStyle}>
          <Container>
            <Row className="mb-4">
              <Col xs={12}>
                <h2 style={headerStyle}>
                  Flexible <span className="text-highlight">Pricing</span>
                </h2>
              </Col>
            </Row>
            {services.map((service, serviceIdx) => (
              <div key={serviceIdx}>
                <h5 className="text-center">{service.header}</h5>
                <Row>
                  {service.services.map((subService, idx) => (
                    <Col md={6} className="mb-4 px-4" key={idx}>
                      <div style={pricingStyle}>
                        <Row>
                          <Col>
                            <div style={titleStyle}>{subService.name}</div>
                          </Col>
                          <Col>
                            <div style={priceStyle}>₦{subService.price}</div>
                          </Col>
                        </Row>
                        <p
                          className="px-4"
                          style={{
                            color: "#666",
                          }}
                        >
                          {subService.shortDescription}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Container>
        </section>

        {/* Crew Section */}
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
                <Card className="border-0 rounded-3">
                  <Card.Img
                    variant="top"
                    src={details.Team.image1}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(details.Team.header1)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(details.Team.summary1)}
                      </Card.Subtitle>
                    </div>
                    <div className="d-flex flex-column flex-shrink-1"></div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-3">
                  <Card.Img
                    variant="top"
                    src={details.Team.image2}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(details.Team.header2)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(details.Team.summary2)}
                      </Card.Subtitle>
                    </div>
                    <div className="d-flex flex-column flex-shrink-1"></div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-3">
                  <Card.Img
                    variant="top"
                    src={details.Team.image3}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3 h-80"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(details.Team.header3)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(details.Team.summary3)}
                      </Card.Subtitle>
                    </div>
                    <div className="d-flex flex-column flex-shrink-1"></div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Card className="border-0 rounded-3">
                  <Card.Img
                    variant="top"
                    src={sanitizeContent(details.Team.image4)}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(details.Team.header4)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(details.Team.summary4)}
                      </Card.Subtitle>
                    </div>
                    <div className="d-flex flex-column flex-shrink-1"></div>
                  </Card.ImgOverlay>
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

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-3 px-3 py-lg-10"
          style={{ backgroundColor: "#f7f3e8", textAlign: "center" }}
        >
          <Container>
            <h2 className="mb-4 fs-2">Satisfied Customers</h2>
            <Carousel interval={3000}>
              {testimonials.map((testimonial, idx) => (
                <Carousel.Item key={idx}>
                  <Container>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Card
                          className="px-3 px-lg-0 "
                          style={{
                            backgroundColor: "#f7f3e8",
                            textAlign: "center",
                          }}
                        >
                          <Card.Body>
                            <Card.Text className="font-italic fs-3 text-dark">
                              {sanitizeContent(testimonial.text)}
                            </Card.Text>
                            <Card.Title className="mt-3 font-weight-bold mb-3">
                              {sanitizeContent(testimonial.client)}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
          <Container>
            <Row className="">
              {counters.map((counter, idx) => (
                <Col key={index} className="mb-3">
                  <h2 className="fs-2">
                    {sanitizeContent(
                      details.Statistics[`section${idx + 1}header`]
                    )}
                  </h2>
                  <span className="lh-22 text-dark-gray d-block">
                    {sanitizeContent(
                      details.Statistics[`section${idx + 1}span`]
                    )}
                  </span>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

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
                        +234 8098765432
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
                {sanitizeContent(details.footer.header)}
              </span>
            </h1>
            <p>&copy; {sanitizeContent(details.footer.title1)}</p>
            <p>{sanitizeContent(details.footer.paragraph1)}</p>
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
      </Col>
    </div>
  );
};

export default Template1;
