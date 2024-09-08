import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Image, Modal } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { People, Building } from "react-bootstrap-icons";
import Logo from "../../assets/DIMP logo colored.png";
import UserSignUpForm from "./userSignUpForm";
import EnterpriseIllustration from "../../assets/enterprise.jpg";
import ConsumerIllustration from "../../assets/consumer.jpeg";
import CourseCategory from "../../dimp-home/CourseCategory";

import GradientBG from "../../assets/images/background/gradient-bg.png";
import AuthImg from "./images/auth-login-illustration-light.png";

const UserRoleSelection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
                    className="w-60 h-70 rounded-4 pt-lg-14"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                xl={6}
                lg={6}
                className="order-lg-1 order-2 py-6 px-6 px-lg-14 py-lg-8"
              >
                {/* <div>
                  <div className="px-lg-14 px-3 ">
                    <div className="mb-4">
                      <Image
                        src={Logo}
                        className="mb-4 mt-6"
                        alt="logo"
                        style={{ height: "30px" }}
                      />
                      <h1 className="alt-font fs-20 lh-40">
                        Sign in to your creator account
                      </h1>
                      <span>
                        Don’t have an account?
                        <Link
                          to="/creator/signup"
                          className="ms-1 text-primary text-bold"
                        >
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
                            placeholder="Please enter your email address here"
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
                        <Link
                          to="/creator/forget-password"
                          className="ms-1 text-bold text-primary"
                        >
                          Forgot Password?
                        </Link>

                        <Col
                          lg={12}
                          md={12}
                          className="mb-0 d-grid gap-2 mt-3 mb-6"
                        >
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
                  </div>
                </div> */}

                <div className="mb-4">
                  <Link to="/">
                    <Image
                      src={Logo}
                      className="mb-4"
                      alt="logo"
                      style={{ height: "30px" }}
                    />
                  </Link>
                  <h1 className="alt-font fs-20 lh-40">
                    Create your ecosystem account
                  </h1>
                  <span className="text-dark">
                    Already have an account?
                    <Link
                      to="/creator/signin"
                      className="ms-1 fw-bold text-primary"
                    >
                      Sign in
                    </Link>
                  </span>
                </div>

                {!selectedRole ? (
                  <>
                    {/* General Text with "Show more" link */}
                    <div className="mb-2">
                      <span className="fs-15 text-dark">
                        Select the appropriate category that best describe your
                        business.{" "}
                        <span
                          onClick={handleShowModal}
                          style={{ cursor: "pointer" }}
                          className="text-warning"
                        >
                          Click here to see where your business falls under.
                        </span>
                      </span>
                    </div>

                    {/* Card Selection for User Roles */}

                    <Row className="mb-4 d-flex">
                      {/* <Col md={5} className="mb-4">
                        <Card
                          className={`cursor-pointer shadow-lg border border-2 ${
                            selectedRole === "enterprise"
                              ? "border-primary"
                              : ""
                          }`}
                          onClick={() => setSelectedRole("enterprise")}
                        >
                          <Card.Img
                            variant="top"
                            src={EnterpriseIllustration}
                            alt="Enterprise"
                          />
                          <Card.Body>
                            <Card.Title>Enterprise</Card.Title>
                          </Card.Body>
                        </Card>
                        <p className="mt-2">
                          For startups, medium-scale businesses, large-scale
                          businesses, NGOs, religious centers, and more.
                        </p>
                      </Col> */}

                      <Col md={12} className="mb-2">
                        <Card
                          className="mb-4 card-hover cursor-pointer"
                          onClick={() => setSelectedRole("consumer")}
                        >
                          {/* Card body  */}
                          <Card.Body className="">
                            <div className="d-flex">
                              <People
                                className="card-img-top text-primary rounded-top-md align-items-center text-center"
                                size={50}
                                style={{
                                  height: "3rem",
                                  width: "auto",
                                  border: "1px solid #d3d3d3",
                                  padding: "5px 10px",
                                  borderRadius: "4px",
                                  marginRight: "1rem",
                                }}
                              />

                              <div className="ms-0">
                                <h4 className="mb-1 text-primary">
                                  Individuals
                                </h4>

                                <p className="mb-1 fs-6">
                                  {" "}
                                  For personal care services, trade services,
                                  professional services, creatives services,
                                  and more.
                                </p>
                              </div>
                            </div>
                          </Card.Body>
                          {/* Card Footer */}
                        </Card>

                        <Card
                          className="mb-0 card-hover "
                          // onClick={() => setSelectedRole("enterprise")}
                        >
                          {/* Card body  */}
                          <Card.Body className=" ">
                            <div className="d-flex">
                              <Building
                                className="card-img-top  rounded-top-md align-items-center text-center"
                                size={50}
                                style={{
                                  width: "auto",
                                  border: "1px solid #d3d3d3",
                                  padding: "5px 10px",
                                  borderRadius: "4px",
                                  marginRight: "1rem",
                                }}
                              />

                              <div className="ms-0">
                                <h4 className="mb-1">
                                  Enterprise{" "}
                                  <span className="label bg-warning-subtle text-warning fs-10 p-2 border-radius-26px">
                                    COMING SOON
                                  </span>
                                </h4>

                                <p className="mb-1 fs-6">
                                  {" "}
                                  For governments, corporations, non-profit
                                  organizations and religious bodies.
                                </p>
                              </div>
                            </div>
                          </Card.Body>
                          {/* Card Footer */}
                        </Card>
                      </Col>
                    </Row>
                  </>
                ) : (
                  <div>
                    <Button
                      variant="link"
                      onClick={() => setSelectedRole("")}
                      className="mb-4 text-warning"
                    >
                      <FaArrowLeft size={15} className="text-warning me-2" />go back
                    </Button>
                    <h3 className="alt-font">
                      Sign Up as a{" "}
                      {selectedRole === "enterprise"
                        ? "Enterprise"
                        : "Individual"}
                    </h3>
                    <UserSignUpForm userRole={selectedRole} />
                  </div>
                )}

                {/* Modal */}
                <Modal show={showModal} onHide={handleCloseModal} size="xl">
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Click on view more to extend the dropdown.
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <CourseCategory />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* <div>
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

                {!selectedRole ? ( */}
                  {/* <>
                   
                    <div className="mb-4">
                      <p>
                        Choose the appropriate sign-up option that best
                        describes your needs.{" "}
                        <span
                          onClick={handleShowModal}
                          style={{ cursor: "pointer", color: "blue" }}
                        >
                          Show more
                        </span>
                      </p>
                    </div> */}

                    {/* Card Selection for User Roles */}
                    {/* <div className="text-center">
                      <Row className="mb-4 d-flex justify-content-center"> */}
                        {/* <Col md={5} className="mb-4">
                        <Card
                          className={`cursor-pointer shadow-lg border border-2 ${
                            selectedRole === "enterprise"
                              ? "border-primary"
                              : ""
                          }`}
                          onClick={() => setSelectedRole("enterprise")}
                        >
                          <Card.Img
                            variant="top"
                            src={EnterpriseIllustration}
                            alt="Enterprise"
                          />
                          <Card.Body>
                            <Card.Title>Enterprise</Card.Title>
                          </Card.Body>
                        </Card>
                        <p className="mt-2">
                          For startups, medium-scale businesses, large-scale
                          businesses, NGOs, religious centers, and more.
                        </p>
                      </Col> */}
                        {/* <Col md={5} className="mb-4">
                          <Card
                            className={`cursor-pointer shadow-lg border ${
                              selectedRole === "consumer"
                                ? "border-primary"
                                : ""
                            }`}
                            onClick={() => setSelectedRole("consumer")}
                          >
                            <Card.Img
                              variant="top"
                              src={ConsumerIllustration}
                              alt="Consumer"
                            />
                            <Card.Body>
                              <Card.Title>Individual</Card.Title>
                            </Card.Body>
                          </Card>
                          <p className="mt-2">
                            For professional services, trade services, personal
                            care services, creatives services, and more.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </> */}
                {/* ) : (
                  <div>
                    <Button
                      variant="link"
                      onClick={() => setSelectedRole("")}
                      className="mb-4"
                    >
                      <FaArrowLeft /> Back
                    </Button>
                    <h3>
                      Sign Up as a{" "}
                      {selectedRole === "enterprise"
                        ? "Enterprise"
                        : "Individual"}
                    </h3>
                    <UserSignUpForm userRole={selectedRole} />
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        {/* Modal */}
        {/* <Modal show={showModal} onHide={handleCloseModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Click on view more to see the full list.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CourseCategory />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div> */}
    </Fragment>
  );
};

export default UserRoleSelection;
