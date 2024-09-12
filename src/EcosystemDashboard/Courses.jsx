import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  Tab,
  Nav,
  Spinner, // Import Spinner from React Bootstrap
} from "react-bootstrap";
import InstructorProfileLayout from "./InstructorProfileLayout";
import axios from "axios"; // Import axios library
import CoursesTable from "./CoursesTable";
import AxiosInterceptor from "../Components/AxiosInterceptor";

const Course = () => {
  let { ecosystemDomain } = useParams();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authFetch = AxiosInterceptor();

  const serviceHeader = [
    { accessorKey: "image", header: "Service Image" },
    { accessorKey: "title", header: "Service Header" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "format", header: "Service Format" },
    // { accessorKey: "price", header: "Price" },
    { accessorKey: "deliveryDate", header: "Date Created" },
    { accessorKey: "action", header: "Action" },
  ];

  const productHeader = [
    { accessorKey: "image", header: "Product Image" },
    { accessorKey: "title", header: "Product Name" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "productType", header: "Product Type" },
    // { accessorKey: "price", header: "Price" },
    { accessorKey: "deliveryDate", header: "Date Created" },
    { accessorKey: "action", header: "Action" },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await authFetch.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-orders/${ecosystemDomain}`
        );
        setCourses(response.data.courses);
        // setServices(response.data.services);
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

  const courseHeader = [
    { accessorKey: "image", header: "Course Image" },
    { accessorKey: "title", header: "Course Name" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "totalNumberOfEnrolledStudent", header: "No of Students" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "deliveryDate", header: "Date Created" },
    { accessorKey: "action", header: "Action" },
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
        <Tab.Container defaultActiveKey="today">
          <Card>
            <Card.Header className="border-bottom-0 p-0 bg-white">
              <Nav className="nav-lb-tab">
                <Nav.Item>
                  <Nav.Link eventKey="today" className="mb-sm-3 mb-md-0">
                    Today
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="oneWeek" className="mb-sm-3 mb-md-0">
                    One Week
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                    All
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Header>
              <div className="mb-3 mb-lg-0">
                <h3 className="mb-0"> Course Orders</h3>
                <p className="mb-0">Manage your course orders.</p>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="today" className="pb-4">
                  {isLoading ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "200px" }}
                    >
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <CoursesTable header={courseHeader} data={courses} />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="oneWeek" className="pb-4">
                  <CoursesTable
                    header={courseHeader}
                    data={courses}
                    // serviceId={services._id}
                    // price={services.price}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="all" className="pb-4">
                  <CoursesTable
                    header={courseHeader}
                    data={courses}
                    // productId={products._id}
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

export default Course;
