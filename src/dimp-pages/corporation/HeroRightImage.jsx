// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import AuthImg from "./images/program-manager.png";

const HeroRightImage2 = () => {
  const title =
    " Personalize your ecosystem with your own user authentication page ";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Unified Platform for Efficiency",
      description:
        "Experience the convenience of managing all aspects of your programs from one platform. Our ecosystem management tools integrate website building, user onboarding, and payment handling, simplifying your workflow.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Enhanced User Engagement",
      description:
        "Boost engagement with interactive dashboards that provide real-time updates and insights. Keep participants informed, involved, and motivated throughout their journey.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Scalable Solutions for Growth`,
      description:
        "As your programs grow, our platform scales with you. Add new features, expand your offerings, and manage increasing user volumes without compromising on performance or user experience.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mt-3 mt-lg-3 mb-3">
            <h2 className="h1 fw-bold">
              Seamlessly Integrate Tools and Take Control over your Program's
              Management
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg={6} md={12} xs={12} className="mt-4 mt-lg-0">
          {/* content */}
          <div className="ps-lg-">
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
                href=""
                className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
              >
                Schedule a demo
              </Link>{" "}
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} xs={12}>
          {/* image */}
          <div className="mb-4 mb-lg-0 ">
            <Image
              src={AuthImg}
              alt="..."
              className="img-fluid w-100 rounded-4"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroRightImage2;
