import axios from "axios";
import { showToast } from "../../Components/Showtoast";
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
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const BookingModal = ({ show, setModalShow, information }) => {
  const [step, setStep] = useState(1);
  const [loading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    console.log("this is information", information);
  }, []);
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
    description: "",
  });
  const [summary, setSummary] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const [uniqueID, setUniqueID] = useState("");
  const [loadingSubmit, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  // payment part
  // flutterwave payment
  const generateTxRef = () => {
    const randomString = Math.random().toString(36).substring(7);
    const timestamp = Date.now();
    return `${timestamp}-${randomString}`;
  };

  const percentageCalculation = (information.price * 2.5) / 100;
  const totalAmount = information.price + percentageCalculation;

  const handleFlutterPayment = useFlutterwave({
    public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
    tx_ref: generateTxRef(),
    amount: totalAmount,
    currency: information.currency,
    payment_options: "card,mobilemoney,ussd,banktransfer,opay,account,",
    customer: {
      email: formData.email,
      phone_number: formData.phone,
      name: formData.fullName,
    },
    customizations: {
      title: "Booking Payment",
      description: "Service Payment",
      logo: sessionStorage.getItem("ecoLogo"),
    },
  });

  const verifyFlutterwave = async (tx_ref) => {
    console.log("this is verify txt", tx_ref);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/verify-booking-payment`,
        {
          reference: tx_ref,
          email: formData.email,
          itemType: "Booking",
          userId: "not available",
          provider: "flutterwave",
          bookingId: bookingId,
          ecosystemDomain: information.domain,
        }
      );
      setLoading(false);
      setUniqueID(response.data.booking.bookingId);
      setPaymentStatus(response.data.booking.paymentStatus);
      showToast("Payment Verified Successfully");
      handleNextStep(4);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  const handleNextStep = (nextStep) => {
    if (nextStep === 3) {
      // generateUniqueID();
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
    setShowConfirmModal(true);
    setSummary({ selectedDate, selectedTimeSlot, formData });
    //
  };

  const submitBooking = async () => {
    setLoading;
    true;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-booking`,
        {
          ecosystemDomain: information.domain,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.location,
          location: information.serviceType,
          service: information.name,
          date: selectedDate ? selectedDate.toDateString() : "Not selected",
          description: formData.description,
          time: summary.selectedTimeSlot,
          price: information.price,
          bookingType: information.serviceType,
        }
      );
      setLoading(false);
      showToast(response.data.message);
      setUniqueID(response.data.booking.bookingId);
      setPaymentStatus(response.data.booking.paymentStatus);
      setBookingId(response.data.booking._id);
      handleNextStep(3);
      setShowConfirmModal(false);
    } catch (error) {
      setLoading(false);
      console.log("not working", error);
      showToast(error.response.data.message);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePayOnDelivery = () => {
    handleNextStep(4);
  };

  const handleCancel = () => {
    handleNextStep(1);
    setShowConfirmModal(false);
  };

  const handleClose = () => {
    setFormData({
      fullName: "",
      address: "",
      phone: "",
      email: "",
      service: "",
      location: "",
    });
    setSelectedTimeSlot(null);
    setSelectedDate(null);
    setModalShow(false);
    handleNextStep(1);
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
                <Form.Label>
                  Client address <small>(only for home service)</small>
                </Form.Label>
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
                <Form.Label>Booking Type</Form.Label>
                <Form.Control
                  as="select"
                  name="location"
                  value={information.serviceType}
                  onChange={handleFormChange}
                  required
                  disabled
                >
                  <option value={information.serviceType}>
                    {information.serviceType}
                  </option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formService">
                <Form.Label>Preffered service</Form.Label>
                <Form.Control
                  as="select"
                  name="service"
                  value={information.name}
                  onChange={handleFormChange}
                  required
                  disabled
                >
                  <option value={information.name}>{information.name}</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group controlId="formPrice">
              <Form.Label>Service price</Form.Label>
              <Form.Control
                type="text"
                value={information.price}
                readOnly
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>
                Short Description <small>(optional)</small>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                rows={3}
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
                {information.name || "Not selected"}
              </p>
              <p>
                <strong>Booking Type:</strong>{" "}
                {information.serviceType || "Not selected"}
              </p>
              <p>
                <strong>Service price:</strong> {information.price || "N/A"}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {summary.formData.description || "Not provided"}
              </p>
            </Alert>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={handlePrevStep}>
                Back
              </Button>
              <Button
                variant="success"
                // onClick={handlePaymentSuccess}
                onClick={() =>
                  handleFlutterPayment({
                    callback: (response) => {
                      verifyFlutterwave(response.transaction_id);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                  })
                }
              >
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
            <h4>Booking Invoice</h4>
            <Alert variant={paymentStatus === "Paid" ? "success" : "warning"}>
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
                          <Col
                            md={12}
                            className="d-flex justify-content-between"
                          >
                            <div className="fw-bold invoice-Client text-black">
                              {paymentStatus}
                            </div>
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
                                      {information.name || "Not provided"}
                                    </td>
                                    <td className="text-end">
                                      {selectedDate
                                        ? selectedDate.toDateString()
                                        : "Not selected"}
                                    </td>
                                    <td className="text-end">
                                      {summary.selectedTimeSlot ||
                                        "Not selected"}
                                    </td>
                                    <td className="text-end">
                                      {information.serviceType ||
                                        "Not provided"}
                                    </td>
                                    <td className="text-end">
                                      {paymentStatus}
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
                                <b>Total :</b>{" "}
                                {`${information.currency} ${information.price}` ||
                                  "N/A"}
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
      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Comfirm Your Booking Information before Moving Forward</p>
          <p>
            <strong>Date booked :</strong>{" "}
            {selectedDate ? selectedDate.toDateString() : "Not selected"}
          </p>
          <p>
            <strong>Time booked:</strong> {selectedTimeSlot || "Not selected"}
          </p>
          <p>
            <strong>Full name:</strong> {formData.fullName || "Not provided"}
          </p>
          <p>
            <strong>Client address:</strong>{" "}
            {formData.address || "Not provided"}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone || "Not provided"}
          </p>
          <p>
            <strong>Email:</strong> {formData.email || "Not provided"}
          </p>
          <p>
            <strong>Preffered service:</strong>{" "}
            {information.name || "Not selected"}
          </p>
          <p>
            <strong>Booking Type:</strong>{" "}
            {information.serviceType || "Not selected"}
          </p>
          <p>
            <strong>Service price:</strong> {information.price || "N/A"}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {formData.description || "Not provided"}
          </p>
          {/* Display other form fields */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Go Back
          </Button>
          <Button variant="primary" onClick={submitBooking}>
            {loadingSubmit ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                {" Processing..."}
              </>
            ) : (
              "Confirm & Submit"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  );
};

export default BookingModal;
