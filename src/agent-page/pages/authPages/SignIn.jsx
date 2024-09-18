import { useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Spinner, Modal } from "react-bootstrap"; // Import Spinner
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { affiliateLogin } from "../../../features/login";
import { showToast } from "../../../Components/Showtoast";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../src/assets/DIMP logo colored.png";

const SignIn = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector(
    (state) => state.authentication
  );

  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  const handleBackToSignInClick = () => {
    setIsForgotPassword(false);
  };

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const resultAction = await dispatch(
          affiliateLogin({
            email: values.email,
            password: values.password,
          })
        );

        if (affiliateLogin.rejected.match(resultAction)) {
          const errorPayload = resultAction.payload;
          showToast(errorPayload);
        } else if (affiliateLogin.fulfilled.match(resultAction)) {
          showToast(resultAction.payload.message);
          navigate("/creator/dashboard/overview");
        }
      } catch (error) {
        showToast("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      console.log("Forgot Password:", values);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/affiliate/forgot-password`,
          values
        );
        if (response.status === 200) {
          showToast(response.data.message);
          setShowSuccessModal(true);
        }
        // if ( response.status === 429){
        //   showToast(response.data.message)
        // }
      } catch (error) {
        console.error("Error during password reset:", error.response);
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
      }
    },
  });

  return (
    <div>
      {!isForgotPassword ? (
        <Form onSubmit={signInFormik.handleSubmit} className="mt-4">
          <h2>Sign in to your Dimp Affiliate Program account</h2>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={signInFormik.values.email}
              onChange={signInFormik.handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={signInFormik.values.password}
              onChange={signInFormik.handleChange}
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            disabled={loading || isLoading}
          >
            {loading || isLoading ? ( // Show spinner when loading
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          <p className="mt-3">
            <Button variant="link" onClick={handleForgotPasswordClick}>
              Forgot Password?
            </Button>
          </p>
        </Form>
      ) : (
        <Form onSubmit={forgotPasswordFormik.handleSubmit} className="mt-4">
          <h2>Reset Password</h2>
          <Form.Group controlId="formResetEmail" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={forgotPasswordFormik.values.email}
              onChange={forgotPasswordFormik.handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3 me-3">
            Send Reset Link
          </Button>

          <Button
            variant="link"
            className="mt-3"
            onClick={handleBackToSignInClick}
          >
            Back to Sign In
          </Button>
        </Form>
      )}

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Reset Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "80px", marginBottom: "15px" }}
          />
          <p>Check your email to access your Reset link.</p>
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

export default SignIn;
