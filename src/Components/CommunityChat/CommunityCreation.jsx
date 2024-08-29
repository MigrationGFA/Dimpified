import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Phone from "../../assets/images/avatar/pexels-photo-1394641.webp";
import Company from "../../assets/images/avatar/company.jpg";
import Showcase from "../../assets/images/avatar/showcase.jpg";
import Educational from "../../assets/images/avatar/Educational.jpg";
import CommunityCreationModal from './CommunityCreationModal';

const EcosystemDesign = () => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  
  const handleCompanyClick = () => {
    setShowCompanyModal(true);
  };

  const handleCloseCompanyModal = () => {
    setShowCompanyModal(false);
  };

  const customCardImgStyle = {
    maxWidth: '70px',
    maxHeight: '70px',
    objectFit: 'cover',
  };

  const customPhoneImgStyle = {
    maxWidth: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
  };

  return (
    <Container className="text-center mt-5">
      <h2>Create a Community Page</h2>
      <p>Connect with clients, employees, and the Dimpified community. To get started, choose a page type.</p>
      
      <Row className="justify-content-center my-4">
        <Col xs={12} sm={6} md={4} className="mb-3">
          <Card className="h-100 shadow-sm custom-card1" onClick={handleCompanyClick}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={Company}
                alt="Company"
                style={customCardImgStyle}
              />
              <Card.Title className="mt-3">Company</Card.Title>
              <Card.Text>Small, medium, and large businesses</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-3">
          <Card className="h-100 shadow-sm custom-card2" onClick={handleCompanyClick}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={Showcase}
                alt="Showcase Page"
                style={customCardImgStyle}
              />
              <Card.Title className="mt-3">Showcase page</Card.Title>
              <Card.Text>
                Sub-pages associated with an existing page
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="mb-3">
          <Card className="h-100 shadow-sm custom-card3" onClick={handleCompanyClick}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={Educational}
                alt="Educational Institution"
                style={customCardImgStyle}
              />
              <Card.Title className="mt-3">Educational institution</Card.Title>
              <Card.Text>Schools and universities</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10}>
          <img
            src={Phone}
            alt="Device Mockup"
            className="img-fluid shadow-sm"
            style={customPhoneImgStyle}
          />
        </Col>
      </Row>

      <CommunityCreationModal show={showCompanyModal} handleClose={handleCloseCompanyModal} />
    </Container>
  );
};

export default EcosystemDesign;
