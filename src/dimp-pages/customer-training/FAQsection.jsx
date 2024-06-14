// import node module libraries
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import GKAccordionPlus from "../../Components/marketing/common/accordions/GKAccordionPlus";
import SectionHeadingCenter from "../../Components/marketing/common/section-headings/SectionHeadingCenter";

// import data files
import { FAQList } from "../../data/marketing/LeadCourseData";

const FAQsection = () => {
  const title = "Educational Professionals FAQs";

  const description = `Everything you have ever wondered, but were too afraid to ask..`;

  return (
    <section className="px-lg-12 px-4 py-8 py-lg-18 bg-light">
      <Container>
        <SectionHeadingCenter title={title} description={description} />
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <GKAccordionPlus accordionItems={FAQList} itemClass="px-0" />
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
