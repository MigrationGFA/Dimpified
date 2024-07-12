// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import AuthImg from "./images/data.jpeg";

const HeroRightImage2 = () => {
  const title =
    " Personalize your ecosystem with your own user authentication page ";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Scalable solutions for growth",
      description:
        "As your business grows, our platform scales with you. Add new features, expand your service offerings, and manage increasing client volumes without compromising on performance or user experience.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Data-driven decisions",
      description:
        "Use our analytics tools to make informed decisions about your business. Identify trends, understand client behavior, and optimize your strategies to drive growth and success.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Marketing and promotion`,
      description:
        "Promote your services effectively using our platform’s marketing tools. Reach a wider audience, showcase your portfolio, and attract new clients with targeted marketing campaigns.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mt-3 mt-lg-6 mb-6">
            <h2 className="h1 fw-bold">Expand your creative business whilst growing your reach and impact</h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
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
