// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import Teachers from "./images/teachers.png";
import Mentors from "./images/mentors.jpg";
import Tutors from "./images/tutor.jpg";
import Coaches from "./images/coaches.jpg";
import Councellors from "./images/councellors.jpg";
import Trainers from "./images/trainers.jpeg";


const HeroRightImage = () => {
  return (
    <section className="px-lg-12 px-4 py-lg-7 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={6} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="display-3 fw-bold mb-3">
                <span className="text-dark  px-md-0">
                  Ecosystem Management Platform for
                </span>
                <span className="text-primary ms-2">
                  <Typewriter
                    words={[
                      "Tutors",
                      "Coaches",
                      "Trainers",
                      "Mentors",
                      "Consultants",
                      "Teachers",
                      "Lecturers",
                      "Advisors",
                      "Facilitators",
                      "Councellors",
                      "Guides",
                      "Educators",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="lead mb-4 pe-xl-12 ">
                Transform your educational services with DIMP, a comprehensive
                platform for educators. Manage your contents, onboard learners,
                collect information, sell services, track activities, build
                communities in one place and maxmize your impact.
              </p>
              {/* <ListGroup as="ul" bsPrefix='list-unstyled' className="mb-5">
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No credit card required</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Customer service 24/7</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No setup fee</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Cancel any time</span>
                </ListGroup.Item>
              </ListGroup> */}
              <div className="d-grid d-md-block">
                <Link
                  to="/creator/signup"
                  className="btn btn-primary btn-lg mb-2 mb-md-0"
                >
                  Get started for free
                </Link>{" "}
                <Link
                  href=""
                  className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
                >
                  Schedule a demo
                </Link>{" "}
              </div>
            </div>
          </Col>
          <Col lg={6} xs={12}>
						<Row>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-12rem"
									style={{ backgroundImage: `url(${Teachers})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Tutors})` }}
								></div>
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Councellors})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-18rem"
									style={{ backgroundImage: `url(${Mentors})` }}
								></div>
                
							</Col>
							<Col md={4} xs={4} className="px-1">
								<div
									className="bg-cover rounded-3 mb-2 h-13rem"
									style={{ backgroundImage: `url(${Trainers})` }}
								></div>
								<div
									className="bg-cover rounded-3 mb-2 h-13rem"
									style={{ backgroundImage: `url(${Coaches})` }}
								></div>
								
							</Col>
						</Row>
					</Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroRightImage;
