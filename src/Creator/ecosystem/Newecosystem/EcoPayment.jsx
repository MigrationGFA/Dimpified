import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import EcoHeader from './ecoHeader';

const EcoPayment = () => {
  return (
    <div>
      <EcoHeader />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Choose Your Plan</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Present Tariff</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Basic features</li>
                    <li>Up to 10 users</li>
                    <li>Email support</li>
                  </ul>
                  <h3>$10/month</h3>
                </Card.Text>
                <Button variant="primary" className='w-100'>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Plus</Card.Title>
                <Card.Text>
                  <ul>
                    <li>All basic features</li>
                    <li>Up to 50 users</li>
                    <li>Priority email support</li>
                    <li>Access to premium features</li>
                  </ul>
                  <h3>$30/month</h3>
                </Card.Text>
                <Button variant="primary" className='w-100'>Select</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Pro</Card.Title>
                <Card.Text>
                  <ul>
                    <li>All Plus features</li>
                    <li>Unlimited users</li>
                    <li>24/7 phone support</li>
                    <li>Dedicated account manager</li>
                  </ul>
                  <h3>$50/month</h3>
                </Card.Text>
                <Button variant="primary" className='w-100'>Select</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcoPayment;
