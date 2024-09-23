import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Badge,
  Table,
  Card,
} from "react-bootstrap";
import Active from "../../assets/SocialImages/active-member.png";
import Appreciated from "../../assets/SocialImages/appreciated.png";
import Achiever from "../../assets/SocialImages/the-archiver.png";
import CivicDuty from "../../assets/SocialImages/civic-duty.png";
import Commentators from "../../assets/SocialImages/commentator.png";
import Community from "../../assets/SocialImages/core-community.png";
import Extrovert from "../../assets/SocialImages/extrovert.png";
import Golden from "../../assets/SocialImages/golden-community.png";
import Mentor from "../../assets/SocialImages/mentor.png";
import Newbie from "../../assets/SocialImages/newbie.png";
import Spammy from "../../assets/SocialImages/spammy.png";
import Reporter from "../../assets/SocialImages/bold-reporter.png";
import Master from "../../assets/SocialImages/note-master.png";
import Stellar from "../../assets/SocialImages/stellar-post.png";
import Pollster from "../../assets/SocialImages/public-opinion.png";
import Vip from "../../assets/SocialImages/vip.png";

const GamificationEngine = () => {
  return (
    <Container className="mt-4">
      {/* Header Section */}
      <Row className="mb-3">
        <Col>
          <h2>Gamification engine </h2>
          <p>
            Enable the gamification engine to award digital badges to your users
            on specific events.
          </p>
          <Col className="text-end">
            <Button variant="success">Save</Button>
          </Col>
        </Col>
      </Row>

      {/* Gamification Engine Activation Section */}
      <Container
        className="p-3 mb-4"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "4px" }}
      >
        <Row className="align-items-center">
          <Col>
            <h4>
              Gamification engine{" "}
              <Badge bg="secondary" className="ms-2">
                Beta
              </Badge>
            </h4>
            <p className="mb-0">
              Enable the gamification engine to award digital badges to your
              users on specific events.
            </p>
          </Col>
          <Col className="d-inline-flex align-items-center ">
            <Form.Check
              type="checkbox"
              label="Activate"
              defaultChecked
              className="mb-3"
            />
          </Col>
        </Row>
      </Container>

      {/* Badges Table Section */}
      <Container
        className="p-3"
        style={{ backgroundColor: "white", borderRadius: "4px" }}
      >
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
                          <img
                            src={badge.image}
                            alt={badge.title}
                            style={{ width: "40px", height: "40px" }}
                          />
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
    image: Active,
    title: "Active Member",
    description:
      "Members who have made 10 or more social activities in a month.",
    condition:
      "This badge is awarded to Members who have made 10 or more social activities in 1 month.",
  },
  {
    image: Appreciated,
    title: "Appreciated",
    description: "Members who have 30 or more likes from others.",
    condition:
      "This badge is awarded to Members who have 30 or more likes from others.",
  },
  {
    image: Achiever,
    title: "The Achiever",
    description: "members who have created 30 or more favorites.",
    condition:
      "This badge is awarded to Members who have created 30 or more favorites.",
  },
  {
    image: CivicDuty,
    title: "Civic Duty",
    description: "members who have answered to polls 5 or more times.",
    condition:
      "This badge is awarded to Members who have answered to polls 5 or more times.",
  },
  {
    image: Commentators,
    title: "Commentators",
    description: "members who have created 20 or more comments.",
    condition:
      "This badge is awarded to Members who have created 20 or more comments.",
  },
  {
    image: Community,
    title: "Core Community Member",
    description:
      "members who have shared 10 or more posts & comments with more than 3 likes & upvotes each.",
    condition:
      "This badge is awarded to Members who have shared 10 or more posts & comments with more than 3 likes & upvotes each.",
  },
  {
    image: Extrovert,
    title: "Extrovert",
    description: "members who have created 20 or more posts.",
    condition:
      "This badge is awarded to Members who have created 20 or more posts.",
  },
  {
    image: Golden,
    title: "Golden Community Member",
    description:
      "members who have shared 20 or more posts & comments with more than 5 upvotes each.",
    condition:
      "This badge is awarded to Members who have shared 20 or more posts & comments with more than 5 upvotes each.",
  },
  {
    image: Mentor,
    title: "Mentor",
    description: "members who have created 30 or more followers.",
    condition:
      "This badge is awarded to Members who have 30 or more followers.",
  },
  {
    image: Newbie,
    title: "Newbie",
    description: "new members.",
    condition: "This badge is awarded to Members that are new.",
  },
  {
    image: Master,
    title: "Note Master",
    description: "members who have created 20 or more notes.",
    condition:
      "This badge is awarded to Members who have created 20 or more notes.",
  },
  {
    image: Reporter,
    title: "Reporter",
    description:
      "members who have shared 5 or more links with more than 10 likes & upvotes each.",
    condition:
      "This badge is awarded to Members who have shared 5 or more links with more than 10 likes & upvotes each.",
  },
  {
    image: Spammy,
    title: "Spammy",
    description: "members who have 5 or more report abuses.",
    condition:
      "This badge is awarded to Members who have 5 or more report abuses.",
  },
  {
    image: Stellar,
    title: "Stellar Post",
    description:
      "members who have at least one post with more than 20 upvotes.",
    condition:
      "This badge is awarded to Members who have at least one post with more than 20 upvotes.",
  },
  {
    image: Pollster,
    title: "The Pollster",
    description:
      "members who have shared 5 or more polls with more than 50 votes each.",
    condition:
      "This badge is awarded to Members who have shared 5 or more polls with more than 50 votes each.",
  },
  {
    image: Vip,
    title: "V.I.P",
    description:
      "members who have 100 or more upvotes on their posts and comments.",
    condition:
      "This badge is awarded to Members who have 100 or more upvotes on their posts and comments.",
  },
];

export default GamificationEngine;
