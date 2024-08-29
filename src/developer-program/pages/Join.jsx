
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import hero from "../images/joinHero.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const Join = () => {
  return (
    <div className="overflow-hidden bg-white">
      <NavbarComponent />
      <div className="px-6 mt-5 ">
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
                Join
              </h1>
              <p className="lead lead-md lead-sm text-warning">
                Join the Dimp Developers Program today!
              </p>
              <Button variant="primary" href="#programs">
                Register Now
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="px-8 mb-4">
        <Row className="mt-6 d-flex justify-content-between" id="programs">
          <Col lg={3} xs={10} className="mt-6">
            <h3 className="display-5">About the Developers Program</h3>
            <p>Leverage the resources of Dimp</p>
            <div className="d-flex justify-content-between">
              <Link
                variant="secondary"
                className="btn btn-outline-secondary align-self-center rounded-pill"
                to="/dimp/developer-program/about"
              >
                Learn more <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col lg={3} xs={10} className="mt-6">
            <h3 className="display-5">Benefits</h3>
            <p>Services and tools at your disposal.</p>
            <div className="d-flex justify-content-between">
              <Link
                variant="secondary"
                className="btn btn-outline-secondary align-self-center rounded-pill"
                to={`/dimp/developer-program/about#benefits`}
              >
                Learn more <ArrowRight />
              </Link>
            </div>
          </Col>
          <Col lg={3} xs={10} className="mt-6">
            <h3 className="display-5">Policies</h3>
            <p>Become familiar with all relevant Dimp policies.</p>
            <Link
              variant="secondary"
              className="btn btn-outline-secondary align-self-center rounded-pill"
            >
              Learn more <ArrowRight />
            </Link>
          </Col>
          <Col lg={2} xs={10} className="bg-white text-black rounded me-2 mt-6">
            <div className="p-2">
              <h3>Related Topics</h3>
              <ul>
                <li><Link>Get started</Link></li>
                <li><Link>APIs</Link></li>
                <li><Link>Support</Link></li>
                <li><Link>Guides</Link></li>
                <li><Link>Tools</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-8 mb-4 py-4">
        APIs, or application programming interfaces, at Dimp are the front door
        to our global marketplace platform. They enable our business to expand
        into new contexts, allowing third-party platforms to extend their value
        proposition while also bringing their customers to us. With the Dimp
        Developers Program&apos;s latest APIs for selling and buying, Dimp is
        providing its developers with powerful technology and features that
        benefit both buyers and sellers, such as:{" "}
        <ul className="py-4">
          <li>
            Dimp&apos;s Buy APIs that enable developers to build buying
            experiences where consumers can purchase products from Dimp anytime,
            anywhere—wherever consumers are online.
          </li>
          <li>
            Next Generation Sell APIs that provide a generational technology
            improvement over our earlier Trading API.
          </li>
          <li>
            APIs that are designed and based on use cases that we have carefully
            vetted with buyers, sellers, and solution providers.
          </li>
          <li>
            Dimp Developers Program portal and tools that are continually
            expanding to support the next generation of APIs.
          </li>
        </ul>{" "}
        Register now or for additional information on registering, see the Join
        the Dimp Developers Program section of our Get Started with Dimp APIs
        guide.
      </div>
      <Footer />
    </div>
  );
};

export default Join;
