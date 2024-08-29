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
// import BookingTable from "./ProductTable";
import InstructorProfileLayout from "./InstructorProfileLayout";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import axios from "axios"; // Import axios library
import { numberWithCommas } from "../helper/utils";
import BookingTable from "./BookingTable";

const Booking = () => {
  let { ecosystemDomain } = useParams();
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [todayBookings, setTodayBookings] = useState([]);
  const [weekBookings, setWeekBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const oneWeekHeader = [
    {
      accessorKey: "nameAndBookingId",
      header: "Name & Booking ID",
      cell: (info) => (
        <span>
          {info.row.original.name} | {info.row.original.bookingId}
        </span>
      ),
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: (info) => (
        <span>
          {info.row.original.email} | {info.row.original.phone} |{" "}
          {info.row.original.address} | {info.row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "service",
      header: "Service & Price",
      cell: (info) => (
        <span>
          {info.row.original.service} | {info.row.original.price}
        </span>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: (info) => (
        <span>
          {info.row.original.date} | {info.row.original.time}
        </span>
      ),
    },
    { accessorKey: "bookingType", header: "Booking Type" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  const pendingHeader = [
    {
      accessorKey: "nameAndBookingId",
      header: "Name & Booking ID",
      cell: (info) => (
        <span>
          {info.row.original.name} | {info.row.original.bookingId}
        </span>
      ),
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: (info) => (
        <span>
          {info.row.original.email} | {info.row.original.phone} |{" "}
          {info.row.original.address} | {info.row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "service",
      header: "Service & Price",
      cell: (info) => (
        <span>
          {info.row.original.service} | {info.row.original.price}
        </span>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: (info) => (
        <span>
          {info.row.original.date} | {info.row.original.time}
        </span>
      ),
    },
    { accessorKey: "bookingType", header: "Booking Type" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  const completedHeader = [
    {
      accessorKey: "nameAndBookingId",
      header: "Name & Booking ID",
      cell: (info) => (
        <span>
          {info.row.original.name} | {info.row.original.bookingId}
        </span>
      ),
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: (info) => (
        <span>
          {info.row.original.email} | {info.row.original.phone} |{" "}
          {info.row.original.address} | {info.row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "service",
      header: "Service & Price",
      cell: (info) => (
        <span>
          {info.row.original.service} | {info.row.original.price}
        </span>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: (info) => (
        <span>
          {info.row.original.date} | {info.row.original.time}
        </span>
      ),
    },
    { accessorKey: "bookingType", header: "Booking Type" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  const allHeader = [
    {
      accessorKey: "nameAndBookingId",
      header: "Name & Booking ID",
      cell: (info) => (
        <span>
          {info.row.original.name} | {info.row.original.bookingId}
        </span>
      ),
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: (info) => (
        <span>
          {info.row.original.email} | {info.row.original.phone} |{" "}
          {info.row.original.address} | {info.row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "service",
      header: "Service & Price",
      cell: (info) => (
        <span>
          {info.row.original.service} | {info.row.original.price}
        </span>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: (info) => (
        <span>
          {info.row.original.date} | {info.row.original.time}
        </span>
      ),
    },
    { accessorKey: "bookingType", header: "Booking Type" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/booking-overview/${ecosystemDomain}`
        );
        // ${ecosystemDomain}
        setTodayBookings(response.data.todayBookings);
        setWeekBookings(response.data.weekBookings);
        setAllBookings(response.data.allBookings);
        setPending(response.data.pendingBookings);
        setCompleted(response.data.completedBookings);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const todayHeader = [
    {
      accessorKey: "nameAndBookingId",
      header: "Name & Booking ID",
      cell: (info) => (
        <span>
          {info.row.original.name} | {info.row.original.bookingId}
        </span>
      ),
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: (info) => (
        <span>
          {info.row.original.email} | {info.row.original.phone} |{" "}
          {info.row.original.address} | {info.row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "service",
      header: "Service & Price",
      cell: (info) => (
        <span>
          {info.row.original.service} | {info.row.original.price}
        </span>
      ),
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: (info) => (
        <span>
          {info.row.original.date} | {info.row.original.time}
        </span>
      ),
    },
    { accessorKey: "bookingType", header: "Booking Type" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "paymentStatus", header: "Payment Status" },
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
                  <Nav.Link eventKey="one-week" className="mb-sm-3 mb-md-0">
                    One week
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="pending" className="mb-sm-3 mb-md-0">
                    Pending
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="completed" className="mb-sm-3 mb-md-0">
                    Completed
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Header>
              <div className="mb-3 mb-lg-0">
                <h3 className="mb-0">Bookings</h3>
                <p className="mb-0">
                  Manage your bookings and its update like All booking, pending,
                  and completed.
                </p>
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
                    <BookingTable header={todayHeader} data={todayBookings} />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="one-week" className="pb-4">
                  <BookingTable
                    header={oneWeekHeader}
                    data={weekBookings}
                    serviceId={weekBookings._id}
                    price={weekBookings.price}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="all" className="pb-4">
                  <BookingTable
                    header={allHeader}
                    data={allBookings}
                    productId={allBookings._id}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="pending" className="pb-4">
                  <BookingTable
                    header={pendingHeader}
                    data={pending}
                    productId={pending._id}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="completed" className="pb-4">
                  <BookingTable
                    header={completedHeader}
                    data={completed}
                    productId={completed._id}
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

export default Booking;
