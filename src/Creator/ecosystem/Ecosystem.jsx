import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Ecosystem1 from "../../assets/GFA logo Rebrand Blue.png";
import axios from "axios";
import { useSelector } from "react-redux";
import Pagination from "../../Components/elements/advance-table/Pagination"; 

// Function to shorten a message
function shortenMessage(message, maxLength = 20) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  }
  return message;
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th"; // Covers 11th to 20th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formatDateWithOrdinal(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix = day + getOrdinalSuffix(day);

  return `${dayWithSuffix} ${month}, ${year}`;
}

function getTimeDifference(updatedAt) {
  const updatedAtDate = new Date(updatedAt);
  const currentTime = new Date();
  const formattedDate = formatDateWithOrdinal(updatedAtDate);

  return `${formattedDate}`;
}

const Ecosystem = () => {
  const [ecosystem, setEcosystem] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 10; // Number of items per page

  const user = useSelector((state) => state.authentication.user);
  const userId = user?.data?.CreatorId || "Unknown User";

  const getMyEcosystems = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/creator-ecosystems/${userId}`
      );
      setEcosystem(response.data.ecosystem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEcosystems();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ecosystem.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-sm-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">All Ecosystem</h1>
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

      <Row>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Total "
            value="30"
            summary="Number of sales"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Private"
            value="5"
            summary="Number of pending"
            summaryIcon="down"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Draft"
            value="5"
            summary="Students"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="BounceChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Total Users"
            value="20,000"
            summary="Instructor"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="AverageVisitTimeChart"
          />
        </Col>
      </Row>
      {currentItems && currentItems.length > 0 ? (
        currentItems.map((eco) => (
          <Card
            key={eco._id}
            className="card-bordered mb-4 card-hover cursor-pointer"
          >
            <Card.Body>
              <div>
                <div className="d-md-flex">
                  <div
                    className=""
                    style={{
                      width: "200px",
                    }}
                  >
                    <Image
                      src={
                        eco.templateLogos && eco.templateLogos.length > 0
                          ? eco.templateLogos[0].logoPath
                          : null
                      }
                      alt="Ecosystem"
                      className="img-fluid"
                      style={{ maxHeight: "100px", width: "150px" }}
                    />
                  </div>
                  <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                    <div className="d-md-flex justify-content-between ">
                      <div>
                        <i className="fe fe-clock text-muted"></i>
                        <span>{getTimeDifference(eco.createdAt)}</span>
                      </div>
                    </div>
                    <div className="d-md-flex justify-content-between mb-3">
                      <div>
                        <h3 className="mb-1 fs-4">
                          <Link to="" className="text-inherit me-1">
                            {eco.ecosystemName}
                          </Link>
                        </h3>
                        <div>Sector: {eco.targetAudienceSector}</div>
                        <p className="mt-2">
                          <strong> Ecosystem Description:</strong> <br />
                          <span>
                            {shortenMessage(eco.ecosystemDescription)}
                          </span>
                        </p>
                        <div className="d-md-flex justify-content-between ">
                          <div className="mb-2 mb-md-0">
                            <span className="me-2">
                              <i className="fe fe-clock text-muted"></i>
                              <span className="ms-1 ">
                                {eco.status.toUpperCase()}
                              </span>
                            </span>

                            <span className="me-2">
                              <i className="fe fe-briefcase text-muted"></i>
                              <span className="ms-1 ">Adefemi Omotayo</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 fs-4">
                          <h3 className="text-inherit me-1">
                            {eco.users.toString()}
                          </h3>
                          <h4>Users</h4>
                        </h3>
                      </div>

                      <div className="d-flex mt-5 md-mt-0 justify-content-between md-align-items-center">
                        {/* Button group */}
                        <div>
                          <a
                            href={`http://localhost:5173/show=true/${eco.ecosystemDomain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="primary"
                              className="me-2 mb-2 mb-md-0"
                            >
                              Dashboard
                            </Button>
                          </a>
                          <Button
                            variant="outline-primary"
                            className="me-2 mb-2 mb-md-0"
                          >
                            Continue
                          </Button>

                          <Button variant="outline-danger" className="md-mt-4">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>You have not created any Ecosystem</div>
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={ecosystem.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Ecosystem;
