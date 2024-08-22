import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const Analytics = () => {
  const [googleAnalyticsActive, setGoogleAnalyticsActive] = useState(false);
  const [googleTagManagerActive, setGoogleTagManagerActive] = useState(false);

  return (
    <Container>
      <h3 className="my-3">Analytics</h3>
      <p>Integrate analytics tools to monitor and analyze website visitors' data and marketing campaigns.</p>
      <Button variant="success" className="mb-4">Save</Button>

      <Card className="mb-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={10}>
              <h5>Google Analytics 4</h5>
              <p>
                Add the Google Analytics tracking ID by following the instructions <a href="#">here</a>.
              </p>
              <img src="https://via.placeholder.com/100x50" alt="Google Analytics Logo" />
            </Col>
            <Col md={2}>
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={googleAnalyticsActive}
                onChange={(e) => setGoogleAnalyticsActive(e.target.checked)}
              />
            </Col>
          </Row>
          {googleAnalyticsActive && (
            <div className="mt-3">
              <Form.Group controlId="formAnalyticsID">
                <Form.Label>Google Analytics ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Google Analytics ID" />
              </Form.Group>
            </div>
          )}
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col md={10}>
              <h5>Google Tag Manager</h5>
              <p>
                You can follow the instructions <a href="#">here</a> to create a Web Container. All we need is the GTM Code.
              </p>
              <img src="https://via.placeholder.com/100x50" alt="Google Tag Manager Logo" />
            </Col>
            <Col md={2}>
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={googleTagManagerActive}
                onChange={(e) => setGoogleTagManagerActive(e.target.checked)}
              />
            </Col>
          </Row>
          {googleTagManagerActive && (
            <div className="mt-3">
              <Form.Group controlId="formGTMCode">
                <Form.Label>GTM Code</Form.Label>
                <Form.Control type="text" placeholder="Enter GTM Code" />
              </Form.Group>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Analytics;
