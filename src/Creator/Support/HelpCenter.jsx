import React, { useState, useEffect } from "react";
import { Col, Row, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";

const  HelpCenter = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 1,
    totalSeeker: 1,
    monthlyProvider: 1,
    totalProvider: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold"> Help Center</h1>
            </div>
            {/* <div className="d-flex">
              <Link
                to="#"
                className="btn btn-primary"
                style={{ whiteSpace: "nowrap" }}
              >
                Create Ecosystem
              </Link>
            </div> */}
          </div>
        </Col>
      </Row>

      {loading ? (
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
                title="Total Ecosystem"
                value="1"
                summary="Number of sales"
                // summaryValue="1 Monthly Ecosystem"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="UserChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Users"
                value="1"
                summary="Number of pending"
                // summaryValue="1 Monthly Users"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Materials"
                value="0"
                summary="Students"
                // summaryValue="Monthly Materials"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="BounceChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Paid Users"
                value="0"
                summary="Instructor"
                // summaryValue="1 Monthly Paid Users"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default HelpCenter;
