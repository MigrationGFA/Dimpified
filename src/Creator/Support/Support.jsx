import React, { useState, useEffect, useMemo } from "react";
import {
  Col,
  Row,
  Card,
  Spinner,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import { showToast } from "../../Components/Showtoast";
import PaginationComponent from "../../Components/elements/advance-table/Pagination";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const Support = () => {
  const user = useSelector((state) => state.authentication.user);
  const creatorId = user?.data?.CreatorId;
  const authFetch = AxiosInterceptor();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ reason: "", message: "" });
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    if (creatorId) {
      fetchData();
    }
  }, [creatorId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await authFetch.get(
        `${
          import.meta.env.VITE_API_URL
        }/support-request-by-a-creator/${creatorId}`
      );
      console.log("Fetched data:", response.data);
      setData(response.data.supportRequestByCreator || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (!creatorId) {
      showToast("Creator Id is required");
      return;
    }
    setReviewLoading(true);
    try {
      const response = await authFetch.post(
        `${import.meta.env.VITE_API_URL}/creator-support`,
        {
          reason: formData.reason,
          message: formData.message,
          creatorId: creatorId,
        }
      );
      console.log("Submitted data:", response.data);
      showToast(response.data.message);
      setData((prevData) => [...prevData, response.data.data]);
      setShowModal(false);
      setFormData({ reason: "", message: "" });
    } catch (error) {
      console.error("Error submitting support request:", error);
      showToast(
        error.response?.data?.message || "Error submitting support request"
      );
    } finally {
      setReviewLoading(false);
    }
  };

  const handleAction = async (id) => {
    const rowIndex = data.findIndex((row) => row.id === id);
    if (rowIndex !== -1) {
      try {
        const updatedData = [...data];
        updatedData[rowIndex].Cloading = true;
        setData(updatedData);

        const response = await axios.put(
          `https://dimpified-backend.azurewebsites.net/api/v1/contact-us/${id}/completed`
        );
        showToast(response.data.message);

        updatedData[rowIndex].status = "completed";
        setData(updatedData);

        // Set message and show modal
        setModalMessage(response.data.message);
        setShowMessageModal(true);
      } catch (error) {
        showToast(error.response?.data?.message || "Error completing action");
      } finally {
        const updatedData = [...data];
        updatedData[rowIndex].Cloading = false;
        setData(updatedData);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 15;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ getValue }) => {
          return "#" + getValue();
        },
      },
      { accessorKey: "reason", header: "Reason" },
      { accessorKey: "message", header: "Message" },
      {
        accessorKey: "createdAt",
        header: "Date",
        cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => getValue() || "N/A",
      },
      // {
      //   header: "Completed",
      //   accessorKey: "completed",
      //   cell: ({ row }) => (
      //     <Button
      //       variant="success"
      //       onClick={() => row && handleAction(row.original.id)}
      //       disabled={row && row.original.status === "completed"}
      //       style={{
      //         backgroundColor: "green",
      //         borderColor: "#b8f7b2",
      //         color: "white",
      //         opacity: row && row.original.status === "completed" ? 0.5 : 1,
      //       }}
      //     >
      //       Completed
      //     </Button>
      //   ),
      // },
    ],
    [data]
  );

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">
                Support{" "}
                <small
                  style={{
                    fontSize: "0.875rem",
                    color: "gray",
                    fontWeight: "normal",
                  }}
                >
                  (from you to us)
                </small>
              </h1>
              <p>
                Keep track of your previous support ticket or create new submit
                support requests.
              </p>
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
                title="Total Support"
                value={data.length.toString()}
                summary="Number of support requests"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="UserChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Pending Support Request"
                value={data
                  .filter((item) => item.status === "pending")
                  .length.toString()}
                summary="Number of pending"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Completed Support Request"
                value={data
                  .filter((item) => item.status === "completed")
                  .length.toString()}
                summary="Number of completed"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="BounceChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Support Request"
                value={data.length.toString()}
                summary="Total support requests"
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
                  Support Request
                </Button>
              </div>
            </Col>
          </Row>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Support Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="contactReason">
                  <Form.Label>Support Reason</Form.Label>
                  <Form.Select
                    name="reason"
                    onChange={handleInputChange}
                    value={formData.reason}
                  >
                    <option value="">Select</option>
                    <option value="Template Upgrade">Template Upgrade</option>
                    <option value="Pricing features">Pricing features</option>
                    <option value="Payment Issues">Payment Issues</option>
                    <option value="Ecosystem Upgrade">Ecosystem Upgrade</option>
                    <option value="Others">Others</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                    placeholder="Enter your message here"
                    rows={3}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleSubmitReview}
                disabled={reviewLoading}
              >
                {reviewLoading ? "Submitting..." : "Submit Request"}
              </Button>
            </Modal.Footer>
          </Modal>

          <Row>
            <Col lg={12} md={12} sm={12}>
              <Card className="border-0">
                <Card.Header>
                  <h4 className="mb-0">Support Requests </h4>
                </Card.Header>
                <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        {columns.map((column) => (
                          <th key={column.accessorKey}>{column.header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item) => (
                        <tr key={item.id}>
                          {columns.map((column) => (
                            <td key={column.accessorKey}>
                              {column.cell
                                ? column.cell({
                                    getValue: () => item[column.accessorKey],
                                    row: { original: item },
                                  })
                                : item[column.accessorKey]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
                <Card.Footer>
                  <PaginationComponent
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          {/* Message Modal */}
          <Modal
            show={showMessageModal}
            onHide={() => setShowMessageModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Action Completed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{modalMessage}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowMessageModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Support;
