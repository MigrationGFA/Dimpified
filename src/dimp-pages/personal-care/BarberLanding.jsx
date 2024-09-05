// import node module libraries
import React, { Fragment, useEffect } from "react";
import {
  Layers,
  Grid,
  BoxSeam,
  LayoutTextSidebarReverse,
  StarFill,
  CardChecklist,
  PeopleFill,
  ArrowRight,
  Calendar2Check,
  Messenger,
} from "react-bootstrap-icons";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import GradientBG from "../../assets/images/background/gradient-bg.png";

import BarberImg from "./images/barber-img.jpg";
import BarberBooking from "./images/barber-booking.jpg";
import BarberMoney from "./images/barber-money.jpg";
import BarberCustomer from "./images/talk-to-customer.jpg";

// import custom components

// import layouts
import NavbarLanding from "../../dimp-home/NavbarLanding";
import FooterCenter from "../../dimp-home/FooterWithLinks";

const reviews = [
  {
    name: "Dcappe",
    text: "I have purchased more than a couple themes through themeforest and by far, the support that I received from the themezaa team has been the best I have ever gotten.",
  },
  {
    name: "Afcreativeaustralia",
    text: "I love this theme, not only did it have the customisation and layouts I needed, but the variety and options available for customisation are outstanding and absolutely worth every cent it costs. Highly recommend it to anyone wanting an excellent WordPress website.",
  },
  {
    name: "Guyadamson",
    text: "I've been working with the Litho WordPress theme by Themezaa for many years now on several client websites. Their theme templates have a modern and spacious design aesthetic whilst integrating perfectly with Elementor and therefore are fully customisable.",
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
        className="py-lg-10 py-6  position-relative bg-cover"
        style={{ backgroundImage: "url('images/demo-marketing-dot.svg')" }}
      >
        <div className="bg-gradient-black-green position-absolute left-0 top-0 h-100 w-100 z-index-minus-1"></div>
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col
              lg={6}
              md={9}
              className="position-relative z-index-1 px-3 d-flex flex-column justify-content-center h-100"
            >
              <div className="fs-80 lg-fs-80 pe-lg-8 text-dark-gray lh-100 fw-500 mb-6 ls-minus-5px fancy-text-style-4">
                <span className="d-inline-block">Be among the</span>
                <span className="fw-700 d-inline-block text-gradient-fast-blue-purple-light-orange">
                  top 1% of barbers
                </span>
              </div>
              <div className="fs-20 lh-34 xs-fs-19 mb-35px xs-mb-20px w-85 lg-w-95 sm-w-100 ls-minus-05px">
                Transform your barbing business with cutting-edge digital
                solutions.
              </div>
              <div>
                <Button
                  href="index.html"
                  target="_blank"
                  className="btn btn-extra-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow me-20px fw-400 xs-mt-10px xs-mb-10px"
                >
                  <span className="btn-text">Get started for free</span>
                  <span className="btn-icon">
                    <i className="feather icon-feather-arrow-right"></i>
                  </span>
                </Button>
                <Button
                  href="index.html"
                  target="_blank"
                  className="btn btn-extra-large btn-white btn-round-edge btn-box-shadow fw-600 xs-mt-10px xs-mb-10px"
                >
                  Get started
                </Button>
              </div>
            </Col>
            <Col lg={5} md={6} className="offset-lg-1 ">
              <div className="d-flex justify-content-center">
                <img
                  src={BarberImg}
                  className="w-100 rounded-4"
                  height={500}
                  alt=""
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
          <Row className="align-items-end justify-content-center mb-5 text-center text-md-start">
            <Col
              xl={5}
              lg={6}
              md={10}
              className="text-center text-lg-start mb-4"
            >
              <h3 className="text-gradient-fast-blue-purple-light-orange fs-50 fw-500 mb-1 ls-minus-1px">
                The Future of barbing business is digital
              </h3>
            </Col>
            <Col
              xl={5}
              lg={6}
              md={10}
              className="offset-xl-2 text-center text-lg-start"
            >
              <p className="w-90 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100">
                In today’s fast-paced world, clients expect more than a great
                haircut. Our software helps barbers stay competitive with tools
                to create a website, manage bookings, engage customers, and
                boost revenue—all from your phone.
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
                  <span className="alt-font text-dark-gray fs-20 d-inline-block fw-600 mb-10px">
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
                  <span className="alt-font text-dark-gray  mt-lg-10 mt-6 fs-20 d-inline-block fw-600 mb-10px">
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
                  <span className="alt-font text-dark-gray fs-20 d-inline-block fw-600 mb-10px">
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
                  <span className="alt-font text-dark-gray fs-20 d-inline-block fw-600 mb-10px">
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
      <section className="z-index-99  position-relative p-0 forward">
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

                  <Col xl={5} lg={6} className="offset-xl-1 pe-lg-10">
                    <span className="alt-font fs-12 fw-700 ps-25px pe-25px pt-5px pb-5px mb-20px text-uppercase text-dark-gray bg-gradient-very-light-gray-transparent border-radius-100px d-inline-flex">
                      Showcase your work
                    </span>
                    <h1 className="alt-font text-dark-gray fs-40 fw-400 ls-minus-2px">
                      Create a Stunning Website in Minutes
                    </h1>
                    <p className="w-90 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100 mb-4">
                      <span className="fw-600 text-dark-gray">
                        Your website is your digital storefront
                      </span>
                      . With our software, you can easily create a professional
                      website that showcases your services, portfolio, and
                      customer testimonials.
                    </p>
                    <Row className="row-cols-1 row-cols-lg-2 row-cols-sm-2 justify-content-center mb-20px">
                      {/* Feature Box 1 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white">
                            <LayoutTextSidebarReverse
                              className="text-dark-gray"
                              size={30}
                            />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Easy to use website builder with lots of
                              customizable templates.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 2 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white">
                            <Grid className="text-dark-gray" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Portfolio section to display your best work.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 3 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white">
                            <CardChecklist
                              className="text-dark-gray"
                              size={30}
                            />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Services and pricing section to suit your business
                              goals.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 4 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white">
                            <PeopleFill className="text-dark-gray" size={30} />
                          </div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Customer testimonials to build trust and
                              credibility.
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      href="demo-scattered-portfolio.html"
                      target="_blank"
                      className="btn btn-big p-3 fw-500 btn-switch-text btn-rounded ls-0px"
                    >
                      Create your website
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <section className="z-index-99  position-relative p-0 forward">
        <div className="stack-box-contain">
          <div className="bg-light-pink rounded-4 py-lg-10 m-lg-10">
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
                  <span className="alt-font fs-6 fw-bold py-2 px-3 mb-3 d-inline-block text-uppercase text-dark-gray bg-gradient-light-pink-transparent rounded-pill">
                    Booking made easy
                  </span>
                  <h1 className="alt-font fs-40 text-dark-gray fw-400 mb-3">
                    Effortless Booking Management
                  </h1>
                  <p className="fs-5 text-dark-gray mb-4">
                    No more double bookings or missed appointments. Our
                    intuitive booking system allows your clients to book
                    appointments online, receive reminders, and even reschedule
                    with ease. You can manage your schedule from your phone,
                    ensuring that your chair is always full.
                  </p>
                  <Row className="mb-4">
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Calendar2Check
                            className="text-dark-gray"
                            size={30}
                          />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Online booking system integrated with your website.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Messenger className="text-dark-gray" size={30} />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Automated SMS and email reminders to reduce no-shows.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <BoxSeam className="text-dark-gray" size={30} />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Real-time dashboard view to manage your schedule.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <LayoutTextSidebarReverse
                            className="text-dark-gray"
                            size={30}
                          />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Customizable booking slots and service offerings.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    href="demo-blogger.html"
                    target="_blank"
                    variant="dark"
                    className="btn-extra-large fw-500 btn-rounded"
                  >
                    <span>Get started for free</span>
                    <ArrowRight className="ms-2" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="z-index-99  position-relative p-0 forward">
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
                        src={BarberCustomer}
                        className="w-100 rounded-4"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col xl={5} lg={6} className="offset-xl-1 pe-lg-10">
                    <span className="alt-font fs-12 fw-700 ps-25px pe-25px pt-5px pb-5px mb-20px text-uppercase text-dark-gray bg-gradient-very-light-gray-transparent border-radius-100px d-inline-flex">
                      Showcase your work
                    </span>
                    <h1 className="alt-font text-dark-gray fs-40 fw-400 ls-minus-2px">
                      Understand and Engage Your Customers
                    </h1>
                    <p className="w-90 mb-0 xxl-w-100 md-w-80 md-mx-auto sm-w-100 mb-4">
                      Knowing your customers is key to growing your business.
                      Our software provides insights into customer behavior,
                      preferences, and trends.
                    </p>
                    <Row className="row-cols-1 row-cols-lg-2 row-cols-sm-2 justify-content-center mb-20px">
                      {/* Feature Box 1 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white"></div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Customer relationship management (CRM) system to
                              store client information.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 2 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white"></div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Analytics dashboard to track customer trends and
                              preferences.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 3 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white"></div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Email and SMS marketing tools to engage clients.
                            </span>
                          </div>
                        </div>
                      </Col>
                      {/* Feature Box 4 */}
                      <Col className="icon-with-text-style-08 mb-25px">
                        <div className="feature-box feature-box-left-icon-middle">
                          <div className="feature-box-icon feature-box-icon-rounded box-shadow-medium-bottom w-70px h-70px md-w-60px md-h-60px me-15px rounded-circle bg-white"></div>
                          <div className="feature-box-content last-paragraph-no-margin">
                            <span className="lh-22 d-inline-block text-dark-gray fw-500">
                              Loyalty programs to reward repeat customers.
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Button
                      href="demo-scattered-portfolio.html"
                      target="_blank"
                      className="btn-extra-large btn-dark-gray fw-500 btn-box-shadow btn-rounded ls-0px"
                    >
                      Create your portfolio
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <section className="z-index-99  position-relative p-0 forward">
        <div className="stack-box-contain">
          <div className="bg-light-pink rounded-4 py-lg-10 m-lg-10">
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
                  xl={5}
                  lg={6}
                  className="order-lg-1 order-2 offset-xl-1 pe-lg-16"
                >
                  <span className="alt-font fs-6 fw-bold  py-2 px-3 mb-3 d-inline-block text-uppercase text-dark-gray bg-gradient-light-pink-transparent rounded-pill">
                    Expand Your Revenue Streams
                  </span>
                  <h1 className="alt-font fs-40 text-dark-gray fw-400 mb-3">
                    Get revenue before clients comes to your shop.
                  </h1>
                  <p className="fs-5 text-dark-gray mb-4">
                    Increase your sales by offering multiple services to your
                    clients before they even step into your shop.
                  </p>
                  <Row className="mb-4">
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Layers className="text-dark-gray" size={30} />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Integrated service platform for listing numerous hair
                          services
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <Grid className="text-dark-gray" size={30} />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Secure payment gateway for seamless transactions.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <BoxSeam className="text-dark-gray" size={30} />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Promotional tools to offer discounts and special
                          deals.
                        </span>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-white p-3 d-flex justify-content-center align-items-center">
                          <LayoutTextSidebarReverse
                            className="text-dark-gray"
                            size={30}
                          />
                        </div>
                        <span className="ms-3 text-dark-gray fw-500">
                          Fast and seamless withdrawals.
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Button
                    href="demo-blogger.html"
                    target="_blank"
                    variant="dark"
                    className="btn-extra-large fw-500 btn-rounded"
                  >
                    <span>Start selling online</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-gradient-top-very-light-gray bg-trusted-customers">
        <Container>
          <Row className="align-items-center justify-content-center text-center mb-6">
            <Col xl={10}>
              <span className="alt-font fs-12 lh-30px fw-700 ps-3 pe-3 pt-1 pb-1 mb-3 text-uppercase text-dark-gray bg-gradient-very-light-gray-transparent border-radius-100px d-inline-block">
                Trusted and experienced power elite author
              </span>
              <h2 className="alt-font fs-50 fw-400 text-dark-gray ls-minus-2px mb-0">
                Over 50,000 Barbing entrepreneurs use DIMP for their business.
              </h2>
            </Col>
          </Row>

          <Row className="trusted-customers">
            {reviews.map((review, index) => (
              <Col lg={4} md={12} key={index}>
                <div className="bg-white box-shadow-extra-large p-4 lg-p-3 md-p-5 sm-p-3 border-radius-6px mb-3">
                  <p className="mb-2 lh-26">{review.text}</p>
                  <div>
                    <span className="fs-17 text-dark-gray fw-600">
                      {review.name}
                    </span>
                    <div className="review-star-icon lh-26 fs-18">
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
      <section className="px-lg-12 px-4 py-8 py-lg-18 bg-light">
        <Container>
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
                    Our platform is designed to help professionals and
                    consultants manage their online presence, client
                    interactions, and business growth efficiently. It integrates
                    tools for website building, e-commerce, user onboarding,
                    payment management, and more, all in one place.
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
                    <h3>
                      How does the e-commerce feature benefit my consulting
                      business?
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    The e-commerce feature enables you to list your consulting
                    packages, professional services, and related products
                    easily. It also simplifies payment management, ensuring
                    secure and smooth transactions, which enhances client
                    confidence and boosts sales.
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
                    including credit/debit cards, Flutterwave, and other popular
                    online payment systems. This flexibility ensures a
                    convenient and secure transaction experience for your
                    clients.
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
