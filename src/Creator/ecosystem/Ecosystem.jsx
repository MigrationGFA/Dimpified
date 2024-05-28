import React from "react";
import { Col, Row, Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import Ecosystem1 from "../../assets/GFA logo Rebrand Blue.png";

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

  return { days, hours: hours % 24, minutes: minutes % 60 };
}

const Ecosystem = () => {
  const getTimeDifferenceString = (time) => {
    if (time.days > 0) {
      return `${time.days} days ago`;
    } else if (time.hours > 0) {
      return `${time.hours} hours ago`;
    } else {
      return `${time.minutes} minutes ago`;
    }
  };

  //   const time = getTimeDifference(item.updatedAt);
  //   const timeString = getTimeDifferenceString(time);

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
            title="USER"
            value="30.6k"
            summary="Number of sales"
            summaryValue="+20.9$"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="UserChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="UNIQUE VISITORS"
            value="256k"
            summary="Number of pending"
            summaryValue="5%"
            summaryIcon="down"
            showSummaryIcon
            classValue="mb-4"
            chartName="VisitorChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="BOUNCE RATE"
            value="51.46%"
            summary="Students"
            summaryValue="+1200"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="BounceChart"
          />
        </Col>

        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightChart
            title="AVERAGE VISIT TIME"
            value="1m:17s"
            summary="Instructor"
            summaryValue="12%"
            summaryIcon="up"
            showSummaryIcon
            classValue="mb-4"
            chartName="AverageVisitTimeChart"
          />
        </Col>
      </Row>
      <Card className="card-bordered mb-4 card-hover cursor-pointer">
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
                    <span>May 24, 2024, 3:30pm</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h3 className="mb-1 fs-4">
                      <Link to="" className="text-inherit me-1">
                        Commencement of the Gateway Online Program
                      </Link>
                    </h3>
                    <div>
                      <span>category of Fitness</span>

                      <span className="ms-0">(0 Reviews)</span>
                    </div>
                    <span className="mt-2">
                      Service Description: this was used to send emails to the
                      choosen participants
                    </span>
                    <div className="d-md-flex justify-content-between ">
                      <div className="mb-2 mb-md-0">
                        <span className="me-2">
                          <i className="fe fe-clock text-muted"></i>
                          <span className="ms-1 ">Published</span>
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
                      <h3 className="text-inherit me-1">345678</h3>
                      <h4>Users</h4>
                    </h3>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* Button group */}
                    <div>
                      <Button
                        variant="outline-primary"
                        className="me-2 mb-2 mb-md-0"
                        //   onClick={() => navigate(`/jobs/edit-a-service/${item._id}`)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outline-danger"
                        //   onClick={handleDelete}
                      >
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
      <Card className="card-bordered mb-4 card-hover cursor-pointer">
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
                    <span>May 24, 2024, 3:30pm</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h3 className="mb-1 fs-4">
                      <Link to="" className="text-inherit me-1">
                        Commencement of the Gateway Online Program
                      </Link>
                    </h3>
                    <div>
                      <span>category of Fitness</span>

                      <span className="ms-0">(0 Reviews)</span>
                    </div>
                    <span className="mt-2">
                      Service Description: this was used to send emails to the
                      choosen participants
                    </span>
                    <div className="d-md-flex justify-content-between ">
                      <div className="mb-2 mb-md-0">
                        <span className="me-2">
                          <i className="fe fe-clock text-muted"></i>
                          <span className="ms-1 ">Published</span>
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
                      <h3 className="text-inherit me-1">345678</h3>
                      <h4>Users</h4>
                    </h3>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* Button group */}
                    <div>
                      <Button
                        variant="outline-primary"
                        className="me-2 mb-2 mb-md-0"
                        //   onClick={() => navigate(`/jobs/edit-a-service/${item._id}`)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outline-danger"
                        //   onClick={handleDelete}
                      >
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
    </div>
  );
};

export default Ecosystem;
