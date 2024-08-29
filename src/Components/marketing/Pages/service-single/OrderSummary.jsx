import React from 'react';
import { ListGroup, Card, Button, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { PiNumberCircleThreeFill, PiNumberCircleTwoFill } from 'react-icons/pi';

const OrderSummary = () => {
  const orderNumber = "#B6CT3";
  const items = [
    {
      name: 'Half Sleeve 100% Cotton Shirts For Women',
      price: 800,
      image: 'path/to/shirt-image.jpg',
    },
    {
      name: 'Stylish womens scarf combo',
      price: 800,
      image: 'path/to/scarf-image.jpg',
    },
  ];
  const totalPrice = 1600;
  const currency = '₹';
  const scheduledDate = "2024-08-01";
  const scheduledTime = "10:00 AM";

  const billingInfo = {
    name: 'John Doe',
    address: '1234 Main St',
    city: 'Anytown',
    state: 'Anystate',
    zip: '12345',
    country: 'USA',
  };

  return (
    <div className="text-center p-4">
        <Row className="mb-4">
        <Col className="d-flex justify-content-center align-center">
          <FaCheckCircle className="me-1 display-6" />
          <span className="fw-bolder me-3">Order Details</span>
          <MdOutlineNavigateNext className="me-2 display-6" />
          <FaCheckCircle className="me-1 display-6" />
          <span className="fw-bolder me-3">Confirm & Pay</span>
          <MdOutlineNavigateNext className="me-2 display-6" />
          <FaCheckCircle className="me-1 display-6" />
          <span className="fw-bolder me-3">Order Summary</span>
        </Col>
      </Row>
      <div className="mb-3" style={{ fontSize: '50px', color: 'green' }}>✔️</div>
      <h4>Thank you for your purchase</h4>
      <p>We&apos;ve received your order and it will ship in 5-7 business days.</p>
      <p>Your order number is <strong>{orderNumber}</strong></p>
      <Card className="order-summary-card my-4 mx-auto" style={{ maxWidth: '400px' }}>
        <Card.Header as="h5" className="text-start">Order Summary</Card.Header>
        <ListGroup variant="flush">
          {items.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
              <div className="item-details flex-grow-1 text-start">
                <div>{item.name}</div>
              </div>
              <div className="item-price text-end">
                {currency}{item.price}
              </div>
            </ListGroup.Item>
          ))}
          <ListGroup.Item className="d-flex justify-content-between">
            <strong>Total</strong>
            <strong>{currency}{totalPrice}</strong>
          </ListGroup.Item>
          {scheduledDate && (
            <ListGroup.Item className="d-flex justify-content-between">
              <div>Scheduled Date</div>
              <div>{scheduledDate}</div>
            </ListGroup.Item>
          )}
          {scheduledTime && (
            <ListGroup.Item className="d-flex justify-content-between">
              <div>Scheduled Time</div>
              <div>{scheduledTime}</div>
            </ListGroup.Item>
          )}
          <ListGroup.Item className="text-start">
            <div><strong>Billing Information</strong></div>
            <div>{billingInfo.name}</div>
            <div>{billingInfo.address}</div>
            <div>{billingInfo.city}, {billingInfo.state} {billingInfo.zip}</div>
            <div>{billingInfo.country}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button variant="outline-dark" onClick={() => window.location.href = '/'}>Back to Home</Button>
    </div>
  );
};

export default OrderSummary;
