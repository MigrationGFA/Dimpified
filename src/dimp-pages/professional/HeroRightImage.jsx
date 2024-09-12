// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import AuthImg from "./images/data.jpeg";

const HeroRightImage = () => {
  const title =
    " Personalize your ecosystem with your own user authentication page";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Manage bookings and appointments",
      description:
        "Efficiently manage appointments and service bookings with our booking and scheduling features. Showcase your consulting packages, professional services, and availability, allowing clients to easily book and schedule appointments according to their needs.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Simplified Payment Management",
      description:
        "Handle payments seamlessly with our integrated payment solutions designed for bookings and services. Ensure secure and hassle-free transactions, providing clients with peace of mind when scheduling and paying for your services.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Real-Time Sales Tracking`,
      description:
        "Monitor your sales and service bookings in real-time with our interactive dashboard. Gain insights into your business performance and adjust your strategies for optimal growth.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center ">
            <h2 className="h1 fw-bold">
              Monetize your expertise and services and expand your reach.
            </h2>
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

export default HeroRightImage;
