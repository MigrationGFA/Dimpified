// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import BrandedApp from "../images/branded-apps.png";

const HeroLeftImage = () => {
  const title =
    "White label your academy and get your branded iOS and Android apps";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Build a true white label academy",
      description:
        "Create your own branded online academy with our powerful Site Builder, complete with total design freedom and easy domain connection. ",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Train using your own apps",
      description:
        "Encourage customer engagement with self-assessments, tests, and forms. Choose from 18 question types and build custom questions. You can also create your own branded mobile app for iOS and Android to reach customers on the move. ",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Connect your academy with your marketing stack`,
      description:
        "Expand your customer training academy with native integrations with third-party apps. Single sign-on (SSO) and a robust API simplify training across your customer network. ",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mt-6 mb-lg-10 mb-6">
            <h2 className="h1 fw-bold">
              White label your academy and get your branded iOS and Android apps
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg={6} md={12} xs={12}>
          {/* image */}
          <div className="mb-4 mb-lg-0 ">
            <Image
              src={BrandedApp}
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
                className="btn btn-primary btn-lg mb-2 mb-md-0"
              >
                Get started for free
              </Link>{" "}
              <Link
                href="https://calendly.com/jesutofunmi-ne2s"
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
