import React, { useState, useEffect } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import { FormSelect } from "../../../Components/elements/form-select/FormSelect";
// import ReactQuillEditor from '../../Components/elements/editor/ReactQuillEditor';
import { showToast } from "../../../Components/Showtoast";

const BasicInformation = ({ handleNext }) => {
  // Define state variables
  const [formData, setFormData] = useState({
    courseTitle: "",
    category: "",
    level: "",
    type: "",
    price: "",
    description: "",
    currency: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Retrieve form data from sessionStorage and populate the state
    const storedFormData = {
      courseTitle: sessionStorage.getItem("courseTitle") || "",
      category: sessionStorage.getItem("category") || "",
      level: sessionStorage.getItem("level") || "",
      type: sessionStorage.getItem("type") || "",
      price: sessionStorage.getItem("price") || "",
      currency: sessionStorage.getItem("currency") || "",
      description: sessionStorage.getItem("description") || "",
    };
    console.log("this is storedDate", storedFormData);
    setFormData(storedFormData);
  }, []); // Run this effect only once when the component mounts

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    const { courseTitle, category, level, type, price, description, currency } =
      formData;
    if (
      courseTitle &&
      category &&
      level &&
      type &&
      price &&
      description &&
      currency
    ) {
      // Save form data to session storage
      sessionStorage.setItem("courseTitle", courseTitle);
      sessionStorage.setItem("category", category);
      sessionStorage.setItem("level", level);
      sessionStorage.setItem("type", type);
      sessionStorage.setItem("price", price);
      sessionStorage.setItem("description", description);
      sessionStorage.setItem("currency", currency);
      // Proceed to the next step or perform any other action
      handleNext();
    } else {
      showToast("Please complete the form");
    }
  };

  // Define options for form select inputs
  const categoryOptions = [
    { value: "Business And Finance", label: "Business And Finance" },
    { value: "Web Development", label: "Web Development" },
    { value: "Frontend Development", label: "Frontend Development" },
    { value: "Backend Development", label: "Backend Development" },
    {
      value: "financing-sources-for-african-startups",
      label: "financing-sources-for-african-startups",
    },
    { value: "Emotional Intelligence", label: "Emotional Intelligence" },
    { value: "Hr for Non Hr", label: "Hr for Non Hr" },
    { value: "Africa History", label: "Africa History" },
    { value: "Investor readiness course", label: "Investor readiness course" },
  ];

  const coursesLevelOptions = [
    { value: "beginner", label: "beginner" },
    { value: "intermediate", label: "intermediate" },
    { value: "advanced", label: "advanced" },
  ];

  const coursesTypeOptions = [
    { value: "Video", label: "Video" },
    { value: "Audio", label: "Audio" },
    { value: "Document", label: "Document" },
  ];
  const courseCurrency = [
    { value: "NGN", label: "Naira" },
    { value: "EUR", label: "Euros" },
    { value: "USD", label: "Dollars" },
    { value: "GBP", label: "Pounds" },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="mb-3">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Basic Information</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="courseTitle">Course Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course Title"
              id="course_title"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <FormSelect
              options={categoryOptions}
              id="category_category"
              name="category"
              placeholder="Select Category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Level</Form.Label>
            <FormSelect
              options={coursesLevelOptions}
              id="courses_level"
              name="level"
              placeholder="Select level"
              value={formData.level}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Type</Form.Label>
            <FormSelect
              options={coursesTypeOptions}
              id="courses_type"
              name="type"
              placeholder="Select type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Course Price"
              id="course_price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Currency</Form.Label>
            <FormSelect
              options={courseCurrency}
              placeholder="select currency"
              id="course_currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              id="course_description"
              name="description"
              placeholder="Course Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Card.Body>
      </Card>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default BasicInformation;
