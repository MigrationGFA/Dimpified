import React, { useState, useEffect } from "react";
import { Col, Row, Card, Spinner, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { numberWithCommas } from "../../helper/utils";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Pagination from "../../Components/elements/advance-table/Pagination";

const ReceivedPayment = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 1,
    totalSeeker: 1,
    monthlyProvider: 1,
    totalProvider: 1,
  });
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEcosystem, setSelectedEcosystem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "https://unleashified-backend.azurewebsites.net/api/v1/get-all-payment-records"
        );
        setPayments(response.data.records);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payments:", error);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const ecosystems = [
    "Ecosystem 1",
    "Ecosystem 2",
    "Ecosystem 3",
    "Ecosystem 4",
  ];

  const handleEcosystemChange = (event) => {
    let ecosystem = event.target.value;
    setSelectedEcosystem(ecosystem);
  };
  const indexOfLastPayment = currentPage * itemsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - itemsPerPage;
  const currentPayments = payments.slice(
    indexOfFirstPayment,
    indexOfLastPayment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Received Payment</h1>
            </div>
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
                title="Total Received Payment"
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
                title="Completed Received Payment"
                value="1"
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Pending Received Payment"
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
                title="Total Payment"
                value="0"
                summary="Instructor"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>
          <Form.Control
            as="select"
            value={selectedEcosystem}
            onChange={handleEcosystemChange}
            className="mr-2"
            style={{
              fontSize: "0.875rem",
              padding: "0.5rem",
              maxWidth: "200px",
            }}
          >
            <option value="">All Ecosystems</option>
            {ecosystems.map((ecosystem, index) => (
              <option key={index} value={ecosystem}>
                {ecosystem}
              </option>
            ))}
          </Form.Control>
          <Card className="border-0 mt-4">
            <Card.Header>
              <h3 className="mb-0 h4">Received Payment</h3>
            </Card.Header>
            <Card.Body>
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <>
                  <Table
                    hover
                    responsive
                    className="text-nowrap table-centered"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Amount (₦)</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPayments.map((payment) => (
                        <tr key={payment.id}>
                          <td>{payment.id}</td>
                          <td>{payment.email}</td>
                          <td>{payment.jobTitle}</td>
                          <td>₦{numberWithCommas(payment.amount)}</td>
                          <td>{payment.paymentMethod}</td>
                          <td>{payment.status}</td>
                          <td>
                            {new Date(payment.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {payments.length === 0 && <div>No payments found.</div>}
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={payments.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ReceivedPayment;
