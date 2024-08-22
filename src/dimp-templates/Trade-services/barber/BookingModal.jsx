import React, { useState } from "react";
import { Modal, Button, Form, Col, Row, Spinner, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ show, handleClose }) => {
  const [step, setStep] = useState(1);
  const [loading] = useState(false); // Loading is false since there's no API call
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([
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

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 3) {
      setStep(step - 1);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeSlotSelect = (slot) => {
    if (!slot.booked) {
      setSelectedTimeSlot(slot.time);
    }
  };

  const handleSubmit = () => {
    setSummary({ selectedDate, selectedTimeSlot, formData });
    setStep(step + 1);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="nism fs-3 alt-font">Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <Spinner animation="border" />}
        {!loading && step === 1 && (
          <div>
            <h5 className="nism fs-4 alt-font">Select Date & Time</h5>
            <Row>
              <Col md={5}>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()} 
                  inline 
                  className="form-control mt-3 alt-font"
                />
              </Col>
              <Col md={7}>
                <Row className="mt-3">
                  {timeSlots.map((slot, index) => (
                    <Col
                      key={index}
                      className={`time-slot ${slot.booked ? "booked" : ""} ${
                        selectedTimeSlot === slot.time ? "selected" : ""
                      }`}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      <Button
                        variant={slot.booked ? "secondary" : "outline-primary"}
                        disabled={slot.booked}
                        className="mb-3 fs-10px lh-3"
                        block
                      >
                        {slot.time}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" onClick={handleNextStep}>
                Next
              </Button>
            </div>
          </div>
        )}

        {!loading && step === 2 && (
          <Form>
            <h5>Enter Your Details</h5>
            <Form.Row>
              <Form.Group as={Col} controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
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
            </Form.Row>

            <Form.Row>
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

              <Form.Group as={Col} controlId="formService">
                <Form.Label>Service</Form.Label>
                <Form.Control
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleFormChange}
                required
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
                <strong>Date:</strong>{" "}
                {summary.selectedDate
                  ? summary.selectedDate.toDateString()
                  : "Not selected"}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {summary.selectedTimeSlot || "Not selected"}
              </p>
              <p>
                <strong>Name:</strong>{" "}
                {summary.formData.fullName || "Not provided"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
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
                <strong>Service:</strong>{" "}
                {summary.formData.service || "Not provided"}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {summary.formData.location || "Not provided"}
              </p>
            </Alert>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handlePrevStep}>
                Back
              </Button>
              <Button variant="outline-primary" onClick={() => window.print()}>
                Pay on Delivery
              </Button>
              <Button
                variant="primary"
                onClick={() => alert("Proceeding to payment gateway... (Mock)")}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
