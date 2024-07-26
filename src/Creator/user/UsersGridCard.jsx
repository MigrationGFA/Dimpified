import React, { Fragment, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Col, Card, Image, Row, Form, Spinner } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/person.png";
import { useSelector } from "react-redux";

function UsersGridCard({ userDetails }) {
  const [instructors, setInstructorsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    usersThisMonth: 0,
    totalAmountPaid: 0,
  });

  // Get creatorId from Redux state
  const creatorId = useSelector((state) => state.authentication.user?.data?.CreatorId);

  const instructorsPerPage = 8;
  const pagesVisited = pageNumber * instructorsPerPage;
  const pageCount = Math.ceil(instructors.length / instructorsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchStats = async () => {
      if (creatorId) {
        try {
          // Use environment variable to construct the API URL
          const apiUrl = `${import.meta.env.VITE_API_URL}/ecosystem-users-stats/${creatorId}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          setStats(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchStats();
  }, [creatorId]);

  useEffect(() => {
    if (Array.isArray(userDetails)) {
      setInstructorsList(userDetails.slice(0, 500));
    }
    setLoading(false);
  }, [userDetails]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const displayInstructors = instructors
    .slice(pagesVisited, pagesVisited + instructorsPerPage)
    .map((instructor) => (
      <Col xl={3} lg={6} md={6} sm={12} key={instructor.id}>
        <Card className="mb-5">
          <Card.Body>
            <div className="text-center">
              <Image
                src={instructor.imageUrl == null ? avatar : instructor.imageUrl}
                className="rounded-circle avatar-xl mb-3"
                alt=""
              />
              <h4 className="mb-0">
                {instructor.lastName} {instructor.firstName}
              </h4>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2 mt-4">
              <span>Ecosystem</span>
              <span className="text-dark">{instructor.ecosystemDomain}</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Date Joined</span>
              <span className="text-dark">{formatDate(instructor.createdAt)}</span>
            </div>
            <div className="d-flex justify-content-between pt-2">
              <span>Products</span>
              <span className="text-dark">{instructor.products == null ? 0 : instructor.products}</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));

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
                title="Total users"
                value={stats.totalUsers}
                summary="Number of sales"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="UserChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Verified Users"
                value={stats.verifiedUsers}
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="VisitorChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Users this month"
                value={stats.usersThisMonth}
                summary="Students"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="BounceChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Total Amount Paid"
                value={stats.totalAmountPaid}
                summary="Instructor"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
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
        </div>
      )}
    </Fragment>
  );
}

export default UsersGridCard;
