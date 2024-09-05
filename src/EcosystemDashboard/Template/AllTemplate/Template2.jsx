import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Briefcase,
  Pen,
  Megaphone,
  Telephone,
  HandThumbsUp,
  Youtube,
  ArrowRight,
  ArrowLeft,
  Clipboard,
  People,
  Heart,
  StarFill,
  StarHalf,
  PieChart,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  EmojiSmile,
  Envelope,
  Journals,
  ChatSquareDots,
  Send,
} from "react-bootstrap-icons";
import {
  Card,
  Button,
  Form,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import sanitizeHtml from "sanitize-html";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// const courses = [
//   {
//     id: 1,
//     category: "Design",
//     price: "$55",
//     lessons: 10,
//     students: 18,
//     reviews: 20,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-01.jpg",
//     title: "Business accounting and taxation fundamental",
//     instructor: "Matthew Taylor",
//   },
//   {
//     id: 2,
//     category: "Finance",
//     price: "$65",
//     lessons: 22,
//     students: 30,
//     reviews: 39,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-02.jpg",
//     title: "Finance fundamentals of management and planning",
//     instructor: "Leonel Mooney",
//   },
//   {
//     id: 3,
//     category: "Design",
//     price: "$80",
//     lessons: 15,
//     students: 55,
//     reviews: 55,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-03.jpg",
//     title: "Introduction to application design and development",
//     instructor: "Herman Miller",
//   },
//   {
//     id: 4,
//     category: "Medicine",
//     price: "$60",
//     lessons: 10,
//     students: 34,
//     reviews: 42,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-04.jpg",
//     title: "Genetic testing and sequencing technique",
//     instructor: "Shoko Mugikura",
//   },
//   {
//     id: 5,
//     category: "Design",
//     price: "$70",
//     lessons: 20,
//     students: 59,
//     reviews: 56,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-05.jpg",
//     title: "Introduction to web design and visualization",
//     instructor: "Alexa Harvard",
//   },
//   {
//     id: 6,
//     category: "Business",
//     price: "$45",
//     lessons: 18,
//     students: 80,
//     reviews: 76,
//     imageUrl:
//       "https://gfa-tech.com/dimp-template-images/images/demo-elearning-courses-06.jpg",
//     title: "Improve your English vocabulary and language",
//     instructor: "Leonel Mooney",
//   },
// ];



const Preview2 = ({ details, subdomain }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const blogPosts = [
    {
      imgSrc: details.Blog.image1,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-05.jpg",
      author: details.Blog.author1,
      likes: 65,
      title: details.Blog.header1,
      details: details.Blog.content1,
    },
    {
      imgSrc: details.Blog.image2,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-04.jpg",
      author: details.Blog.author2,
      likes: 35,
      title: details.Blog.header2,
      details: details.Blog.content2,
    },
    {
      imgSrc: details.Blog.image3,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-03.jpg",
      author: details.Blog.author3,
      likes: 58,
      title: details.Blog.header3,
      details: details.Blog.content3,
    },
  ];

  const reviews = [
    {
      name: details.Reviews.header1,
      role: details.Reviews.title1,
      text: details.Reviews.summary1,
      rating: 4.5,
      date: "30 July",
      imgSrc: details.Reviews.image1,
      RimageKey: "image1",
    },
    {
      name: details.Reviews.header2,
      role: details.Reviews.title2,
      text: details.Reviews.summary2,
      rating: 4.5,
      date: "15 Aug",
      imgSrc: details.Reviews.image2,
      RimageKey: "image2",
    },
    {
      name: details.Reviews.header3,
      role: details.Reviews.title3,
      text: details.Reviews.summary3,
      rating: 4.5,
      date: "30 Sept",
      imgSrc: details.Reviews.image3,
      RimageKey: "image3",
    },
  ];

  // services
  useEffect(() => {
    const getCoursesDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-courses/${subdomain}`
        );
        setCourses(response.data.courses);
        console.log("this is service", response.data.courses);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getCoursesDetails();
  }, [subdomain]);

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [], // Disallow all tags
      allowedAttributes: {}, // Disallow all attributes
    });
  };

  return (
    <div>
      <Col
        md={12}
        style={{
          maxWidth: "100%",
          wordWrap: "break-word",
        }}
      >
        <Navbar
          expand="lg"
          bg="transparent"
          variant="transparent"
          className="px-lg-10 learning-link"
        >
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={details.navbar.logo}
                alt="E-learning Logo"
                width="157"
                height="39"
                className="default-logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarNav" />

            <Navbar.Collapse id="navbarNav">
              <Nav className="mx-auto alt-font fs-4 learning-link ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#instructors">Instructors</Nav.Link>
                <Nav.Link href="#testimonials">Testimonial</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Button
                href="#signup"
                className="learning learning-link btn-small btn btn-base-color btn-rounded btn-box-shadow me-2"
              >
                Sign Up
              </Button>
              <Button
                href="#signin"
                className="learning learning-link btn-small btn-dark-gray btn-rounded btn-box-shadow"
              >
                Sign In
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section
          id="home"
          className="learning px-4 p-0 overflow-hidden bg-dark-gray full-screen ipad-top-space-margin position-relative"
          style={{
            backgroundImage: `url(https://gfa-tech.com/dimp-template-images/images/demo-elearning-hero-bg.jpg)`,
            backgroundSize: "cover",
            marginTop: "inherit",
            height: "100vh",
          }}
        >
          <div
            className="background-position-center-top h-100 w-100 position-absolute left-0 top-0"
            style={{
              backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/vertical-line-bg-small.svg')`,
            }}
          ></div>
          <div className="position-absolute left-minus-80px top-25">
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-elearning-01.png"
              alt=""
            />
          </div>
          <Container className="h-100">
            <Row className="align-items-center justify-details-center h-100">
              <Col
                xl={5}
                lg={6}
                md={12}
                className="text-white text-center text-lg-start position-relative z-index-1 d-flex flex-column justify-details-center h-100"
              >
                <span
                  className="alt-font py-0 lh-65 fw-500 mb-25px ls-minus-2px"
                  style={{ fontSize: "3rem" }}
                >
                  {sanitizeContent(details.hero.span1)}
                </span>
                <div className="mb-30px w-80 md-w-60 sm-w-100 d-block mx-auto mx-lg-0 overflow-hidden">
                  <span className="fs-18 fw-300 opacity-5 d-inline-block">
                    {sanitizeContent(details.hero.span2)}
                  </span>
                </div>
                <div className="overflow-hidden mb-10">
                  <Button
                    href="#courses"
                    className="btn-extra-large btn-base-color btn-rounded fw-600 d-inline-block me-25px sm-me-10px align-middle left-icon"
                  >
                    <HandThumbsUp /> Get started
                  </Button>
                </div>
              </Col>
              <Col xl={7} lg={6} className="pt-30px lg-pt-0">
                <div className="position-relative outside-box-right-10 md-outside-box-right-0 atropos atropos-rotate-touch">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner text-center w-100">
                        <div className="position-absolute left-0 right-0">
                          <img src={details.hero.backgroundImage1} alt="" />
                        </div>
                        <img
                          className="position-relative z-index-9 animation-float"
                          src="https://gfa-tech.com/dimp-template-images/images/demo-elearning-hero-banner-02.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          id="about"
          className=" position-relative overflow-hidden"
          style={{
            backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-elearning-02.png')`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="position-absolute end-0 bottom-0 d-none d-md-block"
            style={{ transform: "translateY(-50px)" }}
          ></div>
          <Container className="learning px-4">
            <Row className="align-items-end justify-details-center mb-4">
              <Col
                xl={5}
                lg={6}
                md={10}
                className="text-center text-lg-start mb-4"
              >
                <div className="d-inline-block mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-warning p-2">
                      <Globe className="text-dark" size={28} />
                    </div>
                    <div className="ms-3">
                      <span className="fw-bold primary-font text-dark">
                        {sanitizeContent(details.aboutUs.title1)}
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="fw-bold fs-2 alt-font text-dark">
                  {sanitizeContent(details.aboutUs.title2)}
                </h2>
              </Col>
              <Col xl={6} lg={6} md={10} className="text-center text-lg-start">
                <span className="fw-bold text-dark mb-2 d-block">
                  {sanitizeContent(details.aboutUs.text2)}
                </span>
                <p className="text-muted">
                  {sanitizeContent(details.aboutUs.text1)}
                </p>
              </Col>
            </Row>

            <Row className="g-0 text-center">
              {[
                "section1icon",
                "section2icon",
                "section3icon",
                "section4icon",
              ].map((section, index) => (
                <Col
                  lg={3}
                  md={6}
                  className="border-end mb-4 position-relative"
                  key={section}
                >
                  <div className="position-relative d-inline-block">
                    <img
                      src={details.Statistics[section]}
                      alt=""
                      className="h-75px position-relative z-index-1 mt-35px"
                    />
                    <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                  </div>
                  <span className="fw-bold text-dark mb-2 d-block">
                    {sanitizeContent(
                      details.Statistics[`section${index + 1}header`]
                    )}
                  </span>
                  <p className="text-muted">
                    {sanitizeContent(
                      details.Statistics[`section${index + 1}paragraphy`]
                    )}
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          id="courses"
          className="learning px-4 bg-tranquil position-relative"
        >
          <Container>
            <Row className="align-items-center mb-4">
              <Col xl={5} className="text-center text-xl-start">
                <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px mb-0">
                  Popular Courses
                </h2>
              </Col>
            </Row>
            <Row>
              {courses.map((course) => (
                <Col md={4} className="mb-4" key={course.id}>
                  <Card className="border-radius-6px hover-box overflow-hidden box-shadow-large">
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                      <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                        {course.price}
                      </div>
                      <Card.Title className="text-dark-gray text-uppercase fs-15 fw-600">
                        {course.category}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 fs-16">
                        {course.level}
                      </Card.Subtitle>
                      <Card.Text className="mb-2">
                        <a
                          href="demo-elearning-courses-details.html"
                          className="text-dark-gray fw-600 fs-19"
                        >
                          {course.title}
                        </a>
                      </Card.Text>
                      <div className="d-flex align-items-center mb-2">
                        {/* <div className="review-star-icon">
                          {[...Array(5)].map((_, index) => (
                            <StarFill key={index} className="text-dark-gray" />
                          ))}
                        </div>
                        <span className="fs-15 ms-2">{course.reviews}</span> */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <Clipboard />
                          <span className="fs-16 text-dark-gray fw-500">
                            {course.curriculum?.length || 0}
                          </span>
                        </div>
                        <div>
                          <People />
                          <span className="fs-16 text-dark-gray fw-500">
                            {course.totalNumberOfEnrolledStudent}
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          id="instructors"
          className="learning px-4"
          style={{ height: "auto" }}
        >
          <Container>
            <Row className="align-items-end mb-6">
              <Col xl={5} lg={6} md={9} className="text-center text-lg-start">
                <div className="d-inline-block mb-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning rounded-circle p-3 me-3">
                      <People className="text-dark" size={36} />
                    </div>
                    <div>
                      <span className="fs-5 primary-font fw-500 text-dark">
                        {sanitizeContent(details.LargeCta.header2)}
                      </span>
                    </div>
                  </div>
                </div>
                <h2 className="text-dark fs-2 alt-font fw-600 mb-3">
                  {sanitizeContent(details.LargeCta.header3)}
                </h2>
              </Col>
              <Col xl={5} lg={6} md={10} className="text-center text-lg-start">
                <p className="text-dark primary-font">
                  {sanitizeContent(details.LargeCta.summary1)}
                </p>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
              {[
                {
                  name: details.Team.summary1,
                  role: details.Team.header1,
                  img: details.Team.image1,
                  imageKey: "image1",
                },
                {
                  name: details.Team.summary2,
                  role: details.Team.header2,
                  img: details.Team.image2,
                  imageKey: "image2",
                },
                {
                  name: details.Team.summary3,
                  role: details.Team.header3,
                  img: details.Team.image3,
                  imageKey: "image3",
                },
                {
                  name: details.Team.summary4,
                  role: details.Team.header4,
                  img: details.Team.image4,
                  imageKey: "image4",
                },
              ].map((member, index) => (
                <Col key={index} className="text-center mb-4">
                  <Card className="border-0 overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      alt={member.name}
                      height={260}
                    />
                    <Card.Body className="bg-white text-dark text-center p-3">
                      <Card.Title className="fs-3">
                        {sanitizeContent(member.name)}
                      </Card.Title>
                      <Card.Text className="fs-5">
                        {sanitizeContent(member.role)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          id="testimonials"
          className="learning px-4 bg-gradient-tranquil-white position-relative"
        >
          <Container className="position-relative z-index-1">
            <Row className="justify-details-center mb-3">
              <Col xs={12} className="text-center">
                <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
                  Trusted by hundreds of students
                </h2>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 align-items-center mb-4 xs-mb-25px">
              {reviews.map((review, index) => (
                <Col key={index} className="mb-30px">
                  <Card className="border-radius-6px p-3 xl-p-10 bg-white box-shadow-quadruple-large">
                    <Card.Body className="d-flex flex-column justify-details-center h-100">
                      <div className="mb-20px d-flex align-items-center">
                        <img
                          src={review.imgSrc}
                          className="rounded-circle w-90px lg-w-65px me-15px"
                          alt={review.name}
                        />
                        <div>
                          <div className="text-dark-gray fs-18 fw-600">
                            {sanitizeContent(review.name)}
                          </div>
                          <div className="lh-24 fs-16">
                            {sanitizeContent(review.role)}
                          </div>
                        </div>
                      </div>
                      <p className="mb-15px md-w-85 sm-w-100">
                        {sanitizeContent(review.text)}
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-inline-block me-auto">
                          <div className="text-dark-gray fw-600 float-start fs-15 me-10px">
                            {review.rating}
                          </div>
                          <div className="review-star-icon float-start">
                            {[...Array(Math.floor(review.rating))].map(
                              (_, i) => (
                                <StarFill key={i} />
                              )
                            )}
                            {review.rating % 1 !== 0 && <StarHalf />}
                          </div>
                        </div>
                        <div className="d-inline-block fw-500 text-uppercase border-radius-30px ps-15px pe-15px fs-12 lh-28 bg-dark-gray text-white">
                          {review.date}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="fs-20 ls-minus-05px fw-500 text-dark-gray w-100 text-center">
              <img src={details.LargeCta.image1} alt="eLearning" />
              <span className="d-block d-sm-inline-block position-relative xs-top-minus-10px">
                <span className="fw-700 text-decoration-line-bottom">
                  {sanitizeContent(details.LargeCta.header1)}
                </span>
              </span>
            </div>
          </Container>
        </section>
{/* 
        <section
          id="blog"
          className="learning px-4 bg-gradient-tranquil-white overflow-hidden overlap-height position-relative"
        >
          <Container className="overlap-gap-section">
            <Row className="mb-4 md-mb-6">
              <Col>
                <Row className="justify-details-center mb-3">
                  <Col xs={12} className="text-center">
                    <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
                      Our Blog Post
                    </h2>
                  </Col>
                </Row>
                <Row>
                  {blogPosts.map((post, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-0">
                      <Card
                        className="card border-0 border-radius-4px overflow-hidden box-shadow-large box-shadow-extra-large-hover "
                        style={{ height: "680px" }}
                      >
                        <Card.Body className="p-0">
                          <div className="blog-image p-0 position-relative overflow-hidden">
                            <a href="#">
                              <img src={post.imgSrc} alt={post.title} />
                            </a>
                          </div>
                          <Card.Body className="p-0">
                            <div className="post-details p-4 md-p-4">
                              <a
                                href="#"
                                className="card-title mb-10px fw-600 fs-19 lh-28 text-dark-gray d-inline-block"
                              >
                                {sanitizeContent(post.title)}
                              </a>
                              <p className="mb-0">
                                {sanitizeContent(post.details)}
                              </p>
                            </div>
                          </Card.Body>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}

        <section
          id="contact"
          className="learning px-4 overflow-hidden position-relative overlap-height py-6 py-lg-8"
        >
          <Container className="px-4 py-6 overlap-gap-section">
            <Row className="justify-details-center mb-3">
              <Col xs={12} className="text-center">
                <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
                  How can we assist you?
                </h2>
              </Col>
            </Row>
            <Row className="justify-details-center mb-10">
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
                        We value your privacy. Your information will only be
                        used to respond to your request.
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

        <footer className="learning px-4 bg-gradient-aztec-green position-relative">
          <Container className="footer-dark text-center text-sm-start position-relative">
            <Row className="align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px g-0">
              <Col xl={7} className="ps-0 text-center text-xl-start lg-mb-10px">
                <ul className="footer-navbar fs-16 lh-normal">
                  <li className="nav-item active">
                    <a
                      href="demo-elearning.html"
                      className="nav-link alt-font ps-0"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link alt-font">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#courses" className="nav-link alt-font">
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#instructors" className="nav-link alt-font">
                      Instructors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#testimonials" className="nav-link alt-font">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#blog" className="nav-link alt-font">
                      Blog
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
      </Col>
    </div>
  );
};

export default Preview2;
