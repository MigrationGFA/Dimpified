import React, { useState, Fragment } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import GKStepper from "../../../../../Components/elements/stepper/GKStepper";
import BasicInformation from "./steps/BasicInformation";
import CoursesMedia from "./steps/CoursesMedia";
import Curriculum from "./steps/Curriculum";
import Settings from "./steps/Settings";

const PostAProduct = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {ecosystemDomain} = useParams()
  const [formData, setFormData] = useState({
    course_title: "",
    category_category: "",
    courses_level: "",
    course_description: "",
  });
  
const navigate = useNavigate();

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
      title: "Category Information",
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
      title: "Digital Product Details",
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
      id: 3,
      title: "Digital Product Creation",
      content: (
        <Curriculum
          data={formData}
          handleChange={handleChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
   
    // {
    //   id: 4,
    //   title: "Courses Media",
    //   content: (
    //     <CoursesMedia
    //       data={formData}
    //       handleChange={handleChange}
    //       previous={handlePrevious}
    //     />
    //   ),
    // },
  ];

  const handleBackToDashBoard = () => {
    navigate(`/${ecosystemDomain}/Ecosystemdashboard`)
  };

  return (
    <Fragment>
      <section className="py-4 py-lg-6 bg-primary">
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="mb-4 mb-lg-0">
                  <h1 className="text-white mb-1">Add A Digital Product</h1>
                  <p className="mb-0 text-white lead">
                    Just fill the form and create your product.
                  </p>
                </div>
                <div>
                {ecosystemDomain && (
                    <Button
                      className="btn btn-white"
                      onClick={handleBackToDashBoard}
                    >
                      Back to My Dashboard
                    </Button>
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

export default PostAProduct;
