// import node module libraries
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";

import Logo from "../../assets/DIMP logo colored.png";
// import Logo2 from "../assets/LogoList/cote-logo.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import GradientBG from "../../assets/images/background/gradient-bg.png";
import AuthImg from "./images/auth-login-illustration-light.png";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
});

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/creator/forgot-password`,
        {
          email: data.email,
        }
      );
      setLoading(false);
      showToast(response.data.message);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };
  return (
    <Fragment>
      <section className="z-index-99 my-4 my-lg-8 position-relative">
        <div className="stack-box-contain">
          <div className="bg-white rounded-4 mx-4 mx-lg-16">
            <Row className="h-100 ">
              <Col
                lg={6}
                className="order-lg-1 order-2 mb-4 mb-lg-0 hide-on-mobile hide-on-tablet-portrait"
                style={{ backgroundImage: `url(${GradientBG})` }}
              >
                <div className="text-center">
                  <img
                    src={AuthImg}
                    className="w-60 h-70 rounded-4 py-lg-10"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                className="order-lg-1 order-2 py-6 px-6 px-lg-14 py-lg-10"
              >
                <div>
                  <div className="">
                    <div className="mb-4">
                      <Image
                        src={Logo}
                        className="mb-4"
                        alt="logo"
                        style={{ height: "30px" }}
                      />
                      <h1 className="alt-font fs-20 lh-40">
                        Forgot your password?
                      </h1>
                      <span>
                      Kindly enter your email to reset your password.
                        
                      </span>
                      
                    </div>
                    <Form onSubmit={handleSubmit(submit)}>
                      <Row>
                        <Col lg={12} md={12} className="mb-3">
                          {/*  email */}
                          <Form.Label>Email</Form.Label>
                          {/* <Form.Control
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                    /> */}
                          <Form.Control
                            type="email"
                            id="email"
                            placeholder="Email address here"
                            {...register("email", { required: true })}
                          />
                          <small
                            className="text-danger"
                            style={{
                              visibility: errors.email ? "visible" : "hidden",
                            }}
                          >
                            {errors.email?.message}
                          </small>
                        </Col>
                        <Col lg={12} md={12} className="mb-3 d-grid gap-2">
                          {/* Button */}
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
                              Send Reset Link
                            </Button>
                          )}
                          {/* <Button variant="primary" type="submit">
                      Send Reset Link
                    </Button> */}
                        </Col>
                      </Row>
                      <span>
                        Return to the
                        <Link
                          to="/creator/signin"
                          className="ms-1 text-primary fw-bold"
                        >
                          Sign in
                        </Link>
                        {" "} page.
                      </span>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4 d-flex flex-column align-items-center justify-content-center">
                <Link to="/">
                  <Image
                    src={Logo}
                    className="mb-4"
                    alt=""
                    style={{ height: "100px", width: "120px" }}
                  />
                </Link>
                <h1 className="mb-1 fw-bold">Forgot Password</h1>
                <span className="text-center">
                  Fill the form to reset your password.
                </span>
              </div>

              
              <Form onSubmit={handleSubmit(submit)}>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                 
                    <Form.Label>Email</Form.Label>
                   
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Email address here"
                      {...register("email", { required: true })}
                    />
                    <small
                      className="text-danger"
                      style={{
                        visibility: errors.email ? "visible" : "hidden",
                      }}
                    >
                      {errors.email?.message}
                    </small>
                  </Col>
                  <Col lg={12} md={12} className="mb-3 d-grid gap-2">
               
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
                        Send Reset Link
                      </Button>
                    )}
                   
                  </Col>
                </Row>
                <span>
                  Return to <Link to="/">Sign in</Link>
                </span>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Fragment>
  );
};

export default ForgetPassword;
