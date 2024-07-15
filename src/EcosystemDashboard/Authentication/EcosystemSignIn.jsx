import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";

import Logo from "../../assets/GFA logo Rebrand Blue.png";

const UserSignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector(
    (state) => state.authentication
  );

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email cannot be empty")
      .email("Invalid email address"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dimpified-backend-development.azurewebsites.net/api/v1/ecosystem-user/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      // Handle successful login
      showToast(response.data.message);

      // Navigate to Userdashboard after successful login
      navigate("/Userdashboard");

    } catch (error) {
      // Handle login error
      showToast("Invalid credentials. Please try again.");
    }
  };

  return (
    <Fragment>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <Image
                  src={Logo}
                  className="mb-4"
                  alt="logo"
                  style={{ height: "100px" }}
                />
                <h1 className="mb-1 fw-bold">Sign in</h1>
                <span>
                  Don’t have an account?
                  <Link to="/show=true/:ecosystemDomain/signup" className="ms-1">
                    Sign up
                  </Link>
                </span>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email address here"
                      {...register("email")}
                    />
                    <small className="text-danger">
                      {errors.email && errors.email.message}
                    </small>
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="**************"
                        {...register("password")}
                      />
                      <div
                        className="position-absolute end-20 top-50 translate-middle-y"
                        style={{ right: "10px", cursor: "pointer" }}
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                    <small className="text-danger">
                      {errors.password && errors.password.message}
                    </small>
                  </Col>
                  <Link to="/user/Forget-password" className="ms-1 text-bold">
                    Forgot Password
                  </Link>

                  <Col lg={12} md={12} className="mb-0 d-grid gap-2 mt-6">
                    {isLoading ? (
                      <Button
                        variant="primary"
                        type="submit"
                        className="opacity-50"
                        disabled
                      >
                        Processing
                      </Button>
                    ) : (
                      <Button variant="primary" type="submit">
                        Sign in
                      </Button>
                    )}
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserSignIn;
