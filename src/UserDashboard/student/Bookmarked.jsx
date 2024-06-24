import React, { useState, useEffect } from "react";
import { Col, Row, Card, Spinner } from "react-bootstrap";
import CourseCard from "../Components/marketing/pages/courses/BookmarkedCourseCard";
import StudentProfileLayout from "./StudentProfileLayout";
import axios from "axios";
import { useGlobalContext } from "../context/AuthContext";

const Bookmarked = () => {
  // const { userId } = useGlobalContext();
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   if (!userId) return;
  //   fetchData();
  // }, [userId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/student-get-courses/${userId}`
      );

      if (Array.isArray(response.data.coursesData)) {
        const bookmarkedCourses = response.data.coursesData.filter(
          (course) => course.subscriptionStatus !== "active"
        );
        setBookmarkedCourses(bookmarkedCourses);
      } else if (response.data.message) {
        setErrorMessage(response.data.message);
      } else {
        console.error(
          "Invalid response structure: coursesData is not an array"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    
    } finally {
      setLoading(false);
    }
  };

  return (
    <StudentProfileLayout>
      <Row className="mt-0 mt-md-4 mx-auto">
        <Col lg={12} md={12} sm={12}>
          <Row className="mb-6">
            <Col md={12}>
              <Card className="bg-transparent shadow-none">
                <Card.Header className="border-0 p-0 bg-transparent"></Card.Header>
                <Card.Body className="p-0">
                  {loading ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "50vh" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  ) : errorMessage ? (
                    <p>{errorMessage}</p>
                  ) : bookmarkedCourses.length > 0 ? (
                    <Row>
                      {bookmarkedCourses.map((item, index) => (
                        <Col
                          lg={4}
                          md={6}
                          sm={12}
                          key={item._id || index}
                          className="mb-5"
                        >
                          <CourseCard
                            key={index}
                            item={item}
                            free={true}
                            viewby="grid"
                            showprogressbar={false}
                            extraclass="mx-2"
                            link={`/student/single-course?id=${item._id}`}
                          />
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p>No bookmarked courses found.</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </StudentProfileLayout>
  );
};

export default Bookmarked;
