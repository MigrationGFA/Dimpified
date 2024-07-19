import React, { useMemo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  Col,
  Image,
  Row,
  Table,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FormSelect } from "../../Components/elements/form-select/FormSelect";
import GlobalFilter from "../../Components/elements/advance-table/GlobalFilter";
import Pagination from "../../Components/elements/advance-table/Pagination";
import LevelIcon from "../../Components/marketing/common/miscellaneous/LevelIcon";
import StudentProfileLayout from "./StudentProfileLayout";
import axios from "axios";
// import { useGlobalContext } from "../context/AuthContext";

const MyCourses = () => {
  // const { userId } = useGlobalContext();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, [userId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://remsana-backend-testing.azurewebsites.net/api/v1/student-get-courses/${userId}`
      );

      if (Array.isArray(response.data.coursesData)) {
        const modifiedData = response.data.coursesData.map((course) => ({
          ...course,
          status:
            course.subscriptionStatus === "active" ? "Learning" : "Bookmarked",
        }));
        setCourses(modifiedData);
      } else {
        console.error(
          "Invalid response structure: coursesData is not an array"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
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
        accessorKey: "image",
        header: "Courses",
        cell: ({ row }) => {
          const course = row.original;
          const link =
            course.status === "Learning"
              ? `/:ecosystemDomain/User/single/learning/single-course?id=${course._id}`
              : `/:ecosystemDomain/:id`;
          return (
            <div className="d-lg-flex">
              <div>
                <Link to={link}>
                  <Image
                    src={course.image}
                    alt=""
                    className="rounded img-4by3-lg"
                  />
                </Link>
              </div>
              <div className="ms-lg-3 mt-2 mt-lg-0">
                <h4 className="mb-1 h5">
                  <Link to={link} className="text-inherit">
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
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => (
          <Badge bg={`${getValue() === "Learning" ? "info" : "success"}`}>
            {getValue()}
          </Badge>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => {
    if (!filtering) {
      return courses;
    }
    return courses.filter((course) =>
      course.title.toLowerCase().includes(filtering.toLowerCase())
    );
  }, [courses, filtering]);

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
    <StudentProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Courses</h3>
            <p className="mb-0">
              Manage your courses and its update like live, draft and insight.
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
          {loading && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              {/* Display loading spinner */}
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}

          {!loading && (
            <Fragment>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Table
                    hover
                    responsive
                    className="text-nowrap table-centered"
                  >
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
    </StudentProfileLayout>
  );
};

export default MyCourses;
