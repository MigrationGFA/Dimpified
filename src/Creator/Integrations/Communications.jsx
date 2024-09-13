import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// Custom On/Off Toggle Button
const ToggleSwitch = ({ isChecked, onChange }) => (
  <Form.Check
    type="switch"
    id="custom-switch"
    checked={isChecked}
    onChange={onChange}
    label={isChecked ? 'ON' : 'OFF'}
    className="ml-auto"
  />
);

const CommunityAccess = () => {
  const [isCommunityEnabled, setIsCommunityEnabled] = useState(true);
  const [isCourseDiscussionEnabled, setIsCourseDiscussionEnabled] = useState(true);

  const handleCommunityToggle = () => setIsCommunityEnabled(!isCommunityEnabled);
  const handleCourseDiscussionToggle = () => setIsCourseDiscussionEnabled(!isCourseDiscussionEnabled);

  return (
    <Container className="mt-4">
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', marginBottom: '15px' }}>
  <h2>Community Access</h2>
  <p>Set the community and course discussion access level, and decide on inbox communication options.</p>
  <Button className="btn btn-success mb-4">Save</Button>
</div>


      {/* Enable Community Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h4>Enable Community</h4>
                <p>Let your learners discuss issues, exchange ideas and tips, and share their experiences within a community of practice.</p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <ToggleSwitch isChecked={isCommunityEnabled} onChange={handleCommunityToggle} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Access Community</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="radio"
                name="accessCommunity"
                label="Logged in users"
                disabled={!isCommunityEnabled}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="accessCommunity"
                label="Only paying users"
                disabled={!isCommunityEnabled}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Enable Course Discussions Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h4>Enable Course Discussions</h4>
                <p>Let your learners discuss course issues, exchange ideas, and share experiences.</p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <ToggleSwitch isChecked={isCourseDiscussionEnabled} onChange={handleCourseDiscussionToggle} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Permissions</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="checkbox"
                label="Allow members to post"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Allow members to poll"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Allow members to comment"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Reactions</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="checkbox"
                label="Upvote a post or a comment"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Like a post or a comment"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Share the link of the post"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Attachments</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="checkbox"
                label="Images (.png, .jpeg)"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Videos (.mp4)"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Files (.pdf, .mp3 ...)"
                disabled={!isCourseDiscussionEnabled}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Access Course Discussions</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="radio"
                name="accessDiscussions"
                label="Course discussions will be available in the course player and in the community"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="accessDiscussions"
                label="Course discussions will be available in the course player"
                disabled={!isCourseDiscussionEnabled}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} className="d-flex align-items-center">
              <h4>Course Discussion Level</h4>
            </Col>
            <Col md={6}>
              <Form.Check
                type="radio"
                name="discussionLevel"
                label="Different discussion for each learning activity"
                disabled={!isCourseDiscussionEnabled}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="discussionLevel"
                label="Common discussion for the whole course"
                disabled={!isCourseDiscussionEnabled}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CommunityAccess;
