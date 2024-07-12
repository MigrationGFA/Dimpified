import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
  FormControl,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FormSelect } from "../../../Components/elements/form-select/FormSelect";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EcoHeader from "./ecoHeader";
import { updateField, setEcosystemId } from "../../../features/ecosystem";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";

const NewEcosystem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ecosystem = useSelector((state) => state.ecosystem);
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [domainName, setDomainName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDomainValid, setIsDomainValid] = useState(false);
  const [domainMessage, setDomainMessage] = useState("");
  const [domainErrorMessage, setDomainErrorMessage] = useState("");
  const [domainSuggestions, setDomainSuggestions] = useState([]);

  useEffect(() => {
    validateForm();
  }, [ecosystem]);

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
    if (field === "ecosystemDomain") {
      validateDomain(value);
    }
  };

  const validateForm = () => {
    const {
      ecosystemName,
      ecosystemDomain,
      targetAudienceSector,
      mainObjective,
      expectedAudienceNumber,
      experience,
      ecosystemDescription,
    } = ecosystem;
    if (
      ecosystemName &&
      ecosystemDomain &&
      targetAudienceSector &&
      mainObjective &&
      expectedAudienceNumber &&
      experience &&
      ecosystemDescription
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const validateDomain = async (ecosystemDomain) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/check-domain`,
        { domainName: ecosystemDomain }
      );
      const { available, message, suggestions = [] } = response.data;
      if (message === "Domain name is available") {
        setIsDomainValid(true);
        setDomainMessage(message);
        setDomainErrorMessage("");
        setDomainSuggestions([]);
      } else if (message === "Domain name not available") {
        setIsDomainValid(false);
        setDomainErrorMessage(message);
        setDomainMessage("");
        setDomainSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Error validating domain:", error);
      setIsDomainValid(false);
      setDomainErrorMessage("Error checking domain availability.");
      setDomainMessage("");
      setDomainSuggestions([]);
    }
  };

  const handleSearchDomain = () => {
    console.log("Searching for domain:", domainName);
  };

  const handleSubmit = () => {
    setConfirmModal(true);
  };

  const handleConfirm = async () => {
    setIsProcessing(true);
    setConfirmModal(false);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ecosystem/aboutDetails`,
        {
          ...ecosystem,
          creatorId: creatorId,
        }
      );
      const data = response.data.ecosystem;
      const { _id } = data;
      dispatch(setEcosystemId(_id));
      navigate("/creator/dashboard/Edit-Template");
      showToast(response.data.message);
    } catch (error) {
      showToast(error.response.data.message);
      navigate("/creator/dashboard/New-Ecosystem");
    } finally {
      setIsProcessing(false);
    }
  };

  const departments = [
    { value: "Government", label: "Government" },
    { value: "Corporations", label: "Corporations" },
    { value: "Foundations/NGO's", label: "Foundations/NGO's" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Creative Services", label: "Creative Services" },
    { value: "Home Services", label: "Home Services" },
    {
      value: "Health and Wellness Services",
      label: "Health and Wellness Services",
    },
    { value: "Educational Services", label: "Educational Services" },
    { value: "Event Services", label: "Event Services" },
    { value: "Technical Services", label: "Technical Services" },
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
      <EcoHeader />
      <Row className="mt-4 justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <div className="d-lg-flex justify-content-between align-items-center border-bottom mb-4">
                <div className="mb-lg-0">
                  <h3 className="mb-0 h3 fw-bold">
                    Basic Ecosystem Information
                  </h3>
                  <p>Step 1 of 7</p>
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
                        value={ecosystem.ecosystemName}
                        onChange={(e) =>
                          handleFieldChange("ecosystemName", e.target.value)
                        }
                      />
                      <Form.Text className="text-muted fst-italic">
                        note: this is the name your users will see on email
                        received
                      </Form.Text>
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-domain">
                        Ecosystem Domain<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          www.dimpified.com/
                        </span>

                        <Form.Control
                          type="text"
                          id="ecosystem-domain"
                          placeholder="Ecosystem Domain"
                          required
                          value={ecosystem.ecosystemDomain}
                          onChange={(e) =>
                            handleFieldChange("ecosystemDomain", e.target.value)
                          }
                          isInvalid={domainErrorMessage !== ""}
                        />
                      </div>
                      <Form.Text className="text-muted fst-italic">
                        The domain must contain only lowercase letters and
                        hyphens.
                      </Form.Text>
                      {domainMessage && (
                        <Alert className="bg-primary text-white">
                          {domainMessage}
                        </Alert>
                      )}
                      {domainErrorMessage && (
                        <Alert variant="danger">
                          {domainErrorMessage}
                          {domainSuggestions.length > 0 && (
                            <div className="mt-2">
                              <strong>Suggestions:</strong>
                              <ul>
                                {domainSuggestions.map((suggestion, index) => (
                                  <li key={index}>{suggestion}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </Alert>
                      )}
                      <p className="text-danger text-uppercase fs-5 fw-bold">
                        Or
                      </p>
                      <div className="d-flex ">
                        <Button
                          style={{ backgroundColor: "#00008B" }}
                          onClick={() => setShowModal(true)}
                          className="me-3"
                        >
                          Purchase New Domain
                        </Button>
                        <Button
                          style={{ backgroundColor: "#00008B" }}
                          onClick={() => setShowModal(true)}
                        >
                          Transfer Domain
                        </Button>
                      </div>
                    </Col>
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Search Domain</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Label>Search for Domain</Form.Label>
                          <div className="d-flex">
                            <FormControl
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Enter domain name..."
                              className="me-2"
                            />
                            <Button
                              variant="primary"
                              onClick={handleSearchDomain}
                            >
                              Search
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Target Audience Sector
                          <span className="text-danger">*</span>
                        </Form.Label>

                        <FormSelect
                          options={departments}
                          placeholder="Select Target Audience Sector"
                          id="target"
                          name="target"
                          selectedValue={ecosystem.targetAudienceSector}
                          onChange={(value) =>
                            handleFieldChange("targetAudienceSector", value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-objective">
                        What's your main Objective of Creating this Ecosystem
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <FormSelect
                        options={objectOptions}
                        placeholder="Select Objective"
                        id="objective"
                        name="objective"
                        selectedValue={ecosystem.mainObjective}
                        onChange={(value) =>
                          handleFieldChange("mainObjective", value)
                        }
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="expected-audience-number">
                        Expected Audience Number
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <FormSelect
                        options={audienceNumber}
                        placeholder="Select Expected Audience Number"
                        selectedValue={ecosystem.expectedAudienceNumber}
                        onChange={(value) =>
                          handleFieldChange("expectedAudienceNumber", value)
                        }
                        required
                      />
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Do you have experience with creating ecosystems?{" "}
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <FormSelect
                          options={yesNoOptions}
                          placeholder="Select"
                          id="experience"
                          name="experience"
                          selectedValue={ecosystem.experience}
                          onChange={(value) =>
                            handleFieldChange("experience", value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col className="mb-3">
                    <Form.Label htmlFor="ecosystem-description">
                      Ecosystem Description
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="ecosystem-description"
                      placeholder="Write the ecosystem description"
                      value={ecosystem.ecosystemDescription}
                      onChange={(e) =>
                        handleFieldChange(
                          "ecosystemDescription",
                          e.target.value
                        )
                      }
                      required
                      rows={5}
                    />
                  </Col>
                  <div className="d-flex justify-content-end mt-4">
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      disabled={!isFormValid || isProcessing || !isDomainValid}
                    >
                      {isProcessing ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          {" Processing..."}
                        </>
                      ) : (
                        "Next"
                      )}
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={confirmModal} onHide={() => setConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Make this Ecosystem Live for users to have
          access to?
          <br />
          <strong>Note:</strong> <br />
          If you click on No, you can still edit the ecosystem information and
          If you click on Next you will be creating your ecosystem but you won't
          be able to edit the ecosystem information
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NewEcosystem;
