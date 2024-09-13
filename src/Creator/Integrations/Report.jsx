import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ReportsCenter = () => {
  const [selectedTag, setSelectedTag] = useState('allReports');

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '1200px', height: 'auto' }}>
      {/* Header Section */}
      <Row>
        <Col>
          <h2 className="fw-bold">Reports Center</h2>
          <p>Interpret and analyze data on user progress, registrations, user engagement, and learner attributes.</p>
          <Button variant="success" style={{ marginBottom: '20px' }}>New segment</Button>
        </Col>
      </Row>

      {/* Report Tags */}
      <Row>
        <Col>
          <div className="d-flex mb-3">
            <Button
              variant={selectedTag === 'allReports' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('allReports')}
            >
              All
            </Button>
            <Button
              variant={selectedTag === 'usersProgress' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('usersProgress')}
            >
              Users progress
            </Button>
            <Button
              variant={selectedTag === 'usersActivity' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('usersActivity')}
            >
              Users Activity
            </Button>
            <Button
              variant={selectedTag === 'usersGrowth' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('usersGrowth')}
            >
              Users Growth
            </Button>
            <Button
              variant={selectedTag === 'usersEngagement' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('usersEngagement')}
            >
              Users Engagement
            </Button>
            <Button
              variant={selectedTag === 'learningPerformances' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('learningPerformances')}
            >
              Learning Performances
            </Button>
            <Button
              variant={selectedTag === 'marketingPerformances' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('marketingPerformances')}
            >
              Marketing Performances
            </Button>
            <Button
              variant={selectedTag === 'usersGroupsSeats' ? 'dark' : 'light'}
              className="me-2"
              onClick={() => handleTagClick('usersGroupsSeats')}
            >
              Users groups & seats
            </Button>
          </div>
        </Col>
      </Row>

      {/* All Reports Section */}
      <Row>
        <Col>
          {/* Users Progress Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersProgress') && (
            <>
              <h4>Users Progress</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Overall user progress</Card.Title>
                      <Card.Text>
                        Monitor users' progress across all courses.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Users Activity Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersActivity') && (
            <>
              <h4>Users Activity</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Monthly active users</Card.Title>
                      <Card.Text>See who was active this month.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Logged in the last 30 days</Card.Title>
                      <Card.Text>Identify users showing activity within the last 30 days.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Not enrolled during the last 2 months</Card.Title>
                      <Card.Text>Identify lapsed users (no new enrollments in 2+ months).</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Users at risk</Card.Title>
                      <Card.Text>Detect learners at risk (inactive 30-60 days, &lt;51% completion).</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Users at risk (enrolled and inactive)</Card.Title>
                      <Card.Text>Identify potentially dropping users (inactive while recently enrolled).</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Course abandonment watchlist</Card.Title>
                      <Card.Text>Find users likely to abandon a course this week.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Users who have initiated a course</Card.Title>
                      <Card.Text>Find users enrolled in at least one course.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Users Growth Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersGrowth') && (
            <>
              <h4>Users Growth</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>New Users</Card.Title>
                      <Card.Text>Track the number of new users over time.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>New Users by Source</Card.Title>
                      <Card.Text>Analyze the sources from which new users are acquired.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Growth Rate</Card.Title>
                      <Card.Text>Measure the growth rate of your user base.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>User Acquisition Cost</Card.Title>
                      <Card.Text>Calculate the cost of acquiring each new user.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Users Engagement Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersEngagement') && (
            <>
              <h4>Users Engagement</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Engagement Rates</Card.Title>
                      <Card.Text>Analyze user engagement rates by course.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Active Sessions</Card.Title>
                      <Card.Text>Track the number of active sessions by users.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Frequency of Use</Card.Title>
                      <Card.Text>Measure how frequently users engage with the platform.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Learning Performances Section */}
          {(selectedTag === 'allReports' || selectedTag === 'learningPerformances') && (
            <>
              <h4>Learning Performances</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Course Completion Rates</Card.Title>
                      <Card.Text>Track the percentage of course completions.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Assessment Scores</Card.Title>
                      <Card.Text>Analyze user performance on assessments.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Time Spent on Courses</Card.Title>
                      <Card.Text>Measure the amount of time users spend on each course.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Marketing Performances Section */}
          {(selectedTag === 'allReports' || selectedTag === 'marketingPerformances') && (
            <>
              <h4>Marketing Performances</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Campaign Effectiveness</Card.Title>
                      <Card.Text>Evaluate the effectiveness of marketing campaigns.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Lead Conversion Rates</Card.Title>
                      <Card.Text>Analyze the rate at which leads are converted to users.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Cost per Acquisition</Card.Title>
                      <Card.Text>Track the cost of acquiring new users.</Card.Text>
                      </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Users Groups & Seats Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersGroupsSeats') && (
            <>
              <h4>Users Groups & Seats</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Group Enrollment</Card.Title>
                      <Card.Text>Monitor enrollment within different user groups.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Available Seats</Card.Title>
                      <Card.Text>Track the number of available seats in each course.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Seats Allocation</Card.Title>
                      <Card.Text>See how seats are allocated among users and groups.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ReportsCenter;
