import React, { useState } from "react";
import { Container, Row, Col, Button, Nav, Tab, Image, Form } from "react-bootstrap";

// Import images
import Hero from "../../assets/SocialImages/question-banks-hero.jpg";
import Img1 from "../../assets/SocialImages/questionbanks-img1b.jpg";
import Img2 from "../../assets/SocialImages/question-banks-img2.png";
import Cert from "../../assets/SocialImages/certifications-hero.png";
import Cert1 from "../../assets/SocialImages/certifications-img1b.jpg";
import Hero2 from "../../assets/SocialImages/course-forms-hero.jpg";
import FormImg1 from "../../assets/SocialImages/course-forms-img1.jpg";
import elegantLight from "../../assets/SocialImages/video-skin1-white.jpg";
import elegantDark from "../../assets/SocialImages/video-skin2-black.jpg";
import bubblesLight from "../../assets/SocialImages/video-skin2-white.jpg";
import bubblesDark from "../../assets/SocialImages/video-skin2-black.jpg";
import accentLight from "../../assets/SocialImages/video-skin3-white.jpg";
import accentDark from "../../assets/SocialImages/video-skin3-black.jpg";

// Sample paths for player skins
const playerSkins = [
  { id: 1, name: "Elegant Light", imgPath: elegantLight },
  { id: 2, name: "Elegant Dark", imgPath: elegantDark },
  { id: 3, name: "Bubbles Light", imgPath: bubblesLight },
  { id: 4, name: "Bubbles Dark", imgPath: bubblesDark },
  { id: 5, name: "Accent Light", imgPath: accentLight },
  { id: 6, name: "Accent Dark", imgPath: accentDark },
];

