import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Card, Spinner, Table, Button, Form } from "react-bootstrap";
import axios from "axios";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import SupportModal from "../Support/SupportModal";
import { useSelector } from "react-redux";

const HelpCenter = () => {
  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.CreatorId || "Unknown User"
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEcosystem, setSelectedEcosystem] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSupportID, setSelectedSupportID] = useState(null);
  const [selectedUserMessage, setSelectedUserMessage] = useState("");
  const [stats, setStats] = useState({
    totalHelpRequests: 0,
    totalCompletedHelpRequest: 0,
    totalPendingHelpRequest: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [helpDataResponse, helpcenterDataResponse] = await Promise.all([
          axios.get(
            `${
              import.meta.env.VITE_API_URL
            }/get-creator-help-request/${creatorId}`
          ),
          axios.get(
            `${
              import.meta.env.VITE_API_URL
            }/creator/my-help-request/${creatorId}`
          ),
        ]);

        // Combine the data
        const helpData = helpDataResponse.data;
        const helpcenterData = helpcenterDataResponse.data;

        setStats({
          totalHelpRequests:
            helpcenterData.totalHelpRequests || helpData.totalHelpRequests || 0,
          totalCompletedHelpRequest:
            helpcenterData.totalCompletedHelpRequest ||
            helpData.totalCompletedHelpRequest ||
            0,
          totalPendingHelpRequest:
            helpcenterData.totalPendingHelpRequest ||
            helpData.totalPendingHelpRequest ||
            0,
        });

        setData(helpData.creatorHelpRequest || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [creatorId]);

  const handleReply = (id, message) => {
    setSelectedSupportID(id);
    setSelectedUserMessage(message);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedSupportID(null);
    setSelectedUserMessage("");
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => {
          return "#" + row.id;
        },
      },
      { accessorKey: "ecosystemDomain", header: "Ecosystem Domain" },
      { accessorKey: "reason", header: "Reason" },
      { accessorKey: "message", header: "Message" },
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
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">
                Help Center
                <small
                  style={{
                    fontSize: "0.875rem",
                    color: "gray",
                    fontWeight: "normal",
                  }}
                >
                  (from your ecosystem users)
                </small>
              </h1>
              <p>
                Reply support ticket raise by all your ecosystem website users
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
                title="Total"
                value={stats.totalHelpRequests}
                summary="Number of help requests"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="UserChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Completed"
                value={stats.totalCompletedHelpRequest}
                summary="Number of completed requests"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4"
                chartName="VisitorChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Pending"
                value={stats.totalPendingHelpRequest}
                summary="Pending requests"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="BounceChart"
              />
            </Col>

            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Help Center"
                value={stats.totalHelpRequests}
                summary="Overall stats"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>
        </div>
      )}

      <Form.Control
        as="select"
        value={selectedEcosystem}
        onChange={(e) => setSelectedEcosystem(e.target.value)}
        className="mr-2"
        style={{
          fontSize: "0.875rem",
          padding: "0.5rem",
          maxWidth: "200px",
        }}
      >
        <option value="">All Ecosystems</option>
        {["Ecosystem 1", "Ecosystem 2", "Ecosystem 3", "Ecosystem 4"].map(
          (ecosystem, index) => (
            <option key={index} value={ecosystem}>
              {ecosystem}
            </option>
          )
        )}
      </Form.Control>

      <Card className="border-0 mt-4">
        <Card.Header>
          <h3 className="mb-0 h4">Help Center</h3>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row className="align-items-center">
              {/* Your FormSelect components */}
            </Row>
          )}
        </Card.Body>
        <Card.Body className="p-0 pb-4">
          {!loading && (
            <>
              {data.length === 0 ? (
                <div>No conflicts found.</div>
              ) : (
                <Table hover responsive className="text-nowrap table-centered">
                  <thead>
                    <tr>
                      {columns.map((column) => (
                        <th key={column.accessorKey}>{column.header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        {columns.map((column) => (
                          <td key={column.accessorKey}>
                            {column.accessorKey === "reason" ? (
                              <div>
                                <span>{row.reason}</span>
                              </div>
                            ) : column.accessorKey === "ecosystemDomain" &&
                              row.message.length > 30 ? (
                              <span
                                title={row.ecosystemDomain}
                                className="mb-1 text-primary-hover cursor-pointer"
                              >
                                {row.message.slice(0, 30)}...
                              </span>
                            ) : column.accessorKey === "message" &&
                              row.message.length > 30 ? (
                              <span
                                title={row.message}
                                className="mb-1 text-primary-hover cursor-pointer"
                              >
                                {row.message.slice(0, 30)}...
                              </span>
                            ) : column.accessorKey === "reply" ? (
                              <Button
                                variant="success"
                                size="sm"
                                onClick={() => handleReply(row.id, row.message)}
                              >
                                Reply
                              </Button>
                            ) : (
                              row[column.accessorKey]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </>
          )}
        </Card.Body>
        <SupportModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          supportID={selectedSupportID}
          userMessage={selectedUserMessage}
          onClose={handleModalClose}
        />
      </Card>
    </div>
  );
};

export default HelpCenter;
