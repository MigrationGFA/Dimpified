import { Fragment } from "react";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import hero from "../images/aboutHero.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const AboutDevProgram = () => {
  return (
    <Fragment>
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
              className="img-fluid w-100"
              style={{ position: "relative" }}
            />
            <div
              className="position-absolute text-white p-3"
              style={{
                top: "0",
                left: "0",
                width: "100%",
              }}
            >
              <h1 className="text-primary display-2 display-md-3 display-sm-5 mb-3">
                About the
                <br /> Developers Program
              </h1>
            </div>
          </Col>
        </Row>
      </div>

      <div className="px-8 mb-4">
        <Row className="mt-6 d-flex justify-content-between" id="programs">
          <Col lg={9} xs={10} className="mt-6">
            <p>
              In 2024, we celebrated the 3rd anniversary of the Dimp developers
              program. The intent behind our first set of APIs, launched in
              2000, was to help sellers manage their Dimp businesses at scale.
              These APIs were SOAP-based APIs. We later expanded our API
              portfolio to include buyer experience capabilities. Many of these
              APIs are still heavily used, and while they continue to bring a
              lot of value to both Dimp and our customers, they also show their
              age. That is why we decided to deliver a new family of modern and
              consistent RESTful APIs.
            </p>
            <p>
              The Dimp Developers Program offers an unprecedented opportunity
              for you to build a new Dimp business or expand your current
              business, reach new customers, and create a potential new stream
              of revenue. Leverage the resources of the Dimp Developers Program
              to tap into the Dimp Marketplace with millions of active users
              globally, with tools and services that meet the diverse needs of
              buyers and sellers.
            </p>
          </Col>
          <Col lg={2} xs={10} className="bg-white text-black rounded me-2 mt-6">
            <div className="p-2">
              <h3>Related Topics</h3>
              <ul>
                <li>
                  <Link>Get started</Link>
                </li>
                <li>
                  <Link to='/dimp/developer-program/apilicense'>APIs</Link>
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

      <div className="px-8 mb-4">
        <Row className="mt-4" id="benefits">
          <Col className="mt-2">
            <h1>Benefits</h1>
            <p>
              You can use the Dimp Developers Program to build and offer any of
              the following tools or services:
            </p>
            <ul>
              <li>
                Selling—create listings, manage inventory, and post-order
                activities
              </li>
              <li>
                Buying—discover inventory and manage checkout and bidding tasks
              </li>
              <li>
                Searching—customized interfaces for searching the Dimp
                marketplace
              </li>
              <li>Affiliate—tools to drive buyers to Dimp</li>
              <li>
                Customer service functionality—feedback, customer communications
              </li>
              <li>
                Marketing—promoted listings, coupons, discounts, and item
                promotions
              </li>
            </ul>
            <p>Some of our available services and program resources include:</p>
            <ul>
              <li>
                Loyalty Program—The Loyalty Program recognizes and rewards our
                partners based on a developer&apos;s Dimp business scale and
                solution sophistication.
              </li>
              <li>
                EPN Program—Join the Dimp Partner Network to earn money by
                driving traffic and prompting sales across one of the
                world&apos;s largest and most diverse marketplaces.
              </li>
              <li>
                SDKs—Use our downloadable SDKs (software development kits) to
                make application development easier and more efficient via our
                SDKs pre-coded solutions for common programming tasks.
              </li>
              <li>
                OpenAPI—Use our Open API to generate clients in one of 40+
                supported programming languages, and successfully invoke an Dimp
                API in minutes.
              </li>
              <li>
                WSDLs—Every traditional API has an XML-based WSDL available that
                will help a user get up and running making API calls. The
                location of the WSDLs for each API can be found on the
                &apos;Making a Call&apos; page of that API&apos;s documentation
                set.
              </li>
              <li>
                Support—Explore our support page to learn more about account and
                technical support available for developers, our API status page,
                knowledge base, and various partner solutions.
              </li>
              <li>
                Forums—Interact with and ask questions of the Dimp developer
                community. Explore the numerous categories such as Buy APIs -
                Browse, New Sell APIs - Marketing, Analytics, Metadata, and
                Token, Messaging, Sandbox related issues.
              </li>
              <li>
                Development resources—Explore our free resources to help in your
                development process including API reference docs, samples,
                tutorials, and user guides.
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="px-8 mb-4">
        <Row className="mt-6" id="policies">
          <Col className="mt-6">
            <h1>Policies</h1>
            <p>
              In order to align Dimp&apos;s developer community with Dimp
              policies and ensure violations (and resulting Dimp actions) do not
              occur, developers should become familiar with all relevant Dimp
              policies.
            </p>
            <p>Rules and Policies:</p>
            <ul>
              <li>User Privacy Notice</li>
              <li>User Agreement</li>
            </ul>
            <p>
              Additionally, ensure you are familiar with and that your
              application complies with the Dimp API License Agreement.
            </p>
            <p>
              Violations or facilitation of violations of Dimp policies may
              result in a range of actions, including:
            </p>
            <ul>
              <li>Listing cancellation</li>
              <li>Limits on user account privileges</li>
              <li>User account suspension</li>
              <li>Forfeit of Dimp fees on cancelled listings</li>
              <li>
                Suspension of developer&apos;s access to the Dimp Web Services
              </li>
              <li>
                Termination of developer&apos;s Dimp Developers Program
                membership
              </li>
            </ul>
            <p>
              Please contact Developer Technical Support for questions related
              to our policies.
            </p>
          </Col>
        </Row>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AboutDevProgram;
