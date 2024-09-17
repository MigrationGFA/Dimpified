import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Nav, Modal } from "react-bootstrap"; // Import Modal
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import Logo from "../../../src/assets/DIMP logo colored.png";

const AgentPageAuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "signIn";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToSignInClick = () => {
    setShowForgotPassword(false);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Confirm Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmEmail: "",
    },
    validationSchema: activeTab === "register" ? validationSchema : null,
    onSubmit: async (values) => {
      console.log("Form submitted:", values);

      if (activeTab === "register") {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/affiliate/signup`,
            {
              userName: values.username,
              password: values.password,
              email: values.email,
            }
          );

          if (response.status === 201) {
            showToast(response.message);
            setShowSuccessModal(true);
          }
        } catch (error) {
          console.error("Error during registration:", error.response);
          showToast("Registration failed. Please try again.");
        }
      }
    },
  });

  return (
    <div className="overflow-hidden bg-white">
      <NavbarComponent />
      <Container className="mt-5 py-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Nav variant="tabs" activeKey={activeTab}>
              <Nav.Item>
                <Nav.Link
                  eventKey="signIn"
                  onClick={() => {
                    setActiveTab("signIn");
                    setShowForgotPassword(false); 
                  }}
                >
                  Sign In
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="register"
                  onClick={() => {
                    setActiveTab("register");
                    setShowForgotPassword(false);
                  }}
                >
                  Register
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {!showForgotPassword ? (
              <Form onSubmit={formik.handleSubmit} className="mt-4">
                <h2>
                  {activeTab === "signIn"
                    ? "Sign in to your Dimp Affiliate Program account"
                    : "Create a Username and Password for your Dimp Affiliate account"}
                </h2>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder="Enter your username"
                    isInvalid={
                      formik.touched.username && !!formik.errors.username
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                    isInvalid={
                      formik.touched.password && !!formik.errors.password
                    }
                    required
                  />
                  <Form.Check
                    type="checkbox"
                    label="Show"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {activeTab === "signIn" && (
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Forgot password link */}
                    <Link
                      to="#"
                      onClick={handleForgotPasswordClick}
                      className="text-primary"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                )}

                {activeTab === "register" && (
                  <>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter your email"
                        isInvalid={
                          formik.touched.email && !!formik.errors.email
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formConfirmEmail" className="mb-3">
                      <Form.Label>Re-enter Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="confirmEmail"
                        value={formik.values.confirmEmail}
                        onChange={formik.handleChange}
                        placeholder="Re-enter your email"
                        isInvalid={
                          formik.touched.confirmEmail &&
                          !!formik.errors.confirmEmail
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.confirmEmail}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Check
                      type="checkbox"
                      label="I have read and accepted Dimp terms and conditions"
                      required
                    />
                  </>
                )}

                <Button variant="primary" type="submit" className="mt-3">
                  {activeTab === "signIn" ? "Sign In" : "Join"}
                </Button>
              </Form>
            ) : (
              <Form className="mt-4">
                <h2>Password Reset</h2>
                <p>Please enter your email to request a password reset.</p>
                <Form.Group controlId="formResetEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 me-2">
                  Request Password Reset
                </Button>

                <Button
                  variant="link"
                  className="mt-3 text-primary"
                  onClick={handleBackToSignInClick}
                >
                  Back to Sign In
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Registration Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "80px", marginBottom: "15px" }}
          />
          <p>Check your email to verify your account.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AgentPageAuthForm;
