import React, { useState, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import GKStepper from "../../Components/elements/stepper/GKStepper";
import BasicInformation from "../ecosystem/steps/BasicInformation";
import CoursesMedia from "../ecosystem/steps/CoursesMedia";
import Curriculum from "../ecosystem/steps/Curriculum";
import Settings from "../ecosystem/steps/Settings";

const AddNewCourse = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { ecosystemDomain } = useParams();
  const [formData, setFormData] = useState({
    course_title: "",
    category_category: "",
    courses_level: "",
    course_description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setCurrentStep(currentStep === 4 ? 1 : currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep === 1 ? 1 : currentStep - 1);
  };

  const steps = [
    {
      id: 1,
      title: "Basic Information",
      content: (
        <BasicInformation
          data={formData}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      ),
    },
    {
      id: 2,
      title: "Curriculum",
      content: (
        <Curriculum
          data={formData}
          handleChange={handleChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 3,
      title: "Settings",
      content: (
        <Settings
          data={formData}
          handleChange={handleChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 4,
      title: "Courses Media",
      content: (
        <CoursesMedia
          data={formData}
          handleChange={handleChange}
          previous={handlePrevious}
        />
      ),
    },
  ];

  const clearStorage = async () => {
    sessionStorage.removeItem("category");
    sessionStorage.removeItem("courseTitle");
    sessionStorage.removeItem("requirements");
    sessionStorage.removeItem("description");
    sessionStorage.removeItem("level");
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("price");
    sessionStorage.removeItem("curriculum");
    sessionStorage.removeItem("category");
  };

  const handleBackToCourse = () => {
    clearStorage();
    setStep(1);
  };

  return (
    <Fragment>
      <section className="py-4 py-lg-6 bg-primary">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="mb-4 mb-lg-0">
                  <h1 className="text-white mb-1">Add New Course</h1>
                  <p className="mb-0 text-white lead">
                    Just fill the form and create your courses.
                  </p>
                </div>
                <div>
                  {ecosystemDomain && (
                    <Link
                      to=""
                      className="btn btn-white"
                      onClick={handleBackToCourse}
                    >
                      Back to My Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <GKStepper currentStep={currentStep} steps={steps} />
    </Fragment>
  );
};

export default AddNewCourse;
