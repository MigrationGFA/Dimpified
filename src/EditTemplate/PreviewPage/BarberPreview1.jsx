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
import sanitizeHtml from "sanitize-html";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

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
  backgroundColor: "#333" /* Adjust hover background color as needed */,
};

const MAX_MESSAGE_LENGTH = 44;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};
const BarberPreview1 = () => {
  const [show, setShow] = useState(false);
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const services = useSelector((state) => state.service.services);
  const ecosystemDetails = useSelector((state) => state.ecosystem);

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
              {sanitizeContent(content.navbar.brand)}
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
            backgroundImage: `url(${content.hero.backgroundImage1})`,
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
                      {content.hero.title1}
                    </span>
                  </h1>
                  <p className="mb-6 h2 text-white">
                    {sanitizeContent(content.hero.span1)}
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
        <section id="about" className="py-3 px-3 py-lg-10">
          <Container>
            <Row>
              <Col xxl={6} xl={6} lg={6} xs={12}>
                <div>
                  <h1 className="display-4 fw-bold mb-3">
                    <span className="text-dark  px-md-0">
                      {sanitizeContent(content.aboutUs.title1)}
                    </span>
                  </h1>
                  <p className="text-dark fs-4 mb-4 pe-xl-12 ">
                    {sanitizeContent(content.aboutUs.text1)}
                  </p>
                  <p className="text-dark fs-4 mb-4 pe-xl-12 ">
                    {sanitizeContent(content.aboutUs.text2)}
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
                      }}
                    ></div>
                    <div
                      className="bg-cover rounded-3 mb-2 h-14rem"
                      style={{
                        backgroundImage: `url(${content.aboutUs.image2})`,
                      }}
                    ></div>
                  </Col>
                  <Col md={6} xs={6} className="pt-6">
                    <div
                      className="bg-cover rounded-3 mt-6 mb-2 h-18rem"
                      style={{
                        backgroundImage: `url(${content.aboutUs.image3})`,
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

        {/* Testimonials Section */}

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
                    src={content.Team.image1}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(content.Team.header1)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(content.Team.summary1)}
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
                    src={content.Team.image2}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(content.Team.header2)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(content.Team.summary2)}
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
                    src={content.Team.image3}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3 h-80"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(content.Team.header3)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(content.Team.summary3)}
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
                    src={sanitizeContent(content.Team.image4)}
                    style={{
                      height: "260px",
                    }}
                    className="rounded-3"
                  />
                  <Card.ImgOverlay className="d-flex align-items-end p-3 bg-gradient-base-transparent rounded-3">
                    <div>
                      <Card.Title className="text-white fs-5">
                        {sanitizeContent(content.Team.header4)}
                      </Card.Title>
                      <Card.Subtitle className="text-white fs-6">
                        {sanitizeContent(content.Team.summary4)}
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
                              {sanitizeContent(
                                content.Reviews[`summary${idx + 1}`]
                              )}
                            </Card.Text>
                            <Card.Title className="mt-3 font-weight-bold mb-3">
                              {sanitizeContent(
                                content.Reviews[`header${idx + 1}`]
                              )}
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
                      content.Statistics[`section${idx + 1}header`]
                    )}
                  </h2>
                  <span className="lh-22 text-dark-gray d-block">
                    {sanitizeContent(
                      content.Statistics[`section${idx + 1}span`]
                    )}
                  </span>
                </Col>
              ))}
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
                {sanitizeContent(content.footer.header)}
              </span>
            </h1>
            <p>&copy; {sanitizeContent(content.footer.title1)}</p>
            <p>{sanitizeContent(content.footer.paragraph1)}</p>
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

export default BarberPreview1;
