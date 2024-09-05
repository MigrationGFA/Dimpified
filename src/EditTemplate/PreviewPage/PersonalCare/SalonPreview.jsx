import React, { Fragment, useRef } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  ArrowRight,
  Mouse,
  StarFill,
  Person,
  Envelope,
  ChatSquareDots,
} from "react-bootstrap-icons";
import sanitizeHtml from "sanitize-html";

import { useSelector } from "react-redux";

const MAX_MESSAGE_LENGTH = 40;
const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const Preview4 = () => {
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const ecosystemDetails = useSelector((state) => state.ecosystem);

  const serviceDetails = useSelector((state) => state.service);

  const galleryItems = [
    {
      src: content.Gallery.image1,
      alt: "Image 1",
    },
    {
      src: content.Gallery.image2,
      alt: "Image 2",
    },
    {
      src: content.Gallery.image3,
      alt: "Image 3",
    },
    {
      src: content.Gallery.image4,
      alt: "Image 4",
    },
    {
      src: content.Gallery.image5,
      alt: "Image 5",
    },
    {
      src: content.Gallery.image6,
      alt: "Image 6",
    },
    // Add more items as needed
  ];

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const galleryChunks = chunkArray(galleryItems, 6);

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], // Disallow all tags
      allowedAttributes: {}, // Disallow all attributes
    });
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        wordWrap: "break-word",
        marginTop: "30px",
      }}
    >
      <Container fluid>
        <Row>
          <Col md={12}>
            <Navbar bg="transparent" expand="lg" className="px-lg-3 py-lg-7">
              <Container>
                <Navbar.Brand
                  className="fw-bold text-white d-flex align-items-center relative"
                  href="#home"
                >
                  <img
                    src={content.navbar.logo}
                    alt="Logo"
                    width="146"
                    height="42"
                    style={{
                      position: "relative",
                    }}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
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
                      Services
                    </Nav.Link>
                    <Nav.Link
                      style={{ fontWeight: "600", fontSize: "1rem" }}
                      href="#gallery"
                    >
                      Gallery
                    </Nav.Link>
                    <Nav.Link
                      style={{ fontWeight: "600", fontSize: "1rem" }}
                      href="#testimonials"
                    >
                      Reviews
                    </Nav.Link>
                    <Nav.Link
                      style={{ fontWeight: "600", fontSize: "1rem" }}
                      href="#book"
                    >
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Button variant="light" href="#book" className="btn-lg">
                    Book Appointment
                    <ArrowRight />
                  </Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            {/* hero section */}
            <Fragment>
              <section
                id="home"
                className="px-4 beauty pb-0 top-space-padding bg-dark-gray full-screen border-top bg-white position-relative sm-pb-70px"
                style={{
                  backgroundImage: `url(${content.hero.backgroundImage1})`,
                  backgroundAttachment: "fixed",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: content.hero.styles.color || "black",
                }}
              >
                <div className="position-absolute left-0 top-0 d-none d-lg-inline-block">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-home-banner-bg.png"
                    alt=""
                    style={{
                      transform: "translateY(-150px)",
                    }}
                  />
                </div>
                <div className="pe-8 pt-8 position-absolute end-0 top-0 d-none d-lg-inline-block">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-banner-img.png"
                    className="animation-rotation"
                    alt=""
                  />
                </div>
                <Container
                  className="h-100"
                  style={{
                    color: content.hero.styles.color,
                  }}
                >
                  <Row className="align-items-center h-100">
                    <Col md={6} className="position-relative">
                      <div className="display-3 fw-bold mb-3 ">
                        {sanitizeContent(content.hero.title1)}
                      </div>
                      <div className="primary-font text-light-medium-gray fs-20 w-60 mb-35px xs-mb-25px lg-w-75 md-w-100 sm-w-70 xs-w-90">
                        {sanitizeContent(content.hero.title2)}
                      </div>
                      <Button
                        href="#book"
                        className="btn btn-extra-large btn-base-color btn-hover-animation-switch btn-round-edge btn-box-shadow"
                      >
                        <span>
                          <span className="primary-font btn-text">
                            Book appointment
                          </span>
                          <span className="primary-font btn-icon">
                            <i className="fa-solid fa-arrow-right fs-14"></i>
                          </span>
                          <span className="primary-font btn-icon">
                            <i className="fa-solid fa-arrow-right fs-14"></i>
                          </span>
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Fragment>
            <Fragment>
              <section className="beauty px-4 position-relative border-bottom bg-white border-color-extra-medium-gray">
                <Container>
                  <div className="w-50 bg-white position-absolute top-minus-40px left-0px text-end">
                    <div className="fs-15 primary-font lh-30 text-dark-gray pt-5px pb-5px ps-25px pe-25px fw-600 d-inline-block bg-yellow">
                      {sanitizeContent(content.Statistics.section1header)}
                    </div>
                  </div>
                  <Row className="align-items-center">
                    <Col
                      lg={6}
                      className="icon-with-text-style-01 pt-40px pb-40px pe-8 lg-pe-15px xs-pb-30px border-end md-border-end-0 md-border-bottom border-color-extra-medium-gray"
                    >
                      <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div className="feature-box-icon me-25px">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-icon-01.png"
                            className="h-65px"
                            alt=""
                          />
                        </div>
                        <div className="feature-box-content ">
                          <h6 className="text-dark-gray fw-400 fs-3 mb-0 alt-font ls-minus-05px">
                            {sanitizeContent(
                              content.Statistics.section1paragraphy
                            )}
                          </h6>
                          <p>
                            {sanitizeContent(content.Statistics.section1span)}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      className="pt-40px pb-40px xs-pt-30px ps-8 lg-ps-15px"
                    >
                      <h6 className="fw-400 mb-0 alt-font">
                        <a
                          // href="#book"
                          className="text-dark-gray fs-3 text-dark-gray-hover"
                        >
                          {sanitizeContent(content.Statistics.section2header)}

                          <i className="bi bi-arrow-right align-middle icon-extra-medium position-relative top-3px md-top-0px ms-10px"></i>
                        </a>
                      </h6>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Fragment>
            <Fragment>
              <section id="about" className="beauty px-4 bg-white">
                <Container fluid className="">
                  <Row className="align-items-center g-0">
                    <Col
                      xl={6}
                      lg={6}
                      className="position-relative top-minus-2px md-mb-30px"
                    >
                      <img
                        src={content.aboutUs.image1}
                        className="border-radius-rb-50px w-100"
                        alt=""
                      />
                    </Col>
                    <Col
                      xl={4}
                      lg={6}
                      className="offset-xl-1 lg-ps-15px lg-pe-15px text-center text-lg-start"
                    >
                      <span className="primary-font fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">
                        {sanitizeContent(content.aboutUs.title1)}
                      </span>
                      <h2 className="beauty-theme alt-font fw-400 text-dark-gray w-75 xl-w-90 lg-w-100 ls-minus-1px">
                        {sanitizeContent(content.aboutUs.title2)}
                      </h2>
                      <p className="primary-font mb-30px w-60 xl-w-90 lg-w-100 lg-mb-25px">
                        {sanitizeContent(content.aboutUs.text1)}
                      </p>
                      <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                        <Button
                          href="#book"
                          variant="dark"
                          className="btn-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow xs-me-20px xs-mb-10px"
                        >
                          <span>
                            <span className="primary-font btn-text">
                              Book Appointment
                            </span>
                            <span className="primary-font btn-icon">
                              <ArrowRight />
                            </span>
                            <span className="primary-font btn-icon">
                              <ArrowRight />
                            </span>
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="beauty border-bottom border-color-extra-medium-gray pt-4 pb-4 bg-white">
                <Container>
                  <Row className="align-items-center justify-content-center">
                    <Col
                      lg={4}
                      md={6}
                      className="d-flex justify-content-center border-end border-color-extra-medium-gray sm-border-end-0 md-mb-40px"
                    >
                      <div className=" align-items-start process-step-item">
                        <div className=" align-items-center">
                          <span className="primary-font number text-dark-gray fs-26 alt-font">
                            {sanitizeContent(content.Statistics.section3header)}
                          </span>
                          <span className="primary-font progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div className="ms-15px">
                          <p>
                            {sanitizeContent(
                              content.Statistics.section3paragraphy
                            )}
                          </p>
                        </div>
                      </div>
                    </Col>

                    <Col
                      lg={4}
                      md={6}
                      className="d-flex justify-content-center border-end border-color-extra-medium-gray md-border-end-0 md-mb-40px"
                    >
                      <div className=" align-items-start process-step-item">
                        <div className=" align-items-center">
                          <span className="primary-font number text-dark-gray fs-26 alt-font">
                            {sanitizeContent(content.Statistics.section3span)}
                          </span>
                          <span className="primary-font progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div className="ms-15px">
                          <p className="primary-font">
                            {" "}
                            {sanitizeContent(content.Statistics.section3icon)}
                          </p>
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} className="d-flex justify-content-center">
                      <div className=" align-items-start process-step-item">
                        <div className=" align-items-center">
                          <span className="primary-font number text-dark-gray fs-26 alt-font">
                            {sanitizeContent(content.Statistics.section4header)}
                          </span>
                          <span className="primary-font progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div className="ms-15px">
                          <p>
                            {sanitizeContent(
                              content.Statistics.section4paragraphy
                            )}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Fragment>
            <Services serviceDetails={serviceDetails} />
            <Pricing serviceDetails={serviceDetails} />
            <Fragment>
              <section
                id="gallery"
                className="beauty px-4 position-relative bg-white "
              >
                <Container>
                  <Row className="align-items-center">
                    <Col md={9} className="last-paragraph-no-margin">
                      <h3 className="alt-font text-dark-gray fs-2 ls-minus-1px">
                        {sanitizeContent(content.Gallery.summary1)}
                      </h3>
                      <p className="primary-font w-95 sm-w-100">
                        {sanitizeContent(content.Gallery.summary2)}
                      </p>
                    </Col>
                    <Col
                      md={3}
                      className="text-center d-none d-md-inline-block appear anime-complete"
                    >
                      <img
                        src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-story-02.png"
                        alt=""
                        data-no-retina
                      />
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="beauty overflow-hidden position-relative bg-white pb-lg-14 pb-3 pt-0 border-bottom border-color-extra-medium-gray">
                <Container>
                  {galleryChunks.map((chunk, index) => (
                    <Row key={index} className="mb-4">
                      {chunk.map((item, idx) => (
                        <Col key={idx} md={4} className="mb-4">
                          <div className="gallery-box">
                            <a
                              href={item.src}
                              data-group="lightbox-group-gallery-item-5"
                              title="Lightbox gallery image title"
                            >
                              <div className="position-relative bg-dark-gray border-radius-6px overflow-hidden">
                                <img
                                  src={item.src}
                                  alt={item.alt}
                                  className="d-block w-100"
                                  style={{
                                    height: "280px",
                                  }}
                                />
                                <div className="d-flex align-items-center justify-content-center position-absolute top-0 left-0 w-100 h-100 gallery-hover move-bottom-top">
                                  <i className="bi bi-camera icon-medium text-white"></i>
                                </div>
                              </div>
                            </a>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  ))}
                </Container>
                <div
                  className="position-absolute left-0 bottom-0"
                  data-bottom-top="transform: translateY(-150px)"
                  data-top-bottom="transform: translateY(150px)"
                >
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-wedding-08.jpg"
                    alt=""
                    data-no-retina
                  />
                </div>
              </section>
            </Fragment>
            <Fragment>
              <section className="beauty px-4 position-relative bg-white">
                <div className="d-none d-md-flex mb-4">
                  <a
                    href="#down-section"
                    className="section-link absolute-middle-center top-0"
                  >
                    <div className="d-flex justify-content-center align-items-center mx-auto rounded-circle h-70px w-70px fs-22 text-dark-gray bg-white box-shadow-bottom">
                      <Mouse />
                    </div>
                  </a>
                </div>
                <Container>
                  <Row className="justify-content-center mb-4">
                    <Col
                      lg={4}
                      md={9}
                      sm={10}
                      className="position-relative z-index-2 pt-30px pb-50px sm-pb-30px md-pt-0 text-center text-lg-start animate-child animate-complete"
                    >
                      <span className="primary-font fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">
                        {sanitizeContent(content.Reviews.header1)}
                      </span>
                      <h2 className="alt-font fs-2 text-dark-grey ls-minus-4px mb-30px">
                        {sanitizeContent(content.Reviews.title1)}
                      </h2>
                      <a
                        href="#book"
                        className="btn btn-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow section-link"
                      >
                        <span>
                          <span className="primary-font btn-text">
                            {sanitizeContent(content.Reviews.header2)}
                          </span>
                          <span className="primary-font btn-icon">
                            <ArrowRight />
                          </span>
                          <span className="primary-font btn-icon">
                            <ArrowRight />
                          </span>
                        </span>
                      </a>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={11}
                      className="offset-lg-0 offset-sm-1 sm-mb-30px"
                    >
                      <div className="outside-box-left-5 md-outside-box-left-0 position-relative">
                        <img
                          src={content.Reviews.image1}
                          className="w-100 position-relative z-index-1 border-radius-6px"
                          alt="Client Review"
                          style={{
                            transform: "translateY(-22.4068px)",
                            height: "420px",
                          }}
                        />
                        <img
                          src="https://gfa-tech.com/dimp-template-images/images/demo-yoga-and-meditation-about-02.png"
                          className="position-absolute top-55px right-minus-150px d-none d-md-inline-block"
                          alt="Decorative Element"
                          style={{ transform: "translateX(0)", opacity: 1 }}
                        />
                        <div className="position-absolute left-minus-100px lg-left-minus-70px sm-left-minus-60px bottom-50px lg-bottom-minus-30px md-bottom-50px z-index-1 d-none d-sm-flex flex-column align-items-center justify-content-center w-200px h-200px lg-w-150px lg-h-150px bg-white border-radius-100 box-shadow-extra-large p-10px">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-story-02.png"
                            className="position-absolute top-50 translate-middle-y lg-w-80"
                            alt="Decorative Story"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={5}
                      className="align-self-end ps-60px pt-50px pb-50px text-center text-md-start lg-p-15px animate-child animate-complete"
                    >
                      <img
                        src={content.navbar.logo}
                        className="mb-20px"
                        alt="Company Logo"
                        width="146"
                        height="42"
                      />
                      <h6 className="alt-font fs-3 text-dark-gray">
                        {sanitizeContent(content.Reviews.header3)}
                      </h6>
                      <p className="primary-font w-90 lg-w-100">
                        {sanitizeContent(content.Reviews.summary3)}
                      </p>
                      <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="col-auto text-center">
                          <h2 className="text-dark-gray alt-font fw-400 mb-0">
                            9.81
                          </h2>
                        </div>
                        <div className="col-auto border-start border-color-extra-medium-gray ms-25px ps-25px text-start">
                          <div className="review-star-icon fs-18 lh-22 mb-5px text-gradient-san-blue-new-york-red">
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <StarFill />
                            <span className="primary-font text-dark-gray fw-600 fs-16">
                              {sanitizeContent(content.Reviews.title2)}
                            </span>
                          </div>
                          <span className="primary-font d-block fs-16 fw-500 lh-22 text-dark-gray primary-font">
                            {sanitizeContent(content.Reviews.summary2)}
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Fragment>
            <section className="beauty px-6 position-relative z-index-1 pb-0">
              <div className="d-none d-md-flex mb-1">
                <a
                  href="#down-section"
                  className="section-link absolute-middle-center top-0"
                ></a>
              </div>
              <Container>
                <Row className="justify-content-center align-items-center">
                  <Col lg={6} className="pb-7 sm-pb-40px">
                    <span className="primary-font fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">
                      {sanitizeContent(content.contactUs.heading1)}
                    </span>
                    <h2 className="alt-font fs-1 fw-400 text-dark-gray ls-minus-1px w-80 lg-w-100 mb-40px sm-mb-30px">
                      {sanitizeContent(content.contactUs.heading2)}
                    </h2>
                    <Row className="row-cols-1 row-cols-sm-2 mb-30px xs-mb-25px">
                      <Col className="last-paragraph-no-margin xs-mb-25px">
                        <span className="primary-font fs-18 fw-600 text-dark-gray">
                          {sanitizeContent(content.contactUs.heading3)}
                        </span>
                        <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                        <p className="primary-font w-75 lg-w-90">
                          {ecosystemDetails.address}
                        </p>
                      </Col>
                      <Col>
                        <span className="primary-font fs-18 fw-600 text-dark-gray">
                          {sanitizeContent(content.contactUs.heading5)}
                        </span>
                        <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                        <div className="w-100 d-block">
                          {sanitizeContent(content.contactUs.heading6)}
                        </div>
                      </Col>
                    </Row>
                    <Row className="row-cols-1 row-cols-sm-2">
                      <Col className="last-paragraph-no-margin xs-mb-25px">
                        <span className="primary-font fs-18 fw-600 text-dark-gray">
                          {sanitizeContent(content.contactUs.heading7)}
                        </span>
                        <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                        <div className="w-100 d-block">
                          <span className="primary-font d-block">
                            <span className="primary-font fw-600 text-dark-gray">
                              Phone:
                            </span>{" "}
                            <a
                              href="tel:1800222000"
                              className="text-medium-gray"
                            >
                              {ecosystemDetails.contact}
                            </a>
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <span className="primary-font fs-18 fw-600 text-dark-gray">
                          Opening hours
                        </span>
                        <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                        <div className="w-100 d-block">
                          <span className="primary-font d-block">
                            <span className="primary-font fw-600 text-dark-gray">
                              Mon - Fri:
                            </span>{" "}
                            09 am to 08 pm
                          </span>
                          <span className="primary-font d-block">
                            <span className="primary-font fw-600 text-dark-gray">
                              Sat - Sun:
                            </span>{" "}
                            09 am to 06 pm
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={5}
                    id="book"
                    className="offset-lg-1 align-self-end contact-form-style-03 sm-mb-50px"
                  >
                    <div className="bg-dark-gray box-shadow-double-large p-5 lg-p-10 border-radius-10px position-relative overflow-hidden">
                      <h2 className="alt-font fs-1 text-white xs-mb-15px fancy-text-style-4 ls-minus-1px ps-5">
                        Book Now!
                      </h2>
                      <Button
                        href="#services"
                        className="btn btn-extra-large btn-base-color btn-hover-animation-switch btn-round-edge btn-box-shadow"
                      >
                        <span>
                          <span className="primary-font btn-text">
                            Book appointment
                          </span>
                          <span className="primary-font btn-icon">
                            <i className="fa-solid fa-arrow-right fs-14"></i>
                          </span>
                          <span className="primary-font btn-icon">
                            <i className="fa-solid fa-arrow-right fs-14"></i>
                          </span>
                        </span>
                      </Button>

                      <div
                        className="w-200px h-200px xs-w-150px xs-h-150px bg-white border-radius-100 bg-gradient-solitude-blue-fair-pink d-flex align-items-center justify-content-center position-absolute right-minus-30px xs-right-minus-20px bottom-minus-60px xs-bottom-minus-40px"
                        style={{
                          backgroundImage:
                            "url(images/demo-beauty-salon-contact-01.png)",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <img
                          src="https://gfa-tech.com/dimp-template-images/images/demo-beauty-salon-contact-01.png"
                          className="h-80px"
                          alt="Beauty Salon"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="beauty px-4 bg-gradient-blue-ironstone-brown">
              <div className="pt-40px pb-40px border-bottom border-color-transparent-white-light">
                <Container>
                  <Row>
                    <Col className="text-center">
                      <h6 className="text-white fs-2 pt-lg-10 alt-font">
                        {sanitizeContent(content.LargeCta.header1)}

                        <ArrowRight />
                      </h6>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>

            <footer className="beauty px-4 bg-gradient-blue-ironstone-brown">
              <Container>
                <Row className="justify-content-center pt-55px pb-55px sm-pt-40px sm-pb-40px">
                  <Col
                    lg={3}
                    md={12}
                    sm={6}
                    className="last-paragraph-no-margin text-center text-sm-start text-md-center text-lg-start md-mb-30px"
                  >
                    <a href="#home" className="footer-logo d-inline-block">
                      <img
                        src={content.navbar.logo}
                        alt="Logo"
                        width="146"
                        height="42"
                      />
                    </a>
                  </Col>

                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="sm-mb-30px last-paragraph-no-margin text-center text-sm-start"
                  >
                    <span className="primary-font d-block text-base-color fs-15 ls-1px mb-5px text-uppercase fw-600">
                      Get in touch
                    </span>
                    <p className="primary-font lh-30 w-80 text-white lg-w-100">
                      {ecosystemDetails.address}
                    </p>
                  </Col>

                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    className="xs-mb-30px last-paragraph-no-margin text-center text-sm-start"
                  >
                    <span className="primary-font d-block text-base-color fs-15 ls-1px mb-5px text-uppercase fw-600">
                      Need support?
                    </span>
                    <a href="tel:1800222000" className="text-white lh-30">
                      {ecosystemDetails.contact}
                    </a>
                    <br />
                  </Col>

                  {ecosystemDetails.socialMedia.length > 0 ? (
                    <Col
                      lg={3}
                      md={4}
                      sm={6}
                      className="last-paragraph-no-margin text-center text-sm-start"
                    >
                      <span className="primary-font d-block text-base-color fs-15 ls-1px mb-10px text-uppercase fw-600">
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
                </Row>
              </Container>

              <div className="pt-20px pb-20px border-top border-color-transparent-white-light">
                <Container>
                  <Row className="align-items-center">
                    <Col
                      xxl={8}
                      lg={7}
                      className="text-center text-lg-start md-mb-10px"
                    >
                      <Nav className="footer-navbar fs-16">
                        <Nav.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#book">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#book">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="demo-beauty-salon-wedding.html">
                            Gallery
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="demo-beauty-salon-review.html">
                            Reviews
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#book">Contact</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col
                      xxl={4}
                      lg={5}
                      className="fs-16 last-paragraph-no-margin text-white text-center text-lg-start"
                    >
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
                    </Col>
                  </Row>
                </Container>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preview4;

// Services Section
const Services = ({ serviceDetails }) => (
  <Fragment>
    <section
      id="services"
      className="beauty px-4 overlap-height bg-white border-bottom border-color-extra-medium-gray"
    >
      <Container className="overlap-gap-section">
        <p>Can't edit this section</p>
        <Row className="justify-content-center align-items-center mb-6">
          <Col className="col-auto pe-25px border-2 border-end border-color-dark-gray sm-border-end-0 sm-pe-15px">
            <span className="primary-font fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 ls-1px">
              Beauty salon services
            </span>
          </Col>
          <Col className="col-12 col-md-auto ps-25px sm-ps-15px text-center">
            <h3 className="alt-font fw-400 text-dark-gray ls-minus-1px mb-0">
              Makeup and hairstyles
            </h3>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 transition-inner-all justify-content-center mb-4">
          {serviceDetails &&
            serviceDetails.services.length > 0 &&
            serviceDetails.services.map((service, index) => (
              <Col key={index} className="mb-20px">
                <Card className="services-box-style-01 hover-box">
                  <div className="position-relative box-image border-radius-6px overflow-hidden">
                    <a href="#book">
                      <img src={service.serviceImage} alt="" fluid />
                      <div className="box-overlay bg-gradient-blue-ironstone-brown"></div>
                      <span className="primary-font d-flex justify-content-center align-items-center mx-auto icon-box absolute-middle-center z-index-1 w-65px h-65px rounded-circle border border-color-transparent-white border-1">
                        <ArrowRight className="text-white" />
                      </span>
                    </a>
                  </div>
                  <Card.Body className="p-25px text-center">
                    <Card.Title className="fs-22 text-dark-gray alt-font">
                      {service.name}
                    </Card.Title>
                    <Card.Text className="lh-26">
                      {truncateMessage(service.shortDescription)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  </Fragment>
);
const Pricing = ({ serviceDetails }) => (
  <Fragment>
    <section className="beauty px-4 overlap-height bg-white border-bottom border-color-extra-medium-gray">
      <Container className="overlap-gap-section">
        <Row className="justify-content-between align-items-center mb-5 xs-mb-6">
          {serviceDetails &&
            serviceDetails.services.length > 0 &&
            serviceDetails.services.map((service, index) => (
              <Col
                lg={6}
                className={`pe-${
                  index % 2 === 0 ? 50 : 30
                }px md-pe-15px pricing-table-style-09`}
                key={index}
              >
                <Row
                  className={`border-top border-color-extra-medium-gray g-0 xs-pt-20px xs-pb-20px ${
                    index % 2 === 0 ? "xs-pt-20px xs-pb-20px" : ""
                  }`}
                >
                  <Col sm={2} className="text-center align-self-center">
                    <img src={service.serviceImage} className="w-45px" alt="" />
                  </Col>
                  <Col
                    sm={7}
                    className="text-center text-sm-start last-paragraph-no-margin ps-10px pe-10px pt-30px pb-30px border-start border-color-extra-medium-gray xs-border-start-0 lg-ps-10px lg-pe-10px"
                  >
                    <span className="primary-font alt-font text-dark-gray fs-20 lg-fs-19">
                      {service.name}
                    </span>
                    <p className="primary-font lh-26">
                      {truncateMessage(service.shortDescription)}
                    </p>
                  </Col>
                  <Col
                    sm={3}
                    className="text-center text-sm-start align-self-center"
                  >
                    <h4 className="alt-font text-dark-gray mb-0 fw-400">
                      {service.price}
                    </h4>
                    <p className="alt-font text-dark-gray mb-0 fw-400">
                      <small>{service.priceFormat} Price </small>
                      {/* deliveryTime */}
                    </p>
                  </Col>
                </Row>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  </Fragment>
);
