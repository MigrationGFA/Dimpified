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
const BarberPreview1 = () => {
  const [show, setShow] = useState(false);
  const content = useSelector((state) => state.mainTemplate.currentTemplate);

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
    { value: 437, label: "Haircuts per week" },
    { value: 864, label: "Shaved per week" },
    { value: 334, label: "Stylization per week" },
    { value: 453, label: "Washing per week" },
  ];
  const testimonials = [
    {
      text: "The Barbers offers a fantastic blend of affordability, convenience, and exceptional quality. It's a place where you can expect a friendly and laid-back atmosphere, perfect for a relaxing haircut experience. The team of professionals is highly skilled, making it a great spot for everyone, from kids to adults. I always leave feeling satisfied and well-groomed!",
      client: "Chinonso Okafor",
      img: "https://via.placeholder.com/80",
    },
    {
      text: "The Barbers provides an outstanding service with a warm and friendly team. The environment is welcoming and comfortable, making each visit a pleasant experience. The staff’s professionalism and attention to detail ensure that I always get exactly what I’m looking for. It’s a fantastic choice for anyone seeking quality grooming in a relaxed setting.",
      client: "Ngozi Eze",
      img: "https://via.placeholder.com/80",
    },
    {
      text: "I’m absolutely delighted with my new look from The Barbers! The service was top-notch, and the team was incredibly friendly and attentive. The quality of the haircut exceeded my expectations, and I appreciate the skill and care that went into it. Whether you’re looking for a fresh style or a simple trim, this place is the perfect choice.",
      client: "Emeka Nwosu",
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
              <Col xl={3} lg={3} sm={12}>
                <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                  <Card.Img
                    variant="top"
                    height={100}
                    src="https://craftohtml.themezaa.com/images/demo-barber-icon-01.svg"
                    className="py-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-dark fs-3">Haircut</Card.Title>
                    <Card.Text className="fs-4">
                      Professional haircut services for all styles.
                    </Card.Text>
                    <Button variant="dark" onClick={handleShow}>
                      Book a Visit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={12}>
                <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                  <Card.Img
                    variant="top"
                    height={100}
                    src="https://craftohtml.themezaa.com/images/demo-barber-icon-02.svg"
                    className="py-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-dark fs-3">Shave</Card.Title>
                    <Card.Text>
                      Expert shaving services for a clean and smooth look.
                    </Card.Text>
                    <Button variant="dark" onClick={handleShow}>
                      Book a Visit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={12}>
                <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                  <Card.Img
                    variant="top"
                    height={100}
                    src="https://craftohtml.themezaa.com/images/demo-barber-icon-03.svg"
                    className="py-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-dark fs-3">Hair Dye</Card.Title>
                    <Card.Text>
                      Quality hair dye services to give you a fresh new look.
                    </Card.Text>
                    <Button variant="dark" onClick={handleShow}>
                      Book a Visit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} lg={3} sm={12}>
                <Card style={{ margin: "10px", backgroundColor: "#f7f3e8" }}>
                  <Card.Img
                    variant="top"
                    height={100}
                    src="https://craftohtml.themezaa.com/images/demo-barber-icon-04.svg"
                    className="py-4"
                  />
                  <Card.Body>
                    <Card.Title className="text-dark fs-3">
                      Beard Trim
                    </Card.Title>
                    <Card.Text>
                      Perfect beard trims to keep you looking sharp.
                    </Card.Text>
                    <Button variant="dark" onClick={handleShow}>
                      Book a Visit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
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
              <Col md={6} className="mb-4 px-4 ps-lg-10">
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Basic Haircut</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦1,500</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    A quick and efficient haircut, perfect for maintaining your
                    style.
                  </p>
                </div>
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Classic Haircut & Shave</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦2,500</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    A classic haircut with a shave, ensuring you look sharp and
                    fresh.
                  </p>
                </div>
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Deluxe Haircut</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦2,000</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    An extended haircut with additional styling, tailored to
                    your preferences.
                  </p>
                </div>
              </Col>
              <Col md={6} className="mb-4 px-4 pe-lg-10">
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Beard Styling</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦2,000</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    Professional beard styling and trimming to match your look.
                  </p>
                </div>
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Beard & Hair Combo</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦3,500</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    A complete package including both haircut and beard styling.
                  </p>
                </div>
                <div style={pricingStyle}>
                  <Row>
                    <Col>
                      <div style={titleStyle}>Grooming Package</div>
                    </Col>
                    <Col>
                      <div style={priceStyle}>₦4,000</div>
                    </Col>
                  </Row>
                  <p style={descriptionStyle}>
                    Includes a full haircut, beard styling, and additional
                    grooming services.
                  </p>
                </div>
              </Col>
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
                    <div className="d-flex flex-column flex-shrink-1">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i className="fa-brands fa-instagram fs-5"></i>
                      </a>
                    </div>
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
                    <div className="d-flex flex-column flex-shrink-1">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i className="fa-brands fa-facebook-f fs-5"></i>
                      </a>
                    </div>
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
                    <div className="d-flex flex-column flex-shrink-1">
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i className="fa-brands fa-twitter fs-5"></i>
                      </a>
                    </div>
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
                    <div className="d-flex flex-column flex-shrink-1">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <i className="fa-brands fa-instagram fs-5"></i>
                      </a>
                    </div>
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
                    +
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
