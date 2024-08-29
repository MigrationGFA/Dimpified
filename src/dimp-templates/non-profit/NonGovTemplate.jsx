import React, { Fragment } from "react";

import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Navbar as BootstrapNavbar,
  Nav,
  Carousel,
  ButtonGroup,
} from "react-bootstrap";

import {
  People,
  Globe,
  Award,
  ArrowRightCircle,
  //   CheckCircle,
  //   XCircle,
  //   ArrowRight,
  ChatSquareDots,
  CalendarCheck,
  EmojiSmile,
  Telephone,
  Envelope,
  Journals,
  //   Handshake,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  Check,
  X,
  ArrowRight,
} from "react-bootstrap-icons";

const NonGovTemplate = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Membership />
      <Events />

      <Blog />
      {/* <MiniCTA /> */}
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default NonGovTemplate;

// Navbar Component
const Navbar = () => (
  <BootstrapNavbar
    bg="transparent"
    variant="transparent"
    expand="lg"
    className="px-lg-10 py-lg-3"
  >
    <Container>
      <BootstrapNavbar.Brand
        className="fw-bold text-white d-flex align-items-center col-lg-2"
        href="#home"
      >
        <img
          src="https://gfa-tech.com/testnet/nism/images/nism-logo.jpg"
          style={{ marginLeft: "10px", height: "40px" }} // Adjust the margin and height as needed
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto fs-4 col-lg-8">
          <Nav.Link
            className="text-white"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#about"
          >
            About
          </Nav.Link>
          <Nav.Link
            className="text-white"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#membership"
          >
            Membership
          </Nav.Link>
          <Nav.Link
            className="text-white"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#events"
          >
            Events
          </Nav.Link>
          <Nav.Link
            className="text-white"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#blog"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            className="text-white"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);
const Hero = () => (
  <section className="nism " id="home">
    <div class="full-screen  md-h-600px sm-h-500px swiper-number-pagination-style-02 lg-no-parallax">
      <div
        className="cover-background position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url('https://gfa-tech.com/testnet/nism/images/hero-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Ensure it covers the full viewport height
        }}
      >
        <div className="px-4 opacity-light bg-dark-gray">
          <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
              <Col
                md={12}
                className="col-md-12 position-relative text-white d-flex flex-column justify-content-center h-100"
              >
                <div className="alt-font fs-75 xs-fs-50 lh-100 mb-2 xs-mb-35px ls-minus-4px xs-ls-minus-2px text-shadow-double-large transform-origin-right">
                  <span>
                    Elevate Your <br />
                    Professional Journey
                    <br /> with
                  </span>
                  <span className="fw-600">{""}NISM</span>
                </div>
                <div className="fs-20 mb-30px">
                  The Premier Network for Nigerian Professionals in London
                </div>
                <div>
                  <Button
                    href="membership"
                    variant="primary"
                    className="btn-base-color btn-box-shadow btn-large btn-round-edge"
                  >
                    Join Now <ArrowRightCircle className="ms-2" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  </section>
);
// About Section
const About = () => (
  <section className="nism px-4 position-relative overflow-hidden" id="about">
    <div
      id="particles-01"
      className="position-absolute h-100 top-0 left-0 z-index-minus-1"
    ></div>
    <Container>
      <Row className="align-items-center mt-4 lg-mt-2 px-4 mb-50px lg-mb-0">
        <Col lg={6} className="position-relative md-mb-70px">
          <div className="w-75 overflow-hidden position-relative xs-w-80 border-radius-4px">
            <img
              className="w-100"
              src="https://gfa-tech.com/testnet/nism/images/man.jpg"
              alt="Nigerian Professional"
            />
          </div>
          <div className="border-radius-4px position-absolute right-minus-15px md-right-15px bottom-minus-50px w-55 md-w-50 overflow-hidden">
            <img
              className="w-100"
              src="https://gfa-tech.com/testnet/nism/images/woman.jpg"
              alt="Nigerian Professional"
            />
          </div>
        </Col>
        <Col lg={5} className="offset-lg-1 md-mt-30px px-4">
          <span className="fs-20 mb-15px text-dark-gray fw-600 d-inline-block">
            About NISM
          </span>
          <h2 className="alt-font fs-60 fw-600 text-dark-gray ls-minus-2px mb-25px">
            Networking Nigerians in London
          </h2>
          <p className="w-80 fs-15 lg-w-100 mb-35px sm-mb-25px primary-font">
            Founded in 2008, NISM is an association of Nigerian professionals
            based in the City of London. We’ve grown to 2,000 members, including
            high-ranking professionals who lead or work in top organizations in
            London and worldwide. Our community is proud of the successful and
            talented Nigerians who make up our association.
          </p>
          <div className="d-inline-block">
            <Button
              href="membership"
              className="btn primary-font btn-large btn-dark-gray btn-box-shadow me-25px btn-round-edge"
            >
              Join Us
            </Button>
            <Button
              href="about"
              className="btn btn-link primary-font btn-large text-dark-gray xs-mt-15px xs-mb-15px"
            >
              More About NISM
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 px-4 primary-font justify-content-center mt-lg-16 mt-4 ">
        <Col className="icon-with-text-style-01 mb-50px sm-mb-40px">
          <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
            <div className="feature-box-icon">
              <People size={50} />
            </div>
            <div className="feature-box-content">
              <span className="d-inline-block alt-font text-dark-gray fw-600 mb-5px fs-20">
                Vision
              </span>
              <p className="w-90 md-w-100">
                To expand global influence through membership growth and
                industry partnerships, focusing on impactful contributions
                within the professional community.
              </p>
            </div>
          </div>
        </Col>
        <Col className="icon-with-text-style-01 mb-50px sm-mb-40px">
          <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
            <div className="feature-box-icon">
              <Globe size={50} />
            </div>
            <div className="feature-box-content">
              <span className="d-inline-block alt-font text-dark-gray fw-600 mb-5px fs-20">
                Mission
              </span>
              <p className="w-90 md-w-100">
                To promote Nigerian cultural heritage and excellence worldwide,
                inspiring future leaders with integrity and innovation.
              </p>
            </div>
          </div>
        </Col>
        <Col className="icon-with-text-style-01 mb-50px sm-mb-40px">
          <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
            <div className="feature-box-icon">
              <Award size={50} />
            </div>
            <div className="feature-box-content">
              <span className="d-inline-block alt-font text-dark-gray fw-600 mb-5px fs-20">
                Impact
              </span>
              <p className="w-90 md-w-100">
                As a prominent association of Nigerian professionals based in
                London, NISM facilitates connections and collaborations between
                financial experts, entrepreneurs, and institutions in both
                countries.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Services Section
const Values = () => (
  <section className="nism primary-font bg-gradient-very-light-gray px-7 xxl-ps-3 xxl-pe-3 xs-px-0">
    <Container fluid>
      <Row className="justify-content-center mb-3">
        <Col xl={5} lg={7} md={8} className="text-center">
          <span className="fw-600 ls-1px fs-16 alt-font d-inline-block text-uppercase mb-5px text-base-color">
            What do we represent?
          </span>
          <h2 className="alt-font fs-50 text-dark-gray fw-600 ls-minus-2px">
            Our Core Values
          </h2>
        </Col>
      </Row>

      <Row className="row-cols-1 px-4 px-lg-10 row-cols-xl-3 row-cols-md-2 row-cols-sm-2 justify-content-center">
        <Col className="interactive-banner-style-05 lg-mb-30px position-relative z-index-1">
          <a
            href="about"
            className="position-absolute z-index-1 top-0px left-0px h-100 w-100"
          ></a>
          <figure className="m-0 hover-box border-radius-4px overflow-hidden position-relative">
            <img
              className="w-100"
              src="https://gfa-tech.com/testnet/nism/images/leadership.jpg"
              alt="Leadership"
            />
            <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-15 xl-p-12 last-paragraph-no-margin">
              <div className="mb-auto bg-base-color fw-500 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-13">
                Diversity
              </div>
              <span className="alt-font text-white fw-500 fs-26 sm-lh-26 xs-lh-28">
                Leadership
              </span>
              <p className="text-white opacity-6 fs-18">Leading by Example</p>
              <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
              <div className="box-overlay bg-gradient-gray-light-dark-transparent z-index-minus-1"></div>
            </figcaption>
          </figure>
        </Col>

        <Col className="interactive-banner-style-05 sm-mb-30px position-relative z-index-1">
          <a
            href="about"
            className="position-absolute z-index-1 top-0px left-0px h-100 w-100"
          ></a>
          <figure className="m-0 hover-box border-radius-4px overflow-hidden position-relative">
            <img
              className="w-100"
              src="https://gfa-tech.com/testnet/nism/images/innovation.jpg"
              alt="Innovation"
            />
            <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-15 xl-p-12 last-paragraph-no-margin">
              <div className="mb-auto bg-base-color fw-500 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-13">
                Inclusion
              </div>
              <span className="alt-font text-white fw-500 fs-26 sm-lh-26 xs-lh-28">
                Innovation
              </span>
              <p className="text-white opacity-6 fs-18">
                Driving Sustainability
              </p>
              <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
              <div className="box-overlay bg-gradient-gray-light-dark-transparent z-index-minus-1"></div>
            </figcaption>
          </figure>
        </Col>

        <Col className="interactive-banner-style-05 position-relative z-index-1">
          <a
            href="about"
            className="position-absolute z-index-1 top-0px left-0px h-100 w-100"
          ></a>
          <figure className="m-0 hover-box border-radius-4px overflow-hidden position-relative">
            <img
              className="w-100"
              src="https://gfa-tech.com/testnet/nism/images/community.jpg"
              alt="Community"
            />
            <figcaption className="d-flex flex-column align-items-start justify-content-center position-absolute left-0px top-0px w-100 h-100 z-index-1 p-15 xl-p-12 last-paragraph-no-margin">
              <div className="mb-auto bg-base-color fw-500 text-white text-uppercase border-radius-30px ps-20px pe-20px fs-13">
                Strategy
              </div>
              <span className="alt-font text-white fw-500 fs-26 sm-lh-26 xs-lh-28">
                Community
              </span>
              <p className="text-white opacity-6 fs-18">Inclusive Growth</p>
              <div className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent z-index-minus-1 opacity-9"></div>
              <div className="box-overlay bg-gradient-gray-light-dark-transparent z-index-minus-1"></div>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  </section>
);

const Membership = () => (
  <section className="nism primary-font px-4 pt-8 position-relative bg-very-light-gray" id="membership">
    <div className="position-absolute h-100 top-0 left-0 z-index-minus-1"></div>
    <Container>
      <Row>
        <Col lg={5} className="md-mb-50px sm-mb-30px">
          <h2 className="alt-font fw-600 fs-50 text-dark-gray ls-minus-2px">
            Membership
          </h2>
          <p className="w-80 lg-w-100 mb-30px sm-mb-25px">
            Choose from any of our membership levels that suit you.
          </p>
          <Button
            href="membership"
            className="btn-small btn-dark-gray btn-box-shadow btn-round-edge"
          >
            View all membership levels
          </Button>
        </Col>
        <Col xl={5} lg={6} className="offset-xl-2 offset-lg-1">
          <Accordion
            defaultActiveKey="0"
            className="accordion-style-02 primary-font"
            id="accordion-style-02"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header border-bottom border-color-extra-medium-gray">
                <i className="feather icon-feather-minus"></i>
                <span className="fw-600 primary-font fs-20">
                  Benefits of joining NISM
                </span>
              </Accordion.Header>
              <Accordion.Body className="border-bottom border-color-light-medium-gray">
                <p>
                  Networking Opportunities: Access to a diverse network of
                  Nigerian professionals in London and beyond, facilitating
                  valuable connections and collaborations.
                </p>
                <p>
                  Professional Development: Participation in workshops,
                  seminars, and webinars aimed at enhancing leadership skills,
                  industry knowledge, and career advancement.
                </p>
                <p>
                  Cultural Engagement: Involvement in cultural events,
                  celebrations, and initiatives that promote Nigerian heritage
                  and foster a sense of community.
                </p>
                <p>
                  Advocacy and Influence: Opportunities to contribute to
                  advocacy efforts promoting diversity, inclusion, and
                  professional excellence within the Nigerian community and
                  broader society.
                </p>
                <p>
                  Access to Resources: Exclusive access to job postings,
                  mentorship programs, and resources aimed at supporting
                  professional growth and development.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="feather icon-feather-plus"></i>
                <span className="fw-600 primary-font fs-20">
                  How can I apply?
                </span>
              </Accordion.Header>
              <Accordion.Body className="border-bottom border-color-transparent">
                <p>
                  Choose from any of our membership plans below to get started.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <section id="down-section">
        <Container>
          <Row
            className="align-items-end pricing-table-style-05 g-0 mb-6 background-position-center background-no-repeat justify-content-center"
            style={{
              backgroundImage: "url('images/demo-corporate-bg-03.png')",
            }}
          >
            <Col lg={4} md={8} className="md-mb-30px appear">
              <div className="border-radius-6px position-relative overflow-hidden">
                <div className="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px">
                  <h5 className="fw-700 mb-0 fs-30 text-dark-gray alt-font">
                    Basic
                  </h5>
                  <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                    Membership
                  </span>
                  <div className="pricing-body pt-35px">
                    <ul className="p-0 m-0 list-style-02 fw-500">
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Access to networking events and seminars.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Subscription to newsletters and updates.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-red h-20px w-20px border-radius-100 me-10px">
                          <X className="text-white fs-20 d-flex" />
                        </span>
                        Access to exclusive professional development workshops
                        and webinars.
                      </li>
                    </ul>
                  </div>
                </div>
                <Row className="align-items-center pt-25px pb-25px">
                  <Col className="text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                    <h3 className="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px">
                      $29
                    </h3>
                    <p className="w-120px fs-15 lh-22 text-start">
                      Per user/month billed annually*
                    </p>
                  </Col>
                </Row>
                <div className="pricing-footer px-12 pb-8 text-center">
                  <Button
                    href="membership"
                    className="btn-large btn-dark-gray btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px"
                  >
                    <span className="btn-text">Join this plan </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                  </Button>
                  <span className="fs-16">Cancel anytime</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={8} className="md-mb-30px appear">
              <div className="bg-dark-gray border-radius-6px overflow-hidden position-relative box-shadow-double-large z-index-9">
                <div className="p-10px fw-700 fs-14 text-white bg-gradient-flamingo-amethyst-green text-uppercase text-center">
                  Popular
                </div>
                <div className="pricing-header pt-45px pb-10px bg-white border-radius-6px text-center position-relative top-minus-3px">
                  <h5 className="fw-700 mb-0 text-dark-gray alt-font">
                    Professional
                  </h5>
                  <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                    Membership
                  </span>
                  <div className="pricing-body pt-35px">
                    <ul className="p-0 m-0 list-style-02 fw-500 text-center text-md-start">
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        All benefits of Basic Membership.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Access to exclusive professional development workshops
                        and webinars.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Priority registration for events and seminars.
                      </li>
                    </ul>
                  </div>
                </div>
                <Row className="align-items-center text-white pt-25px pb-25px">
                  <Col className="text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                    <h3 className="alt-font text-white mb-0 me-15px fw-700 ls-minus-2px">
                      $49
                    </h3>
                    <p className="w-120px fs-15 lh-22 text-start">
                      Per user/month billed annually*
                    </p>
                  </Col>
                </Row>
                <div className="pricing-footer px-12 pb-8 text-center">
                  <Button
                    href="membership"
                    className="btn-large btn-white btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px"
                  >
                    <span className="btn-text">Join this plan </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                  </Button>
                  <span className="fs-16">Cancel anytime</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={8} className="appear">
              <div className="border-radius-6px position-relative overflow-hidden">
                <div className="pricing-header pt-45px pb-10px border-radius-6px text-center position-relative top-minus-3px">
                  <h5 className="fw-700 mb-0 text-dark-gray alt-font">
                    Enterprise
                  </h5>
                  <span className="ps-25px pe-25px mb-15px text-uppercase text-base-color fs-13 lh-34 fw-700 border-radius-100px bg-solitude-blue d-inline-block">
                    Membership
                  </span>
                  <div className="pricing-body pt-35px">
                    <ul className="p-0 m-0 list-style-02 fw-500">
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        All benefits of Professional Membership.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Customized membership options tailored to specific
                        needs.
                      </li>
                      <li className="pt-15px pb-15px px-12 border-top border-color-extra-medium-gray text-dark-gray lg-ps-10 lg-pe-10">
                        <span className="d-flex align-self-center justify-content-center bg-green h-20px w-20px border-radius-100 me-10px">
                          <Check className="text-white fs-20 d-flex" />
                        </span>
                        Dedicated account manager for personalized support.
                      </li>
                    </ul>
                  </div>
                </div>
                <Row className="align-items-center pt-25px pb-25px">
                  <Col className="text-center last-paragraph-no-margin d-flex align-items-center justify-content-center">
                    <h3 className="alt-font text-dark-gray mb-0 me-15px fw-700 ls-minus-2px">
                      $99
                    </h3>
                    <p className="w-120px fs-15 lh-22 text-start">
                      Per user/month billed annually*
                    </p>
                  </Col>
                </Row>
                <div className="pricing-footer px-12 pb-8 text-center">
                  <Button
                    href="membership"
                    className="btn-large btn-dark-gray btn-box-shadow btn-hover-animation-switch btn-round-edge w-100 text-transform-none mb-15px"
                  >
                    <span className="btn-text">Join this plan </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                    <span className="btn-icon">
                      <ArrowRight />
                    </span>
                  </Button>
                  <span className="fs-16">Cancel anytime</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  </section>
);
// Testimonials Section
const Events = () => (
  <section className="nism primary-font px-4 pt-3 pt-lg-10 sm-pt-50px" id="events">
    <Container>
      <Row className="justify-content-center px-4 px-lg-10">
        <Col
          xl={5}
          lg={8}
          md={10}
          className="lg-mb-50px text-center text-xl-start"
        >
          <div className="position-sticky top-120px lg-top-0px lg-position-relative">
            <span className="ps-3 pe-3 mb-20px text-uppercase text-base-color fs-12 lh-40 fw-700 border-radius-100px bg-gradient-very-light-gray-transparent d-inline-flex justify-content-center justify-content-xl-start">
              <ChatSquareDots className="fs-16 me-2" /> Seminars, conferences
              and hangouts.
            </span>
            <h3 className="text-dark-gray alt-font fs-50 ls-minus-2px fw-700">
              Upcoming Events
            </h3>
            <p className="mb-35px w-90 lg-w-100 sm-mb-25px">
              We organize both virtual and physical events tailored for your
              growth and networking.
            </p>
            <Button
              href="events"
              variant="gradient-purple-pink"
              className="btn-extra-large btn-rounded me-2"
            >
              <CalendarCheck /> View all events
            </Button>
          </div>
        </Col>
        <Col xl={6} lg={8} md={10} className="offset-xl-1">
          <Row className="row-cols-1 justify-content-center">
            <Col className="services-box-style-02 mb-3">
              <div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage:
                        "url(https://gfa-tech.com/testnet/nism/images/event-physical.jpg)",
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-6"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-2">
                      The Diaspora Conference
                    </span>
                    <p>Join our monthly professional conferences in London.</p>
                    <a
                      href="#"
                      className="fs-16 lh-20 primary-font fw-500 text-dark-gray text-decoration-line-bottom d-inline-block mb-3"
                    >
                      Register Now
                    </a>
                  </div>
                </Col>
              </div>
            </Col>

            <Col className="services-box-style-02 mb-3">
              <div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage:
                        "url(https://gfa-tech.com/testnet/nism/images/event-virtual.jpg)",
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-4"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-2">
                      Digital Transformation for Your Business
                    </span>
                    <p>
                      Unlock new business possibilities with our expert-led
                      sessions.
                    </p>
                    <a
                      href="#"
                      className="fs-16 lh-20 primary-font fw-500 text-dark-gray text-decoration-line-bottom d-inline-block mb-3"
                    >
                      Register Now
                    </a>
                  </div>
                </Col>
              </div>
            </Col>

            <Col className="services-box-style-02">
              <div className="row g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage:
                        "url(https://gfa-tech.com/testnet/nism/images/physical-event-2.jpg)",
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-4"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-700 fs-19 mb-2">
                      Career Growth and Productivity Program
                    </span>
                    <p>
                      Level up your network and career skills with our
                      interactive sessions.
                    </p>
                    <a
                      href="#"
                      className="fs-16 lh-20 primary-font fw-500 text-dark-gray text-decoration-line-bottom d-inline-block mb-3"
                    >
                      Register Now
                    </a>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);
const Blog = () => (
  <section className="nism primary-font px-6 bg-white" id="blog">
    <Container>
      <Row className="justify-content-center px-4 px-lg-10 mb-2">
        <Col lg={7} className="text-center">
          <span className="fw-bold text-uppercase text-primary">Blog</span>
          <h2 className="fw-bold text-dark fs-50">Latest News</h2>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="px-4 bg-white mb-4 blog-grid blog-wrapper  grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        >
          <Card className="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
            <div className="blog-image">
              <a
                href="https://www.linkedin.com/posts/nigerians-in-the-square-mile-nism_thriving-amidst-adversity-unleashing-the-activity-7219272718678974464-v3um/?utm_source=share&utm_medium=member_android"
                className="d-block"
              >
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQGymV3JefFXLA/feedshare-shrink_2048_1536/0/1721208742278?e=1726704000&v=beta&t=l1VwDvQfQNJ9j0wGO2EYZ9bldka1ojErz8v6eDlwArk"
                  alt="Nigerian Tech Startups"
                  className="card-img-top"
                />
              </a>
              <div className="blog-categories">
                <a className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase alt-font fw-700">
                  LinkedIn
                </a>
              </div>
            </div>
            <Card.Body className="px-4">
              <Card.Title className="mb-2 fw-bold text-dark">
                Thriving Amidst Adversity: Unleashing the Potential of Nigerian
                Tech Startups
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="px-4 bg-white mb-4 blog-grid blog-wrapper  border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        >
          <Card className="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
            <div className="blog-image">
              <a
                href="https://www.linkedin.com/posts/nigerians-in-the-square-mile-nism_opec-activity-7217148904805453826-VTCM/?utm_source=share&utm_medium=member_android"
                className="d-block"
              >
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQFZQUwJ9VtiKQ/feedshare-shrink_2048_1536/0/1720702386141?e=1726704000&v=beta&t=WOilOSfjst3aJb-nFHZjA1cnQ6UIq-mBQQFzhgI8jtc"
                  alt="Nigeria's Oil Production"
                  className="card-img-top"
                />
              </a>
              <div className="blog-categories">
                <a className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase alt-font fw-700">
                  LinkedIn
                </a>
              </div>
            </div>
            <Card.Body className="px-4">
              <Card.Title className="mb-2 fw-bold text-dark">
                Nigeria's Oil Production Climbs to 1.27 Million Barrels per Day
                in June 2024
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="px-4 bg-white mb-4 blog-grid blog-wrapper card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        >
          <Card className="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
            <div className="blog-image">
              <a
                href="https://www.linkedin.com/posts/nigerians-in-the-square-mile-nism_why-we-didnt-raise-investment-at-dangote-activity-7218920700474990594-vHHB/?utm_source=share&utm_medium=member_android"
                className="d-block"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E22AQHrrQjNVX38gg/feedshare-shrink_800/feedshare-shrink_800/0/1721124815034?e=1726704000&v=beta&t=_ZVghJQ6XotmUb30eNqjQEe01_Pzy4H3OrgAcuvwnQo"
                  alt="Dangote Refinery"
                  className="card-img-top"
                />
              </a>
              <div className="blog-categories">
                <a className="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase alt-font fw-700">
                  LinkedIn
                </a>
              </div>
            </div>
            <Card.Body className="p-3">
              <Card.Title className="mb-2 fw-bold text-dark">
                Why We Didn’t Raise Investment At Dangote Refinery – NNPCL
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

const Contact = () => (
  <section className="nism px-4 primary-font position-relative" id="contact">
    <Container>
      <Row className="justify-content-center">
        <Col xxl={4} xl={5} lg={5} className="d-flex flex-column mb-4 mb-lg-0">
          <h3 className="fw-bold text-dark fs-50 alt-font w-85 xl-w-90 md-w-100 mb-3">
            We'd love to hear from you.
          </h3>
          <p className="w-85 xl-w-90 xs-w-100">
            Contact us through any of the channels listed below.
          </p>
          <div className="d-flex align-items-center mt-auto">
            <div class="feature-box-content">
              <span className="text-dark fs-5 fw-semibold d-block">
                Call us directly
              </span>
              <span>+44 7799 870815 +2348076427631</span>
            </div>
          </div>
        </Col>
        <Col lg={7} className="offset-xxl-1 px-4 mb-6">
          <Form
            action="email-templates/contact-form.php"
            class="contact-form-style-03"
            method="post"
          >
            <Row className="justify-content-center">
              <Col md={6} className="mb-4 xs-mb-30px">
                <Form.Label className="fw-bold text-dark text-uppercase fs-6 mb-1">
                  Enter your name*
                </Form.Label>
                <div className="position-relative form-group">
                  <EmojiSmile className="form-icon text-dark position-absolute top-50 start-0 translate-middle-y ms-2" />
                  <Form.Control
                    className="ps-5 border-dark bg-transparent"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="What's your good name?"
                    required
                  />
                </div>
              </Col>
              <Col md={6} className="mb-4">
                <Form.Label className="fw-bold text-dark text-uppercase fs-6 mb-1">
                  Phone number
                </Form.Label>
                <div className="position-relative form-group">
                  <Telephone className="form-icon text-dark position-absolute top-50 start-0 translate-middle-y ms-2" />
                  <Form.Control
                    className="ps-5 border-dark bg-transparent"
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </Col>
              <Col md={6} className="mb-4">
                <Form.Label className="fw-bold text-dark text-uppercase fs-6 mb-1">
                  Email address*
                </Form.Label>
                <div className="position-relative form-group">
                  <Envelope className="form-icon text-dark position-absolute top-50 start-0 translate-middle-y ms-2" />
                  <Form.Control
                    className="ps-5 border-dark bg-transparent"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </Col>
              <Col md={6} className="mb-4">
                <Form.Label className="fw-bold text-dark text-uppercase fs-6 mb-1">
                  Subject
                </Form.Label>
                <div className="position-relative form-group">
                  <Journals className="form-icon text-dark position-absolute top-50 start-0 translate-middle-y ms-2" />
                  <Form.Control
                    className="ps-5 border-dark bg-transparent"
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                  />
                </div>
              </Col>
              <Col xs={12} className="mb-4">
                <Form.Label className="fw-bold text-dark text-uppercase fs-6 mb-1">
                  Your message
                </Form.Label>
                <div className="position-relative form-group">
                  <ChatSquareDots className="form-icon text-dark position-absolute top-50 start-0 translate-middle-y ms-2" />
                  <Form.Control
                    as="textarea"
                    className="ps-5 border-dark bg-transparent"
                    name="comment"
                    placeholder="Describe your project"
                    rows="4"
                  />
                </div>
              </Col>
              <Col xl={6} md={7} sm={10} className="mb-3 mb-md-0">
                <p className="mb-0 fs-6 text-center text-md-start">
                  We will never collect information about you without your
                  explicit consent.
                </p>
              </Col>
              <Col xl={6} md={5} className="text-center text-md-end">
                <Button
                  className="btn-dark-gray text-transform-none primary-font"
                  type="submit"
                >
                  Send message
                </Button>
              </Col>
              <Col xs={12}>
                <div className="form-results mt-3 d-none"></div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);
// Footer Section
const Footer = () => (
  <footer className="nism footer-light primary-font bg-white position-relative">
    <div
      id="particles-04"
      className="position-absolute h-100 top-0 left-0 z-index-minus-1 w-100"
      style={{
        background: "rgba(0,0,0,0.1)", // Add any background styling if needed
      }}
    >
      {/* Particle effect is removed, but you can reintroduce it with a different library if needed */}
    </div>
    <Container>
      <Row className="justify-content-center pt-7 sm-pt-50px">
        <Col
          lg={3}
          md={12}
          sm={6}
          className="text-md-center text-lg-start md-mb-30px"
        >
          <a
            href="index.html"
            className="footer-logo mb-15px md-mb-20px d-inline-block"
          >
            <img
              src="https://gfa-tech.com/testnet/nism/images/nism-logo.jpg"
              alt="NISM Logo"
            />
          </a>
          <p className="mb-20px">
            NISM is a professional network for Nigerians based in the City of
            London.
          </p>
          <div className="elements-social social-icon-style-02">
            <ul className="medium-icon dark icon-with-animation">
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/nigerians-in-the-square-mile-nism/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://x.com/joinNISM?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/join.nism?utm_source=qr&igsh=ZjdrNjhiOG9jajFw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={2} md={3} sm={6} className="md-mb-30px">
          <span className="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">
            Organization
          </span>
          <ul>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="events">Events</a>
            </li>
            <li>
              <a href="membership">Membership</a>
            </li>
            <li>
              <a href="blog-posts">Blog</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
          </ul>
        </Col>

        <Col lg={3} md={4} sm={6} className="xs-mb-30px">
          <span className="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">
            Get in touch
          </span>
          <p className="mb-15px w-75 lg-w-85 sm-w-100">
            London, United Kingdom.
          </p>
          <p className="m-0">
            <span className="fw-600">
              <Phone className="text-dark-gray icon-small me-10px" />
            </span>
            <a href="tel:+447799870815">+44 7799 870815</a>
          </p>
          <p className="m-0">
            <span className="fw-600">
              <Envelope className="text-dark-gray icon-small me-10px" />
            </span>
            <a href="mailto:social@nism-uk.com">social@nism-uk.com</a>
          </p>
        </Col>

        <Col xl={3} lg={4} md={5} sm={6}>
          <span className="alt-font d-block text-dark-gray fw-600 mb-10px fs-19">
            Newsletter
          </span>
          <p className="sm-mb-20px">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="d-inline-block w-100 newsletter-style-02 position-relative">
            <Form
              action="email-templates/subscribe-newsletter.php"
              method="post"
              className="position-relative w-100"
            >
              <Form.Control
                className="bg-transparent border-color-extra-medium-gray w-100 form-control required"
                type="email"
                name="email"
                placeholder="Enter email address..."
              />
              <input type="hidden" name="redirect" />
              <Button className="btn submit" aria-label="submit">
                <Envelope className="text-base-color" />
              </Button>
              <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none"></div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center pt-5 sm-pt-30px">
        <Col className="text-center text-lg-start">
          <div className="divider-style-03 divider-style-03-01 border-color-extra-medium-gray"></div>
        </Col>

        <Col
          lg={6}
          className="pt-25px pb-25px md-pb-5px fs-16 text-center  text-lg-end"
        >
          <ul className="footer-navbar md-lh-normal">
            <li className="nav-item">
              <a href="privacy" className="nav-link text-dark">
                Powered by DIMP from GFA Technologies
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);
