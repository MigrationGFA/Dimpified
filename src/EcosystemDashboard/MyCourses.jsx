import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Trash, Edit, MoreVertical } from "react-feather";

import {
  Card,
  Row,
  Col,
  Dropdown,
  Image,
  Badge,
  Table,
  ListGroup,
  Tab,
  Nav,
  Spinner, // Import Spinner from React Bootstrap
} from "react-bootstrap";
import { FormSelect } from "../Components/elements/form-select/FormSelect";
import GlobalFilter from "../Components/elements/advance-table/GlobalFilter";
import Pagination from "../Components/elements/advance-table/Pagination";
import LevelIcon from "../Components/marketing/common/miscellaneous/LevelIcon";
import JobTable from "./ProductTable";
import InstructorProfileLayout from "./InstructorProfileLayout";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import axios from "axios"; // Import axios library
import { numberWithCommas } from "../helper/utils";



const MyJob = () => {
  let {ecosystemDomain} = useParams();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ongoingJobsHeader = [
    { accessorKey: "jobTitle", header: "Job Title" },
    { accessorKey: "jobSalary", header: "Job Salary" },
    { accessorKey: "deliveryDate", header: "Delivery Date" },
    { accessorKey: "action", header: "Action" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  const completedJobsHeader = [
    { accessorKey: "jobTitle", header: "Job Title" },
    { accessorKey: "jobSalary", header: "Job Salary" },
    { accessorKey: "userDetails", header: "User Name" },
    { accessorKey: "review", header: "Review" },
    { accessorKey: "completedDate", header: "Completed Date" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-products/${ecosystemDomain}`
        );
        setCourses(response.data.courses);
        setServices(response.data.services);
        // setProducts(response.data.products);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const allJobsHeader = [
    { accessorKey: "jobTitle", header: "Job Title" },
    { accessorKey: "jobSalary", header: "Job Salary" },

    { accessorKey: "deliveryDate", header: "Delivery Date" },
    { accessorKey: "status", header: "Status" },
    // { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

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

  return (
    <InstructorProfileLayout>
      <Card className="border-0">
        <Tab.Container defaultActiveKey="course">
          <Card>
            <Card.Header className="border-bottom-0 p-0 bg-white">
              <Nav className="nav-lb-tab">
                <Nav.Item>
                  <Nav.Link eventKey="course" className="mb-sm-3 mb-md-0">
                    Courses
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="service" className="mb-sm-3 mb-md-0">
                    Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="product" className="mb-sm-3 mb-md-0">
                    Digital Products
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Header>
              <div className="mb-3 mb-lg-0">
                <h3 className="mb-0">Products</h3>
                <p className="mb-0">
                  Manage your products and its update like live, draft, and insight.
                </p>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="all" className="pb-4">
                  {isLoading ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "200px" }}
                    >
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <JobTable header={allJobsHeader} data={courses} />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="ongoingjob" className="pb-4">
                  <JobTable
                    header={ongoingJobsHeader}
                    data={services}
                    jobId={services._id}
                    price={services.price}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="completedjob" className="pb-4">
                  <JobTable
                    header={completedJobsHeader}
                    data={Products}
                    jobId={Products._id}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Card>
    </InstructorProfileLayout>
  );
};

export default MyJob;
