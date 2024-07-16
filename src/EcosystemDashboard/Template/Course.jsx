import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import GetEnrolledCourseCard from "../../Components/marketing/common/cards/GetEnrolledCourseCard";
import { Fragment } from "react";

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

export default AllCourse;

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
