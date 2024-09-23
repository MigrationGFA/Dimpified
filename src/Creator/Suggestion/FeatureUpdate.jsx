import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Spinner,
  Modal,
  Form,
  Card,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { showToast } from "../../Components/Showtoast";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import PaginationComponent from "../../Components/elements/advance-table/Pagination";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const FeatureUpdate = () => {
  // State variables
  const [featureName, setFeatureName] = useState("");
  const [featureType, setFeatureType] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const authFetch = AxiosInterceptor();

  // Redux state
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;
  console.log(creatorId);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      if (!creatorId) return;

      try {
        setDashboardLoading(true);
        const [featureResponse, reviewResponse] = await Promise.all([
          authFetch.get(
            `${import.meta.env.VITE_API_URL}/get-a-creator-feature/${creatorId}`
          ),
          authFetch.get(
            `${
              import.meta.env.VITE_API_URL
            }/get-reviews-by-creator/${creatorId}`
          ),
        ]);
        setFeatures(featureResponse.data.featuresByCreator || []);
        setReviews(reviewResponse.data.reviews || []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setDashboardLoading(false);
      }
    };

    fetchData();
  }, [creatorId]);

  // Handle review submission
  const handleSubmitReview = async () => {
    if (!creatorId) {
      showToast("Creator ID is missing. Please log in again.", "error");
      return;
    }

    setReviewLoading(true);
    try {
      const response = await authFetch.post(
        `${import.meta.env.VITE_API_URL}/creator-submit-review`,
        {
          rating,
          review: reviewText,
          creatorId,
        }
      );

      showToast(response.data.message, "success");
      setRating(0);
      setReviewText("");
      setShowFeedbackModal(false);

      const reviewResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-reviews-by-creator/${creatorId}`
      );
      setReviews(reviewResponse.data.reviews || []);
    } catch (error) {
      showToast(
        error.response?.data?.message ||
          "Error submitting review. Please try again.",
        "error"
      );
    } finally {
      setReviewLoading(false);
    }
  };

  // Handle feature submission
  const handleSubmitFeature = async (e) => {
    e.preventDefault();

    if (!creatorId) {
      showToast("Creator ID is missing. Please log in again.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/creator-suggest-feature`,
        {
          featureName,
          featureType,
          featureDescription,
          creatorId,
        }
      );

      showToast(response.data.message, "success");
      setShowModal(false);
      setFeatureName("");
      setFeatureType("");
      setFeatureDescription("");

      const featureResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-a-creator-feature/${creatorId}`
      );
      setFeatures(featureResponse.data.featuresByCreator || []);
    } catch (error) {
      showToast(
        error.response?.data?.message ||
          "Error submitting feature request. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle star rating click
  const handleStarClick = (value) => {
    setRating(value);
  };

  // Handle modals
  const handleFeedbackModalOpen = () => {
    setShowFeedbackModal(true);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeatures = features.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = features.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Format date
  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  // Loading state
  if (dashboardLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Feature Update</h1>
              <p>
                Keep track of your feature requests and submit new feature
                ideas.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Update Requests"
            value={features.length.toString()}
            summary="Number of features"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Completed Requests"
            value={reviews.length.toString()}
            summary="Number of reviews"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Pending Requests"
            value="0"
            summary="Pending requests"
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
            summary="Declined requests"
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
              Request New Feature
            </Button>
            <Button variant="primary" onClick={handleFeedbackModalOpen}>
              Give Feedback
            </Button>
          </div>
        </Col>
      </Row>

      <Card className="border-0">
        <Card.Header>
          <h4 className="mb-0">Feature Requests</h4>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Feature Name</th>
                <th>Feature Type</th>
                <th>Feature Description</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {currentFeatures.map((feature) => (
                <tr key={feature.id}>
                  <td>{feature.id}</td>
                  <td>{feature.featureName}</td>
                  <td>{feature.featureType}</td>
                  <td>{feature.featureDescription}</td>
                  <td>{formatDate(feature.dateCreated)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PaginationComponent
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={handlePageChange}
          />
        </Card.Body>
      </Card>

      {/* Feature Request Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request New Feature</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitFeature}>
            <Form.Group className="mb-3">
              <Form.Label>Feature Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature name"
                value={featureName}
                onChange={(e) => setFeatureName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Feature Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feature type"
                value={featureType}
                onChange={(e) => setFeatureType(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Feature Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter feature description"
                value={featureDescription}
                onChange={(e) => setFeatureDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        show={showFeedbackModal}
        onHide={() => setShowFeedbackModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarClick(star)}
                    style={{
                      cursor: "pointer",
                      color: star <= rating ? "gold" : "gray",
                      fontSize: "1.5rem",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleSubmitReview}
              disabled={reviewLoading}
            >
              {reviewLoading ? (
                <>
                  <Spinner animation="border" size="sm" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FeatureUpdate;
