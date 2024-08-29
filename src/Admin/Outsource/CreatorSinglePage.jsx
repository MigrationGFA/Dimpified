import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

function getTimeDifference(updatedAt) {
  const updatedAtDate = new Date(updatedAt);
  const currentTime = new Date();
  const timeDifference = currentTime - updatedAtDate;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  return { days, hours: hours % 24, minutes: minutes % 60 };
}

const CreatorSinglePage = () => {
  const [creatorDetails, setCreatorDetails] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const creatorId = queryParam.get("id");

  // Determine the number of courses to display
  const coursesToDisplay = showAll
    ? creatorDetails?.courses
    : creatorDetails?.courses?.slice(0, 4);

  const getTimeDifferenceString = (time) => {
    if (!time) {
      return "Unknown";
    }
    if (time.days > 0) {
      return `${time.days} days ago`;
    } else if (time.hours > 0) {
      return `${time.hours} hours ago`;
    } else {
      return `${time.minutes} minutes ago`;
    }
  };

  const time = creatorDetails?.ecosystems?.[0]?.updatedAt
    ? getTimeDifference(creatorDetails.ecosystems[0].updatedAt)
    : null;
  const timeString = getTimeDifferenceString(time);

  const fetchcreatorDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin-get-a-creator/${creatorId}`
      );
      if (response.data && response.data.ecosystems) {
        setCreatorDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching creator details:", error);
      setCreatorDetails({ error: "Unable to fetch data" });
    }
  };

  useEffect(() => {
    fetchcreatorDetails();
  }, [creatorId]);

  if (!creatorDetails) {
    return <div>Loading...</div>;
  }

  const handleShare = async () => {
    //handleShare
  };

  const ecosystem = creatorDetails.ecosystems[0];

  return (
    <section className="py-14 px-6 bg-white">
      {/* <Container> */}
      <Row>
        <Col xl={12} md={12}>
          <div className="d-xl-flex align-items-center">
            <div className="mb-3 mb-md-0">
              <Image
                src={creatorDetails.imageUrl || ecosystem?.logo}
                alt="logo"
                className="icon-shape border rounded-circle"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div className="ms-xl-3 w-100 mt-3 mt-xl-0">
              <div className="d-flex justify-content-between align-items-start mb-5">
                <div>
                  <h1 className="mb-1 h2">{creatorDetails.organizationName}</h1>
                  <h5 className="text-muted">Email: {creatorDetails.email}</h5>
                </div>
                <div onClick={handleShare} style={{ cursor: "pointer" }}>
                  {/* Share icon/button */}
                </div>
              </div>
              <div className="d-md-flex justify-content-between">
                <div className="mb-2 mb-md-0">
                  <i className="fe fe-clock text-muted"></i>{" "}
                  <span>{timeString}</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col xl={12} md={12}>
          <div>
            <h1 className="mb-4">{ecosystem?.mainObjective}</h1>
            <Row>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Creator Description</h2>
                <p>{ecosystem?.ecosystemDescription}</p>
              </Col>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Target Audience Sector</h2>
                <p>{ecosystem?.targetAudienceSector}</p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Status</h2>
                <p>{ecosystem?.status}</p>
              </Col>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Experience</h2>
                <p>{ecosystem?.experience}</p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Number Of Users</h2>
                <p>{ecosystem?.users}</p>
              </Col>
              <Col md={6} className="mt-4">
                <h2 className="fs-4">Years Of Experience</h2>
                <p>{creatorDetails.yearsOfExperience}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <hr />
      {/* Courses Section */}
      <Row className="mt-5">
        <Col xl={12} md={12}>
          <h2 className="mb-4">Available Courses</h2>
          <Row>
            {coursesToDisplay?.map((course) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={course._id}
                className="mb-4"
              >
                <div className="card h-100 d-flex flex-column">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="flex-grow-1">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text">
                        {course.description.length > 100
                          ? `${course.description.slice(0, 100)}...`
                          : course.description}
                      </p>
                      <p className="card-text">
                        <strong>Price:</strong> {course.currency} {course.price}
                      </p>
                      <p className="card-text">
                        <strong>Type:</strong> {course.courseType} |{" "}
                        <strong>Level:</strong> {course.level}
                      </p>
                      <ul className="card-text">
                        <strong>What&apos;s Included:</strong>
                        {course.whatIsIncluded?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2 text-center">
                      <Button variant="primary">View Course</Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          {creatorDetails?.courses?.length > 8 && (
            <div className="text-center mt-4">
              <Button variant="secondary" onClick={toggleShowAll}>
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </Col>
      </Row>

      {/* </Container> */}
    </section>
  );
};

export default CreatorSinglePage;
