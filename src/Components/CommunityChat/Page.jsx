import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../CommunityChat/Header';
import EventsFeed from '../CommunityChat/EventsFeed';
// import '../CommunityChat/Page.css'
import StudentProfileLayout from '../../UserDashboard/student/StudentProfileLayout';

const Community = () => {
  return (
    <StudentProfileLayout>
      <Container fluid className="community-container">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} className="community-content">
            <Header />
          </Col>
          <Col xs={12} lg={3} className="community-right">
            <EventsFeed />
          </Col>
        </Row>
      </Container>
    </StudentProfileLayout>
  );
};

export default Community;
