import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const Affiliates = () => {
  const [referralCandyActive, setReferralCandyActive] = useState(false);
  const [refersionActive, setRefersionActive] = useState(false);

  return (
    <Container>
      <h3 className="my-3">Affiliates</h3>
      <p>Integrate affiliate marketing via ReferralCandy or Refersion to boost product promotion.</p>
      <Button variant="success" className="mb-4">Save</Button>

      {/* ReferralCandy Section */}
      <Card className="mb-3">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={10}>
              <h5>ReferralCandy</h5>
              <p>
                ReferralCandy is an ecommerce store plugin that helps you get more word of mouth sales.
                Sign up for an account via LearnWorlds <a href="#">here</a> and get $50 worth of credits (1+1 months free).
              </p>
              <img src="https://via.placeholder.com/100x50" alt="ReferralCandy Logo" />
            </Col>
            <Col md={2} className="text-right">
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={referralCandyActive}
                onChange={(e) => setReferralCandyActive(e.target.checked)}
              />
            </Col>
          </Row>
          {referralCandyActive && (
            <div className="mt-3">
              <Form.Group controlId="formAppID">
                <Form.Label>App ID</Form.Label>
                <Form.Control type="text" placeholder="App ID" />
                <Form.Text className="text-muted">
                  You can find the App ID in My Profile &gt; Plugin Tokens
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formSecretKey" className="mt-3">
                <Form.Label>Secret Key</Form.Label>
                <Form.Control type="text" placeholder="Secret key" />
                <Form.Text className="text-muted">
                  You can find the Secret Key in My Profile &gt; Plugin Tokens
                </Form.Text>
              </Form.Group>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Refersion Section */}
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col md={10}>
              <h5>Refersion</h5>
              <p>
                Refersion is a simple affiliate marketing software that allows you to easily manage your affiliates and automate their commissions.
              </p>
              <img src="https://via.placeholder.com/100x50" alt="Refersion Logo" />
            </Col>
            <Col md={2} className="text-right">
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={refersionActive}
                onChange={(e) => setRefersionActive(e.target.checked)}
              />
            </Col>
          </Row>
          {refersionActive && (
            <div className="mt-3">
              <Form.Group controlId="formRefersionAppID">
                <Form.Label>App ID</Form.Label>
                <Form.Control type="text" placeholder="App ID" />
                <Form.Text className="text-muted">
                  You can find the App ID in My Profile &gt; Plugin Tokens
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formRefersionSecretKey" className="mt-3">
                <Form.Label>Secret Key</Form.Label>
                <Form.Control type="text" placeholder="Secret key" />
                <Form.Text className="text-muted">
                  You can find the Secret Key in My Profile &gt; Plugin Tokens
                </Form.Text>
              </Form.Group>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Affiliates;
