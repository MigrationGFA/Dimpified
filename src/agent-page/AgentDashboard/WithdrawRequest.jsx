import React, { useState, useEffect } from "react";
import { Col, Row, Card, Spinner, Table, Badge, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { numberWithCommas } from "../../helper/utils";
import { showToast } from "../../Components/Showtoast";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Pagination from "../../Components/elements/advance-table/Pagination";
import AxiosInterceptor from "../../Components/AxiosInterceptor";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const WithdrawPayment = () => {
  const authFetch = AxiosInterceptor();
  const { ecosystemDomain } = useParams();
  const [withdrawalBlock, setWithdrawalBlock] = useState({});
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Cloading, setCloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const creatorId = useSelector((state) => state.authentication.user?.data?.id);
  const AffiliateId = useSelector(
    (state) => state.authentication.user?.data?.affiliateId
  );

  useEffect(() => {
    const fetchWithdrawalRequests = async () => {
      try {
        const response = await authFetch.get(
          `${
            import.meta.env.VITE_API_URL
          }/affiliate-withdrawal-requests/${creatorId}`
        );
        setWithdrawalRequests(response.data.withdrawalRequests || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching withdrawal requests:", error);
        setLoading(false);
      }
    };

    fetchWithdrawalRequests();

    const fetchWithdrawalBlock = async () => {
      try {
        const response = await authFetch.get(
          `${
            import.meta.env.VITE_API_URL
          }/affiliate-total-withdrawals-stats/${creatorId}`
        );
        setWithdrawalBlock(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching withdrawal requests:", error);
        setLoading(false);
      }
    };

    fetchWithdrawalBlock();
  }, [ecosystemDomain]);

  // Handle action (e.g., mark request as completed)
  const handleAction = async (id) => {
    const rowIndex = withdrawalRequests.findIndex((row) => row.id === id);
    if (rowIndex !== -1) {
      try {
        const updatedData = [...withdrawalRequests];
        updatedData[rowIndex].Cloading = true;
        setWithdrawalRequests(updatedData);

        const response = await authFetch.post(
          `${import.meta.env.VITE_API_URL}/admin-mark-payment-request`,
          {
            requestId: id,
            status: "true",
          }
        );
        showToast(response.data.message);
      } catch (error) {
        showToast(error.response?.data?.message || "Error updating status");
      } finally {
        const updatedData = [...withdrawalRequests];
        updatedData[rowIndex].Cloading = false;
        setWithdrawalRequests(updatedData);
      }
    }
  };

  // Function to handle sharing the onboard link
  const handleShare = () => {
    const onboardLink = `${window.location.origin}/creator/signup?ref=${AffiliateId}`;

    // Check if Web Share API is supported by the browser
    if (navigator.share) {
      navigator
        .share({
          title: "Join as a Creator",
          text: "Join our platform through this link:",
          url: onboardLink,
        })
        .then(() => showToast("Onboard link shared successfully!"))
        .catch((error) => showToast("Error sharing the onboard link"));
    } else {
      // Fallback for browsers that don't support Web Share API (e.g., Firefox)
      navigator.clipboard
        .writeText(onboardLink)
        .then(() => showToast("Onboard link copied to clipboard!"))
        .catch((error) => showToast("Failed to copy link to clipboard"));
    }
  };

  // Get current requests for pagination
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = withdrawalRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0">
                <h1 className="mb-0 h2 fw-bold">Withdraw Payment</h1>
              </div>
              {/* Share Onboard Link Button */}
              <div className="text-end mb-4">
                <Button variant="secondary" onClick={handleShare}>
                  <FontAwesomeIcon icon={faShareAlt} className="me-2" />
                  Share Onboard Link
                </Button>
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
                  title="Total"
                  value={withdrawalBlock.totalWithdrawals}
                  summary="Number of sales"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="UserChart"
                />
              </Col>

              <Col xl={3} lg={6} md={12} sm={12}>
                <StatRightChart
                  title="Completed"
                  value={withdrawalBlock.completedWithdrawals}
                  summary="Number of pending"
                  summaryIcon="down"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="VisitorChart"
                />
              </Col>

              <Col xl={3} lg={6} md={12} sm={12}>
                <StatRightChart
                  title="Pending"
                  value={withdrawalBlock.pendingWithdrawals}
                  summary="Students"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="BounceChart"
                />
              </Col>

              <Col xl={3} lg={6} md={12} sm={12}>
                <StatRightChart
                  title="Month Withdraws"
                  value={withdrawalBlock.currentMonthWithdrawals}
                  summary="Instructor"
                  summaryIcon="up"
                  showSummaryIcon
                  classValue="mb-4"
                  chartName="AverageVisitTimeChart"
                />
              </Col>
            </Row>

            <Card className="border-0 mt-4">
              <Card.Header>
                <h3 className="mb-0 h4">Withdraw Request</h3>
              </Card.Header>
              <Card.Body className="p-0 pb-4">
                <Table hover responsive className="text-nowrap table-centered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Amount (₦)</th>
                      <th>Bank Details</th>
                      <th>Date</th>
                      <th>Status</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {currentRequests.map((request) => (
                      <tr key={request.id}>
                        <td>#00{request.id}AWR</td>
                        <td>₦{numberWithCommas(request.amount)}</td>
                        <td>
                          <span>{request.AffiliateAccount.accountNumber}</span>
                          <br />
                          <span>{request.AffiliateAccount.accountName}</span>
                          <br />
                          <p>{request.AffiliateAccount.bankName}</p>
                        </td>

                        <td>
                          {new Date(request.requestedAt).toLocaleString()}
                        </td>
                        <td>
                          <Badge
                            bg={
                              request.status === "pending"
                                ? "warning"
                                : "success"
                            }
                          >
                            {request.status}
                          </Badge>
                        </td>
                        {/* <td>
                          {request.status !== "completed" && (
                            <Button
                              variant="success"
                              onClick={() => handleAction(request.id)}
                              style={{
                                backgroundColor: "light-green",
                                borderColor: "#b8f7b2",
                                opacity:
                                  request.status === "completed" ||
                                  request.Cloading
                                    ? 0.6
                                    : 1,
                              }}
                            >
                              {request.Cloading ? "Processing" : "Completed"}
                            </Button>
                          )}
                          {request.status === "completed" && (
                            <Button
                              variant="success"
                              disabled
                              style={{
                                backgroundColor: "light-green",
                                borderColor: "#b8f7b2",
                                opacity: ".7",
                              }}
                            >
                              Completed
                            </Button>
                          )}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {!loading && withdrawalRequests.length === 0 && (
                  <div className="ml-5">No withdrawal requests found.</div>
                )}
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={withdrawalRequests.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default WithdrawPayment;
