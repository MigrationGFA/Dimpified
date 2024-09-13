import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const Growth = () => {
  const [freshchatActive, setFreshchatActive] = useState(false);
  const [zendeskActive, setZendeskActive] = useState(false);

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',
    borderRadius: '0',
    outline: 'none',
    width: '100%',
    paddingLeft: '0', 
    textAlign: 'left', 
  };

  const formCheckStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100vh', boxSizing: 'border-box' }}>
      <Container fluid style={{ padding: '0', margin: '0' }}>
        {/* Header Section */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <h2 className="my-3">Growth</h2>
          <p>Integrate with a variety of growth tools to accelerate your business expansion</p>
          <Button variant="success" className="mb-4">Save</Button>
        </div>

        {/* Freshchat Section */}
        <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Row>
              {/* Left Side with Gray Background */}
              <Col md={6} className="p-4">
                <h4>Google Verification</h4>
                <p>
                  Verify your site on google by adding a verification code. We support the HTML Tag verification method found under the "Alternate method" tab. Paste the whole tag, and we will figure out the verification code automatically. Learn more <a href="#">here</a>.
                </p>
                <img src="https://via.placeholder.com/100x50" alt="Freshchat Logo" />
              </Col>

              {/* Right Side with White Background */}
              <Col md={6} className="p-4" style={{ backgroundColor: '#fff' }}>
                <div style={formCheckStyle}>
                  <Form.Check
                    type="checkbox"
                    checked={freshchatActive}
                    onChange={(e) => setFreshchatActive(e.target.checked)}
                  />
                  <span style={{ marginLeft: '8px' }}>Activate</span>
                </div>
                {freshchatActive && (
                  <Form.Group controlId="formFreshchatHTML tag" className="mt-4">
                    <Form.Control
                      type="text"
                      placeholder="HTML tag"
                      style={inputStyle}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'HTML tag'}
                    />
                  </Form.Group>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Zendesk Section */}
        <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Card.Body>
            <Row>
              {/* Left Side with Gray Background */}
              <Col md={6} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                <h4>Intercom</h4>
                <p>
                  Your App ID is available on the top right of the page in the API keys section of your app settings.
                  You can find more instructions <a href="#">here</a>.
                </p>
                <img src="https://via.placeholder.com/100x50" alt="Zendesk Logo" />
              </Col>

              {/* Right Side with White Background */}
              <Col md={6} className="p-4" style={{ backgroundColor: '#fff' }}>
                <div style={formCheckStyle}>
                  <Form.Check
                    type="checkbox"
                    checked={zendeskActive}
                    onChange={(e) => setZendeskActive(e.target.checked)}
                  />
                  <span style={{ marginLeft: '8px' }}>Activate</span>
                </div>
                {zendeskActive && (
                  <Form.Group controlId="formZendeskWidgetCode" className="mt-4">
                    <Form.Control
                      type="text"
                      placeholder="App ID"
                      style={inputStyle}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'App ID'}
                    />
                  </Form.Group>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Growth;
