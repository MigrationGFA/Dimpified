import React from "react";
import { Container, Row, Col, Nav, Button, Card, Form } from "react-bootstrap";
import { FormSelect } from "../../../Components/elements/form-select/FormSelect";
import { Link, useLocation } from "react-router-dom";

const NewEcosystem = () => {
  const location = useLocation();

  const departments = [
    { value: "Graphics and Design", label: "Graphics and Design" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Video and Animation", label: "Video and Animation" },
    { value: "Music and Audio", label: "Music and Audio" },
    { value: "Programming and Tech", label: "Programming and Tech" },
    { value: "Business Development", label: "Business Development" },
    { value: "Photography", label: "Photography" },
    { value: "Catering", label: "Catering" },
    { value: "Lifestyle and Health", label: "Lifestyle and Health" },
    { value: "Logo Making", label: "Logo Making" },
    { value: "Mobile Developer", label: "Mobile Developer" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "UI / UX Design", label: "UI / UX Design" },
    { value: "SEO", label: "SEO" },
    { value: "Finance", label: "Finance" },
    { value: "End-to-End Projects", label: "End-to-End Projects" },
    { value: "SEO", label: "SEO" },
  ];

  const audienceNumber = [
    { value: "1 - 1000", label: "1 - 1000" },
    { value: "1001 - 5000", label: "1001 - 5000" },
    { value: "5000 - 10,000", label: "5000 - 10,000" },
    { value: "10,001 - 20,000", label: "10,001 - 20,000" },
    { value: "20,001 - 50,000", label: "20,001 - 50,000" },
    { value: "50,001 - 100,000", label: "50,001 - 100,000" },
    { value: "100,001 - 250,000", label: "100,001 - 250,000" },
    { value: "250,001 - 500,000", label: "250,001 - 500,000" },
    { value: "500,001 - 1,000,000", label: "500,001 - 1,000,000" },
    { value: "1,000,001 & More", label: "1,000,001 & More" },
  ];

  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const objectOptions = [
    {
      value: "Selling Courses to Individual",
      label: "Selling Courses to Individual",
    },
    {
      value: "Selling Courses to Businesses",
      label: "Selling Courses to Businesses",
    },
    {
      value: "Training or Onboarding employees",
      label: "Training or Onboarding employees",
    },
    {
      value: "Educating customers or partners",
      label: "Educating customers or partners",
    },
    { value: "Providing free training", label: "Providing free training" },
    { value: "Just looking around ", label: "Just looking around " },
  ];

  return (
    <Container fluid className="p-0">
      <Row
        style={{ backgroundColor: "#00008B" }}
        className="rounded-3 text-white d-flex align-items-center p-2"
      >
        <Col>
          <Nav className="d-flex justify-content-center align-items-center">
            <Nav.Item>
              <Nav.Link
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/New-Ecosystem"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Information About Ecosystem
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Edit-Template"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Edit Template
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Create-Form"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Create Form
              </Nav.Link>
            </Nav.Item>
            <div className="mx-2 d-flex align-items-center">
              <span>&gt;</span>
            </div>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to=""
                className={`p-2 rounded-2 transition-colors duration-300 ${
                  location.pathname === "/creator/dashboard/Preview-and-Send"
                    ? "bg-white text-blue-800"
                    : "text-white hover:bg-gray-100 hover:text-blue-800"
                }`}
              >
                Preview and Send
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs="auto">
        <Link to="/creator/dashboard/All-Ecosystem">
            <Button variant="outline-light"> Cancel</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <div className=" d-lg-flex justify-content-between align-items-center border-bottom mb-4 ">
                <div className=" mb-lg-0">
                  <h3 className="mb-0 h3 fw-bold">
                    Basic Ecosystem Information
                  </h3>
                </div>
              </div>
              <div>
                <Form>
                  <Row className="mb-4"> 
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-name">
                        EcoSystem Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="ecosystem-name"
                        placeholder="Ecosystem Name"
                        required
                      />
                    </Col>

                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-domain">
                        Ecosystem Domain<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="input-group">
                        <Form.Control
                          type="text"
                          id="ecosystem-domain"
                          placeholder="Ecosystem Domain"
                          required
                        />
                        <span className="input-group-text">
                          .dimplified.com
                        </span>
                      </div>
                      <Form.Text className="text-muted fst-italic">
                        The domain must contain only lowercase letters, numbers
                        (0-9), and hyphens.
                      </Form.Text>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Target Audience Sector{" "}
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <FormSelect
                          options={departments}
                          placeholder="select Targeted Audience"
                          id="target"
                          name="target"
                          //   value={currency}
                          //   onChange={(e) => setCurrency(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-objective">
                        Whats your main Objective of Creating this Ecosystem
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <FormSelect
                        options={objectOptions}
                        placeholder="Select Objective"
                        defaultValue=""
                        //   value={department}
                        //   onChange={(e) => setDepartment(e.target.value)}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="department">
                        Expected Audience Number
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <FormSelect
                        options={audienceNumber}
                        placeholder="Select Target Audience Range"
                        defaultValue=""
                        //   value={department}
                        //   onChange={(e) => setDepartment(e.target.value)}
                        required
                      />
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Do you have experience with creating ecosystem?{" "}
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <FormSelect
                          options={yesNoOptions}
                          placeholder="Select"
                          id="experience"
                          name="experience"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Col>
                    <Form.Label htmlFor="ecosystem-description">
                      Ecosystem Description
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="ecosystem-description"
                      placeholder="Write the ecosystem description"
                      // value={jobDescription}
                      // onChange={(e) => setJobDescription(e.target.value)}
                      required
                      rows={5}
                    />
                  </Col>

                  <div className="d-flex justify-content-end mt-4">
                    <Link to="/creator/dashboard/Edit-Template">
                    <Button variant="primary">Next</Button>
                    </Link>
                    
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewEcosystem;
