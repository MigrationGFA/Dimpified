import { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../../src/assets/DIMP logo colored.png";

const EmailVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting the email and token from the URL
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");

  const [verificationStatus, setVerificationStatus] = useState(null); // null, 'success', 'failure'
  const [loading, setLoading] = useState(true); // Loading state for verification request
  const [showModal, setShowModal] = useState(true); // Modal visibility

  // Verify email when component mounts
  useEffect(() => {
    if (email && token) {
      verifyEmail();
    } else {
      setVerificationStatus("failure");
      setLoading(false);
    }
  }, [email, token]);

  const verifyEmail = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/affiliate/verify-email`,
        {
          email: email,
          verificationToken: token,
        }
      );
      if (response.status === 200) {
        setVerificationStatus("success");
      } else {
        setVerificationStatus("failure");
      }
    } catch (error) {
      setVerificationStatus("failure");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/dimp/agent-page/auth?tab=signIn");
  };

  return (
    <div>
      {/* Modal for displaying verification result */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            {loading
              ? "Verifying Email..."
              : verificationStatus === "success"
              ? "Email Verified"
              : "Verification Failed"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : verificationStatus === "success" ? (
            <>
              <p>Your email {email} has been successfully verified.</p>
              <img
                src={Logo}
                alt="Success"
                style={{ width: "80px", marginBottom: "15px" }}
              />
            </>
          ) : (
            <>
              <p>Failed to verify your email. Please try again later.</p>
              <img
                src={Logo}
                alt="Failure"
                style={{ width: "80px", marginBottom: "15px" }}
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleCloseModal}>
            {verificationStatus === "success" ? "Proceed to Login" : "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmailVerify;
