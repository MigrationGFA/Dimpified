// import "./Template1.css";
import React, { useState, Fragment, useRef } from "react";

import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateContent,
  updateStyles,
  updateFAQ,
} from "../features/Template/Template1";
import { setActiveSection } from "../features/Template/activeTemplateSection";
import EditableBlock from "./EditableBlock";
import SideEditor from "./SideEditor";
import useImageEditor from "./userImageEditor";

import "../assets/scss/theme.scss";
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

const PreviewPage = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.template1);
  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

  return (
    <div
      style={{
        // maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <Container fluid className="mt-5">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <SiteNavbar
              logo={content.navbar.logo}
              links={content.navbar.links}
              buttonText1={content.navbar.buttonText1}
              buttonText2={content.navbar.buttonText2}
              styles={content.navbar.styles}
            />

            <Hero
              backgroundImage={content.hero.backgroundImage}
              header={content.hero.title}
              summary={content.hero.summary}
              styles={content.hero.styles}
              buttonText={content.hero.buttonText}
              buttonColor={content.hero.buttonColor}
            />

            <About
              title={content.aboutUs.title}
              header={content.aboutUs.header}
              summary1={content.aboutUs.text1}
              summary2={content.aboutUs.text2}
              styles={content.aboutUs.styles}
            />

            <Vision
              image={content.Vision.image}
              header={content.Vision.heading}
              summary1={content.Vision.text1}
              summary2={content.Vision.text2}
              styles={content.Vision.styles}
              buttonText={content.Vision.buttonText1}
            />

            <Audience
              header={content.Audience.heading}
              title1={content.Audience.title1}
              summary1={content.Audience.body1}
              image1={content.Audience.image1}
              title2={content.Audience.title2}
              summary2={content.Audience.body2}
              image2={content.Audience.image2}
              title3={content.Audience.title3}
              summary3={content.Audience.body3}
              image3={content.Audience.image3}
              title4={content.Audience.title4}
              summary4={content.Audience.body4}
              image4={content.Audience.image4}
              styles={content.Audience.styles}
            />

            <Benefit
              topic={content.WhyUs.topic}
              header={content.WhyUs.header}
              title1={content.WhyUs.title1}
              summary1={content.WhyUs.body1}
              title2={content.WhyUs.title2}
              summary2={content.WhyUs.body2}
              title3={content.WhyUs.title3}
              summary3={content.WhyUs.body3}
              title4={content.WhyUs.title4}
              summary4={content.WhyUs.body4}
              styles={content.WhyUs.styles}
            />

            <CTASection
              header={content.CTA.heading}
              text={content.CTA.text1}
              buttonText={content.CTA.buttonText1}
              image1={content.CTA.image}
              styles={content.CTA.styles}
            />

            {/* <Contact /> */}

            {/* <FAQ /> */}

            <section className="py-lg-5 py-5 bg-white">
              <Container id="hero" className="py-lg-16 py-6">
                <Row>
                  <Col xl={6} lg={6} xs={12} className="my-4">
                    <FAQ faqs={content.faq} styles={content.faq.styles} />
                  </Col>
                  <Col xl={6} lg={6} xs={12}>
                    <Contact
                      contactInfo={content.contactUs}
                      styles={content.contactUs.styles}
                    />
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer
              footerInfo={content.footer}
              styles={content.footer.styles}
              logo={content.footer.logo}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PreviewPage;

export const SiteNavbar = ({
  logo,
  links,
  buttonText1,
  buttonText2,
  styles,
}) => (
  <Navbar
    expand="lg"
    style={{
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    }}
  >
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto">
          {links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.text}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex">
          <Button variant="primary" className="me-2">
            {buttonText1}
          </Button>
          <Button variant="primary">{buttonText2}</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export const Hero = ({
  backgroundImage,
  header,
  summary,
  buttonText,
  styles,
}) => {
  return (
    <Container
      id="hero"
      className="hero-section my-0  text-white px-4 py-5 py-lg-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Row className="d-flex align-items-center">
        <Col xxl={{ offset: 1, span: 5 }} xl={6} lg={6} xs={12} className="">
          <h1 className="mb-3">{header}</h1>
          <p className="lead mb-4" style={{ color: styles.color }}>
            {summary}
          </p>

          <Button variant="primary">{buttonText}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export const About = ({
  title,
  header,
  summary1,
  summary2,
  styles,
  handleContentChange,
}) => (
  <Container
    id="about"
    className="text-center py-8 py-lg-12"
    style={{
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    }}
  >
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12}>
        <h2 className="display-5 fw-bold mb-2">{title}</h2>
        <p>{header}</p>
        <p className="lead mb-4 mt-5">{summary1}</p>
        <p className="lead">{summary2}</p>
      </Col>
    </Row>
  </Container>
);
export const Vision = ({
  header,
  summary1,
  summary2,
  styles,
  buttonText,
  image,
}) => {
  return (
    <Container
      id="vision"
      className="py-lg-12 py-6"
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontFamily: styles.fontFamily,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row className="d-flex align-items-center">
        <Col
          xxl={5}
          xl={6}
          lg={6}
          xs={12}
          className="mt-0 mt-lg-10"
          style={{
            // backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image src={image} rounded fluid />
          {/* <img src={Image} /> */}
        </Col>
        <Col
          xxl={{ offset: 1, span: 5 }}
          xl={6}
          lg={6}
          xs={12}
          className="mt-5 mt-lg-10"
        >
          <h1 className="display-5 fw-bold mb-3">{header}</h1>
          <p className="lead mb-4">{summary1}</p>
          <p className="lead mb-4">{summary2}</p>

          <Button variant="primary" className="d-grid d-md-block">
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export const Benefit = ({
  topic,
  header,
  title1,
  summary1,
  title2,
  summary2,
  title3,
  summary3,
  title4,
  summary4,

  styles,
}) => (
  <Container
    id="benefit"
    className="py-5 "
    style={{
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      fontFamily: styles.fontFamily,
    }}
  >
    <Row>
      <Col md={4} className="mb-4">
        <h1 className="display-5 fw-bold mb-3">{topic}</h1>
        <p className="lead mb-4">{header}</p>
      </Col>
      <Col md={8} className="mb-4">
        <Row className="gy-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{title1}</Card.Title>
                <Card.Text>{summary1}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{title2}</Card.Title>
                <Card.Text>{summary2}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{title3}</Card.Title>
                <Card.Text>{summary3}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{title4}</Card.Title>
                <Card.Text>{summary4}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export const Audience = ({
  header,
  title1,
  summary1,
  image1,
  title2,
  summary2,
  image2,
  title3,
  summary3,
  image3,
  title4,
  summary4,
  image4,
  styles,
}) => {
  return (
    <Container
      id="audience"
      className="d-flex justify-content-center align-items-center my-auto"
      style={{
        minHeight: "600px",
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontFamily: styles.fontFamily,
      }}
    >
      <div>
        <h2 className="">{header}</h2>

        <Row>
          <Col md={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>{title1}</Card.Title>
                <Card.Text>{summary1}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>{title2}</Card.Title>
                <Card.Text>{summary2}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>{title3}</Card.Title>
                <Card.Text>{summary3}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} className="mb-4">
            <Card
              className="h-100 text-white text-center"
              style={{
                backgroundImage: `url(${image4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                height: "300px",
              }}
            >
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "15px",
                }}
              >
                <Card.Title>{title4}</Card.Title>
                <Card.Text>{summary4}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const FAQ = ({ faqs }) => (
  <Container id="faq">
    <Row className="justify-content-center">
      <Col lg={12} md={12} sm={12}>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export const CTASection = ({ header, text, buttonText, image1, styles }) => {
  return (
    <div
      className="cta-section text-white text-center"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        minHeight: "400px",
        position: "relative",
      }}
    >
      <Container style={{ color: styles.color }}>
        <h1 className="mb-3">{header}</h1>
        <p className="mb-4">{text}</p>
        <Button variant="primary" size="md">
          {buttonText}
        </Button>
      </Container>
    </div>
  );
};

export const Contact = ({ contactInfo, styles }) => (
  <Container id="contact">
    <h2 className="text-center">{contactInfo.heading}</h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{contactInfo.Name}</Form.Label>
            <Form.Control disabled type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{contactInfo.Email}</Form.Label>
            <Form.Control
              disabled
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{contactInfo.Message}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              disabled
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export const Footer = ({ footerInfo, styles, logo }) => {
  return (
    <Fragment>
      <footer
        className="pt-lg-10 pt-5 footer"
        style={{
          backgroundColor: styles.backgroundColor,
          color: styles.color,
        }}
      >
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              {/* about company  */}
              <div className="mb-4">
                <img src={logo} alt="logo" width="100" />

                <div className="mt-4">
                  <p>{footerInfo.header}</p>
                  {/* social media */}
                  {/* <div className="fs-4 mt-4">
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiLinkedin} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-facebook text-white me-2">
                      <Icon path={mdiFacebook} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-twitter text-white me-2">
                      <Icon path={mdiTwitter} size={0.7} />
                    </Link>
                    <Link to="#" className="mdi mdi-instagram text-white ">
                      <Icon path={mdiInstagram} size={0.7} />
                    </Link>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
              <div className="mb-4 ">
                {/* list */}
                <h3 className="fw-bold mb-3 text-white">{footerInfo.title1}</h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    {footerInfo.body1name1}
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    {footerInfo.body1name2}
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    {footerInfo.body1name3}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                {/* list  */}
                <h3 className="fw-bold mb-3 text-white">{footerInfo.title2}</h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    {footerInfo.body2name1}
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    {footerInfo.body2name2}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              {/* contact info */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-white">{footerInfo.title3}</h3>
                <p> {footerInfo.body3name1}</p>
                <p className="mb-1">{footerInfo.body3name2}</p>
                <p>{footerInfo.body3name3}</p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 text-center g-0 border-top py-2 mt-6">
            {/* Desc  */}
            <Col sm={12}>
              <span>{footerInfo.footerTage}</span>
            </Col>
            {/*  Links  */}
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};
