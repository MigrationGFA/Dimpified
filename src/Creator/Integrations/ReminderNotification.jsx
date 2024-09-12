import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const PushNotificationsPage = () => {
  const [isActivated, setIsActivated] = useState(false);

  const handleActivateChange = () => {
    setIsActivated(!isActivated);
  };

  return (
    <Container className="mt-4">
      {/* Header Section */}
      <Row>
        <Col>
          <h2 className="fw-bold">Push notifications <a href="#" style={{ color: '#28A745' }}>Learn more</a></h2>
          <p>Create, schedule, and choose mobile app users for push notifications, specifying delivery time and date.</p>
          <Button variant="success" disabled={!isActivated}>
            Create your first push notification
          </Button>
        </Col>
      </Row>

      {/* Upgrade Notification */}
      <Row>
        <Col>
          <div className="alert alert-info text-start mt-4">
            You discovered a higher plan feature! Unlock the potential of push notifications. 
            <a href="#" className="btn btn-primary ms-2">Upgrade now</a>
          </div>
        </Col>
      </Row>

      {/* Activate Checkbox */}
      <Row>
        <Col>
          <div className="mb-3">
            <input
              type="checkbox"
              id="activateCheckbox"
              onChange={handleActivateChange}
            />
            <label htmlFor="activateCheckbox" className="ms-2">
              Activate
            </label>
          </div>
        </Col>
      </Row>

      {/* Main Content Section */}
      <Row className="mt-5">
        <Col md={6} className="text-start">
          <h3>Interact with your learners via your own native mobile learning app with push notifications</h3>
          <p>
            Push notifications serve as direct lines of communication to your audience's mobile devices to foster immediate engagement.
          </p>
          <Button variant="success" disabled={!isActivated}>
            Create your first push notification
          </Button>
        </Col>
        <Col md={6}>
          <img src="path_to_image" alt="Mobile app example" className="img-fluid" />
        </Col>
      </Row>

      {/* Push Notification Features Section */}
      <Row className="mt-5 text-center">
        <Col>
          <h4 className="fw-bold">Drive your learners to your app</h4>
          <p>
            Push notifications are a powerful tool to give a nudge to your students, keep them on track, and make the most of their courses.
          </p>
          <div className="d-flex justify-content-center">
            <Row>
              {/* Feature items */}
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_welcome_icon" alt="Welcome" className="mb-2"/>
                    <p className="card-text">Welcome new students</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_schedule_icon" alt="Schedule" className="mb-2"/>
                    <p className="card-text">Schedule training reminders</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_updates_icon" alt="Updates" className="mb-2"/>
                    <p className="card-text">Updates on content initiatives</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_notices_icon" alt="Notices" className="mb-2"/>
                    <p className="card-text">Notices of course events</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_sales_icon" alt="Sales" className="mb-2"/>
                    <p className="card-text">Sales event promotions</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_motivation_icon" alt="Motivation" className="mb-2"/>
                    <p className="card-text">Motivation and recognition</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_reduce_icon" alt="Reduce" className="mb-2"/>
                    <p className="card-text">Reduce disengagement</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mb-3">
                <Card>
                  <Card.Body>
                    <img src="path_to_baseline_icon" alt="Baseline" className="mb-2"/>
                    <p className="card-text">Baseline exams</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* How to Create Push Notifications Section */}
      <Row className="mt-5">
        <Col>
          <h4 className="text-center fw-bold">How to create mobile push notifications</h4>
          <Row className="text-center mt-4">
            <Col md={4}>
              <p><strong>create and customize</strong></p>
              <p>Navigate to Push Notifications, input the title and description, and set user redirection within the app.</p>
            </Col>
            <Col md={4}>
              <p><strong>target and schedule</strong></p>
              <p>Target your audience with filters, then choose the notification's delivery time and date.</p>
            </Col>
            <Col md={4}>
              <p><strong>activate and manage</strong></p>
              <p>Confirm details, activate, and track performance through Scheduler and Notifications Log for extra insights.</p>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button variant="success" disabled={!isActivated}>
              Create your first push notification
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PushNotificationsPage;
