// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import FeaturedImg1 from "./images/program-manager.png";

const HeroLeftImage = () => {
  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title: "Tailored Program Development",
      description:
        "Utilize our no-code templates to create and manage your programs effortlessly. Customize content and structure to meet the unique needs of your initiatives, ensuring each program is effective and impactful.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Easy Course Administration",
      description:
        "Our course builder feature allows you to develop educational programs and resources efficiently. Organize content, monitor progress, and provide support, all within an intuitive platform.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `User-Friendly Onboarding and Participation`,
      description:
        "Enhance participant experience with our seamless user onboarding tools. Automate registration, track involvement, and manage access, ensuring a welcoming and organized process for all users.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mb-lg-10 mb-6">
            <h2 className="h1 fw-bold">
              Drive your Organization's Mission and Success with Efficient
              Program Management
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
              <Link
                href="/creator/signup"
                className="btn btn-primary btn-lg mb-2 mb-md-0"
              >
                Get started for free
              </Link>{" "}
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
