import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ companyInfo, socialLinks }) => (
  <footer className="bg-light py-4">
    <Container>
      <Row>
        <Col md={6}>
          <p>{companyInfo}</p>
        </Col>
        <Col md={6} className="text-right">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="ml-2">
              <img src={link.icon} alt={link.name} width="20" />
            </a>
          ))}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
