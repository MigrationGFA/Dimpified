import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Image, Modal } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../assets/DIMP logo colored.png";
import UserSignUpForm from "./userSignUpForm";
import EnterpriseIllustration from "../../assets/enterprise.jpg";
import ConsumerIllustration from "../../assets/consumer.jpeg";
import CourseCategory from "../../dimp-home/CourseCategory";

const UserRoleSelection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
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

              {!selectedRole ? (
                <>
                  {/* General Text with "Show more" link */}
                  <div className="mb-4">
                    <p>
                      Choose the appropriate sign-up option that best describes
                      your needs.{" "}
                      <span
                        onClick={handleShowModal}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        Show more
                      </span>
                    </p>
                  </div>

                  {/* Card Selection for User Roles */}
                  <div className="text-center">
                    <Row className="mb-4 d-flex justify-content-center">
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
                      <Col md={5} className="mb-4">
                        <Card
                          className={`cursor-pointer shadow-lg border ${
                            selectedRole === "consumer" ? "border-primary" : ""
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
                </>
              ) : (
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
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>More Information</Modal.Title>
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
    </div>
  );
};

export default UserRoleSelection;
