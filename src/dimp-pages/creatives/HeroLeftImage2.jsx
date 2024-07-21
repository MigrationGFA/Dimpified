// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import FeaturedImg1 from "./images/volunteer-sign-up.jpg";

const HeroLeftImage = () => {
  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Unified management platform",
      description:
        "Experience the convenience of managing all aspects of your creative business from one platform. Our ecosystem management tools integrate website building, project tracking, client communications, and more, streamlining your operations.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Enhanced user engagement",
      description:
        "Keep your clients and collaborators engaged with interactive dashboards and real-time updates. Provide transparency, build trust, and foster a sense of community within your creative ecosystem.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Professional and cohesive branding`,
      description:
        "Ensure a consistent and professional brand presence across all your online platforms. Strengthen your brand identity and make a lasting impression on clients and prospects.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mb-lg-10 mb-6">
            <h2 className="h1 fw-bold">
              Manage all aspects of your creative business from one platform
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
                href="/creator/signup"
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
