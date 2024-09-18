import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      console.log("Forgot Password:", values);
      // Handle forgot password logic here, e.g., sending a reset link via email
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="mt-4">
      <h2>Reset Password</h2>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Send Reset Link
      </Button>
    </Form>
  );
};

export default ForgotPassword;
