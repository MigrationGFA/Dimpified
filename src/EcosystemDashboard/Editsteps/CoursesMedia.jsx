import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";


import Select from "react-select";

const CoursesMedia = (props) => {
  const { next, previous } = props;
  const [selected, setSelected] = useState([]);

  const IncludedOptions = [
	{ value: "Certificate", label: "Certificate" },
	{ value: "Lifetime Access", label: "Lifetime Access" },
	{ value: "Student Mentorship", label: "Student Mentorship" },
	{ value: "Interactive Quizzes", label: "Interactive Quizzes" },
	{ value: "Discussion Forums", label: "Discussion Forums" },
	{ value: "Assignments and Projects", label: "Assignments and Projects" },
	{ value: "Live Q&A Sessions", label: "Live Q&A Sessions" },
	{ value: "Personalized Feedback", label: "Personalized Feedback" },
	{ value: "Additional Resources", label: "Additional Resources" },
	{ value: "Community Access", label: "Community Access" },
	{ value: "Progress Tracking", label: "Progress Tracking" },
  ];
  return (
    <Form>
      {/* Card */}
      <Card className="mb-3 border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Courses Media</h4>
        </Card.Header>
        {/* Card body */}
        <Card.Body>
          {/* Course cover image */}
          <Form.Label>Course cover image</Form.Label>
          <Form.Group className="mb-1 input-group">
            <Form.Control
              id="inputfavicon"
              type="file"
              className="form-control"
            />
            <Form.Label
              htmlFor="inputfavicon"
              className="input-group-text mb-0"
            >
              Upload
            </Form.Label>
            <Form.Text className="text-muted">
              Upload your course image here. It must meet our course image
              quality standards to be accepted. Important guidelines: 750x440
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </Form.Text>
          </Form.Group>

          {/* Course Video */}
          <Form.Label className=" mt-3">Course Content </Form.Label>
          <Form.Group className="mb-1 input-group">
            <Form.Control
              id="inputfavicon"
              type="file"
              className="form-control"
            />
            <Form.Label
              htmlFor="inputfavicon"
              className="input-group-text mb-0"
            >
              Upload
            </Form.Label>
            <Form.Text className="text-muted">
            Upload your course video or audio or document here. It must meet
              our course quality standards to be accepted. Accepted file types: video, audio, PDF, Word document.
            </Form.Text>
          </Form.Group>

          <Form.Label className=" mt-3">Course Content hours </Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Course Content Hours"
              id="videoHours"
            />
          </Form.Group>
          {/* Included Option */}
          <Form.Group className="mb-3">
            <Form.Label>What is included</Form.Label>
            <Select
              options={IncludedOptions}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
              id="included_category"
              name="included_category"
              placeholder="Select multiple included"
              isMulti 
            />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Button */}
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={previous}>
          Previous
        </Button>
        <Button variant="primary" onClick={next}>
          Next
        </Button>
      </div>
    </Form>
  );
};

export default CoursesMedia;
