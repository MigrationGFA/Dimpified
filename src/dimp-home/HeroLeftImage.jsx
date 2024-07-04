// import node module libraries
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import SectionHeadingLeftBold from "./SectionHeadingLeftBold";

// import MDI icons
import Icon from "@mdi/react";
// import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

// import media files
import FeaturedImg1 from "./images/traiing.png";

const HeroLeftImage = () => {
  const title = "Perfect for your industry...";
  const subtitle = "Use Cases of DIMP";

  const featurescol1 = [
    {
      id: 1,

      title: "Corporate",
      description: "Hackathons, pitch competitions, upskilling programs",
    },
    {
      id: 2,

      title: "Creators",
      description: "Acquire subscribers, manage your community.",
    },
    {
      id: 3,

      title: `SMEs`,
      description: "Staff training and evaluation, customer training e.t.c.",
    },
    {
      id: 4,

      title: `Medical`,
      description: "Patient-care management, clinical research management.",
    },
  ];
  const featurescol2 = [
    {
      id: 1,

      title: "Education",
      description: "A lightweight LMS that's fast, flexible & easy to use.",
    },
    {
      id: 2,

      title: "Non Profit (NGO)",
      description:
        "Donor & Volunteer management, Alumni, parents/teachers associations.",
    },
    {
      id: 3,

      title: `Government`,
      description:
        "Licensing, e-governance, tax management, skills management.",
    },
    {
      id: 3,

      title: `Religious Bodies`,
      description: " Mosque Management, church management.",
    },
  ];

  return (
    <Row className="align-items-center">
      <Col lg={6} md={12} sm={12} xs={12}>
        {/* image */}
        <div className="mb-4 mb-lg-0 bg-gray-200 rounded-4 ">
          <Image src={FeaturedImg1} alt="..." className="img-fluid w-100" />
        </div>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="mt-4 mt-lg-0">
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
                      <div className="ms-3">
                        <h3
                          className="mb-2"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                        <p className="mb-0 fs-4">{item.description}</p>
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
                      <div className="ms-3">
                        <h3
                          className="mb-2"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                        <p className="mb-0 fs-4">{item.description}</p>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
              
            </Col>
            <div className="d-grid d-md-block">
                <Link
                  to="#"
                  className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
                >
                  See more use cases
                </Link>{" "}
              </div>
          </Row>
          
        </div>
      </Col>
    </Row>
  );
};

export default HeroLeftImage;
