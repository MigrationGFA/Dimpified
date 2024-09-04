import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
} from "react-bootstrap-icons";

const SpaTemplate = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default SpaTemplate;

// Navbar Component
const Navbar = () => (
  <BootstrapNavbar
    bg="transparent"
    variant="transparent"
    expand="lg"
    className="spa-link px-lg-10 py-lg-3"
  >
    <Container>
      <BootstrapNavbar.Brand
        className="fw-bold text-dark d-flex align-items-center"
        href="#home"
      >
        <img
          src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-logo-white.png"
          alt="Icon"
          style={{ marginLeft: "10px", height: "24px" }} // Adjust the margin and height as needed
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav" className=" spa-link">
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
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);

// Hero Section
const Hero = () => (
  <section className="spa p-0 bg-dark-gray">
    <div className="position-relative full-screen  md-h-600px sm-h-500px base-color">
      <div
        className="position-absolute left-0px top-0px w-100 h-100 "
        style={{
          backgroundImage: `url(https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-slider-01.jpg)`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></div>
      <div className="opacity-light bg-gradient-nero-grey-brown"></div>
      <Container className="h-100">
        <Row className="align-items-center h-100 justify-content-center">
          <Col
            xl={8}
            lg={9}
            className="position-relative text-white text-center"
          >
            <span className="fs-15 d-block mb-15px ls-4px text-uppercase">
              Unforgettable treat
            </span>
            <div className="alt-font fs-80 sm-fs-60 xs-fs-50 mb-40px w-80 lg-w-100 md-w-90 sm-w-100 mx-auto sm-mb-35px anime-text ls-minus-2px">
              Relax your mind, soul, and body
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
        </Row>
      </Container>
    </div>
  </section>
);

// About Section
const About = () => (
  <Fragment>
    <section
      className="spa background-repeat"
      style={{
        backgroundImage:
          "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
      }}
    >
      <Container>
        <Row className="align-items-center mb-10 md-mb-17 xs-mb-25">
          <Col xl={5} lg={6} className="md-mb-70px sm-mb-45px">
            <span className="fs-15 mb-15px text-base-color fw-500 d-block text-uppercase ls-2px">
              About Studio
            </span>
            <h3 className="alt-font fs-50 ls-minus-1px  text-dark-gray w-80 xl-w-90 md-w-100">
              Relax at the luxury spa massage and therapy studio.
            </h3>
            <p className="w-80 primary-font lh-2 md-w-100 mb-40px">
              A design-led approach guides the team, implementing practices,
              products, and services that are thoughtful and environmentally
              sound. Family of professionals that create intelligent designs
              that help the face of hospitality.
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
          <Col
            xl={6}
            lg={5}
            className="position-relative offset-lg-1 offset-md-2"
          >
            <span className="position-absolute alt-font fs-75 left-20px top-80px text-dark-gray fw-600 z-index-1 ls-minus-4px lg-top-40px">
              <span className="fs-15 alt-font d-table lh-16 text-uppercase text-medium-gray fw-500 ls-1px">
                Started in
              </span>
              1995
            </span>
            <div className="w-80 overflow-hidden position-relative md-w-90 border-radius-6px float-end">
              <img
                className="w-100"
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-01.jpg"
                alt=""
              />
            </div>
            <div className="position-absolute left-minus-70px bottom-minus-30px w-60 overflow-hidden md-left-minus-100px sm-left-15px">
              <img
                className="w-100 border-radius-6px"
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-02.jpg"
                alt=""
              />
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
  </Fragment>
);

// Services Section
const Services = () => (
  <section
    className="spa background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1"
    style={{
      backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')`,
    }}
  >
    <div className="position-absolute left-minus-100px top-50 z-index-minus-1 d-none d-lg-inline-block">
      <img
        src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-bg-img-03.png"
        alt=""
      />
    </div>
    <Container className="overlap-gap-section">
      <Row className="justify-content-center mb-2">
        <Col lg={6} md={12} className="text-center">
          <span className="fs-15 mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">
            Luxury services
          </span>
          <h3 className="alt-font fs-40 ls-minus-1px text-dark-gray w-65 xl-w-80 sm-w-100 mx-auto">
            Explore our spa and body services
          </h3>
        </Col>
      </Row>
      <Row className="mb-5 xs-mb-15px">
        <Col lg={6}>
          <Row className="g-0 services-box-style-02 border-radius-6px overflow-hidden hover-box dark-hover">
            <Col
              lg={6}
              className="position-relative bg-very-light-gray p-10 xxl-p-6 xs-p-10"
            >
              <div className="services-box-icon mb-65px position-relative z-index-9 lg-mb-30px">
                <img
                  className="w-75px lg-w-65px"
                  src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-icon-01.png"
                  alt=""
                />
              </div>
              <div className="services-box-content last-paragraph-no-margin position-relative z-index-9">
                <span className="d-inline-block alt-font text-dark-gray fs-24 mb-5px">
                  Beauty
                </span>
                <p className="text-light-opacity lh-30">
                  Enhance your beauty with our specialized treatments.
                </p>
              </div>
              <div className="box-overlay bg-dark-gray"></div>
            </Col>
            <Col lg={6} className="services-box-img overflow-hidden">
              <div
                className="h-100 cover-background position-relative xs-h-300px"
                style={{
                  backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-03.jpg')`,
                }}
              >
                <span className="position-absolute left-minus-30px bottom-50px fs-100 lg-fs-80 xs-fs-90 fw-600 text-very-light-gray xl-bottom-25px md-left-minus-20px">
                  01
                </span>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={6}>
          <Row className="g-0 services-box-style-02 border-radius-6px overflow-hidden hover-box dark-hover">
            <Col
              lg={6}
              className="position-relative bg-very-light-gray p-10 xxl-p-6 xs-p-10"
            >
              <div className="services-box-icon mb-65px position-relative z-index-9 lg-mb-30px">
                <img
                  className="w-75px lg-w-65px"
                  src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-icon-02.png"
                  alt=""
                />
              </div>
              <div className="services-box-content last-paragraph-no-margin position-relative z-index-9">
                <span className="d-inline-block alt-font text-dark-gray fs-24 mb-5px">
                  Therapy
                </span>
                <p className="text-light-opacity lh-30">
                  Relax and rejuvenate with our expert therapy sessions.
                </p>
              </div>
              <div className="box-overlay bg-dark-gray"></div>
            </Col>
            <Col lg={6} className="services-box-img overflow-hidden">
              <div
                className="h-100 cover-background position-relative xs-h-300px"
                style={{
                  backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-04.jpg')`,
                }}
              >
                <span className="position-absolute left-minus-30px bottom-50px fs-100 lg-fs-80 xs-fs-90 fw-600 text-very-light-gray xl-bottom-25px md-left-minus-20px">
                  02
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={6}>
          <Row className="g-0 services-box-style-02 border-radius-6px overflow-hidden hover-box dark-hover">
            <Col
              lg={6}
              className="position-relative bg-very-light-gray p-10 xxl-p-6 xs-p-10"
            >
              <div className="services-box-icon mb-65px position-relative z-index-9 lg-mb-30px">
                <img
                  className="w-75px lg-w-65px"
                  src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-icon-02.png"
                  alt=""
                />
              </div>
              <div className="services-box-content last-paragraph-no-margin position-relative z-index-9">
                <span className="d-inline-block alt-font text-dark-gray fs-24 mb-5px">
                  Therapy
                </span>
                <p className="text-light-opacity lh-30">
                  Relax and rejuvenate with our expert therapy sessions.
                </p>
              </div>
              <div className="box-overlay bg-dark-gray"></div>
            </Col>
            <Col lg={6} className="services-box-img overflow-hidden">
              <div
                className="h-100 cover-background position-relative xs-h-300px"
                style={{
                  backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-04.jpg')`,
                }}
              >
                <span className="position-absolute left-minus-30px bottom-50px fs-100 lg-fs-80 xs-fs-90 fw-600 text-very-light-gray xl-bottom-25px md-left-minus-20px">
                  03
                </span>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={6}>
          <Row className="g-0 services-box-style-02 border-radius-6px overflow-hidden hover-box dark-hover">
            <Col
              lg={6}
              className="position-relative bg-very-light-gray p-10 xxl-p-6 xs-p-10"
            >
              <div className="services-box-icon mb-65px position-relative z-index-9 lg-mb-30px">
                <img
                  className="w-75px lg-w-65px"
                  src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-icon-03.png"
                  alt=""
                />
              </div>
              <div className="services-box-content last-paragraph-no-margin position-relative z-index-9">
                <span className="d-inline-block alt-font text-dark-gray fs-24 mb-5px">
                  Massage
                </span>
                <p className="text-light-opacity lh-30">
                  Experience deep relaxation with our professional massages.
                </p>
              </div>
              <div className="box-overlay bg-dark-gray"></div>
            </Col>
            <Col lg={6} className="services-box-img overflow-hidden">
              <div
                className="h-100 cover-background position-relative xs-h-300px"
                style={{
                  backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-05.jpg')`,
                }}
              >
                <span className="position-absolute left-minus-30px bottom-50px fs-100 lg-fs-80 xs-fs-90 fw-600 text-very-light-gray xl-bottom-25px md-left-minus-20px">
                  04
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

const Pricing = () => (
  <section
    className="spa background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1"
    style={{
      backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')`,
    }}
  >
    <div className="position-absolute left-minus-100px top-50 z-index-minus-1 d-none d-lg-inline-block">
      <img
        src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-bg-img-03.png"
        alt=""
      />
    </div>

    <Row className="justify-content-center">
      <Col lg={10}>
        <Row className="pricing-table-style-12 pe-15px md-pe-0">
          <Col lg={6}>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-06.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Makeup & massage
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>43</span>
                  </div>
                </div>
                <p>50 Minute relaxation massage.</p>
              </div>
            </li>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-07.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Relaxing head
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>45</span>
                  </div>
                </div>
                <p>One of the best ways to relax your head.</p>
              </div>
            </li>
          </Col>
          <Col lg={6}>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-08.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Deep tissue
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>59</span>
                  </div>
                </div>
                <p>Deep tissue massage helps relieve pain.</p>
              </div>
            </li>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-09.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Hot Stone Massage
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>53</span>
                  </div>
                </div>
                <p>A unique massage using warm volcanic stones.</p>
              </div>
            </li>
          </Col>
          <Col lg={6}>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-10.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Warm Candle
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>51</span>
                  </div>
                </div>
                <p>A soothing massage with aromatic candle wax.</p>
              </div>
            </li>
          </Col>
          <Col lg={6}>
            <li className="last-paragraph-no-margin">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-11.jpg"
                class="w-120px border-radius-100"
                alt=""
              />
              <div className="ms-30px xs-ms-0 flex-grow-1">
                <div className="d-flex align-items-center w-120 fs-18">
                  <span className="fs-22 alt-font text-dark-gray">
                    Warm Candle
                  </span>
                  <div className="divider-style-03 divider-style-03-02 border-color-light-gray flex-grow-1 ms-20px me-20px"></div>
                  <div className="ms-auto fs-26 alt-font text-dark-gray">
                    <CurrencyDollar />
                    <span>51</span>
                  </div>
                </div>
                <p>A soothing massage with aromatic candle wax.</p>
              </div>
            </li>
          </Col>
        </Row>
      </Col>
    </Row>
  </section>
);
// Gallery Section
const Gallery = () => (
  <Fragment>
    <section
      className="spa background-repeat border-top border-color-light-gray position-relative overlap-height z-index-1"
      style={{
        backgroundImage:
          "url(https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg)",
      }}
    >
      <Container className="overlap-gap-section">
        <Row className="align-items-center position-relative justify-content-center justify-content-lg-start">
          <Col
            lg={5}
            md={11}
            className="position-relative offset-lg-1 md-mb-35px"
          >
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-12.jpg"
              className="w-100 border-radius-4px"
              alt="Spa Therapy"
            />
          </Col>
          <Col xl={5} lg={6} md={11} className="ps-8 md-ps-15px">
            <span className="fs-15 lg-10px mb-5px text-base-color fw-500 d-block text-uppercase ls-2px">
              Benefits of spa
            </span>
            <h3 className="alt-font fs-50 ls-minus-1px text-dark-gray">
              100% natural and organic products.
            </h3>
            <p className="w-80 primary-font xl-w-90 md-w-100 mb-10px">
              Everybody is looking for places to relax and gain more energy.
              Revitalize your senses and refresh your mind.
            </p>
            <ul className="p-0 list-style-01 fs-20 alt-font mb-25px">
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">
                Increased happiness
              </li>
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">
                Promotes radiant skin
              </li>
              <li className="border-color-light-gray pt-15px pb-15px text-dark-gray">
                Promotes a better sleep
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    <section
      className="spa background-repeat p-0"
      style={{
        backgroundImage:
          "url(https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg)",
      }}
    >
      <Container fluid className="p-0">
        <Row className="align-items-center g-0 justify-content-center">
          <Col>
            <div className="divider-style-03 divider-style-03-01 border-color-light-gray" />
          </Col>
          <Col xs={5} lg={2} sm={3} className="text-center position-relative">
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-13.png"
              className="animation-rotation"
              alt="Spa Therapy Icon"
            />
            <div className="absolute-middle-center lg-w-75">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-14.png"
                alt="Spa Therapy Decoration"
              />
            </div>
          </Col>
          <Col>
            <div className="divider-style-03 divider-style-03-01 border-color-light-gray" />
          </Col>
        </Row>
      </Container>
    </section>
  </Fragment>
);

// Testimonials Section
const Testimonials = () => (
  <section
    className="spa background-repeat overlap-height position-relative pt-4 md-pt-8"
    style={{
      backgroundImage:
        "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
    }}
  >
    <div
      className="position-absolute left-minus-100px top-50 d-none d-lg-inline-block"
      style={{ transform: "translateY(-50px)" }}
    >
      <img
        src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-bg-img-03.png"
        alt=""
      />
    </div>
    <Container className="overlap-gap-section">
      <Row className="justify-content-center mb-6 md-mb-8 xs-mb-40px">
        <Col
          xl={10}
          className="testimonials-style-11 position-relative ps-15 pe-15 sm-ps-15px sm-pe-15px text-center"
        >
          <Carousel
            interval={2000}
            nextIcon={<ArrowRight />}
            prevIcon={<ArrowLeft />}
            className="slider-custom-text"
          >
            <Carousel.Item>
              <div className="text-center">
                <h6 className="alt-font lh-40  fs-30 text-dark-gray mb-20px">
                  The wonderful services you offer locally are great for our
                  community. People are tired of having to travel out of town
                  for things.
                </h6>
                <span className="fs-15 text-base-color fw-500 d-block text-uppercase ls-2px">
                  Mojisola R.
                </span>
                <span className="fs-14 lh-20 text-dark-gray fw-500 text-uppercase d-block ls-05px">
                  Relax Massage
                </span>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <h6 className="alt-font lh-40 fs-30  text-dark-gray mb-20px">
                  This place is beautiful. The outside, the inside, staff
                  communication is all on point! The staff is very friendly,
                  informative, and patient.
                </h6>
                <span className="fs-15 text-base-color fw-500 d-block text-uppercase ls-2px">
                  Olamide A.
                </span>
                <span className="fs-14 lh-20 text-dark-gray fw-500 text-uppercase d-block ls-05px">
                  Relax Massage
                </span>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <h6 className="alt-font lh-40 fs-30  text-dark-gray mb-20px">
                  The ambiance as soon as you enter puts you at ease
                  immediately. The staff is so sweet and generous, and the
                  services they offer are to die for!
                </h6>
                <span className="fs-15 text-base-color fw-500 d-block text-uppercase ls-2px">
                  Adedamola s.
                </span>
                <span className="fs-14 lh-20 text-dark-gray fw-500 text-uppercase d-block ls-05px">
                  Scalp Massage
                </span>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="row-cols-2 row-cols-lg-6 row-cols-sm-3 text-center justify-content-center clients-style-05">
        {/* start client item */}
        <Col className="md-mb-30px">
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-01.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
        {/* start client item */}
        <Col className="md-mb-30px">
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-02.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
        {/* start client item */}
        <Col className="md-mb-30px">
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-03.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
        {/* start client item */}
        <Col className="xs-mb-30px">
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-04.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
        {/* start client item */}
        <Col>
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-05.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
        {/* start client item */}
        <Col>
          <div className="client-box">
            <a href="#">
              <img
                src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-client-06.png"
                className="h-110px"
                alt=""
              />
            </a>
          </div>
        </Col>
        {/* end client item */}
      </Row>
    </Container>
  </section>
);

// Contact Section
const Contact = () => (
  <section
    className="spa px-6 position-relative z-index-1 pb-0"
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
        <Col lg={6} className="pb-7 sm-pb-40px">
          <span className="primary-font fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">
            Book your appointment
          </span>
          <h2 className="alt-font fs-1 fw-400 text-dark-gray ls-minus-1px w-80 lg-w-100 mb-40px sm-mb-30px">
            We would love to pamper you.
          </h2>
          <Row className="row-cols-1 row-cols-sm-2 mb-30px xs-mb-25px">
            <Col className="last-paragraph-no-margin xs-mb-25px">
              <span className="primary-font fs-18 fw-600 text-dark-gray">
                Visit our beauty salon
              </span>
              <div className="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
              <p className="primary-font w-75 lg-w-90">
                401 Broadway, 24th Floor New York, NY 10013
              </p>
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
          className="offset-lg-1 align-self-end contact-form-style-03 sm-mb-50px"
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
              <div className="form-results mt-20px d-none"></div>
            </Form>
            <div
              className="w-200px h-200px xs-w-150px xs-h-150px bg-white border-radius-100 bg-gradient-solitude-blue-fair-pink d-flex align-items-center justify-content-center position-absolute right-minus-30px xs-right-minus-20px bottom-minus-60px xs-bottom-minus-40px"
              style={{
                backgroundImage: "url(images/demo-beauty-salon-contact-01.png)",
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
);

// Footer Section
const Footer = () => (
  <footer
    className="spa primary-font half-footer pb-45px border-top border-color-light-gray background-repeat"
    style={{
      backgroundImage:
        "url('https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-bg-01.jpg')",
    }}
  >
    <Container>
      <div className="overlap-section position-absolute left-0px right-0px text-center d-none d-md-inline-block appear anime-child anime-complete">
        <Image
          src="https://gfa-tech.com/dimp-template-images/images/demo-spa-salon-home-15.png"
          alt="Spa Salon"
          className="lg-w-20"
        />
      </div>
      <Row>
        <Col
          lg={3}
          md={4}
          sm={6}
          className="last-paragraph-no-margin mt-50px me-auto z-index-1 text-center text-sm-start xs-mb-20px"
        >
          <span className="fs-20 fw-500 text-dark-gray d-block mb-5px">
            Studio Location
          </span>
          <p className="w-100">
            401 Broadway, 24th Floor
            <br />
            New York, NY 10013.
          </p>
        </Col>
        <Col
          lg={3}
          md={4}
          sm={6}
          className="last-paragraph-no-margin text-center mt-50px text-sm-end z-index-1"
        >
          <span className="fs-20 fw-500 text-dark-gray d-block mb-5px">
            How Can We Help?
          </span>
          <a href="mailto:info@example.com">
            <span>info@example.com</span>
          </a>
          <br />
          <a href="mailto:support@example.com">
            <span>support@example.com</span>
          </a>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center mt-80px mb-10px md-mb-20px">
        <Col className="d-none d-md-flex">
          <div className="divider-style-03 divider-style-03-01 border-color-light-gray"></div>
        </Col>
        <Col
          xl={4}
          lg={5}
          md={7}
          className="text-center elements-social social-icon-style-04"
        >
          <ul className="large-icon dark mb-0">
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                className="dribbble"
                href="http://www.dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dribbble />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                className="linkedin"
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </Col>
        <Col className="d-none d-md-flex">
          <div className="divider-style-03 divider-style-03-01 border-color-light-gray"></div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col
          md={6}
          className="last-paragraph-no-margin text-center text-md-start sm-mb-10px"
        >
          <p>2024 All rights reserved.</p>
        </Col>
        <Col
          md={6}
          className="text-center text-md-end last-paragraph-no-margin"
        >
          <p>
            Proudly Powered by{" "}
            <a
              href="https://www.dimpified.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-line-bottom text-dark-gray fw-500"
            >
              DIMP
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);
