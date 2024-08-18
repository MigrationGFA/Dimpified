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
} from "react-bootstrap";

const StateUpskilling = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <HeroRightImage />
      <Audience />
      <HeroLeftImage />
      <Services />
      <LargeCTA />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default StateUpskilling;

// Navbar Component
const Navbar = () => (
  <BootstrapNavbar bg="transparent" expand="lg" className="gov px-4 px-lg-10 py-lg-3">
    <Container>
      <BootstrapNavbar.Brand
        className="fw-bold text-dark d-flex align-items-center"
        href="#home"
      >
        <img
          src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/gfa_kaduna.png"
          alt="Icon"
          style={{ marginLeft: "10px", height: "24px" }} // Adjust the margin and height as needed
        />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className="text-dark"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#about"
          >
            ABOUT THE PROGRAMME
          </Nav.Link>
          <Nav.Link
            className="text-dark"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#benefit"
          >
            WHAT TO GAIN?
          </Nav.Link>
          <Nav.Link
            className="text-dark"
            style={{ fontWeight: "600", fontSize: "1rem" }}
            href="#audience"
          >
            WHO SHOULD APPLY?
          </Nav.Link>
        </Nav>
        <Button className="btn-gov">
          <i className="feather icon-feather-calendar"></i>
          Register Now
        </Button>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);

// Hero Section
const Hero = () => (
  <section className="gov hero-area hero-speakers">
    <div
      className="banner-item px-4"
      style={{
        backgroundImage:
          "url(https://pbs.twimg.com/media/FlT81XUWAAIpV1f.jpg:large)",
      }}
    >
      <Container>
        <Row>
          <Col lg={7}>
            <div className="banner-content-wrap">
              <h1 className="banner-title" style={{ color: "#ffffff" }}>
                <span style={{ color: "#00B55B" }}>Kaduna Digital</span>
                <br />
                Skills Program
              </h1>
              <h4 className="" style={{ color: "#ffffff" }}>
                Registration Ends:
                <span style={{ color: "#000000" }}>September 4, 2024</span>
              </h4>

              <div className="banner-btn">
                <Button
                  href="https://gfa-tech.com/register-kaduna-digital-academy/"
                  className="btn-gov"
                >
                  Register Now!
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4} className="offset-lg-1">
            {/* You can add additional content or forms here */}
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

