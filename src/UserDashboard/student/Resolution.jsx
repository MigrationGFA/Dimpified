import React, { useState, useEffect } from "react";
import { Button, Card, Spinner, Tab, Modal, FormSelect, Form } from "react-bootstrap";
import StudentProfileLayout from "./StudentProfileLayout";
import ResolutionTable from "./ResolutionTable";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Resolution = () => {
  const user = useSelector((state) => state.authentication.user.data);
  const userId = user.UserId;
  const { ecosystemDomain } = useParams();
  const [resolution, setResolution] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showResolutionModal, setShowResolutionModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const allJobsHeader = [
    { accessorKey: "id", header: "Id" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "reason", header: "Reason" },
    { accessorKey: "message", header: "Message" },
    { accessorKey: "status", header: "Status" },
  ];

  useEffect(() => {
    const fetchAllResolutions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-ecoysytem-user-help-request/${userId}/${ecosystemDomain}`
        );
        setResolution(response.data.ecosystemUserHelpRequest);
      } catch (error) {
        console.error("Error fetching all jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllResolutions();
  }, []);

  const handleResolutionRequest = () => {
    setShowResolutionModal(true);
  };

  const handleCloseModal = () => {
    setShowResolutionModal(false);
    setSelectedContact(null);
    setMessage("");
  };

  const handleResolutionSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/enduser-help-requests`,
        {
          userId,
          reason: selectedContact,
          message,
          ecosystemDomain,
        }
      );
      setLoading(false);
      handleCloseModal();
      showToast(response.data.message);
    } catch (error) {
      setLoading(false);
      console.error(error);
      showToast(error.response.data.message);
    }
  };

  const contactOptions = [
    { value: "Fraud", label: "Fraud" },
    { value: "Job Submission", label: "Job Submission" },
    { value: "Service", label: "Service" },
    { value: "Payment Withdrawal", label: "Payment Withdrawal" },
    { value: "Non Payment", label: "Non Payment" },
  ];

  return (
    <StudentProfileLayout>
      <Card className="border-0">
        <Tab.Container defaultActiveKey="all">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="mb-0">Help Center</h3>
                  <p className="mb-0">Track your support ticket</p>
                </div>
                <Button
                  variant="primary"
                  onClick={handleResolutionRequest}
                  className="btn-sm btn-lg"
                >
                  Create Ticket
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="all" className="pb-4">
                  {isLoading ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "200px" }}
                    >
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <ResolutionTable header={allJobsHeader} data={resolution} />
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Card>

      <Modal show={showResolutionModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Resolution Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Reason</Form.Label>
            <Form.Select
              value={selectedContact}
              name="reason"
              onChange={(e) => setSelectedContact(e.target.value)}
              placeholder="Select Reason..."
            >
              {contactOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Message</Form.Label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {loading ? (
            <Button variant="primary" disabled style={{ opacity: ".7" }}>
              Processing
            </Button>
          ) : (
            <Button variant="primary" onClick={handleResolutionSubmit}>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </StudentProfileLayout>
  );
};

export default Resolution;
