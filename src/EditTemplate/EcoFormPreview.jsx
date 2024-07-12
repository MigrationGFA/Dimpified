import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import sanitizeHtml from "sanitize-html";

const EcoFormPreview = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const content = useSelector((state) => state.form1);

  return (
    <Container fluid style={{ marginTop: "40px" }}>
      <Row className="">
        <Col md={7} lg={7} className="d-none d-lg-flex p-0">
          <Card className="w-100">
            <Card.Body
              className="d-flex justify-content-center align-items-center p-0"
              style={{ height: "500px" }}
            >
              <img
                src={content.sidebar.image}
                alt="Illustration"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70%",
                  objectFit: "contain",
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={5}
          lg={5}
          className="d-flex justify-content-center  align-items-center p-sm-5 px-4 "
        >
          {step === 1 && <FormStep1 nextStep={nextStep} content={content} />}
          {step === 2 && (
            <FormStep2
              nextStep={nextStep}
              prevStep={prevStep}
              content={content}
            />
          )}
          {step === 3 && <FormStep3 prevStep={prevStep} content={content} />}
        </Col>
      </Row>
    </Container>
  );
};

const FormStep1 = ({ nextStep, content }) => (
  <div
    className="px-4 w-100 py-5"
    style={{
      backgroundColor: content.Page1.styles.backgroundColor,
      color: content.Page1.styles.color,
      fontFamily: content.Page1.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} alt="logo" height={80} />
    <h3 className="mb-1 mt-4">{content.Page1.heading}</h3>
    <p className="mb-4">{content.Page1.sub}</p>

    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{content.Page1.topic1}</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your first name"
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{content.Page1.topic2}</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your last name"
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{content.Page1.topic3}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          className="px-5"
          disabled
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label>{content.Page1.topic4}</Form.Label>
        <Form.Control
          disabled
          type="text"
          placeholder="Enter your phone number"
        />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        Next
      </Button>
    </Form>
    <p className="text-center mt-4">{content.Page1.footer}</p>
  </div>
);

const FormStep2 = ({ nextStep, prevStep, content }) => (
  <div
    className="px-4 w-100 py-5"
    style={{
      backgroundColor: content.Page2.styles.backgroundColor,
      color: content.Page2.styles.color,
      fontFamily: content.Page2.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} alt="logo" height={80} />
    <h3 className="mb-1 mt-4">{content.Page2.heading}</h3>
    <p className="mb-4">{content.Page2.sub}</p>

    <Form>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>{content.Page2.topic1}</Form.Label>
        <Form.Control disabled type="text" placeholder="Enter your address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{content.Page2.topic2}</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Enter your zip code"
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{content.Page2.topic3}</Form.Label>
            <Form.Control disabled type="text" placeholder="Enter your city" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label>{content.Page2.topic4}</Form.Label>
        <Form.Control disabled as="select">
          <option value="">Select your country</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
        </Form.Control>
      </Form.Group>
      <Button className="mx-2 w-40" variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" className="w-50" onClick={nextStep}>
        Next
      </Button>
    </Form>
  </div>
);

const FormStep3 = ({ prevStep, content }) => (
  <div
    className="px-4 w-100 py-5"
    style={{
      backgroundColor: content.Page3.styles.backgroundColor,
      color: content.Page3.styles.color,
      fontFamily: content.Page3.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} alt="logo" height={80} />
    <h3 className="mb-1 mt-4">{content.Page3.heading}</h3>
    <p className="mb-4">{content.Page3.sub}</p>

    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{content.Page3.topic1}</Form.Label>
        <Form.Control disabled type="text" placeholder="Choose a username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{content.Page3.topic2}</Form.Label>
        <Form.Control
          disabled
          type="password"
          placeholder="Enter your password"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formConfirmPassword">
        <Form.Label>{content.Page3.topic3}</Form.Label>
        <Form.Control
          disabled
          type="password"
          placeholder="Confirm your password"
        />
      </Form.Group>
      <Button className="me-3 w-40" variant="secondary" onClick={prevStep}>
        Back
      </Button>
      <Button variant="primary" className="w-40">
        Submit
      </Button>
    </Form>
  </div>
);

export default EcoFormPreview;
