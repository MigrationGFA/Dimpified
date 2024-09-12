// import node module libraries
import React, { Fragment, useEffect } from "react";
import {
  Layers,
  Grid,
  BoxSeam,
  LayoutTextSidebarReverse,
  StarFill,
  CardChecklist,
  People,
  ArrowRight,
  Calendar2Check,
  Messenger,
  BarChart,
  Envelope,
  Gift,
  CheckCircle,
  Window,
  CashStack,
  PlayCircleFill,
} from "react-bootstrap-icons";
import { FaCheck } from "react-icons/fa";
import { Container, Row, Col, Button, Accordion, Image } from "react-bootstrap";
import GradientBG from "../../assets/images/background/gradient-bg.png";

import BarberImg from "./images/barber-img.jpg";
import BarberBooking from "./images/barber-booking.jpg";
import BarberMoney from "./images/barber-money.jpg";
import BarberCustomer from "./images/talk-to-customer.jpg";
import Schedule from "./images/schedule.svg";
import VerifySVG from "./images/verify.svg";
import Payment from "./images/paymentSVG.svg";
import GlowBG from "./images/glow-bg.svg";

// import custom components

// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

const reviews = [
  {
    name: "Chinedu, Lagos",
    text: "Since using this software, my bookings have doubled, and I’ve seen a significant increase in repeat customers. The ability to manage everything from my phone is a game-changer!",
  },
  {
    name: "Ade, Abuja",
    text: "Building a website was so easy. Now, clients can see my work and book appointments online. My business has never been better!",
  },
  {
    name: "Femi, Port Harcourt",
    text: "The insights I get from the analytics tools have helped me understand my customers better and tailor my services to their needs. Highly recommended!",
  },
];

