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
    <section className="py-lg-10 py-4 px-4 mt-5 mb-5 bg-light">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={12} md={12} xs={12}>
                <div className="mb-5 mb-lg-0">
                  <h2 className="display-5 fw-bold mb-3 text-center">
                    Highlight your skills and projects with a professional
                    portfolio ecosystem website.
                  </h2>
                  <p className="display-8 text-center">
                    {" "}
                    Get your portfolio online quickly with our easy-to-use,
                    no-code templates. Customize your site to match your style
                    and showcase your projects effectively.
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
