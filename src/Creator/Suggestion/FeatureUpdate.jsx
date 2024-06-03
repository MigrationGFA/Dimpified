import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";

const FeatureUpdate = () => {
  const [featureName, setFeatureName] = useState("");
  const [featureType, setFeatureType] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(true);

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
    } catch (error) {
      showToast("Error submitting feature: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
        </div>
      )}
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Feature Update</h1>
            </div>
          </div>
        </Col>
      </Row>

      <Card className="border-0 mt-4">
        <Card.Header>
          <h3 className="mb-0 h4">Submit a New Feature</h3>
        </Card.Header>
        <Card.Body>
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
              <Form.Control
                type="text"
                placeholder="Enter feature type"
                value={featureType}
                onChange={(e) => setFeatureType(e.target.value)}
                required
              />
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
              className="mt-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Submitting...
                </>
              ) : (
                "Submit Feature"
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeatureUpdate;
