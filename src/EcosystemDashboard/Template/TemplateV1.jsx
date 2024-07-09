import { Fragment, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
import { Link, useParams } from "react-router-dom";
import avatar from "../../assets/images/avatar/person.png";
import sanitizeHtml from "sanitize-html";
import GetEnrolledCourseCard from "../../Components/marketing/common/cards/GetEnrolledCourseCard";

// import "../assets/scss/theme.scss";
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
  ListGroup,
  Tab,
} from "react-bootstrap";
import axios from "axios";

const TemplateV1 = () => {
  const [details, setDetails] = useState(null);
  const [courses, setCourses] = useState([]);

  let { ecosystemDomain } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/getTemplate/${ecosystemDomain}`
        );
        setDetails(response.data.templateDetails);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [ecosystemDomain]);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-courses/${ecosystemDomain}`
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getCourseDetails();
  }, [ecosystemDomain]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!details) {
    return <div>No data found</div>;
  }

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], // Disallow all tags
      allowedAttributes: {}, // Disallow all attributes
    });
  };

  return (
    <Fragment>
      <SiteNavbar content={details} sanitizeContent={sanitizeContent} />
      <Hero content={details} sanitizeContent={sanitizeContent} />
      <section
        className="py-lg-5 py-5 "
        style={{
          backgroundColor: details.aboutUs.styles.backgroundColor,
        }}
      >
        <About content={details} sanitizeContent={sanitizeContent} />
      </section>
      <section
        className="py-lg-5 py-5"
        style={{
          backgroundColor: details.vision.styles.backgroundColor,
        }}
      >
        <Vision content={details} sanitizeContent={sanitizeContent} />
      </section>
      <section className=" pt-5">
        <AllCourse coursesData={courses} />
      </section>

      <section
        className="py-lg-5 py-5"
        style={{
          backgroundColor: details.audience.styles.backgroundColor,
        }}
      >
        <Audience content={details} sanitizeContent={sanitizeContent} />
      </section>
      <section
        className="py-lg-5 py-5"
        style={{
          backgroundColor: details.whyUs.styles.backgroundColor,
        }}
      >
        <Benefit content={details} sanitizeContent={sanitizeContent} />
      </section>
      <CTASection content={details} sanitizeContent={sanitizeContent} />

      <section className="py-lg-5 py-5 bg-white">
        <Container id="hero" className="py-lg-16 py-6">
          <Row>
            <Col xl={6} lg={6} xs={12} className="my-4">
              <FAQ content={details} sanitizeContent={sanitizeContent} />
            </Col>
            <Col xl={6} lg={6} xs={12}>
              <Contact content={details} sanitizeContent={sanitizeContent} />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer content={details} sanitizeContent={sanitizeContent} />
    </Fragment>
  );
};

