import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Image, Navbar } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/GFA logo Rebrand Blue.png";
import axios from "axios";
import { showToast } from "../../Components/Showtoast";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  library.add(faArrowLeft, faEnvelope);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const email = queryParams.get("email");

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://dimpified-backend.azurewebsites.net/api/v1/creator/resend-email`,
        {
          email: email,
        }
      );
      setLoading(false);
      showToast(response.data.msg);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.msg);
    }
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col
        lg={12}
        md={12}
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="shadow-sm p-5">
          {" "}
          {/* Increased padding from p-4 to p-5 */}
          <Row className="align-items-center justify-content-center">
            {/* Left arrow */}
            <Col
              lg={1}
              md={1}
              className=" align-items-center justify-content-center"
            >
              <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              </Link>
            </Col>
            {/* Center Logo */}
            <Col
              lg={10}
              md={9}
              className="d-flex align-items-center justify-content-center"
            >
              <Navbar.Brand as={Link} to="/">
                <Image
                  src={Logo}
                  className="mb-4 text-center"
                  alt="logo"
                  style={{ height: "100px" }}
                />
              </Navbar.Brand>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center mt-5 ">
            {/* Message icon and container */}
            <Col
              lg={1}
              md={1}
              className="d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </Col>
            <Col lg={12} md={12} className="text-center mt-4">
              <h1>Verify Your Email</h1>
              <p>Please check your email inbox to verify your account.</p>
              <p>
                Didn&apos;t receive any email?
                {loading ? (
                  <div
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <span
                    className="text-primary ml-5"
                    style={{ cursor: "pointer" }}
                    onClick={onSubmit}
                  >
                    Resend link
                  </span>
                )}
              </p>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default VerifyEmail;