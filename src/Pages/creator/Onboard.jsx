import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Categories from "../../data/CreatorInterest";
import axios from "axios";
import { useGlobalContext } from "../../context/AuthContext";
import { showToast } from "../../Components/Showtoast";
import { useNavigate } from "react-router-dom";
import { FormSelect } from "../../Components/elements/form-select/FormSelect";
import Ecosystem from "../../assets/ecosystem.png";

const Onboard = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { userId } = useGlobalContext();
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

  const handleSubmit = async () => {
    setLoading(true);
    const userId = sessionStorage.getItem("UserId");
    try {
      const response = await axios.post(
        `https://dimpified-backend.azurewebsites.net/api/v1/onboarding`,
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
