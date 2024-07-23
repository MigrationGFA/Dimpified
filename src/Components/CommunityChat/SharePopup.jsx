import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const SharePopup = ({ show, handleClose }) => {
  const handleShareClick = (platform) => {
    switch (platform) {
      case "whatsapp":
        window.open("https://www.whatsapp.com", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com", "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com", "_blank");
        break;
      case "google":
        window.open("https://www.google.com", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com", "_blank");
        break;
      case "twitter":
        window.open("https://www.twitter.com", "_blank");
        break;
      case "telegram":
        window.open("https://www.telegram.com", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share To</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="text-center">
          <Col xs={4} onClick={() => handleShareClick("whatsapp")}>
            <FaWhatsapp size={40} style={{ color: 'inherit' }} />
            <p>WhatsApp</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("instagram")}>
            <FaInstagram size={40} style={{ color: 'inherit' }} />
            <p>Instagram</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("facebook")}>
            <FaFacebook size={40} style={{ color: 'inherit' }} />
            <p>Facebook</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("google")}>
            <FaGoogle size={40} style={{ color: 'inherit' }} />
            <p>Google</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("linkedin")}>
            <FaLinkedin size={40} style={{ color: 'inherit' }} />
            <p>LinkedIn</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("twitter")}>
            <FaTwitter size={40} style={{ color: 'inherit' }} />
            <p>Twitter</p>
          </Col>
          <Col xs={4} onClick={() => handleShareClick("telegram")}>
            <FaTelegram size={40} style={{ color: 'inherit' }} />
            <p>Telegram</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SharePopup;
