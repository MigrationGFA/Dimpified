// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import custom components
import SectionHeadingCenter from "./SectionHeadingCenter";
import TestimonialsSlider from "./TestimonialsSlider";

const TestimonialSection = () => {
  const title = "Don’t just take our word for it.";
  const subtitle = "Testimonials";
  const description = `Users around the worldare creating and monetizing their ecosystem!`;

  return (
    <Fragment className="bg-white">
      {/*  Section left heading */}
      <SectionHeadingCenter
        title={title}
        subtitle={subtitle}
        description={description}
      />

      <Row className="mb-8 ">
        <Col md={12}>
          {/*  Testimonial slider */}
          <TestimonialsSlider />
        </Col>
      </Row>
    </Fragment>
  );
};
export default TestimonialSection;
