import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Categories from "../../data/CreatorInterest";
import axios from "axios";
import { useGlobalContext } from "../../context/AuthContext";
import { showToast } from "../../Components/Showtoast";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { userId } = useGlobalContext();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const response = await axios.post(
        `https://unleashified-backend.azurewebsites.net/api/v1/save-interest/${userId}`,
        { interests: selectedCategories }
      );
      setLoading(false);
      showToast(response.data.message);
      navigate("/JobSeeker");
    } catch (error) {
      setLoading(false);
      showToast(error.response.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center  ">
      <Card className="border border-primary mt-10 mb-10 mx-1 mx-sm-2 mx-md-4 mx-lg-12 ">
        <Card.Body>
          <Card.Title className="text-center mb-4 ">
            Select at least a Reason you will like to create ecosystem
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
                style={{ borderRadius: "0.5rem", fontSize: "1rem" }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end ">
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
              disabled={selectedCategories.length === 0}
              onClick={handleSubmit}
            >
              Next
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Onboard;
