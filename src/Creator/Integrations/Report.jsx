import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReportsCenter = () => {
  const [selectedTag, setSelectedTag] = useState('allReports');
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
    checkScroll(); // Check scroll status after scrolling
  };

  useEffect(() => {
    checkScroll();
  }, []);

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
          <div className="d-flex align-items-center position-relative">
            <FaChevronLeft
              className={`scroll-arrow ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll(-100)}
              style={arrowStyle}
            />
            <div
              className="d-flex overflow-hidden mx-2"
              ref={scrollRef}
              onScroll={checkScroll}
              style={{ display: 'flex', whiteSpace: 'nowrap', padding: '5px' }}
            >
              {['allReports', 'usersProgress', 'usersActivity', 'usersGrowth', 'usersEngagement', 'learningPerformances', 'marketingPerformances', 'usersGroupsSeats'].map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'dark' : 'light'}
                  className="me-2"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag.replace(/([A-Z])/g, ' $1').trim()} {/* Format the button text */}
                </Button>
              ))}
            </div>
            <FaChevronRight
              className={`scroll-arrow ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll(100)}
              style={arrowStyle}
            />
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
                      <Card.Text>Track course completion rates among users.</Card.Text>
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
                      <Card.Title>Campaign Performance</Card.Title>
                      <Card.Text>Analyze the effectiveness of marketing campaigns.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {/* Users Groups Seats Section */}
          {(selectedTag === 'allReports' || selectedTag === 'usersGroupsSeats') && (
            <>
              <h4>Users Groups Seats</h4>
              <Row className="mb-4">
                <Col md={4}>
                  <Card style={{ height: '200px' }}>
                    <Card.Body>
                      <Card.Title>Group Enrollments</Card.Title>
                      <Card.Text>Track how many users are enrolled in groups.</Card.Text>
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

const arrowStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  color: '#007bff',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

export default ReportsCenter;