// import data files
const BarberLanding = () => {
  useEffect(() => {
    document.body.className = "bg-white";
  });

  return (
    <Fragment>
      {/*   Landing Page Navbar */}
      <NavbarLanding center />

      {/*   section  */}
      <section
        className="py-lg-10 py-6 px-4 fs-xs-16 position-relative bg-cover"
        style={{ backgroundImage: `url(${GlowBG})` }}
      >
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col
              lg={6}
              md={6}
              className="position-relative z-index-1 px-3 d-flex flex-column justify-content-center h-100"
            >
              <div className="fs-80 sm-fs-50 pe-lg-8 text-dark lh-100 fw-500 mb-6 ls-minus-3px fancy-text-style-4">
                <span className="d-inline-block">Be among the</span>{" "}
                <span className="fw-700 d-inline-block text-gradient-fast-blue-purple-light-orange">
                  top 1% of barbers
                </span>
              </div>
              <div className="fs-20 text-dark lh-34 xs-fs-19 mb-35px xs-mb-20px w-85 lg-w-95 sm-w-100 ls-minus-05px">
                Get a website. Get booked. Increase sales. Delight customers.
              </div>
              <div className="mb-4">
                <Button
                  href="/creator/signup"
                  target="_blank"
                  className="btn medium btn-big fs-16 btn-hover-animation-switch rounded-3 btn-box-shadow  fw-400 xs-mt-10px xs-mb-10px"
                >
                  <span className="btn-text ps-4">Get started for free</span>
                  <span className="btn-icon">
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </Col>
            <Col lg={5} md={6} className="offset-lg-1 ">
              <div className="d-flex justify-content-center position-relative">
                <img
                  src={BarberImg}
                  className="img-fluid w-100 rounded-4"
                  height={500}
                  alt=""
                />
                <Image
                  src={Schedule}
                  alt="schedule"
                  className="position-absolute top-50 start-100 translate-middle mt-n8 d-xl-block d-none"
                />
                <Image
                  src={VerifySVG}
                  alt="verify"
                  className="position-absolute top-50 start-0 translate-middle mt-n2 d-xl-block d-none"
                />
                <Image
                  src={Payment}
                  alt="card"
                  className="position-absolute top-50 start-0 translate-middle mt-8 d-xl-block d-none"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="down-section"
        style={{ backgroundImage: `url(${GradientBG})` }}
        className="border-bottom text-dark py-lg-10 py-8 px-4 px-lg-16 bg-cover"
      >
        <Container className="overlap-gap-section">
          <Row className="align-items-end justify-content-center mb-5 text-md-start">
            <Col xl={5} lg={6} md={10} className="text-lg-start mb-4">
              <h3 className="text-gradient-fast-blue-purple-light-orange fs-50 fw-500 mb-1 ls-minus-1px">
                The Future of barbing business is digital
              </h3>
            </Col>
            <Col xl={5} lg={6} md={10} className="offset-xl-2  text-lg-start">
              <p className="w-90 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100">
                In today’s fast-paced world, clients expect more than a great
                haircut. Our software solution helps barbers stay competitive
                with tools to create a website, manage bookings, engage
                customers, and boost sales—all from your phone.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-auto row-cols-xl-4 row-cols-sm-2 position-relative mt-lg-16">
            {/* Start features box item */}
            <Col className="align-self-start xs-mb-40px">
              <div className="feature-box text-start ps-30px pe-30px sm-ps-20px sm-pe-20px">
                <div className="feature-box-icon position-absolute left-0px top-0px">
                  <h1 className="alt-font fs-110  text-outline text-outline-width-1px text-outline-color-dark-gray  fw-800 ls-minus-1px opacity-2 mb-0">
                    01
                  </h1>
                </div>
                <div className="feature-box-content mt-lg-10 mt-6 last-paragraph-no-margin pt-30 lg-pt-60px sm-pt-40px">
                  <span className="alt-font text-dark fs-20 d-inline-block fw-600 mb-10px">
                    Get a website
                  </span>
                  <p>
                    Build a professional online presence with a custom website.
                  </p>
                  <span className="w-60px h-2px bg-dark-gray d-inline-block"></span>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="align-self-end mt-40px lg-mt-0">
              <div className="feature-box text-start ps-30px pe-30px sm-ps-20px sm-pe-20px">
                <div className="feature-box-icon position-absolute left-0px top-0px">
                  <h1 className="alt-font fs-110 text-outline text-outline-width-1px text-outline-color-dark-gray fw-800 ls-minus-1px opacity-2 mb-0">
                    02
                  </h1>
                </div>
                <div className="feature-box-content last-paragraph-no-margin pt-30 lg-pt-60px sm-pt-40px">
                  <span className="alt-font text-dark  mt-lg-10 mt-6 fs-20 d-inline-block fw-600 mb-10px">
                    Online booking system
                  </span>
                  <p>
                    Manage appointments and reduce no-shows with an easy-to-use
                    booking system.
                  </p>
                  <span className="w-60px h-2px bg-dark-gray d-inline-block"></span>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="align-self-start lg-mt-40px">
              <div className="feature-box text-start ps-30px pe-30px sm-ps-20px sm-pe-20px">
                <div className="feature-box-icon position-absolute left-0px top-0px">
                  <h1 className="alt-font fs-110 text-outline  mt-lg-10 mt-6 text-outline-width-1px text-outline-color-dark-gray fw-800 ls-minus-1px opacity-2 mb-0">
                    03
                  </h1>
                </div>
                <div className="feature-box-content last-paragraph-no-margin pt-30 lg-pt-60px sm-pt-40px">
                  <span className="alt-font text-dark fs-20 d-inline-block fw-600 mb-10px">
                    Get more customers
                  </span>
                  <p>
                    Attract and retain customers with data-driven marketing
                    strategies.
                  </p>
                  <span className="w-60px h-2px bg-dark-gray d-inline-block"></span>
                </div>
              </div>
            </Col>
            {/* End features box item */}

            {/* Start features box item */}
            <Col className="align-self-end mt-40px">
              <div className="feature-box text-start ps-30px pe-30px sm-ps-20px sm-pe-20px">
                <div className="feature-box-icon position-absolute left-0px top-0px">
                  <h1 className="alt-font fs-110 text-outline text-outline-width-1px text-outline-color-dark-gray fw-800 ls-minus-1px opacity-2 mb-0">
                    04
                  </h1>
                </div>
                <div className="feature-box-content  mt-lg-10 mt-6 last-paragraph-no-margin pt-30 lg-pt-60px sm-pt-40px">
                  <span className="alt-font text-dark fs-20 d-inline-block fw-600 mb-10px">
                    Make more money
                  </span>
                  <p>
                    Increase sales and get paid with our fluid payment gateways.
                  </p>
                  <span className="w-60px h-2px bg-dark-gray d-inline-block"></span>
                </div>
              </div>
            </Col>
            {/* End features box item */}
          </Row>
        </Container>
      </section>
      <section className="z-index-99  position-relative p-4 forward">
        <div className="stack-box-contain">
          <div className="stack-item stack-item-01 pt-lg-10 sm-pt-20px sm-pb-50px active">
            <div className="stack-item-wrapper">
              <Container className="h-100">
                <div className="position-absolute right-0px text-end top-0px z-index-minus-1 d-none d-lg-block">
                  <img src="images/crafto-landing-page-bg-03.png" alt="" />
                </div>
                <Row className="h-100 lg-h-auto align-items-center justify-content-center">
                  <Col lg={6} className="sm-mb-20px ">
                    <div className=" md-ms-0">
                      <img
                        src="https://dimpified.com/assets/templatesnoplay-Bp64AsgP.png"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </Col>

                  <Col xl={6} lg={6} className=" px-lg-8">
                    <span className="alt-font fs-12 fw-700 ps-25px pe-25px pt-5px pb-5px mb-20px text-uppercase text-dark bg-gradient-very-light-gray-transparent border-radius-100px d-inline-flex">
                      Showcase your work
                    </span>
                    <h1 className="alt-font text-dark fs-40 pb-2 pb-lg-4 fw-400 ls-minus-2px">
                      Create a Stunning Website in Minutes
                    </h1>
                    <p className="text-dark w-90 fs-5 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100 mb-4">
                      <span className="fw-600 text-dark">
                        Your website is your digital storefront.
                      </span>
                      With our software solution, you can easily create a
                      professional website that showcases your services,
                      portfolio, and customer testimonials.
                    </p>

                    <Row className="row-cols-1 row-cols-lg-2 row-cols-sm-2 justify-content-center mb-20px">
                      {/* Feature Box 1 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-warning-subtle">
                            <Window className="text-warning" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark fw-500">
                              Easy to use website builder with lots of
                              customizable templates.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 2 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-light-primary">
                            <Grid className="text-primary" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark fw-500">
                              Portfolio section to display your best work.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 3 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-light-info">
                            <CardChecklist className="text-info" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark fw-500">
                              Services and pricing section to suit your business
                              goals.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 4 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-success-subtle">
                            <People className="text-success" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark fw-500">
                              Customer testimonials to build trust and
                              credibility.
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* <Button
                      href="/creator/signup"
                      target="_blank"
                      className="btn btn-big p-4 fs-4 fw-500 btn-switch-text btn-rounded ls-0px"
                    >
                      Create your website
                    </Button> */}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <section className="z-index-99  position-relative p-2 forward">
        <div className="stack-box-contain">
          <div className="bg-light-pink rounded-4 py-lg-10 p-3 m-lg-16 m-3">
            <Container fluid className="h-100 position-relative">
              <div className="position-absolute top-0 start-0 d-none d-lg-block">
                <img src="images/crafto-landing-page-bg-04.png" alt="" />
              </div>
              <Row className="h-100 align-items-center justify-content-center">
                <Col
                  lg={5}
                  className="order-lg-2 order-1 mb-4 mb-lg-0  pe-lg-10"
                >
                  <div className="">
                    <img
                      src={BarberBooking}
                      className="w-100 rounded-4"
                      alt=""
                    />
                  </div>
                </Col>
                <Col
                  xl={6}
                  lg={7}
                  className="order-lg-1 order-2 offset-xl-1 pe-lg-16"
                >
                  <span className="alt-font fs-6 fw-bold py-2 px-3 mb-3 d-inline-block text-uppercase text-dark bg-gradient-light-pink-transparent rounded-pill">
                    Booking made easy
                  </span>
                  <h1 className="alt-font fs-40 text-dark fw-400 mb-3">
                    Effortless Booking Management
                  </h1>
                  <p className="fs-5 text-dark mb-4">
                    No more double bookings or missed appointments. Our
                    intuitive booking system allows your clients to book
                    appointments online, pay and resceive invoices. You can
                    manage your schedule from your dashboard, ensuring that your
                    chair is always full.
                  </p>
                  <Row className="mb-4">
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Calendar2Check className="text-success" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Online booking system integrated with your website.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Messenger className="text-info" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Automated SMS and email reminders to reduce no-shows.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Layers className="text-primary" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Real-time dashboard view to manage your schedule.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <LayoutTextSidebarReverse
                            className="text-warning"
                            size={30}
                          />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Customizable booking slots and service offerings.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    href="/creator/signup"
                    target="_blank"
                    variant="white"
                    className="btn-medium fw-400 btn-rounded"
                  >
                    <span>Get booked today!</span>
                    <ArrowRight className="ms-2" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
      <section className=" bg-white p-4 overflow-hidden">
        <Container fluid className="p-0">
          <Row className="justify-content-center g-0">
            <Col lg={5} className="sm-mb-20px px-lg-8 py-lg-10 ">
              <div className=" md-ms-0">
                <img src={BarberCustomer} className="w-100 rounded-4" alt="" />
              </div>
            </Col>
            <Col lg={6} md={10} className="px-lg-16  py-lg-10 py-3">
              <span className="alt-font fs-12 fw-700 ps-25px pe-25px pt-5px pb-5px mb-20px text-uppercase text-dark bg-gradient-very-light-gray-transparent border-radius-100px d-inline-flex">
                Know your customers
              </span>
              <h1 className="alt-font fs-40 mb-3 fw-400 ls-minus-2px">
                Understand and engage your customers
              </h1>
              <p className="text-dark fs-5 w-90 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100 mb-4">
                Knowing your customers is key to growing your business. Our
                software provides insights into customer behavior, preferences,
                and trends.
              </p>
              {/* start features box item */}
              <div className="icon-with-text-style-08 mb-15px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-45px h-45px rounded-circle bg-success-subtle border border-2 border-color-transparent-white-light box-shadow-large me-15px">
                    <FaCheck className="icon-very-small text-success" />
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-18 alt-font d-block text-dark">
                      Customer relationship management (CRM) system to store
                      client information.
                    </span>
                  </div>
                </div>
              </div>
              {/* start features box item */}
              {/* end features box item */}
              <div className="icon-with-text-style-08 mb-15px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-45px h-45px rounded-circle bg-success-subtle  border border-2 border-color-transparent-white-light box-shadow-large me-15px">
                    <FaCheck className="icon-very-small text-success" />
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-18 alt-font d-block text-dark">
                      Analytics dashboard to track customer trends and
                      preferences
                    </span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08 mb-15px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-45px h-45px rounded-circle bg-success-subtle  border border-2 border-color-transparent-white-light box-shadow-large me-15px">
                    <FaCheck className="icon-very-small text-success" />
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-18 alt-font d-block text-dark">
                      Email and SMS marketing tools to engage clients.
                    </span>
                  </div>
                </div>
              </div>
              {/* start features box item */}
              {/* end features box item */}
              <div className="icon-with-text-style-08">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-45px h-45px rounded-circle bg-success-subtle  border border-2 border-color-transparent-white-light box-shadow-large me-15px">
                    <FaCheck className="icon-very-small text-success" />
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-18 alt-font d-block text-dark">
                      Loyalty programs to reward repeat customers.
                    </span>
                  </div>
                </div>
              </div>
              {/* start features box item */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="z-index-99 p-4  position-relative p-0 forward">
        <div className="stack-box-contain">
          <div className="bg-light rounded-4 p-3 py-lg-10 m-lg-16">
            <Container fluid className="h-100 position-relative">
              <div className="position-absolute top-0 start-0 d-none d-lg-block">
                <img src="images/crafto-landing-page-bg-04.png" alt="" />
              </div>
              <Row className="h-100 align-items-center justify-content-center">
                <Col
                  lg={5}
                  className="order-lg-2 order-1 mb-4 mb-lg-0  pe-lg-10"
                >
                  <div className="">
                    <img src={BarberMoney} className="w-100 rounded-4" alt="" />
                  </div>
                </Col>
                <Col
                  xl={6}
                  lg={6}
                  className="order-lg-1 order-2 offset-xl-1 pe-lg-16"
                >
                  <span className="alt-font fs-6 fw-bold  py-2 px-3 mb-3 d-inline-block text-uppercase text-dark bg-gradient-light-pink-transparent rounded-pill">
                    Expand Your sales Streams
                  </span>
                  <h1 className="alt-font fs-40 text-dark fw-400 mb-3">
                    Get your money before the clients comes to your shop.
                  </h1>
                  <p className="fs-5 text-dark mb-4">
                    Increase your sales by offering multiple services to your
                    clients before they even step into your shop.
                  </p>
                  <Row className="mb-4">
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-light-subtle p-3 d-flex justify-content-center align-items-center">
                          <Layers className="text-dark" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Integrated service platform for listing numerous hair
                          services
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-light-subtle p-3 d-flex justify-content-center align-items-center">
                          <Grid className="text-dark" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Secure payment gateway for seamless transactions.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-light-subtle p-3 d-flex justify-content-center align-items-center">
                          <BoxSeam className="text-dark" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Promotional tools to offer discounts and special
                          deals.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-light-subtle p-3 d-flex justify-content-center align-items-center">
                          <CashStack className="text-dark" size={30} />
                        </div>
                        <span className="ms-3 text-dark fw-500">
                          Fast and seamless withdrawals.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    href="/creator/signup"
                    target="_blank"
                    variant="dark"
                    className="btn-medium fw-400 btn-rounded"
                  >
                    <span>Start earning now!</span>
                    <ArrowRight className="ms-2" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-gradient-top-very-light-gray  p-4 py-lg-12">
        <Container>
          <Row className="align-items-center justify-content-center text-center mb-6">
            <Col xl={10}>
              <h2 className="alt-font fs-50 fw-400 text-dark ls-minus-2px mb-0">
                Lots of barbing entrepreneurs use DIMP for their business.
              </h2>
            </Col>
          </Row>

          <Row className="">
            {reviews.map((review, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="bg-white p-4 md-p-5 sm-p-3 border-radius-6px mb-3">
                  <p className="mb-2 lh-26">{review.text}</p>
                  <div>
                    <span className="fs-17 text-dark fw-600">
                      {review.name}
                    </span>
                    <div className="review-star-icon text-warning lh-26 fs-18">
                      <StarFill />
                      <StarFill />
                      <StarFill />
                      <StarFill />
                      <StarFill />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Col xl={12} lg={12} md={12}>
            <div className="bg-primary py-lg-16 p-6 px-lg-20 rounded-4 text-center">
              <div>
                <h2 className="alt-font fs-40 fw-400 text-white ls-minus-2px mb-4">
                  Your barbing business just got way more easier.
                </h2>
                <p className="text-white fs-4">
                  Get a website. Get booked. Increase sales. Delight customers.
                </p>
                <Button
                  variant="white"
                  href="/creator/signup"
                  className="btn btn-extra-large rounded-3 px-6"
                >
                  Get Started For Free
                </Button>
              </div>
            </div>
          </Col>
        </Container>
      </section>
      <Button
        variant="medium btn-primary btn-big border-1 border-color-transparent-white-light btn-rounded"
        style={{
          position: "fixed",
          right: "40px",
          bottom: "60px",
          zIndex: 1000,
          fontSize: "16px",
        }}
      >
        Watch Demo{" "}
        <span>
          <PlayCircleFill size={20} />
        </span>
      </Button>

      <section className="px-lg-12 p-4 py-lg-18 bg-white">
        <Container>
          <Row className="align-items-center justify-content-center text-center mb-6">
            <Col xl={10}>
              <h2 className="alt-font fs-50 fw-400 text-dark ls-minus-2px mb-0">
                Frequently asked questions
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10} md={8} sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h3>
                      What is the purpose of your ecosystem management platform?
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    Our platform is designed to help professionals barbers
                    manage their online presence, client interactions, and
                    business growth efficiently. It integrates tools for website
                    building, booking module, payment management, and more, all
                    in one place.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h3>
                      How can your platform help me build a professional
                      website?
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    Our intuitive website builder, along with customizable
                    no-code templates, allows you to create a polished and
                    professional website quickly. You can showcase your
                    services, expertise, and achievements to attract potential
                    clients.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h3>Can I customize the templates to fit my brand?</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, our no-code templates are highly customizable. You
                      can tailor the content, layout, and features to match your
                      brand’s identity and specific needs, ensuring a consistent
                      and professional look.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h3>How does the booking feature benefit my barbershop?</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    The booking feature allows your clients to easily schedule
                    appointments online, reducing no-shows and double bookings.
                    It automates appointment management, sends reminders, and
                    helps you maintain a full schedule, which leads to higher
                    efficiency and customer satisfaction.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h3>
                      What kind of payment methods does your platform support?
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    Our platform supports a variety of payment methods,
                    including credit/debit cards, Flutterwave, Paystack and
                    other popular online payment systems. This flexibility
                    ensures a convenient and secure transaction experience for
                    your clients.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h3> What kind of support do you offer?</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer continuous support to our users. Whether you need
                    technical assistance or business advice, our dedicated
                    support team is here to help you succeed and make the most
                    of our platform.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h3>How can I get started with your platform?</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    Getting started is easy! Simply click "Get Started for free"
                    below, choose the plan that best fits your needs, and begin
                    exploring the features. Our user-friendly interface and
                    comprehensive onboarding resources will guide you through
                    the setup process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/*   Footer with center alignment */}
      <FooterCenter />
    </Fragment>
  );
};

export default BarberLanding;
