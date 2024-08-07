import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Logo from "../../assets/DIMP logo colored.png";
import UserSignUpForm from "./userSignUpForm";
import EnterpriseIllustration from "../../assets/enterprise.jpg"; // Replace with actual path
import ConsumerIllustration from "../../assets/consumer.jpeg"; // Replace with actual path

const UserRoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);

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

              {selectedRole ? (
                <div>
                  <Button
                    variant="link"
                    onClick={() => setSelectedRole(null)}
                    className="mb-4"
                  >
                    <FaArrowLeft /> Back
                  </Button>
                  <UserSignUpForm userRole={selectedRole} />
                </div>
              ) : (
                <div className="text-center">
                  <Row className="mb-4 d-flex justify-content-center">
                    <Col md={5} className="mb-4">
                      <Card
                        className="cursor-pointer shadow-lg border border-2"
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
                    </Col>
                    <Col md={5} className="mb-4">
                      <Card
                        className="cursor-pointer shadow-lg border "
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
                    </Col>
                  </Row>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserRoleSelection;
