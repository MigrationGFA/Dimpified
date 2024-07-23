import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GDGHeader from '../CommunityChat/Header';
// import GDGNavTabs from '../CommunityChat/Nav';
import EventsFeed from '../CommunityChat/EventsFeed';
import '../CommunityChat/Page.css'
import StudentProfileLayout from '../../UserDashboard/student/StudentProfileLayout';

const CommunityChat = () => {
  return (
    <StudentProfileLayout>
      <Container fluid className="community-chat-container">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} className="community-chat-content">
            <GDGHeader />
            {/* <GDGNavTabs /> */}
          </Col>
          <Col xs={12} lg={3} className="community-chat-right">
            <EventsFeed />
          </Col>
        </Row>
      </Container>
    </StudentProfileLayout>
  );
};

export default CommunityChat;
