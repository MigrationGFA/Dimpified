import { useState, Fragment } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import axios from "axios";
// import { useGlobalContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdPayments } from "react-icons/md";

const PostService = () => {
  // const { UserId } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState("");
  const [prefix, setPrefix] = useState("I will");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [format, setFormat] = useState("");
  const [serviceBackground, setServiceBackground] = useState([]);
  const [currency, setCurrency] = useState("");
  // const [PackageType, setPakageType] = useState("");
  const [pricingPlan, setPricingPlan] = useState("starter");
  const [pricingPackages, setPricingPackages] = useState({
    starter: {
      header: "",
      shortDescription: "",
      price: "",
      deliveryTime: "",
      packageType: "",
      copyright: "",
      fdd: "",
      additionalRevision: "",
    },
    professional: {
      basic: {
        header: "",
        shortDescription: "",
        price: "",
        deliveryTime: "",
        packageType: "",
        copyright: "",
        fdd: "",
        additionalRevision: "",
      },
      standard: {
        header: "",
        shortDescription: "",
        price: "",
        deliveryTime: "",
        packageType: "",
        copyright: "",
        fdd: "",
        additionalRevision: "",
      },
      premium: {
        header: "",
        shortDescription: "",
        price: "",
        deliveryTime: "",
        packageType: "",
        copyright: "",
        fdd: "", //extra fast delivery
        additionalRevision: "",
      },
    },
  });

  const departments = [
    { label: "Select Department" },
    { value: "Graphics and Design", label: "Graphics and Design" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Writing & Translation", label: "Writing & Translation" },
    { value: "Video & Animation", label: "Video & Animation" },
    { value: "Music & Audio", label: "Music & Audio" },
    { value: "Programming & Tech", label: "Programming & Tech" },
    { value: "Business", label: "Business" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "AI Services", label: "AI Services" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "Web Development", label: "Web Development" },
  ];

  const formatType = [
    { label: "Select Format" },
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "Onsite" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const currencyType = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },
    { value: "EUR", label: "Euros" },
    { value: "GBP", label: "Pounds" },
  ];

  const packageOption = [
    { value: "single", label: "Single" },
    { value: "multiple", label: "Multiple" },
  ];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullHeader = `${prefix} ${header}`;

    try {
      const formData = {
        userId: UserId,
        header: fullHeader,
        description,
        department,
        format,
        currency,
        serviceBackground: serviceBackground.map((file) => file.url),
        pricing: {
          currency,
          type: pricingPlan === "starter" ? "Standard" : "Professional",
          packages: Object.values(pricingPackages[pricingPlan]).map((pkg) => ({
            header: pkg.header,
            shortDescription: pkg.shortDescription,
            price: pkg.price,
            deliveryTime: pkg.deliveryTime,
            additionalRevision: pkg.additionalRevision,
            copyrights: pkg.copyright,
            extraFastDelivery: pkg.fdd,
            additionalDays: pkg.additionalDays,
          })),
        },
      };

      const response = await axios.post(
        "https://unleashified-backend.azurewebsites.net/api/v1/provider-create-service",
        formData
      );

      console.log("Response:", response.data);
      navigate("/ServiceProviderdashboard");
      // resetForm();
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  // const resetForm = () => {
  //   setHeader("");
  //   setDescription("");
  //   setTags({
  //     desiredCandidate: [],
  //     jobResponsibilities: [],
  //     jobPerksAndBenefits: [],
  //   });
  //   setDepartment("");
  //   setFormat("");
  //   setServiceBackground([]);
  //   setCurrency("");
  //   setPricingPlan("starter");
  //   setPricingPackages({
  //     starter: {
  //       header: "",
  //       shortDescription: "",
  //       price: "",
  //       deliveryTime: "",
  //     },
  //     professional: {
  //       basic: {
  //         header: "",
  //         shortDescription: "",
  //         price: "",
  //         deliveryTime: "",
  //       },
  //       standard: {
  //         header: "",
  //         shortDescription: "",
  //         price: "",
  //         deliveryTime: "",
  //       },
  //       premium: {
  //         header: "",
  //         shortDescription: "",
  //         price: "",
  //         deliveryTime: "",
  //       },
  //     },
  //   });
  // };

  const handleBackgroundChange = (files) => {
    setServiceBackground([...serviceBackground, ...files]);
  };

  const handleRemoveBackground = (index) => {
    setServiceBackground(serviceBackground.filter((_, i) => i !== index));
  };

  const handlePricingPackageChange = (plan, field, value, type = "starter") => {
    setPricingPackages((prevPackages) => {
      if (type === "professional") {
        return {
          ...prevPackages,
          professional: {
            ...prevPackages.professional,
            [plan]: {
              ...prevPackages.professional[plan],
              [field]: value,
            },
          },
        };
      }
      return {
        ...prevPackages,
        [plan]: { ...prevPackages[plan], [field]: value },
      };
    });
  };

  const pricingTypes = [
    { value: "starter", label: "Starter" },
    { value: "professional", label: "Professional" },
  ];

  return (
    <Fragment>
      <section className="py-6 py-lg-14 bg-white">
        <Container>
          <Row>
            <Col md={12}>
              <Col lg={6} className="mb-12">
                <h3
                  className="display-4 mb-3 fw-bold"
                  style={{ color: "#754ffe" }}
                >
                  Post a Service
                </h3>
                <p className="mb-4 lead">
                  Empower Your Career: Share Your Expertise with Global Clients
                  on Our Platform!
                </p>
              </Col>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={4} className="mb-3">
                    <div className="mb-4 mt-4">
                      {/* icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="currentColor"
                        className="bi bi-person text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0
                        6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4
                        8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6
                        4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516
                        10.68 10.289 10 8 10c-2.29
                        0-3.516.68-4.168 1.332-.678.678-.83
                        1.418-.832 1.664h10z"
                        />
                      </svg>
                    </div>
                    <h3 className="display-5" style={{ color: "#754ffe" }}>
                      Service Details
                    </h3>
                    <p className="text-muted">
                      Provide the details of your service.
                    </p>
                  </Col>
                  <Col md={8} className="mb-8">
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-4 justify-content-center"
                    >
                      <Col md={9} className="mb-3">
                        <Form.Label md={4} htmlFor="header">
                          Header<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="d-flex">
                          <Form.Select
                            value={prefix}
                            onChange={(e) => setPrefix(e.target.value)}
                            style={{
                              marginRight: "0",
                              paddingRight: "0",
                              maxWidth: "150px",
                              borderTopRightRadius: "0",
                              borderBottomRightRadius: "0",
                            }}
                          >
                            <option value="I will">I will</option>
                            <option value="Our Agency will">
                              Our Agency will
                            </option>
                          </Form.Select>
                          <Form.Control
                            type="text"
                            id="header"
                            placeholder="Enter header"
                            value={header}
                            onChange={(e) => setHeader(e.target.value)}
                            required
                            style={{
                              marginLeft: "0",
                              paddingLeft: "10px",
                              borderTopLeftRadius: "0",
                              borderBottomLeftRadius: "0",
                            }}
                          />
                        </div>
                      </Col>
                      <Col md={9} className="mb-3">
                        <Form.Label md={4} htmlFor="description">
                          Description<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          id="description"
                          rows={4}
                          placeholder="Enter description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </Col>
                      <Col md={5} className="mb-3">
                        <Form.Label md={2} htmlFor="department">
                          Department<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          as="select"
                          id="department"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          required
                        >
                          {departments.map((dept, index) => (
                            <option key={index} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Label md={2} htmlFor="format">
                          Format<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          as="select"
                          id="format"
                          defaultValue="Select Format"
                          value={format}
                          onChange={(e) => setFormat(e.target.value)}
                          required
                        >
                          {formatType.map((dept, index) => (
                            <option key={index} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={9} className="mb-3">
                        <Form.Label md={4} htmlFor="serviceBackground">
                          Service Background{" "}
                          <small className="text-muted">
                            <em className="text-sm">
                              (image files only: png, jpeg, jpg, etc....)
                            </em>
                          </small>
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) =>
                            handleBackgroundChange(e.target.files)
                          }
                        />
                        <div style={{ marginTop: "0.5rem" }}>
                          {serviceBackground.map((image, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                              className="d-inline-flex"
                            >
                              <img
                                src={URL.createObjectURL(image)}
                                alt={`Background ${index}`}
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  marginRight: "1px",
                                }}
                              />
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleRemoveBackground(index)}
                                style={{ marginRight: "10px" }}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Form.Group>
                  </Col>
                  <hr style={{ color: "#754ffe" }} />
                  {/* Pricing Section */}
                  <Col md={4} className="mb-3 mt-4">
                    <div className="mb-4">
                      <MdPayments
                        style={{ color: "#754ffe", width: 30, height: 30 }}
                      />
                    </div>
                    <h3 className="display-5" style={{ color: "#754ffe" }}>
                      Pricing
                    </h3>
                    <p className="text-muted">
                      Define the pricing for your service.
                    </p>
                  </Col>
                  <Col md={8}>
                    <Form.Group
                      as={Row}
                      className="mb-3 mt-4 justify-content-center"
                    >
                      <Col md={5}>
                        <Form.Label md={2} htmlFor="currency">
                          Currency<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          as="select"
                          id="currency"
                          placeholder="Enter currency"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                          required
                        >
                          {currencyType.map((currency, index) => (
                            <option key={index} value={currency.value}>
                              {currency.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={5}>
                        <Form.Label md={4} htmlFor="pricingPlan">
                          Pricing Plan<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          as="select"
                          id="pricingPlan"
                          value={pricingPlan}
                          onChange={(e) => setPricingPlan(e.target.value)}
                          required
                        >
                          {pricingTypes.map((plan, index) => (
                            <option key={index} value={plan.value}>
                              {plan.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3"></Form.Group>
                    {pricingPlan === "starter" ? (
                      <div>
                        <h2
                          className="text-center"
                          style={{ color: "#754ffe" }}
                        >
                          Starter Plan
                        </h2>
                        <Form.Group
                          as={Row}
                          className="mb-3 justify-content-center"
                        >
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="starterHeader">
                              Header<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="starterHeader"
                              placeholder="Enter header"
                              value={pricingPackages.starter.header}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "header",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label
                              md={4}
                              htmlFor="starterShortDescription"
                            >
                              Short Description
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="starterShortDescription"
                              placeholder="Enter short description"
                              value={pricingPackages.starter.shortDescription}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "shortDescription",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="starterPrice">
                              Price<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="starterPrice"
                              placeholder="Enter price"
                              value={pricingPackages.starter.price}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "price",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="starterDeliveryTime">
                              Delivery Time
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="starterDeliveryTime"
                              placeholder="Enter delivery time"
                              value={pricingPackages.starter.deliveryTime}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "deliveryTime",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Label md={2} htmlFor="package type">
                              Package Type
                              <small className="text-muted">
                                <em>
                                  (Allow single/multiple services per plan.)
                                </em>
                              </small>
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              as="select"
                              id="packageType"
                              placeholder="Enter Package type"
                              value={pricingPackages.starter.packageType}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "packageType",
                                  e.target.value
                                )
                              }
                              required
                            >
                              {packageOption.map((packageV, index) => (
                                <option key={index} value={packageV.value}>
                                  {packageV.label}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col md={4} className="mb-3">
                            <Form.Label md={4} htmlFor="CopyrightPrice">
                              Copyright Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="CopyrightPrice"
                              placeholder="Enter Copyright price"
                              value={pricingPackages.starter.copyright}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "copyright",
                                  e.target.value
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="Fdd">
                              Fast-1-day delivery price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Fast-1-day"
                              placeholder="Enter price"
                              value={pricingPackages.starter.fdd}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "fdd",
                                  e.target.value
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="additionalRevision">
                              Additional Revision Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Additional-revision"
                              placeholder="Enter price"
                              value={pricingPackages.starter.additionalRevision}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "starter",
                                  "additionalRevision",
                                  e.target.value
                                )
                              }
                            />
                          </Col>
                        </Form.Group>
                      </div>
                    ) : (
                      <>
                        <h2
                          className="text-center"
                          style={{ color: "#754ffe" }}
                        >
                          Professional Plan
                        </h2>
                        <Form.Group
                          as={Row}
                          className="mb-3 mt-4 justify-content-center"
                        >
                          <h3
                            className="text-center mb-2"
                            style={{ color: "#754ffe" }}
                          >
                            BASIC
                          </h3>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="basicHeader">
                              Basic Header<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="basicHeader"
                              placeholder="Enter header"
                              value={pricingPackages.professional.basic.header}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "header",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="basicShortDescription">
                              Short Description
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="basicShortDescription"
                              placeholder="Enter short description"
                              value={
                                pricingPackages.professional.basic
                                  .shortDescription
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "shortDescription",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="basicPrice">
                              Price<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="basicPrice"
                              placeholder="Enter price"
                              value={pricingPackages.professional.basic.price}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "price",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="basicDeliveryTime">
                              Delivery Time
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="basicDeliveryTime"
                              placeholder="Enter delivery time"
                              value={
                                pricingPackages.professional.basic.deliveryTime
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "deliveryTime",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Label md={2} htmlFor="package type">
                              Package Type
                              <small className="text-muted">
                                <em>
                                  (Allow single/multiple services per plan.)
                                </em>
                              </small>
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              as="select"
                              id="packageType"
                              placeholder="Enter Package type"
                              value={
                                pricingPackages.professional.basic.packageType
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "packageType",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            >
                              {packageOption.map((packageV, index) => (
                                <option key={index} value={packageV.value}>
                                  {packageV.label}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col md={4} className="mb-3">
                            <Form.Label md={4} htmlFor="CopyrightPrice">
                              Copyright Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="CopyrightPrice"
                              placeholder="Enter Copyright price"
                              value={
                                pricingPackages.professional.basic.copyright
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "copyright",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="Fdd">
                              Fast-1-day delivery price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Fast-1-day"
                              placeholder="Enter price"
                              value={pricingPackages.professional.basic.fdd}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "fdd",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="additionalRevision">
                              Additional Revision Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Additional-revision"
                              placeholder="Enter price"
                              value={
                                pricingPackages.professional.basic
                                  .additionalRevision
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "basic",
                                  "additionalRevision",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group
                          as={Row}
                          className="mb-3 mt-4 justify-content-center"
                        >
                          <h3
                            className="text-center mb-2 "
                            style={{ color: "#754ffe" }}
                          >
                            STANDARD
                          </h3>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="standardHeader">
                              Standard Header
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="standardHeader"
                              placeholder="Enter header"
                              value={
                                pricingPackages.professional.standard.header
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "header",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label
                              md={4}
                              htmlFor="standardShortDescription"
                            >
                              Short Description
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="standardShortDescription"
                              placeholder="Enter short description"
                              value={
                                pricingPackages.professional.standard
                                  .shortDescription
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "shortDescription",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="standardPrice">
                              Price<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="standardPrice"
                              placeholder="Enter price"
                              value={
                                pricingPackages.professional.standard.price
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "price",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="standardDeliveryTime">
                              Delivery Time
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="standardDeliveryTime"
                              placeholder="Enter delivery time"
                              value={
                                pricingPackages.professional.standard
                                  .deliveryTime
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "deliveryTime",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Label md={2} htmlFor="package type">
                              Package Type
                              <small className="text-muted">
                                <em>
                                  (Allow single/multiple services per plan.)
                                </em>
                              </small>
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              as="select"
                              id="packageType"
                              placeholder="Enter Package type"
                              value={
                                pricingPackages.professional.standard
                                  .packageType
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "packageType",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            >
                              {packageOption.map((packageV, index) => (
                                <option key={index} value={packageV.value}>
                                  {packageV.label}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col md={4} className="mb-3">
                            <Form.Label md={4} htmlFor="CopyrightPrice">
                              Copyright Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="CopyrightPrice"
                              placeholder="Enter Copyright price"
                              value={
                                pricingPackages.professional.standard.copyright
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "copyright",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="Fdd">
                              Fast-1-day delivery price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Fast-1-day"
                              placeholder="Enter price"
                              value={pricingPackages.professional.standard.fdd}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "fdd",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="additionalRevision">
                              Additional Revision Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Additional-revision"
                              placeholder="Enter price"
                              value={
                                pricingPackages.professional.standard
                                  .additionalRevision
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "standard",
                                  "additionalRevision",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group
                          as={Row}
                          className="mb-3 mt-4 justify-content-center"
                        >
                          <h3
                            className="text-center"
                            style={{ color: "#754ffe" }}
                          >
                            PREMIUM
                          </h3>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="premiumHeader">
                              Premium Header
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="premiumHeader"
                              placeholder="Enter header"
                              value={
                                pricingPackages.professional.premium.header
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "header",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label
                              md={4}
                              htmlFor="premiumShortDescription"
                            >
                              Short Description
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="premiumShortDescription"
                              placeholder="Enter short description"
                              value={
                                pricingPackages.professional.premium
                                  .shortDescription
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "shortDescription",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="premiumPrice">
                              Price<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="premiumPrice"
                              placeholder="Enter price"
                              value={pricingPackages.professional.premium.price}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "price",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="premiumDeliveryTime">
                              Delivery Time
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="premiumDeliveryTime"
                              placeholder="Enter delivery time"
                              value={
                                pricingPackages.professional.premium
                                  .deliveryTime
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "deliveryTime",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Label md={2} htmlFor="package type">
                              Package Type
                              <small className="text-muted">
                                <em>
                                  (Allow single/multiple services per plan.)
                                </em>
                              </small>
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              as="select"
                              id="packageType"
                              placeholder="Enter Package type"
                              value={
                                pricingPackages.professional.premium.packageType
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "packageType",
                                  e.target.value,
                                  "professional"
                                )
                              }
                              required
                            >
                              {packageOption.map((packageV, index) => (
                                <option key={index} value={packageV.value}>
                                  {packageV.label}
                                </option>
                              ))}
                            </Form.Select>
                          </Col>
                          <Col md={4} className="mb-3">
                            <Form.Label md={4} htmlFor="CopyrightPrice">
                              Copyright Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="CopyrightPrice"
                              placeholder="Enter Copyright price"
                              value={
                                pricingPackages.professional.premium.copyright
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "copyright",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="Fdd">
                              Fast-1-day delivery price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Fast-1-day"
                              placeholder="Enter price"
                              value={pricingPackages.professional.premium.fdd}
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "fdd",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                          <Col md={5} className="mb-3">
                            <Form.Label md={4} htmlFor="additionalRevision">
                              Additional Revision Price
                              <small className="text-muted">
                                <em>(optional)</em>
                              </small>
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="Additional-revision"
                              placeholder="Enter price"
                              value={
                                pricingPackages.professional.premium
                                  .additionalRevision
                              }
                              onChange={(e) =>
                                handlePricingPackageChange(
                                  "premium",
                                  "additionalRevision",
                                  e.target.value,
                                  "professional"
                                )
                              }
                            />
                          </Col>
                        </Form.Group>
                      </>
                    )}
                  </Col>
                  <Col md={12} className="text-end mb-3">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        padding: "10px 16px",
                        fontSize: "1rem",
                        marginRight: "70px",
                      }}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Submit"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default PostService;
