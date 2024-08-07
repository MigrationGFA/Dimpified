import { Button, Card, Col, Row } from "react-bootstrap";

const Events = () => {
  return (
    <div className="px-8">
      <Row className="mt-4">
        <Col>
          <h3 className="display-4">Events</h3>
          <p className="fw-bold">Participate in upcoming conferences and webinars.</p>
          <Row>
            <Col md={4}>
              <Card className="mb-4 bg-primary text-white">
                <Card.Body>
                  <Card.Title className="display-5">Dimp Connect 2023 - Powered by You</Card.Title>
                  <Button variant="secondary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 bg-info text-white">
                <Card.Body>
                  <Card.Title className="display-5">Dimp Connect 2022 - Powered by You</Card.Title>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 bg-secondary text-white">
                <Card.Body>
                  <Card.Title className="display-5">Dimp Connect 2021 - Powered by You</Card.Title>
                  <Button variant="info">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Events;
