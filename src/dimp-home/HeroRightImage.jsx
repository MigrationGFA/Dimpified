// import node module libraries
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import SectionHeadingLeftBold from "./SectionHeadingLeftBold";

// import media files
import FeaturedImg2 from "./images/revenue.jpg";

// import MDI icons
// import Icon from "@mdi/react";
// import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

const HeroRightImage = () => {
  const title =
    "Profitable Marketing Startegies designed to boost your Return on investment";
  const subtitle = "Benefits of DIMP";

  const features = [
   
    {
      id: 2,

      title: "Maximize revenue through additional sales",
      description:
        "Drive more purchases with enticing deals, persuasive sales pages, streamlined purchasing processes, and customizable checkout options.",
    },
    {
      id: 3,

      title: `A fully customizable platform`,
      description:
        "Tailor the platform to match your branding, establish a cohesive customer journey, and maintain complete ownership over the user experience.",
    },
    {
      id: 4,

      title: `Effortlessly integrate with marketing tools`,
      description:
        "Seamlessly connect with leading marketing solutions utilized by top sellers in the education industry.",
    },
  ];
  return (
    <Row className="align-items-center">
      <Col lg={6} md={12} xs={12}>
        {/* content */}
        <div className="pe-lg-6 ps-lg-6">
          <SectionHeadingLeftBold title={title} subtitle={subtitle} />
          <div className="mt-6">
            {/* icon with para */}
            {features.map((item, index) => {
              return (
                <div className="d-flex mb-4" key={index}>
                  <div className="ms-3">
                    <h3
                      className="mb-2"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h3>
                    <p className="mb-0 fs-4">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-grid d-md-block">
            <Link
              to="/creator/signup"
              className="btn btn-primary btn-lg mb-2 mb-md-0"
            >
              Get started for free
            </Link>{" "}
            <Link
              href="https://calendly.com/jesutofunmi-ne2s"
              className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
            >
              Schedule a demo
            </Link>{" "}
          </div>
        </div>
      </Col>
      <Col lg={6} md={12} xs={12}>
        {/* image */}
        <div className="mt-4 mt-lg-0">
          <Image
            src={FeaturedImg2}
            alt="..."
            className="img-fluid w-100 rounded-4"
            height={20}
          />
        </div>
      </Col>
    </Row>
  );
};

export default HeroRightImage;
