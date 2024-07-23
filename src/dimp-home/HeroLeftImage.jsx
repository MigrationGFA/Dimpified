// import node module libraries
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import SectionHeadingLeftBold from "./SectionHeadingLeftBold";

// import MDI icons
import Icon from "@mdi/react";
import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

import Template from "../dimp-home/navbars/icons/template.png";
import Builder from "../dimp-home/navbars/icons/add-image.png";
import Domain from "../dimp-home/navbars/icons/domain.png";
import App from "../dimp-home/navbars/icons/user-interface.png";
import Module from "../dimp-home/navbars/icons/course.png";
import Sync from "../dimp-home/navbars/icons/syncing.png";
import Interactive from "../dimp-home/navbars/icons/online-learning (1).png";
import Certificate from "../dimp-home/navbars/icons/certificate.png";
import Live from "../dimp-home/navbars/icons/online-class.png";
import Analytics from "../dimp-home/navbars/icons/analytics.png";
import Subscription from "../dimp-home/navbars/icons/subscription.png";
import Payment from "../dimp-home/navbars/icons/payment-gateway.png";

// import media files
import FeaturedImg1 from "./images/feature.png";

const HeroLeftImage = () => {
  const title = "Everything needed for a seamless ecosystem creation.";
  const subtitle = "Features of DIMP";

  const featurescol2 = [
    {
      id: 1,

      title: "Bespoke Template",
      image: Template,
      description: "Hackathons, pitch competitions, upskilling programs",
    },
    {
      id: 2,

      title: "Website Builder",
      image: Builder,
      description: "Acquire subscribers, manage your community.",
    },
    {
      id: 3,

      title: `Ecosystem clone & Sync`,
      image: Sync,
      description: "Staff training and evaluation, customer training e.t.c.",
    },
    {
      id: 4,
      title: "Mobile App",

      image: App,
      description: "Patient-care management, clinical research management.",
    },
    {
      id: 5,

      title: `Live Classes & Webinars`,
      image: Live,
      description: "Staff training and evaluation, customer training e.t.c.",
    },
    {
      id: 6,

      title: `Statistics & Visualizations`,
      image: Analytics,
      description: "Patient-care management, clinical research management.",
    },
  ];
  const featurescol1 = [
    {
      id: 1,
      title: `Custom Domain`,

      
      image: Domain,
      description: "A lightweight LMS that's fast, flexible & easy to use.",
    },
    {
      id: 2,

      title: `Course Planner & Builder`,
      image: Module,
      description:
        "Donor & Volunteer management, Alumni, parents/teachers associations.",
    },
    {
      id: 3,

      title: `Interactive Videos`,
      image: Interactive,
      description:
        "Licensing, e-governance, tax management, skills management.",
    },
    {
      id: 4,

      title: `Assessment & Certificates`,
      image: Certificate,
      description: " Mosque Management, church management.",
    },
    {
      id: 5,

      title: `Bundles and Subscriptions`,
      image: Subscription,
      description:
        "Licensing, e-governance, tax management, skills management.",
    },
    {
      id: 6,

      title: `Payment Management`,
      image: Payment,
      description: " Mosque Management, church management.",
    },
  ];

  return (
    <Row className="align-items-center">
      <Col lg={6} md={12} sm={12} xs={12}>
        {/* image */}
        <div className="mb-4 mb-lg-0  rounded-4 ">
          <Image src={FeaturedImg1} alt="..." className="img-fluid w-100 border rounded rounded-1" />
        </div>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="mt-2 mt-lg-0">
        {/* content */}
        <div className="ps-lg-7">
          <SectionHeadingLeftBold title={title} subtitle={subtitle} />
          <Row className="mt-5">
            {/* list */}
            <Col>
              <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                {featurescol1.map((item, index) => {
                  return (
                    <ListGroup.Item
                      key={index}
                      bsPrefix="mb-2"
                      className="d-flex"
                    >
                      <div className="d-flex mb-3">
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            height: "2.5rem",
                            width: "auto",
                            border: "1px solid #d3d3d3",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                        <div className="ms-2">
                          <h5
                            className="mt-2"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h5>
                        </div>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <Col>
              {/* list */}
              <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                {featurescol2.map((item, index) => {
                  return (
                    <ListGroup.Item
                      key={index}
                      bsPrefix="mb-2"
                      className="d-flex"
                    >
                      <div className="d-flex mb-3">
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            height: "2.5rem",
                            width: "auto",
                            border: "1px solid #d3d3d3",
                            padding: "5px",
                            borderRadius: "4px",
                          }}
                        />
                        <div className="ms-2">
                          <h4
                            className="mt-2"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h4>
                        </div>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <div className="d-grid d-md-block">
              <Link
                to="/creator/signup"
                className="btn btn-primary btn-lg mb-2 mb-md-0"
              >
                Get Started For Free
              </Link>{" "}
              <Link
                to="https://calendly.com/jesutofunmi-ne2s"
                className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
              >
                Schedule a demo
              </Link>{" "}
            </div>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default HeroLeftImage;
