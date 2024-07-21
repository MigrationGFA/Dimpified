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
      title: "Professional Website Builder",
      description:
        "Create a polished and professional website effortlessly using our intuitive website builder. Present your services, expertise, and achievements in a visually appealing manner to attract potential clients.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Quick and Easy Setup",
      description:
        "Our no-code templates allow you to quickly set up and customize your programs without any technical expertise. Choose from a variety of professionally designed templates to create a polished and functional website in minutes.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Consistent Branding`,
      description:
        "Ensure consistent branding across all your initiatives with customizable templates. Maintain a professional and cohesive look that strengthens your brand identity and resonates with your audience.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mb-lg-6 mb-6">
            <h2 className="h1 fw-bold">
              Design and Deploy your Ecosystem Website with Effortless
              Customization
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
