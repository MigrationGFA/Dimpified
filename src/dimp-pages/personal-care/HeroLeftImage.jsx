// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import FeaturedImg1 from "./images/existing-customers.jpg";

const HeroLeftImage = () => {
  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Showcase your services",
      description:
        "List all your personal care services and plans clearly and attractively. Highlight your expertise in house cleaning, handyman services, electrical work, painting, auto repair, or carpentry to engage potential clients.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Secure and easy payment management",
      description:
        "Simplify transactions with our integrated payment management system. Offer clients secure and convenient payment options, ensuring a smooth and trustworthy experience.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Client testimonials and reviews`,
      description:
        "Build trust and credibility by showcasing client testimonials and reviews. Positive feedback from satisfied clients can significantly influence potential customers' decisions.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mb-lg-10 mb-6">
            <h2 className="h1 fw-bold">
              Manage existing customers and attract new ones.
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col lg={6} md={12} xs={12}>
          {/* image */}
          <div className="mb-4 mb-lg-0 bg-gray-200 rounded rounded-4 ">
            <Image
              src={FeaturedImg1}
              alt="..."
              className="img-fluid w-100 rounded rounded-4 "
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
              <Link href="/creator/signup" className="btn btn-primary btn-lg mb-2 mb-md-0">
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
