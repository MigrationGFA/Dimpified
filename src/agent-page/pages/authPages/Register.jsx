import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Logo from "../../../../src/assets/DIMP logo colored.png";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";

const Register = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
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
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit} className="mt-4">
        <h2>Create an Account</h2>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your username"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>

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

export default Register;
