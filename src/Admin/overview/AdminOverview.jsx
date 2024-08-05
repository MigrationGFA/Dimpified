import React, { useState, useEffect } from "react";
import { Col, Row, Card, Dropdown, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { FlatPickr } from "../../Components/elements/flat-pickr/FlatPickr";
import ApexCharts from "../../Components/elements/charts/ApexCharts";
import StatRightIcon from "../../Admin/analytics/stats/StatRightIcon";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Last4Creator from "./Last4Creator";
import Last4Ecosystem from "./Last4Ecosystem";
import Last4Products from "./Last4Products"
import Activity from "./AdminActivity";
import {
  TrafficChartSeries,
  TrafficChartOptions,
  EarningsChartSeries,
  EarningsChartOptions,
  OrderColumnChartSeries,
  OrderColumnChartOptions,
} from "../../data/charts/AdminChartData";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    to=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="btn-icon btn btn-ghost btn-sm rounded-circle"
  >
    {children}
  </Link>
));

const ChartActionMenu = () => {
  return (
    <div>
      {/* <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <i className="fe fe-more-vertical text-muted"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            <i className="fe fe-external-link dropdown-item-icon "></i> Export
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <i className="fe fe-mail dropdown-item-icon "></i> Email Report
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-download dropdown-item-icon "></i> Download
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </div>
  );
};

const Overview = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 0,
    totalSeeker: 1,
    monthlyProvider: 0,
    totalProvider: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(
        "https://unleashified-backend.azurewebsites.net/api/v1/admin-overview"
      );
      setDashboardData(response.data.dashboardData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Dashboard</h1>
            </div>
          </div>
        </Col>
      </Row>
      {/* Renders Spinner */}
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
              <Link to="/creator/dashboard/All-Ecosystem">
                <StatRightChart
                  title="Total Ecosystem"
                  value={dashboardData?.totalEcosystems || "0"}
                  summary="Number of sales"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="UserChart"
                />
              </Link>
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/creator/my-user">
                <StatRightChart
                  title="Total Users"
                  value={dashboardData?.totalUsers || "0"}
                  summary="Number of pending"
                  summaryIcon="down"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="VisitorChart"
                />
              </Link>
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/creator/support">
                <StatRightChart
                  title="Total Support Requests"
                  value={dashboardData?.totalSupportRequests || "0"}
                  summary="Students"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="BounceChart"
                />
              </Link>
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/creator/received-payment">
                <StatRightChart
                  title="Total Paid Users"
                  value={dashboardData?.totalPaidUsers || "0"}
                  summary="Instructor"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="AverageVisitTimeChart"
                />
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xl={8} lg={12} md={12} className="mb-4">
              <Card>
                <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-0">Earnings</h4>
                  </div>
                  <div>
                    <ChartActionMenu />
                  </div>
                </Card.Header>
                <Card.Body>
                  <ApexCharts
                    options={OrderColumnChartOptions}
                    series={OrderColumnChartSeries}
                    height={287}
                    type="bar"
                  />
                </Card.Body>
                {/* <Card.Body>
                                    <ApexCharts
                                        options={EarningsChartOptions}
                                        series={EarningsChartSeries}
                                        type="line"
                                    />
                                </Card.Body> */}
              </Card>
            </Col>
            {/* <Col xl={4} lg={12} md={12} className="mb-4">
              <Card>
                <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-0">Traffic</h4>
                  </div>
                  <div>
                    <ChartActionMenu />
                  </div>
                </Card.Header>
                <Card.Body className="py-lg-7">
                  <div id="chart">
                    <ApexCharts
                      options={TrafficChartOptions}
                      series={TrafficChartSeries}
                      type="donut"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>

          <Row>
            <Col xl={4} lg={6} md={12} className="mb-4">
              <Last4Creator title="Last 4 Creator" />
            </Col>
            <Col xl={4} lg={6} md={12} className="mb-4">
              <Last4Ecosystem title="Last 4 Ecosystem" />
            </Col>
            <Col xl={4} lg={6} md={12} className="mb-4">
              <Last4Products title="Last 4 Products" />
            </Col>
            {/* <Col xl={4} lg={6} md={12} className="mb-4">
                            <AdminActivity title="Activity" />
                        </Col> */}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Overview;
