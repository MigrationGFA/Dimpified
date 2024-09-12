import { Button, Col, Row } from "react-bootstrap";
import award from "../images/awards.png";

const ReadyToJoin = () => {
  return (
    <div>
      {/* Image Section */}
      <div className="px-8 py-10 overflow-hidden">
        <Row className="position-relative overflow-hidden">
          <Col className="p-0">
            <img
              src={award}
              alt="Join Affiliate Program"
              className="img-fluid w-100"
              style={{ position: "relative" }}
            />
            <div
              className="position-absolute text-white p-3"
              style={{
                top: "0",
                left: "0",
              }}
            >
              <h1 className="text-primary display-4 display-md-1 display-sm-5 mb-3">
                Ready to Join? <br className="d-none d-md-block" />
                DIMP&apos;s Affiliate Program
              </h1>
              <p className="lead lead-md lead-sm">
                Take the next step in your entrepreneurial journey and start earning with DIMP.
              </p>
              <Button variant="primary" size="lg" href="/dimp/agent-page/auth?tab=register">Sign Up Now</Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Text Section */}
      <div className="px-8 py-5">
        <Row>
          <Col>
            <h2 className="text-primary mb-4">Why Join Our Affiliate Program?</h2>
            <p className="lead">
              DIMP offers you an incredible opportunity to earn commissions by promoting our products and services. Whether you’re a blogger, influencer, or just passionate about sharing great tools, our affiliate program is perfect for you.
            </p>
            <p>
              <strong>Key Benefits:</strong>
            </p>
            <ul>
              <li>Earn up to 15% commissions on subscriptions.</li>
              <li>Get 5% on every sale you refer to our participating online stores.</li>
              <li>Free access to marketing materials and support.</li>
              <li>Real-time tracking of your commissions and performance.</li>
            </ul>
            <p className="lead">
              Don&apos;t miss out on this opportunity to monetize your audience and grow with DIMP.
            </p>
            <Button variant="primary" size="lg" href="/dimp/agent-page/auth?tab=register">Get Started Now</Button>
          </Col>
        </Row>
      </div>

      {/* Contact Section */}
      <div className="bg-light py-4 px-8 mb-4">
        <Row>
          <Col>
            <h4 className="text-primary">Have Questions?</h4>
            <p>
              For any questions or support, feel free to contact our affiliate support team at{" "}
              <a href="mailto:affiliates@dimpified.com">affiliates@dimpified.com</a>.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ReadyToJoin;
