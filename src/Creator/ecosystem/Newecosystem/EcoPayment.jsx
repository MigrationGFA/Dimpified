import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SizeSelect } from "../../../Components/elements/form-select/SizeSelect";
import pricingData from "./PricingData";
import EcoHeader from "./ecoHeader";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { useSelector } from "react-redux";

// import FAQsData from "./FAQsData";

import { FaCheck, FaTimes } from "react-icons/fa";

const options = [
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

const EcoPayment = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(options[0].value);
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const user = useSelector((state) => state.authentication.user);
  const username = user?.data?.organizationName || "Unknown User";
  const Email = user?.data?.email || "No email";

  // flutterwave payment
  const generateTxRef = () => {
    const randomString = Math.random().toString(36).substring(7); // Generate a random string
    const timestamp = Date.now(); // Get the current timestamp
    return `${timestamp}-${randomString}`; // Combine timestamp and random string
  };

  const handleFlutterPayment = useFlutterwave({
    public_key: "FLWPUBK-66d8ea488d57ba291013b93eae8bc3e8-X",
    tx_ref: generateTxRef(),
    amount: parseInt(sessionStorage.getItem("totalAmount")), // Default value, will be overwritten
    currency: sessionStorage.getItem("currencyValue"),
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: Email,
      phone_number: "09064000000",
      name: username,
    },
    customizations: {
      title: "Dimpified Plan Payment",
      description: "Payment for Plan Upgrade",
      logo: "https://res.cloudinary.com/djhnaee9k/image/upload/v1714038296/et5gicqtnuw4u1tqujjr.png",
    },
  });

  const verifyFlutterwave = async (tx_ref) => {
    sessionStorage.removeItem("totalAmount");
    try {
      const response = await axios.post(
        "https://unleashified-backend.azurewebsites.net/api/v1/provider-payment",
        {
          reference: tx_ref,
          email: emailUser,
          jobId: sessionStorage.getItem("jobId"),
          userId: sessionStorage.getItem("UserId"),
          type: "JOB",
          currency: sessionStorage.getItem("currencyValue"),
          provider: "flutterwave",
        }
      );
      setLoading(false);
      showToast(response.data.message);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);
  };

  const handleSkipAndContinue = () => {
    navigate("/creator/dashboard/Preview-and-Send");
  };

  const getPlanDescription = (plan) => {
    switch (plan) {
      case "Lite":
        return "All the core features you need to get started with our ecosystem";
      case "Plus":
        return "Enhanced features to grow within our ecosystem";
      case "Pro":
        return "Professional tools for maximum impact in our ecosystem";
      case "Extra":
        return "Unlimited features for enterprise-level ecosystem integration";
      default:
        return "";
    }
  };

  const getPlanFeatures = (plan) => {
    const features = {
      Lite: {
        Website: [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
        ],
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: false },
          { feature: "Custom domain", available: false },
          { feature: "Remove GFA brand from landing page", available: false },
        ],
        "Forms Design & Development": [
          { feature: "1 form per ecosystem project", available: true },
          { feature: "3 Usecase form templates", available: true },
          { feature: "10 questions per form", available: true },
          { feature: "Premium form templates", available: false },

          { feature: "Remove GFA brand from form", available: false },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "1 courses per ecosystem deployment", available: true },

          { feature: "Assessment builder module", available: false },
          { feature: "Statistics & visualization", available: false },

          { feature: "Exams & Quizzes", available: false },
          { feature: "Zoom, Teams or Webex Integration", available: false },
        ],
        "Payment and Subscriptions": [
          { feature: "1 payment gateway", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },

          { feature: "Multi-currency module", available: false },
          { feature: "Flexible pricing module", available: false },
        ],
        Emails: [
          { feature: "Up to 15000 emails per month", available: true },
          { feature: "100 MB of image storage", available: true },
          { feature: "3 sender email addresses, 1 domain", available: true },
        ],
        "Admin Users": [
          { feature: "3 Admin Users per account", available: true },
        ],
      },
      Plus: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: false },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          { feature: "10 forms per ecosystem project", available: true },
          { feature: "10 Usecase form templates", available: true },
          { feature: "10 Premium form templates", available: true },
          { feature: "10 questions per form", available: true },
          { feature: "Remove GFA brand from form", available: false },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "10 courses per ecosystem deployment", available: true },
          { feature: "Statistics & visualization", available: false },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "3 payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: false },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "200 MB of image storage", available: true },
          { feature: "100 sender email addresses, 3 domain", available: true },
        ],
        "Admin Users": [
          { feature: "10 Admin Users per account", available: true },
        ],
      },
      Pro: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: true },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          { feature: "20 forms per ecosystem project", available: true },
          { feature: "20 Usecase form templates", available: true },
          { feature: "20 Premium form templates", available: true },
          { feature: "20 questions per form", available: true },
          { feature: "Remove GFA brand from form", available: true },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "Statistics & visualization", available: true },
          { feature: "10 courses per ecosystem deployment", available: true },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "6 payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: true },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "500 MB of image storage", available: true },
          { feature: "300 sender email addresses, 5 domains", available: true },
        ],
        "Admin Users": [
          { feature: "25 Admin Users per account", available: true },
        ],
      },
      Extra: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: true },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          {
            feature: "Unlimited Number of forms per ecosystem project",
            available: true,
          },
          {
            feature: "Unlimited Number of Usecase form templates",
            available: true,
          },
          {
            feature: "Unlimited Number of Premium form templates",
            available: true,
          },
          {
            feature: "Unlimited Number of questions per form",
            available: true,
          },
          { feature: "Remove GFA brand from form", available: true },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "Statistics & visualization", available: true },
          {
            feature: "30 Number of courses per ecosystem deployment",
            available: true,
          },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "Unlimited Number of payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: true },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "5 GB of image storage", available: true },
          {
            feature: "Unlimited sender email addresses and domain",
            available: true,
          },
        ],
        "Admin Users": [
          { feature: "Unlimited number of Admin Users", available: true },
        ],
      },
    };

    return (
      <ul className="lh-3" style={{ listStyleType: "none", paddingLeft: 0 }}>
        {Object.keys(features[plan]).map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <h5 className="mt-6">{section}</h5>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {features[plan][section].map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.available ? (
                    <FaCheck color="green" className="fs-6" />
                  ) : (
                    <FaTimes color="red" />
                  )}{" "}
                  {item.feature}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const renderPlanCard = (plan) => {
    
  if (plan.name === "Lite") {
    const liteFeatures = getPlanFeatures(plan.name);
    const firstFourFeatures = liteFeatures.props.children.slice(0, 1);
    const remainingFeatures = liteFeatures.props.children.slice(1);

    return (
      <Col md={3} className="mb-4" key={plan.name}>
        <Card style={{ height: "1870px", overflow: "hidden" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>Lite</Card.Title>
            <Card.Text>{getPlanDescription(plan.name)}</Card.Text>
            <h2>Free</h2>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                visibility: "hidden",
              }}
            >
              {firstFourFeatures}
            </ul>

            <Button variant="primary" className="mt-3 w-100 btn-lg mb-3">
              Sign Up
            </Button>

            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {remainingFeatures}
            </ul>
            <Button
              variant="outline-primary"
              className="mt-3 w-100 btn-lg  mb-3"
            >
              Sign Up Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <Col md={3} className="mb-4" key={plan.name}>
      <Card
        className="border-0 mb-3"
        style={{ height: "1870px", overflow: "hidden" }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>{plan.name}</Card.Title>
          <Card.Text>{getPlanDescription(plan.name)}</Card.Text>
          <>
            <Form.Label>Choose the size of your list</Form.Label>
            <SizeSelect
              value={selectedSize}
              onChange={handleSizeChange}
              style={{ zIndex: 20 }}
              options={options}
            />
          </>
          {pricingData.plans.map((pricingPlan) => {
            if (pricingPlan.name === plan.name) {
              const price = pricingPlan.prices[selectedSize]?.[selectedPlan] || "N/A";
              return (
                <p
                  key={`${plan.name}-${selectedPlan}-${selectedSize}`}
                  className=" mt-5"
                >
                  ₦
                  <span className="mx-1 h2">
                    {price}
                  </span>{" "}
                  / {selectedPlan}
                </p>
              );
            }
            return null;
          })}
          <Button variant="primary" className="mt-3 w-100 btn-lg mb-3">
            Sign Up Now
          </Button>
          <Card.Text>{getPlanFeatures(plan.name)}</Card.Text>
          <Button
            variant="outline-primary"
            className="mt-3 w-100 btn-lg  mb-3"
          >
            Sign Up Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
  return (
    <Fragment>
      <EcoHeader />
      <section className="py-lg-5 py-3">
        <Container>
          {/* Page header */}
          <Row className="align-items-center">
            <Col xl={12} lg={12} md={12} sm={12}>
              <div className="mb-4 px-lg-1 px-1">
                <h1 className="display-4 text-dark fw-bold">
                  Choose your preferred plan
                </h1>
                <p className="display-8 text-dark">
                  Choose the best plan that suits your needs and get started
                  with our ecosystem.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Container className="">
          <Row>
            <Col
              md={12}
              className="mb-4 d-flex justify-content-end align-items-center gap-4"
            >
              <Form.Label className="mb-2">Billing Period:</Form.Label>
              <div className="d-flex gap-3">
                <Form.Check
                  type="radio"
                  id="monthly"
                  checked={selectedPlan === "Monthly"}
                  onChange={() => handlePlanChange("Monthly")}
                />
                <Form.Label htmlFor="monthly">Monthly</Form.Label>

                <Form.Check
                  type="radio"
                  id="sixMonths"
                  checked={selectedPlan === "6 Months"}
                  onChange={() => handlePlanChange("6 Months")}
                />
                <Form.Label htmlFor="sixMonths">6 Months</Form.Label>

                <Form.Check
                  type="radio"
                  id="annual"
                  checked={selectedPlan === "Annual"}
                  onChange={() => handlePlanChange("Annual")}
                />
                <Form.Label htmlFor="annual">Annual</Form.Label>
              </div>
            </Col>
          </Row>
          <Row>{pricingData.plans.map((plan) => renderPlanCard(plan))}</Row>
          <Button
            variant="primary"
            onClick={handleSkipAndContinue}
            className="mt-4 mb-5"
          >
            Continue
          </Button>
        </Container>
      </div>
      {/* <section className="bg-white py-lg-10 py-5"> */}
        {/* <Container>
          <Row>
            <Col md={12} sm={12}>
              <div className="mb-8 text-center">
                <h2 className="h1">Frequently Asked Questions</h2>
              </div>
            </Col>
          </Row> */}
          {/* <Row>
            {FAQsData.map((item, index) => (
              <Col lg={4} md={6} sm={12} className="mb-3" key={index}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </Col>
            ))}
            <Col md={12} sm={12} className="mt-lg-10 mt-4">
              <Card>
                <Card.Body>
                  <div className="d-lg-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Have other questions?</h4>
                    <span>
                      Send us a mail via:{" "}
                      <Link to="mailto:info@gfa-tech.com" target="_blank">
                        info@gfa-tech.com
                      </Link>
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        {/* </Container> */}
      {/* </section> */}
    </Fragment>
  );
};

export default EcoPayment;
