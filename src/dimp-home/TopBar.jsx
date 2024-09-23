import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const HeaderWithTopbar = () => {
  return (
    <div
      className="header-top-bar py-2 px-2 py-lg-0 bg-white text-center top-bar-dark bg-gradient-flamingo-amethyst-green disable-fixed"
      style={{ top: "0px" }}
    >
      <Container fluid>
        <Row className="h-42px align-items-center">
          <Col className="text-center justify-content-center">
            <div className="fs-14 text-white">
              <a
                href="/press-release"
                className="btn-link-gradient btn-small fw-bold text-white thin hover"
              >
                PRESS RELEASE: GFA Technologies Launches the DIMP Innovative
                Website Builder for Barbers and Barbershops Across Nigeria{" "}
                {"  "}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderWithTopbar;
