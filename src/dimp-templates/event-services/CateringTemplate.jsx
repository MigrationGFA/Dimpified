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
  Tab,
  Carousel,
  ButtonGroup,
} from "react-bootstrap";
import {
  ArrowRight,
  TelephoneOutbound,
  BoxSeam,
  Award,
  BagCheck,
  StarFill,
  Star,
  ArrowRightCircle,
  ArrowLeftCircle,
  ChatSquareText,
  TelephoneInbound,
  EnvelopeOpen,
  GeoAlt,
} from "react-bootstrap-icons";
// import { BsCircle, BsFillCircleFill } from "react-icons/bs";

const dishes = [
  {
    id: 1,
    name: "Jollof Rice",
    price: 3000,
    image: "https://gfa-tech.com/dimp-template-images/images/jollof.jpg",
    ingredients: ["Grilled chicken", "Mixed greens", "Cherry tomatoes"],
  },
  {
    id: 2,
    name: "Coconut Rice",
    price: 2500,
    image: "https://gfa-tech.com/dimp-template-images/images/coconut-rice.jpg",
    ingredients: ["Bell peppers", "Mushrooms", "Olives"],
  },
  {
    id: 3,
    name: "Pounded Yam",
    price: 2000,
    image: "https://gfa-tech.com/dimp-template-images/images/pounded-yam.jpg",
    ingredients: ["Angus beef", "Cheddar cheese", "Caramelized onions"],
  },
  {
    id: 4,
    name: "Fried rice",
    price: 2500,
    image: "https://gfa-tech.com/dimp-template-images/images/fried-rice.jpg",
    ingredients: ["Shrimp", "Mussels", "Garlic white wine sauce"],
  },
  {
    id: 5,
    name: "Yam Porridge with plantain",
    price: 1800,
    image: "https://gfa-tech.com/dimp-template-images/images/porridge.jpg",
    ingredients: ["Quinoa", "Roasted vegetables", "Tahini dressing"],
  },
  {
    id: 6,
    name: "Beef Shawarma",
    price: 2800,
    image: "https://gfa-tech.com/dimp-template-images/images/shawarma.jpg",
    ingredients: ["Quinoa", "Roasted vegetables", "Tahini dressing"],
  },
];
const groupedDishes = dishes.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / 3);
  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [];
  }
  resultArray[chunkIndex].push(item);
  return resultArray;
}, []);

