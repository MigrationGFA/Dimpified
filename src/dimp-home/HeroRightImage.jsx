// import node module libraries
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import SectionHeadingLeftBold from "./SectionHeadingLeftBold";

// import media files
import FeaturedImg2 from "./images/marketing.jpg";

// import MDI icons
// import Icon from "@mdi/react";
// import { mdiStar, mdiLifebuoy, mdiFileDocument } from "@mdi/js";

const HeroRightImage = () => {
  const title = "Profitable Marketing Funnels to increase your ROI";
  const subtitle = "Benefits of DIMP";

  const features = [
    {
      id: 1,
      
      title: "Sell Courses, Bundles and Memberships",
      description:
        "A powerful sales engine, with advanced pricing options for all kinds of digital products",
    },
    {
      id: 2,
    
      title: "Upsell and cross-sell with promotions",
      description:
        "Upsell and cross-sell with irresistible offers, high-converting sales pages, 1-click funnels and customizable checkout experiences.",
    },
    {
      id: 3,
      
      title: `A true White Label ecosystem platform`,
      description:
        "Use your own domain name, imprint your brand identity, take full control of the customer experience.",
    },
	{
		id: 4,
		
		title: `Connect marketing stack seamlessly`,
		description:
		  "Integrations with the top marketing tools of the trade used by the best Course Sellers.",
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
              <Link href="" className="btn btn-primary btn-lg mb-2 mb-md-0">
                Get started for free
              </Link>{" "}
              <Link
                href=""
                className="btn btn-outline-primary btn-lg mb-2 mb-md-0"
              >
                Watch Demo
              </Link>{" "}
            </div>
        </div>
        
      </Col>
      <Col lg={6} md={12} xs={12}>
        {/* image */}
        <div className="mt-4 mt-lg-0 bg-gray-200 rounded rounded-4">
          <Image src={FeaturedImg2} alt="..." className="img-fluid w-100 rounded-4" />
        </div>
      </Col>
    </Row>
  );
};

export default HeroRightImage;