const TabsComponent = () => {
  const [activeKey, setActiveKey] = useState("certificate");

  return (
    <Container className="my-5" style={{ backgroundColor: "white" }}>
      <Row className="mb-4">
        <Col>
          <h2>LMS</h2>
          <p>
            Build a collection of things to efficiently repurpose and create
            assessments.
          </p>
          <Button variant="success">Save</Button>
        </Col>
      </Row>

      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Row>
          <Col>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="certificate">Certificate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="question-banks">Question banks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="course-form">Course form</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="player-appearance">
                  Player-appearance
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="video-player">
                  Video Player
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Tab.Content>
            {/* Certificate Tab */}
          <Tab.Pane eventKey="certificate">
            <Row className="align-items-center mt-6">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center align-items-center mt-4"
              >
                <h2>
                  <strong>Manage your learners’ certificates with ease.</strong>
                </h2>
                <p>
                  Effortlessly create, customize, and distribute certificates to
                  recognize your learners' achievements. Conveniently view and
                  manage all issued certificates and their settings in one
                  central location.
                </p>
              </Col>

              <Col md={6}>
                <img
                  src={Cert}
                  alt="Creating questions"
                  style={{ width: "80%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="my-5 justify-content-center mt-11">
              <Col md="auto" className="text-center mt-3">
                <h3><strong>Explore the Certification section capabilities</strong></h3>
                <img
                  src={Cert1}
                  alt="3 ways to populate your question banks"
                  style={{ width: "70%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="text-center mt-4 justify-content-center">
              <Col md={4}>
                <h4>
                  <strong>Filter and view</strong>
                </h4>
                <p>
                  You can filter and view issued certificates by username,
                  course, date, number of attempts, and final score.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>Export</strong>
                </h4>
                <p>
                  You can export and download data in CSV or XLS formats,
                  allowing for easy data management and analysis.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>Edit or Delete</strong>
                </h4>
                <p>
                  You have the option to edit the first and last name displayed
                  or delete a certificate. You can also notify your learners.
                </p>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Question banks Tab */}
          <Tab.Pane eventKey="question-banks">
            <Row className="align-items-center mt-6">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center align-items-center mt-4"
              >
                <h2><strong>
                  Save time by creating questions once and reusing across
                  multiple courses
                </strong></h2>
                <p>
                  Question banks are pools of pre-created questions that can be
                  used across multiple quizzes, assessments, or exams. Use
                  question banks to ensure consistency and avoid redundant
                  question creation.
                </p>
                <Button variant="success">
                  Create your first question bank
                </Button>
              </Col>
              <Col md={6}>
                <img
                  src={Hero}
                  alt="Creating questions"
                  style={{ width: "80%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="my-5 justify-content-center mt-14">
              <Col md="auto" className="text-center ">
                <h3><strong>3 ways to populate your question banks</strong></h3>
                <img
                  src={Img1}
                  alt="3 ways to populate your question banks"
                  style={{ width: "70%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="text-center mt-4 justify-content-center">
              <Col md={4}>
                <h4>
                  <strong>1. Create questions from scratch</strong>
                </h4>
                <p>
                  Directly add original questions to the bank, tailoring them to
                  specific course needs or topics.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>2. Import from XLS or CSV files</strong>
                </h4>
                <p>
                  Easily upload questions in bulk from spreadsheets,
                  streamlining the process of populating your question bank.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>3. Import from existing courses</strong>
                </h4>
                <p>
                  Utilize questions from your existing courses, transferring
                  them to the bank for broader use.
                </p>
              </Col>
            </Row>

            <Row className="mt-8 justify-content-center ">
              <Col md="auto" className="text-center mt-4">
                <h3><strong>Explore the Variety of Question Types Available</strong></h3>
                <img
                  src={Img2}
                  alt="Explore the Variety of Question Types Available"
                  style={{ width: "75%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Tab.Pane>

          {/* Course form Tab */}
          <Tab.Pane eventKey="course-form">
            <Row className="align-items-center mt-6">
              <Col
                md={6}
                className="d-flex flex-column justify-content-center align-items-center mt-6"
              >
                <h2>
                  <strong>
                    Gather feedback and information from your learners with
                    Course Forms
                  </strong>
                </h2>
                <p>
                  Course forms are tools made to collect learners’ details,
                  questions, feedback, and other information to enhance your
                  courses’ engagement levels.
                </p>
                <p>
                  <i>
                    Forms will be displayed here once you create them in your
                    courses.
                  </i>
                </p>
              </Col>
              <Col md={6}>
                <img
                  src={Hero2}
                  alt="Creating questions"
                  style={{ width: "80%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="my-5 justify-content-center mt-15">
              <Col md="auto" className="text-center">
                <h3><strong>Discover what you can do with Dimpified Course Forms</strong></h3>
                <img
                  src={FormImg1}
                  alt="3 ways to populate your question banks"
                  style={{ width: "70%" }}
                  className="img-fluid"
                />
              </Col>
            </Row>

            <Row className="text-center mt-4 justify-content-center">
              <Col md={4}>
                <h4>
                  <strong>Onboard Learners</strong>
                </h4>
                <p>
                  Use course forms to collect vital information during the
                  onboarding process, such as personal details or learning goals.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>Get Feedback</strong>
                </h4>
                <p>
                  Gather feedback from learners about course content, structure,
                  or delivery to make improvements.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>Assess Understanding</strong>
                </h4>
                <p>
                  Implement forms to assess learners' understanding of course
                  materials and provide additional support if needed.
                </p>
              </Col>
            </Row>
            <Row className="my-5 justify-content-center mt-15">
              <Col md="auto" className="text-center">
                <h3><strong>Create your first course form in 3 steps</strong></h3>
              </Col>
            </Row>

            <Row className="text-center mt-4 justify-content-center mt-4">
              <Col md={4}>
                <h4>
                  <strong>1. Create a learning activity</strong>
                </h4>
                <p>
                To create a new Course Form you need to create a new learning activity in one of your courses.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>2. Create or customize</strong>
                </h4>
                <p>
                You can either start from scratch or use one of the 20 templates in our library and customize the look and feel.
                </p>
              </Col>
              <Col md={4}>
                <h4>
                  <strong>3. Review the results</strong>
                </h4>
                <p>
                Review the form responses and leverage gathered data to make well-informed decisions or follow up with your learners
                </p>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Player-appearance Tab */}
          <Tab.Pane eventKey="player-appearance">
            <Row className="align-items-center">
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h3>
                  <strong>Choose a skin for your school's video player</strong>
                </h3>
                <p>
                  Choose a skin that matches your brand and fits better with the
                  content and style of your video. Don't worry about the skin's
                  colors: we take those from your school's color scheme to make
                  sure that your school offers a unified experience.
                </p>
              </Col>
              <Col md={6}>
                <Form>
                  {playerSkins.map((skin) => (
                    <Row key={skin.id} className="mb-4">
                      <Col className="text-center">
                        <Form.Check
                          type="radio"
                          id={`player-skin-${skin.id}`}
                          name="playerSkin"
                          label={
                            <div>
                              <div className="text-center mb-2">
                                {skin.name}
                              </div>
                              <div className="radio-label-img-container">
                                <Image
                                  src={skin.imgPath}
                                  alt={skin.name}
                                  fluid
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    backgroundColor: "#000",
                                    padding: "10px",
                                  }}
                                />
                                <Form.Check.Input
                                  type="radio"
                                  name="playerSkin"
                                  id={`radio-${skin.id}`}
                                  className="position-absolute top-0 end-0 m-2"
                                  style={{ zIndex: 1 }}
                                />
                              </div>
                            </div>
                          }
                          className="d-flex align-items-center justify-content-between"
                        />
                      </Col>
                    </Row>
                  ))}
                </Form>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default TabsComponent;
