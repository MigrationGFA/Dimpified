// import node module libraries
import { useState } from "react";
import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// import media files
import TemplatesImage from "../images/templatesnoplay.png";

const TemplatesNoPlay = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");
  return (
    <section className="py-lg-5 py-5 mt-5 mb-5 bg-light">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={12} md={12} xs={12}>
                <div className="mb-5 mb-lg-0">
                  <h2 className="display-5 fw-bold mb-3 text-center">
                    Design and deploy with ease by effortlessly customizing your
                    ecosystem with no-code templates
                  </h2>
                  <p className="display-8 text-center">
                    {" "}
                    Adapt our templates to suit your unique needs. Whether
                    you’re running an upskilling program, accelerator,
                    incubator, or hackathon, our no-code templates allow you to
                    quickly set up and customize your programs without any
                    technical expertise.
                  </p>
                </div>
              </Col>
              <Col lg={12} md={12} xs={12}>
                <Image
                  src={TemplatesImage}
                  alt="..."
                  className="img-fluid w-100"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TemplatesNoPlay;
