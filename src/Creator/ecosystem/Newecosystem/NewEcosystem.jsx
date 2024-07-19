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
import categorySubSection from "../../ecosystem/Newecosystem/PostAService/SectionJson";

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
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [isOtherCategory, setIsOtherCategory] = useState(false);
  useEffect(() => {
    validateForm();
  }, [ecosystem]);

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
    if (field === "ecosystemDomain") {
      validateDomain(value);
    }
    if (field === "target") {
      if (value === "Other") {
        setIsOtherCategory(true);
        setSubCategoryOptions([]);
      } else {
        setIsOtherCategory(false);
        const subCategories = categorySubSection[value] || [];
        setSubCategoryOptions(subCategories.map(subCat => ({ value: subCat, label: subCat })));
      }
    }
  };

  useEffect(() => {
    if (ecosystem.targetAudienceSector && ecosystem.targetAudienceSector !== "Other") {
      const subCategories = categorySubSection[ecosystem.targetAudienceSector] || [];
      setSubCategoryOptions(subCategories.map(subCat => ({ value: subCat, label: subCat })));
    }
  }, [ecosystem.targetAudienceSector]);


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

  const audienceNumber = [
    { value: "1-500", label: "1 - 500" },
    { value: "501-1000", label: "501 - 1,000" },
    { value: "1001-1500", label: "1,001 - 1,500" },
    { value: "1501-2000", label: "1,501 - 2,000" },
    { value: "2001-2500", label: "2,001 - 2,500" },
    { value: "2501-3000", label: "2,501 - 3,000" },
    { value: "3001-4000", label: "3,001 - 4,000" },
    { value: "4001-5000", label: "4,001 - 5,000" },
    { value: "5001-6000", label: "5,001 - 6,000" },
    { value: "6001-7000", label: "6,001 - 7,000" },
    { value: "7001-8000", label: "7,001 - 8,000" },
    { value: "8001-9000", label: "8,001 - 9,000" },
    { value: "9001-10000", label: "9,001 - 10,000" },
    { value: "10001-12000", label: "10,001 - 12,000" },
    { value: "12001-14000", label: "12,001 - 14,000" },
    { value: "14001-16000", label: "14,001 - 16,000" },
    { value: "16001-18000", label: "16,001 - 18,000" },
    { value: "18001-20000", label: "18,001 - 20,000" },
    { value: "20001-25000", label: "20,001 - 25,000" },
    { value: "25001-30000", label: "25,001 - 30,000" },
    { value: "30001-35000", label: "30,001 - 35,000" },
    { value: "35001-40000", label: "35,001 - 40,000" },
    { value: "40001-45000", label: "40,001 - 45,000" },
    { value: "45001-50000", label: "45,001 - 50,000" },
    { value: "50001-60000", label: "50,001 - 60,000" },
    { value: "60001-70000", label: "60,001 - 70,000" },
    { value: "70001-80000", label: "70,001 - 80,000" },
    { value: "80001-90000", label: "80,001 - 90,000" },
    { value: "90001-100000", label: "90,001 - 100,000" },
    { value: "100001-125000", label: "100,001 - 125,000" },
    { value: "125001-150000", label: "125,001 - 150,000" },
    { value: "150001-175000", label: "150,001 - 175,000" },
    { value: "175001-200000", label: "175,001 - 200,000" },
    { value: "200001-225000", label: "200,001 - 225,000" },
    { value: "225001-250000", label: "225,001 - 250,000" },
    { value: "250001-300000", label: "250,001 - 300,000" },
    { value: "300001-350000", label: "300,001 - 350,000" },
    { value: "350001-400000", label: "350,001 - 400,000" },
    { value: "400001-450000", label: "400,001 - 450,000" },
    { value: "450001-500000", label: "450,001 - 500,000" },
    { value: "500001-600000", label: "500,001 - 600,000" },
    { value: "600001-700000", label: "600,001 - 700,000" },
    { value: "700001-800000", label: "700,001 - 800,000" },
    { value: "800001-900000", label: "800,001 - 900,000" },
    { value: "900001-1000000", label: "900,001 - 1,000,000" },
    { value: "1000001-1250000", label: "1,000,001 - 1,250,000" },
    { value: "1250001-1500000", label: "1,250,001 - 1,500,000" },
    { value: "1500001-1750000", label: "1,500,001 - 1,750,000" },
    { value: "1750001-2000000", label: "1,750,001 - 2,000,000" },
    { value: "2000001-2500000", label: "2,000,001 - 2,500,000" },
    { value: "2500001-3000000", label: "2,500,001 - 3,000,000" },
    { value: "3000001-3500000", label: "3,000,001 - 3,500,000" },
    { value: "3500001-4000000", label: "3,500,001 - 4,000,000" },
    { value: "4000001-4500000", label: "4,000,001 - 4,500,000" },
    { value: "4500001-5000000", label: "4,500,001 - 5,000,000" },
  ];

  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  const categoryOptions = [
    ...Object.keys(categorySubSection).map((cat) => ({
      value: cat,
      label: cat,
    })),
    { value: "Other", label: "Other" },
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
                      <div className="d-flex">
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
                  </Row>
                  <Row className="mb-3">
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Target Audience Sector
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <FormSelect
                          placeholder="Select Target Audience Sector"
                          id="target"
                          name="target"
                          selectedValue={ecosystem.targetAudienceSector}
                          options={categoryOptions}
                          onChange={(value) =>
                            handleFieldChange("targetAudienceSector", value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} className="col-12">
                      {isOtherCategory ? (
                        <Form.Group>
                          <Form.Label htmlFor="ecosystem-objective">
                            What's your main Objective of Creating this
                            Ecosystem
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <FormSelect
                            placeholder="Select Objective"
                            id="objective"
                            name="objective"
                            selectedValue={ecosystem.mainObjective}
                            onChange={(value) =>
                              handleFieldChange("mainObjective", value)
                            }
                            required
                          />
                        </Form.Group>
                      ) : (
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="ecosystem-objective">
                            What's your main Objective of Creating this
                            Ecosystem
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <FormSelect
                            placeholder="Select Objective"
                            selectedValue={ecosystem.mainObjective}
                            options={subCategoryOptions}
                            id="subCategory"
                            name="subCategory"
                            onChange={(value) =>
                              handleFieldChange("mainObjective", value)
                            }
                            required
                          />
                        </Form.Group>
                      )}
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
          Are you sure you want to make this ecosystem live for users to have
          access to?
          <br />
          <strong>Note:</strong> <br />
          If you click on No, you can still edit the ecosystem information and
          if you click on Next, you will be creating your ecosystem, but you
          won't be able to edit the ecosystem information.
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
              <Button variant="primary" onClick={handleSearchDomain}>
                Search
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NewEcosystem;
