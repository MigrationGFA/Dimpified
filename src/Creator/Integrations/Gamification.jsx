import React from "react";
import { Container, Row, Col, Button, Form, Badge, Table, Card } from "react-bootstrap";
import { RiH2 } from "react-icons/ri";

const GamificationEngine = () => {
  return (
    <Container className="mt-4">
      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <h2>
            Gamification engine{" "}
          </h2>
          <p>
            Enable the gamification engine to award digital badges to your users on specific events.
          </p>
          <Col className="text-end">
          <Button variant="success">Save</Button>
        </Col>
        </Col>
        
      </Row>

      {/* Gamification Engine Activation Section */}
      <Container className="p-3 mb-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
        <Row className="align-items-center">
          <Col>
            <h4>
              Gamification engine{" "}
              <Badge bg="secondary" className="ms-2">Beta</Badge>
            </h4>
            <p className="mb-0">
              Enable the gamification engine to award digital badges to your users on specific events.
            </p>
          </Col>
          <Col className="text-end">
            <Form.Check type="checkbox" label="Activate" defaultChecked className="mb-3" />
          </Col>
        </Row>
      </Container>

      {/* Badges Table Section */}
      <Container className="p-3" style={{ backgroundColor: "white", borderRadius: "4px" }}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Active</th>
                      <th>Description</th>
                      <th>Award Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {badges.map((badge, index) => (
                      <tr key={index}>
                        <td>
                          <img src={badge.image} alt={badge.title} style={{ width: "40px", height: "40px" }} />
                        </td>
                        <td>{badge.title}</td>
                        <td>
                          <span style={{ color: "green" }}>●</span>
                        </td>
                        <td>{badge.description}</td>
                        <td>{badge.condition}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const badges = [
  {
    image: "path/to/image1.png",
    title: "Active Member",
    description: "Members who have made 10 or more social activities in a month.",
    condition: "This badge is awarded to Members who have made 10 or more social activities in 1 month."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },
  {
    image: "path/to/image2.png",
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition: "This badge is awarded to Members who have 30 or more likes from others."
  },

];

export default GamificationEngine;
