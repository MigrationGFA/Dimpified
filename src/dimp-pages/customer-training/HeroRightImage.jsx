// import node module libraries
import { Col, Row, Container, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import bootstrap icons
import { CheckCircleFill } from "react-bootstrap-icons";

// import media files
import EducationalSkils from "../images/education/skils.jpg";
import SVGgraphics1 from "../images/svg/graphics-1.svg";
import SVGgraphics2 from "../images/svg/graphics-2.svg";

const HeroRightImage = () => {
  return (
    <section className="py-lg-16 py-6">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xxl={5} xl={6} lg={6} xs={12}>
            <div>
              <h1 className="display-3 fw-bold mb-3">
                Drive business results through powerful
                <u className="text-warning">
                  <span className="text-primary"> customer education</span>
                </u>
              </h1>
              <p className="lead mb-4">
                Use customer education as a powerful strategy to improve your
                KPIs across your funnel. An educated customer is a better
                customer, and that's why your elearning platform matters. DIMP
                gives you all the tools you need to onboard, engage, and retain
                customers at scale.
              </p>
              {/* <ListGroup as="ul" bsPrefix='list-unstyled' className="mb-5">
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No credit card required</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Customer service 24/7</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">No setup fee</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix="mb-2" >
                  <CheckCircleFill size={12} fill="var(--geeks-success)" />
                  <span className="ms-2">Cancel any time</span>
                </ListGroup.Item>
              </ListGroup> */}
              <div className="d-grid d-md-block">
                <Link href="" className="btn btn-primary btn-lg mb-2 mb-md-0">
                  Get started for free
                </Link>{" "}
                <Link
                  href=""
                  className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
                >
                  Watch Demo
                </Link>{" "}
              </div>
            </div>
          </Col>
          <Col
            xxl={{ offset: 1, span: 5 }}
            xl={6}
            lg={6}
            xs={12}
            className="d-lg-flex justify-content-end"
          >
            <div className="mt-12 mt-lg-0 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle  d-none d-md-block">
                <Image src={SVGgraphics2} alt="graphics-2" />
              </div>
              <Image
                src={EducationalSkils}
                alt="online course"
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
              <div className="position-absolute top-100 start-100 translate-middle  d-none d-md-block">
                <Image src={SVGgraphics1} alt="graphics-1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroRightImage;
