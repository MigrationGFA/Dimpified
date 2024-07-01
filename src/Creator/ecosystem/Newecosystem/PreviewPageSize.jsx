import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { FaTabletAlt } from "react-icons/fa";
import { Tooltip } from "flowbite-react";

// import { Button, Tooltip } from "flowbite-react";

const PreviewPageSize = ({ setView }) => {
  return (
    <Container fluid className="py-3 border-bottom bg-white">
      <Row className="align-items-center">
        <Col xs="auto">
          <Button variant="link" className="text-decoration-none text-dark">
            {/* <BsArrowLeft /> Back */}
          </Button>
        </Col>
        <Col className="text-center d-flex flex-row ">
          <Tooltip content="Desktop View">
            <FaDesktop
              className="mx-2 "
              size={20}
              style={{
                cursor: "pointer",
              }}
              onClick={() => setView("desktop")}
            />
          </Tooltip>
          <Tooltip content="tablet View">
            <FaTabletAlt
              className="mx-2 "
              size={20}
              style={{
                cursor: "pointer",
              }}
              onClick={() => setView("tablet")}
            />
          </Tooltip>
          <Tooltip content="Mobile View">
            <FaMobileAlt
              className="mx-2"
              size={20}
              style={{
                cursor: "pointer",
              }}
              onClick={() => setView("mobile")}
            />
          </Tooltip>
        </Col>
        <Col xs="auto" className="text-end">
          <Button variant="success">Check Screen Size</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PreviewPageSize;
