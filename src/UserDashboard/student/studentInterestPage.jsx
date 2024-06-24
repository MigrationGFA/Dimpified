import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Categories from "../data/Course/courseCategories";
import axios from "axios";
import { useGlobalContext } from "../context/AuthContext";
import { showToast } from "../Components/Showtoast";
import { useNavigate } from "react-router-dom";

const StudentInterestPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { userId } = useGlobalContext();

  // Function to handle selecting or unselecting a category
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
    console.log("Selected Categories:", selectedCategories);
    try {
      const response = await axios.post(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/save-interest/${userId}`,
        { interests: selectedCategories }
      );

      showToast(response.data.message);
      navigate("/student");
    } catch (error) {
      showToast(error.response.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            Select Your Interests
          </Card.Title>
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
                className="me-2 mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between ">
          <Button variant="secondary" onClick={() => console.log("Skip")}>
            Skip
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="ml-3">
            Next
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default StudentInterestPage;
