// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import BrandedApp from "./images/coaches.jpg";

const HeroLeftImage = () => {
  const title =
    "White label your academy and get your branded iOS and Android apps";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Seamless Onboarding",
      description:
        "Welcome new clients with a streamlined onboarding process. Ensure they have a smooth start and feel supported from the moment they engage with your services.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Interactive Dashboards",
      description:
        "Use our interactive dashboards to keep clients informed and engaged. Share progress, insights, and updates, fostering transparency and trust.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Personalized Client Portals`,
      description:
        "Create dedicated client portals where clients can access their information, track progress, and communicate with you directly, enhancing their overall experience.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center ">
            <h2 className="h1 fw-bold">
              Build and Nurture Strong Client Connections
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center pt-4">
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
