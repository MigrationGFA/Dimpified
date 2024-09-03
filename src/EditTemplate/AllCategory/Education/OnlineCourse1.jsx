import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  updateContent,
  updateStyles,
  updateNavbarFromEcosystem,
} from "../../../features/Template/MainTemplate";
import { setActiveSection } from "../../../features/Template/activeTemplateSection";
import EditableBlock from "../../EditableBlock";
import SideEditor from "../../SideEditor";
import useImageEditor from "../../userImageEditor";

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

const Template2 = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const content = useSelector((state) => state.mainTemplate.currentTemplate);
  const ecosystemDetails = useSelector((state) => state.ecosystem);
  const courses = useSelector((state) => state.course);

  const activeSection = useSelector(
    (state) => state.activeSection.activeSection
  );

  const handleContentChange = (section, field, value, index = null) => {
    dispatch(updateContent({ section, field, value, index }));
  };

  const handleBackgroundColorChange = (sectionId, color) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { backgroundColor: color },
      })
    );
  };

  const handleTextColorChange = (sectionId, color) => {
    dispatch(updateStyles({ section: sectionId, styles: { color: color } }));
  };

  const handleFontChange = (sectionId, fontFamily) => {
    dispatch(
      updateStyles({
        section: sectionId,
        styles: { fontFamily },
      })
    );
  };

  const blogPosts = [
    {
      imgSrc: content.Blog.image1,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-05.jpg",
      author: content.Blog.author1,
      likes: 65,
      title: content.Blog.header1,
      content: content.Blog.content1,
    },
    {
      imgSrc: content.Blog.image2,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-04.jpg",
      author: content.Blog.author2,
      likes: 35,
      title: content.Blog.header2,
      content: content.Blog.content2,
    },
    {
      imgSrc: content.Blog.image3,
      avatarSrc:
        "https://gfa-tech.com/dimp-template-images/images/avtar-03.jpg",
      author: content.Blog.author3,
      likes: 58,
      title: content.Blog.header3,
      content: content.Blog.content3,
    },
  ];

  const reviews = [
    {
      name: content.Reviews.header1,
      role: content.Reviews.title1,
      text: content.Reviews.summary1,
      rating: 4.5,
      date: "30 July",
      imgSrc: content.Reviews.image1,
      RimageKey: "image1",
    },
    {
      name: content.Reviews.header2,
      role: content.Reviews.title2,
      text: content.Reviews.summary2,
      rating: 4.5,
      date: "15 Aug",
      imgSrc: content.Reviews.image2,
      RimageKey: "image2",
    },
    {
      name: content.Reviews.header3,
      role: content.Reviews.title3,
      text: content.Reviews.summary3,
      rating: 4.5,
      date: "30 Sept",
      imgSrc: content.Reviews.image3,
      RimageKey: "image3",
    },
  ];

  const CourseLogo = sessionStorage.getItem("courseImage");

  const renderSection = (id, children) => {
    return (
      <section
        id={id}
        className="py-5"
        style={{
          ...content[id].styles,
          border: activeSection === id ? "2px dotted black" : "none",
        }}
        onClick={() => dispatch(setActiveSection(id))}
      >
        <Container>{children}</Container>
      </section>
    );
  };

  const {
    fileInputRefs,
    handleEditImageClick,
    handleImageChange,
    loadingImage,
  } = useImageEditor();
  return (
    <div
      style={{
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <Container fluid>
        <Row>
          <Col md={9}>
            {renderSection(
              "navbar",
              <Navbar
                expand="lg"
                bg="transparent"
                className="px-4 learning-link"
              >
                <Container fluid>
                  <Navbar.Brand
                    className="fw-bold text-white d-flex align-items-center"
                    href="#home"
                  >
                    <img
                      src={content.navbar.logo}
                      alt="E-learning Logo"
                      width="157"
                      height="39"
                      className="default-logo"
                    />
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls="navbarNav" />

                  <Navbar.Collapse id="navbarNav">
                    <Nav className="mx-auto alt-font fs-4 learning-link">
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
            )}
            {renderSection(
              "hero",
              <section
                id="home"
                className="learning px-4 p-0 overflow-hidden bg-dark-gray full-screen ipad-top-space-margin position-relative"
                style={{
                  backgroundImage: `url("https://gfa-tech.com/dimp-template-images/images/demo-elearning-hero-bg.jpg")`,
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
                  <Row className="align-items-center justify-content-center h-100">
                    <Col
                      xl={5}
                      lg={6}
                      md={12}
                      className="text-white text-center text-lg-start position-relative z-index-1 d-flex flex-column justify-content-center h-100"
                    >
                      <span className="alt-font py-0 fs-75 lh-65 fw-500 mb-25px ls-minus-2px">
                        <EditableBlock
                          initialContent={content.hero.span1}
                          onContentChange={(value) =>
                            handleContentChange("hero", "span1", value)
                          }
                        />
                      </span>
                      <div className="mb-30px w-80 md-w-60 sm-w-100 d-block mx-auto mx-lg-0 overflow-hidden">
                        <span className="fs-18 fw-300 opacity-5 d-inline-block">
                          <EditableBlock
                            initialContent={content.hero.span2}
                            onContentChange={(value) =>
                              handleContentChange("hero", "span2", value)
                            }
                          />
                        </span>
                      </div>
                      <div className="overflow-hidden">
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
                                <img
                                  src={content.hero.backgroundImage1}
                                  alt=""
                                />
                                <Button
                                  variant="primary"
                                  size="lg"
                                  onClick={() =>
                                    handleEditImageClick(
                                      "hero",
                                      "backgroundImage1"
                                    )
                                  }
                                  style={{
                                    width: "250px",
                                    position: "absolute",
                                    top: "500px",
                                    left: "120px",
                                    zIndex: 1000,
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    color: "#fff",
                                    border: "none",
                                  }}
                                >
                                  {loadingImage ? (
                                    <div
                                      className="spinner-border spinner-border-sm text-primary"
                                      role="status"
                                    >
                                      <span className="visually-hidden">
                                        Loading...
                                      </span>
                                    </div>
                                  ) : (
                                    "Edit Background Image"
                                  )}
                                </Button>
                                <input
                                  type="file"
                                  ref={(ref) =>
                                    (fileInputRefs.current[
                                      "hero-backgroundImage1"
                                    ] = ref)
                                  }
                                  onChange={(e) =>
                                    handleImageChange(
                                      e,
                                      "hero",
                                      "backgroundImage1"
                                    )
                                  }
                                  style={{ display: "none" }}
                                />
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
            )}
            {renderSection(
              "aboutUs",
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
                  <Row className="align-items-end justify-content-center mb-4">
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
                              <EditableBlock
                                initialContent={content.aboutUs.title1}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "aboutUs",
                                    "title1",
                                    value
                                  )
                                }
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h2 className="fw-bold fs-2 alt-font text-dark">
                        <EditableBlock
                          initialContent={content.aboutUs.title2}
                          onContentChange={(value) =>
                            handleContentChange("aboutUs", "title2", value)
                          }
                        />
                      </h2>
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={10}
                      className="text-center text-lg-start"
                    >
                      <span className="fw-bold text-dark mb-2 d-block">
                        <EditableBlock
                          initialContent={content.aboutUs.text2}
                          onContentChange={(value) =>
                            handleContentChange("aboutUs", "text2", value)
                          }
                        />
                      </span>
                      <p className="text-muted"></p>
                      <EditableBlock
                        initialContent={content.aboutUs.text1}
                        onContentChange={(value) =>
                          handleContentChange("aboutUs", "text1", value)
                        }
                      />
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
                            src={content.Statistics[section]}
                            alt=""
                            className="h-75px position-relative z-index-1 mt-35px"
                          />
                          <div className="h-100px w-100px rounded-circle bg-very-light-gray position-absolute top-0 start-50 translate-middle-x"></div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleEditImageClick("Statistics", section)
                            }
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 1000,
                              backgroundColor: "rgba(0,0,0,0.5)",
                              color: "#fff",
                              border: "none",
                            }}
                          >
                            {loadingImage ? (
                              <div
                                className="spinner-border spinner-border-sm text-primary"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              `Edit Icon ${index + 1}`
                            )}
                          </Button>
                          <input
                            type="file"
                            ref={(ref) =>
                              (fileInputRefs.current[`Statistics-${section}`] =
                                ref)
                            }
                            onChange={(e) =>
                              handleImageChange(e, "Statistics", section)
                            }
                            style={{ display: "none" }}
                          />
                        </div>
                        <span className="fw-bold text-dark mb-2 d-block">
                          <EditableBlock
                            initialContent={
                              content.Statistics[`section${index + 1}header`]
                            }
                            onContentChange={(value) =>
                              handleContentChange(
                                "Statistics",
                                `section${index + 1}header`,
                                value
                              )
                            }
                          />
                        </span>
                        <p className="text-muted">
                          <EditableBlock
                            initialContent={
                              content.Statistics[
                                `section${index + 1}paragraphy`
                              ]
                            }
                            onContentChange={(value) =>
                              handleContentChange(
                                "Statistics",
                                `section${index + 1}paragraphy`,
                                value
                              )
                            }
                          />
                        </p>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            )}

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
                  <Col md={4} className="mb-4">
                    <Card className="border-radius-6px hover-box overflow-hidden box-shadow-large">
                      <Card.Img variant="top" src={CourseLogo} />
                      <Card.Body>
                        <div className="bg-dark-gray w-80px h-80px rounded-circle d-flex justify-content-center align-items-center fw-500 text-white fs-20 position-absolute right-30px top-minus-40px">
                          {courses.price}
                        </div>
                        <Card.Title className="text-dark-gray text-uppercase fs-15 fw-600 mt-4">
                          {courses.category}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 fs-16">
                          {ecosystemDetails.ecosystemName}
                        </Card.Subtitle>
                        <Card.Text className="mb-2">
                          <a
                            href="demo-elearning-courses-details.html"
                            className="text-dark-gray fw-600 fs-19"
                          >
                            {courses.courseTitle}
                          </a>
                        </Card.Text>
                        {/* <div className="d-flex align-items-center mb-2">
                            <div className="review-star-icon">
                              {[...Array(5)].map((_, index) => (
                                <StarFill
                                  key={index}
                                  className="text-dark-gray"
                                />
                              ))}
                            </div>
                            <span className="fs-15 ms-2">{course.reviews}</span>
                          </div> */}
                        {/* <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <Clipboard />
                              <span className="fs-16 text-dark-gray fw-500">
                                {course.lessons}
                              </span>
                            </div>
                            <div>
                              <People />
                              <span className="fs-16 text-dark-gray fw-500">
                                {course.students}
                              </span>
                            </div>
                          </div> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>

            {renderSection(
              "Team",
              <section
                id="instructors"
                className="learning px-4"
                style={{ height: "auto" }}
              >
                <Container>
                  <Row className="align-items-end mb-6">
                    <Col
                      xl={5}
                      lg={6}
                      md={9}
                      className="text-center text-lg-start"
                    >
                      <div className="d-inline-block mb-3">
                        <div className="d-flex align-items-center">
                          <div className="bg-warning rounded-circle p-3 me-3">
                            <People className="text-dark" size={36} />
                          </div>
                          <div>
                            <span className="fs-5 primary-font fw-500 text-dark">
                              <EditableBlock
                                initialContent={content.LargeCta.header2}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "LargeCta",
                                    "header2",
                                    value
                                  )
                                }
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-dark fs-2 alt-font fw-600 mb-3">
                        <EditableBlock
                          initialContent={content.LargeCta.header3}
                          onContentChange={(value) =>
                            handleContentChange("LargeCta", "header3", value)
                          }
                        />
                      </h2>
                    </Col>
                    <Col
                      xl={5}
                      lg={6}
                      md={10}
                      className="text-center text-lg-start"
                    >
                      <p className="text-dark primary-font">
                        <EditableBlock
                          initialContent={content.LargeCta.summary1}
                          onContentChange={(value) =>
                            handleContentChange("LargeCta", "summary1", value)
                          }
                        />
                      </p>
                    </Col>
                  </Row>
                  <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
                    {[
                      {
                        name: content.Team.summary1,
                        role: content.Team.header1,
                        img: content.Team.image1,
                        imageKey: "image1",
                      },
                      {
                        name: content.Team.summary2,
                        role: content.Team.header2,
                        img: content.Team.image2,
                        imageKey: "image2",
                      },
                      {
                        name: content.Team.summary3,
                        role: content.Team.header3,
                        img: content.Team.image3,
                        imageKey: "image3",
                      },
                      {
                        name: content.Team.summary4,
                        role: content.Team.header4,
                        img: content.Team.image4,
                        imageKey: "image4",
                      },
                    ].map((member, index) => (
                      <Col key={index} className="text-center mb-4">
                        <Card className="border-0 overflow-hidden" >
                          <Card.Img
                            variant="top"
                            src={member.img}
                            alt={member.name}
                            height={200}
                          />
                          <Card.Body className="bg-white text-dark text-center p-3">
                            <Card.Title className="fs-3">
                              <EditableBlock
                                initialContent={member.name}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Team",
                                    `summary${index + 1}`,
                                    value
                                  )
                                }
                              />
                            </Card.Title>
                            <Card.Text className="fs-5">
                              <EditableBlock
                                initialContent={member.role}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Team",
                                    `header${index + 1}`,
                                    value
                                  )
                                }
                              />
                            </Card.Text>
                          </Card.Body>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleEditImageClick("Team", member.imageKey)
                            }
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 1000,
                              backgroundColor: "rgba(0,0,0,0.5)",
                              color: "#fff",
                              border: "none",
                            }}
                          >
                            {loadingImage ? (
                              <div
                                className="spinner-border spinner-border-sm text-primary"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              `Edit Image ${index + 1}`
                            )}
                          </Button>
                          <input
                            type="file"
                            ref={(ref) =>
                              (fileInputRefs.current[
                                `Team-${member.imageKey}`
                              ] = ref)
                            }
                            onChange={(e) =>
                              handleImageChange(e, "Team", member.imageKey)
                            }
                            style={{ display: "none" }}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            )}

            {renderSection(
              "Reviews",
              <section
                id="testimonials"
                className="learning px-4 bg-gradient-tranquil-white position-relative"
              >
                <Container className="position-relative z-index-1">
                  <Row className="justify-content-center mb-3">
                    <Col xs={12} className="text-center">
                      <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
                        Trusted by hundreds of students
                      </h2>
                    </Col>
                  </Row>
                  <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 align-items-center mb-4 xs-mb-25px">
                    {reviews.map((review, index) => (
                      <Col key={index} className="mb-30px">
                        <Card className="border-radius-6px p-3 xl-p-10 bg-white box-shadow-quadruple-large" style={{height: "450px"}}>
                          <Card.Body className="d-flex flex-column justify-content-center h-100">
                            <div className="mb-20px d-flex align-items-center">
                            <div className="position-relative">
                              <img
                                src={review.imgSrc}
                                className="rounded-circle w-90px lg-w-65px me-15px"
                                alt={review.name}
                              />
                              <Button
                                variant="primary"
                                size="sm"
                                onClick={() =>
                                  handleEditImageClick(
                                    "Reviews",
                                    review.RimageKey
                                  )
                                }
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  zIndex: 1000,
                                  backgroundColor: "rgba(0,0,0,0.5)",
                                  color: "#fff",
                                  border: "none",
                                }}
                              >
                                {loadingImage ? (
                                  <div
                                    className="spinner-border spinner-border-sm text-primary"
                                    role="status"
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                ) : (
                                  `Edit Image ${index + 1}`
                                )}
                              </Button>
                              <input
                                type="file"
                                ref={(ref) =>
                                  (fileInputRefs.current[
                                    `Reviews-${review.RimageKey}`
                                  ] = ref)
                                }
                                onChange={(e) =>
                                  handleImageChange(
                                    e,
                                    "Reviews",
                                    review.RimageKey
                                  )
                                }
                                style={{ display: "none" }}
                              />
                              </div>
                              <div>
                                <div className="text-dark-gray fs-18 fw-600">
                                  <EditableBlock
                                    initialContent={review.name}
                                    onContentChange={(value) =>
                                      handleContentChange(
                                        "Reviews",
                                        `header${index + 1}`,
                                        value
                                      )
                                    }
                                  />
                                </div>
                                <div className="lh-24 fs-16">
                                  <EditableBlock
                                    initialContent={review.role}
                                    onContentChange={(value) =>
                                      handleContentChange(
                                        "Reviews",
                                        `title${index + 1}`,
                                        value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="mb-15px md-w-85 sm-w-100">
                              <EditableBlock
                                initialContent={review.text}
                                onContentChange={(value) =>
                                  handleContentChange(
                                    "Reviews",
                                    `summary${index + 1}`,
                                    value
                                  )
                                }
                              />
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
                </Container>
              </section>
            )}

            {renderSection(
              "LargeCta",
              <section
                id="large-cta"
                className="learning px-4 bg-gradient-tranquil-white position-relative"
              >
                <Container className="position-relative z-index-1">
                  <div className="fs-20 ls-minus-05px fw-500 text-dark-gray w-100 text-center">
                    <img src={content.LargeCta.image1} alt="Large CTA" />
                    <span className="d-block d-sm-inline-block position-relative xs-top-minus-10px">
                      <span className="fw-700 text-decoration-line-bottom">
                        <EditableBlock
                          initialContent={content.LargeCta.header1}
                          onContentChange={(value) =>
                            handleContentChange("LargeCta", "header1", value)
                          }
                        />
                      </span>
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEditImageClick("LargeCta", "image1")}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1000,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      {loadingImage ? (
                        <div
                          className="spinner-border spinner-border-sm text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Edit Image"
                      )}
                    </Button>
                    <input
                      type="file"
                      ref={(ref) =>
                        (fileInputRefs.current["LargeCta-image1"] = ref)
                      }
                      onChange={(e) =>
                        handleImageChange(e, "LargeCta", "image1")
                      }
                      style={{ display: "none" }}
                    />
                  </div>
                </Container>
              </section>
            )}

            {renderSection(
              "Blog",
              <section
                id="blog"
                className="learning px-4 bg-gradient-tranquil-white overflow-hidden overlap-height position-relative"
              >
                <Container className="overlap-gap-section">
                  <Row className="mb-4 md-mb-6">
                    <Col>
                      <Row className="justify-content-center mb-3">
                        <Col xs={12} className="text-center">
                          <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
                            Our Blog Post
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        {blogPosts.map((post, index) => (
                          <Col
                            key={index}
                            xs={12}
                            md={6}
                            lg={4}
                            className="mb-0"
                          >
                            <Card className="card border-0 border-radius-4px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                              <Card.Body className="p-0">
                                <div className="blog-image p-0 position-relative overflow-hidden">
                                  <a href="#">
                                    <img src={post.imgSrc} alt={post.title} />
                                  </a>
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() =>
                                      handleEditImageClick(
                                        "Blog",
                                        `image${index + 1}`
                                      )
                                    }
                                    style={{
                                      position: "absolute",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                      zIndex: 1000,
                                      backgroundColor: "rgba(0,0,0,0.5)",
                                      color: "#fff",
                                      border: "none",
                                    }}
                                  >
                                    {loadingImage ? (
                                      <div
                                        className="spinner-border spinner-border-sm text-primary"
                                        role="status"
                                      >
                                        <span className="visually-hidden">
                                          Loading...
                                        </span>
                                      </div>
                                    ) : (
                                      `Edit Image ${index + 1}`
                                    )}
                                  </Button>
                                  <input
                                    type="file"
                                    ref={(ref) =>
                                      (fileInputRefs.current[
                                        `Blog-image${index + 1}`
                                      ] = ref)
                                    }
                                    onChange={(e) =>
                                      handleImageChange(
                                        e,
                                        "Blog",
                                        `image${index + 1}`
                                      )
                                    }
                                    style={{ display: "none" }}
                                  />
                                </div>
                                <div className="post-content p-4 md-p-4">
                                  <p className="card-title mb-10px fw-600 fs-19 lh-28 text-dark-gray d-inline-block">
                                    <EditableBlock
                                      initialContent={post.title}
                                      onContentChange={(value) =>
                                        handleContentChange(
                                          "Blog",
                                          `header${index + 1}`,
                                          value
                                        )
                                      }
                                    />
                                  </p>
                                  <p className="mb-0">
                                    <EditableBlock
                                      initialContent={post.content}
                                      onContentChange={(value) =>
                                        handleContentChange(
                                          "Blog",
                                          `content${index + 1}`,
                                          value
                                        )
                                      }
                                    />
                                  </p>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            )}

            <Contact />
            <Footer />
          </Col>
        </Row>
      </Container>

      <Col md={3}>
        {activeSection && (
          <SideEditor
            sectionId={activeSection}
            onBackgroundColorChange={handleBackgroundColorChange}
            onTextColorChange={handleTextColorChange}
            onFontChange={handleFontChange}
          />
        )}
      </Col>
    </div>
  );
};

export default Template2;

// Contact Section
const Contact = () => (
  <section
    id="contact"
    className="learning px-4 overflow-hidden position-relative overlap-height py-6 py-lg-8"
  >
    <Container className="px-4 py-6 overlap-gap-section">
      <Row className="justify-content-center mb-3">
        <Col xs={12} className="text-center">
          <h2 className="alt-font fs-2 text-dark-gray fw-600 ls-minus-3px">
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
                  We value your privacy. Your information will only be used to
                  respond to your request.
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
);

// Footer Section
const Footer = () => (
  <footer className="learning px-4 bg-gradient-aztec-green position-relative">
    <Container className="footer-dark text-center text-sm-start position-relative">
      <Row className="align-items-center footer-bottom border-top border-color-transparent-white-light pt-30px g-0">
        <Col xl={7} className="ps-0 text-center text-xl-start lg-mb-10px">
          <ul className="footer-navbar fs-16 lh-normal">
            <li className="nav-item active">
              <a href="demo-elearning.html" className="nav-link alt-font ps-0">
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
);
