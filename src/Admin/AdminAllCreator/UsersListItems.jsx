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
import StatRightChart from "../analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/person.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersListItems = ({ userDetails }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEcosystem, setSelectedEcosystem] = useState("");
  const [instructors, setInstructorsList] = useState([]);
  const [stats, setStats] = useState({});

  const creatorId = useSelector(
    (state) => state.authentication.user?.data?.CreatorId
  );

  useEffect(() => {
    const fetchStats = async () => {
      if (creatorId) {
        try {
          const apiUrl = `${
            import.meta.env.VITE_API_URL
          }/ecosystem-users-stats/${creatorId}`;
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
    getCreatorDashboard();
  }, [userDetails]);

  // Utility function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleViewClick = (id) => {
    // Handle click event for View button
    navigate(`/admin/creator-single-page?id=${id}`);
  };

  const getCreatorDashboard = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin-creator-dashboard-overview`
      );
      setStats(response.data.dashboardData);
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
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
          <a href="#" onClick={() => handleViewClick(row.original.id)}>
            {" "}
            <div className="d-flex align-items-center">
              <Image
                src={
                  row.original.imageUrl == null ? avatar : row.original.imageUrl
                }
                alt=""
                className="rounded-circle avatar-md me-2"
              />
              <h5 className="mb-0">
                {getValue()} {row.original.organizationName}
              </h5>
            </div>{" "}
          </a>
        ),
      },
      {
        accessorKey: "products",
        header: "Products",
        cell: ({ getValue, row }) => (
          <div className="d-flex align-items-center">
            <h5 className="mb-0">
              {row.original.digitalProductCount +
                row.original.serviceCount +
                row.original.courseCount}
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
        accessorKey: "Ecosystem",
        header: "Ecosystem",
        cell: ({ getValue, row }) => row.original.ecosystemCount,
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

  const ecosystems = [
    "Ecosystem 1",
    "Ecosystem 2",
    "Ecosystem 3",
    "Ecosystem 4",
  ];

  const getSearchTerm = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterInstructors(searchTerm, selectedEcosystem);
  };

  const handleEcosystemChange = (event) => {
    const ecosystem = event.target.value;
    setSelectedEcosystem(ecosystem);
    filterInstructors(searchTerm, ecosystem);
  };

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
                title="Total"
                value={stats.totalCreators}
                summary="Number of sales"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="UserChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Verified"
                value={stats.totalVerifiedCreators}
                summary="Number of pending"
                summaryIcon="down"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="VisitorChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Unverified "
                value={stats.totalUnverifiedCreators}
                summary="Students"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
                chartName="BounceChart"
              />
            </Col>
            <Col xl={3} lg={6} md={12} sm={12}>
              <StatRightChart
                title="Have ecosystem"
                value={stats.totalCreatorsWithEcosystem}
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
                className="mr-2 custom-form-control"
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem",
                  maxWidth: "200px",
                  marginRight: "10px",
                }}
              >
                <option value="">All Creators</option>
                {ecosystems.map((ecosystem, index) => (
                  <option key={index} value={ecosystem}>
                    {ecosystem}
                  </option>
                ))}
              </Form.Control>
              <Form.Control
                type="search"
                placeholder="Search Creator"
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
