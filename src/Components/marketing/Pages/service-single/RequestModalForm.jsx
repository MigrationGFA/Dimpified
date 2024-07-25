import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const RequestModalForm = ({
  header,
  shortDescription,
  service,
  price,
  name,
  incentives,
  additionalRevision,
}) => {
  const [gigQuantity, setGigQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  const navigate = useNavigate()

  useEffect(() => {
    setTotalPrice(price * gigQuantity);
  }, [gigQuantity, price]);

  const handleDecrement = () => {
    setGigQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleIncrement = () => {
    setGigQuantity((prev) => prev + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToPass = {
      header,
      shortDescription,
      service,
      totalPrice,
      incentives,
      additionalRevision,
      gigQuantity,
    };

    console.log("Navigating with data:", dataToPass);

    // Navigate to the ServiceBilling component and pass the data
    navigate("/service/billing", { state: { dataToPass } });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-4 border border-secondary rounded p-2">
        <div className="d-flex justify-content-between mb-2">
          <div className="display-6 fw-bold">{header || name}</div>
          <div className="display-6">{price}</div>
        </div>

        <p>
          {service.header} - {shortDescription}
        </p>
        <hr />
        <Form.Group as={Row} controlId="gigQuantity">
          <Form.Label column sm="6">
            Gig Quantity
          </Form.Label>
          <Col sm="6" className="d-flex align-items-center">
            <Button variant="outline-secondary" onClick={handleDecrement}>
              -
            </Button>
            <span className="mx-3">{gigQuantity}</span>
            <Button variant="outline-secondary" onClick={handleIncrement}>
              +
            </Button>
          </Col>
        </Form.Group>
      </Row>

      <Row className="mb-4">
        <h6>Upgrade your order with extras</h6>
        <Form.Group as={Row} controlId="extraFastDelivery">
          <Form.Label column sm="8">
            Extra-fast 1-day delivery
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select" defaultValue="No">
              <option>No</option>
              <option>Yes (+$20)</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="additionalRevision">
          <Form.Label column sm="8">
            Additional revision (+1 day)
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select" defaultValue="No">
              <option>No</option>
              <option>Yes ({service.additionalRevision})</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="copyrights">
          <Form.Label column sm="8">
            Copyrights (+1 day)
          </Form.Label>
          <Col sm="4">
            <Form.Control as="select" defaultValue="No">
              <option>No</option>
              <option>Yes (+$30)</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Row>
      {/* <Button type="submit">Submit</Button> */}
    </Form>
  );
};

export default RequestModalForm;
