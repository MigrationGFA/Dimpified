import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, Card, Breadcrumb, Spinner, Tab, Nav } from "react-bootstrap";
import axios from "axios";
import AllEcosystemTable from "./AllEcosystemTable";
import { useNavigate } from "react-router-dom";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import { showToast } from "../../Components/Showtoast";

const AdminAllEcosystem = () => {
  const [allEcosystem, setAllEcosystem] = useState([]);
  const [unpaidJobs, setUnpaidJobs] = useState([]);
  const [pendingJobs, setPendingJobs] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);
  const [loadingAll, setLoadingAll] = useState(false);
  const [loadingUnpaid, setLoadingUnpaid] = useState(false);
  const [loadingPaid, setLoadingPaid] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [errorAll, setErrorAll] = useState(null);
  const [errorUnpaid, setErrorUnpaid] = useState(null);
  const [errorPaid, setErrorPaid] = useState(null);
  const [errorCompleted, setErrorCompleted] = useState(null);
  const [dashboardData, setDashboardData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin-ecosystem-dashboard-overview`
        );
        setDashboardData(response.data.dashboardData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  useEffect(() => {
    const fetchAllEcosystem = async () => {
      try {
        setLoadingAll(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin-all-ecosystems`
        );

        setAllEcosystem(response.data.ecosystemsWithLogos);
        setLoadingAll(false);
      } catch (error) {
        setErrorAll(error);
        setLoadingAll(false);
      }
    };

    fetchAllEcosystem();
  }, []);

  useEffect(() => {
    const fetchUnpaidJobs = async () => {
      try {
        setLoadingUnpaid(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin-pending-ecosystems`
        );
        setUnpaidJobs(response.data.ecosystemsWithLogos);
        setLoadingUnpaid(false);
      } catch (error) {
        setErrorUnpaid(error);
        setLoadingUnpaid(false);
      }
    };

    fetchUnpaidJobs();
  }, []);

  useEffect(() => {
    const fetchPendingJobs = async () => {
      try {
        setLoadingPaid(true);
        const response = await axios.get(
          "https://unleashified-backend.azurewebsites.net/api/v1/admin-all-pending-outsource-jobs"
        );
        setPendingJobs(response.data.pendingJobs);
        setLoadingPaid(false);
      } catch (error) {
        setErrorPaid(error);
        setLoadingPaid(false);
      }
    };

    fetchPendingJobs();
  }, []);

  useEffect(() => {
    const fetchCompletedJobs = async () => {
      try {
        setLoadingCompleted(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin-completed-ecosystems`
        );
        setCompletedJobs(response.data.ecosystemsWithLogos);
        setLoadingCompleted(false);
      } catch (error) {
        setErrorCompleted(error);
        setLoadingCompleted(false);
      }
    };

    fetchCompletedJobs();
  }, []);

  const markJobAsCompleted = async (jobId) => {
    try {
      await axios.put(
        `https://unleashified-backend.azurewebsites.net/api/v1/admin-mark-outsource-job/${jobId}`
      );
      fetchPendingJobs();
      fetchCompletedJobs();
      const message = response.data.message;
      showToast(message);
    } catch (error) {
      console.error("Error marking job as completed:", error);
      showToast("Error marking job as completed");
    }
  };

  const handleCategoryClick = (_id, paymentStatus) => {
    if (paymentStatus === "paid") {
      markJobAsCompleted(_id);
    } else {
      navigate(`/admin/out-source/job-single?id=${_id}`);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">All Ecosystem</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="/admin/dashboard/overview">
                  Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item active>All</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="All"
            value={dashboardData.totalEcosystem}
            summary="Number of all ecosystem"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Draft"
            value={dashboardData.totalDratfEcoystems}
            summary="Number of draft ecosystem"
            summaryIcon="down"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Live"
            value={dashboardData.totalLiveEcosystems}
            summary="Number of live ecosystem"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="BounceChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Private"
            value={dashboardData.totalPrivateEcosystems}
            summary="Total private ecosystems"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="AverageVisitTimeChart"
          />
        </Col>
      </Row>

      {loadingAll || loadingUnpaid || loadingPaid || loadingCompleted ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Tab.Container defaultActiveKey="all">
                <Card>
                  <Card.Header className="border-bottom-0 p-0 bg-white">
                    <Nav className="nav-lb-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                          All
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="unpaid" className="mb-sm-3 mb-md-0">
                          Draft
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="completed"
                          className="mb-sm-3 mb-md-0"
                        >
                          Live
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        {!errorAll && (
                          <AllEcosystemTable
                            jobs_data={allEcosystem}
                            handleCategoryClick={handleCategoryClick}
                          />
                        )}
                        {errorAll && <div>Error fetching all data</div>}
                      </Tab.Pane>
                      <Tab.Pane eventKey="unpaid">
                        {!errorUnpaid && (
                          <AllEcosystemTable
                            jobs_data={unpaidJobs}
                            handleCategoryClick={handleCategoryClick}
                          />
                        )}
                        {errorUnpaid && <div>Error fetching unpaid data</div>}
                      </Tab.Pane>
                      <Tab.Pane eventKey="completed">
                        {!errorCompleted && (
                          <AllEcosystemTable
                            jobs_data={completedJobs}
                            handleCategoryClick={handleCategoryClick}
                          />
                        )}
                        {errorCompleted && (
                          <div>Error fetching completed data</div>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
          </Row>
        </div>
      )}
    </Fragment>
  );
};

export default AdminAllEcosystem;