const CateringTemplate = () => {
  return (
    <Fragment>
      <Navbar
        bg="transparent"
        variant="transparent"
        expand="lg"
        className="catering-link alt-font px-lg-10 py-lg-3"
      >
        <Container>
          <Navbar.Brand
            className="fw-bold text-dark d-flex align-items-center"
            href="#home"
          >
            <img
              src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-logo-black.png"
              alt="Icon"
              style={{ marginLeft: "10px", height: "4rem" }} // Adjust the margin and height as needed
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="fs-30 ls-1px" href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="fs-30 ls-1px" href="#menu">
                MENU
              </Nav.Link>
              <Nav.Link className="fs-30 ls-1px" href="#dishes">
                DISHES
              </Nav.Link>
              <Nav.Link className="fs-30 ls-1px" href="#testimonials">
                TESTIMONIALS
              </Nav.Link>
              <Nav.Link className="fs-30 ls-1px" href="#blog">
                BLOG
              </Nav.Link>
            </Nav>
            <Button className="btn alt-font border-1 btn-transparent-white-light border-color-transparent-white-light btn-large left-icon btn-switch-text btn-rounded">
              BOOK US NOW <ArrowRight />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        id="home"
        className="catering primary-font p-0 full-screen md-h-700px bg-dark-gray sm-h-600px cover-background"
        style={{
          backgroundImage:
            "url('https://gfa-tech.com/dimp-template-images/images/catering-bg.png')",
        }}
      >
        <div className="opacity-light bg-dark-gray"></div>
        <Container className="h-100">
          <Row className="align-items-center h-100 justify-content-center">
            <Col xs={12} className="position-relative text-center">
              <div
                className="background-repeat bg-base-color border-radius-100 w-700px h-700px lg-w-550px lg-h-550px sm-w-450px sm-h-450px xs-w-320px xs-h-320px mx-auto position-relative d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage:
                    "url('https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-banner-pattern.png')",
                }}
              >
                <div>
                  <p className="text-black alt-font fs-26 xs-fs-17 xs-lh-26 ls-1px text-uppercase mb-25px sm-mb-15px mt-10px">
                    Experience the original naija taste
                  </p>
                  <div className="alt-font fs-110 lh-100 xs-fs-80 xs-lh-70 mb-30px xs-mb-15px fancy-text-style-4">
                    <span className="text-outline text-outline-width-1px sm-text-outline-width-1px text-outline-color-white text-outline-base-color-background">
                      Pay 'N' Bite
                    </span>{" "}
                    <span className="text-white ls-minus-2px">Catering</span>
                  </div>
                  <Button
                    href="#dishes"
                    className="btn alt-font btn-extra-large btn-switch-text btn-black btn-round-edge btn-box-shadow mb-10px"
                  >
                    <span className="">
                     BOOK US NOW
                      <ArrowRight className="fs-20 fw-500 mx-1" />
                    </span>
                  </Button>
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/jollof-3.png"
                    height={200}
                    alt=""
                    className="position-absolute right-minus-50px bottom-50px lg-bottom-10px lg-w-180px sm-w-150px animation-float d-none d-sm-inline-block"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        id="about"
        className="catering primary-font bg-white position-relative overflow-hidden z-index-0"
      >
        <div className="position-absolute left-0px w-100 text-center top-minus-90px lg-top-minus-60px xs-top-minus-20px opacity-2 ls-minus-10px lg-ls-minus-1px fs-350 lg-fs-250 xs-fs-200 text-nowrap alt-font text-uppercase">
          experience
        </div>
        <div className="position-absolute left-minus-50px mt-15 d-none d-xl-inline-block">
          <img
            src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-02.jpg"
            alt="Restaurant ambiance"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div>
        <div className="position-absolute z-index-minus-1 right-minus-50px xxl-right-minus-100px xl-right-minus-50px xl-w-220px d-none d-xl-inline-block">
          <img
            src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-03.jpg"
            alt="Restaurant interior"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div>
        <Container>
          <Row className="align-items-center mb-4 lg-mb-6 lg-mt-5">
            <Col
              xl={7}
              lg={6}
              className="text-center position-relative md-mb-50px xs-mb-30px"
            >
              <img
                src="https://gfa-tech.com/dimp-template-images/images/jollof-3.png"
                alt="Restaurant dish"
                height={500}
              />
            </Col>
            <Col xl={5} lg={6} className="px-lg-10">
              <span className="fs-15 fw-600 text-danger text-uppercase mb-25px d-block">
                <span className="w-70px h-2px bg-danger d-inline-block align-middle me-15px"></span>
                Since 1988
              </span>
              <h1 className="alt-font fs-50 text-dark-gray mb-15px">
                Wonderful dining experience & food.
              </h1>
              <p className="w-90 primary-font fs-20">
                Our catering services has been offering exquisite dining
                experiences for decades, with a focus on quality and service.
              </p>
              <div className="d-inline-block mt-10px xs-mt-0">
                <Button
                  href="#menu"
                  className="btn-dark-gray alt-font btn-large btn-switch-text btn-round-edge btn-box-shadow me-30px xs-me-15px xs-mb-10px"
                >
                  <span>BOOK US NOW</span>
                </Button>
                <div className="alt-font fs-24 d-inline-block align-middle lh-0 text-dark-gray xs-mb-10px">
                  <TelephoneOutbound className="me-10px text-base-color" />
                  <a href="tel:1800222000">1-800-222-000</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 justify-content-center">
            <Col className="icon-with-text-style-08 md-mb-50px sm-mb-30px">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle bg-white box-shadow-medium-bottom me-25px">
                  <BoxSeam className="icon-medium text-dark-gray" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block alt-font fs-26 text-dark-gray">
                    Fast delivery
                  </span>
                  <p className="lh-22">Within 30 minutes</p>
                </div>
              </div>
            </Col>
            <Col className="icon-with-text-style-08 md-mb-50px sm-mb-30px">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle bg-white box-shadow-medium-bottom me-25px">
                  <Award className="icon-medium text-dark-gray" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block alt-font fs-26 text-dark-gray">
                    Absolute dining
                  </span>
                  <p className="lh-22">Best buffet restaurant</p>
                </div>
              </div>
            </Col>
            <Col className="icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle bg-white box-shadow-medium-bottom me-25px">
                  <BagCheck className="icon-medium text-dark-gray" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="d-inline-block alt-font fs-26 text-dark-gray">
                    Pickup delivery
                  </span>
                  <p className="lh-22">Grab your food order</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        id="menu"
        className="catering primary-font cover-background"
        style={{
          backgroundImage: `url('https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-05.jpg')`,
        }}
      >
        <Container>
          <Row className="justify-content-center mb-1">
            <Col lg={7} className="text-center">
              <span className="fs-15 fw-600 text-red text-uppercase mb-10px d-block">
                <span className="w-5px h-2px bg-red d-inline-block align-middle me-5px"></span>
                Choose delicious
                <span className="w-5px h-2px bg-red d-inline-block align-middle ms-5px"></span>
              </span>
              <h2 className="alt-font fs-50 text-dark-gray">Popular Menu</h2>
            </Col>
          </Row>

          <Row className="mb-6 xs-mb-8">
            <Col className="tab-style-02 fs-600">
              <Tab.Container defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-center">
                      <Col lg={6} className="sm-mb-20px">
                        <ul className="pricing-table-style-12 pe-15px md-pe-0">
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/spag.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  Spaghetti
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #1200
                                </div>
                              </div>
                              <p>Fresh organic eggs served to perfection.</p>
                            </div>
                          </li>
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/porridge.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  Yam Porridge
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #2000
                                </div>
                              </div>
                              <p>Juicy grilled chicken breast in a soft bun.</p>
                            </div>
                          </li>
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/bread.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  Bread and egg
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #1200
                                </div>
                              </div>
                              <p>Crispy chips with a hint of spice.</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={6}>
                        <ul className="pricing-table-style-12 ps-15px md-ps-0">
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/rice-and-beans.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  Rice and beans
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #1500
                                </div>
                              </div>
                              <p>Healthy salad with grilled chicken strips.</p>
                            </div>
                          </li>
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/white-rice.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  White rice
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #1100
                                </div>
                              </div>
                              <p>With classic rich grated pepper sauce.</p>
                            </div>
                          </li>
                          <li className="last-paragraph-no-margin">
                            <img
                              src="https://gfa-tech.com/dimp-template-images/images/dish.jpg"
                              className="rounded-circle"
                              height={120}
                              alt=""
                            />
                            <div className="ms-30px xs-ms-0 flex-grow-1">
                              <div className="d-flex align-items-center w-100 fs-18 mb-5px">
                                <span className="fw-600 text-dark-gray">
                                  Dish platter
                                </span>
                                <div className="divider-style-03 divider-style-03-02 border-color-extra-medium-gray flex-grow-1 ms-20px me-20px"></div>
                                <div className="ms-auto fw-600 text-dark-gray">
                                  #7000
                                </div>
                              </div>
                              <p>All you can eat native food platter</p>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col className="text-center last-paragraph-no-margin">
              <div className="d-inline-block align-middle bg-red fw-500 text-white border-radius-30px ps-20px pe-20px fs-14 me-10px sm-m-10px">
                Masterchef
              </div>
              <div className="d-inline-block align-middle text-dark-gray fs-18 fw-500">
                Unique and delicious dishes from the naija's{" "}
                <span className="text-decoration-line-bottom-medium fw-600">
                  best masterchefs.
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        id="dishes"
        className="catering primary-font bg-white overflow-hidden position-relative py-5"
      >
        <Container fluid>
          <Row className="justify-content-center mb-5">
            <Col lg={9} className="text-center">
              <span className="fs-10px fw-bold text-danger text-uppercase mb-2 d-block">
                <Star className="me-2" />
                Chef's Specials
                <Star className="ms-2" />
              </span>
              <h2 className="text-dark alt-font fs-50">Popular Dishes</h2>
            </Col>
          </Row>
          <Row>
            <Col className="px-lg-16 px-4 primary-font ">
              <Carousel
                indicators={true}
                controls={true}
                interval={3000}
                className="carousel-dark"
              >
                {groupedDishes.map((group, groupIndex) => (
                  <Carousel.Item key={groupIndex}>
                    <Row>
                      {group.map((dish) => (
                        <Col
                          xs={12}
                          md={6}
                          lg={4}
                          key={dish.id}
                          className="mb-4"
                        >
                          <div className="catering primary-font services-box-style-01 hover-box last-paragraph-no-margin">
                            <img
                              className="w-100 border-radius-6px"
                              src={dish.image}
                              alt={dish.name}
                            />
                            <div className="p-3 d-flex flex-column text-center">
                              <h5 className="mb-2 fs-19">{dish.name}</h5>
                              <p className="mb-3 fs-13">
                                {dish.ingredients.join(", ")}
                              </p>
                              <div className="mt-auto">
                                <span className="fs-15 fw-bold text-danger">
                                  #{dish.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        id="testimonials"
        className="catering primary-font bg-very-light-gray position-relative big-section"
      >
        <div className="position-absolute left-150px xxl-left-50px mt-7 d-none d-xxl-inline-block">
          <img
            src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-07.jpg"
            alt="Decorative Image Left"
          />
        </div>
        <div className="position-absolute right-150px xxl-right-50px d-none d-xxl-inline-block">
          <img
            src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-08.jpg"
            alt="Decorative Image Right"
          />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} lg={8} md={10}>
              <Carousel
                controls={true}
                indicators={true}
                className="slider-custom-image"
              >
                <Carousel.Item>
                  <div className="d-flex flex-column">
                    <div className="mb-28 align-self-center text-center w-100">
                      <img
                        src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-quotes-icon.jpg"
                        className="mb-30px rounded-circle"
                        alt="Quote Icon"
                      />
                      <h4 className="alt-font fs-30 lh-42 text-dark-gray mb-10px">
                        Food for us comes from our relatives whether they have
                        wings or fins or roots. This is how we consider food has
                        a culture. It has history, it has a story, and it has
                        relationships.
                      </h4>
                      <span className="fs-20 fw-500 text-base-color d-block">
                        Herman Miller
                      </span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex flex-column">
                    <div className="mb-28 align-self-center text-center w-100">
                      <img
                        src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-quotes-icon.jpg"
                        className="mb-30px rounded-circle"
                        alt="Quote Icon"
                      />
                      <h4 className="alt-font fs-30 lh-42 text-dark-gray mb-10px">
                        It was a lovely place with great ambience. Loved the
                        service of the staff. The dishes are priced very high
                        compared to the quality. Thank you so much to all staff.
                      </h4>
                      <span className="fs-20 fw-500 text-base-color d-block">
                        Matthew Taylor
                      </span>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex flex-column">
                    <div className="mb-28 align-self-center text-center w-100">
                      <img
                        src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-home-quotes-icon.jpg"
                        className="mb-30px rounded-circle"
                        alt="Quote Icon"
                      />
                      <h4 className="alt-font fs-30 lh-42 text-dark-gray mb-10px">
                        Good communication and the food was great. The
                        facilities were good. Loved the desserts and their way
                        of presenting. We came here for a family dinner, and
                        this place won my heart.
                      </h4>
                      <span className="fs-20 fw-500 text-base-color d-block">
                        Leonel Mooney
                      </span>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="blog" className="catering bg-white primary-font">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs="auto" className="text-center">
              <span className="fs-15 fw-600 text-red text-uppercase mb-2 d-block">
                <span className="w-5px h-2px bg-red d-inline-block align-middle me-2"></span>
                From our blog
                <span className="w-5px h-2px bg-red d-inline-block align-middle ms-2"></span>
              </span>
              <h2 className="alt-font fs-50 text-dark-gray mb-0">
                Recent articles
              </h2>
            </Col>
          </Row>
          <Row className="blog-metro">
            <Col xs={12}>
              <Row className="g-4">
                {/* Blog Item 1 */}
                <Col md={4} sm={6} xs={12}>
                  <Card className="position-relative overflow-hidden border-radius-6px">
                    <Card.Img
                      variant="top"
                      src="https://gfa-tech.com/dimp-template-images/images/jollof.jpg"
                      alt="Blog 1"
                    />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end h-100 p-4 lg-p-3">
                      <div className="blog-categories mb-auto">
                        <a
                          href="#"
                          className="categories-btn bg-white text-dark-gray text-uppercase fw-600 ms-0 mb-auto align-self-start"
                        >
                          Event
                        </a>
                      </div>
                      <a
                        href="#"
                        className="text-white card-title fs-28 lh-32 alt-font w-60 xl-w-70 lg-w-80 md-w-70"
                      >
                        Never eat more than you can life.
                      </a>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                {/* Blog Item 2 */}
                <Col md={4} sm={6} xs={12}>
                  <Card className="position-relative overflow-hidden border-radius-6px">
                    <Card.Img
                      variant="top"
                      src="https://gfa-tech.com/dimp-template-images/images/food-platter.jpg"
                      alt="Blog 2"
                    />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end h-100 p-4 lg-p-3">
                      <div className="blog-categories mb-auto">
                        <a
                          href="#"
                          className="categories-btn bg-white text-dark-gray text-uppercase fw-600 ms-0 mb-auto align-self-start"
                        >
                          Event
                        </a>
                      </div>
                      <a
                        href="#"
                        className="text-white card-title fs-28 lh-32 alt-font w-60 xl-w-70 lg-w-80 md-w-70"
                      >
                        Life is uncertain Eat dessert first.
                      </a>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                {/* Blog Item 3 */}
                <Col md={4} sm={6} xs={12}>
                  <Card className="position-relative overflow-hidden border-radius-6px">
                    <Card.Img
                      variant="top"
                      src="https://gfa-tech.com/dimp-template-images/images/jollof cocktail.jpg"
                      alt="Blog 3"
                    />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end h-100 p-4 lg-p-3">
                      <div className="blog-categories mb-auto">
                        <a
                          href="#"
                          className="categories-btn bg-white text-dark-gray text-uppercase fw-600 ms-0 mb-auto align-self-start"
                        >
                          Event
                        </a>
                      </div>
                      <a
                        href="#"
                        className="text-white card-title fs-28 lh-32 alt-font w-60 xl-w-70 lg-w-80 md-w-70"
                      >
                        Food simply isn't important to me.
                      </a>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <footer
        className="catering primary-font pb-0 bg-very-light-gray cover-background background-position-center-top sm-background-image-none"
        style={{
          backgroundImage: "url('images/demo-restaurant-home-footer-bg.jpg')",
        }}
      >
        <Container>
          <Row className="row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mt-13 md-mt-15 sm-mt-0 mb-5 sm-mb-50px">
            {/* Features Box Item 1 */}
            <Col className="icon-with-text-style-03 md-mb-30px">
              <div className="feature-box ps-8 pe-8 lg-ps-0 lg-pe-0 overflow-hidden">
                <div className="feature-box-icon">
                  <ChatSquareText className="d-inline-block icon-medium text-dark-gray mb-15px" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="fw-700 text-dark-gray fs-15 text-uppercase">
                    About Us
                  </span>
                  <p className="w-90 md-w-70 sm-w-80 xs-w-70 mx-auto">
                    Enjoy a wonderful cafe dining experience.
                  </p>
                </div>
              </div>
            </Col>
            {/* Features Box Item 2 */}
            <Col className="icon-with-text-style-03 md-mb-30px">
              <div className="feature-box ps-8 pe-8 lg-ps-0 lg-pe-0 overflow-hidden">
                <div className="feature-box-icon">
                  <TelephoneInbound className="d-inline-block icon-medium text-dark-gray mb-15px" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="fw-700 text-dark-gray fs-15 text-uppercase">
                    Let's Talk
                  </span>
                  <div className="w-100 d-block">
                    <span className="d-block">
                      Phone: <a href="tel:1800222000">1-800-222-000</a>
                    </span>
                    <span className="d-block">Fax: 1-800-222-002</span>
                  </div>
                </div>
              </div>
            </Col>
            {/* Features Box Item 3 */}
            <Col className="icon-with-text-style-03 xs-mb-30px">
              <div className="feature-box ps-8 pe-8 lg-ps-0 lg-pe-0 overflow-hidden">
                <div className="feature-box-icon">
                  <EnvelopeOpen className="d-inline-block icon-medium text-dark-gray mb-15px" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="fw-700 text-dark-gray fs-15 text-uppercase">
                    Book a Table
                  </span>
                  <div className="w-100 d-block">
                    <a href="mailto:contact@example.com">
                      <span>[email protected]</span>
                    </a>
                    <br />
                    <a href="mailto:reservations@example.com">
                      <span>[email protected]</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            {/* Features Box Item 4 */}
            <Col className="icon-with-text-style-03">
              <div className="feature-box ps-8 pe-8 lg-ps-0 lg-pe-0 overflow-hidden">
                <div className="feature-box-icon">
                  <GeoAlt className="d-inline-block icon-medium text-dark-gray mb-15px" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="fw-700 text-dark-gray fs-15 text-uppercase">
                    Contact Us
                  </span>
                  <p className="md-w-70 sm-w-90 xs-w-70 mx-auto">
                    Ring road, Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="border-top border-color-transparent-dark-very-light pt-25px pb-25px">
          <Container>
            <Row className="align-items-center">
              <Col
                md={4}
                sm={6}
                className="fs-15 last-paragraph-no-margin text-center text-sm-start order-3 order-sm-2 order-md-1"
              >
                <p>
                  &copy; Copyright 2024{" "}
                  <a
                    href="https://dimpified.com"
                    target="_blank"
                    className="text-decoration-line-bottom text-dark-gray fw-600"
                  >
                    DIMP
                  </a>
                </p>
              </Col>
              <Col md={4} className="text-center order-1 order-md-2 sm-mb-20px">
                <a href="#home" className="footer-logo d-inline-block">
                  <img
                    src="https://gfa-tech.com/dimp-template-images/images/demo-restaurant-logo-black.png"
                    data-at2x="images/demo-restaurant-logo-black@2x.png"
                    alt="Crafto Logo"
                    className="default-logo"
                  />
                </a>
              </Col>
              <Col
                md={4}
                sm={6}
                className="elements-social social-icon-style-08 xs-mb-15px text-center text-sm-end order-2 order-sm-3 order-md-3"
              >
                <ul className="small-icon dark d-inline-block">
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble"
                      href="http://www.dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
};

export default CateringTemplate;
