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
      title: "Stunning project galleries",
      description:
        "Create and showcase professional project galleries with our website builder. Highlight your best work in house cleaning, handyman services, electrical work, painting, auto repair, or carpentry to impress potential clients.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Engaging visual presentations",
      description:
        "Use our no-code templates to design engaging visual presentations of your projects. Captivate your audience with high-quality images, videos, and interactive elements that tell the story behind your work.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Drive client engagement and sales`,
      description:
        "Turn your showcased projects into a revenue-generating tool. Attract potential clients by showcasing your expertise, convert interest into sales, and drive continuous business growth with an impressive online portfolio.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mt-3 mt-lg-6 mb-6">
            <h2 className="h1 fw-bold">
              Display your expertise, attract clients, and boost revenue
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
