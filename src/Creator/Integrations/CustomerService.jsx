import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const CustomerService = () => {
  const [googleAnalyticsActive, setGoogleAnalyticsActive] = useState(false);
  const [googleTagManagerActive, setGoogleTagManagerActive] = useState(false);

  return (
    <Container>
      <h2 className="my-3">Customer Service</h2>
      <p>Integrate Customer Service tools to engage with live chat, ticketing system, and knowledge bases.</p>
      <Button variant="success" className="mb-4">Save</Button>

      <Card className="mb-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={10}>
              <h5>Freshchat</h5>
              <p>
                Follow the directions <a href="#">here</a> and copy/paste the widget code snippet.
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
              <h5>Zendesk</h5>
              <p>
              All you need is your Zendesk subdomain to enable the zendesk widget. You can find instructions <a href="#">here</a> on how you can find your Zendesk subdomain. 
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

export default CustomerService;
