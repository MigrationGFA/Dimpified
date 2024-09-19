import { useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../../../src/assets/DIMP logo colored.png";
import { showToast } from "../../../Components/Showtoast";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting the email and token from the URL
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      setResetStatus("passwordMismatch");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/affiliate/reset-password`,
        {
          email: email,
          resetToken: token,
          newPassword: newPassword,
        }
      );

      if (response.status === 200) {
        setResetStatus("success");
        showToast(response.message);
      } else {
        setResetStatus("failure");
        showToast(response.message);
      }
    } catch (error) {
      setResetStatus("failure");
      // Check if there's an error response from the server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showToast(error.response.data.message); // Show server error message
      } else {
        showToast(
          error.message || "An unexpected error occurred. Please try again."
        ); // Fallback to default error message
      }
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
      {/* Modal for password reset */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center"
              style={{ marginRight: "10px" }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "80px", marginBottom: "0px" }}
              />
            </div>
            <span>
              {loading
                ? "Resetting Password..."
                : resetStatus === "success"
                ? "Password Reset Successful"
                : resetStatus === "passwordMismatch"
                ? "Passwords Do Not Match"
                : "Reset Password"}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : resetStatus === "success" ? (
            <>
              <p>Your password has been successfully reset.</p>
              <img
                src={Logo}
                alt="Success"
                style={{ width: "80px", marginBottom: "15px" }}
              />
            </>
          ) : (
            <>
              <Form>
                <Form.Group className="mb-3" controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
              </Form>
              {resetStatus === "passwordMismatch" && (
                <p style={{ color: "red" }}>Passwords do not match!</p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {resetStatus === "success" ? (
            <Button variant="primary" onClick={handleCloseModal}>
              Proceed to Login
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handlePasswordReset}
              disabled={loading}
            >
              Reset Password
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
