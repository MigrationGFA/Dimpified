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
                Barbers are leveraging DIMP to get booked easily and increase
                their revenue.{"  "}
                <a
                  href="/barbers"
                  className="btn-link-gradient btn-small fw-bold text-white thin"
                >
                  <u className="pb-3">
                    Know how they're doing it. <ArrowRight className="ms-1" />
                  </u>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
  );
};

export default HeaderWithTopbar;
