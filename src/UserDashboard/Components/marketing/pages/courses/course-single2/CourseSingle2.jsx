// import node module libraries
import React, { Fragment, useEffect, useState, USE } from "react";
import { Col, Row, Container, Card, Image, Nav, Tab } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

// import MDI icons
import Icon from "@mdi/react";
import { mdiAccountMultipleOutline } from "@mdi/js";

// import custom components
// import GKYouTube from "../../../../../Components/marketing/common/video/GKYouTube";
import Ratings from "../../../../../Components/marketing/common/ratings/Ratings";
import LevelIcon from "../../../../../Components/marketing/common/miscellaneous/LevelIcon";
import GKAccordionProgress from "../../../../../Components/marketing/common/accordions/GKAccordionProgress";
// import GKTippy from "../../../../../Components/elements/tooltips/GKTippy";
import axios from "axios";

// import sub components tabs
import LearningReviewsTab from "../../../../../Components/marketing/pages/courses/course-single/LearningReviewsTab";
import DescriptionTab from "../../../../../Components/marketing/pages/courses/course-single/DescriptionTab";
// import TranscriptTab from '../../../../../Components/marketing/pages/courses/course-single/TranscriptTab';
// import FAQTab from '../../../../../Components/marketing/pages/courses/course-single/FAQTab';

// import data files

// import media files.
import NavbarDefault from "../../../../../Pages/home-academy/navbars/NavbarDefault";
// import FooterWithLinks from "../../../../../Pages/home-academy/FooterWithLinks";

const CourseSingle2 = () => {
  const [courseData, setCourseData] = useState(null);
  const [instructorDeatils, setInstructorDeatils] = useState(null);
  const [requirement, setRequirement] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const courseId = queryParams.get("id");
  useEffect(() => {
    if (courseId) {
      fetchCourseData();
    }
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/courses/${courseId}`
      );
      setCourseData(response.data.course);
      setInstructorDeatils(response.data.instructorDeatils);
      setRequirement(response.data.requirement);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      <NavbarDefault />
      <section className="py-lg-5 py-5">
        <Container>
          {/*  Video section  */}
          <Row>
            <Col lg={12} md={12} sm={12} className="mb-5">
              <div
                className="rounded-3 position-relative w-100 d-block overflow-hidden p-0"
                style={{ height: "600px" }}
              >
                {/* <GKYouTube videoId="PkZNo7MFNFg" /> */}
                <iframe
                  title="Course Content"
                  width="100%"
                  height="100%"
                  src={courseData && courseData.courseContent}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    const iframe = document.querySelector("iframe");
                    iframe.contentDocument.addEventListener(
                      "contextmenu",
                      (e) => {
                        e.preventDefault();
                      }
                    );
                  }}
                ></iframe>
              </div>
            </Col>
          </Row>
          {/*  Content  */}
          <Row>
            <Col xl={8} lg={12} md={12} sm={12} className="mb-4 mb-xl-0">
              {/*  Card  */}
              <Tab.Container defaultActiveKey="description">
                <Card className="mb-5">
                  {/*  Card body  */}
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <h1 className="fw-semi-bold mb-2">
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
                    </div>
                    <div className="d-flex mb-5">
                      <span>
                        <span className="text-warning">
                          <Ratings rating={4.5} />
                        </span>
                        <span className="fw-medium">(140)</span>
                      </span>

                      <span className="ms-4 d-none d-md-block">
                        {courseData && courseData.level && (
                          <>
                            <LevelIcon level={courseData.level} />
                            <span className="align-middle">
                              {courseData.level.charAt(0).toUpperCase() +
                                courseData.level.substring(1)}
                            </span>
                          </>
                        )}
                      </span>

                      <span className="ms-4 d-none d-md-block">
                        <Icon path={mdiAccountMultipleOutline} size={0.7} />
                        <span>
                          {" "}
                          {courseData &&
                            courseData.totalNumberOfEnrolledStudent} Enrolled
                        </span>
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image
                          src={instructorDeatils && instructorDeatils.image}
                          className="rounded-circle avatar-md"
                          alt=""
                        />
                        <div className="ms-2 lh-1">
                          <h4 className="mb-1">
                            {instructorDeatils && instructorDeatils.username}
                          </h4>
                          <p className="fs-6 mb-0">
                            @{instructorDeatils && instructorDeatils.username}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  {/*  Nav tabs  */}
                  <Nav className="nav-lt-tab">
                    {["Description", "Reviews"].map((item, index) => (
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
                </Card>
                {/*  Card  */}
                <Card className="rounded-3">
                  {/*  Card body  */}
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="description" className="pb-4 p-4">
                        {/* Description Tab */}
                        <DescriptionTab
                          itemClass="px-0"
                          courseData={courseData}
                          requirement={requirement}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                        {/* Reviews Tab */}
                        <LearningReviewsTab />
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="transcript" className="pb-4 p-4">
												
												<TranscriptTab />
											</Tab.Pane>
											<Tab.Pane eventKey="faq" className="pb-4 p-4">
												
												<FAQTab />
											</Tab.Pane> */}
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            <Col xl={4} lg={12} md={12} sm={12}>
              <Card>
                <GKAccordionProgress courseData={courseData} />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <FooterWithLinks /> */}
    </Fragment>
  );
};

export default CourseSingle2;
