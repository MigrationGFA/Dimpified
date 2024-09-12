import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const DomainEmailSetup = () => {
  // Define the input style
  const inputStyle = {
    border: 'none',
    borderBottom: '2px solid #ccc',
    borderRadius: '0',
    boxShadow: 'none',
    outline: 'none',
  };

  return (
    <Container className="mt-4">
      <h4>Site domain & email <a href="#">Learn more</a></h4>
      <p>Set up the custom site and email domain, and completely remove the LearnWorlds brand from your site.</p>

      <div className="alert alert-warning mt-3">
        You discovered a higher plan feature! Unlock the potential of custom domains. <a href="#" className="btn btn-pink">Upgrade now</a>
      </div>

      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f5' }}>
              <div>
                <h6>Current Domain</h6>
                <p>The site URL / domain which currently directs your users to the home page of your school.</p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: '#ffffff' }}>
              <i className="bi bi-globe2 me-2"></i> paul123.learnworlds.com
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f5' }}>
              <div>
                <h6>Change Domain</h6>
                <p>You can replace your LearnWorlds URL with your custom domain by adding a CNAME DNS record in your hosting provider account.</p>
              
                <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '5px' }}>
                  <h6>Instructions</h6>
                  <ol>
                    <li>Create a CNAME DNS record that points your chosen URL (e.g., www.yourschool.com or academy.yourschool.com) to your LearnWorlds school (e.g., paul123.learnworlds.com).</li>
                    <li>Set up the CNAME record in your hosting provider account.</li>
                    <li>Once the CNAME is set up correctly, click the "Change Domain".</li>
                  </ol>
                  <p>You can find more information on how to create a CNAME DNS record in <a href="#">this article</a>.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center" style={{ backgroundColor: '#ffffff' }}>
              <div className="w-100">
                <div className="d-flex align-items-center">
                  <p className="mb-1 me-3"><strong>DESIRABLE DOMAIN</strong></p>
                  <Form.Group controlId="formDomainName" className="me-2" style={{ flex: '1 1 auto' }}>
                    <Form.Control
                      type="text"
                      placeholder="subdomain.domain.tld"
                      style={inputStyle}
                      onFocus={(e) => e.target.placeholder = ''}
                      onBlur={(e) => e.target.placeholder = 'subdomain.domain.tld'}
                    />
                  </Form.Group>
                  <Button variant="success">Change Domain</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DomainEmailSetup;
