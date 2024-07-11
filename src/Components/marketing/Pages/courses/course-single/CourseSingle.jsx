import React, { Fragment, useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  ListGroup,
  Image,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import axios from "axios";

import GKAccordionDefault from "../../../../../Components/marketing/common/accordions/GKAccordionDefault";
import Ratings from "../../../../../Components/marketing/common/ratings/Ratings";
import GKTippy from "../../../../../Components/elements/tooltips/GKTippy";
import CourseCard from "../FilterCourseCard";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import CheckedMark from "../../../../../assets/images/svg/checked-mark.svg";
import ReviewsTab from "./ReviewsTab";
import DescriptionTab from "./DescriptionTab";
import NavbarDefault from "../../../../../Pages/Pages/home-academy/navbars/NavbarDefault";
import PaystackPop from "@paystack/inline-js";
import { showToast } from "../../../../../Components/Showtoast";
// import { useGlobalContext } from "../../../../../context/AuthContext";
import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";
import { PaystackButton } from "react-paystack";

const CourseSingle = () => {
  const [isOpen, setOpen] = useState(false);
  const [courseData, setCourseData] = useState(null);
  // const [instructorDeatils, setInstructorDeatils] = useState(null);
  // const [requirement, setRequirement] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  let { ecosystemDomain, id } = useParams();

  // flutterwave payment
  const generateTxRef = () => {
    const randomString = Math.random().toString(36).substring(7);
    const timestamp = Date.now();
    return `${timestamp}-${randomString}`;
  };

  const handleFlutterPayment = useFlutterwave({
    public_key: "FLWPUBK_TEST-d99e582b1f593f250ea49b53385f5cce-X",
    tx_ref: generateTxRef(),
    amount: parseInt(sessionStorage.getItem("price")),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "samuelmakinde19@gmail.com",
      phone_number: "09064000000",
      name: "username",
    },
    customizations: {
      title: "Course Purchase Payment",
      description: "Course Purchase Payment",
      logo: "https://res.cloudinary.com/djhnaee9k/image/upload/v1714038296/et5gicqtnuw4u1tqujjr.png",
    },
  });

  const verifyFlutterwave = async (tx_ref) => {
    sessionStorage.removeItem("totalAmount");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/verify-payment`,
        {
          reference: tx_ref,
          email: "samuelmakinde19@gmail",
          itemType: "Course",
          userId: 2,
          provider: "flutterwave",
          itemId: id,
          ecosystemDomain: ecosystemDomain,
        }
      );
      setLoading(false);
      showToast(response.data.message);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  // // const { email, user } = useGlobalContext;
  // const emailUser = sessionStorage.getItem("email");
  // const UserId = sessionStorage.getItem("UserId");

  // const coursePrice = sessionStorage.getItem("price");
  // const amountValue = parseFloat(coursePrice);
  // const componentProps = {
  //   email: emailUser,
  //   amount: amountValue * 100,
  //   metadata: {
  //     name: sessionStorage.getItem("username"),
  //   },
  //   publicKey: "pk_test_57f928ef3b08dc974a816c89f7687c37e9afb03c",
  //   text: loading ? "Processing" : "Paystack",
  //   onSuccess: (reference) => {
  //     setLoading(true);
  //     console.log("this is reference", reference.reference);
  //     axios
  //       .post(
  //         "https://remsana-backend-testing.azurewebsites.net/api/v1/verify-payment",
  //         {
  //           reference: reference.reference,
  //           email: emailUser,
  //           courseId: courseId,
  //           userId: UserId,
  //         }
  //       )
  //       .then((response) => {
  //         if (response.data.message === "Course Purchased Successfully") {
  //           showToast(response.data.message);
  //           navigate("/student-My-Course/Learning");
  //           setOpenModal(true);
  //           setBlurBackground(true); // Apply blur effect when modal is open
  //         } else {
  //           showToast("payment for course not verify");
  //           // Handle other response statuses if needed
  //         }
  //       })
  //       .catch((error) => {
  //         showToast("An error occurred during payment verification");
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   },
  //   onClose: () => {
  //     setLoading(false);
  //     showToast("You have canceled the transaction");
  //   },
  // };

  // const [relatedCourses, setRelatedCouses] = useState(null);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/ecosystem-single-course/${ecosystemDomain}/${id}`
      );
      setCourseData(response.data.course);
      sessionStorage.setItem("price", response.data.course.price);
      console.log(response.data.course);
      console.log(response.data.course.price);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const addToCart = () => {
    // You can customize this function to add course to cart
    setCartItems([...cartItems, courseData]);
    showToast("Course added to cart!");
  };

  const imageUrl =
    courseData && courseData.image ? courseData.image.replace(/\\/g, "/") : "";
  console.log(imageUrl);
  return (
    <Fragment>
      <NavbarDefault />
      {/* Page header */}
      <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col xl={7} lg={7} md={12} sm={12}>
              <div>
                <h1 className="text-white display-4 fw-semi-bold">
                  {courseData &&
                    courseData.title
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                </h1>

                <div className="d-flex align-items-center">
                  {/* <GKTippy content="Add to Bookmarks">
                    <Link
                      to="#"
                      className="bookmark text-white text-decoration-none"
                    >
                      <i className="fe fe-bookmark text-white-50 me-2"></i>
                      Bookmark
                    </Link>
                  </GKTippy> */}
                  <span className="text-white ms-3">
                    <i className="fe fe-user text-white-50"></i>
                    {courseData && courseData.totalNumberOfEnrolledStudent}
                    Enrolled
                  </span>
                  <span className="text-white ms-3">
                    <i className="fe fe-clock text-white-50"></i>
                    {courseData && courseData.hour} Hours
                  </span>

                  {/* <span className="ms-4">
                    <span className="text-warning">
                      <Ratings rating={4.5} />
                      <span className="text-white ms-1">(140)</span>
                    </span>
                  </span> */}
                  <span className="text-white ms-4 d-none d-md-block">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="8"
                        width="2"
                        height="6"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                      <rect
                        x="7"
                        y="5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                      <rect
                        x="11"
                        y="2"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#DBD8E9"
                      ></rect>
                    </svg>{" "}
                    <span className="align-middle">
                      {courseData &&
                        courseData.level &&
                        courseData.level.charAt(0).toUpperCase() +
                          courseData.level.substring(1)}
                    </span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
              <Tab.Container defaultActiveKey="contents">
                <Card>
                  <Nav className="nav-lb-tab">
                    {/* "Reviews" */}
                    {["Contents", "Description"].map((item, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link
                          href={`#${item.toLowerCase()}`}
                          eventKey={item.toLowerCase()}
                          className="mb-sm-3 mb-md-0"
                        >
                          {item}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="contents" className="pb-4 pt-3 px-4">
                        {/* Course Index Accordion */}
                        <GKAccordionDefault
                          itemClass="px-0"
                          courseData={courseData}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="description" className="pb-4 p-4">
                        {/* Description */}
                        <DescriptionTab
                          itemClass="px-0"
                          courseData={courseData}
                          requirement={courseData && courseData.requirement}
                        />
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                        {/* Reviews */}
                      {/* <ReviewsTab />
                      </Tab.Pane>  */}
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            <Col lg={4} md={12} sm={12} className="mt-lg-n22">
              {/* Card */}
              <Card className="mb-3 mb-4">
                <div
                  className="rounded-3 position-relative w-100 d-block overflow-hidden p-0"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "100%",
                  }}
                >
                  <Image
                    src={courseData && courseData.image}
                    alt=""
                    className="w-100 "
                  />
                </div>

                {/* Card body */}
                <Card.Body>
                  {/* Price single page */}
                  <div className="mb-3">
                    <span className="text-dark fw-bold h2 me-2">
                      ₦ {courseData && courseData.price}
                    </span>
                    <del className="fs-4 text-muted">
                      ₦ {courseData && courseData.price}
                    </del>
                  </div>
                  {/* <div
                    className="d-grid"
                    style={{ height: "50px", borderBottom: "10px solid #ccc" }}
                  >
                    <Button variant="primary" onClick={addToCart}>
                      Add to Cart
                    </Button>
                  </div> */}
                  <div className="d-grid" style={{ height: "50px" }}>
                    <Button
                      variant="primary"
                      onClick={() =>
                        handleFlutterPayment({
                          callback: (response) => {
                            verifyFlutterwave(response.transaction_id);
                            closePaymentModal(); // this will close the modal programmatically
                          },
                        })
                      }
                    >
                      Purchase Course
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              {/* Card */}
              <Card className="mb-4">
                {/* Card header */}
                <Card.Header>
                  <h4
                    className="
mb-0"
                  >
                    What’s included
                  </h4>
                </Card.Header>

                {/* Card Body */}
                <Card.Body className="p-0">
                  <ListGroup variant="flush">
                    {courseData &&
                      courseData.whatIsIncluded &&
                      courseData.whatIsIncluded.map((item, index) => (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                      ))}
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Card */}
              {/* <Card> */}
              {/* Card body */}
              {/* <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <Image
                        src={courseData && courseData.image}
                        alt=""
                        className="rounded-circle avatar-xl"
                      />
                      <Link
                        to="#"
                        className="position-absolute mt-2 ms-n3"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Verifed"
                      >
                        <Image
                          src={CheckedMark}
                          alt=""
                          height="30"
                          width="30"
                        />
                      </Link>
                    </div>{" "}
                    <div className="ms-4">
                      <h4 className="mb-0">
                        {courseData && courseData.username}
                      </h4>
                      <p className="mb-1 fs-6">
                        {courseData && courseData.portfolio}
                      </p>
                      <span className="fs-6">
                        <span className="text-warning">4.5</span>
                        <span className="mdi mdi-star text-warning me-2"></span>
                        Instructor Rating
                      </span>
                    </div>
                  </div>
                  <Row className="border-top mt-3 border-bottom mb-3 g-0">
                    <Col>
                      <div className="pe-1 ps-2 py-3">
                        <h5 className="mb-0">
                          {courseData &&
                            courseData.totalNumberOfEnrolledStudent}
                        </h5>
                        <span>Students</span>
                      </div>
                    </Col>
                    <Col className="border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">
                          {courseData &&
                            courseData.totalNumberOfEnrolledStudent}
                        </h5>
                        <span>Courses</span>
                      </div>
                    </Col>
                    <Col className="border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">12,230</h5>
                        <span>Reviews</span>
                      </div>
                    </Col>
                  </Row>
                  <p>{courseData && courseData.description}</p>
                </Card.Body>
              </Card> */}
            </Col>
          </Row>
          {/* Card */}
          {/* <div className="pt-12 pb-3">
            <Row className="d-md-flex align-items-center mb-4">
              <Col lg={12} md={12} sm={12}>
                <h2 className="mb-0">Related Courses</h2>
              </Col>
            </Row>
            <Row>
              {relatedCourses &&
                relatedCourses.map((course, index) => (
                  <Col lg={3} md={6} sm={12} key={course._id} className="mb-5">
                    <CourseCard
                      key={index}
                      item={course}
                      free={true}
                      viewby="grid"
                      showprogressbar={false}
                      extraclass="mx-2"
                      link={`/student/single-course?id=${course._id}`}
                    />
                  </Col>
                ))}
            </Row>
          </div> */}
        </Container>
      </section>
    </Fragment>
  );
};
export default CourseSingle;
