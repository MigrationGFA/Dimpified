// src/components/CommunityChat/GDGHeader.js

import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import '../CommunityChat/Header.css'; 
import Avatar1 from "../../assets/form1.png"

const GDGHeader = () => {
  return (
    <div className="gdg-header">
      <Row className="align-items-center justify-content-center ">
        <Col xs={12}>
          <Image
            src= {Avatar1} 
            roundedCircle
            className="gdg-logo"
          />
        </Col>
        <Col xs={12} className="mt-4 text-container">
          <h2 className="mb-0 text-right">Google Developer Groups (GDG)</h2>
          <p className="text-muted mb-0">Technology, Information and Internet·</p>
          <div className="mt-2">
            {/* <Button variant="primary" className="me-2">+ Follow</Button>
            <Button variant="outline-primary">Visit website</Button> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GDGHeader;
