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
                    Build your influence effortlessly with our inspiring <br />
                    academy ecosystem templates
                  </h2>
                  <p className="display-8 text-center">
                    {" "}
                    Say goodbye to coding concerns and select from a variety of
                    professionally-crafted nonprofit-specific site templates. <br/>
                    Customize them limitlessly to reflect your brand and watch
                    your organization thrive!
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
