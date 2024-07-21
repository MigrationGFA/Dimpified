// import node module libraries
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Container, ListGroup } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";

// import media files
import FooterLogo from "./images/DIMPwhitelogo.png";
import AppStore from "./images/svg/appstore.svg";
import PlayStore from "./images/svg/playstore.svg";

const FooterWithLinks = () => {
  return (
    <Fragment>
      <footer className="pt-lg-10 pt-5 px-4 footer">
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>
              {/* about company  */}
              <div className="mb-4">
                <Image
                  src={FooterLogo}
                  height={30}
                  alt=""
                  className="logo-inverse"
                />
                <div className="mt-4">
                  <p>
                    DIMP is an Ecosystem management platform that allows you to
                    create, manage and monetize your ecosystem.
                  </p>
                  {/* social media */}
                  <div className="fs-4 mt-4">
                    <Link
                      to="https://www.linkedin.com/company/gfa-technologies/mycompany/"
                      className="mdi mdi-facebook text-light me-2"
                    >
                      <Icon path={mdiLinkedin} size={1} />
                    </Link>
                    <Link
                      to="https://www.facebook.com/getfundedafricaoffical/"
                      className="mdi mdi-facebook text-light me-2"
                    >
                      <Icon path={mdiFacebook} size={1} />
                    </Link>
                    <Link
                      to="https://x.com/gfunded_africa"
                      className="mdi mdi-twitter text-light me-2"
                    >
                      <Icon path={mdiTwitter} size={1} />
                    </Link>
                    <Link
                      to="https://www.instagram.com/gfatechnologies/"
                      className="mdi mdi-instagram text-light "
                    >
                      <Icon path={mdiInstagram} size={1} />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 2, offset: 1 }} md={12} sm={6}>
              <div className="mb-4">
                {/* list */}
                <h6 className="mb-1 text-muted">COMPANY</h6>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link
                      to="https://gfa-tech.com/company/about/index.html"
                      className="nav-link"
                    >
                      About GFA-Tech
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="/pricing" className="nav-link">
                      DIMP Pricing
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link
                      to="https://media.getfundedafrica.com/"
                      className="nav-link"
                    >
                      Our Blog
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link
                      to="https://gfa-tech.com/company/team/index.html"
                      className="nav-link"
                    >
                      Our Team
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link
                      to="https://gfa-tech.com/company/career/index.html"
                      className="nav-link"
                    >
                      Careers
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={2} md={12} sm={6}>
              <div className="mb-4">
                {/* list  */}
                <h6 className="mb-1 text-muted">SUPPORT</h6>
                <ListGroup
                  as="ul"
                  bsPrefix="list-unstyled"
                  className="nav nav-footer flex-column nav-x-0"
                >
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link">
                      DIMP Ecosystem School
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link">
                      Developer Program
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link">
                      Affliate Program
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link">
                      Builder Program
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" ">
                    <Link to="#" className="nav-link">
                      Help Center
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              {/* contact info */}
              <div className="mb-4">
                <h6 className="mb-1 text-muted">GET IN TOUCH</h6>
                <p>2nd Floor, Wing-C, <br/>Ogun Tech Hub, Abeokuta</p>
                <p className="mb-1">
                  Email:{" "}
                  <Link to="mailto:info@dimpified.com" className="text-light">
                    info@dimpified.com
                  </Link>
                </p>
                <p>
                  Phone:{" "}
                  <span className="text-light fw-semi-bold">
                    +234 808 009 4426
                  </span>
                </p>
                {/* <div className="d-flex">
									<Link to="#">
										<img src={AppStore} alt="" className="img-fluid" />
									</Link>
									<Link to="#" className="ms-2">
										<img src={PlayStore} alt="" className="img-fluid" />
									</Link>
								</div> */}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center g-0 border-top py-2 mt-6">
            {/* Desc  */}
            <Col lg={4} md={5} sm={12}>
              <span>© 2024 GFA-Tech, Inc. All Rights Reserved</span>
            </Col>
            {/*  Links  */}
            <Col lg={8} md={7} sm={6} className="d-md-flex justify-content-end">
              <nav className="nav nav-footer">
                <Link
                  className="nav-link ps-0"
                  to="https://gfa-tech/company/privacy-policy"
                >
                  Privacy Policy
                </Link>

                <Link className="nav-link" to="https://gfa-tech.com/company/privacy-policy/">
                  Terms of Use
                </Link>
              </nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};

export default FooterWithLinks;
