import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Card,
  Dropdown,
  Spinner,
  Button,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ApexCharts from "../../Components/elements/charts/ApexCharts";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import TopEcosystem from "../AgentDashboard/TopEcosystem";
import RecentEcosystem from "../AgentDashboard/RecentEcosystem";
import {
  TrafficChartSeries,
  TrafficChartOptions,
  OrderColumnChartSeries,
  OrderColumnChartOptions,
} from "../../data/charts/AdminChartData";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

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

const AffiliateOverview = () => {
  const authFetch = AxiosInterceptor();
  const [dashboardData, setDashboardData] = useState(null);
  const [withdrawData, setWithdrawData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the creator ID from the Redux store
  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.AffiliateId
  );

  useEffect(() => {
    if (creatorId) {
      fetchDashboardData();
      fetchEarningHistory();
    }
  }, [creatorId]);

  const fetchDashboardData = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/affiliate-dashboard-stats/${creatorId}`
      );
      setDashboardData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  const fetchEarningHistory = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/affiliate-earning-history/${creatorId}`
      );
      setWithdrawData(response.data.affiliateEarningHistory);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  // const role = useSelector((state) => state.authentication.user?.data?.role);

  // const getLink = () => {
  //   if (role === "creator" || role === "Enterprise") {
  //     return "/creator/dashboard/New-Ecosystem";
  //   } else if (role === "consumer") {
  //     return "/creator/dashboard/New-Ecosystem/individual";
  //   } else {
  //     return "";
  //   }
  // };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Dashboard</h1>
            </div>
            {/* <div>
              <Link to={getLink()}>
                <Button variant="primary">
                  <i className="fe fe-edit me-2"></i>
                  Create New Ecosystem
                </Button>
              </Link>
            </div> */}
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
              <Link to="/agent/dashboard/earning">
                <StatRightChart
                  title="Total Earning History"
                  value={dashboardData?.totalEarningHistory || "0"}
                  summary="Number of earning history"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="UserChart"
                />
              </Link>
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/agent/dashboard/overview">
                <StatRightChart
                  title="Total Subscribers"
                  value={dashboardData?.totalSubscribers || "0"}
                  summary="Number of pending"
                  summaryIcon="down"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="VisitorChart"
                />
              </Link>
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/agent/dashboard/my-user">
                <StatRightChart
                  title="Total Users"
                  value={dashboardData?.totalUser || "0"}
                  summary="Students"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="BounceChart"
                />
              </Link>
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <Link to="/agent/dashboard/my-user">
                <StatRightChart
                  title="Total Unverified Users"
                  value={dashboardData?.unverifyUsers || "0"}
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
            <Col xl={12} lg={12} md={12} className="mb-4">
              <Card>
                <Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-0">Affiliate Earning History</h4>
                  </div>
                  <div>
                    <ChartActionMenu />
                  </div>
                </Card.Header>
                <Card.Body className="p-0">
                  <Table
                    hover
                    responsive
                    className="text-nowrap table-centered"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Plan Type</th>
                        <th>Size Limit</th>
                        <th>Interval</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {withdrawData && withdrawData.length > 0 ? (
                        withdrawData.map((entry) => (
                          <tr key={entry.id}>
                            <td>#00{entry.id}AWH</td>
                            <td>{entry.amount}</td>
                            <td>{entry.currency}</td>
                            <td>{entry.planType}</td>
                            <td>{entry.sizeLimit}</td>
                            <td>{entry.interval}</td>
                            <td>
                              {new Date(entry.createdAt).toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center">
                            No earning history found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
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
            <Col xl={5} lg={6} md={12} className="mb-4">
              <TopEcosystem title="Last 4 Onboarded Users" />
            </Col>
            <Col xl={5} lg={6} md={12} className="mb-4">
              <RecentEcosystem title="Last 4 Subscribed Users" />
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

export default AffiliateOverview;
