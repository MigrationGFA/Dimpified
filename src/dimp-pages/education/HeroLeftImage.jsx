// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import FeaturedImg1 from "../images/learner.jpg";

const HeroLeftImage = () => {
  const title =
    "Afraid that you might bore your students? Challenge accepted…and problem solved!";
  const subtitle = "Use Cases of DIMP";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Offer rich and interactive learning experiences",
      description:
        "Create your courses in no time. Build a powerful ecosystem of learning activities ranging from videos to ebooks, assessments, 1:1 and group sessions.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Drive Learner's engagement",
      description:
        "Trigger Learner'sinvolvement with self assessments, exams, and forms. Take advantage of different question types and a powerful question builder.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Develop training programs for all segments`,
      description:
        "Design personalized Learner's education programs based on course category or complexity level, dividing learners into Groups. Track everything in one dashboard.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Issue online certificates`,
      description:
        "Reward your learners, partners, and resellers with branded online certificates. Auto-generate certificates on course completion and enable certification sharing to promote your brand.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mb-lg-6 mb-6">
            <h2 className="h1 fw-bold">
              Afraid that you might bore your students? <br />
              DIMP is your problem solver!
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg={6} md={12} xs={12}>
          {/* image */}
          <div className="mb-4 mb-lg-0 ">
            <Image
              src={FeaturedImg1}
              alt="..."
              className="img-fluid w-100 rounded-4"
            />
          </div>
        </Col>
        <Col lg={6} md={12} xs={12} className="mt-4 mt-lg-0">
          {/* content */}
          <div className="ps-lg-7">
            <Row className="mt-5">
              {/* list */}
              <Col>
                <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                  {featurescol1.map((item, index) => {
                    return (
                      <ListGroup.Item
                        key={index}
                        bsPrefix="mb-2"
                        className="d-flex"
                      >
                        <div></div>
                        <div className="ms-3">
                          <h3
                            className="mb-2"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h3>
                          <p className="mb-0 fs-4">{item.description}</p>
                        </div>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
            </Row>
            <div className="d-grid d-md-block">
              <Link
                to="/creator/signup"
                className="btn medium btn-big fs-16 btn-hover-animation-switch rounded-3 btn-box-shadow  fw-400 xs-mt-10px xs-mb-10px me-2"
              >
                Get Started Now
              </Link>
              <Link
                to="https://calendly.com/jesutofunmi-ne2s"
                className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
              >
                Schedule a demo
              </Link>{" "}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroLeftImage;
