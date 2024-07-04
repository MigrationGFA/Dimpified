import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/login";
import { showToast } from "../../Components/Showtoast";

import Logo from "../../assets/GFA logo Rebrand Blue.png";

const UserSignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { Login, loading } = useGlobalContext();
  const navigate = useNavigate();
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

  // const onSubmit = async (data, e) => {
  //   try {
  //     await Login(data, e); // Pass the event object to the Login function
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //   }
  // };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      // Dispatch the login action
      const resultAction = await dispatch(
        login({
          email: data.email,
          password: data.password,
        })
      );

      if (login.rejected.match(resultAction)) {
        // Login failed, access the payload from the rejected action
        const errorPayload = resultAction.payload;
        showToast(errorPayload);
      } else if (login.fulfilled.match(resultAction)) {
        // Login was successful
        showToast(resultAction.payload.message);

        if (resultAction.payload.data.interest === "no") {
          navigate("/creator/onboard");
        } else {
          navigate("/creator/dashboard/overview");
        }
      }
    } catch (error) {
      // Handle unexpected errors, such as network issues
      showToast("An unexpected error occurred. Please try again.");
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
                  <Link to="/creator/signup" className="ms-1">
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
