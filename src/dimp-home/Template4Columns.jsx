// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import MDI icons
import { mdiFlash, mdiLayers, mdiCellphone, mdiInfinity } from "@mdi/js";

// import custom components
import FeatureTopIcon3 from "./FeatureTopIcon3";

const Template4Columns = () => {
  const features = [
    {
      id: 1,
      icon: mdiFlash,
      title: "Effortless Setup",
      description:
        "Quickly set up your projects with our intuitive no-code templates. No technical skills required, just seamless and efficient deployment.",
    },
    {
      id: 2,
      icon: mdiLayers,
      title: "Quality first",
      description:
        "Deliver top-notch projects every time with our high-quality templates. Enjoy dedicated support and a 100% satisfaction guarantee.",
    },
    {
      id: 3,
      icon: mdiCellphone,
      title: "Fully Customizable",
      description:
        "Tailor every aspect of your projects with our customizable templates. Adapt designs to fit your unique needs and vision effortlessly.",
    },
    {
      id: 4,
      icon: mdiInfinity,
      title: "Boundless Possibilities",
      description:
        "Explore limitless potential with our versatile templates. Create a wide range of projects, from simple sites to complex ecosystems, without restrictions.",
    },
  ];

  return (
    <section className="py-4 px-4 px-lg-20 py-lg-14">
      <Container>
        <Row>
          {features.map((item, index) => {
            return (
              <Col lg={3} md={6} sm={6} key={index}>
                <FeatureTopIcon3 item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Template4Columns;
