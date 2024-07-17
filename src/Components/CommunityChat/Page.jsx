// src/components/CommunityChat/GDGPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GDGHeader from '../CommunityChat/Header';
import GDGNavTabs from '../CommunityChat/Nav';
import GDGRightside from '../CommunityChat/EventsFeed';
// import NavbarLanding from "../../dimp-home/NavbarLanding";

const CommunityChat = () => {
  return (
    <Container fluid className="community-chat-container">
      {/* <NavbarLanding /> */}
      <Row className="justify-content-center">
        <Col xs={12} lg={8} className="community-chat-content">
          <GDGHeader />
          <GDGNavTabs />
        </Col>
        <Col xs={12} lg={3} className="community-chat-right">
          <GDGRightside />
        </Col>
      </Row>
    </Container>
  );
};

export default CommunityChat;
