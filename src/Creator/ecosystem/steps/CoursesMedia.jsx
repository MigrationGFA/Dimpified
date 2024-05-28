import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";
import { useGlobalContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CoursesMedia = ({ submit, previous }) => {
  const { userId, userImage, user } = useGlobalContext();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    const curriculumData = sessionStorage.getItem("curriculum");
    const requiremnetDatas = sessionStorage.getItem("requirements");
    const requirementsArrays = JSON.parse(requiremnetDatas);
    const Newrequirements = requirementsArrays.map((requiremnetData) => ({
      name: requiremnetData,
    }));
    const requirementsString = JSON.stringify(Newrequirements);
    // const whatIsIncludedData = sessionStorage.getItem("curriculum");

    const formData = new FormData();
    formData.append("category", sessionStorage.getItem("category"));
    formData.append("title", sessionStorage.getItem("courseTitle"));
    formData.append("requirement", requirementsString);
    formData.append("description", sessionStorage.getItem("description"));
    formData.append("level", sessionStorage.getItem("level"));
    formData.append("currency", sessionStorage.getItem("currency"));
    formData.append(
      "courseType",
      sessionStorage.getItem("type").toLocaleLowerCase()
    );
    formData.append("price", parseInt(sessionStorage.getItem("price")));
    formData.append("curriculum", curriculumData);
    formData.append("image", document.getElementById("inputfavicon").files[0]);
    formData.append("hour", document.getElementById("hour").value);
    formData.append(
      "whatIsIncluded",
      JSON.stringify(selected.map((option) => option.value))
    );
    formData.append("status", "pending");
    formData.append("Agent", userId);
    formData.append("InstructorImage", userImage);
    formData.append("username", user);
    console.log("this is curriculum", requirementsString);

    axios
      .post(
        "https://remsana-backend-testing.azurewebsites.net/api/v1/create-course",
        formData
      )
      .then((response) => {
        setLoading(false);
        console.log("Response from API:", response.data);
        showToast(response.data.message);
        sessionStorage.removeItem("category");
        sessionStorage.removeItem("courseTitle");
        sessionStorage.removeItem("requirements");
        sessionStorage.removeItem("description");
        sessionStorage.removeItem("level");
        sessionStorage.removeItem("type");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("curriculum");
        sessionStorage.removeItem("whatIsIncluded");

        navigate("/Instructordashboard/My-Courses");

        submit();

        // if (response.data.message ==="Course created successfully") {

        // }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        showToast(error.response.data.message);
        sessionStorage.removeItem("category");
        sessionStorage.removeItem("courseTitle");
        sessionStorage.removeItem("requirements");
        sessionStorage.removeItem("description");
        sessionStorage.removeItem("level");
        sessionStorage.removeItem("type");
        sessionStorage.removeItem("price");
        sessionStorage.removeItem("curriculum");
        sessionStorage.removeItem("whatIsIncluded");
        navigate("/Instructordashboard/My-Courses");
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

          

          <Form.Label className=" mt-3">Total Course Content Duration </Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Total Course Content Duration in this format, 4h 20min, 20min, 4h"
              id="hour"
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
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Button */}
      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={previous}>
          Previous
        </Button>
        {loading ? (
          <Button
            variant="danger"
            onClick={handleSubmit}
            className="opacity-50"
            disabled
          >
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
