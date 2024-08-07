import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";

const PreviewForm1 = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col md={7} lg={7} className="d-none d-lg-flex p-0">
          <Card className="w-100">
            <Card.Body
              className="d-flex justify-content-center align-items-center p-0"
              style={{ height: "500px" }}
            >
              <img
                src="https://gfa-tech.com/gfa-os/public/assets/img/illustrations/auth-login-illustration-light.png"
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
          className="d-flex justify-content-center align-items-center p-sm-5 px-4"
        >
          {step === 1 && <FormStep1 nextStep={nextStep} />}
          {step === 2 && <FormStep2 nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <FormStep3 prevStep={prevStep} />}
        </Col>
      </Row>
    </Container>
  );
};

const FormStep1 = ({ nextStep }) => (
  <div className="">
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">Your Journey begins here! 👋</h3>
    <p className="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          className="px-5"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        Next
      </Button>
    </Form>
    <p className="text-center mt-4">
      <span>Already have an account?</span>
      <a href="#">
        <span>Sign in instead</span>
      </a>
    </p>
  </div>
);

const FormStep2 = ({ nextStep, prevStep }) => (
  <div>
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">You're gettimg there! 👋</h3>
    <p className="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter your zip code" />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control as="select">
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

const FormStep3 = ({ prevStep }) => (
  <div>
    <img
      src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
      height={80}
    />
    <h3 className="mb-1">FInal step! 👋</h3>
    <p className="mb-4">Kindly fill up the fields to join our ecosystem.</p>

    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Choose a username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your password" />
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

export default PreviewForm1;
