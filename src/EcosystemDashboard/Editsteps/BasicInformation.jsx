// import node module libraries
import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";

// import custom components
import { FormSelect } from "../../Components/elements/form-select/FormSelect";
// import ReactQuillEditor from "../../Components/elements/editor/ReactQuillEditor";

const BasicInformation = (props) => {
	  // Define state variables
	  const [courseTitle, setCourseTitle] = useState('');
	  const [category, setCategory] = useState('');
	  const [level, setLevel] = useState('');
	  const [type, setType] = useState('');
	  const [description, setDescription] = useState('');
	  const [price, setPrice] = useState('');
  const { next } = props;

  const categoryOptions = [
    { value: "Business And Finance", label: "Business And Finance" },
    { value: "Web Development", label: "Web Developmentt" },
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

  const CoursesLevel = [
    { value: "Beignners", label: "Beignners" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advance", label: "Advance" },
  ];
  const CoursesType = [
    { value: "Video", label: "Video" },
    { value: "Audio", label: "Audio" },
    { value: "Document", label: "Document" },
  ];

  const initialValue = `<p>Insert course description</p>
                      <p><br /></p>        
                      <p>Some initial <strong>bold</strong> text</p>
                      <p><br /></p><p><br /></p><p><br /></p><p><br /></p>`;

  return (
    <Form>
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
              name="course_title"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
            <Form.Text className="text-muted">
              Write a 60 character course title.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <FormSelect
              options={categoryOptions}
              id="category_category"
              name="category_category"
              placeholder="Select Category"
              value={category}
              onChange={(value) => setCategory(value)}
            />
            <Form.Text className="text-muted">
              Help people find your courses by choosing categories that
              represent your course.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Level</Form.Label>
            <FormSelect
              options={CoursesLevel}
              id="courses_level"
              name="courses_level"
              placeholder="Select level"
              value={level}
              onChange={(value) => setLevel(value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Type</Form.Label>
            <FormSelect
              options={CoursesType}
              id="courses_level"
              name="courses_level"
              placeholder="Select type"
              value={type}
              onChange={(value) => setType(value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Price (₦)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course Price"
              id="course_price"
              name="course_price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Description</Form.Label>
            {/* <ReactQuillEditor
              initialValue={initialValue}
              id="course_description"
              name="course_description"
              value={description}
              onChange={(value) => setDescription(value)}
            /> */}
            <Form.Text className="text-muted">
              A brief summary of your courses.
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={next}>
        Next
      </Button>
    </Form>
  );
};
export default BasicInformation;
