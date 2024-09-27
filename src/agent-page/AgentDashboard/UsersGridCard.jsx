import React, { Fragment, useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { Col, Card, Image, Row, Form, Spinner } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/person.png";
import { useSelector } from "react-redux";
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const UsersGridCard = ({ userDetails }) => {
  const authFetch = AxiosInterceptor();
  const [instructors, setInstructorsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    usersThisMonth: 0,
    uniqueSubscribedUsersCount: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.AffiliateId
  );

  const instructorsPerPage = 8;
  const pagesVisited = pageNumber * instructorsPerPage;
  const pageCount = Math.ceil(instructors.length / instructorsPerPage);

  const changePage = ({ selected }) => setPageNumber(selected);

  // Memoized fetch function to avoid redefining on every render
  const fetchStats = useCallback(async () => {
    if (creatorId && authFetch) {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/affiliate-onboarded-users-blocks/${creatorId}`;
        const { data } = await authFetch.get(apiUrl);
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    }
  }, [creatorId, authFetch]);

  // Fetch stats when creatorId is available
  useEffect(() => {
    if (creatorId) {
      fetchStats();
    }
  }, [creatorId, fetchStats]);

  // Set user details on initial load and stop loading after that
  useEffect(() => {
    if (Array.isArray(userDetails)) {
      setInstructorsList(userDetails.slice(0, 500));
      setLoading(false);
    }
  }, [userDetails]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterInstructors(term);
  };

  const filterInstructors = useCallback(
    (term) => {
      const filteredInstructors = userDetails.filter((instructor) =>
        Object.values(instructor)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setInstructorsList(filteredInstructors.slice(0, 500));
      setPageNumber(0);
    },
    [userDetails]
  );

  const displayInstructors = instructors
    .slice(pagesVisited, pagesVisited + instructorsPerPage)
    .map((instructor) => (
      <Col xl={3} lg={6} md={6} sm={12} key={instructor.id}>
        <Card className="mb-5" style={{ height: "500px" }}>
          <Card.Body>
            <div className="text-center">
              <Image
                src={instructor.imageUrl ?? avatar}
                className="rounded-circle avatar-xl mb-3"
                alt="Instructor Avatar"
              />
              <h4 className="mb-0">{instructor.organizationName}</h4>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2 mt-4">
              <span>Email</span>
              <span className="text-dark" style={{ width: "150px" }}>
                {instructor.email}
              </span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Date Joined</span>
              <span className="text-dark">{formatDate(instructor.createdAt)}</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Chosen Audience</span>
              <span className="text-dark">
                {instructor.numberOfTargetAudience ?? 0}
              </span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>No of Transactions</span>
              <span className="text-dark">{instructor.transactionNumber}</span>
            </div>
            <div className="d-flex justify-content-between border-bottom py-2">
              <span>Website User Count</span>
              <span className="text-dark">{instructor.userCount}</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));

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
                title="Subscribed Users"
                value={stats.uniqueSubscribedUsersCount}
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
                type="search"
                placeholder="Search Users"
                value={searchTerm}
                onChange={handleSearch}
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
};

export default UsersGridCard;
