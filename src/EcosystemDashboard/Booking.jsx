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
  Modal,
  Form,
  Button
} from "react-bootstrap";
// import BookingTable from "./ProductTable";
import InstructorProfileLayout from "./InstructorProfileLayout";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import axios from "axios"; // Import axios library
import { numberWithCommas } from "../helper/utils";
import BookingTable from "./BookingTable";
import { showToast } from "../Components/Showtoast";

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
  const [showModal, setShowModal] = useState(false); 
  const [onsiteBooking, setOnsiteBooking] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    price: "",
    date: "",
    time: "",
  });

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
    { accessorKey: "action", header: "Action" },
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
  
    fetchJobs();
  }, []);

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

  const handleOnsiteBookingChange = (e) => {
    const { name, value } = e.target;
    setOnsiteBooking((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleOnsiteBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/onsite-booking`,
        {
          ...onsiteBooking,
          ecosystemDomain,
        }
      );
      console.log("Onsite booking created:", response.data);
      showToast(response.data.message);
      fetchJobs();
      setShowModal(false); 
      setOnsiteBooking("");
    } catch (error) {
      console.error("Error creating onsite booking:", error);
      showToast(error.response.data.error);
    }
  };

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
              <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0">Bookings</h3>
            {/* Button to trigger modal */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Create Onsite Booking
            </Button>
          </div>
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


       {/* Modal for creating onsite booking */}
       <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Onsite Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnsiteBookingSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={onsiteBooking.name}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={onsiteBooking.email}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={onsiteBooking.phone}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={onsiteBooking.location}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                    type="text"
                    name="service"
                    value={onsiteBooking.service}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    value={onsiteBooking.price}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={onsiteBooking.date}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={onsiteBooking.time}
                    onChange={handleOnsiteBookingChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Button variant="primary" type="submit">
                  Submit Booking
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </InstructorProfileLayout>
  );
};

export default Booking;
