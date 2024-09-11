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
import BookingModal from "../../Features/BookingModal";

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
const Template1 = ({ details, subdomain, ecosystemDetails }) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [serviceDetails, setServiceDetails] = useState({});

  // const handleShow = () => setModalShow(true);
  const handleShow = (subService, serviceType, currency, domain) => {
    setServiceDetails({
      name: subService.name,
      price: subService.price,
      priceFormat: subService.priceFormat,
      deliveryTime: subService.deliveryTime,
      shortDescription: subService.shortDescription,
      serviceType: serviceType,
      currency,
      domain,
    });
    setModalShow(true);
  };

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
  }, []);

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], // Disallow all tags
      allowedAttributes: {}, // Disallow all attributes
    });
  };

  console.log("this is ecosystem Details", ecosystemDetails);

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
              {sanitizeContent(details.navbar.brand) === "not available"
                ? ecosystemDetails.ecosystemName
                : sanitizeContent(details.navbar.brand)}
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
              <a href="#services">
                <Button variant="dark" className="btn-lg">
                  Book an appointment
                </Button>
              </a>
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
                    <a
                      href="#services"
                      className="btn btn-white btn-lg mb-2 mb-md-0"
                    >
                      Book an appointment
                    </a>{" "}
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </section>

        <BookingModal
          show={modalShow}
          setModalShow={setModalShow}
          information={serviceDetails}
        />

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
                    <a href="#services">
                      <Button variant="dark" className="btn-lg">
                        Book an appointment
                      </Button>
                    </a>
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
                              Price: {service.currency}
                              {subService.price}
                            </Card.Text>
                            <Card.Text className="fs-5">
                              Payment: {subService.priceFormat}
                            </Card.Text>
                            <Card.Text className="fs-6">
                              Delivery Time: {subService.deliveryTime}
                            </Card.Text>
                            <Button
                              variant="dark"
                              onClick={() =>
                                handleShow(
                                  subService,
                                  service.format,
                                  service.currency,
                                  service.ecosystemDomain
                                )
                              }
                            >
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
                          style={{
                            height: "350px",
                          }}
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
                            style={{
                              height: "300px",
                            }}
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
              {ecosystemDetails.socialMedia.length > 0 ? (
                <Col lg={3} md={4} sm={6} className="last-paragraph-no-margin ">
                  <span className="primary-font d-block  fs-15 ls-1px mb-10px text-uppercase fw-600">
                    Connect with us
                  </span>
                  <div className="elements-social social-icon-style-09">
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
                  </div>
                </Col>
              ) : (
                ""
              )}
            </Nav>
            <Nav className="justify-content-center mt-10">
              <p>
                © 2024 Proudly Powered by{" "}
                <a
                  href="https://www.dimpified.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-line-bottom text-white"
                >
                  DIMP from GFA Technologies
                </a>
              </p>
            </Nav>
          </Container>
        </footer>
      </Col>
    </div>
  );
};

export default Template1;
