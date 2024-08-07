import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";

const RegisterEcosystem = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState(null);
  let { ecosystemDomain } = useParams();
  const navigate = useNavigate();
  const [loadingButton, setLoadingButton] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    username: "",
    password: "",
    confirmPassword: "",
    ecosystemDomain: ecosystemDomain,
  });

  const [loading, setLoading] = useState(true);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosytemForm-forms/${ecosystemDomain}`
        );
        setDetails(response.data.formDetails);
      } catch (error) {
        console.log("not working", error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [ecosystemDomain]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingButton(true);
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://dimpified-backend-development.azurewebsites.net/api/v1/ecosystem-user/register",
        formData
      );
      showToast(response.data.message);
      setLoadingButton(false);
      // Reset form data to initial values
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        username: "",
        password: "",
        confirmPassword: "",
        ecosystemDomain: ecosystemDomain,
      });
      // Navigate to verify email page
      navigate(`/ecosystem/verification`);
    } catch (error) {
      setLoadingButton(false);
      showToast(error.response.data.message);
      console.error("Registration failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!details) {
    return <div>No data found</div>;
  }

  const sanitizeContent = (html) => {
    return sanitizeHtml(html, {
      allowedTags: [],
      allowedAttributes: {},
    });
  };

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
                src={details.sidebar.image}
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
          {step === 1 && (
            <FormStep1
              nextStep={nextStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          )}
          {step === 2 && (
            <FormStep2
              nextStep={nextStep}
              prevStep={prevStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
            />
          )}
          {step === 3 && (
            <FormStep3
              prevStep={prevStep}
              content={details}
              sanitizeContent={sanitizeContent}
              handleInputChange={handleInputChange}
              formData={formData}
              handleSubmit={handleSubmit}
              loadingButton={loadingButton}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

const FormStep1 = ({
  nextStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
}) => (
  <div
    style={{
      width: "500px",
      height: "full",
      padding: "20px",
      backgroundColor: content.Page1.styles.backgroundColor,
      color: content.Page1.styles.color,
      fontFamily: content.Page1.styles.fontFamily,
    }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1 mt-5">{sanitizeContent(content.Page1.heading)}👋</h3>
    <p class="mb-4">{sanitizeContent(content.Page1.sub)}</p>

    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page1.topic1)}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${sanitizeContent(
                content.Page1.topic1
              )}`}
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page1.topic2)}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${sanitizeContent(
                content.Page1.topic2
              )}`}
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>{sanitizeContent(content.Page1.topic3)}</Form.Label>
        <Form.Control
          type="email"
          placeholder={`Enter your ${sanitizeContent(content.Page1.topic3)}`}
          className="px-5"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formPhone">
        <Form.Label>{sanitizeContent(content.Page1.topic4)}</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter your ${sanitizeContent(content.Page1.topic4)}`}
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" className="d-grid w-100" onClick={nextStep}>
        {sanitizeContent(content.Page1.buttonText1)}
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

const FormStep2 = ({
  nextStep,
  prevStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
}) => (
  <div
    style={{
      backgroundColor: content.Page2.styles.backgroundColor,
      color: content.Page2.styles.color,
      fontFamily: content.Page2.styles.fontFamily,
      width: "500px",
      height: "full",
      padding: "20px",
    }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1 mt-5">{sanitizeContent(content.Page2.heading)} 👋</h3>
    <p class="mb-4">{sanitizeContent(content.Page2.sub)} </p>

    <Form>
      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>{sanitizeContent(content.Page2.topic1)}</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter your ${sanitizeContent(content.Page2.topic1)}`}
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCity">
        <Row className="">
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page2.topic2)}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${sanitizeContent(
                content.Page2.topic2
              )}`}
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={6}>
            <Form.Label>{sanitizeContent(content.Page2.topic3)}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${sanitizeContent(
                content.Page2.topic3
              )}`}
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formCountry">
        <Form.Label>{sanitizeContent(content.Page2.topic4)}</Form.Label>
        <Form.Control
          // as="select"
          type="text"
          // className="select-country"
          placeholder={`Enter your ${sanitizeContent(content.Page2.topic4)}`}
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Button className="mx-2 w-40" variant="secondary" onClick={prevStep}>
        {sanitizeContent(content.Page2.buttonText1)}
      </Button>
      <Button variant="primary" className="w-50" onClick={nextStep}>
        {sanitizeContent(content.Page2.buttonText2)}
      </Button>
    </Form>
  </div>
);

const FormStep3 = ({
  prevStep,
  content,
  sanitizeContent,
  formData,
  handleInputChange,
  handleSubmit,
  loadingButton,
}) => (
  <div
    style={{
      backgroundColor: content.Page3.styles.backgroundColor,
      color: content.Page3.styles.color,
      fontFamily: content.Page3.styles.fontFamily,
      width: "500px",
      height: "full",
      padding: "20px",
    }}
  >
    <img src={content.logo.image} height={80} />
    <h3 className="mb-1 mt-5">{sanitizeContent(content.Page3.heading)} 👋</h3>
    <p className="mb-4">{sanitizeContent(content.Page3.sub)} </p>

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>{sanitizeContent(content.Page3.topic1)}</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter your ${sanitizeContent(content.Page3.topic1)}`}
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>{sanitizeContent(content.Page3.topic2)}</Form.Label>
        <Form.Control
          type="password"
          placeholder={`Enter your ${sanitizeContent(content.Page3.topic2)}`}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>{sanitizeContent(content.Page3.topic3)}</Form.Label>
        <Form.Control
          type="password"
          placeholder={`Enter your ${sanitizeContent(content.Page3.topic3)}`}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button className="me-3 w-40" variant="secondary" onClick={prevStep}>
        {sanitizeContent(content.Page3.buttonText1)}
      </Button>
      {loadingButton ? (
        <Button variant="primary" className="w-40">
          Processing
        </Button>
      ) : (
        <Button variant="primary" className="w-40" onClick={handleSubmit}>
          {sanitizeContent(content.Page3.buttonText2)}
        </Button>
      )}
    </Form>
  </div>
);

export default RegisterEcosystem;
