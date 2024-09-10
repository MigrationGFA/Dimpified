import React, { Fragment, useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Trash, Edit, MoreVertical } from "react-feather";

import {
  Card,
  Tab,
  Nav,
  Spinner, // Import Spinner from React Bootstrap
} from "react-bootstrap";
import JobTable from "./OrderTable";
import InstructorProfileLayout from "./InstructorProfileLayout";
import axios from "axios"; // Import axios library


const Order = () => {
  let { ecosystemDomain } = useParams();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-products/${ecosystemDomain}`
        );
        setCourses(response.data.courses);
        setServices(response.data.services);
        setProducts(response.data.products);
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

  const renderContent = (header, data, dataName) => {
    if (isLoading) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      );
    } else if (!data || data.length <= 0) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          You don't have any orders for {dataName}
        </div>
      );
    } else {
      const currencyName = data.length > 0 && data[0].course ? data[0].course.currency : "NGN";
      return <JobTable header={header} data={data} currencyName={currencyName} />;
    }
  };

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
              <h3 className="mb-0">My Products</h3>
                <p className="mb-0">
                  Manage your Products and its update like live, draft, and
                  insight.
                </p>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Tab.Content>
                <Tab.Pane eventKey="course" className="pb-4">
                  {renderContent(courseHeader, courses, "courses")}
                </Tab.Pane>
                <Tab.Pane eventKey="service" className="pb-4">
                  {renderContent(serviceHeader, services, "services")}
                </Tab.Pane>
                <Tab.Pane eventKey="product" className="pb-4">
                  {renderContent(productHeader, products, "products")}
                </Tab.Pane>
              </Tab.Content>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Card>
    </InstructorProfileLayout>
  );
};

export default Order;
