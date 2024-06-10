import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { showToast } from "../../Components/Showtoast";
import axios from "axios";

import Logo from "../../assets/GFA logo Rebrand Blue.png";

const UserSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const formSchema = yup.object().shape({
    organisation: yup.string().required("organization name is required"),
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
    setLoading(true);
    try {
      const response = await axios.post(
        "https://dimpified-backend.azurewebsites.net/api/v1/creator/register",
        {
          email: data.email,
          userType: "creator",
          password: data.password,
          organizationName: data.organisation,
        }
      );
      setLoading(false);
      if (response.status === 201) {
        console.log(response.data.message);
        showToast(response.data.message);
        navigate(`/creator/verification?email=${data.email}`);
      }
    } catch (error) {
      console.log("this is good");
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <Link to="/">
                  <Image
                    src={Logo}
                    className="mb-4"
                    alt="logo"
                    style={{ height: "100px" }}
                  />
                </Link>
                <h1 className="mb-1 fw-bold">Sign Up</h1>
                <span>
                  Already have an account?
                  <Link to="/creator/signin" className="ms-1">
                    Sign in
                  </Link>
                </span>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Organisation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Organisation name here"
                      {...register("organisation", {
                        required: "Organisation is required",
                      })}
                    />
                    <small className="text-danger">
                      {errors.organisation && errors.organisation.message}
                    </small>
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email address here"
                      {...register("email", { required: "Email is required" })}
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
                        {...register("password", {
                          required: "Password is required",
                        })}
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
                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    {loading ? (
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
                        Sign up
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

export default UserSignUp;
