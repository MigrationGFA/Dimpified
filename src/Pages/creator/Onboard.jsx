import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Categories from "../../data/CreatorInterest";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { useNavigate } from "react-router-dom";
import { FormSelect } from "../../Components/elements/form-select/FormSelect";
import Ecosystem from "../../assets/ecosystem.png";
import { useSelector } from "react-redux";

const Onboard = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState(null);
  const handleCategoryClick = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const navigate = useNavigate();
  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/onboarding`,
        {
          userId: userId,
          categoryInterest: selectedCategories,
          numberOfTargetAudience: department,
        }
      );
      setLoading(false);
      showToast(response.data.message);
      navigate("/creator/OnboardTwo");
    } catch (error) {
      setLoading(false);
      showToast(error.response.message);
    }
  };

  const departments = [
    // { value: "1 - 1000", label: "1 - 1000" },
    // { value: "1001 - 5000", label: "1001 - 5000" },
    // { value: "5000 - 10,000", label: "5000 - 10,000" },
    // { value: "10,001 - 20,000", label: "10,001 - 20,000" },
    // { value: "20,001 - 50,000", label: "20,001 - 50,000" },
    // { value: "50,001 - 100,000", label: "50,001 - 100,000" },
    // { value: "100,001 - 250,000", label: "100,001 - 250,000" },
    // { value: "250,001 - 500,000", label: "250,001 - 500,000" },
    // { value: "500,001 - 1,000,000", label: "500,001 - 1,000,000" },
    // { value: "1,000,001 & More", label: "1,000,001 & More" },
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

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center vh-100"
          style={{ paddingLeft: "0px" }}
        >
          <div>
            <img
              src={Ecosystem}
              alt="Onboarding"
              className="img-fluid vh-100 vw-100"
            />
          </div>
        </Col>
        <Col md={6} className="overflow-auto vh-100">
          <Card className="border border-primary mt-5 mx-1 mx-sm-2 mx-md-4 mx-lg-5">
            <Card.Body>
              <div className="d-flex justify-content-center mb-4">
                <div className="d-flex align-items-center w-100">
                  <hr
                    className="flex-grow-1 me-2 rounded-3"
                    style={{ border: "5px solid blue", height: "5px" }}
                  />
                  <hr
                    className="flex-grow-1 ms-2 rounded-3"
                    style={{ border: "5px solid lightgray", height: "5px" }}
                  />
                </div>
              </div>
              <h2 className="mb-4">
                Select at least one use case
                <span className="text-danger">*</span>
              </h2>
              <div className="d-flex flex-wrap justify-content-center">
                {Categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategories.includes(category.name)
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => handleCategoryClick(category.name)}
                    className="me-1 mb-2"
                    style={{ borderRadius: "0.5rem", fontSize: "0.8rem" }}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              <Col md={12} xs={12} className="mb-3 mt-5">
                <h2 htmlFor="department">
                  Select Target Audience
                  <span className="text-danger">*</span>
                </h2>
                <Form.Control
                  as={FormSelect}
                  options={departments}
                  placeholder="Select Target Audience"
                  defaultValue=""
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </Col>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
              {loading ? (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  style={{ opacity: ".7" }}
                  disabled
                >
                  Processing
                </Button>
              ) : (
                <Button
                  variant="primary"
                  disabled={
                    selectedCategories.length === 0 || department === null
                  }
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Onboard;
