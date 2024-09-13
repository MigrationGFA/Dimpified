import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const CustomerService = () => {
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
          <h2 className="my-3">Customer Service</h2>
          <p>Integrate Customer Service tools to engage with live chat, ticketing system, and knowledge bases.</p>
          <Button variant="success" className="mb-4">Save</Button>
        </div>

        {/* Freshchat Section */}
        <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
            <Row className="no-gutters">
              {/* Left Side with Gray Background */}
              <Col md={6} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                <h4>Freshchat</h4>
                <p>
                  Follow the directions <a href="#">here</a> and copy/paste the widget code snippet.
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
                  <Form.Group controlId="formFreshchatWidgetCode" className="mt-4">
                    <Form.Control
                      type="text"
                      placeholder="Widget code"
                      style={inputStyle}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Widget code'}
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
            <Row className="no-gutters">
              {/* Left Side with Gray Background */}
              <Col md={6} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                <h4>Zendesk</h4>
                <p>
                  All you need is your Zendesk subdomain to enable the Zendesk widget. You can find instructions <a href="#">here</a> on how you can find your Zendesk subdomain.
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
                      placeholder="Zendesk subdomain"
                      style={inputStyle}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'Zendesk subdomain'}
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

export default CustomerService;
