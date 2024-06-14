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
import PaginationComponent from "../../Components/elements/advance-table/Pagination"; // Importing PaginationComponent

const FeatureUpdate = () => {
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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  useEffect(() => {
    if (creatorId) {
      const fetchData = async () => {
        try {
          setDashboardLoading(true);
          const [featureResponse, reviewResponse] = await Promise.all([
            axios.get(
              `${
                import.meta.env.VITE_API_URL
              }/get-a-creator-feature/${creatorId}`
            ),
            axios.get(
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
    }
  }, [creatorId]);

  const handleSubmitReview = async () => {
    if (!creatorId) {
      showToast("Creator ID is missing. Please log in again.", "error");
      return;
    }

    setReviewLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/creator-submit-review`,
        {
          rating,
          review: reviewText,
          creatorId,
        }
      );

      const { message } = response.data;
      showToast(message, "success");
      setRating(0);
      setReviewText("");
      setShowFeedbackModal(false);

      // Refresh reviews
      const reviewResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-reviews-by-creator/${creatorId}`
      );
      setReviews(reviewResponse.data.reviews || []);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Error submitting review. Please try again.";
      showToast(errorMessage, "error");
    } finally {
      setReviewLoading(false);
    }
  };

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

      const { message } = response.data;
      showToast(message, "success");
      setShowModal(false);
      setFeatureName("");
      setFeatureType("");
      setFeatureDescription("");

      // Refresh features
      const featureResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/get-a-creator-feature/${creatorId}`
      );
      setFeatures(featureResponse.data.featuresByCreator || []);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Error submitting feature request. Please try again.";
      showToast(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleFeedbackModalOpen = () => {
    setShowFeedbackModal(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeatures = features.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = features.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                  <td>{new Date(feature.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Component */}
          <div className="d-flex justify-content-center mt-3">
            <PaginationComponent
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Request New Feature</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitFeature}>
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
              <Form.Select
                value={featureType}
                onChange={(e) => setFeatureType(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Template Upgrade">Template Upgrade</option>
                <option value="Pricing Features">Pricing Features</option>
                <option value="Payment Issues">Payment Issues</option>
                <option value="Ecosystem Upgrade">Ecosystem Upgrade</option>
                <option value="Others">Others</option>
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

            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="mt-3"
            >
              {loading ? "Submitting..." : "Submit Feature"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
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
                      className={`${value <= rating ? "fas" : "far"} fa-star`}
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
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            disabled={reviewLoading}
            onClick={handleSubmitReview}
          >
            {reviewLoading ? "Processing..." : "Submit Review"}
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
