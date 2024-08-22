import React, { useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const CRMTools = () => {
  const [hubspotActive, setHubspotActive] = useState(false);

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #000',
    borderRadius: '0',
    outline: 'none',
    width: '100%',
    paddingLeft: '0', // Start placeholder from the left edge
    textAlign: 'left', // Align text to the left
  };

  const formCheckStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = hubspotActive
    ? { backgroundColor: 'green', border: 'none', cursor: 'pointer' }
    : { backgroundColor: '#a9d18e', border: 'none', cursor: 'not-allowed' }; // Faint green when disabled

  return (
    <Container>
      {/* Header Section */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
        <h2 className="my-3">CRM tools</h2>
        <p>Integrate Customer Service tools to engage with live chat, ticketing system, and knowledge bases.</p>
        <Button variant="success" className="mb-4">Save</Button>
        {/* HubSpot Tab */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <img src="https://via.placeholder.com/20x20" alt="HubSpot Logo" style={{ marginRight: '10px' }} />
          <span>HubSpot</span>
        </div>
      </div>

      {/* HubSpot Section */}
      <Card className="mt-4">
        <Card.Body style={{ backgroundColor: '#f5f5f5' }}>
          <Row>
            {/* Left Side with Gray Background */}
            <Col md={6} className="p-4">
              <h5>HubSpot</h5>
              <p>HubSpot CRM platform with all the tools and integrations you need for marketing, sales, content management, and customer service.</p>
              <p style={{ marginTop: '20px' }}>
                <strong>Connect your Account</strong><br />
                Authorize LearnWorlds to connect to your HubSpot account.
              </p>
            </Col>

            {/* Right Side with White Background */}
            <Col md={6} className="p-4" style={{ backgroundColor: '#fff' }}>
              <div style={formCheckStyle}>
                <Form.Check
                  type="checkbox"
                  checked={hubspotActive}
                  onChange={(e) => setHubspotActive(e.target.checked)}
                />
                <span style={{ marginLeft: '8px' }}>Activate</span>
              </div>
              {/* Connect Button */}
              <Button
                style={{ ...buttonStyle, width: '100%', marginTop: '40px' }}
                disabled={!hubspotActive}
              >
                Connect to HubSpot
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CRMTools;
