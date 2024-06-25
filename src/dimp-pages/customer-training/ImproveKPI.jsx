// import node module libraries
import { Col, Row, Container, Image } from "react-bootstrap";

// import bootstrap icons
import {
  PatchCheckFill,
  Trophy,
  Star,
  ShieldLock,
  Nut,
} from "react-bootstrap-icons";

// import media files
import Certificate from "../images/mark-tools_sec5.jpg";

const ImproveKPI = () => {
  const programFeatures = [
    {
      id: 1,

      title: "Reduce Learner's support costs",
      description:
        "Optimize Learner’s support processes by leveraging DIMP self-taught services, FAQs and tutorials,  to minimize the need for direct assistance.",
    },
    {
      id: 2,

      title: "Strengthen Learner's retention",
      description:
        "Give your learners a personalized & engaging learning experience with an active feedback function that keeps them ",
    },
    {
      id: 3,

      title: "Engage your Learners",
      description:
        "Ensure your learners are well-informed about the benefits of your products and services. Deliver regular, thorough, and measurable training for learners.",
    },
    {
      id: 4,

      title: "Increase revenue",
      description:
        "Open new streams of revenue by monetising your training program. Drive customer success and expect to sell more extensions and add-ons for your product.",
    },
  ];

  const leftFeatures = programFeatures.filter(
    (item) => item.id === 1 || item.id === 2
  );
  const rightFeatures = programFeatures.filter(
    (item) => item.id === 3 || item.id === 4
  );

  return (
    <section className="px-lg-12 px-4 pb-lg-14 pb-6">
      <Container>
        <Row>
          <Col xl={{ offset: 2, span: 8 }} md={12} xs={12}>
            <div className="text-center mb-lg-6 mt-lg-6 mb-3">
              <h2 className="h1 fw-bold">
                Improve{" "}
                <u className="text-warning">
                  <span className="text-primary">every single KPI</span>
                </u>{" "}
                across your funnel
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="row-cols-1">
              {leftFeatures.map((item) => (
                <Col key={item.id}>
                  <div className="mb-4 mb-xl-6">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xl={4} lg={4} md={12} xs={12}>
            <div className="mb-6 mb-lg-0">
              <div className="mb-2">
                <Image
                  src={Certificate}
                  alt="certificate"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} xs={12}>
            <Row className="row-cols-1">
              {rightFeatures.map((item) => (
                <Col key={item.id}>
                  <div className="mb-4 mb-xl-6">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImproveKPI;
