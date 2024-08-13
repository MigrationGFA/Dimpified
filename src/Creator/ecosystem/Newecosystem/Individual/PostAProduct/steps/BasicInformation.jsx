import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FormSelect } from "../../../../../../Components/elements/form-select/FormSelect2";
import { useDispatch, useSelector } from "react-redux";
import { updateProductData } from "../../../../../../features/product";
import categorySubSection from '../SectionJson';

const BasicInformation = ({ handleNext }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [isOtherCategory, setIsOtherCategory] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProductData({ [name]: value }));
    
    if (name === "category") {
      if (value === "Other") {
        setIsOtherCategory(true);
        setSubCategoryOptions([]);
      } else {
        setIsOtherCategory(false);
        const subCategories = categorySubSection[value] || [];
        setSubCategoryOptions(subCategories.map(subCat => ({ value: subCat, label: subCat })));
      }
    }
  };

  useEffect(() => {
    if (product.category && product.category !== "Other") {
      const subCategories = categorySubSection[product.category] || [];
      setSubCategoryOptions(subCategories.map(subCat => ({ value: subCat, label: subCat })));
    }
  }, [product.category]);

  useEffect(() => {}, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const categoryOptions = [
    ...Object.keys(categorySubSection).map(cat => ({ value: cat, label: cat })),
    { value: "Other", label: "Other" }
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
              selectedValue={product.category}
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
                value={product.subCategory } 
                onChange={handleChange}
                required
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label>SubCategory</Form.Label>
              <FormSelect
                placeholder="Select SubCategory"
                selectedValue={product.subCategory} 
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