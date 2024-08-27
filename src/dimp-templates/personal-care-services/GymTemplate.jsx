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
  Navbar,
  Nav,
  Carousel,
  ButtonGroup,
  Accordion,
  Figure,
  Tab,
} from "react-bootstrap";
import { FaPlay, FaMapPin } from "react-icons/fa";

import {
  ArrowLeftShort,
  ArrowRightShort,
  StarFill,
  ArrowRight,
  EmojiSmile,
  Envelope,
  Journals,
  ChatSquareDots,
  Send,
  Telephone,
  People,
} from "react-bootstrap-icons";

const GymTemplate = () => {
  return (
    <Fragment>
      <Navbar
        bg=""
        expand="lg"
        className="px-lg-10 alt-font bg-cultured py-lg-3"
      >
        <Container>
          <Navbar.Brand
            className="fw-bold text-dark d-flex align-items-center"
            href="#home"
          >
            FASHION DESIGNER
            <img
              src="https://craftohtml.themezaa.com/images/demo-barber-icon-04.svg"
              alt="Icon"
              style={{ marginLeft: "10px", height: "24px" }} // Adjust the margin and height as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                className="gym-link text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#about"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="gym-link text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#services"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="gym-link text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#gallery"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="gym-link text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#testimonials"
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                className="gym-link text-dark"
                style={{ fontWeight: "600", fontSize: "1rem" }}
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button variant="dark" className="btn-round-edge">
              Join today!
              <ArrowRight className="ms-2" />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="gym bg-cultured position-relative overflow-hidden p-0 primary-font position-relative overflow-hidden p-0">
        <Row>
          <Col
            xl={5}
            lg={5}
            md={6}
            className="px-4 px-lg-20 pt-4 pt-lg-16 pb-3"
          >
            <span className="fs-19 lh-20 primary-font pb-4 ls-0 fw-bold text-dark d-inline-block mb-3">
              Upstanding Strength
            </span>
            <h2 className="fw-bold alt-font fs-50 text-dark mb-3">
              Strength Training Benefits for You
              <span className="text-primary">.</span>
            </h2>
            <p className="w-90">
              Our primary goal is to create awareness and easy access to keep
              your body, mind and spirit at peak performance.
            </p>

            <p className="fs-15 mb-4">
              Get your{" "}
              <span className="fw-bold text-dark">first payment today</span> and
              start now.
            </p>
            <Button variant="dark" className="btn-round-edge">
              Join today!
              <ArrowRight className="ms-2" />
            </Button>
          </Col>
          <Col xl={7} lg={5} md={6}>
            <div
              className="cover-background"
              style={{
                backgroundImage: `url('https://craftohtml.themezaa.com/images/demo-gym-and-fitness-home-06.jpg')`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            ></div>
          </Col>
        </Row>
      </section>
      <section className="gym bg-white primary-font position-relative overflow-hidden">
        <Container className="position-relative z-index-1">
          <Row className="row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07 pb-lg-14 pb-3">
            <Col className="text-center sm-mb-35px">
              <h1 className="alt-font fs-50 vertical-counter d-inline-flex text-dark-gray fw-700 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0">
                4566
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-dark-gray">
                Hours of Exercise
              </span>
            </Col>
            <Col className="text-center sm-mb-35px">
              <h1 className="alt-font fs-50 vertical-counter d-inline-flex text-dark-gray fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
                5635
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-dark-gray">
                Total Equipment
              </span>
            </Col>
            <Col className="text-center xs-mb-35px">
              <h1 className="alt-font fs-50 vertical-counter d-inline-flex text-dark-gray fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
                6546
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-dark-gray">
                People Trained
              </span>
            </Col>
            <Col className="text-center">
              <h1 className="alt-font fs-50 vertical-counter d-inline-flex text-dark-gray fw-700 mb-0 ls-minus-2px md-ls-0px position-relative">
                6365
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-dark-gray">
                Expert Trainers
              </span>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="position-relative order-2 order-lg-1">
              <div className="position-absolute left-20px top-0px d-none d-md-inline-block">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-gym-and-fitness-home-02.png"
                  alt="Fitness Program"
                  style={{ transform: "rotate(-10deg) translateY(50px)" }}
                />
              </div>
              <img
                src="https://craftohtml.themezaa.com/images/demo-gym-and-fitness-home-01.jpg"
                alt="Gym Session"
              />
              <div className="position-absolute right-minus-100px bottom-0px md-right-minus-30px d-none d-md-inline-block">
                <img
                  src="https://craftohtml.themezaa.com/images/demo-gym-and-fitness-home-03.png"
                  alt="Workout Plan"
                  style={{ transform: "translateY(50px)" }}
                />
              </div>
            </Col>
            <Col
              lg={5}
              className="offset-lg-1 mb-50px mt-40px md-mt-0 order-1 order-lg-2 xs-mb-35px"
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-dark-gray d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                Elevate Your Fitness Journey
              </span>
              <h2 className="h1 alt-font fs-50 fw-700 ls-minus-1px text-dark-gray mb-15px">
                Personalized Workout Programs
                <span className="text-base-color">.</span>
              </h2>
              <p className="w-85 mb-30px lg-w-100">
                Our tailored workout plans are designed to match your fitness
                goals. Whether you're a beginner or a pro, our programs will
                help you reach new heights.
              </p>
              <Button
                href="demo-gym-and-fitness-about.html"
                variant="dark"
                className="btn-large btn-round-edge me-15px"
              >
                Learn More
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                variant="link"
                className="btn-extra-large text-dark-gray pb-0"
              >
                <i className="bi bi-play-circle lh-normal align-middle icon-extra-medium me-5px"></i>
                How It Works
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="gym bg-white primary-font position-relative pt-1">
        <Container>
          <Row className="mb-7 xs-mb-40px">
            <Col
              xl={5}
              lg={6}
              className="d-flex flex-column align-items-start md-mb-20px"
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-dark-gray d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                Why choose us?
              </span>
              <h2 className="h1 alt-font fs-50 fw-700 ls-minus-1px text-dark-gray mb-10px">
                Enhancing your health
                <br /> and well-being
                <span className="text-base-color">.</span>
              </h2>
              <div className="fw-500 text-dark-gray w-100 mt-auto fs-19 ls-0px position-relative left-minus-20px d-flex align-items-center">
                <img
                  src="https://craftohtml.themezaa.com/images//demo-elearning-03.png"
                  alt=""
                />
                <span>
                  Fitness courses from{" "}
                  <span className="fw-600 text-decoration-line-bottom">
                    top experts.
                  </span>
                </span>
              </div>
            </Col>
            <Col
              lg={6}
              xl={{ span: 6, offset: 1 }}
              className="pe-50px md-pe-15px pricing-table-style-09"
            >
              <Row className="g-0">
                <Col xs={3} className="text-center align-self-center">
                  <img
                    src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-icon-01.png"
                    className="w-55px"
                    alt=""
                  />
                </Col>
                <Col
                  xs={8}
                  className="ps-40px pe-40px pt-30px pb-30px border-start border-color-extra-medium-gray xs-p-25px"
                >
                  <span className="fs-24 alt-font fw-500 text-dark-gray">
                    Professional Trainers
                  </span>
                  <p>Get guidance from certified professionals.</p>
                </Col>
                <Col xs={1} className="align-self-center">
                  <a
                    className="action"
                    href="demo-gym-and-fitness-classes.html"
                  >
                    <i className="bi bi-arrow-right text-dark-gray icon-extra-medium"></i>
                  </a>
                </Col>
              </Row>
              <Row className="border-top border-color-extra-medium-gray align-items-center g-0">
                <Col xs={3} className="text-center align-self-center">
                  <img
                    src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-icon-02.png"
                    className="w-55px"
                    alt=""
                  />
                </Col>
                <Col
                  xs={8}
                  className="ps-40px pe-40px pt-30px pb-30px border-start border-color-extra-medium-gray xs-p-25px"
                >
                  <span className="fs-24 alt-font fw-500 text-dark-gray">
                    Practice Videos
                  </span>
                  <p>Access on-demand training sessions anytime.</p>
                </Col>
                <Col xs={1} className="align-self-center">
                  <a
                    className="action"
                    href="demo-gym-and-fitness-classes.html"
                  >
                    <i className="bi bi-arrow-right text-dark-gray icon-extra-medium"></i>
                  </a>
                </Col>
              </Row>
              <Row className="border-top border-color-extra-medium-gray align-items-center g-0">
                <Col xs={3} className="text-center align-self-center">
                  <img
                    src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-icon-03.png"
                    className="w-55px"
                    alt=""
                  />
                </Col>
                <Col
                  xs={8}
                  className="ps-40px pe-40px pt-30px pb-30px border-start border-color-extra-medium-gray xs-p-25px"
                >
                  <span className="fs-24 alt-font fw-500 text-dark-gray">
                    Progress Reports
                  </span>
                  <p>Track your fitness journey and see your growth.</p>
                </Col>
                <Col xs={1} className="align-self-center">
                  <a
                    className="action"
                    href="demo-gym-and-fitness-classes.html"
                  >
                    <i className="bi bi-arrow-right text-dark-gray icon-extra-medium"></i>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute left-minus-50px bottom-minus-100px z-index-1 flex-column align-items-center justify-content-center w-220px h-220px lg-w-150px lg-h-150px md-w-130px md-h-130px border-radius-100 lg-bottom-minus-70px lg-left-minus-30px md-left-minus-20px md-bottom-minus-55px d-none d-lg-flex">
          <img
            src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-05.png"
            className="position-absolute top-50 translate-middle-y lg-w-45"
            alt=""
          />
          <img
            src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-04.png"
            className=""
            alt=""
          />
        </div>
      </section>
      <section className="gym bg-cultured primary-font position-relative overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Figure className="position-relative w-80 ms-auto">
                <img
                  src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-11.jpg"
                  className="border-radius-4px w-100"
                  alt="Fitness"
                />
                <Figure.Caption className="position-absolute border-radius-6px overflow-hidden box-shadow-small bottom-70px left-minus-120px w-180px text-center animation-float">
                  <div className="bg-white p-3">
                    <div className="position-relative mb-3">
                      <img
                        src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-12.jpg"
                        className="border-radius-4px"
                        alt="Morning Run"
                      />
                      <Link
                        to="https://www.youtube.com/watch?v=cfXHhfNy7tU"
                        className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle video-icon-box video-icon-medium"
                      >
                        <FaPlay className="text-dark-gray" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center text-start">
                      <div className="fs-5 fw-500 text-dark-gray">
                        Everyday Morning Run
                      </div>
                      <div className="ms-auto">
                        <img
                          src="https://craftohtml.themezaa.com/images//demo-gym-and-fitness-home-13.jpg"
                          alt="Runner"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-dark-gray pt-1 pb-1">
                    <FaMapPin className="text-base-color me-2" />
                    <span className="fs-6 text-white">Activity Tracker</span>
                  </div>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col
              xl={5}
              lg={6}
              className="offset-xl-1 text-center text-md-start"
            >
              <span className="fs-5 fw-600 text-dark-gray d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-3">
                Flexibility and Patience
              </span>
              <h2 className="h1 fw-700 alt-font fs-50 text-dark-gray">
                Fitness You’ll Enjoy with Our Workouts
                <span className="text-base-color">.</span>
              </h2>
              <Accordion defaultActiveKey="0" className="text-start">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="fs-5 text-dark-gray fw-500 mb-0">
                      How to Raise Overall Fitness Level?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our mission is to provide you with the ultimate fitness
                      experience, tailored to your needs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="fs-5 text-dark-gray fw-500 mb-0">
                      How Can We Achieve Health Naturally?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We focus on natural methods to help you achieve a healthy
                      lifestyle.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="fs-5 text-dark-gray fw-500 mb-0">
                      Can I Get a Personal Trainer for Yoga?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, our expert yoga trainers are available to guide you
                      on your fitness journey.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <div className="fs-1 fw-700 text-uppercase text-gradient-light-gray-white position-absolute bottom-0 start-0 z-index-minus-1 d-none d-lg-block">
            Exercise
          </div>
        </Container>
      </section>
      <section className="gym bg-white primary-font py-3 py-lg-10 pb-5 md-pb-8 overlap-height overflow-hidden">
        <Container className="overlap-gap-section">
          <Row className="align-items-center justify-content-center">
            <Col
              xl={5}
              lg={7}
              md={10}
              className="position-relative pe-xl-0 text-center text-xl-start lg-mb-10px"
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-dark-gray d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                Member Reviews
              </span>
              <h2 className="h1 alt-font fs-50 fw-700 ls-minus-1px text-dark-gray mb-10px w-80 lg-w-100">
                What our members say about our facilities
                <span className="text-base-color">.</span>
              </h2>

              <div className="d-flex justify-content-center justify-content-xl-start">
                {/* Slider navigation */}
                <div
                  className="text-dark-gray border border-1 border-color-extra-medium-gray"
                  role="button"
                  aria-label="Previous slide"
                >
                  <ArrowLeftShort className="icon-very-medium" />
                </div>
                <div
                  className="text-dark-gray border border-1 border-color-extra-medium-gray"
                  role="button"
                  aria-label="Next slide"
                >
                  <ArrowRightShort className="icon-very-medium" />
                </div>
                {/* End slider navigation */}
              </div>
            </Col>
            <Col xl={7} lg={10} className="overflow-hidden">
              <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
                <Carousel className="carousel-shadow-right sm-carousel-shadow-none magic-cursor overflow-visible ps-25px sm-p-0">
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
                          <p className="lh-22 d-block">Digital Marketer</p>
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
                          <p className="lh-22 d-block">Digital Marketer</p>
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
                    <div className="d-flex border rounded rounded-md px-3 px-lg-6 justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px">
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
                          <p className="lh-22 d-block">Digital Marketer</p>
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
                          src="https://craftohtml.themezaa.com/images//avtar-30.jpg"
                          alt="Reviewer"
                        />
                        <div className="d-inline-block align-middle">
                          <div className="fs-22 alt-font fw-500 text-dark-gray">
                            Jacob Kalling
                          </div>
                          <p className="lh-22 d-block">Digital Marketer</p>
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
                Rated 4.8 out of 5.0 based on members'{" "}
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
        className="gym primary-font bg-cultured px-4"
        style={{ height: "auto" }}
      >
        <Container>
          <Row className="align-items-end mb-6">
            <Col xl={5} lg={6} md={9} className="text-center text-lg-start">
              <div className="d-inline-block mb-3">
                <div className="d-flex align-items-center">
                  <div>
                    <span className="fs-5 primary-font fw-500 text-dark">
                      Experienced Instructors
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-dark fs-50 alt-font fw-600 mb-3">
                We have amazing instructors
              </h2>
            </Col>
            <Col xl={5} lg={6} md={10} className="text-center text-lg-start">
              <p className="text-dark primary-font">
                Our team is highly skilled and experienced in various workouts,
                ensuring quality training and support.
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
        id="contact"
        className="gym bg-white primary-font px-4 overflow-hidden position-relative overlap-height py-6 py-lg-8"
      >
        <Container className="px-4 py-6 overlap-gap-section">
          <Row className="justify-content-center mb-3">
            <Col xs={12} className="text-center">
              <h2 className="alt-font fs-50 text-dark-gray fw-600 ls-minus-3px">
                How can we assist you?
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center mb-10">
            <Col xl={9} lg={10}>
              <Form
                action="email-templates/contact-form.php"
                method="post"
                className="contact-form-style-03"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                        Your Name*
                      </Form.Label>
                      <div className="position-relative">
                        <span className="form-icon">
                          <EmojiSmile className="text-dark-gray" />
                        </span>
                        <Form.Control
                          className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent"
                          type="text"
                          name="name"
                          placeholder="Please enter your name"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                        Your Email*
                      </Form.Label>
                      <div className="position-relative">
                        <span className="form-icon">
                          <Envelope className="text-dark-gray" />
                        </span>
                        <Form.Control
                          className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent"
                          type="email"
                          name="email"
                          placeholder="Please enter your email"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                        Your Phone*
                      </Form.Label>
                      <div className="position-relative">
                        <span className="form-icon">
                          <Telephone className="text-dark-gray" />
                        </span>
                        <Form.Control
                          className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent"
                          type="tel"
                          name="phone"
                          placeholder="Please enter your phone number"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                        Subject
                      </Form.Label>
                      <div className="position-relative">
                        <span className="form-icon">
                          <Journals className="text-dark-gray" />
                        </span>
                        <Form.Control
                          className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent"
                          type="text"
                          name="subject"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-4">
                      <Form.Label className="form-label fs-14 text-uppercase text-dark-gray fw-600 mb-0">
                        Message
                      </Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          className="ps-0 border-radius-0px border-color-extra-medium-gray bg-transparent"
                          name="comment"
                          placeholder="Please describe your request"
                        />
                        <span className="form-icon">
                          <ChatSquareDots className="text-dark-gray" />
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={8} className="text-center text-md-start">
                    <p className="mb-0 fs-15 lh-26 w-80 lg-w-100">
                      We value your privacy. Your information will only be used
                      to respond to your request.
                    </p>
                  </Col>
                  <Col md={4} className="text-center text-md-end mb-4">
                    <Button
                      type="submit"
                      className="btn btn-dark-gray btn-rounded btn-box-shadow"
                    >
                      <Send className="me-2" />
                      Send Message
                    </Button>
                  </Col>
                  <Col xs={12}>
                    <div className="form-results mt-20px d-none"></div>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <footer
        className="text-center"
        style={{ padding: "20px", backgroundColor: "#343a40", color: "white" }}
      >
        <p>&copy; 2024 FashionDesign. All rights reserved.</p>
      </footer>
    </Fragment>
  );
};

export default GymTemplate;
