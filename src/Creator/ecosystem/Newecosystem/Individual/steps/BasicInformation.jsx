import React, { useState, useEffect } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import { FormSelect } from "../../../../../Components/elements/form-select/FormSelect2";
import { useDispatch, useSelector } from "react-redux";
import { updateCourseData } from "../../../../../features/course";
import categorySubSection from "../../../Newecosystem/PostAService/SectionJson";

const BasicInformation = ({ handleNext }) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [isOtherCategory, setIsOtherCategory] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCourseData({ [name]: value }));

    if (name === "category") {
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
    if (course.category && course.category !== "Other") {
      const subCategories = categorySubSection[course.category] || [];
      setSubCategoryOptions(
        subCategories.map((subCat) => ({ value: subCat, label: subCat }))
      );
    }
  }, [course.category]);

  const categoryOptions = [
    ...Object.keys(categorySubSection).map((cat) => ({
      value: cat,
      label: cat,
    })),
    { value: "Other", label: "Other" },
  ];

  useEffect(() => {}, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };
  // Define options for form select inputs

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
              value={course.courseTitle}
              onChange={handleChange}
              required
            />
          </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <FormSelect
                placeholder="Select Category"
                selectedValue={course.category}
                options={categoryOptions}
                id="category"
                name="category"
                onChange={handleChange}
                required
              />
            </Form.Group>
            {isOtherCategory ? (
              <Form.Group className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter SubCategory"
                  id="subCategory"
                  name="subCategory"
                  value={course.subCategory}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3">
                <Form.Label>SubCategory</Form.Label>
                <FormSelect
                  placeholder="Select SubCategory"
                  selectedValue={course.subCategory}
                  options={subCategoryOptions}
                  id="subCategory"
                  name="subCategory"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}
          <Form.Group className="mb-3">
            <Form.Label>Course Level</Form.Label>
            <FormSelect
              options={coursesLevelOptions}
              id="courses_level"
              name="level"
              placeholder="Select level"
              selectedValue={course.level}
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
              selectedValue={course.type}
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
              value={course.price}
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
              selectedValue={course.currency}
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
              value={course.description}
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
