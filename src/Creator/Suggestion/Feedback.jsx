import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  useEffect(() => {
    setDashboardLoading(false);
  }, []);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = async () => {
    setLoading(true);
    const UserId = sessionStorage.getItem("UserId");
    const selectedJobId = "exampleJobId"; // Replace with actual job ID
    const selectedJobposterId = "exampleJobPosterId"; // Replace with actual job poster ID
    const selectedJobTitle = "exampleJobTitle"; // Replace with actual job title

    if (!selectedJobId || !selectedJobposterId) {
      alert("Job ID or Jobposter ID not provided");
      setLoading(false);
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
      setLoading(false);
      alert(response.data.message);
    } catch (error) {
      setLoading(false);
      alert("Error submitting review");
    }
  };

  return (
    <div className="feedback-form">
      <h2 className="mb-4">Post Feedbacks</h2>
      
      {dashboardLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <Row>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Feedbacks"
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
                title="Number of Feedbacks"
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
                title="Pending Feedbacks"
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
                title="Completed Feedbacks"
                value="0"
                summary="Instructor"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>
        </div>
      )}
      
      <div className="mb-3">
        <h3 className="mb-4">Give Your Review on this Job</h3>
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

      <div className="w-100 d-flex justify-content-end">
        <Button
          variant="primary"
          disabled={loading}
          style={{ opacity: loading ? ".7" : "1" }}
          onClick={() => handleSubmitReview()}
        >
          {loading ? "Processing" : "Submit Review"}
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
