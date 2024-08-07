import React, { useState, useMemo, useEffect } from "react";
import { Card, Spinner, Table, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import SupportModal from "../Support/SupportModal";

const Support = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSupportID, setSelectedSupportID] = useState(null);
  const [selectedUserMessage, setSelectedUserMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://unleashified-backend.azurewebsites.net/api/v1/all-contact-us"
      );
      setData(response.data.contactUs || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch support requests.");
      setLoading(false);
    }
  };

  const handleReply = (supportID, userMessage) => {
    setSelectedSupportID(supportID);
    setSelectedUserMessage(userMessage);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedSupportID(null);
    setSelectedUserMessage("");
  };

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "contact", header: "Contact" },
      { accessorKey: "reason", header: "Reason" },
      {
        accessorKey: "message",
        header: "Message",
        cell: ({ row }) =>
          row.message.length > 20 ? (
            <span title={row.message}>{row.message.slice(0, 20)}...</span>
          ) : (
            row.message
          ),
      },
      { accessorKey: "status", header: "Status" },
      {
        accessorKey: "reply",
        header: "Action",
        cell: ({ row }) => (
          <Button
            variant="success"
            size="sm"
            onClick={() => handleReply(row.id, row.message)}
          >
            Reply
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">
                Support{" "}
              </h1>
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
        <>
          <Row>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total"
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
                title="Pending"
                value={data
                  .filter((item) => item.status === "pending")
                  .length.toString()}
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Completed "
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
                title="Support"
                value={data.length.toString()}
                summary="Total support requests"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>

          <Card className="border-0 mt-4">
            <Card.Header>
              <h3 className="mb-0 h4">Support</h3>
            </Card.Header>
            <Card.Body>
              <Table hover responsive className="text-nowrap table-centered">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th key={column.accessorKey}>{column.header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={columns.length} className="text-center">
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </td>
                    </tr>
                  ) : data.length > 0 ? (
                    data.map((row) => (
                      <tr key={row.id}>
                        {columns.map((column) => (
                          <td key={column.accessorKey}>
                            {column.cell
                              ? column.cell({ row })
                              : row[column.accessorKey]}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="text-center">
                        No Support requests available
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>

            <SupportModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              supportID={selectedSupportID}
              userMessage={selectedUserMessage}
              onClose={handleModalClose}
              type="support"
              fetchData={fetchData}
            />
          </Card>
        </>
      )}
    </>
  );
};

export default Support;
