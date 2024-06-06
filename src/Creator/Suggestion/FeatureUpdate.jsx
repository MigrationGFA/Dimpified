import React, { useState, useEffect } from "react";
import { Col, Row, Button, Spinner, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";

const FeatureUpdate = () => {
  const [featureName, setFeatureName] = useState("");
  const [featureType, setFeatureType] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);

  useEffect(() => {
    setDashboardLoading(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://unleashified-backend.azurewebsites.net/api/v1/features",
        {
          featureName,
          featureType,
          featureDescription,
        }
      );

      showToast("Feature submitted successfully!", "success");
      setFeatureName("");
      setFeatureType("");
      setFeatureDescription("");
      setShowModal(false);
    } catch (error) {
      showToast("Error submitting feature: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = async () => {
    setReviewLoading(true);
    const UserId = sessionStorage.getItem("UserId");
    const selectedJobId = "exampleJobId"; // Replace with actual job ID
    const selectedJobposterId = "exampleJobPosterId"; // Replace with actual job poster ID
    const selectedJobTitle = "exampleJobTitle"; // Replace with actual job title

    if (!selectedJobId || !selectedJobposterId) {
      alert("Job ID or Jobposter ID not provided");
      setReviewLoading(false);
      return;
    }

    const reviewData = {
      jobId: selectedJobId,
      user_id: UserId,
      rating: rating,
      jobTitle: selectedJobTitle,
      jobseekerId: UserId,
      review: reviewText,
      jobposterId: selectedJobposterId,
    };

    try {
      const response = await axios.post(
        "https://unleashified-backend.azurewebsites.net/api/v1/submit-reviews",
        reviewData
      );
      setReviewLoading(false);
      alert(response.data.message);
      setShowFeedbackModal(false);
    } catch (error) {
      setReviewLoading(false);
      alert("Error submitting review");
    }
  };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Feature Update</h1>
              <p>
                Share your feature suggestions with us by completing the{" "}
                <b>Request New Features</b> form, and provide feedback through
                the <b>Give Feedback</b> form.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Update Requests"
            value="1"
            summary="Number of sales"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Completed Requests"
            value="1"
            summary="Number of Users"
            summaryIcon="down"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Pending Requests"
            value="0"
            summary="Students"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="BounceChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Decline Requests"
            value="0"
            summary="Instructor"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="AverageVisitTimeChart"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="d-lg-flex justify-content-end align-items-center mb-4">
            <Button
              variant="primary"
              className="me-3"
              onClick={() => setShowModal(true)}
            >
              Request new feature
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowFeedbackModal(true)}
            >
              Give feedback
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Feature Name</th>
                <th>Feature Type</th>
                <th>Feature Description</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                {/* <td>1</td>
                <td>Example Feature</td>
                <td>Feature Type</td>
                <td>Feature Description</td>
                <td>Status</td> */}
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request New Feature</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="featureName">
              <Form.Label>Feature Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature name"
                value={featureName}
                onChange={(e) => setFeatureName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="featureType" className="mt-3">
  <Form.Label>Feature Type</Form.Label>
  <Form.Select aria-label="Select">
                    <option>Select</option>
                    <option>Template Upgrade</option>
                    <option>Pricing features</option>
                    <option>Payment Issues</option>
                    <option>Ecosystem Upgrade</option>
                    <option>Others</option>
                  </Form.Select>
</Form.Group>


            <Form.Group controlId="featureDescription" className="mt-3">
              <Form.Label>Feature Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter feature description"
                value={featureDescription}
                onChange={(e) => setFeatureDescription(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            disabled={reviewLoading}
            style={{ marginRight: "10px" }}
            onClick={handleSubmitReview}
          >
            {reviewLoading ? "Processing" : "Submit Feature"}
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showFeedbackModal}
        onHide={() => setShowFeedbackModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Give Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h3 className="mb-4">Give Your Review on this Application</h3>
            <Row className="align-items-center">
              <Col xs="auto" className="text-center">
                <h6>Press any of the stars for your star rating</h6>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className="text-warning"
                    onClick={() => handleStarClick(value)}
                  >
                    <i
                      className={`fa${value <= rating ? "s" : "r"} fa-star`}
                      style={{ cursor: "pointer", fontSize: "24px" }}
                    />
                  </span>
                ))}
                <span className="ms-2 fs-5">{rating}/5</span>
              </Col>
            </Row>
          </div>

          <div className="w-100 mb-3">
            <h4 className="mb-3">Write Your Review</h4>
            <Form className="position-relative">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your review here..."
                  className="w-100"
                  value={reviewText}
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setReviewText(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            disabled={reviewLoading}
            style={{ marginRight: "10px" }}
            onClick={handleSubmitReview}
          >
            {reviewLoading ? "Processing" : "Submit Review"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => setShowFeedbackModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeatureUpdate;
