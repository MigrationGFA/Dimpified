import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  ProgressBar,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { PiNumberCircleThreeFill, PiNumberCircleTwoFill } from "react-icons/pi";
import paystack from "../../../../assets/Paystack.png";
import flutterwave from "../../../../assets/Flutterwave.png";

const ServiceBilling = () => {
  const location = useLocation();
  const [dataToPass, setDataToPass] = useState(null);

  useEffect(() => {
    setDataToPass(location.state?.dataToPass || null);
  }, [location.state]);

  console.log(dataToPass);
  const userName = sessionStorage.getItem("username");

  const [billingInfo, setBillingInfo] = useState({
    username: userName,
    country: "",
    companyName: "",
    state: "",
    address: "",
  });

  const [paymentOption, setPaymentOption] = useState("");
  const [rememberPayment, setRememberPayment] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState({
    fullName: userName,
    companyName: "",
    country: "",
    state: "",
    address: "",
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleRememberPaymentChange = (e) => {
    setRememberPayment(e.target.checked);
  };

  const handleAddDetails = () => {
    setShowModal(true);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCountryChange = (val) => {
    setAdditionalInfo((prevInfo) => ({
      ...prevInfo,
      country: val,
    }));
  };

  const handleSaveDetails = () => {
    setBillingInfo({
      ...billingInfo,
      username: additionalInfo.fullName,
      companyName: additionalInfo.companyName,
      country: additionalInfo.country,
      state: additionalInfo.state,
      address: additionalInfo.address,
    });
    setShowModal(false);
  };

  // Function to calculate VAT and total
  const calculateTotal = (price) => {
    const vat = price * 0.075;
    const total = price + vat;
    return { vat, total };
  };

  // If dataToPass is available, calculate the VAT and total
  const { vat, total } = dataToPass
    ? calculateTotal(dataToPass.totalPrice)
    : { vat: 0, total: 0 };

  const shortenedDescription = dataToPass?.service?.description?.slice(0, 100);
  const displayDescription =
    dataToPass?.service?.description?.length > 100
      ? `${shortenedDescription}...`
      : shortenedDescription;

  return (
    <Container className="mt-5 mb-4">
      {/* Progress Bar */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-center align-center">
          <FaCheckCircle className="me-1 display-6" />
          <span className="fw-bolder me-3">Order Details</span>
          <MdOutlineNavigateNext className="me-2 display-6" />
          <PiNumberCircleTwoFill className="me-1 display-6" />
          <span className="fw-bolder me-3">Confirm & Pay</span>
          <MdOutlineNavigateNext className="me-2 display-6" />
          <PiNumberCircleThreeFill className="me-1 display-6" />
          <span className="text-muted me-3">Submit Requirements</span>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="display-6">Billing Information</Card.Title>
              <div>
                <Row>
                  <Col lg={9}>
                    <div>
                      <strong>
                        <h4>
                          Your invoice will be issued according to the details
                          listed here
                        </h4>
                      </strong>
                    </div>
                    <div>
                      <strong>{billingInfo.username}</strong> -{" "}
                      {billingInfo.companyName}
                    </div>
                    <div>
                      {billingInfo.state} {billingInfo.address}{" "}
                      {billingInfo.country}
                    </div>
                  </Col>
                  <Col>
                    <Button className="mt-2" onClick={handleAddDetails}>
                      Edit details
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title className="display-6">Description</Card.Title>
              <Card.Title>
                <Row>
                  <Col lg={5}>
                    <Card.Img
                      src={dataToPass?.service?.backgroundCover[0] || null}
                    />
                  </Col>
                  <Col lg={7}>
                    {dataToPass?.service?.header} <br />{" "}
                    <span>&apos;&apos;{displayDescription}&apos;&apos;</span>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                {dataToPass?.service?.pricing?.type} Package
              </Card.Text>
              <ul>
                <li>{dataToPass?.incentives}</li>
              </ul>
              <div>Gig Quantity : {dataToPass?.gigQuantity}</div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4 display-6">
                Pricing Information
              </Card.Title>

              <div className="mt-3">
                <div>Package Price: ${dataToPass?.totalPrice}</div>
                <div>VAT: ${vat.toFixed(2)}</div>
                <hr />
                <div>Total: ${total.toFixed(2)}</div>
              </div>
              <Row>
                {/* {paymentOption !== "flutterwave" && (
                  <Button
                    variant="primary"
                    onClick={() => setPaymentOption("flutterwave")}
                  >
                    Pay Now
                  </Button>
                )} */}

                <Form>
                  {/* <Form.Check
                    type="radio"
                    label="Pay Now"
                    name="paymentOption"
                    value="flutterwave"
                    //   checked={paymentOption === "flutterwave"}
                    onChange={handlePaymentChange}
                  /> */}
                  {/* <Form.Check
                    type="checkbox"
                    label="Remember for future payments"
                    checked={rememberPayment}
                    onChange={handleRememberPaymentChange}
                  /> */}
                </Form>
                {/* {paymentOption && ( */}
                  <Row>
                    <Button className="me-2 mb-2 mt-2">
                      <img src={flutterwave} alt="paystack" width="150" />
                    </Button>

                    {/* <Button className="me-2 mb-2 mt-2">
                      <img src={paystack} alt="paystack" width="150" />
                    </Button> */}
                  </Row>
                {/* )} */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Additional Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={additionalInfo.fullName}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Company Name <span className="text-muted">(optional)</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={additionalInfo.companyName}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="rounded">Country</Form.Label>
              <br />
              <CountryDropdown
                value={additionalInfo.country}
                onChange={handleCountryChange}
                className="p-2 rounded w-full"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State/Region</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={additionalInfo.state}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Address <span className="text-muted">(optional)</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={additionalInfo.address}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveDetails}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ServiceBilling;
