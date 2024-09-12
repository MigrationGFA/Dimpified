import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// ToggleSwitch Component
const ToggleSwitch = ({ isChecked, onChange }) => (
  <label style={{
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '30px',
    marginLeft: '10px'
  }}>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      style={{ opacity: 0, width: 0, height: 0 }}
    />
    <span style={{
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: isChecked ? '#4CAF50' : '#ccc',
      transition: '.4s',
      borderRadius: '34px',
      fontSize: '12px',
      textAlign: 'center',
      lineHeight: '30px',
      color: 'black',
    }}>
      {isChecked ? 'ON' : 'OFF'}
    </span>
    <span style={{
      position: 'absolute',
      content: '""',
      height: '22px',
      width: '22px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
      transform: isChecked ? 'translateX(30px)' : 'translateX(0)'
    }} />
  </label>
);

// InvoiceSetup Component
const InvoiceSetup = () => (
  <Container className="my-4">
    <Row className="mb-4">
      <Col>
        <h3>
          Invoices setup <a href="#">Learn more</a>
        </h3>
      </Col>
      <Col className="text-end">
        <Button variant="primary" className="me-2">Save</Button>
        <Button variant="outline-secondary">Preview</Button>
      </Col>
    </Row>

    <Row className="border p-3 mb-3">
      <Col md={6}>
        <h5>Invoice prefix</h5>
        <p>All invoice numbers will start with this prefix.</p>
        <h5>Company VAT Number</h5>
        <p>Provide your company VAT number as will be presented in your invoices.</p>
      </Col>
      <Col md={6}>
        <Form.Control type="text" placeholder="Prefix" />
        <Form.Control type="text" placeholder="VAT number" />
      </Col>
    </Row>

    <Row className="border p-3 mb-3">
      <Col md={6}>
        <h5>Invoice logo</h5>
        <p>
          Provide an image to be placed on the upper-left corner of the invoices. The image (.png, .jpeg)
          must have 300px max-height & 200px max-width, and the size must not exceed 1MB.
        </p>
      </Col>
      <Col md={6}>
        <Form.Check type="radio" id="noLogo" label="Do not show a logo" name="logoOption" defaultChecked />
        <Form.Check type="radio" id="showLogo" label="Show logo on invoices" name="logoOption" />
        <Form.Check type="radio" id="uploadLogo" label="Upload logo" name="logoOption" />
      </Col>
      <Col md={6}>
        <h5>Thank you message in invoices</h5>
        <p>A message to thank your learners in your invoices.</p>
      </Col>
      <Col md={6}>
        <Form.Control type="text" placeholder="Thank you message" />
      </Col>
      <Col md={6}>
        <h5>Tax message in invoices</h5>
        <p>A message that explains your tax policy in your invoices.</p>
      </Col>
      <Col md={8}>
        <h5>Calculate VAT in invoices</h5>
        <p>
          Show VAT calculation in a separate line of your invoice. Total payable amount is always the price set in
          your course, bundle, or subscription.
        </p>
      </Col>
      <Col md={4} className="d-flex align-items-center">
        <Form.Check type="switch" id="calculateVAT" label="Enable" />
      </Col>
    </Row>

    {/* Invoice Texts Section */}
    <Row className="p-3">
      <Col md={4}>
        <h5>Invoice Texts</h5>
        <p>Update the texts on the invoices. Ensure that you check your invoices after making any changes.</p>
      </Col>
      <Col md={4}>
        <h5>Default text</h5>
        <p>Invoice number</p>
        <p>Invoice</p>
        <p>Date</p>
        <p>Client Details</p>
        <p>Description</p>
        <p>Unit price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Discount</p>
        <p>Payable amount</p>
        <p>Web</p>
        <p>Email</p>
        <p>All prices include</p>
        <p>VAT</p>
      </Col>
      <Col md={4}>
        <h5>Edit text</h5>
        <p>Invoice number</p>
        <p>Invoice</p>
        <p>Date</p>
        <p>Client Details</p>
        <p>Description</p>
        <p>Unit price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Discount</p>
        <p>Payable amount</p>
        <p>Web</p>
        <p>Email</p>
        <p>All prices include</p>
        <p>VAT</p>
      </Col>
    </Row>
  </Container>
);

const PaymentGateway = () => {
  const [sandboxActive, setSandboxActive] = useState(true);

  const toggleSandbox = () => {
    setSandboxActive(!sandboxActive);
  };

  return (
    <Container fluid className="mt-4">
      {/* Payment Gateway Section */}
      <Row>
        <Col>
          <h2 className="fw-bold">Payment Gateway</h2>
          <p>Connect one or more payment gateways to accept payments from product sales.</p>
          <Button variant="success" className="mb-3">Save</Button>
        </Col>
      </Row>

      {/* Tabs Section */}
      <Tabs defaultActiveKey="paymentGateway" id="payment-tabs" className="mb-4">
        <Tab eventKey="paymentGateway" title="Payment Gateway">
          {/* Payment Gateway Tab Content */}
          <Container className="mt-4">
            <Row>
              <Col>
                <div className="alert alert-info mt-3">
                  You're currently in trial mode and learners' payments are processed in sandbox mode.
                  Are you ready to set up a working payment gateway?
                  <Button variant="pink" className="ms-3">Upgrade now</Button>
                </div>
              </Col>
            </Row>

            {/* Payment Gateway Card */}
            <Card className="mb-4">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5>Payment Gateway</h5>
                    <p>Select one or more payment methods:</p>
                    <Form.Check
                      type="checkbox"
                      checked={sandboxActive}
                      readOnly
                      label="Sandbox"
                    />
                    <Form.Check
                      type="checkbox"
                      disabled
                      label={<span style={{ color: '#6772E5' }}>Stripe</span>}
                    />
                    <Form.Check
                      type="checkbox"
                      disabled
                      label={<span style={{ color: '#003087' }}>PayPal</span>}
                    />
                    <Form.Check
                      type="checkbox"
                      disabled
                      label={<span style={{ color: '#96bf48' }}>Shopify</span>}
                    />
                    <Form.Check
                      type="checkbox"
                      disabled
                      label={<span style={{ color: '#ef8533' }}>PagSeguro</span>}
                    />
                  </Col>
                  <Col md={6}>
                    <h5>ACTIVATE SANDBOX</h5>
                    <p>Activate Sandbox to test the payment flows of your school.</p>
                    <div className="d-flex align-items-center">
                      <label className="me-2">ON</label>
                      <ToggleSwitch isChecked={sandboxActive} onChange={toggleSandbox} />
                    </div>
                    <p className="text-muted mt-2">
                      When in sandbox mode, no credit cards will actually be processed. This mode is offered to test the payment flow & generate sample invoices.
                    </p>
                    <p>Test Credit Card: <strong>4242 4242 4242 4242</strong></p>
                    <p>Expiration date: <strong>Any date later than today’s date</strong></p>
                    <p>CVC: <strong>123</strong></p>
                    <div className="alert alert-warning mt-3">
                      Caution: Users can “buy” courses with test credit-card data and have access to them.
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Tab>
        <Tab eventKey="invoiceSetup" title="Invoice Setup">
          <InvoiceSetup />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PaymentGateway;
