import { Button, Card, Col, Row } from "react-bootstrap";

const HowToGetStarted = () => {
  return (
    <div className="px-8">
      {/* Header Section */}
      <Row className="mt-4 text-center">
        <Col>
          <h3 className="display-4">How to Get Started</h3>
          <p className="fw-bold">
            Follow these simple steps to join DIMP&apos;s Affiliate Program and start earning commissions.
          </p>
        </Col>
      </Row>

      {/* Steps Section */}
      <Row className="mt-4">
        <Col md={3}>
          <Card className="mb-4 text-center bg-light h-100">
            <Card.Body>
              <Card.Title className="display-6">1. Sign Up</Card.Title>
              <Card.Text>
                Joining is quick and easy! Simply fill out the affiliate registration form and choose your preferred affiliate tier.
              </Card.Text>
              <Button variant="primary" size="sm" href="/dimp/agent-page/auth?tab=register">SIGN UP</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 text-center bg-light h-100">
            <Card.Body>
              <Card.Title className="display-6">2. Get Your ID & Link</Card.Title>
              <Card.Text>
                Once approved, you&apos;ll receive a unique affiliate ID and a tracking link to monitor your referrals and commissions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 text-center bg-light h-100">
            <Card.Body>
              <Card.Title className="display-6">3. Start Promoting</Card.Title>
              <Card.Text>
                Share your unique affiliate link on social media, your website, or with service providers to start promoting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mb-4 text-center bg-light h-100">
            <Card.Body>
              <Card.Title className="display-6">4. Earn Commissions</Card.Title>
              <Card.Text>
                Earn commissions as your referrals sign up for subscriptions or make purchases through our online store.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      {/* <Row className="mt-5 text-center">
        <Col>
          <Button variant="success" size="lg">Get Started Today</Button>
        </Col>
      </Row> */}
    </div>
  );
};

export default HowToGetStarted;
