import React, { useState, useEffect } from "react";
import { Col, Row, Card, Dropdown, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ApexCharts from "../../Components/elements/charts/ApexCharts";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import TopEcosystem from "./TopEcosystem";
import RecentEcosystem from "./RecentEcosystem";
import {
  TrafficChartSeries,
  TrafficChartOptions,
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
  // return (
  //   <div>
  //     <Dropdown>
  //       <Dropdown.Toggle as={CustomToggle}>
  //         <i className="fe fe-more-vertical text-muted"></i>
  //       </Dropdown.Toggle>
  //       <Dropdown.Menu align="end">
  //         <Dropdown.Header>SETTINGS</Dropdown.Header>
  //         <Dropdown.Item eventKey="1">
  //           <i className="fe fe-external-link dropdown-item-icon "></i> Export
  //         </Dropdown.Item>
  //         <Dropdown.Item eventKey="2">
  //           <i className="fe fe-mail dropdown-item-icon "></i> Email Report
  //         </Dropdown.Item>
  //         <Dropdown.Item eventKey="3">
  //           <i className="fe fe-download dropdown-item-icon "></i> Download
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Dropdown>
  //   </div>
  // );
};

const Overview = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the creator ID from the Redux store
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;

  useEffect(() => {
    if (creatorId) {
      fetchDashboardData();
    }
  }, [creatorId]);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/creator/my-dashboard-overview/${creatorId}`
      );
      setDashboardData(response.data);
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
            <div>
              <Link to="/creator/dashboard/New-Ecosystem">
                <Button variant="primary">
                  <i className="fe fe-edit me-2"></i>
                  Create New Ecosystem
                </Button>
              </Link>
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
              <StatRightChart
                title="Total Ecosystem"
                value={dashboardData?.totalEcosystems || "0"}
                summary="Number of sales"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="UserChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Users"
                value={dashboardData?.totalUsers || "0"}
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Support Requests"
                value={dashboardData?.totalSupportRequests || "0"}
                summary="Students"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="BounceChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Paid Users"
                value={dashboardData?.totalPaidUsers || "0"}
                summary="Instructor"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>

          <Row>
            <Col xl={8} lg={12} md={12} className="mb-4">
              <Card>
                <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-0">User</h4>
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
              <TopEcosystem title="Popular EcoSystems" />
            </Col>
            <Col xl={4} lg={6} md={12} className="mb-4">
              <RecentEcosystem title="Last 4 Created Ecosystem" />
            </Col>
            {/* <Col xl={4} lg={6} md={12} className="mb-4">
                            <Activity title="Activity" />
                        </Col> */}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Overview;
