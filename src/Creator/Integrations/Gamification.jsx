import React from "react";
import { Container, Row, Col, Button, Form, Badge, Table, Card } from "react-bootstrap";
// import { RiH2 } from "react-icons/ri";

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
    title: "The Achiever",
    description: "members who have created 30 or more favorites.",
    condition: "This badge is awarded to Members who have created 30 or more favorites."
  },
  {
    image: "path/to/image2.png",
    title: "Civic Duty",
    description: "members who have answered to polls 5 or more times.",
    condition: "This badge is awarded to Members who have answered to polls 5 or more times."
  },
  {
    image: "path/to/image2.png",
    title: "Commentators",
    description: "members who have created 20 or more comments.",
    condition: "This badge is awarded to Members who have created 20 or more comments."
  },
  {
    image: "path/to/image2.png",
    title: "Core Community Member",
    description: "members who have shared 10 or more posts & comments with more than 3 likes & upvotes each.",
    condition: "This badge is awarded to Members who have shared 10 or more posts & comments with more than 3 likes & upvotes each."
  },
  {
    image: "path/to/image2.png",
    title: "Extrovert",
    description: "members who have created 20 or more posts.",
    condition: "This badge is awarded to Members who have created 20 or more posts."
  },
  {
    image: "path/to/image2.png",
    title: "Golden Community Member",
    description: "members who have shared 20 or more posts & comments with more than 5 upvotes each.",
    condition: "This badge is awarded to Members who have shared 20 or more posts & comments with more than 5 upvotes each."
  },
  {
    image: "path/to/image2.png",
    title: "Mentor",
    description: "members who have created 30 or more followers.",
    condition: "This badge is awarded to Members who have 30 or more followers."
  },
  {
    image: "path/to/image2.png",
    title: "Newbie",
    description: "new members.",
    condition: "This badge is awarded to Members that are new."
  },
  {
    image: "path/to/image2.png",
    title: "Note Master",
    description: "members who have created 20 or more notes.",
    condition: "This badge is awarded to Members who have created 20 or more notes."
  },
  {
    image: "path/to/image2.png",
    title: "Reporter",
    description: "members who have shared 5 or more links with more than 10 likes & upvotes each.",
    condition: "This badge is awarded to Members who have shared 5 or more links with more than 10 likes & upvotes each."
  },
  {
    image: "path/to/image2.png",
    title: "Spammy",
    description: "members who have 5 or more report abuses.",
    condition: "This badge is awarded to Members who have 5 or more report abuses."
  },
  {
    image: "path/to/image2.png",
    title: "Stellar Post",
    description: "members who have at least one post with more than 20 upvotes.",
    condition: "This badge is awarded to Members who have at least one post with more than 20 upvotes."
  },
  {
    image: "path/to/image2.png",
    title: "The Pollster",
    description: "members who have shared 5 or more polls with more than 50 votes each.",
    condition: "This badge is awarded to Members who have shared 5 or more polls with more than 50 votes each."
  },
  {
    image: "path/to/image2.png",
    title: "V.I.P",
    description: "members who have 100 or more upvotes on their posts and comments.",
    condition: "This badge is awarded to Members who have 100 or more upvotes on their posts and comments."
  },

];

export default GamificationEngine;
