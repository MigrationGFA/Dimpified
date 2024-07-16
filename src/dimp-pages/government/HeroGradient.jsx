// import node module libraries
import { Link } from "react-router-dom";
import { Col, Row, Container, Image, ListGroup } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Typewriter } from "react-simple-typewriter";

// import custom components
import LogosTopHeading2 from "./LogosTopHeading2";

// import MDI icons
import Icon from "@mdi/react";
import { mdiCheckCircle } from "@mdi/js";

// import media files
import GradientBG from "../../assets/images/background/gradient-bg.png";
import Graphics from "./images/sanwo-olu.jpeg";

// import data files
import LogoList1 from "./LogoList2";

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
            <h3 className="display-3 mb-5 fw-bold">
              Create a higher level of trust among the citizens of your
              
              <u className="text-primary"> administration</u>
            </h3>
            <p className="display-7">
              Leverge DIMP for Upskilling programs, e-governance programs,
              initiatives and tax management to upskill, empower and inform
              citizens of your adminitration.
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
                Onboard citizens on various type of programs
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-success mt-1 me-2"
                />{" "}
                Easily communicate to users about initiatives and programmes
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="mb-1" className="d-flex">
                <Icon
                  path={mdiCheckCircle}
                  size={0.9}
                  className="text-success mt-1 me-2"
                />{" "}
                Have access to real-time data of users in your ecosystem
              </ListGroup.Item>
            </ListGroup>

            {/* Buttons */}
            <div className="mb-8 mb-lg-0">
              <Link to="#" className="btn btn-lg btn-primary me-3 mb-2 mb-lg-0">
                Get Started Now
              </Link>
              <Link to="#" className="btn btn-lg btn-outline-primary">
                View Demo
              </Link>
            </div>
          </Col>
        </Row>

        {/* Trusted By logo */}
        <LogosTopHeading2
          title="TRUSTED BY SEVERAL GOVERNMENT BODIES, AGENCIES AND MINISTRIES."
          logos={LogoList1}
          limit={6}
          inverse={false}
          
        />
      </Container>
    </section>
  );
};
export default HeroGradient;
