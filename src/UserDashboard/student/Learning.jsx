import React, { useState, useEffect } from "react";
import { Col, Row, Card, Spinner } from "react-bootstrap";
import LearningCourseCard from "../../Components/marketing/Pages/courses/LearningCourseCard";
import StudentProfileLayout from './StudentProfileLayout';
import axios from "axios";
import { useGlobalContext } from "../../context/AuthContext";

const Learning = () => {
  // const { userId } = useGlobalContext();
  const [learningCourses, setLearningCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, [userId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/student-get-courses/${userId}`
      );

      if (Array.isArray(response.data.coursesData)) {
        // Filter out courses that are not actively being learned
        const learningCourses = response.data.coursesData.filter(
          (course) => course.subscriptionStatus === "active"
        );
        setLearningCourses(learningCourses);
      } else {
        console.error(
          "Invalid response structure: coursesData is not an array"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here (e.g., display an error message to the user)
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
                      {/* Display loading spinner */}
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  ) : (
                    // Learning courses
                    <Row>
                      {learningCourses.map((item, index) => (
                        <Col lg={4} md={6} sm={12} key={item._id} className="mb-5">
                          <LearningCourseCard 
                          key={index}
                          item={item}
                          free={true}
                          viewby="grid"
                          showprogressbar={false}
                          extraclass="mx-2"
                          link={`/:ecosystemDomain/User/single/learning/single-course?id=${item._id}`}
                          />
                        </Col>
                      ))}
                    </Row>
                  )}
                  {/* End of Learning courses */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </StudentProfileLayout>
  );
};

export default Learning;
