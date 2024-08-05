
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import hero from "../images/grow-hero-web.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const Grow = () => {
  return (
    <div className="overflow-hidden bg-white">
      <NavbarComponent />
      <div className="px-6 mt-5">
        <Row
          className="position-relative overflow-hidden"
          style={{ position: "relative" }}
        >
          <Col className="p-0">
            <img
              src={hero}
              alt="Developer"
              className="img-fluid w-90"
              style={{ position: "relative" }}
            />
            <div
              className="position-absolute text-white p-3"
              style={{
                top: "0",
                left: "0",
                // zIndex: 10, // Ensuring this is higher than the image
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Adding background for better visibility
                width: "100%", // Ensure it covers the width
              }}
            >
              <h1 className="text-primary display-2 display-md-3 display-sm-5 mb-3">
                Grow
              </h1>
              <p className="lead lead-md lead-sm text-warning">
                Tap into the power of marketing to millions of
                <br /> Dimp users worldwide
              </p>
              {/* <Button variant="primary" href="#programs">
                Register Now
              </Button> */}
            </div>
          </Col>
        </Row>
      </div>

      <div className="px-8 mb-4">
        <Row className="mt-6">
          <p>
            Dimp wants to help you build a new Dimp business or expand your
            current business. To do so, we offer a variety of resources listed
            below.
          </p>
          <p>
            To take advantage of these resources, join our{" "}
            <Link>Developers Program today.</Link>
          </p>
        </Row>
        <Row className="mt-6 d-flex justify-content-between" id="programs">
          <Col lg={3} xs={10} className="mt-6">
            <h3 className="display-5">Events</h3>
            <p>Learn about driving traffic and prompting sales with Dimp Partner Network.</p>
            <div className="d-flex justify-content-between">
              <Link
                variant="secondary"
                className="btn btn-outline-secondary align-self-center rounded-pill"
                to="/dimp/developer-program/events"
              >
                Learn more <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col lg={3} xs={10} className="mt-6">
            <h3 className="display-5">Loyalty Program</h3>
            <p>Recognition and rewards for our best sell-side developers.</p>
            <div className="d-flex justify-content-between">
              <Link
                variant="secondary"
                className="btn btn-outline-secondary align-self-center rounded-pill"
                to={`/dimp/developer-program/loyalty-program`}
              >
                Learn more <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col lg={2} xs={10} className="bg-white text-black rounded me-2 mt-6">
            <div className="p-2">
              <h3>Related Topics</h3>
              <ul>
                <li>
                  <Link>Get started</Link>
                </li>
                <li>
                  <Link>APIs</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
                <li>
                  <Link>Guides</Link>
                </li>
                <li>
                  <Link>Tools</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div >
  );
};

export default Grow;
