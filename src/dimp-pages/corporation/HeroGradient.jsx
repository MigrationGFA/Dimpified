// import node module libraries
import { Link } from "react-router-dom";
import { Col, Row, Container, Image, ListGroup } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import custom components
import LogosTopHeading2 from "./LogosTopHeading2";

// import MDI icons
import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";

// import media files
import GradientBG from "../../assets/images/background/gradient-bg.png";
import Graphics from "./images/hackathon.jpg";

// import data files
import LogoList2 from "./LogoList2";

const HeroGradient = () => {
  const isLaptop = useMediaQuery({ maxWidth: 1024 });

  return (
    <section
      className="py-lg-8 py-3 position-relative bg-cover"
      style={{ backgroundImage: `url(${GradientBG})` }}
    >
      {/* Image */}
      <Container>
        <Row className="align-items-center mb-6">
          <Col lg={6} xs={12} className="order-md-2">
            <div className="mb-2 mb-md-0 ">
              <Image
                src={Graphics}
                alt=""
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
            </div>
          </Col>
          <Col lg={6} xs={12} className="order-md-1">
            {/* Heading */}
            <h3 className="display-4 mb-5 fw-bold">
             Organize programs that foster innovation and establish
              
              <u className="text-primary"> strategic patnerships.</u>
            </h3>
            <p className="fs-4">
              Leverge DIMP to organize programs that fosters early access to
              cutting-edge innovations, attract top  talent and
              establish strategic partnerships with promising startups.
            </p>

            {/* list */}
            <ListGroup
              bsPrefix="list-unstyled"
              className="fs-3 text-dark mb-6 fw-medium"
            >
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-success mt-1 me-2"
                />{" "}
                Organize Upskilling, Accelerator and Incubator programs.
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-success mt-1 me-2"
                />{" "}
                Interact with promising startups through these programs.
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-success mt-1 me-2"
                />{" "}
                Have access top entrepreneurial talents.
              </ListGroup.Item>
            </ListGroup>

            {/* Buttons */}
            <div className="mb-8 mb-lg-0">
              <Link to="#" className="btn btn-lg btn-primary me-3 mb-2 mb-lg-0">
                Get Started Now
              </Link>
              <Link to="#" className="btn btn-lg btn-outline-primary">
                Scedule a Demo
              </Link>
            </div>
          </Col>
        </Row>

        {/* Trusted By logo */}
        <LogosTopHeading2
          title="TRUSTED BY TOP CORPORATE ORGANIZATIONS."
          logos={LogoList2}
          limit={5}
          inverse={false}
        />
      </Container>
    </section>
  );
};
export default HeroGradient;