// About Section
const About = () => (
  <section
    id="about"
    className="gov pb-6 px-3"
    style={{ backgroundColor: "#f9fafc" }}
  >
    <Container id="about">
      <Row>
        <Col lg={10} className="mx-auto">
          <div className="blog-details">
            <div className="post-meta text-center" id="about">
              <span>ABOUT THE PROGRAM</span>
            </div>
            <div className="entry-header">
              <h2 className="entry-title text-center">
                Providing Comprehensive Upskilling
                <br /> To Youths And SMEs In Kaduna State
              </h2>
            </div>
            <div className="post-content post-single">
              <div className="post-body clearfix">
                <div className="entry-content" style={{ textAlign: "justify" }}>
                  <p
                    className="text-meta"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    The Kaduna Digital Skills Program is a visionary initiative
                    aimed to provide youth and SMEs comprehensive support in
                    areas such as digital literacy, entrepreneurship training,
                    access to finance, mentorship, as well as placement for jobs
                    and income generation opportunities. Our mission is to
                    unleash the potentials of youth and SMEs through relevant
                    technological training and skill acquisition.
                  </p>
                  <p
                    className="text-meta"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    Our vision involves selecting and nurturing potential youths
                    and early-stage businesses in Kaduna State. Through tailored
                    mentorship, skill enhancement, and the seamless integration
                    of cutting-edge technology, we aspire to make youths
                    job-ready and catapult businesses to unprecedented levels of
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Services Section
const HeroRightImage = () => (
  <section id="ts-experiences" className="gov p-0 ts-experiences">
    <Container fluid>
      <Row>
        <Col lg={6} className="px-0 align-self-center">
          <div className="ts-exp-wrap">
            <div className="ts-exp-content">
              <p style={{ fontSize: "18px" }}>
                <i className="fa fa-quote-left"></i>
                <br />
                We're dedicated to leveraging our city's immense potential to
                emerge as the premier tech talent hub in Africa. Through our
                dynamic ecosystem, varied talent pool, and strategic alliances,
                we're establishing the groundwork for innovation and business
                creation to flourish.
                <br />
                <br />
                Collectively, we aim to propel Kaduna to the vanguard of
                technological progress, empowering our young generation and
                fueling long-term economic development.
                <br />
                <i className="fa fa-quote-right"></i>
                <br />
                <br />
                <span style={{ fontSize: "18px", fontWeight: 700 }}>
                  Hon. Uba Sani
                </span>
                <br />
                <span>Governor, Kaduna State.</span>
              </p>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          className="no-padding"
          style={{
            backgroundImage: `url(https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-gov.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Row>
    </Container>
    {/* <img src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-gov.jpg" className="him" width="100%" height="auto" alt="Kaduna Governor" /> */}
  </section>
);
const Audience = () => (
  <section className="gov px-4 ts-intro-item section-bg px-4" id="audience">
    <Container>
      <Row>
        <Col
          lg={4}
          className="wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay="300ms"
        >
          <div className="intro-left-content">
            <h2 className="column-title">
              <span>Who should be involved?</span>
              Who should apply for the Program?
            </h2>
            <p>
              The Program is for indigenes and residents of Kaduna state that
              are:
            </p>
            <Button
              href="https://gfa-tech.com/register-kaduna-digital-academy/"
              className="btn-gov"
              style={{ marginBottom: "1rem" }}
            >
              Register now!
            </Button>
          </div>
        </Col>

        <Col lg={8}>
          <Row>
            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="400ms"
            >
              <div className="single-intro-text mb-30">
                <i className="icon icon-ca"></i>
                <h3 className="ts-title">Job Seekers</h3>
                <span className="count-number">01</span>
              </div>
            </Col>

            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="500ms"
            >
              <div className="single-intro-text mb-30">
                <i className="icon icon-government"></i>
                <h3 className="ts-title">Business Owners</h3>
                <span className="count-number">02</span>
              </div>
            </Col>

            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="600ms"
            >
              <div className="single-intro-text mb-30">
                <i className="icon icon-idea"></i>
                <h3 className="ts-title">Working Class Professionals</h3>
                <span className="count-number">03</span>
              </div>
            </Col>

            <Col
              lg={6}
              className="wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="700ms"
            >
              <div className="single-intro-text mb-30">
                <i className="icon icon-fu"></i>
                <h3 className="ts-title">Aspiring Business Owners</h3>
                <span className="count-number">04</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

// Gallery Section
const HeroLeftImage = () => (
  <section id="benefit" className="gov ts-experiences">
    {/* <img src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-comm.jpg" className="him" width="100%" height="auto" alt="Kaduna Community" /> */}

    <Container fluid>
      <Row>
        <Col
          lg={6}
          sm={12}
          className="p-0"
          style={{
            backgroundImage:
              "url(https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-comm.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Background Image Column */}
        </Col>
        <Col lg={6} className="p-0 align-self-center">
          <div className="ts-exp-wrap">
            <div className="ts-exp-content">
              <h2 className="column-title">
                <span>
                  From the Office of the Commissioner for Business, Innovation
                  and Technology - What do you stand to gain?
                </span>
                Technology Skill acquisition, entrepreneurship training as well
                as placement for jobs and income generation opportunities.
              </h2>
              <p>
                The Program intends to aggregate youths, SMEs, and business
                owners and help them through the skill acquisition phase. The
                Program will also help in developing knowledge and networks
                necessary to:
              </p>
              <ul style={{ color: "#fff", marginLeft: "2rem" }}>
                <li>Gain access to new job markets</li>
                <li>Attract companies and hiring managers</li>
                <li>Access finance opportunities</li>
                <li>Develop soft skills</li>
                <li>Build self-confidence</li>
              </ul>
              <br />
              <br />
              <span
                style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}
              >
                Mrs. Patience Fakai
              </span>
              <br />
              <span style={{ color: "#fff" }}>
                Commissioner for Business, Innovation and Technology
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Testimonials Section
const Services = () => (
  <section className="gov px-4 ts-event-outcome px-4">
    <Container>
      <div className="intro-left-content">
        <h2 className="column-title">
          <span>Available Categories</span>
          Choose from a wide range of skills in any of these:
        </h2>
      </div>

      <Row>
        <Col lg={3}>
          <div className="outcome-content">
            <div className="outcome-img">
              <img
                src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/side-view-man-doing-presentation-meeting_23-2148817044.jpg"
                alt="Soft Skills"
              />
            </div>
            <h3 className="img-title text-white">Soft Skills</h3>
          </div>
        </Col>

        <Col lg={3}>
          <div className="outcome-content">
            <div className="outcome-img">
              <img
                src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/side-view.png"
                alt="Tech Enabled & Adjacent Skills"
              />
            </div>
            <h3 className="img-title text-white">
              Tech Enabled &amp; Adjacent Skills
            </h3>
          </div>
        </Col>

        <Col lg={3}>
          <div className="outcome-content">
            <div className="outcome-img">
              <img
                src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/composition-with-html-system-websites_23-2150866292.jpg"
                alt="Core & Advanced Tech Skills"
              />
            </div>
            <h3 className="img-title text-white">
              Core &amp; Advanced Tech Skills
            </h3>
          </div>
        </Col>

        <Col lg={3}>
          <div className="outcome-content">
            <div className="outcome-img">
              <img
                src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/smiley-african-woman-working-market_23-2148761563.jpg"
                alt="SME Technical Skills"
              />
            </div>
            <h3 className="img-title text-white">SME Technical Skills</h3>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Contact Section
const LargeCTA = () => (
  <section
    className="gov px-4 ts-book-seat"
    style={{
      backgroundImage:
        "url(https://gfa-tech.com/projects/kaduna-digital-skills-program/images/book_seat_img.jpg)",
    }}
  >
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="book-seat-content text-center">
            <h2 className="section-title white">
              <span>Hurry up!</span>
              Application closes on 2nd of August, 2024
            </h2>
            <Button
              href="https://gfa-tech.com/register-kaduna-digital-academy/"
              style={{ marginBottom: "1rem" }}
              className="btn-gov"
            >
              Register now!
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
const Blog = () => (
  <section className="gov px-4 ts-blog section-bg">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">
            What's being said about the program?
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className="post">
            <div className="post-media post-image">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blueprint.ng/kaduna-launches-digital-skills-training-smes-for-100000-youth/"
              >
                <img
                  src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-state-logo.jpg"
                  className="img-fluid"
                  alt="Kaduna State Logo"
                />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">BLUEPRINT NG</a>
                </span>
              </div>
              <div className="entry-content">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blueprint.ng/kaduna-launches-digital-skills-training-smes-for-100000-youth/"
                >
                  <p style={{ color: "#000" }}>
                    Kaduna launches digital skills training, SMEs for 100,000
                    youth
                  </p>
                </a>
              </div>
              <div className="post-footer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blueprint.ng/kaduna-launches-digital-skills-training-smes-for-100000-youth/"
                  className="btn-link"
                >
                  Read More <i className="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="post">
            <div className="post-media post-image">
              <a target="_blank" rel="noopener noreferrer" href="index.html">
                <img
                  src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-state-logo.jpg"
                  className="img-fluid"
                  alt="GFA Technologies"
                />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">GFA TECHNOLOGIES</a>
                </span>
              </div>
              <div className="entry-content">
                <a target="_blank" rel="noopener noreferrer" href="index.html">
                  <p style={{ color: "#000" }}>
                    GFA Technologies Unveils The Kaduna Digital Skills Program,
                    an Initiative for Kaduna State SMEs and Youths
                  </p>
                </a>
              </div>
              <div className="post-footer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="index.html"
                  className="btn-link"
                >
                  Read More <i className="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="post">
            <div className="post-media post-image">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.peoplesdailyng.com/kaduna-launches-digital-skills-training-for-100000-youths/"
              >
                <img
                  src="https://gfa-tech.com/projects/kaduna-digital-skills-program/images/kaduna-state-logo.jpg"
                  className="img-fluid"
                  alt="Kaduna State Logo"
                />
              </a>
            </div>
            <div className="post-body">
              <div className="post-meta">
                <span className="post-author">
                  <a href="#">PEOPLES DAILY NG</a>
                </span>
              </div>
              <div className="entry-content">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.peoplesdailyng.com/kaduna-launches-digital-skills-training-for-100000-youths/"
                >
                  <p style={{ color: "#000" }}>
                    Kaduna launches digital skills training for 100,000 youths
                  </p>
                </a>
              </div>
              <div className="post-footer">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.peoplesdailyng.com/kaduna-launches-digital-skills-training-for-100000-youths/"
                  className="btn-link"
                >
                  Read More <i className="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="gov px-4 ts-footer" style={{ padding: "1rem 0rem" }}>
    <Container>
      <Row>
        <Col lg={12}>
          <div className="copyright-text text-center">
            <p>
              Copyright © 2024{" "}
              <a href="https://gfa-tech.com">GFA Technologies.</a> All Rights
              Reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);
