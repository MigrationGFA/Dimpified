import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const AgentPageAuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "signIn";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const toggleConfirmEmailVisibility = () => {
  //   setShowConfirmEmail(!showConfirmEmail);
  // };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Confirm Email is required"),
    // phoneNumber: Yup.string().required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmEmail: "",
      // phoneNumber: "",
    },
    validationSchema: activeTab === "register" ? validationSchema : null,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
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
                  onClick={() => setActiveTab("signIn")}
                >
                  Sign In
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="register"
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </Nav.Link>
              </Nav.Item>
            </Nav>

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
                      isInvalid={formik.touched.email && !!formik.errors.email}
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

                  {/* <Form.Group controlId="formPhoneNumber" className="mb-3">
                    <Form.Label>
                      Mobile Phone Number (For Verification)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      placeholder="Enter Phone Number"
                      isInvalid={
                        formik.touched.phoneNumber &&
                        !!formik.errors.phoneNumber
                      }
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group> */}

                  <Form.Check
                    type="checkbox"
                    label="I have read and accept the Dimp terms and condition"
                    required
                  />
                </>
              )}

              <Button variant="primary" type="submit" className="mt-3">
                {activeTab === "signIn" ? "Sign In" : "Join"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AgentPageAuthForm;
