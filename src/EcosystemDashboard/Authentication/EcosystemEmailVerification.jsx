import { useState, useEffect } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { useLocation, Link } from "react-router-dom";

const EcosystemEmailVerification = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const verifyUserToken = async () => {
    setLoading(true);
    try {
      console.log("Making verification request...");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem-user/verify-email`,
        {
          email: queryParam.get("email"),
          verificationToken: queryParam.get("token"),
          ecosystemDomain: queryParam.get("ecosystemDomain"),
        }
      );
      console.log("Verification response:", response.data);
      if (
        response.data.msg === "Email verified successfully" ||
        response.data.msg === "Email has been verified" ||
        response.data.msg === "Email has already been verified"
      ) {
        sessionStorage.setItem("isVerified", "true");
        setIsVerified(true);
        setError(false);
        showToast(response.data.msg);
      } else {
        setError(true);
        showToast(response.data.msg);
      }
    } catch (error) {
      setError(true);
      console.error("Verification error:", error.response.data);
      showToast(error.response.data.msg);
    }
    setLoading(false);
  };

  const resendEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem-user/resend-email`,
        {
          email: queryParam.get("email"),
        }
      );
      if (response.data.msg === "Email address have been verified") {
        setError(false);
        setLoading(false);
        showToast("Email address have been verified");
      }
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  useEffect(() => {
    console.log("Component mounted");
    console.log(
      "Query parameters:",
      queryParam.get("email"),
      queryParam.get("token")
    );
    verifyUserToken();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-10">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col
          lg={12}
          md={12}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="shadow-sm p-5">
            <Row className="align-items-center justify-content-center">
              <Col lg={10} md={9} className="text-center">
                <h1 className="fs-4">
                  An error occurred while verifying your account. Please click
                  the button below to request a new verification link.
                </h1>
              </Col>
              <Col lg={10} md={9} className="text-center">
                <Button variant="primary" type="submit" onClick={resendEmail}>
                  Resend Email
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }

  if (isVerified || sessionStorage.isVerified === "true") {
    return (
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col
          lg={12}
          md={12}
          className="d-flex align-items-center justify-content-center"
        >
          <Card className="shadow-sm p-5">
            <Row className="align-items-center justify-content-center">
              <Col lg={10} md={9} className="text-center">
                <h1 className="fs-3 mb-4">Your Email has been verified</h1>
              </Col>
              <Col lg={10} md={9} className="text-center">
                <Button variant="primary" type="submit" as={Link} to="/signin">
                  Please Login
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
  return null;
};

export default EcosystemEmailVerification;
