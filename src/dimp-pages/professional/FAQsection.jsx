// import node module libraries
import { Link } from "react-router-dom";
import { Container, Row, Col, Accordion } from "react-bootstrap";

// import custom components

import SectionHeadingCenter from "../../Components/marketing/common/section-headings/SectionHeadingCenter";

// import data files

const FAQsection = () => {
  const title = "Professionals FAQs";

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
                  <h3>
                    What is the purpose of your ecosystem management platform?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our platform is designed to help professionals and consultants
                  manage their online presence, client interactions, and
                  business growth efficiently. It integrates tools for website
                  building, e-commerce, user onboarding, payment management, and
                  more, all in one place.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3>
                    How can your platform help me build a professional website?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our intuitive website builder, along with customizable no-code
                  templates, allows you to create a polished and professional
                  website quickly. You can showcase your services, expertise,
                  and achievements to attract potential clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3>Can I customize the templates to fit my brand?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, our no-code templates are highly customizable. You can
                    tailor the content, layout, and features to match your
                    brand’s identity and specific needs, ensuring a consistent
                    and professional look.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h3>
                    How does the e-commerce feature benefit my consulting
                    business?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  The e-commerce feature enables you to list your consulting
                  packages, professional services, and related products easily.
                  It also simplifies payment management, ensuring secure and
                  smooth transactions, which enhances client confidence and
                  boosts sales.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3>
                    What kind of payment methods does your platform support?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  Our platform supports a variety of payment methods, including
                  credit/debit cards, Flutterwave, and other popular online
                  payment systems. This flexibility ensures a convenient and
                  secure transaction experience for your clients.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3> What kind of support do you offer?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  We offer continuous support to our users. Whether you need
                  technical assistance or business advice, our dedicated support
                  team is here to help you succeed and make the most of our
                  platform.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h3>How can I get started with your platform?</h3>
                </Accordion.Header>
                <Accordion.Body>
                  Getting started is easy! Simply click "Get Started for free" below, choose
                  the plan that best fits your needs, and begin exploring the
                  features. Our user-friendly interface and comprehensive
                  onboarding resources will guide you through the setup process.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <div className="mt-10 text-center">
          <Link to="#" className="btn btn-lg btn-primary">
            Get Started For Free!
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default FAQsection;
