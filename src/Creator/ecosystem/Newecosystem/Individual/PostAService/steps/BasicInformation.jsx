import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FormSelect } from "../../../../../../Components/elements/form-select/FormSelect2";
import { useDispatch, useSelector } from "react-redux";
import { updateServiceData } from "../../../../../../features/service";
import categorySubSection from "../SectionJson";

const BasicInformation = ({ handleNext }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);
  const ecosystemDetail = useSelector((state) => state.ecosystem);

  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [isOtherCategory, setIsOtherCategory] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateServiceData({ [name]: value }));

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
    if (service.category && service.category !== "Other") {
      const subCategories = categorySubSection[service.category] || [];
      setSubCategoryOptions(
        subCategories.map((subCat) => ({ value: subCat, label: subCat }))
      );
    }
  }, [service.category]);

  useEffect(() => {}, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const categoryOptions = [
    ...Object.keys(categorySubSection).map((cat) => ({
      value: cat,
      label: cat,
    })),
    { value: "Other", label: "Other" },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="mb-3">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Basic Information</h4>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <FormSelect
              placeholder="Select Category"
              selectedValue={service.category}
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
                value={service.subCategory}
                onChange={handleChange}
                required
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label>SubCategory</Form.Label>
              <FormSelect
                placeholder="Select SubCategory"
                selectedValue={service.subCategory}
                options={subCategoryOptions}
                id="subCategory"
                name="subCategory"
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}
        </Card.Body>
      </Card>
      <Button variant="primary" type="submit">
        Next
      </Button>
    </Form>
  );
};

export default BasicInformation;
