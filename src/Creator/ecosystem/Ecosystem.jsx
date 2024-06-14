import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Ecosystem1 from "../../assets/GFA logo Rebrand Blue.png";
import axios from "axios";
import { useSelector } from "react-redux";

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
  // Parse the updatedAt string to a Date object
  const updatedAtDate = new Date(updatedAt);

  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime - updatedAtDate;

  // Convert milliseconds to minutes
  const minutes = Math.floor(timeDifference / (1000 * 60));

  // Convert minutes to hours
  const hours = Math.floor(minutes / 60);

  // Convert hours to days
  const days = Math.floor(hours / 24);

  // Format the updatedAt date
  const formattedDate = formatDateWithOrdinal(updatedAtDate);

  // Return combined string
  return `${formattedDate}`;
}

const Ecosystem = () => {
  const [ecosystem, setEcosystem] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.authentication.user);
  const userId = user?.data?.CreatorId || "Unknown User";

  const getMyEcosystems = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/creator-ecosystems/${userId}`
      );
      setEcosystem(response.data.ecosystem);
      console.log("this is ecosystem", ecosystem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEcosystems();
  }, []);

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
            // summaryValue="+20.9$"
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
            // summaryValue="5%"
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
            // summaryValue="+1200"
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
            // summaryValue="12%"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="AverageVisitTimeChart"
          />
        </Col>
      </Row>
      {ecosystem && ecosystem.length > 0 ? (
        ecosystem.map((eco) => (
          <Card
            key={eco._id}
            className="card-bordered mb-4 card-hover cursor-pointer"
          >
            <Card.Body>
              <div>
                <div className="d-md-flex">
                  <div className="">
                    <Image
                      src={Ecosystem1}
                      alt="Ecosystem"
                      className="img-fluid"
                      style={{ maxHeight: "100px", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="ms-md-3 w-100 mt-3 mt-xl-1">
                    <div className="d-md-flex justify-content-between ">
                      <div>
                        <i className="fe fe-clock text-muted"></i>
                        {/* <span>{timeString}</span> */}
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
                          <Button
                            variant="primary"
                            className="me-2 mb-2 mb-md-0"
                          >
                            Dashboard
                          </Button>
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
        <div>You have not create any Ecosystem</div>
      )}
    </div>
  );
};

export default Ecosystem;
