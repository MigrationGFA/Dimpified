// import node module libraries
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import AuthImg from "./images/student-sign-up.jpg";

const HeroRightImage2 = () => {
  const title =
    " Personalize your ecosystem with your own user authentication page";

  const featurescol1 = [
    {
      id: 1,
      icon: mdiStar,
      title:
        "Make your ecosystem yours with a Branded Authentication Experience",
      description:
        "By personalizing your sign-in, sign-up, and password retrieval pages, you create a consistent and branded user journey. Track user progress, manage data securely, and provide a tailored experience that enhances overall engagement.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Seamless Integration and Enhanced Security",
      description:
        "Our platform supports a variety of authentication protocols, allowing you to implement your preferred methods securely. With Single Sign-On (SSO) capabilities, users can access your academy using their existing credentials, streamlining the authentication process.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title: `Effortless Password Retrieval`,
      description:
        "Ensure that your users have a hassle-free experience with a branded password retrieval page. Customize the instructions, layout, and design to make the process intuitive and straightforward.",
    },
  ];

  return (
    <Container>
      <Row>
        <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
          <div className="text-center mt-6 mt-lg-16 mb-6">
            <h2 className="h1 fw-bold alt-font">
              Personalize your ecosystem with your own user authentication page
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

export default HeroRightImage2;
