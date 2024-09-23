import React, { useMemo, useState, useEffect, Fragment, useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Spinner, Row, Col, Image } from "react-bootstrap";
import TanstackTable from "../../Components/elements/advance-table/TanstackTable";
import { numberWithCommas } from "../../helper/utils";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/person.png";
import AxiosInterceptor from "../../Components/AxiosInterceptor";
import debounce from "lodash.debounce"; // for debouncing search input

const UsersListItems = ({ userDetails }) => {
  const authFetch = AxiosInterceptor(); // Removed memoization
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [instructors, setInstructorsList] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    usersThisMonth: 0,
    uniqueSubscribedUsersCount: 0,
  });

  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.id
  );

  // Fetch stats only once when creatorId is available
  useEffect(() => {
    const fetchStats = async () => {
      if (creatorId && authFetch) {
        try {
          const apiUrl = `${import.meta.env.VITE_API_URL}/affiliate-onboarded-users-blocks/${creatorId}`;
          const response = await authFetch.get(apiUrl);
          setStats(response.data);
        } catch (error) {
          console.error("Failed to fetch stats:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (creatorId && !stats.totalUsers) { // Fetch only if stats are not already loaded
      fetchStats();
    }
  }, [creatorId, authFetch, stats.totalUsers]);

  // Set instructors list when userDetails change
  useEffect(() => {
    if (Array.isArray(userDetails) && userDetails.length > 0) {
      setInstructorsList(userDetails.slice(0, 500));
    }
  }, [userDetails]);

  // Debounced search filter logic
  const filterInstructors = useCallback(
    debounce((searchTerm) => {
      if (!userDetails) return;
      const filteredInstructors = userDetails.filter((instructor) => {
        const matchesSearchTerm = Object.values(instructor)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesSearchTerm;
      });
      setInstructorsList(filteredInstructors.slice(0, 500));
    }, 300),
    [userDetails]
  );

  const getSearchTerm = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    filterInstructors(newSearchTerm);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue, row }) => (
          <div className="d-flex align-items-center">
            <Image
              src={row.original.imageUrl || avatar}
              alt=""
              className="rounded-circle avatar-md me-2"
            />
            <div>
              <h5 className="mb-0">
                {getValue()} {row.original.organizationName}
              </h5>
              <h5 className="mb-0">{row.original.email}</h5>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "Audience",
        header: "Chosen Audience",
        cell: ({ row }) => (
          <h5 className="mb-0">
            {row.original.numberOfTargetAudience || 0}
          </h5>
        ),
      },
      {
        accessorKey: "joined",
        header: "Joined",
        cell: ({ row }) => formatDate(row.original.createdAt),
      },
      {
        accessorKey: "websiteCount",
        header: "Website User Count",
        cell: ({ row }) => row.original.userCount,
      },
      {
        accessorKey: "shortcutmenu",
        header: "",
        cell: () => <div>Action Menu Placeholder</div>, // Example action menu placeholder
      },
    ],
    []
  );

  // Utility function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
                value={numberWithCommas(stats.totalUsers)}
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
                value={numberWithCommas(stats.verifiedUsers)}
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="VisitorChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Users This Month"
                value={numberWithCommas(stats.usersThisMonth)}
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
                value={numberWithCommas(stats.uniqueSubscribedUsersCount)}
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
                placeholder="Search"
                value={searchTerm}
                onChange={getSearchTerm}
                className="custom-form-control"
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem",
                  maxWidth: "300px",
                }}
              />
            </Form.Group>
          </div>
          <TanstackTable columns={columns} data={instructors} />
        </div>
      )}
    </Fragment>
  );
};

export default UsersListItems;
