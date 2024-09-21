import React, { useState } from "react";
import { Form, Button, Col, Row, Card, Image, Navbar } from "react-bootstrap";
import { FaUser, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { showToast } from "../../Components/Showtoast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/DIMP logo colored.png";
import { useSelector, useDispatch } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

// Define the Yup schema
const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email cannot be empty")
    .email("Invalid email address"),
  password: yup.string().required("Password is required"),
  organisation: yup.string().when("userRole", {
    is: "enterprise",
    then: yup.string().required("Organization name is required"),
  }),
  name: yup.string().when("userRole", {
    is: "consumer",
    then: yup.string().required("Name is required"),
  }),
});

const AffiliateOnboarding = () => {
  const [userRole, setUserRole] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const user = useSelector((state) => state.authentication.user);
  const affiliateId = user?.data?.AffiliateId;
  const authFetch = AxiosInterceptor();

  // Set up useForm with Yup validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // Password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // Handle role selection
  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  // Handle registration submission
  const onSubmit = async (data) => {
    setLoading(true);
    const payload = {
      organizationName:
        userRole === "enterprise" ? data.organisation : data.name,
      email: data.email,
      password: data.password,
      role: userRole === "enterprise" ? "enterprise" : "consumer",
      affiliateId,
    };

    try {
      await authFetch.post(
        `${import.meta.env.VITE_API_URL}/affiliate-onboard-creator`,
        payload
      );
      setIsRegistered(true);
      showToast("Successfully Registered! Please verify your email.");
      sessionStorage.setItem("email", data.email);
    } catch (error) {
      showToast(error.response?.data?.msg || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend email verification
  const handleResendEmail = async () => {
    setLoading(true);
    const email = sessionStorage.getItem("email");

    try {
      await authFetch.post(
        `${import.meta.env.VITE_API_URL}/creator/resend-email`,
        { email }
      );
      showToast("Verification link has been resent!");
    } catch (error) {
      showToast(error.response?.data?.msg || "Failed to resend email.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoBackToForm = () => {
    setIsRegistered(false);
  };

  // Form to show when not registered yet
  const registrationForm = (
    <>
      <h3 className="text-center mb-4">Affiliate Onboarding</h3>

      {/* User Role Selection */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6 col-lg-4 mb-2">
          <Button
            variant={userRole === "consumer" ? "primary" : "outline-primary"}
            className="w-100"
            onClick={() => handleRoleSelection("consumer")}
          >
            <FaUser className="me-2" />
            Individual
          </Button>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-2">
          <Button
            variant={userRole === "enterprise" ? "primary" : "outline-primary"}
            className="w-100"
            onClick={() => handleRoleSelection("enterprise")}
          >
            <FaBuilding className="me-2" />
            Enterprise
          </Button>
        </div>
      </div>

      {userRole && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Conditional input based on user role */}
          {userRole === "enterprise" && (
            <Form.Group controlId="organisationName" className="mb-3">
              <Form.Label>Organisation Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organisation name"
                {...register("organisation")}
              />
              {errors.organisation && (
                <p className="text-danger">{errors.organisation.message}</p>
              )}
            </Form.Group>
          )}

          {userRole === "consumer" && (
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Individual Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </Form.Group>
          )}

          {/* Email Input */}
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </Form.Group>

          {/* Password Input */}
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                {...register("password")}
              />
              <div
                className="position-absolute end-0 top-50 translate-middle-y"
                style={{ right: "10px", cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </Form.Group>

          {/* Submit Button */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>
        </Form>
      )}
    </>
  );

  // Content to show after successful registration
  const verifyEmailContent = (
    <>
      <Row className="align-items-center justify-content-center">
        <Col
          lg={1}
          md={1}
          className="align-items-center justify-content-center"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            onClick={handleGoBackToForm}
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col
          lg={10}
          md={9}
          className="d-flex align-items-center justify-content-center"
        >
          <Navbar.Brand>
            <Image
              src={Logo}
              className="mb-4 text-center"
              alt="logo"
              style={{ height: "100px" }}
            />
          </Navbar.Brand>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center mt-5">
        <Col
          lg={1}
          md={1}
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </Col>
        <Col lg={12} md={12} className="text-center mt-4">
          <h1>Verify Your Email</h1>
          <p>Please check your email inbox or spam to verify your account.</p>
          <p>
            Didn&apos;t receive any email?
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-primary"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span
                className="text-primary ml-6"
                style={{ cursor: "pointer" }}
                onClick={handleResendEmail}
              >
                Resend link
              </span>
            )}
          </p>
        </Col>
      </Row>
    </>
  );

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <Card className="shadow-sm p-5">
            {isRegistered ? verifyEmailContent : registrationForm}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AffiliateOnboarding;
