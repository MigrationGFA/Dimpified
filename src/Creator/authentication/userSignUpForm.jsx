import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Col, Row, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { showToast } from "../../Components/Showtoast";
import axios from "axios";

const UserSignUpForm = ({ userRole }) => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get("ref") || "not available"; 

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email cannot be empty")
      .email("Invalid email address"),
    password: yup.string().required("Password is required"),
    organisation: yup.string().when("userRole", {
      is: "enterprise",
      then: yup.string().required("Organization name is required"),
    }),
    name: yup.string().when("userRole", {
      is: "consumer",
      then: yup.string().required("Name is required"),
    }),
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
        `${import.meta.env.VITE_API_URL}/creator/register`,
        {
          email: data.email,
          role: userRole,
          password: data.password,
          organizationName:
            userRole === "enterprise" ? data.organisation : userRole === "consumer" ? data.name : undefined,
          refCode: ref, 
        }
      );
      setLoading(false);
      if (response.status === 201) {
        showToast(response.data.message);
        navigate(`/creator/verification?email=${data.email}`);
      }
    } catch (error) {
      setLoading(false);
      showToast(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {userRole === "enterprise" && (
          <Col lg={12} md={12} className="mb-3">
            <Form.Label>Organisation Name</Form.Label>
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
        )}
        {userRole === "consumer" && (
          <Col lg={12} md={12} className="mb-3">
            <Form.Label>Business/Individual Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your business/individual name here"
              {...register("name", {
                required: "Business/Individual name is required",
              })}
            />
            <small className="text-danger">
              {errors.name && errors.name.message}
            </small>
          </Col>
        )}
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
              style={{ right: "15px", cursor: "pointer" }}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <small className="text-danger">
            {errors.password && errors.password.message}
          </small>
        </Col>
        <Col lg={12} md={12} className="mb-3 d-grid gap-2">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default UserSignUpForm;
