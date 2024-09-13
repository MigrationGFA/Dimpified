import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Candy from "../../assets/SocialImages/referral-candy-logo.svg";
import Refersion from "../../assets/SocialImages/refersion-logo-v3.svg";

const Affiliates = () => {
  const [referralCandyActive, setReferralCandyActive] = useState(false);
  const [refersionActive, setRefersionActive] = useState(false);

  const inputStyle = {
    border: 'none',
    borderBottom: '2px solid #ced4da',
    borderRadius: '0',
    padding: '10px 0',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  };

  const imageStyle = {
    width: '50%', // Further reduced width
    height: 'auto', // Maintain aspect ratio
    marginBottom: '20px', // Add some space below the image
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100vh', boxSizing: 'border-box' }}>
      <Container fluid style={{ padding: '0', margin: '0' }}>
        <h2>Affiliates</h2>
        <p>Integrate affiliate marketing via ReferralCandy or Refersion to boost product promotion.</p>
        <Button variant="success" className="mb-4">Save</Button>

        {/* ReferralCandy Section */}
        <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Row className="no-gutters">
            <Col md={6} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
              <Card.Body>
                <h4>ReferralCandy</h4>
                <p>
                  ReferralCandy is an ecommerce store plugin that helps you get more word of mouth sales.
                  Sign up for an account via LearnWorlds <a href="#">here</a> and get $50 worth of credits (1+1 months free).
                </p>
                {/* Image is always displayed */}
                <img src={Candy} alt="ReferralCandy" style={imageStyle} />
                {referralCandyActive && (
                  <>
                    <p><strong>App ID</strong></p>
                    <p>You can find the App ID in My Profile &gt; Plugin Tokens</p>
                    <p><strong>Secret Key</strong></p>
                    <p>You can find the Secret Key in My Profile &gt; Plugin Tokens</p>
                  </>
                )}
              </Card.Body>
            </Col>
            <Col md={6} className="p-4" style={{ backgroundColor: '#fff' }}>
              <Card.Body>
                <Form.Check
                  type="checkbox"
                  label="Activate"
                  checked={referralCandyActive}
                  onChange={(e) => setReferralCandyActive(e.target.checked)}
                  className="mb-3"
                />
                {referralCandyActive && (
                  <div>
                    <Form.Group controlId="formAppID" className="mt-4">
                      <Form.Control
                        type="text"
                        placeholder="App ID"
                        style={inputStyle}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'App ID'}
                      />
                    </Form.Group>
                    <Form.Group controlId="formSecretKey" className="mt-4">
                      <Form.Control
                        type="text"
                        placeholder="Secret Key"
                        style={inputStyle}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Secret Key'}
                      />
                    </Form.Group>
                  </div>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* Refersion Section */}
        <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Row className="no-gutters">
            <Col md={6} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
              <Card.Body>
                <h4>Refersion</h4>
                <p>
                  Refersion is a simple affiliate marketing software that allows you to easily manage your affiliates and automate their commissions.
                </p>
                {/* Image is always displayed */}
                <img src={Refersion} alt="Refersion" style={imageStyle} />
                {refersionActive && (
                  <>
                    <p><strong>App ID</strong></p>
                    <p>You can find the App ID in My Profile &gt; Plugin Tokens</p>
                    <p><strong>Secret Key</strong></p>
                    <p>You can find the Secret Key in My Profile &gt; Plugin Tokens</p>
                  </>
                )}
              </Card.Body>
            </Col>
            <Col md={6} className="p-4" style={{ backgroundColor: '#fff' }}>
              <Card.Body>
                <Form.Check
                  type="checkbox"
                  label="Activate"
                  checked={refersionActive}
                  onChange={(e) => setRefersionActive(e.target.checked)}
                  className="mb-3"
                />
                {refersionActive && (
                  <div>
                    <Form.Group controlId="formRefersionAppID" className="mt-4">
                      <Form.Control
                        type="text"
                        placeholder="App ID"
                        style={inputStyle}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'App ID'}
                      />
                    </Form.Group>
                    <Form.Group controlId="formRefersionSecretKey" className="mt-4">
                      <Form.Control
                        type="text"
                        placeholder="Secret Key"
                        style={inputStyle}
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Secret Key'}
                      />
                    </Form.Group>
                  </div>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Affiliates;
