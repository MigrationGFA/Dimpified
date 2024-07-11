import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Col, Card, Image, Row, Form, Spinner } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { numberWithCommas } from "../../helper/utils";
// import { InstructorData } from "./InstructorData";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/avatar-1.jpg"
function InstructorsGridCard({ userDetails }) {
  const [instructors, setInstructorsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const instructorsPerPage = 8;
  const pagesVisited = pageNumber * instructorsPerPage;
  const pageCount = Math.ceil(instructors.length / instructorsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(userDetails)) {
      setInstructorsList(userDetails.slice(0, 500));
    }
    setLoading(false);
  }, [userDetails]);

   // Utility function to format the date
   const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const displayInstructors = instructors
    .slice(pagesVisited, pagesVisited + instructorsPerPage)
    .map((instructor) => {
      return (
        <Col xl={3} lg={6} md={6} sm={12} key={instructor.id}>
          <Card className="mb-5">
            <Card.Body>
              <div className="text-center">
                <Image
                  src={instructor.imageUrl == null ? avatar : instructor.imageUrl}
                  className="rounded-circle avatar-xl mb-3"
                  alt=""
                />
                <h4 className="mb-0">{instructor.lastName} {instructor.firstName}</h4>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2 mt-4">
                <span>Ecosystem</span>
                <span className="text-dark">{numberWithCommas(12345)}</span>
              </div>

              <div className="d-flex justify-content-between border-bottom py-2">
                <span>Date Joined</span>
                <span className="text-dark">{formatDate(instructor.createdAt)}</span>
              </div>

              <div className="d-flex justify-content-between pt-2">
                <span>Courses</span>
                <span className="text-dark"> {instructor.courses == null ? 0 : instructor.courses} </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEcosystem, setSelectedEcosystem] = useState("");

  const ecosystems = [
    "Ecosystem 1",
    "Ecosystem 2",
    "Ecosystem 3",
    "Ecosystem 4",
  ];

  const getSearchTerm = (event) => {
    let searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterInstructors(searchTerm, selectedEcosystem);
  };

  const handleEcosystemChange = (event) => {
    let ecosystem = event.target.value;
    setSelectedEcosystem(ecosystem);
    filterInstructors(searchTerm, ecosystem);
  };

  const filterInstructors = (searchTerm, ecosystem) => {
    let filteredInstructors = userDetails.filter((instructor) => {
      const matchesSearchTerm = Object.values(instructor)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesEcosystem = ecosystem
        ? instructor.ecosystem === ecosystem
        : true;
      return matchesSearchTerm && matchesEcosystem;
    });
    setInstructorsList(filteredInstructors.slice(0, 500));
    setPageNumber(0);
  };

  return (
    <Fragment>
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
                title="Completed "
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
                title="Pending "
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
                title="Total Paid Users"
                value="0"
                summary="Instructor"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4"
                chartName="AverageVisitTimeChart"
              />
            </Col>
          </Row>

          <div className="mb-4">
            <Form.Group className="d-flex align-items-center">
              <Form.Control
                as="select"
                value={selectedEcosystem}
                onChange={handleEcosystemChange}
                className="mr-2"
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem",
                  maxWidth: "200px",
                  marginRight: "10px",
                }}
              >
                <option value="">All Ecosystems</option>
                {ecosystems.map((ecosystem, index) => (
                  <option key={index} value={ecosystem}>
                    {ecosystem}
                  </option>
                ))}
              </Form.Control>
              <Form.Control
                type="search"
                placeholder="Search Ecosystem"
                value={searchTerm}
                onChange={getSearchTerm}
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem",
                  maxWidth: "300px",
                }}
              />
            </Form.Group>
          </div>
        </div>
      )}

      <Row>
        {displayInstructors.length > 0 ? (
          displayInstructors
        ) : (
          <Col>No matching instructors found.</Col>
        )}
      </Row>

      <ReactPaginate
        previousLabel={<ChevronLeft size="14px" />}
        nextLabel={<ChevronRight size="14px" />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"justify-content-center mb-0 pagination"}
        previousLinkClassName={"page-link mx-1 rounded"}
        nextLinkClassName={"page-link mx-1 rounded"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link mx-1 rounded"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"active"}
      />
    </Fragment>
  );
}

export default InstructorsGridCard;