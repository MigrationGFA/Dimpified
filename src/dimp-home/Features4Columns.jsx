// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import custom components
import SectionHeadingCenter from "./SectionHeadingCenter";
import FeatureTopIcon from "./FeatureTopIcon";

const Features4Columns = () => {
  const title = "Craft Experiences your user Ecosystem will love";
  const subtitle = "Why should you choose DIMP";

  const features = [
    {
      id: 1,
      icon: "book",
      title: "Engaging and effective training",
      description: `Engage learners with interactive videos, ebooks, assessments, certificates, surveys, and much more.`,
    },
    {
      id: 2,
      icon: "monitor",
      title: "The most versatile ecosystem experience",
      description: `Beautiful themes and onboarding forms for free, paid, private, drip-fed or curated course pathways.`,
    },
    {
      id: 3,
      icon: "video",
      title: "Re-imagined interactive video learning",
      description: `Effortlessly convert your videos into exceptional experiences with automatically extracted transcripts, quizzes, and tables of contents.`,
    },
    {
      id: 4,
      icon: "users",
      title: "Get social media talking",
      description: `Nurture your community and create lasting relationships with a social-first training school.`,
    },
  ];

  return (
    <section className="py-8 py-lg-18 bg-white">
      <Container>
        <SectionHeadingCenter title={title} subtitle={subtitle} />
        <Row>
          {features.map((item, index) => {
            return (
              <Col lg={3} md={6} sm={12} key={index}>
                <FeatureTopIcon item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features4Columns;
