import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { FaUser, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";

const AffiliateOnboarding = () => {
  const [userRole, setUserRole] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call here
    setTimeout(() => {
      setLoading(false);
      alert("Successfully Registered!");
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={12}>
          <h3 className="text-center mb-4">Affiliate Onboarding</h3>
          
          {/* User Role Selection */}
          <div className="d-flex justify-content-around mb-4">
            <Button
              variant={userRole === "individual" ? "primary" : "outline-primary"}
              className="px-4"
              onClick={() => handleRoleSelection("individual")}
            >
              <FaUser className="me-2" />
              Individual
            </Button>
            <Button
              variant={userRole === "enterprise" ? "primary" : "outline-primary"}
              className="px-4"
              onClick={() => handleRoleSelection("enterprise")}
            >
              <FaBuilding className="me-2" />
              Enterprise
            </Button>
          </div>

          {userRole && (
            <Form onSubmit={handleSubmit}>
              {/* Conditional input based on user role */}
              {userRole === "enterprise" && (
                <Form.Group controlId="organisationName" className="mb-3">
                  <Form.Label>Organisation Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter organisation name" required />
                </Form.Group>
              )}

              {userRole === "individual" && (
                <Form.Group controlId="individualName" className="mb-3">
                  <Form.Label>Individual Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
              )}

              {/* Email Input */}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              {/* Password Input */}
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter password"
                    required
                  />
                  <div
                    className="position-absolute end-0 top-50 translate-middle-y"
                    style={{ right: "10px", cursor: "pointer" }}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </Form.Group>

              {/* Submit Button */}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AffiliateOnboarding;
