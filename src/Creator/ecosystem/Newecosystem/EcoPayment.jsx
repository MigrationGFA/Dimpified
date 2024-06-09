import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SizeSelect } from "../../../Components/elements/form-select/SizeSelect";
import pricingData from "./PricingData";
import EcoHeader from "./ecoHeader";

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

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);
  };

  const handlePrevious = () => {
    navigate("/creator/dashboard/Integrations");
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
  

  const renderPlanCard = (plan) => {
    if (plan.name === "Lite") {
      return (
        <Col md={3} className="mb-4" key={plan.name}>
          <Card style={{ height: '400px', overflow: 'hidden' }}>
            <Card.Body>
            <Card.Title style={{ fontSize: '1.5rem' }}>Lite</Card.Title>
              <Card.Text>{getPlanDescription(plan.name)}</Card.Text>
              <h2>Free</h2>
              <Button variant="primary" className="mt-3 w-100">
                Sign Up 
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    }
  
    return (
      <Col md={3} className="mb-4" key={plan.name}>
        <Card style={{ height: '400px', overflow: 'hidden' }}>
          <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem' }}>{plan.name}</Card.Title>
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
                return (
                  <p key={`${plan.name}-${selectedPlan}-${selectedSize}`} className=" mt-5">
                    $
                    <span className="mx-1 h2">{pricingPlan.prices[selectedSize]?.[selectedPlan] || "N/A"}</span>/ {selectedPlan}
                  </p>
                );
              }
              return null;
            })}
            <Button variant="primary" className="mt-3 w-100">
              Sign Up Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  
  return (
    <div>
      <EcoHeader />
      <Container className="mt-5">
        <h2 className="text-center mb-4">Choose Your Plan</h2>
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
        <div className="d-flex justify-content-between">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          className="mt-4"
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleSkipAndContinue}
          className="mt-4"
        >
          Continue
        </Button>

        </div>
        
      </Container>
    </div>
  );
};

export default EcoPayment;
