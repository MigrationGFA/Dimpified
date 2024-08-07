import { Button, Card, Col, Row } from "react-bootstrap";

const Updates = () => {
  return (
    <div className="px-8 overflow-hidden">
      <Row className="mt-8 py-6 bg-white overflow-hidden">
        <Col>
          <h3 className="display-4">Updates</h3>
          <p className="fw-bold">Keep up-to-date with our latest updates and enhancements.</p>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="display-6">
                    Dimp Developers Program Q1 2024 Newsletter
                  </Card.Title>
                  <Card.Text>
                    Program news, API updates, and discussions from the Dimp
                    developer community.
                  </Card.Text>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="display-6">
                    Dimp Developers Program Q4 2023 Newsletter
                  </Card.Title>
                  <Card.Text>
                    Program news, API updates, and discussions from the Dimp
                    developer community.
                  </Card.Text>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="display-6">
                    Enhance buyer engagement: Add videos to Dimp listings
                  </Card.Title>
                  <Card.Text>
                    Enhance your Dimp listings by adding engaging videos.
                  </Card.Text>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Updates;
