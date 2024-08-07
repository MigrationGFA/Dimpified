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
                  <h3>How can I become an instructor on your platform?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  To become an instructor, please click on the "Get Started Now"
                  button and fill out the application form.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3>What support do you provide to instructors?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  We offer comprehensive support to our instructors including
                  training on how to use our platform, access to our course
                  resource library, marketing assistance, and ongoing technical
                  support.
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
                  <h3>How do I create and upload my course content?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Once you are register as an instructor, you will receive
                  access to your ecosystem. You can upload video lectures,
                  documents, quizzes, and other materials through our
                  easy-to-use content management system.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3>Can I set my own course prices?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Yes, as an instructor, you have the flexibility to set your
                  own course prices. We also offer guidance on pricing
                  strategies to help you maximize your earnings and reach a
                  wider audience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>How are earnings calculated and paid out?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Earnings are calculated based on the number of enrollments and
                  the course price. We offer several payout options, including
                  direct bank transfers and Flutterwave. Payments are made on a
                  monthly basis.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>
                    How do I get feedback on my teaching and course content?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our platform provides various ways to receive feedback
                  including student reviews, ratings, and direct feedback
                  through Q&A sessions.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <div className="mt-10 text-center">
          <Link to="#" className="btn btn-lg btn-primary">
            Sold yet? Get Started Now!
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default FAQsection;
