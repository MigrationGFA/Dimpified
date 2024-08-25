import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Col,
  Row,
  Spinner,
  Alert,
  Table,
  Container,
} from "react-bootstrap";
import { Printer, CreditCard } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ show, handleClose }) => {
  const [step, setStep] = useState(1);
  const [loading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots] = useState([
    { time: "07:30 AM", booked: false },
    { time: "08:00 AM", booked: false },
    { time: "08:30 AM", booked: false },
    { time: "09:00 AM", booked: false },
    { time: "09:30 AM", booked: false },
    { time: "10:00 AM", booked: false },
    { time: "10:30 AM", booked: false },
    { time: "11:00 AM", booked: false },
    { time: "11:30 AM", booked: false },
    { time: "12:00 PM", booked: false },
    { time: "12:30 PM", booked: false },
    { time: "01:00 PM", booked: false },
    { time: "01:30 PM", booked: false },
    { time: "02:00 PM", booked: false },
    { time: "02:30 PM", booked: false },
    { time: "03:00 PM", booked: false },
    { time: "03:30 PM", booked: false },
    { time: "04:00 PM", booked: false },
    { time: "04:30 PM", booked: false },
    { time: "05:00 PM", booked: false },
    { time: "05:30 PM", booked: false },
    { time: "06:00 PM", booked: false },
    { time: "06:30 PM", booked: false },
    { time: "07:00 PM", booked: false },
    { time: "07:30 PM", booked: false },
    { time: "08:00 PM", booked: false },
    { time: "08:30 PM", booked: false },
    { time: "09:00 PM", booked: false },
    { time: "09:30 PM", booked: false },
    { time: "10:00 PM", booked: false },
  ]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    service: "",
    location: "",
  });
  const [summary, setSummary] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const [services, setServices] = useState([]);
  const [servicePrice, setServicePrice] = useState("");
  const [uniqueID, setUniqueID] = useState("");
  const generateUniqueID = () => {
    const randomID = `#SB-${Math.floor(100000 + Math.random() * 900000)}`;
    setUniqueID(randomID);
  };

  const serviceOptions = {
    "Home Service": {
      Haircut: "₦5,000",
      "Hair styling": "₦7,000",
      Shaving: "₦3,000",
      "Beard sculpting": "₦4,500",
      "Kids haircut": "₦4,000",
    },
    Shop: {
      Haircut: "₦3,000",
      "Hair styling": "₦5,000",
      Shaving: "₦2,000",
      "Beard sculpting": "₦3,500",
      "Kids haircut": "₦2,500",
    },
    // Add more locations and services as needed
  };

  useEffect(() => {
    if (formData.location) {
      setServices(Object.keys(serviceOptions[formData.location]));
    } else {
      setServices([]);
      setServicePrice("");
    }
  }, [formData.location]);

  useEffect(() => {
    if (formData.service && formData.location) {
      setServicePrice(serviceOptions[formData.location][formData.service]);
    } else {
      setServicePrice("");
    }
  }, [formData.service, formData.location]);

  const handleNextStep = (nextStep) => {
    if (nextStep === 3) {
      generateUniqueID();
    }
    if (nextStep <= 4) setStep(nextStep);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleDateChange = (date) => setSelectedDate(date);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeSlotSelect = (slot) => {
    if (!slot.booked) setSelectedTimeSlot(slot.time);
  };

  const handleSubmit = () => {
    setSummary({ selectedDate, selectedTimeSlot, formData });
    handleNextStep(3);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus("paid");
    handleNextStep(4);
  };

  const handlePayOnDelivery = () => {
    setPaymentStatus("unpaid");
    handleNextStep(4);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      className="nism fs-4 alt-font"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="nism fs-3 alt-font">
          Book Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <Spinner animation="border" />}

        {!loading && step === 1 && (
          <div>
            <Row>
              <Col md={5} className="border rounded-md p-3">
                <h5 className="nism fs-4 alt-font">Select Date</h5>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  inline
                  className="rounded rounded-pill border align-items-center"
                />
              </Col>
              <Col md={7}>
                <Row className="border rounded-lg p-3">
                  <h5 className="nism fs-4 alt-font">Select Time</h5>
                  {timeSlots.map((slot, index) => (
                    <Col
                      md={4}
                      sm={6}
                      key={index}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      <Button
                        className={`p-1 mb-2 px-1 btn btn-outline-primary
                          ${
                            selectedTimeSlot === slot.time &&
                            "btn-primary text-white"
                          }`}
                        disabled={slot.booked}
                        variant=" w-100 rounded rounded-pill"
                      >
                        {slot.time}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" onClick={() => handleNextStep(2)}>
                Next
              </Button>
            </div>
          </div>
        )}

        {!loading && step === 2 && (
          <Form>
            <h4>Enter Your Details</h4>
            <Row>
              <Form.Group as={Col} controlId="formFullName">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Client address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              {" "}
              <Form.Group as={Col} controlId="formLocation">
                <Form.Label>Client convenient location</Form.Label>
                <Form.Control
                  as="select"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  required
                >
                  <option>Select your convenient location</option>
                  <option value="Home Service">Home Service</option>
                  <option value="Shop">Shop</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formService">
                <Form.Label>Preffered service</Form.Label>
                <Form.Control
                  as="select"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  disabled={!formData.location}
                >
                  <option value="">Select preffered service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group controlId="formPrice">
              <Form.Label>Service price</Form.Label>
              <Form.Control
                type="text"
                value={servicePrice}
                readOnly
                disabled
              />
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handlePrevStep}>
                Back
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </Form>
        )}

        {!loading && step === 3 && summary && (
          <div>
            <h5>Summary & Payment</h5>
            <Alert variant="info">
              <p>
                <strong>Unique ID:</strong> {uniqueID}
              </p>
              <p>
                <strong>Date booked :</strong>{" "}
                {summary.selectedDate
                  ? summary.selectedDate.toDateString()
                  : "Not selected"}
              </p>
              <p>
                <strong>Time booked:</strong>{" "}
                {summary.selectedTimeSlot || "Not selected"}
              </p>
              <p>
                <strong>Full name:</strong>{" "}
                {summary.formData.fullName || "Not provided"}
              </p>
              <p>
                <strong>Client address:</strong>{" "}
                {summary.formData.address || "Not provided"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {summary.formData.phone || "Not provided"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {summary.formData.email || "Not provided"}
              </p>
              <p>
                <strong>Preffered service:</strong>{" "}
                {summary.formData.service || "Not selected"}
              </p>
              <p>
                <strong>Client convenient location:</strong>{" "}
                {summary.formData.location || "Not selected"}
              </p>
              <p>
                <strong>Service price:</strong> {servicePrice || "N/A"}
              </p>
            </Alert>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handlePrevStep}>
                Back
              </Button>
              <Button variant="success" onClick={handlePaymentSuccess}>
                Proceed to Payment
              </Button>
              <Button variant="primary" onClick={handlePayOnDelivery}>
                Pay-on-Delivery <Printer className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {!loading && step === 4 && summary && (
          <div>
            <h4>Print Invoice</h4>
            <Alert variant={paymentStatus === "paid" ? "success" : "warning"}>
              <Container className="w-100 w-xs-100 py-2 chat-container">
                <div className="invoice-inner-part h-100">
                  <div className="invoiceing-box">
                    <div className="invoice-header d-flex align-items-center border-bottom">
                      <h4 className="text-uppercase mb-0">Invoice</h4>
                      <div className="ms-auto">
                        <h4 className="invoice-number"></h4>
                      </div>
                    </div>
                    <div className="p-3" id="custom-invoice">
                      <div
                        className="invoice-123"
                        id="printableArea"
                        style={{ display: "block" }}
                      >
                        <Row className="pt-3">
                          <Col md={12}>
                            <div className="text-end">
                              <address>
                                <p className="mt-2 mb-1">{uniqueID}</p>

                                <h6>Booked by:</h6>
                                <h3 className="fw-bold invoice-Client">
                                  {summary.formData.fullName || "Not provided"}
                                </h3>
                                <p className="ms-4">
                                  {summary.formData.address || "Not provided"}
                                </p>
                                <p className="mt-2 mb-1">
                                  {" "}
                                  {summary.formData.email || "Not provided"}
                                </p>
                                <p className="mt-2 mb-1">
                                  {" "}
                                  {summary.formData.phone || "Not provided"}
                                </p>
                              </address>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="table-responsive mt-5">
                              <Table hover>
                                <thead>
                                  <tr>
                                    <th className="text-end">Service</th>
                                    <th className="text-end">Date Booked</th>
                                    <th className="text-end">Time Booked</th>
                                    <th className="text-end">Location</th>
                                    <th className="text-end">Payment Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="text-end">
                                      {summary.formData.service ||
                                        "Not provided"}
                                    </td>
                                    <td className="text-end">
                                      {summary.selectedDate
                                        ? summary.selectedDate.toDateString()
                                        : "Not selected"}
                                    </td>
                                    <td className="text-end">
                                      {summary.selectedTimeSlot ||
                                        "Not selected"}
                                    </td>
                                    <td className="text-end">
                                      {summary.formData.location ||
                                        "Not provided"}
                                    </td>
                                    <td className="text-end">
                                      {paymentStatus === "unpaid" &&
                                        "(To be paid on delivery)"}
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="pull-right mt-4 text-end">
                              <hr />
                              <h3>
                                <b>Total :</b> {servicePrice || "N/A"}
                              </h3>
                            </div>
                            <div className="clearfix"></div>
                            <hr />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
              {/* <Container className="w-75 w-xs-100 chat-container">
                <div className="invoice-container">
                  <h4 className="text-muted">
                    {paymentStatus === "paid"
                      ? "Payment Successful!"
                      : "Pay on service delivery"}
                  </h4>
                  <p className="text-secondary">
                    Date:{" "}
                    {summary.selectedDate
                      ? summary.selectedDate.toDateString()
                      : "Not selected"}
                  </p>
                  <p className="text-secondary">
                    Time: {summary.selectedTimeSlot || "Not selected"}
                  </p>
                  <p className="text-secondary">
                    Service: {summary.formData.service || "Not provided"}
                  </p>
                  <p className="text-secondary">
                    Amount Due: ₦10,000.00{" "}
                    {paymentStatus === "unpaid" && "(To be paid on delivery)"}
                  </p>
                </div>
              </Container> */}
            </Alert>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handlePrevStep}>
                Back
              </Button>
              <Button variant="primary" onClick={handlePrint}>
                Print Invoice
              </Button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
