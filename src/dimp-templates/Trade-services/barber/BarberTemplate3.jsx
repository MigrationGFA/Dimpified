import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BarberImg from "./images/barber-image.png";
import BarberBg from "./images/barberbg.jpg";

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
  Image,
  Figure,
} from "react-bootstrap";
import {
  Award,
  TelephoneOutbound,
  ArrowRight,
  ArrowUpShort,
  CurrencyDollar,
  ArrowLeft,
  Facebook,
  Dribbble,
  Twitter,
  Instagram,
  Linkedin,
  Person,
  Envelope,
  ChatSquareDots,
  Scissors,
  Briefcase,
  CreditCard,
  StarFill,
  CalendarCheck,
} from "react-bootstrap-icons";
const BarberTemplate3 = () => {
  return (
    <Fragment>
      <Navbar
        bg="transparent"
        variant="transparent"
        expand="lg"
        className="spa-link px-lg-10 py-lg-3"
      >
        <Container>
          <Navbar.Brand
            className="fw-bold text-dark d-flex align-items-center"
            href="#home"
          >
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-barber-logo-black.png"
              alt="Icon"
              style={{ marginLeft: "10px", height: "50px" }} // Adjust the margin and height as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" spa-link">
            <Nav className="mx-auto">
              <Nav.Link
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#services"
                className="mx-2"
              >
                Services
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#pricing"
                className="mx-2"
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#testimonials"
                className="mx-2"
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button
              href="#"
              variant="link"
              data-text="Online appointment"
              className="btn-medium fw-500 my-2 mx-2 btn-double-border btn-border-color-transparent-white"
            >
              <span>Book appointment</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="barber p-0 bg-dark-gray">
        <div className="position-relative full-screen  md-h-600px sm-h-500px base-color">
          <div
            className="position-absolute left-0px top-0px w-100 h-100 "
            style={{
              backgroundImage: `url(https://cw33.com/wp-content/uploads/sites/8/2022/09/GettyImages-1320646994.jpg?w=2560&h=1440&crop=1)`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
          <div className="opacity-light bg-gradient-nero-grey-brown"></div>
          <Container className="h-100">
            <Row className="align-items-center h-100 px-lg-12 ">
              <Col xl={6} lg={6} className="position-relative text-white ">
                <span className="fs-15 d-block mb-15px ls-4px text-uppercase">
                  No 1 Barber in Abeokuta
                </span>
                <div className="alt-font fs-80 sm-fs-60 xs-fs-50 mb-40px w-80 lg-w-100 md-w-90 sm-w-100 sm-mb-35px anime-text ls-minus-2px">
                  Skilled Craftsmen Barbershop
                </div>
                <Button
                  href="#"
                  variant="link"
                  data-text="Online appointment"
                  className="btn-medium fw-500 btn-double-border btn-border-color-transparent-white"
                >
                  <span>Book appointment</span>
                </Button>
              </Col>
              <Col xl={6} lg={6} className="position-relative ">
                <div className="w-100 overflow-hidden position-relative md-w-90 border-radius-6px float-end">
                  <img className="w-100" src={BarberImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section
        className="barber background-repeat"
        style={{
          backgroundImage:
            "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
        }}
      >
        <Container>
          <Row className="align-items-center mb-10 md-mb-17 xs-mb-25">
            <Col
              xl={5}
              lg={6}
              className="position-relative offset-lg-1 offset-md-2"
            >
              <div className="w-80 overflow-hidden position-relative md-w-90 border-radius-6px float-end">
                <img
                  className="w-100"
                  src="https://dimpified.com/assets/talk-to-customer-C8_woj4o.jpg"
                  alt=""
                />
              </div>
              <div className="position-absolute left-minus-70px bottom-minus-30px w-60 overflow-hidden md-left-minus-100px sm-left-15px">
                <img
                  className="w-100 border-radius-6px"
                  src="https://dimpified.com/assets/barber-img-DxM0wS3O.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col xl={6} lg={5} className="md-mb-70px sm-mb-45px ps-lg-14">
              <span className="fs-15 mb-15px text-base-color fw-500 d-block text-uppercase ls-2px">
                About Us
              </span>
              <h3 className="alt-font fs-50 ls-minus-1px  text-dark-gray w-80 xl-w-90 md-w-100">
                Get the best Haircut in town
              </h3>
              <p className="w-80 primary-font lh-2 md-w-100 mb-40px">
                Our barbers are carefully hand-picked to ensure the finest
                service in our barbershops around Abeokuta, and the world. We’re
                well trusted to deliver excellence with over 5000+ customer
                reviews.
              </p>
              <div className="d-inline-block w-100">
                <Button
                  href="#"
                  variant="link"
                  data-text="Book Appointment"
                  className="btn-small  btn-double-border btn-border-base-color me-25px xs-me-15px"
                >
                  <span>
                    <span>Book Appointment</span>
                    <span>
                      <ArrowRight />
                    </span>
                  </span>
                </Button>
                <div className="fw-500 d-inline-block align-middle text-dark-gray fs-18 xs-mt-20px xs-mb-20px">
                  <TelephoneOutbound className="icon-small me-10px" />
                  <a href="tel:1800222000">1 800 222 000</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-4 row-cols-sm-2 text-center text-sm-start">
            <Col className="last-paragraph-no-margin sm-mb-30px">
              <h2 className="fw-600 fs-50 primary-font ls-minus-3px text-dark-gray m-0">
                9.98
                <sup>
                  <ArrowUpShort className="icon-medium text-base-color animation-float" />
                </sup>
              </h2>
              <p className="text-dark-gray lh-28">Google reviews</p>
            </Col>
            <Col className="last-paragraph-no-margin sm-mb-30px">
              <h2 className="fw-600 fs-50 primary-font ls-minus-3px text-dark-gray m-0">
                30k
                <sup>
                  <ArrowUpShort className="icon-medium text-base-color animation-float" />
                </sup>
              </h2>
              <p className="text-dark-gray lh-28">Instagram followers</p>
            </Col>
            <Col className="last-paragraph-no-margin xs-mb-30px">
              <h2 className="fw-600 fs-50 primary-font ls-minus-3px text-dark-gray m-0">
                96%
                <sup>
                  <ArrowUpShort className="icon-medium text-base-color animation-float" />
                </sup>
              </h2>
              <p className="text-dark-gray lh-28">Repeat customers</p>
            </Col>
            <Col className="last-paragraph-no-margin">
              <h2 className="fw-600 fs-50 primary-font ls-minus-3px text-dark-gray m-0">
                28+
                <sup>
                  <ArrowUpShort className="icon-medium text-base-color animation-float" />
                </sup>
              </h2>
              <p className="text-dark-gray lh-28">Years of experience</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="barber p-0 bg-base-color px-lg-16 py-lg-10 ">
        <div className="position-relative md-h-600px sm-h-500px base-color">
          <div className="position-absolute left-0px top-0px w-100 h-55 "></div>

          <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center px-lg-12 text-center">
            <h3 className="alt-font fs-50 ls-minus-1px text-white  text-center  w-80 xl-w-90 md-w-100 pb-lg-10">
              Our Services
            </h3>
            {/* Start features box item */}
            <Col className="icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-4 sm-p-14 border-radius-6px">
                <div className="position-relative ms-auto me-auto mb-25px">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-01.svg"
                    className="h-70px position-relative z-index-1 mt-35px"
                    alt=""
                  />
                  <div className="h-85px w-85px rounded-circle bg-very-light-yellow position-absolute top-0 start-50 translate-middle-x"></div>
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Haircuts & Styles
                  </span>
                  <p className="mb-10px">
                    Your choice of hairstyle is pivotal in the way.
                  </p>
                  <Button
                    variant="link"
                    className="btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span className="fs-12 lh-20 ls-0px fw-600 text-base-color d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                      Book Appointment
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-4 sm-p-14 border-radius-6px">
                <div className="position-relative ms-auto me-auto mb-25px">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-02.svg"
                    className="h-70px position-relative z-index-1 mt-35px"
                    alt=""
                  />
                  <div className="h-85px w-85px rounded-circle bg-very-light-yellow position-absolute top-0 start-50 translate-middle-x"></div>
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Shaving
                  </span>
                  <p className="mb-10px">
                    Your choice of hairstyle is pivotal in the way.
                  </p>
                  <Button
                    variant="link"
                    className="btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span className="fs-12 lh-20 ls-0px fw-600 text-base-color d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                      Book Appointment
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="icon-with-text-style-07 transition-inner-all xs-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-4 sm-p-14 border-radius-6px">
                <div className="position-relative ms-auto me-auto mb-25px">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-03.svg"
                    className="h-70px position-relative z-index-1 mt-35px"
                    alt=""
                  />
                  <div className="h-85px w-85px rounded-circle bg-very-light-yellow position-absolute top-0 start-50 translate-middle-x"></div>
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Styling
                  </span>
                  <p className="mb-10px">
                    Your choice of hairstyle is pivotal in the way.
                  </p>
                  <Button
                    variant="link"
                    className="btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span className="fs-12 lh-20 ls-0px fw-600 text-base-color d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                      Book Appointment
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="icon-with-text-style-07 transition-inner-all">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-center p-4 sm-p-14 border-radius-6px">
                <div className="position-relative ms-auto me-auto mb-25px">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-barber-icon-04.svg"
                    className="h-70px position-relative z-index-1 mt-35px"
                    alt=""
                  />
                  <div className="h-85px w-85px rounded-circle bg-very-light-yellow position-absolute top-0 start-50 translate-middle-x"></div>
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Trimming
                  </span>
                  <p className="mb-10px">
                    Your choice of hairstyle is pivotal in the way.
                  </p>
                  <Button
                    variant="link"
                    className="btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span className="fs-12 lh-20 ls-0px fw-600 text-base-color d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                      Book Appointment
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
            {/* End features box item */}
          </Row>
        </div>
      </section>
      <section
        id="pricing"
        class="barber px-4 py-lg-10 bg-very-light-yellow overlap-height"
        style={{
          backgroundImage:
            "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
        }}
      >
        <div class="container overlap-gap-section">
          <div class="row mb-1">
            <div class="col-12 text-center">
              <h2
                class="alt-font fs-2 ls-minus-2px text-base-color shadow-none"
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
          <div class="row row-cols-1 row-cols-lg-2 row-cols-md-1 sm-mb-10px xs-mb-0">
            <div class="col">
              <ul class="pricing-table-style-13">
                <li class="flex-column last-paragraph-no-margin overflow-hidden p-0">
                  <div class="w-100 ps-35px pe-35px pt-15px pb-15px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Traditional hair styling
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $10.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
                <li class="flex-column last-paragraph-no-margin overflow-hidden border border-color-light-yellow border-radius-4px p-0 mt-20px mb-20px">
                  <div class="fs-13 text-uppercase lh-38 fw-700 w-100 bg-light-yellow text-dark-gray ps-30px pe-30px xs-ps-15px xs-pe-15px">
                    Barber specials
                  </div>
                  <div class="w-100 ps-35px pe-35px pt-25px pb-25px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Classic haircut and washing
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $10.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
                <li class="flex-column last-paragraph-no-margin overflow-hidden p-0">
                  <div class="w-100 ps-35px pe-35px pt-15px pb-15px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Arranging long beard
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $08.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col">
              <ul class="pricing-table-style-13">
                <li class="flex-column last-paragraph-no-margin overflow-hidden p-0">
                  <div class="w-100 ps-35px pe-35px pt-15px pb-15px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Stylization beard
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $12.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
                <li class="flex-column last-paragraph-no-margin overflow-hidden border border-color-light-yellow border-radius-4px p-0 mt-20px mb-20px">
                  <div class="fs-13 text-uppercase lh-38 fw-700 w-100 bg-light-yellow text-dark-gray ps-30px pe-30px xs-ps-15px xs-pe-15px">
                    Barber specials
                  </div>
                  <div class="w-100 ps-35px pe-35px pt-25px pb-25px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Trimming long beard
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $11.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
                <li class="flex-column last-paragraph-no-margin overflow-hidden p-0">
                  <div class="w-100 ps-35px pe-35px pt-15px pb-15px xs-pe-15px xs-ps-15px">
                    <div class="fs-19 ls-05px d-flex align-items-baseline w-100">
                      <span class="fw-700 text-dark-gray ls-minus-05px">
                        Beard and hair washing
                      </span>
                      <div class="text-dark-gray ms-auto flex-shrink-0">
                        $10.00
                      </div>
                    </div>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="barber background-position-left-top bg-white text-center  py-lg-10 md-pt-0">
        <Container>
          <div class="row mb-1">
            <div class="col-12 text-center">
              <h2
                class="alt-font fs-2 ls-minus-2px text-base-color shadow-none"
                data-shadow-animation="true"
                data-animation-delay="700"
              >
                Our{" "}
                <span class="text-highlight">
                  Gallery
                  <span class="bg-base-color h-2px bottom-8px separator-animation"></span>
                </span>
              </h2>
            </div>
          </div>
          <Row className="mb-60px md-mb-40px">
            <Col>
              <Row className="gallery-wrapper gutter-extra-large mb-lg-10 px-lg-10">
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-04.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-04.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-08.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-08.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-06.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-06.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="px-lg-10">
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-07.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://gfa-tech.com/dimp-template-images/images/demo-barber-home-07.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://dimpified.com/assets/talk-to-customer-C8_woj4o.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://dimpified.com/assets/talk-to-customer-C8_woj4o.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="transition-inner-all z-index-1">
                  <div className="atropos atropos-rotate-touch">
                    <div className="gallery-box">
                      <a
                        href="https://dimpified.com/assets/barber-img-DxM0wS3O.jpg"
                        data-group="lightbox-group-gallery-item-2"
                        title="Lightbox gallery image title"
                      >
                        <div className="position-relative gallery-image bg-dark-gray border-radius-6px overflow-hidden">
                          <img
                            src="https://dimpified.com/assets/barber-img-DxM0wS3O.jpg"
                            alt=""
                            height={400}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="testimonials"
        className="barber bg-very-light-yellow primary-font py-3 py-lg-10 pb-5 md-pb-8 overlap-height overflow-hidden"
        style={{
          backgroundImage:
            "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
        }}
      >
        <Container className="overlap-gap-section">
          <Row className="align-items-center justify-content-center">
            <Col
              xl={6}
              lg={6}
              className="position-relative pe-xl-0 text-center text-xl-start lg-mb-10px"
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-dark-gray d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                Customer Testionials
              </span>
              <h2 className="h1 alt-font fs-50 fw-700 ls-minus-1px text-dark-gray mb-10px w-80 lg-w-100">
                What our customers are saying
                <span className="text-base-color">.</span>
              </h2>
            </Col>
            <Col xl={6} lg={6} className="overflow-hidden">
              <div className="">
                <Carousel className="">
                  {/* Review item */}
                  <Carousel.Item className="review-style-06">
                    <div className="d-flex border rounded rounded-md px-3 px-lg-6 justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px">
                      <div className="mb-20px d-flex align-items-center">
                        <img
                          className="rounded-circle w-90px h-90px me-20px"
                          src="https://craftohtml.themezaa.com/images//avtar-27.jpg"
                          alt="Reviewer"
                        />
                        <div className="d-inline-block align-middle">
                          <div className="fs-22 alt-font fw-500 text-dark-gray">
                            Herman Miller
                          </div>
                        </div>
                        <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto">
                          <StarFill className="me-5px" />
                          5.0
                        </div>
                      </div>
                      <p>
                        We help our clients succeed by creating brand
                        identities, digital experiences, and print materials
                        that communicate.
                      </p>
                    </div>
                  </Carousel.Item>
                  {/* End review item */}
                  {/* Review item */}
                  <Carousel.Item className="review-style-06">
                    <div className="d-flex border rounded rounded-md px-3 px-lg-6 justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px">
                      <div className="mb-20px d-flex align-items-center">
                        <img
                          className="rounded-circle w-90px h-90px me-20px"
                          src="https://craftohtml.themezaa.com/images//avtar-28.jpg"
                          alt="Reviewer"
                        />
                        <div className="d-inline-block align-middle">
                          <div className="fs-22 alt-font fw-500 text-dark-gray">
                            Alexander Harad
                          </div>
                        </div>
                        <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto">
                          <StarFill className="me-5px" />
                          5.0
                        </div>
                      </div>
                      <p>
                        They have provided superior quality content marketing
                        services. Very satisfied by choosing them. Thank you!
                      </p>
                    </div>
                  </Carousel.Item>
                  {/* End review item */}
                  {/* Review item */}
                  <Carousel.Item className="review-style-06">
                    <Card className="d-flex border rounded rounded-md px-3 px-lg-6 justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px">
                      <div className="mb-20px d-flex align-items-center">
                        <img
                          className="rounded-circle w-90px h-90px me-20px"
                          src="https://craftohtml.themezaa.com/images//avtar-29.jpg"
                          alt="Reviewer"
                        />
                        <div className="d-inline-block align-middle">
                          <div className="fs-22 alt-font fw-500 text-dark-gray">
                            Shoko Mugikura
                          </div>
                        </div>
                        <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto">
                          <StarFill className="me-5px" />
                          5.0
                        </div>
                      </div>
                      <p>
                        We help our clients succeed by creating brand
                        identities, digital experiences, and print materials
                        that communicate.
                      </p>
                    </Card>
                  </Carousel.Item>
                  {/* End review item */}
                  {/* Review item */}
                  <Carousel.Item className="review-style-06">
                    <Card className="d-flex border rounded rounded-md px-3 px-lg-6 justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px">
                      <div className="mb-20px d-flex align-items-center">
                        <img
                          className="rounded-circle w-90px h-90px me-20px"
                          src="https://craftohtml.themezaa.com/images//avtar-30.jpg"
                          alt="Reviewer"
                        />
                        <div className="d-inline-block align-middle">
                          <div className="fs-22 alt-font fw-500 text-dark-gray">
                            Jacob Kalling
                          </div>
                        </div>
                        <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto">
                          <StarFill className="me-5px" />
                          5.0
                        </div>
                      </div>
                      <p>
                        We help our clients succeed by creating brand
                        identities, digital experiences, and print materials
                        that communicate.
                      </p>
                    </Card>
                  </Carousel.Item>
                  {/* End review item */}
                </Carousel>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <div className="text-center bg-base-color text-white fs-16 lh-36 border-radius-30px d-inline-block ps-20px pe-20px align-middle me-10px sm-me-0 sm-mb-10px">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
              </div>
              <div className="fs-30 fw-500 alt-font text-dark-gray d-inline-block align-middle ls-0px">
                Rated 4.8 out of 5.0 based on customers'{" "}
                <span className="fw-700 text-decoration-line-bottom text-dark-gray">
                  1058 reviews!
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        id="instructors"
        className="barber primary-font bg-white px-4"
        style={{ height: "auto" }}
      >
        <Container>
          <Row className="align-items-end mb-6">
            <Col xl={7} lg={6} md={9} className="text-center text-lg-start">
              <div className="d-inline-block mb-3">
                <div className="d-flex align-items-center">
                  <div>
                  <span className="fs-19 lh-20 ls-0px fw-600 text-base-color d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                      Experienced Barbers
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-base-color fs-50 alt-font fw-600 mb-3">
                We have amazing stylist
              </h2>
            </Col>
            <Col xl={5} lg={6} md={10} className="text-center text-lg-start">
              <p className="text-dark primary-font">
                We understand your loyalty to a specific barber. You are free to
                select whoever you want to style your hair.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
            {[
              {
                name: "Jessica Dover",
                role: "Director",
                img: "https://gfa-tech.com/dimp-template-images/images/team-08.jpg",
              },
              {
                name: "Jeremy Dupont",
                role: "Researcher",
                img: "https://gfa-tech.com/dimp-template-images/images/team-09.jpg",
              },
              {
                name: "Johncy Parker",
                role: "English Teacher",
                img: "https://gfa-tech.com/dimp-template-images/images/team-10.jpg",
              },
              {
                name: "Matthew Taylor",
                role: "Design Teacher",
                img: "https://gfa-tech.com/dimp-template-images/images/team-11.jpg",
              },
            ].map((member, index) => (
              <Col key={index} className="text-center mb-4">
                <Card className="border-0 overflow-hidden">
                  <Card.Img variant="top" src={member.img} alt={member.name} />
                  <Card.Body className="bg-white text-dark text-center p-3">
                    <Card.Title className="fs-3">{member.name}</Card.Title>
                    <Card.Text className="fs-5">{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        className="barber px-6 position-relative z-index-1 pb-0"
        style={{
          backgroundImage:
            "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
        }}
      >
        <div className="d-none d-md-flex mb-1">
          <a
            href="#down-section"
            className="section-link absolute-middle-center top-0"
          ></a>
        </div>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={6} className="pb-lg-10 sm-pb-40px">
              <span className="primary-font fs-16 text-uppercase text-dark-gray fw-700 mb-10px ls-1px d-inline-block">
                Book your appointment
              </span>
              <h2 className="alt-font fs-1 fw-400 text-base-color w-80 lg-w-100 mb-40px sm-mb-30px">
                We are always at your service
              </h2>
              <Row className="row-cols-1 row-cols-sm-2 mb-30px xs-mb-25px">
                <Col className="last-paragraph-no-margin xs-mb-25px">
                  <span className="primary-font fs-18 fw-600 text-dark-gray">
                    Visit our barber salon
                  </span>
                  <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                  <p className="primary-font w-75 lg-w-90">Ibara, Abeokuta</p>
                </Col>
                <Col>
                  <span className="primary-font fs-18 fw-600 text-dark-gray">
                    Book an appointment
                  </span>
                  <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                  <div className="w-100 d-block">
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                    <br />
                    <a href="mailto:booking@yourdomain.com">
                      booking@yourdomain.com
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className="row-cols-1 row-cols-sm-2">
                <Col className="last-paragraph-no-margin xs-mb-25px">
                  <span className="primary-font fs-18 fw-600 text-dark-gray">
                    Let's talk
                  </span>
                  <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                  <div className="w-100 d-block">
                    <span className="primary-font d-block">
                      <span className="primary-font fw-600 text-dark-gray">
                        Phone:
                      </span>{" "}
                      <a href="tel:1800222000" className="text-medium-gray">
                        1-800-222-000
                      </a>
                    </span>
                    <span className="primary-font d-block">
                      <span className="primary-font fw-600 text-dark-gray">
                        Fax:
                      </span>{" "}
                      1-800-222-002
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
              className="offset-lg-1 align-self-end contact-form-style-03 sm-mb-50px pb-lg-16"
            >
              <div className="bg-dark-gray box-shadow-double-large p-5 lg-p-10 border-radius-10px position-relative overflow-hidden">
                <h2 className="alt-font fs-1 text-white xs-mb-15px fancy-text-style-4 ls-minus-1px ps-5">
                  Book Now!
                </h2>
                <Form
                  action="email-templates/contact-form.php"
                  method="post"
                  className="px-5"
                >
                  <Form.Group className="position-relative mb-10px">
                    <span className="primary-font form-icon">
                      <Person className="icon-extra-medium" />
                    </span>
                    <Form.Control
                      className="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray"
                      type="text"
                      name="name"
                      placeholder="Enter your name*"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="position-relative mb-10px">
                    <span className="primary-font form-icon">
                      <Envelope className="icon-extra-medium" />
                    </span>
                    <Form.Control
                      className="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray"
                      type="email"
                      name="email"
                      placeholder="Enter your email address*"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="position-relative mb-10px">
                    <span className="primary-font form-icon">
                      <ChatSquareDots className="icon-extra-medium" />
                    </span>
                    <Form.Control
                      as="textarea"
                      className="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray"
                      name="service"
                      placeholder="Which service would you like to book?"
                      rows={2}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="position-relative mb-12">
                    <Form.Control
                      as="textarea"
                      className="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray"
                      name="message"
                      placeholder="Any special requests or notes"
                      rows={4}
                    />
                  </Form.Group>
                  <Button
                    className="btn btn-medium btn-white btn-box-shadow mt-0px fw-700 submit btn-round-edge"
                    type="submit"
                  >
                    Book Appointment
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="barber px-4 bg-dark-gray  position-relative">
        <Container className="footer-dark text-center text-sm-start position-relative">
          <Row className="align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px g-0">
            <Col xl={7} className="ps-0 text-center text-xl-start lg-mb-10px">
              <ul className="footer-navbar fs-16 lh-normal">
                <li className="nav-item active">
                  <a href="#home" className="nav-link alt-font ps-0">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link alt-font">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link alt-font">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#instructors" className="nav-link alt-font">
                    Instructors
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials" className="nav-link alt-font">
                    Testimonials
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#contact" className="nav-link alt-font">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              xl={5}
              className="last-paragraph-no-margin text-center text-xl-end"
            >
              <p className="fs-16">
                © 2024 Proudly Powered by{" "}
                <a
                  href="https://www.dimpified.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-line-bottom"
                >
                  DIMP
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default BarberTemplate3;
