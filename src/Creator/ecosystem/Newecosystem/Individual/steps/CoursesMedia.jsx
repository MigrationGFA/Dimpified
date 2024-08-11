import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { showToast } from "../../../../../Components/Showtoast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourseCoverImage,
  setTotalDuration,
  setIncludedOptions,
  updateCourseData,
  resetCourseData,
} from "../../../../../features/course";
import { useParams, useLocation } from "react-router-dom";

const CoursesMedia = ({ submit, previous }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ecosystemDomain } = useParams();
  const location = useLocation();
  const ecosystemFromState = useSelector((state) => state.ecosystem.ecosystemDomain);
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;
  console.log(creatorId)


  const courseData = useSelector((state) => state.course);
  const {
    category,
    courseTitle,
    requirements,
    description,
    level,
    currency,
    type,
    price,
    curriculum,
    courseCoverImage,
    totalDuration,
    includedOptions,
  } = courseData;

  let ecosystem;
  if (ecosystemDomain) {
    ecosystem = ecosystemDomain;
  } else {
    ecosystem = ecosystemFromState;
  }
  
  console.log(ecosystem)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setCourseCoverImage(file));
    }
  };

  const handleDurationChange = (e) => {
    dispatch(setTotalDuration(e.target.value));
  };

  const handleIncludedOptionsChange = (selectedOptions) => {
    dispatch(setIncludedOptions(selectedOptions));
  };

  const handleSubmit = () => {
    setLoading(true);

    const requirementsString = JSON.stringify(requirements.map(req => ({ name: req.name })));
    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", courseTitle);
    formData.append("requirement", requirementsString);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("currency", currency);
    formData.append("courseType", type.toLowerCase());
    formData.append("price", parseInt(price));
    formData.append("curriculum", JSON.stringify(curriculum));
    formData.append("image", courseCoverImage);
    formData.append("hour", totalDuration);
    formData.append("whatIsIncluded", JSON.stringify(includedOptions.map(option => option.value)));
    formData.append("creatorId", creatorId);
    formData.append("ecosystemDomain", ecosystem);

    axios
      .post(`${import.meta.env.VITE_API_URL}/create-course`, formData)
      .then((response) => {
        setLoading(false);
        showToast(response.data.message);
        dispatch(resetCourseData());
        if (location.pathname.includes(`/${ecosystemDomain}/`)) {
          navigate(`/${ecosystemDomain}/Ecosystemdashboard`);
        } else {
          navigate('/creator/dashboard/Products');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        showToast(error.response.data.message);
        if (location.pathname.includes(`/${ecosystemDomain}/`)) {
          navigate(`/${ecosystemDomain}/Ecosystemdashboard`);
        } else {
          navigate('/creator/dashboard/Products');
        }
      });
  };

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
    <Form encType="multipart/form-data">
      <Card className="mb-3 border-0">
        <Card.Header className="border-bottom px-4 py-3">
          <h4 className="mb-0">Courses Media</h4>
        </Card.Header>
        <Card.Body>
          {/* Course cover image */}
          <Form.Label>Course cover image</Form.Label>
          <Form.Group className="mb-1 input-group">
            <Form.Control
              id="inputfavicon"
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={handleFileChange}
            />
            <Form.Label htmlFor="inputfavicon" className="input-group-text mb-0">
              Upload
            </Form.Label>
            <Form.Text className="text-muted">
              Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </Form.Text>
          </Form.Group>

          <Form.Label className="mt-3">Total Course Content Duration</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Total Course Content Duration in this format, 4h 20min, 20min, 4h"
              id="hour"
              value={totalDuration}
              onChange={handleDurationChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>What is included</Form.Label>
            <Select
              options={IncludedOptions}
              value={includedOptions}
              onChange={handleIncludedOptionsChange}
              labelledBy="Select"
              id="included_category"
              name="included_category"
              placeholder="Select multiple included"
              isMulti
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={previous}>
          Previous
        </Button>
        {loading ? (
          <Button variant="danger" className="opacity-50" disabled>
            Processing
          </Button>
        ) : (
          <Button variant="danger" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default CoursesMedia;
