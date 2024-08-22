import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Affiliates = () => {
  const [referralCandyActive, setReferralCandyActive] = useState(false);
  const [refersionActive, setRefersionActive] = useState(false);

  return (
    <Container className="mt-5">
      <h3>Affiliates</h3>
      <p>Integrate affiliate marketing via ReferralCandy or Refersion to boost product promotion.</p>
      <Button variant="success" className="mb-4">Save</Button>

      {/* ReferralCandy Section */}
      <Card className="mb-3 mt-4">
        <Row className="no-gutters">
          <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Body>
              <h5>ReferralCandy</h5>
              <p>
                ReferralCandy is an ecommerce store plugin that helps you get more word of mouth sales.
                Sign up for an account via LearnWorlds <a href="#">here</a> and get $50 worth of credits (1+1 months free).
              </p>
              <img src="https://via.placeholder.com/150" alt="ReferralCandy" className="img-fluid" />
            </Card.Body>
          </Col>
          <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
            <Card.Body>
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={referralCandyActive}
                onChange={(e) => setReferralCandyActive(e.target.checked)}
                className="text-end"
              />
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
                    <Form.Control type="text" placeholder="Secret Key" />
                    <Form.Text className="text-muted">
                      You can find the Secret Key in My Profile &gt; Plugin Tokens
                    </Form.Text>
                  </Form.Group>
                </div>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Refersion Section */}
      <Card>
        <Row className="no-gutters">
          <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
            <Card.Body>
              <h5>Refersion</h5>
              <p>
                Refersion is a simple affiliate marketing software that allows you to easily manage your affiliates and automate their commissions.
              </p>
              <img src="https://via.placeholder.com/150" alt="Refersion" className="img-fluid" />
            </Card.Body>
          </Col>
          <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
            <Card.Body>
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={refersionActive}
                onChange={(e) => setRefersionActive(e.target.checked)}
                className="text-end"
              />
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
                    <Form.Control type="text" placeholder="Secret Key" />
                    <Form.Text className="text-muted">
                      You can find the Secret Key in My Profile &gt; Plugin Tokens
                    </Form.Text>
                  </Form.Group>
                </div>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Affiliates;
