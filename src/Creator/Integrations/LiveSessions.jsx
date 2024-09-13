import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap';

const LiveSessions = () => {
  const [activeTab, setActiveTab] = useState('zoom');
  const [zoomActive, setZoomActive] = useState(false);
  const [webexActive, setWebexActive] = useState(false);
  const [teamsActive, setTeamsActive] = useState(false);

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', height: '100vh', boxSizing: 'border-box' }}>
      <Container fluid style={{ padding: '0', margin: '0' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <h2>Live sessions</h2>
          <p>Connect your Zoom, Webex, and Teams accounts to create live classes and host webinars and meetings.</p>
          <Button variant="success" className="mb-4">Save</Button>

          {/* Tab Navigation */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} style={{ marginBottom: '20px' }}>
            <Nav.Item>
              <Nav.Link eventKey="zoom">Zoom</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="webex">Webex</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="teams">Teams</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Zoom Tab Content */}
          {activeTab === 'zoom' && (
            <>
              <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                <Row className="no-gutters">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h4>Zoom Integration</h4>
                      <p>Use the Zoom integration to schedule and manage your live classes directly within your course platform.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Form.Check
                        type="checkbox"
                        label="Activate"
                        checked={zoomActive}
                        onChange={(e) => setZoomActive(e.target.checked)}
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Enable"
                        disabled={!zoomActive}
                      />
                    </Card.Body>
                  </Col>
                </Row>
              </Card>

              {zoomActive && (
                <Row className="no-gutters mt-4">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h6>Zoom connected accounts</h6>
                      <p>Connect your Zoom accounts with your school.</p>
                      <p>Extra information:</p>
                      <p>Saving your recordings in cloud and making them automatically available to your learners is available to Pro ZOOM plan or higher. Read more in this article.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Button variant="outline-primary">Connect account</Button>
                    </Card.Body>
                  </Col>
                </Row>
              )}
            </>
          )}

          {/* Webex Tab Content */}
          {activeTab === 'webex' && (
            <>
              <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                <Row className="no-gutters">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h4>Webex Integration</h4>
                      <p>Use the Webex integration to easily create and add video-conference learning activities to your courses.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Form.Check
                        type="checkbox"
                        label="Activate"
                        checked={webexActive}
                        onChange={(e) => setWebexActive(e.target.checked)}
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Enable"
                        disabled={!webexActive}
                      />
                    </Card.Body>
                  </Col>
                </Row>
              </Card>

              {webexActive && (
                <Row className="no-gutters mt-4">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h6>Webex connected accounts</h6>
                      <p>Connect your Webex accounts with your school.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Button variant="outline-primary">Connect account</Button>
                    </Card.Body>
                  </Col>
                </Row>
              )}
            </>
          )}

          {/* Teams Tab Content */}
          {activeTab === 'teams' && (
            <>
              <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                <Row className="no-gutters">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h4>Teams Integration</h4>
                      <p>Use the Teams integration to manage and schedule meetings and appointments with your students.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Form.Check
                        type="checkbox"
                        label="Activate"
                        checked={teamsActive}
                        onChange={(e) => setTeamsActive(e.target.checked)}
                        className="mb-3"
                      />
                      <Form.Check
                        type="checkbox"
                        label="Enable"
                        disabled={!teamsActive}
                      />
                    </Card.Body>
                  </Col>
                </Row>
              </Card>

              {teamsActive && (
                <Row className="no-gutters mt-4">
                  <Col md={8} className="p-4" style={{ backgroundColor: '#f5f5f5' }}>
                    <Card.Body>
                      <h6>Teams connected accounts</h6>
                      <p>Connect your Teams accounts with your school.</p>
                    </Card.Body>
                  </Col>
                  <Col md={4} className="p-4" style={{ backgroundColor: '#fff' }}>
                    <Card.Body>
                      <Button variant="outline-primary">Connect account</Button>
                    </Card.Body>
                  </Col>
                </Row>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LiveSessions;
