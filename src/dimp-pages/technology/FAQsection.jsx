// import node module libraries
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import custom components

import SectionHeadingCenter from "../../Components/marketing/common/section-headings/SectionHeadingCenter";

// import data files

const FAQsection = () => {
  const title = "Tech Services FAQs";

  const description = `Everything you have ever wondered, but were too afraid to ask..`;

  return (
    <section className="px-lg-12 px-4 py-8 py-lg-18 bg-light">
      <Container>
        <SectionHeadingCenter title={title} description={description} />
        <Row className="justify-content-center">
          <Col lg={7} md={8} sm={12}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3>What is an ecosystem management platform?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our ecosystem management platform is a comprehensive tool
                  designed to help creative professionals manage all aspects of
                  their business, from building websites and managing projects
                  to handling payments and engaging clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3>Do I need coding skills to use this platform?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  No, you don't need any coding skills. Our platform features
                  no-code templates and an intuitive website builder, making it
                  easy for anyone to create professional websites and manage
                  their creative business.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3>What are your pricing plans?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We offer flexible pricing plans to meet the needs of
                    different types of businesses. Please visit our pricing page
                    for more details.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h3>How can this platform help me attract more clients?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  By showcasing your designs in stunning portfolios and engaging
                  visual presentations, you can impress potential clients and
                  demonstrate your expertise. Our platform also offers tools for
                  effective client communications and marketing, helping you
                  reach a wider audience and drive more business.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3>Can this platform handle online sales and payments?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. Our integrated e-commerce features and payment
                  management system allow you to list and sell your services and
                  products securely, handling all transactions with ease.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>How does the platform support business growth?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our platform scales with your business. As you grow, you can
                  add new features, expand your service offerings, and manage
                  increasing client volumes without compromising performance or
                  user experience. Our analytics tools also provide valuable
                  insights to help you make data-driven decisions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>What kind of support is available if I need help?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  We offer comprehensive support to our users. Whether you need
                  technical assistance or have questions about using our
                  features, our dedicated support team is here to help you every
                  step of the way.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <div className="mt-10 text-center">
          <Link
            to="/creator/signup"
            className="btn medium btn-big fs-16 btn-hover-animation-switch rounded-3 btn-box-shadow  fw-400 xs-mt-10px xs-mb-10px"
          >
            Sold yet? Get Started Now
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default FAQsection;
