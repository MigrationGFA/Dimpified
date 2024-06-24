import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash, Edit, MoreVertical } from "react-feather";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Card,
  Row,
  Col,
  Dropdown,
  Image,
  Badge,
  Table,
  ListGroup,
  Spinner // Import Spinner from React Bootstrap
} from "react-bootstrap";
import { FormSelect } from "../Components/elements/form-select/FormSelect";
import GlobalFilter from "../Components/elements/advance-table/GlobalFilter";
import Pagination from "../Components/elements/advance-table/Pagination";
import LevelIcon from "../UserDashboard/Components/marketing/common/miscellaneous/LevelIcon";
import InstructorProfileLayout from "./InstructorProfileLayout";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import axios from "axios"; // Import axios library
import { numberWithCommas } from "../helper/utils";
import { useGlobalContext } from "../context/AuthContext";

const MyCourses = () => {
  const { userId } = useGlobalContext();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [isLoading, setIsLoading] = useState(true); // State to indicate loading state

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/get-my-courses/${userId}`
      );
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      // After fetching data, set loading state to false
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [userId]);


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
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS</Dropdown.Header>
          <Link
            to="/Instructordashboard/instructor-edit-course"
            className="dropdown-item"
            key="1"
          >
            <Edit size="15px" className="dropdown-item-icon" /> Edit
          </Link>
          <Dropdown.Item eventKey="2">
            <Trash size="15px" className="dropdown-item-icon" /> Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  // const sortby = [
  //   { value: "Date Created", label: "Date Created" },
  //   { value: "Newest", label: "Newest" },
  //   { value: "High Rated", label: "High Rated" },
  //   { value: "Low Rated", label: "Low Rated" },
  //   { value: "High Earned", label: "High Earned" },
  // ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "level",
        header: "Level",
      },
      {
        accessorKey: "hour",
        header: "Hour",
      },
      {
        accessorKey: "image",
        header: "Courses",
        cell: ({ row }) => {
          const course = row.original;
          return (
            <div className="d-lg-flex">
              <div>
                <Link to="#">
                  <Image
                    src={course.image}
                    alt=""
                    className="rounded img-4by3-lg"
                  />
                </Link>
              </div>
              <div className="ms-lg-3 mt-2 mt-lg-0">
                <h4 className="mb-1 h5">
                  <Link to="#" className="text-inherit">
                    {course.title
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </Link>
                </h4>
                <ListGroup as="ul" bsPrefix="list-inline" className="fs-6 mb-0">
                  <ListGroup.Item as="li" bsPrefix="list-inline-item">
                    <i className="far fa-clock me-1"></i>
                    {course.hour}
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix="list-inline-item">
                    <LevelIcon level={course.level} />
                    {course.level}
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "totalNumberOfEnrolledStudent",
        header: "Students",
        cell: ({ row }) => {
          return numberWithCommas(row.original.totalNumberOfEnrolledStudent);
        },
      },
      {
        accessorKey: "rating",
        header: "Rating",
        cell: ({ row }) => {
          return (
            <Fragment>
              <span className="text-warning">
                {row.original.rating}
                <Icon path={mdiStar} size={0.6} />
              </span>
            </Fragment>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          return (
            <Badge
              bg={`${
                row.original.status === "pending"
                  ? "info"
                  : row.original.status === "live"
                  ? "success"
                  : row.original.status === "rejected"
                  ? "danger"
                  : "warning"
              } `}
            >
              {row.original.status}
            </Badge>
          );
        },
      },
      {
        accessorKey: "action",
        header: "",
        cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    []
  );

  const data = useMemo(() => courses, [courses]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setFiltering,
    debugTable: false,
    initialState: {
      columnVisibility: {
        title: false,
        level: false,
        hour: false,
      },
    },
  });

  return (
    <InstructorProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Courses</h3>
            <p className="mb-0">
              Manage your courses and its update like live, draft, and insight.
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={9} md={7} sm={12} className="mb-lg-0 mb-2">
              <GlobalFilter
                filtering={filtering}
                setFiltering={setFiltering}
                placeholder="Search Your Courses"
              />
            </Col>
            <Col lg={3} md={5} sm={12}>
              {/* <FormSelect options={sortby} placeholder="Sort by" /> */}
            </Col>
          </Row>
        </Card.Body>
        <Card.Body className="p-0 pb-5">
          {isLoading ? ( // Conditional rendering of Spinner while loading
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <Fragment>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Table hover responsive className="text-nowrap table-centered">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                </Table>
                </Col>
              </Row>
              <Pagination table={table} />
            </Fragment>
          )}
        </Card.Body>
      </Card>
    </InstructorProfileLayout>
  );
};

export default MyCourses;