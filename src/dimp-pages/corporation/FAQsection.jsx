// import node module libraries
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import custom components

import SectionHeadingCenter from "../../Components/marketing/common/section-headings/SectionHeadingCenter";

// import data files

const FAQsection = () => {
  const title = "Government Ecosystem FAQs";

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
                  <h3>How can I create an ecosystem on your platform?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  To create an ecosystem, please click on the "Get Started Now"
                  button and fill out the application form.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3>What support do you provide to ecosystem creators??</h3>
                </Accordion.Header>
                <Accordion.Body>
                  We offer comprehensive support to our ecosystem creators?
                  including training on how to use our platform, access to our
                  course resource library, marketing assistance, and ongoing
                  technical support.
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
                  <h3>
                    How do we create and upload our digital products like
                    courses?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  Once you are register as an ecosystem creator, you will get
                  access to your ecosystem. You can upload video lectures,
                  documents, quizzes, and other materials through our
                  products/service section
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3>Can we set my own digital product prices?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Yes,you have the flexibility to set your own prices. We also
                  offer guidance on pricing strategies to help you maximize your
                  earnings and reach a wider audience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>How does the platform support corporate growth?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our platform scales with your corporate business. As you grow, you can
                  add new features, expand your service offerings, and manage
                  increasing client volumes without compromising performance or
                  user experience. Our analytics tools also provide valuable
                  insights to help you make data-driven decisions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
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
          <Link to="/creator/signup" className="btn btn-lg btn-primary">
            Sold yet? Get Started Now!
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default FAQsection;