const SiteNavbar = ({ content, sanitizeContent }) => (
  <Navbar
    // bg="dark"
    // variant="dark"
    expand="lg"
    fixed="top"
    style={{
      backgroundColor: content.navbar.styles.backgroundColor,
      color: content.navbar.styles.color,
      fontFamily: content.navbar.styles.fontFamily,
    }}
  >
    <Container>
      <Navbar.Brand href="#home">
        <Image
          src={content.navbar.logo ? content.navbar.logo : avatar}
          height={40}
          alt="logo"
          className="logo-inverse"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mx-auto">
          {content.navbar.links && content.navbar.links.length > 0
            ? content.navbar.links.map((link, index) => (
                <Nav.Link key={index} href={link.href}>
                  {sanitizeContent(link.text)}
                </Nav.Link>
              ))
            : ""}
        </Nav>
        <div className="d-flex">
          <Button variant="outline-light" className="me-2">
            {sanitizeContent(content.navbar.buttonText1)}
          </Button>
          <Button variant="primary">
            {" "}
            {sanitizeContent(content.navbar.buttonText2)}
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
const Hero = ({ content, sanitizeContent }) => (
  <section
    className="hero-section text-white py-lg-20"
    style={{
      backgroundImage: `url(${content.hero.backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "100px 0",
      color: content.hero.styles.color,
      fontFamily: content.hero.styles.fontFamily,
      marginTop: "65px",
    }}
  >
    <Container id="hero">
      <Row className="d-flex align-items-center">
        <Col
          xxl={{ offset: 1, span: 5 }}
          xl={6}
          lg={6}
          xs={12}
          className="mt-5 mt-lg-10"
        >
          <h1 className="display-3 fw-bold mb-3">
            {sanitizeContent(content.hero.title)}
          </h1>
          <p className="lead mb-4">{sanitizeContent(content.hero.summary)}</p>

          <Button variant="primary" className="d-grid d-md-block mb-4">
            {sanitizeContent(content.hero.buttonText)}
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);
const About = ({ content, sanitizeContent }) => (
  <Container
    id="about"
    className="text-center py-8 py-lg-12"
    style={{
      backgroundColor: content.aboutUs.styles.backgroundColor,
      color: content.aboutUs.styles.color,
      fontFamily: content.aboutUs.styles.fontFamily,
    }}
  >
    <Row className="justify-content-center">
      <Col lg={6} md={8} sm={12}>
        <h2 className="display-5 fw-bold mb-3">
          {sanitizeContent(content.aboutUs.title)}
        </h2>
        <p>{sanitizeContent(content.aboutUs.header)}</p>
        <p className="lead mb-4">{sanitizeContent(content.aboutUs.text1)}</p>
        <p className="lead">{sanitizeContent(content.aboutUs.text2)}</p>
      </Col>
    </Row>
  </Container>
);
const Vision = ({ content, sanitizeContent }) => (
  <Container
    id="vision"
    className="py-lg-12 py-6"
    style={{
      backgroundColor: content.vision.styles.backgroundColor,
      color: content.vision.styles.color,
      fontFamily: content.vision.styles.fontFamily,
    }}
  >
    <Row className="d-flex align-items-center">
      <Col xxl={5} xl={6} lg={6} xs={12} className="mt-0 mt-lg-10">
        <Image src={content.vision.image} alt="logo" rounded fluid />
      </Col>
      <Col
        xxl={{ offset: 1, span: 5 }}
        xl={6}
        lg={6}
        xs={12}
        className="mt-5 mt-lg-10"
      >
        <h1 className="display-5 fw-bold mb-3">
          {sanitizeContent(content.vision.heading)}
        </h1>
        <p className="lead mb-4">{sanitizeContent(content.vision.text1)}</p>
        <p className="lead mb-4">{sanitizeContent(content.vision.text2)}</p>

        <Button variant="primary" className="d-grid d-md-block">
          {sanitizeContent(content.vision.buttonText1)}
        </Button>
      </Col>
    </Row>
  </Container>
);

const Benefit = ({ content, sanitizeContent }) => (
  <Container
    id="benefit"
    className="py-5"
    style={{
      backgroundColor: content.whyUs.styles.backgroundColor,
      color: content.whyUs.styles.color,
      fontFamily: content.whyUs.styles.fontFamily,
    }}
  >
    <Row>
      <Col md={4} className="mb-4">
        <h1 className="display-5 fw-bold mb-3">
          {sanitizeContent(content.whyUs.topic)}
        </h1>
        <p className="lead mb-4">{sanitizeContent(content.whyUs.header)}</p>
      </Col>
      <Col md={8} className="mb-4">
        <Row className="gy-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{sanitizeContent(content.whyUs.title1)}</Card.Title>
                <Card.Text>{sanitizeContent(content.whyUs.body1)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{sanitizeContent(content.whyUs.title2)}</Card.Title>
                <Card.Text>{sanitizeContent(content.whyUs.body2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{sanitizeContent(content.whyUs.title3)}</Card.Title>
                <Card.Text>{sanitizeContent(content.whyUs.body3)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{sanitizeContent(content.whyUs.title4)}</Card.Title>
                <Card.Text>{sanitizeContent(content.whyUs.body4)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

const Audience = ({ content, sanitizeContent }) => (
  <Container
    id="audience"
    className="py-5"
    style={{
      backgroundColor: content.audience.styles.backgroundColor,
      color: content.audience.styles.color,
      fontFamily: content.audience.styles.fontFamily,
    }}
  >
    <h2 className="">{sanitizeContent(content.audience.heading)}</h2>

    <Row>
      <Col md={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: `url(${content.audience.image1})`,
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
            <Card.Title>{sanitizeContent(content.audience.title1)}</Card.Title>
            <Card.Text>{sanitizeContent(content.audience.body1)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: `url(${content.audience.image2})`,
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
            <Card.Title>{sanitizeContent(content.audience.title2)}</Card.Title>
            <Card.Text>{sanitizeContent(content.audience.body2)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: `url(${content.audience.image3})`,
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
            <Card.Title>{sanitizeContent(content.audience.title3)}</Card.Title>
            <Card.Text>{sanitizeContent(content.audience.body4)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3} className="mb-4">
        <Card
          className="h-100 text-white text-center"
          style={{
            backgroundImage: `url(${content.audience.image4})`,
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
            <Card.Title>{sanitizeContent(content.audience.title4)}</Card.Title>
            <Card.Text>{sanitizeContent(content.audience.body4)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const FAQ = ({ content, sanitizeContent }) => (
  <Container id="faq">
    <Row className="justify-content-center">
      <Col lg={12} md={12} sm={12}>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
          {content.faq && content.faq.length > 0
            ? content.faq.map((fq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    {sanitizeContent(fq.question)}
                  </Accordion.Header>
                  <Accordion.Body>{sanitizeContent(fq.answer)}</Accordion.Body>
                </Accordion.Item>
              ))
            : ""}
        </Accordion>
      </Col>
    </Row>
  </Container>
);
const CTASection = ({ content, sanitizeContent }) => (
  <div
    className="cta-section text-white text-center"
    style={{
      backgroundImage: `url(${content.cta.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 0",
      color: content.cta.styles.color,
      fontFamily: content.cta.styles.fontFamily,
    }}
  >
    <Container>
      <h1 className="mb-3">{sanitizeContent(content.cta.heading)}</h1>
      <p className="mb-4">{sanitizeContent(content.cta.text1)}</p>
      <Button variant="primary" size="lg">
        {sanitizeContent(content.cta.buttonText1)}
      </Button>
    </Container>
  </div>
);

const Contact = ({ content, sanitizeContent }) => (
  <Container
    id="contact"
    style={{
      backgroundColor: content.contactUs.styles.backgroundColor,
      color: content.contactUs.styles.color,
      fontFamily: content.contactUs.styles.fontFamily,
    }}
  >
    <h2 className="text-center">
      {sanitizeContent(content.contactUs.heading)}
    </h2>
    <Row className="justify-content-center">
      <Col md={10}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${sanitizeContent(
                content.contactUs.heading
              )}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {sanitizeContent(content.contactUs.buttonText1)}
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

const Footer = ({ content, sanitizeContent }) => {
  return (
    <Fragment>
      <footer
        className="pt-lg-10 pt-5 footer"
        style={{
          backgroundColor: content.footer.styles.backgroundColor,
          color: content.footer.styles.color,
          fontFamily: content.footer.styles.fontFamily,
        }}
      >
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              {/* about company  */}
              <div className="mb-4">
                <Image
                  src={content.footer.logo ? content.footer.logo : avatar}
                  height={40}
                  alt="logo"
                  className="logo-inverse"
                />

                <div className="mt-4">
                  <p> {sanitizeContent(content.footer.header)}</p>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
              <div className="mb-4 text-white">
                {/* list */}
                <h3 className="fw-bold mb-3 text-white">
                  {sanitizeContent(content.footer.title1)}
                </h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      {sanitizeContent(content.footer.body1name1)}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      {sanitizeContent(content.footer.body1name2)}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      {sanitizeContent(content.footer.body1name3)}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-4">
                {/* list  */}
                <h3 className="fw-bold mb-3 text-white">
                  {" "}
                  {sanitizeContent(content.footer.title2)}
                </h3>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      {sanitizeContent(content.footer.body2name1)}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link text-white">
                      {sanitizeContent(content.footer.body2name2)}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              {/* contact info */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3 text-white">
                  {" "}
                  {sanitizeContent(content.footer.title3)}
                </h3>
                <p> {sanitizeContent(content.footer.body3name1)}</p>
                <p className="mb-1">
                  {sanitizeContent(content.footer.body3name2)}
                </p>
                <p>{sanitizeContent(content.footer.body3name3)}</p>
              </div>
            </Col>
          </Row>
          <Row className="w-100 text-center g-0 border-top py-2 mt-6">
            {/* Desc  */}
            <Col lg={12} md={12} sm={12}>
              {sanitizeContent(content.footer.footerTags)}
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

// course part

// const AllCourse = ({ coursesData }) => {
//   return (
//     <Fragment>
//       <section className="pb-lg-14 pb-8 bg-white">
//         <Container>
//           <Row>
//             <Col xs={12}>
//               <div className="mb-6">
//                 <h2 className="mb-1 h1">Most Popular Courses</h2>
//                 <p>
//                   These are the most popular courses among REMSANA Courses
//                   learners worldwide in year 2024
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={12}>
//               <Tab.Container defaultActiveKey={coursesData[0].category}>
//                 <Nav className="nav-lb-tab  mb-6 bg-gray-200 px-5 rounded-3 ">
//                   {coursesData.map((category, index) => (
//                     <Nav.Item key={index}>
//                       <Nav.Link
//                         eventKey={category.category}
//                         className="mb-sm-3 mb-md-0"
//                       >
//                         {category.category}
//                       </Nav.Link>
//                     </Nav.Item>
//                   ))}
//                 </Nav>
//                 <Tab.Content>
//                   {coursesData.map((category, index) => (
//                     <Tab.Pane
//                       eventKey={category.category}
//                       className="pb-4 p-4 ps-0 pe-0"
//                       key={index}
//                     >
//                       <Row>
//                         {category.courses.map((course, index) => (
//                           <Col
//                             lg={3}
//                             md={6}
//                             sm={12}
//                             key={index}
//                             // onClick={handleClick}
//                           >
//                             <GetEnrolledCourseCard item={course} />
//                           </Col>
//                         ))}
//                       </Row>
//                     </Tab.Pane>
//                   ))}
//                 </Tab.Content>
//               </Tab.Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Fragment>
//   );
// };

const AllCourse = ({ coursesData }) => {
  // Group courses by category
  const groupedCourses = groupCoursesByCategory(coursesData);
  const categories = Object.keys(groupedCourses);

  return (
    <Fragment>
      <section className="pb-lg-14 pt-5 pb-8 bg-white">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="mb-6">
                <h2 className="mb-1 h1">Available Courses</h2>
                <p>Browse through all available courses</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Tab.Container defaultActiveKey={categories[0]}>
                <Nav className="nav-lb-tab mb-6 bg-gray-200 px-5 rounded-3">
                  {categories.map((category, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={category} className="mb-sm-3 mb-md-0">
                        {category}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {categories.map((category, index) => (
                    <Tab.Pane
                      eventKey={category}
                      className="pb-4 p-4 ps-0 pe-0"
                      key={index}
                    >
                      <Row>
                        {groupedCourses[category].map((course, idx) => (
                          <Col lg={3} md={6} sm={12} key={idx}>
                            <GetEnrolledCourseCard item={course} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

// Function to group courses by category
const groupCoursesByCategory = (courses) => {
  return courses.reduce((acc, course) => {
    const { category } = course;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(course);
    return acc;
  }, {});
};

export default TemplateV1;
