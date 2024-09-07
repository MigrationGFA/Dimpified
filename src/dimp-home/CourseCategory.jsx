// import node module libraries
import { Fragment } from "react";
import { Col, Row, Nav, Tab, Container } from "react-bootstrap";

// import sub components

import CourseCard from "./CourseCard";

// import data files
import { AllCoursesData } from "./AllCoursesData";

const CourseCategory = () => {
  return (
    <Fragment>
      {/* Page header */}

      <section className="py-0 primary-font">
        <Container>
          <Row className="mb-6">
            <Col md={12} sm={12}>
              <Tab.Container defaultActiveKey="allusecases">
                <Nav className="nav-lb-tab">
                  <Nav.Item className="ms-0">
                    <Nav.Link
                      eventKey="allusecases"
                      className="mb-sm-3 mb-md-0"
                    >
                      All Use Cases
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="enterprise" className="mb-sm-3 mb-md-0">
                      Enterprise
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="consumer" className="mb-sm-3 mb-md-0">
                      Individual
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane
                    eventKey="enterprise"
                    className="pb-4 p-4 ps-0 pe-0"
                  >
                    {/* most popular started */}
                    <Row>
                      {AllCoursesData.filter(function (datasource) {
                        return datasource.category === "enterprise";
                      })
                        .slice(0, 4)
                        .map((item, index) => (
                          <Col lg={3} md={6} sm={6} key={index}>
                            <CourseCard item={item} />
                          </Col>
                        ))}
                    </Row>
                    {/* end of most popular */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="consumer" className="pb-4 p-4 ps-0 pe-0">
                    {/* most popular started */}
                    <Row>
                      {AllCoursesData.filter(function (datasource) {
                        return datasource.category === "consumer";
                      })
                        .slice(0, 7)
                        .map((item, index) => (
                          <Col lg={3} md={6} sm={6} key={index}>
                            <CourseCard item={item} />
                          </Col>
                        ))}
                    </Row>
                    {/* end of most popular */}
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="allusecases"
                    className="pb-4 p-4 ps-0 pe-0"
                  >
                    {/* trending courses started */}
                    <Row>
                      {AllCoursesData.filter(function (datasource) {
                        return (
                          datasource.id === 1 ||
                          datasource.id === 2 ||
                          datasource.id === 3 ||
                          datasource.id === 4 ||
                          datasource.id === 5 ||
                          datasource.id === 6 ||
                          datasource.id === 7 ||
                          datasource.id === 8 ||
                          datasource.id === 9 ||
                          datasource.id === 10 ||
                          datasource.id === 11
                        );
                      }).map((item, index) => (
                        <Col lg={3} md={6} sm={6} key={index}>
                          <CourseCard item={item} />
                        </Col>
                      ))}
                    </Row>
                    {/* end of trending courses */}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>

          {/* end of all javaScript courses */}
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseCategory;
