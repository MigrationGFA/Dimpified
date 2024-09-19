import React, { useMemo, useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Image,
  OverlayTrigger,
  Tooltip,
  Form,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { MoreVertical, Trash, Edit, Mail } from "react-feather";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import TanstackTable from "../../Components/elements/advance-table/TanstackTable";
import { numberWithCommas } from "../../helper/utils";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/person.png";

const UsersListItems = ({ userDetails }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEcosystem, setSelectedEcosystem] = useState("");
  const [instructors, setInstructorsList] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    usersThisMonth: 0,
    uniqueSubscribedUsersCount: 0,
  });

  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.AffiliateId
  );

  useEffect(() => {
    const fetchStats = async () => {
      if (creatorId) {
        try {
          const apiUrl = `${
            import.meta.env.VITE_API_URL
          }/affiliate-onboarded-users-blocks/${creatorId}`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          setStats(data);
        } catch (error) {
          console.error("Failed to fetch stats:", error);
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

  // Utility function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  const ActionMenu = () => {
    // return (
    //     <Dropdown>
    //         <Dropdown.Toggle as={CustomToggle}>
    //             <MoreVertical size="15px" className="text-secondary" />
    //         </Dropdown.Toggle>
    //         <Dropdown.Menu align="end">
    //             <Dropdown.Header>SETTINGS</Dropdown.Header>
    //             <Dropdown.Item eventKey="1">
    //                 <Edit size="15px" className="dropdown-item-icon" /> Edit
    //             </Dropdown.Item>
    //             <Dropdown.Item eventKey="2">
    //                 <Trash size="15px" className="dropdown-item-icon" /> Remove
    //             </Dropdown.Item>
    //         </Dropdown.Menu>
    //     </Dropdown>
    // );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue, row }) => (
          <div className="d-flex align-items-center">
            <Image
              src={
                row.original.imageUrl == null ? avatar : row.original.imageUrl
              }
              alt=""
              className="rounded-circle avatar-md me-2"
            />
            <div className="">
              <h5 className="mb-0">
                {getValue()} {row.original.organizationName}
              </h5>
              <h5 className="mb-0">
                {getValue()} {row.original.email}
              </h5>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "Audience",
        header: "Chosen Audience",
        cell: ({ getValue, row }) => (
          <div className="d-flex align-items-center">
            <h5 className="mb-0">
              {row.original.numberOfTargetAudience == null
                ? 0
                : row.original.numberOfTargetAudience}
            </h5>
          </div>
        ),
      },
      {
        accessorKey: "joined",
        header: "Joined",
        cell: ({ getValue, row }) => formatDate(row.original.createdAt),
      },
      {
        accessorKey: "websiteCount",
        header: "Website User Count",
        cell: ({ getValue, row }) => row.original.userCount,
      },
      {
        accessorKey: "shortcutmenu",
        header: "",
        cell: () => <ActionMenu />,
      },
    ],
    []
  );

  const data = userDetails;

  // const ecosystems = [
  //   "Ecosystem 1",
  //   "Ecosystem 2",
  //   "Ecosystem 3",
  //   "Ecosystem 4",
  // ];

  const getSearchTerm = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterInstructors(searchTerm, selectedEcosystem);
  };

  // const handleEcosystemChange = (event) => {
  //   const ecosystem = event.target.value;
  //   setSelectedEcosystem(ecosystem);
  //   filterInstructors(searchTerm, ecosystem);
  // };

  const filterInstructors = (searchTerm, ecosystem) => {
    const filteredInstructors = userDetails.filter((instructor) => {
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
                value={`${numberWithCommas(stats.uniqueSubscribedUsersCount)}`}
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
              {/* <Form.Control
                as="select"
                value={selectedEcosystem}
                onChange={handleEcosystemChange}
                className="mr-2 custom-form-control"
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
              </Form.Control> */}
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
