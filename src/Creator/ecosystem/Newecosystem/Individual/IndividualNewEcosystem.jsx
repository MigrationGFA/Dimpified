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
import { FormSelect } from "../../../../Components/elements/form-select/FormSelect";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IndividualHeader from "./individualHeader";
import {
  updateField,
  setEcosystemId,
  updateSocialMedia,
  resetState,
} from "../../../../features/ecosystem";
import axios from "axios";
import { showToast } from "../../../../Components/Showtoast";
import categorySubSection from "../../../ecosystem/Newecosystem/PostAService/SectionJson";

const NewEcosystem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ecosystem = useSelector((state) => state.ecosystem);
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  const [showModal, setShowModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
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
  const [socialMedia, setSocialMedia] = useState([{ name: "", link: "" }]);

  const socialMediaOptions = [
    { value: "facebook", label: "Facebook" },
    { value: "instagram", label: "Instagram" },
    // { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "Twitter" },
    // { value: "whatsapp", label: "WhatsApp" },
    // { value: "youtube", label: "YouTube" },
    // { value: "wechat", label: "WeChat" },
    // { value: "tiktok", label: "TikTok" },
    // { value: "telegram", label: "Telegram" },
    // { value: "pinterest", label: "Pinterest" },
    // { value: "reddit", label: "Reddit" },
    // { value: "quora", label: "Quora" },
    // { value: "discord", label: "Discord" },
    // { value: "twitch", label: "Twitch" },
    // { value: "threads", label: "Threads by Instagram" },
  ];

  const handlePlatformChange = (index, event) => {
    if (event && event.target) {
      const newLinks = socialMedia.map((link, i) =>
        i === index ? { ...link, name: event.target.value } : link
      );
      setSocialMedia(newLinks);
      dispatch(updateSocialMedia(newLinks));
    } else {
      console.error("Event or event.target is undefined");
    }
  };

  const handleUrlChange = (index, event) => {
    const newLinks = socialMedia.map((link, i) =>
      i === index ? { ...link, link: event.target.value } : link
    );
    setSocialMedia(newLinks);
    dispatch(updateSocialMedia(newLinks));
  };

  const addLink = () => {
    setSocialMedia([...socialMedia, { name: "", link: "" }]);
  };

  const removeLink = (index) => {
    setSocialMedia(socialMedia.filter((_, i) => i !== index));
  };

  const handleFieldChange = (field, value) => {
    // Apply filtering only to ecosystemName and ecosystemDomain
    const filteredValue =
      field === "ecosystemName" || field === "ecosystemDomain"
        ? value.replace(/[.\s,_-]/g, "")
        : value;

    // Handle ecosystemName changes
    if (field === "ecosystemName") {
      const domainValue = filteredValue.toLowerCase();
      dispatch(updateField({ field: "ecosystemName", value: filteredValue }));
      dispatch(updateField({ field: "ecosystemDomain", value: domainValue }));

      validateDomain(domainValue);
    }
    // Handle ecosystemDomain changes
    else if (field === "ecosystemDomain") {
      dispatch(updateField({ field: "ecosystemDomain", value: filteredValue }));
      validateDomain(filteredValue);
    }
    // For other fields, dispatch the unfiltered value
    else {
      dispatch(updateField({ field, value: filteredValue }));
    }

    // Handle 'target' field for category-related logic
    if (field === "target") {
      if (value === "Other") {
        setIsOtherCategory(true);
        setSubCategoryOptions([]);
      } else {
        setIsOtherCategory(false);
        const subCategories = categorySubSection[value] || [];
        setSubCategoryOptions(
          subCategories.map((subCat) => ({ value: subCat, label: subCat }))
        );
      }
    }
  };

  useEffect(() => {
    if (
      ecosystem.targetAudienceSector &&
      ecosystem.targetAudienceSector !== "Other"
    ) {
      const subCategories =
        categorySubSection[ecosystem.targetAudienceSector] || [];
      setSubCategoryOptions(
        subCategories.map((subCat) => ({ value: subCat, label: subCat }))
      );
    }
  }, [ecosystem.targetAudienceSector]);

  useEffect(() => {
    validateForm();
  }, [ecosystem]);

  const validateForm = () => {
    const {
      ecosystemName,
      ecosystemDomain,
      targetAudienceSector,
      mainObjective,
      contact,
      address,
      ecosystemDescription,
    } = ecosystem;
    if (
      ecosystemName &&
      ecosystemDomain &&
      targetAudienceSector &&
      mainObjective &&
      contact &&
      address &&
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
      navigate("/creator/dashboard/Products/individual");
      showToast(response.data.message);
    } catch (error) {
      showToast(error.response.data.message);
      navigate("/creator/dashboard/New-Ecosystem/individual");
    } finally {
      setIsProcessing(false);
    }
  };

  const categoryOptions = [
    ...Object.keys(categorySubSection).map((cat) => ({
      value: cat,
      label: cat,
    })),
    { value: "Other", label: "Other" },
  ];

  return (
    <Container fluid className="p-0">
      <IndividualHeader />
      <Row className="mt-4 justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <div className="d-lg-flex justify-content-between align-items-center border-bottom mb-4">
                <div className="mb-lg-0">
                  <h3 className="mb-0 h3 fw-bold">
                    Basic Ecosystem Information
                  </h3>
                  <p>Step 1 of 4</p>
                </div>
              </div>
              <div>
                <Form>
                  <Row className="mb-4">
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-name">
                        A. What’s the name of your business?
                        <span className="text-danger">*</span>
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
                        Note: This is the name your users will see on emails
                        received.
                      </Form.Text>
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="ecosystem-domain">
                        B. What should your website address be?
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <div className="input-group">
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
                        <span className="input-group-text">.dimpified.com</span>
                      </div>
                      <Form.Text className="text-muted fst-italic">
                        The domain must contain only lowercase letters.
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
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          C. Which industry does your business belong to?{" "}
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <FormSelect
                          placeholder="Select your industry"
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
                            D. What’s your specific business type?{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <FormSelect
                            placeholder="Describe your business activities"
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
                            D. What’s your specific business type?{" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <FormSelect
                            placeholder="Select your business activities"
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
                  <Row className="mb-4">
                    <Col lg={6} className="col-12">
                      <Form.Label htmlFor="contact-phone-number">
                        E. What is your Business Phone Number?
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="contact-phone-number"
                        placeholder="Enter your contact phone number"
                        value={ecosystem.contact}
                        onChange={(e) =>
                          handleFieldChange("contact", e.target.value)
                        }
                        required
                      />
                    </Col>
                    <Col lg={6} className="col-12">
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="address">
                          F. What is your Business Address?
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="address"
                          placeholder="Enter your address"
                          value={ecosystem.address}
                          onChange={(e) =>
                            handleFieldChange("address", e.target.value)
                          }
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col className="mb-3">
                    <Form.Label htmlFor="ecosystem-description">
                      G. Can you describe your business?{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="ecosystem-description"
                      placeholder="Describe what your business does"
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
                  <Row>
                    <Col
                      lg={4}
                      style={{ display: "block", marginBottom: "15px" }}
                    >
                      <Form.Label htmlFor="ecosystem-social">
                        H. Add Your Social Media Links
                      </Form.Label>
                      <Button onClick={() => setShowSocialModal(true)}>
                        Add Social Media
                      </Button>
                    </Col>
                  </Row>
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
          Are you sure you want to activate this ecosystem for users to access?
          <br />
          <strong>Please note</strong> <br /> Kindly review the information as
          you will not be able to change your ecosystem information once you
          click next
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmModal(false)}>
            Review
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Next
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

      <Modal show={showSocialModal} onHide={() => setShowSocialModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Social Media Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {socialMedia.map((link, index) => (
            <Row key={index} className="mb-3">
              <Col lg={6} className="col-12">
                <Form.Group controlId={`social-platform-${index}`}>
                  <Form.Label>Social Media Platform</Form.Label>
                  <Form.Select
                    value={link.name}
                    onChange={(e) => handlePlatformChange(index, e)}
                  >
                    <option value="" disabled>
                      Select platform
                    </option>
                    {socialMediaOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={6} className="col-12">
                <Form.Group controlId={`social-url-${index}`}>
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL"
                    value={link.link}
                    onChange={(e) => handleUrlChange(index, e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={12} className="text-right mt-2">
                {socialMedia.length > 1 && (
                  <Button variant="danger" onClick={() => removeLink(index)}>
                    Remove
                  </Button>
                )}
              </Col>
            </Row>
          ))}
          <Button variant="primary" onClick={addLink}>
            Add another link
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSocialModal(false)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NewEcosystem;
