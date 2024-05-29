import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Col, Row, Card, Spinner, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import { numberWithCommas } from "../../helper/utils";
import { showToast } from "../../Components/Showtoast";

const Support = () => {
  const [dashboardData, setDashboardData] = useState({
    monthlySeeker: 1,
    totalSeeker: 1,
    monthlyProvider: 1,
    totalProvider: 1,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Cloading, setCLoading] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://unleashified-backend.azurewebsites.net/api/v1/all-contact-us"
      );
      return response.data.contactUs || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ getValue }) => {
          return "#" + getValue();
        },
      },
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "contact", header: "Contact" },
      { accessorKey: "reason", header: "Reason" },
      { accessorKey: "message", header: "Message" },
      {
        header: "Completed",
        accessorKey: "completed",
        cell: ({ row }) => (
          <Button
            variant="success"
            onClick={() => row && handleAction(row.id, "Completed")}
            disabled={row && row.status === "completed"}
            style={{
              backgroundColor: "green",
              borderColor: "#b8f7b2",
              color: "white",
              opacity: row && row.status === "completed" ? 0.5 : 1,
            }}
          >
            Completed
          </Button>
        ),
      },
    ],
    []
  );

  const handleAction = async (id) => {
    const rowIndex = data.findIndex((row) => row.id === id);
    if (rowIndex !== -1) {
      try {
        const updatedData = [...data];
        updatedData[rowIndex].Cloading = true;
        setData(updatedData);

        const response = await axios.put(
          `https://unleashified-backend.azurewebsites.net/api/v1/contact-us/${id}/completed`
        );
        showToast(response.data.message);
      } catch (error) {
        showToast(error.response.data.message);
      } finally {
        const updatedData = [...data];
        updatedData[rowIndex].Cloading = false;
        setData(updatedData);
      }
    }
  };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Support</h1>
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
                title="Pending Support Request"
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
                title="Completed Support Request"
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
                title="Support Request"
                value="0"
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
              <h3 className="mb-0 h4">Support Requests</h3>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                {/* Your FormSelect components */}
              </Row>
            </Card.Body>
            <Card.Body className="p-0 pb-4">
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <Fragment>
                  <Table hover responsive className="text-nowrap table-centered">
                    <thead>
                      <tr>
                        {columns.map((column) => (
                          <th key={column.accessorKey}>{column.header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data && data.length > 0 ? (
                        data.map((row) => (
                          <tr key={row.id}>
                            {columns.map((column) => (
                              <td key={column.accessorKey}>
                                {column.accessorKey === "message" &&
                                row.message.length > 20 ? (
                                  <span
                                    title={row.message}
                                    className="mb-1 text-primary-hover cursor-pointer"
                                  >
                                    {row.message.slice(0, 20)}...
                                  </span>
                                ) : (
                                  row[column.accessorKey]
                                )}
                                {column.accessorKey === "completed" && (
                                  <Button
                                    variant="success"
                                    onClick={() => handleAction(row.id)}
                                    disabled={
                                      row.status === "completed" || row.Cloading
                                    }
                                    style={{
                                      backgroundColor: "green",
                                      borderColor: "#b8f7b2",
                                      color: "white",
                                      opacity:
                                        row.status === "completed" || row.Cloading
                                          ? 0.6
                                          : 1,
                                    }}
                                  >
                                    {row.Cloading ? "Processing" : "Completed"}
                                  </Button>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))
                      ) : (
                        <div className="p-12">No Support request available</div>
                      )}
                    </tbody>
                  </Table>
                  <div className="mt-4">{/* Pagination */}</div>
                </Fragment>
              )}
              {!loading && data.length === 0 && <div>No data found.</div>}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Support;
