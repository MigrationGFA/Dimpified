import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import UserProfile from './UserProfile';
// import '../CommunityChat/Page.css'
import InstructorProfileLayout from '../../EcosystemDashboard/InstructorProfileLayout';

const Community = () => {
  return (
    <InstructorProfileLayout>
      <Container fluid className="community-container">
        <Row className="justify-content-center">
          <Col xs={12} lg={9} className="community-content">
            <Header />
          </Col>
          <Col xs={12} lg={3} className="community-right">
            <UserProfile />
          </Col>
        </Row>
      </Container>
    </InstructorProfileLayout>
  );
};

export default Community;
