import React, { useMemo, useState, useEffect, Fragment } from "react";
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
import { InstructorData } from "./InstructorData";
import StatRightChart from "../../Creator/analytics/stats/StatRightChart";
import avatar from "../../assets/images/avatar/avatar-1.jpg";

const InstructorsListItems = ({ userDetails }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEcosystem, setSelectedEcosystem] = useState("");
  const [instructors, setInstructorsList] = useState([]);

  // useEffect(() => {
  //     setLoading(false);
  // }, []);

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
            <h5 className="mb-0">{getValue()}</h5>
          </div>
        ),
      },
      // { accessorKey: 'topic', header: 'Topic' },
      { accessorKey: "courses", header: "Courses" },
      { accessorKey: "joined", header: "Joined" },
      {
        accessorKey: "Ecosystem",
        header: "Ecosystem",
        cell: ({ getValue }) => numberWithCommas(12345),
      },
      // {
      //     accessorKey: 'rating',
      //     header: 'Rating',
      //     cell: ({ getValue }) => (
      //         <div className="align-middle text-warning border-top-0">
      //             {getValue()} <Icon path={mdiStar} size={0.6} />
      //         </div>
      //     )
      // },
      {
        accessorKey: "message",
        header: "",
        cell: () => (
          <div className="align-middle border-top-0">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={<Tooltip id={`tooltip-top`}>Message</Tooltip>}
            >
              <Link href="#">
                <Mail size="15px" className="dropdown-item-icon" />
              </Link>
            </OverlayTrigger>
          </div>
        ),
      },
      {
        accessorKey: "delete",
        header: "",
        cell: () => (
          <div className="align-middle border-top-0">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
            >
              <Link href="#">
                <Trash size="15px" className="dropdown-item-icon" />
              </Link>
            </OverlayTrigger>
          </div>
        ),
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
  // useMemo(() => InstructorData, []);

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
                title="Total "
                value="1"
                summary="Number of sales"
                summaryIcon="up"
                showSummaryIcon
                classValue="mb-4 custom-background"
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
                classValue="mb-4 custom-background"
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
                classValue="mb-4 custom-background"
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
                <option value="">All Ecosystems</option>
                {ecosystems.map((ecosystem, index) => (
                  <option key={index} value={ecosystem}>
                    {ecosystem}
                  </option>
                ))}
              </Form.Control>
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
        </div>
      )}
      <TanstackTable
        data={data}
        columns={columns}
        filter={false}
        pagination={true}
      />
    </Fragment>
  );
};

export default InstructorsListItems;
