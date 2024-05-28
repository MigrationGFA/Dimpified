import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import Ecosystem from "../../../assets/ecosystem.png";
import EcoHeader from "./ecoHeader";

const CreateForm = () => {
  return (
    <div>
      <EcoHeader />
      <Container fluid className="p-0">
        <Row className="mt-4 justify-content-center">
          <Col lg={8}>
            <Card>
              <Card.Body>
                <div className=" d-lg-flex justify-content-between align-items-center border-bottom mb-4 ">
                  <div className=" mb-lg-0">
                    <h3 className="mb-0 h3 fw-bold">Create Form</h3>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Ecosystem}
                      alt="Onboarding"
                      className="img-fluid vh-100 vw-100"
                    />
                  </div>

                  <div className="d-flex justify-content-end mt-4">
                    <Link to="/creator/dashboard/Courses">
                      <Button variant="primary">Next</Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateForm;
