import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card, Image, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../Components/elements/advance-table/Pagination";
import { updateField, setEcosystemId } from "../../features/ecosystem";
// Function to shorten a message
function shortenMessage(message, maxLength = 20) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  }
  return message;
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
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
  const timeDifference = currentTime - updatedAtDate;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const formattedDate = formatDateWithOrdinal(updatedAtDate);

  return `${formattedDate}`;
}

const Ecosystem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ecosystems, setEcosystems] = useState([]);
  const [ecosystemData, setEcosystemData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showFallback, setShowFallback] = useState(false);
  const [url, setEcoUrl] = useState(null);

  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.CreatorId || "Unknown User"
  );

  const role = useSelector((state) => state.authentication.user?.data?.role);

  const getLink = () => {
    if (role === "creator" || role === "Enterprise") {
      return "/creator/dashboard/New-Ecosystem";
    } else if (role === "consumer") {
      return "/creator/dashboard/New-Ecosystem/individual";
    } else {
      return "";
    }
  };

  const getMyEcosystems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/creator-ecosystems/${creatorId}`
      );
      setEcosystems(response.data.ecosystem);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getMyEcosystemData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/creator/my-ecosystem/${creatorId}`
      );
      setEcosystemData(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyEcosystems();
    getMyEcosystemData();
  }, [creatorId]);

  const saveEcoLogo = (ecoLogo, ecosystemDomain) => {
    console.log("this is the logo", ecoLogo);
    sessionStorage.setItem("ecoLogo", ecoLogo);
    sessionStorage.setItem("ecosystemDomain", ecosystemDomain);

    const newUrl = `${window.location.origin}/${ecosystemDomain}/Ecosystemdashboard`;

    // Open the URL in a new tab
    window.open(newUrl, "_blank");
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ecosystems?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // to share ecosystem

  const handleShare = async (ecosystemName, ecosystemDomain) => {
    try {
      // Check if Web Share API is supported by the browser
      if (navigator.share) {
        await navigator.share({
          title: ecosystemName,
          url: `${window.location.origin}/${ecosystemDomain}`,
        });
        console.log("Page shared successfully");
      } else {
        console.log("coming here");
        setEcoUrl(`${window.location.origin}/${ecosystemDomain}`);
        // Show fallback for browsers that don't support Web Share API
        setShowFallback(true);
      }
    } catch (error) {
      console.error("Error sharing page:", error);
    }
  };

  const handleCopy = (ecosystemDomain) => {
    // Copy the URL to the clipboard
    const siteNme = `${window.location.origin}/${ecosystemDomain}`;
    navigator.clipboard.writeText(siteNme);
  };

  const handleContinue = async (ecosystemName, ecosystemDomain, steps, id) => {
    console.log("Ecosystem Name:", ecosystemName);
    console.log("Ecosystem Domain:", ecosystemDomain);
    console.log("Steps:", steps);
    console.log("ID:", id);

    dispatch(updateField({ field: "ecosystemName", value: ecosystemName }));
    dispatch(updateField({ field: "ecosystemDomain", value: ecosystemDomain }));
    dispatch(setEcosystemId(id));

    if (steps === 2) {
      navigate("/creator/dashboard/Create-Form");
    } else if (steps === 1) {
      navigate("/creator/dashboard/Edit-Template");
    } else if (steps === 0) navigate("/creator/dashboard/New-Ecosystem");
  };

  return (
    <div>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-sm-flex justify-content-between align-items-center">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">All Ecosystem</h1>
            </div>
            <div>
              <Link to={getLink()}>
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
            title="Total Live"
            value={ecosystemData.totalLive}
            summary="Number of sales"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Total Private"
            value={ecosystemData.totalPrivate}
            summary="Number of pending"
            summaryIcon="down"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="Total Draft"
            value={ecosystemData.totalDrafts}
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
            value={ecosystemData.totalUsers}
            summary="Total users in ecosystems"
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
                  <div className="" style={{ width: "200px" }}>
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
                        <div>
                          {eco.steps && eco.steps === 3 ? (
                            <div>
                              <Button
                                variant="primary"
                                className="me-2 mb-2 mb-md-0"
                                onClick={() =>
                                  saveEcoLogo(
                                    eco.templateLogos[0].logoPath,
                                    eco.ecosystemDomain
                                  )
                                }
                              >
                                Dashboard
                              </Button>
                              <a
                                href={`${window.location.origin}/${eco.ecosystemDomain}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  variant="primary"
                                  className="me-2 mb-2 mb-md-0"
                                >
                                  View Site
                                </Button>
                              </a>
                              <Button
                                variant="primary"
                                className="me-2 mb-2 mb-md-0"
                                onClick={() =>
                                  handleShare(
                                    eco.ecosystemName,
                                    eco.ecosystemDomain
                                  )
                                }
                              >
                                Share
                              </Button>
                            </div>
                          ) : (
                            <Button
                              variant="outline-primary"
                              className="me-2 mb-2 mb-md-0"
                              onClick={() =>
                                handleContinue(
                                  eco.ecosystemName,
                                  eco.ecosystemDomain,
                                  eco.steps,
                                  eco._id
                                )
                              }
                            >
                              Continue
                            </Button>
                          )}
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
        <p>No ecosystems available.</p>
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={ecosystems.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      {showFallback && (
        <Modal show={showFallback} onHide={() => setShowFallback(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Copy Job Link</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={url} readOnly /> <br />
            <Button className="mt-5 " onClick={handleCopy}>
              Copy
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowFallback(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Ecosystem;
