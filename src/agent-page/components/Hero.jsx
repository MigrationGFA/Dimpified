import { Button, Col, Row } from "react-bootstrap";
import hero from "../images/hero5.png";

const Hero = () => {
  return (
    <div className="px-3 px-md-6 mt-5">
      <Row className="position-relative overflow-hidden text-center">
        <Col xs={12} className="p-3 py-md-8">
          <div className="h2 h-md-1 fw-bold">
            Join the DIMP Affiliate Program!
          </div>
          <div className="px-2 px-md-5 mt-3">
            <p className="lead">
              At DIMP, we believe in building a community of entrepreneurs and
              creators who can grow and succeed together. Our affiliate program
              offers a fantastic opportunity for you to earn while helping
              others access powerful tools and services on our platform. Whether
              you&apos;re interested in promoting our subscription plans or
              referring customers to our online store, there&apos;s a way for
              you to earn with DIMP.
            </p>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <Button variant="primary" className="me-2" href="/dimp/agent-page/auth?tab=register">
              SIGN UP
            </Button>
            <Button
              className="bg-white text-primary border-primary hover:bg-primary hover:text-white"
              href="/dimp/agent-page/auth?tab=signIn"
            >
              SIGN IN
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
