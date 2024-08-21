import React, { Fragment, useEffect } from "react";

// import Icon from "@mdi/react";
// import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
// import { Link } from "react-router-dom";
// import "./styles.scss";
// import "./conference.module.css";

import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Accordion,
  Card,
  Form,
  Image,
  Carousel,
  ListGroup,
} from "react-bootstrap";
import {
  Heart,
  GeoAlt,
  Telephone,
  TelephoneOutbound,
  ArrowRight,
} from "react-bootstrap-icons";

const EventTemplate = () => {
  return (
    <Fragment>
      <div>
        <HeaderComponent />
        <HomeSection />
        <FeatureSection />
        <AboutSection />
        <ObjectivesSection />

        <ComponentsSection />

        <CurriculumSection />
        <FacilitatorsSection />
        <CountdownSection />

        <Footer />
      </div>
    </Fragment>
  );
};

const HeaderComponent = () => (
  <header className="sticky sticky-active">
    <Navbar
      expand="lg"
      className="header-light bg-white header-reverse glass-effect"
    >
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs="auto" lg={2} className="me-lg-0 me-auto">
            <Navbar.Brand href="#">
              <img
                src="https://gfa-tech.com/productivity-and-growth-program/images/providusplusgfa-removebg-preview.png"
                alt=""
                width="87"
                height="35"
              />
            </Navbar.Brand>
          </Col>
          <Col xs="auto" className="ms-auto md-ms-0 menu-order position-static">
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav" className="justify-content-center">
              <Nav className="alt-font">
                <Nav.Link href="#home" className="nav-link active">
                  Home
                </Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#objectives">Objectives</Nav.Link>
                <Nav.Link href="#components">Components</Nav.Link>
                <Nav.Link href="#facilitators">Facilitators</Nav.Link>
                <Nav.Link href="#Curriculum">Curriculum</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs="auto" className="text-end d-none d-sm-flex">
            <div className="header-icon">
              <Button
                href="register/"
                className="btn border-1 btn-transparent-light-gray btn-medium left-icon btn-switch-text"
              >
                <span>
                  <span>
                    <i className="fa-regular fa-register"></i>
                  </span>
                  <span className="btn-double-text" data-text="Register Now">
                    Register Now
                  </span>
                </span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

const HomeSection = () => (
  <section
    className="conference px-4 full-screen ipad-top-space-margin position-relative bg-base-color background-position-left-top"
    id="home"
    style={{
      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/bg-people.jpg)`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <Container className="h-100">
      <Row className="align-items-center h-100 justify-content-center">
        <Col
          md={12}
          className="position-relative text-base d-flex flex-column justify-content-center text-center h-100"
        >
          <span className="alt-font  text-uppercase fw-700 ls-1px fs-25 bg-transparent px-6">
            PROVIDUSBANK
          </span>
          <span
            className="alt-font  fs-95 lg-fs-95 md-fs-80 sm-fs-70 xs-fs-70 ls-minus-9px md-ls-minus-5px xs-ls-minus-2px fw-600 text-outline2 text-outline-width-2px d-inline-block appear"
            data-fancy-text='{ "string": ["Productivity and Growth"], "duration": 500, "delay": 500, "speed": 50, "clipPath": ["inset(0 200px 0 0)", "inset(0px 0px 0px 0px)"], "easing": "easeOutCubic" }'
          >
            Productivity And Growth
          </span>
          <span
            className="alt-font mt-5 mb-5 fs-90 md-fs-80 xs-fs-70 position-relative top-minus-40px lg-top-minus-20px xs-top-minus-5px ls-minus-10px md-minus-8px xs-ls-minus-3px fw-600 text-shadow-double-large appear anime-complete"
            style={{ color: "#fdb813" }}
          >
            Program
          </span>
          <Button
            href="register/"
            className="btn btn-large btn-yellow btn-hover-animation btn-rounded btn-box-shadow align-self-center"
          >
            <span>
              <span className="btn-text">Register Now</span>
              <span className="btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </span>
          </Button>
          <div className="position-absolute bottom-60px md-bottom-40px xs-bottom-20px left-0px right-0px appear anime-complete">
            <span className="alt-font  text-uppercase fw-700 ls-1px fs-25 bg-transparent px-6">
              <i className="feather icon-feather-calendar icon-small me-5px"></i>
              Application deadline - August 9th, 2024
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const FeatureSection = () => (
  <section className="conference px-4 bg-white bg-dark-midnight-blue border-bottom border-color-transparent-dark-light half-section">
    <Container>
      <Row className="row-cols-auto row-cols-lg-2 row-cols-md-2 justify-content-center">
        <Col className="md-mb-50px sm-mb-30px">
          <div className="feature-box feature-box-left-icon-middle">
            <div className="feature-box-icon ms-40px me-40px lg-ms-25px lg-me-25px">
              <h1 className="alt-font fs-1 text-outline text-outline-width-2px text-outline-color-base-color fw-700 ls-minus-1px mb-0">
                03
              </h1>
            </div>
            <div className="feature-box-content border-start border-color-transparent-dark-light ps-40px pe-40px lg-ps-25px lg-pe-25px last-paragraph-no-margin">
              <span className="text-dark fs-24 alt-font fs-3 d-inline-block fw-300">
                Weeks of comprehensive learning
              </span>
            </div>
          </div>
        </Col>

        <Col className="md-mb-50px sm-mb-30px">
          <div className="feature-box feature-box-left-icon-middle">
            <div className="feature-box-icon ms-40px me-40px lg-ms-25px lg-me-25px">
              <h1 className="alt-font fs-1 text-outline text-outline-width-2px text-outline-color-base-color fw-700 ls-minus-1px mb-0">
                03
              </h1>
            </div>
            <div className="feature-box-content border-start border-color-transparent-dark-light ps-40px pe-40px lg-ps-25px lg-pe-25px last-paragraph-no-margin">
              <span className="text-dark fs-24 alt-font fs-3 d-inline-block fw-300">
                Program Objectives
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const AboutSection = () => (
  <section
    className="conference px-4 bg-dark-midnight-blue background-position-right-top background-no-repeat"
    style={{
      backgroundImage:
        "url('https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-about-bg.png')",
    }}
    id="about"
  >
    <Container fluid className="d-none d-md-block">
      <Row>
        <Col
          className="p-0 overlap-section text-end pe-4 md-pe-5"
          style={{ marginTop: "inherit" }}
        >
          <Image
            src="https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-02.png"
            alt=""
            className="animation-rotation lg-w-120px"
            fluid
          />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="align-items-center justify-content-center">
        <Col lg={6} md={10} className="md-mb-30px md-pt-25px">
          <figure className="position-relative mb-50px sm-ps-50px">
            <div className="overflow-hidden border-radius-4px position-relative">
              <div
                className="w-100 appear"
                data-anime='{ "effect": "slide", "direction": "bt", "color": "#17161a", "duration": 1000, "delay": 0 }'
                style={{ position: "relative" }}
              >
                <Image
                  src="https://gfa-tech.com/productivity-and-growth-program/images/bg-growth.jpg"
                  alt=""
                  className="w-80 border-radius-5px liquid-parallax"
                  fluid
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                />
              </div>
            </div>
            <figcaption
              className="position-absolute z-index-1 bottom-minus-50px lg-bottom-minus-30px sm-bottom-minus-50px left-minus-50px lg-left-minus-30px sm-left-minus-0px w-50 md-w-220px text-center last-paragraph-no-margin appear anime-complete"
              data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 1000, "delay": 500, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="atropos atropos-rotate-touch">
                <div className="atropos-scale">
                  <div className="atropos-rotate">
                    <div
                      className="atropos-inner border-radius-5px bg-base-color text-dark ps-12 pe-12 pt-50px pb-50px lg-pt-35px lg-pb-35px"
                      data-atropos-offset="3"
                    >
                      <span className="fs-130 lg-fs-110 d-inline-block ls-minus-5px fw-600 text-shadow-double-large text-outline3 text-outline-width-2px alt-font">
                        09
                      </span>
                      <span className="alt-font text-uppercase fw-500 ls-2px fs-17 lh-24 d-inline-block">
                        International speakers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </Col>

        <Col
          xl={5}
          lg={{ span: 5, offset: 1 }}
          md={10}
          className="appear anime-child anime-complete"
        >
          <h2 className="alt-font fs-1 text-dark fw-500 ls-minus-2px mb-40px sm-mb-30px">
            <span className="w-20px h-4px d-inline-block bg-base-color me-10px"></span>
            About the program
          </h2>

          <div className="icon-with-text-style-01 mb-30px pb-30px border-bottom border-color-transparent-dark-light">
            <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
              <p className="primary-font fs-20 primary-font fs-15 mt-10px w-100">
                The comprehensive program is aimed at enhancing productivity and
                fostering growth for medium to large-sized companies.
              </p>
            </div>
          </div>

          <div className="icon-with-text-style-01 mb-40px md-mb-30px">
            <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
              <p className="primary-font fs-20 primary-font fs-15 mt-10px w-100">
                With a focus on equipping attendees with valuable insights and
                strategies, this program will feature a series of lectures
                delivered by renowned foreign business owners, and experienced
                mentors in our ecosystem, coupled with immersive visits to
                leading organizations such as the Nigerian Exchange Group (NGX)
                and Providus Bank Headquarters.
              </p>
            </div>
          </div>

          {/* Uncomment the button below if needed */}
          {/* <a
              href="demo-conference-about-event.html"
              className="btn btn-large btn-dark-gray btn-hover-animation btn-round-edge btn-box-shadow align-self-center"
            >
              <span>
                <span className="btn-text">About conference</span>
                <span className="btn-icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </span>
            </a> */}
        </Col>
      </Row>
    </Container>
  </section>
);

const ComponentsSection = () => (
  <section
    className="conference px-4 pt-3 bg-dark-midnight-blue"
    id="components"
  >
    <Container>
      <Row className="justify-content-center">
        <Col
          xl={5}
          lg={8}
          md={10}
          className="lg-mb-50px text-center text-xl-start"
          style={{ position: "relative" }}
        >
          <div className="position-sticky" style={{ top: "120px", zIndex: 1 }}>
            <span className="ps-3 pe-3 mb-3 text-uppercase text-base-color fs-6 fw-bold border-radius-pill bg-gradient-very-light-gray-transparent d-inline-flex justify-content-center justify-content-xl-start">
              <i className="bi bi-chat-square-dots fs-6 me-1"></i>
              What will happen during the program?
            </span>
            <h3 className="text-dark-gray fs-2  ls-minus-2px fw-bold">
              Program Components
            </h3>
            <p className="primary-font fs-20 primary-font fs-15 mb-4 w-90 lg-w-100 sm-mb-3">
              The programme is packed with several elements that facilitate
              learning and skill development, offer interactive sessions, and
              also allow participants valuable insights into industry-leading
              practices and operational excellence.
            </p>
            <Button
              href="register/"
              className="btn btn-lg btn-switch-text btn-gradient-purple-pink left-icon btn-rounded me-2 ls-0px"
            >
              Register Now
            </Button>
          </div>
        </Col>
        <Col xl={6} lg={8} md={10} className="offset-xl-1">
          <Row className="row-cols-1 justify-content-center">
            <Col className="services-box-style-02 mb-3">
              <Row className="g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/lecture.jpg)`,
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-4 xl-p-3"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-bold fs-19 mb-2">
                      Lecture Series
                    </span>
                    <p>
                      Get insightful and interactive lectures from experienced
                      foreign business owners.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col className="services-box-style-02 mb-3">
              <Row className="g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/workshop.jpg)`,
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-4 xl-p-3"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-bold fs-19 mb-2">
                      Workshop Sessions
                    </span>
                    <p>
                      Attend practical workshops focusing on implementing
                      productivity-enhancing tools and methodologies.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col className="services-box-style-02 mb-3">
              <Row className="g-0 box-shadow-quadruple-large border-radius-6px overflow-hidden">
                <Col lg={6} sm={6}>
                  <div
                    className="h-100 cover-background xs-h-300px"
                    style={{
                      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/corporate-office.png)`,
                    }}
                  ></div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="bg-white box-shadow-extra-large p-4 xl-p-3"
                >
                  <div className="services-box-content last-paragraph-no-margin">
                    <span className="d-block text-dark-gray primary-font fw-bold fs-19 mb-2">
                      Organizational Visits
                    </span>
                    <p>
                      Embark on guided tours of leading organizations, including
                      visits to NGX and Providus Bank HQ.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

const ObjectivesSection = () => (
  <section
    className="conference px-4 bg-dark-midnight-blue overlap-height border-top border-color-transparent-dark-light"
    style={{
      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-experts-bg.png)`,
      backgroundPosition: "left top",
      backgroundRepeat: "no-repeat",
      height: "inherit",
    }}
    id="objectives"
  >
    <Container className="overlap-gap-section">
      <Row className="align-items-center justify-content-center text-center mb-2">
        <Col lg={8}>
          <h2 className="alt-font fs-2 text-dark fw-500 ls-minus-2px">
            <span className="w-20px h-4px d-inline-block bg-base-color me-10px"></span>
            Program Objectives
          </h2>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
        <Col className="icon-with-text-style-03">
          <div className="feature-box p-10 sm-p-8">
            <div className="feature-box-icon">
              <h1 className="alt-font fs-1 text-outline text-outline-width-2px text-outline-color-base-color fw-700 ls-minus-1px mb-0">
                01
              </h1>
            </div>
            <div className="feature-box-content last-paragraph-no-margin">
              <span className="d-inline-block alt-font fs-3 text-dark fs-20 mb-5px">
                Knowledge Exchange
              </span>
              <p className="primary-font fs-20 primary-font fs-15 w-90 md-w-100 mx-auto">
                We pride ourselves on knowledge exchange. We believe this can be
                achieved by learning from successful foreign business owners and
                providing valuable insights into global best practices.
              </p>
            </div>
          </div>
        </Col>

        <Col className="icon-with-text-style-03">
          <div className="feature-box p-10 sm-p-8">
            <div className="feature-box-icon">
              <h1 className="alt-font fs-1 text-outline text-outline-width-2px text-outline-color-base-color fw-700 ls-minus-1px mb-0">
                02
              </h1>
            </div>
            <div className="feature-box-content last-paragraph-no-margin">
              <span className="d-inline-block alt-font fs-3 text-dark fs-20 mb-5px">
                Empowerment
              </span>
              <p className="primary-font fs-20 primary-font fs-15 w-90 md-w-100 mx-auto">
                One of our goals is to empower participating companies with
                actionable strategies and tools to optimize productivity and
                drive sustainable growth.
              </p>
            </div>
          </div>
        </Col>

        <Col className="icon-with-text-style-03">
          <div className="feature-box p-10 sm-p-8">
            <div className="feature-box-icon">
              <h1 className="alt-font fs-1 text-outline text-outline-width-2px text-outline-color-base-color fw-700 ls-minus-1px mb-0">
                03
              </h1>
            </div>
            <div className="feature-box-content last-paragraph-no-margin">
              <span className="d-inline-block alt-font fs-3 text-dark fs-20 mb-5px">
                Networking
              </span>
              <p className="primary-font fs-20 primary-font fs-15 w-90 md-w-100 mx-auto">
                We hope to achieve this by fostering networking opportunities
                among participants and industry leaders to encourage
                collaboration and partnerships.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const CurriculumSection = () => (
  <section
    className="conference bg-midnight-blue border-bottom border-color-transparent-dark-light background-position-left-bottom background-no-repeat overflow-hidden"
    style={{
      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-Curriculum-bg.png)`,
    }}
  >
    <Container fluid>
      <Row className="justify-content-center">
        <Col xl={3} className="p-0" id="Curriculum">
          <div className="ps-20 pe-20 p-3 p-lg-10  xxl-ps-15 xxl-pe-15 lg-p-7 sm-p-40px overflow-hidden h-100 text-center text-xl-start border-top border-end border-color-transparent-dark-light">
            <h2 className="alt-font fs-2 fw-400 fs-2 text-dark ls-minus-2px">
              <span className="w-20px h-4px d-inline-block bg-base-color me-10px"></span>
              Program Curriculum
            </h2>
          </div>
        </Col>

        {[
          {
            week: "First Week",
            items: [
              "Introduction to productivity and growth",
              "Strategic planning and goal setting",
              "Innovation and creativity",
            ],
            number: "01",
          },
          {
            week: "Second Week",
            items: [
              "Operational efficiency and process optimization",
              "Market expansion and internalization",
              "Financial management for growth",
            ],
            number: "02",
          },
          {
            week: "Third Week",
            items: [
              "Talent management and Leadership Development",
              "Customer acquisition and retention",
              "Organization culture and change management",
            ],
            number: "03",
          },
        ].map(({ week, items, number }, idx) => (
          <Col xl={3} md={4} className="event-style-01 p-0" key={idx}>
            <div className="bg-midnight-blue hover-box will-change-inherit dark-hover feature-box px-3 py-3 px-lg-10 py-lg-10 md-p-8 md-pb-25 sm-pb-50px overflow-hidden h-100 text-center text-md-start border-top border-end border-color-transparent-dark-light">
              <div className="feature-box-content w-100 lg-mb-5 last-paragraph-no-margin">
                <div className="text-dark fs-22 alt-font fw-500 mb-20px">
                  {week}
                </div>
                {items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <p className="primary-font fs-20 primary-font fs-15 text-light-opacity">
                      {item}
                    </p>
                    {idx < items.length - 1 && (
                      <div className="divider-style-03 mb-20px divider-style-03-01 border-color-transparent-dark-light"></div>
                    )}
                  </React.Fragment>
                ))}
                <span className="number fs-120 ls-minus-5px fw-500 text-outline text-outline-width-2px text-outline-color-base-color opacity-5 alt-font position-absolute bottom-minus-50px sm-bottom-minus-40px left-0px ps-20 sm-ps-0 sm-right-0px sm-left-0px">
                  {number}
                </span>
              </div>
              <div className="feature-box-overlay bg-base-color"></div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
const FacilitatorsSection = () => (
  <section
    className="conference px-4 bg-midnight-blue"
    style={{
      backgroundImage: `url(https://gfa-tech.com/productivity-and-growth-program/images/images/demo-conference-experts-bg.png)`,
      backgroundPosition: "left bottom",
      backgroundRepeat: "no-repeat",
    }}
    id="facilitators"
  >
    <Container>
      <Row className="justify-content-center align-items-center mb-6 text-center text-lg-start">
        <Col xs={12} lg={12} className="mb-20px">
          <h2 className="alt-font text-dark fs-2 fw-500 ls-minus-2px mb-0">
            <span className="w-20px h-4px d-inline-block bg-base-color me-10px"></span>
            Learn from industry experts
          </h2>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
        <Col className="text-center team-style-05 mb-50px">
          <div className="position-relative mb-25px">
            <img
              className="border-radius-4px"
              src="https://gfa-tech.com/productivity-and-growth-program/images/ken.jpg"
              alt="Kenneth Cheung"
            />
            <div className="w-100 h-100 d-flex flex-column justify-content-end align-items-center p-40px team-content bg-base-color-transparent border-radius-4px">
              <div className="social-icon fs-19">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-dark"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="fs-18 alt-font text-dark text-base-color-hover vertical-align-top"
          >
            Kenneth Cheung
          </a>
          <span className="fs-16 d-block lh-normal">Orbit Start-ups</span>
        </Col>

        <Col className="text-center team-style-05 mb-50px">
          <div className="position-relative mb-25px">
            <img
              className="border-radius-4px"
              src="https://gfa-tech.com/productivity-and-growth-program/images/thierry.jpg"
              alt="Thierry Vodounou"
            />
            <div className="w-100 h-100 d-flex flex-column justify-content-end align-items-center p-40px team-content bg-base-color-transparent border-radius-4px">
              <div className="social-icon fs-19">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-dark"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="fs-18 alt-font text-dark text-base-color-hover vertical-align-top"
          >
            Thierry Vodounou
          </a>
          <span className="fs-16 d-block lh-normal">
            Investment Advisor, Sarenga Group LLC
          </span>
        </Col>

        <Col className="text-center team-style-05 mb-50px">
          <div className="position-relative mb-25px">
            <img
              className="border-radius-4px"
              src="https://gfa-tech.com/productivity-and-growth-program/images/jacqueline.jpg"
              alt="Jacqueline Malenga"
            />
            <div className="w-100 h-100 d-flex flex-column justify-content-end align-items-center p-40px team-content bg-base-color-transparent border-radius-4px">
              <div className="social-icon fs-19">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-dark"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="fs-18 alt-font text-dark text-base-color-hover vertical-align-top"
          >
            Jacqueline Malenga
          </a>
          <span className="fs-16 d-block lh-normal">
            Business Leader &amp; Strategist
          </span>
        </Col>
        <Col className="text-center team-style-05 mb-50px">
          <div className="position-relative mb-25px">
            <img
              className="border-radius-4px"
              src="https://gfa-tech.com/productivity-and-growth-program/images/jacqueline.jpg"
              alt="Jacqueline Malenga"
            />
            <div className="w-100 h-100 d-flex flex-column justify-content-end align-items-center p-40px team-content bg-base-color-transparent border-radius-4px">
              <div className="social-icon fs-19">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-dark"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="fs-18 alt-font text-dark text-base-color-hover vertical-align-top"
          >
            Jacqueline Malenga
          </a>
          <span className="fs-16 d-block lh-normal">
            Business Leader &amp; Strategist
          </span>
        </Col>
      </Row>
    </Container>
  </section>
);

const CountdownSection = () => (
  <section
    className="conference px-4 bg-white position-relative appear anime-complete"
    data-parallax-background-ratio="0.5"
    style={{
      // backgroundImage: "url('https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-parallax.jpg')",
      backgroundPosition: "50% 363.7px",
    }}
  >
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col
          xl={8}
          lg={12}
          className="text-center position-relative last-paragraph-no-margin parallax-scrolling-style-2"
        >
          <div className="countdown-style-02 mb-30px mt-40px sm-mb-10px">
            <div className="counter-container">
              <div className="">
                <span className="alt-font fs-20">Registration Ends:</span>
                <div className="alt-font fs-0" style={{ color: "#000" }}>
                  September 7, 2024
                </div>
              </div>
            </div>
          </div>
          <h1 className="alt-font fs-80 text-dark fw-500 mb-50px sm-mb-40px ls-minus-2px">
            Hurry! Limited slots available.
          </h1>
          <Button
            to="register/"
            className="btn btn-large btn-yellow btn-hover-animation btn-rounded btn-box-shadow align-self-center"
          >
            <span>
              <span className="btn-text">Register Now</span>
              <span className="btn222-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

const Footer = () => (
  <footer
    className="conference px-4 bg-dark-midnight-blue background-position-right-top background-no-repeat md-background-image-none"
    // style={{ backgroundImage: "url('https://gfa-tech.com/productivity-and-growth-program/images/demo-conference-about-bg.png')" }}
  >
    <Container>
      <Row className="justify-content-center text-center text-sm-start">
        <Col lg={4} sm={6} className="md-mb-35px">
          <span className="alt-font  d-block text-dark mb-10px fs-20">
            <i className="feather icon-feather-map-pin align-text-bottom icon-extra-medium text-base-color me-10px"></i>
            Venue infos
          </span>
          <p className="primary-font fs-20 primary-font fs-15 w-80 lg-w-100 md-w-70 sm-w-90 xs-w-100 mb-5px">
            724 Adetokunbo Ademola Street, Victoria Island, Lagos, Lagos State,
            Nigeria
          </p>
          <a
            to="https://www.google.com/maps/place/ProvidusBank/@6.4313691,3.1254645,11z/data=!4m10!1m2!2m1!1sprovidusbank+hq!3m6!1s0x103bf52c2fe531eb:0x6e34ab193e5f9f42!8m2!3d6.4313691!4d3.4303351!15sCg9wcm92aWR1c2JhbmsgaHEiA4gBAZIBBGJhbmvgAQA!16s%2Fg%2F1q5bksj84?entry=ttu"
            className="text-decoration-line-bottom text-uppercase fs-15 alt-font  fw-500"
          >
            Get directions
          </a>
        </Col>

        <Col lg={4} sm={6} className="md-mb-35px fs-20">
          <span className="alt-font d-block text-dark mb-10px fs-20">
            <i className="feather icon-feather-phone-call align-text-bottom icon-extra-medium text-base-color me-10px"></i>
            Contact us
          </span>
          <a to="mailto:cegbo1@providusbank.com">cegbo1@providusbank.com</a>
          <br />
          <a to="mailto:promise@gfa-tech.com">promise@gfa-tech.com</a>
          <br />
        </Col>

        <Col lg={4} sm={12}>
          <span className="alt-font  d-block text-dark mb-10px fs-20">
            <i className="feather icon-feather-send align-text-bottom icon-extra-medium text-base-color me-10px"></i>
            Newsletter signup
          </span>
          <p className="primary-font fs-20 primary-font fs-15 mb-25px sm-mb-20px">
            Don't miss this amazing events
          </p>
          <div className="d-inline-block w-100 newsletter-style-01 position-relative">
            <Form
              action="email-templates/subscribe-newsletter.php"
              method="post"
            >
              <Form.Control
                className="bg-white input-small border-color-white form-control required"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <input type="hidden" name="redirect" value="" />
              <Button
                className="btn222 btn222-small btn222-base-color ps-15px pe-15px base-color-hover submit"
                aria-label="submit"
                type="submit"
              >
                <i className="feather icon-feather-mail m-0 align-middle icon-small text-dark"></i>
              </Button>
              <div className="form-results border-radius-4px mt-15px pt-10px pb-10px ps-15px pe-15px fs-15 w-100 text-center position-absolute d-none"></div>
            </Form>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center pt-6 md-pt-50px">
        <Col lg={3} sm={6} className="text-center text-sm-start">
          <a to="demo-conference.html" className="footer-logo d-inline-block">
            <img
              src="https://gfa-tech.com/productivity-and-growth-program/images/providusplusgfa-removebg-preview.png"
              data-at2x="https://gfa-tech.com/productivity-and-growth-program/images/providusplusgfa-removebg-preview.png"
              alt=""
              width="auto"
              height="35"
            />
          </a>
        </Col>

        <Col lg={6} className="order-1 order-sm-3 order-lg-1 md-mt-15px">
          <ul className="footer-navbar alt-font text-center lh-normal">
            <li className="nav-item">
              <a to="#about" className="nav-link text-dark">
                About
              </a>
            </li>
            <li className="nav-item">
              <a to="#objectives" className="text-dark nav-link">
                Objectives
              </a>
            </li>
            <li className="nav-item">
              <a to="#components" className="text-dark nav-link">
                Components
              </a>
            </li>
            <li className="nav-item">
              <a to="#facilitators" className="text-dark nav-link">
                Facilitators
              </a>
            </li>
            <li className="nav-item">
              <a to="#pricing" className="text-dark nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </Col>

        <Col
          lg={3}
          sm={6}
          className="order-3 order-sm-2 order-lg-3 text-center text-sm-end xs-mt-10px last-paragraph-no-margin"
        >
          <p>
            © Copyright 2024 {""}
            <a
              to="https://dimpified.com"
              target="_blank"
              className="text-decoration-line-bottom text-dark"
            >
              DIMP
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default EventTemplate;
