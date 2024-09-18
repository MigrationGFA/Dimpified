import { useState } from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { affiliateLogin } from "../../../features/login";
import { showToast } from "../../../Components/Showtoast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

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
      try {
        // Dispatch the login action
        const resultAction = await dispatch(
          affiliateLogin({
            email: values.email,
            password: values.password,
          })
        );

        if (affiliateLogin.rejected.match(resultAction)) {
          // Login failed, access the payload from the rejected action
          const errorPayload = resultAction.payload;
          showToast(errorPayload);
        } else if (affiliateLogin.fulfilled.match(resultAction)) {
          // Login was successful
          showToast(resultAction.payload.message);
          navigate("/creator/dashboard/overview");
        }
      } catch (error) {
        // Handle unexpected errors, such as network issues
        showToast("An unexpected error occurred. Please try again.");
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
        // Handle forgot password logic here
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/affiliate/forgot-password`,
          values
        );
        if (response.status === 200) {
          console.log("Reset link sent");
        }
      } catch (error) {
        console.error("Error during password reset:", error.response);
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

          <Button variant="primary" type="submit" className="mt-3">
            Sign In
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
    </div>
  );
};

export default SignIn;
