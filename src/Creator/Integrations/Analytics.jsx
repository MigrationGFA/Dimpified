import React, { useState } from 'react';
import { Button, Form, Card, Row, Col, Image } from 'react-bootstrap';

// Import your images
import GoogleAnalyticsImg from "../../assets/SocialImages/google-analytics-logo-v3.svg";
import TagManagerImg from "../../assets/SocialImages/google-tag-manager-logo-v3.svg";
import MetaPixelImg from "../../assets/SocialImages/meta-pixel-logo.svg";

const AnalyticsTools = () => {
  const [activated, setActivated] = useState({
    googleAnalytics: false,
    tagManager: false,
    metaPixel: false,
  });

  const handleToggle = (tool) => {
    setActivated({
      ...activated,
      [tool]: !activated[tool],
    });
  };

  const imageStyle = {
    width: '40%', // Reduced size of the image
    height: 'auto',
    marginBottom: '20px', // Add space below the image
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h2>Analytics</h2>
      <p>Integrate analytics tools to monitor and analyze website visitors' data and marketing campaigns.</p>
      <Button variant="success" className="mb-4">Save</Button>

      {/* Google Analytics 4 */}
      <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
        <Row>
          <Col md={7} style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div>
              <h4>Google Analytics 4</h4>
              <p>Add the Google Analytics tracking ID by following the instructions <a href="#">here</a>.</p>
              <Image src={GoogleAnalyticsImg} alt="Google Analytics" 
              style={{ width: '200px', height: 'auto' }}
               />
            </div>
          </Col>
          <Col md={5}>
            <Form.Group className="d-flex flex-column align-items-start">
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={activated.googleAnalytics}
                onChange={() => handleToggle('googleAnalytics')}
                className="mb-2"
              />
              {activated.googleAnalytics && (
                <>
                  <Form.Control type="text" placeholder="G-*********" className="mb-3" />
                  <Form.Check
                    type="checkbox"
                    label="Enable Registration events (Registration)"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Enable Free Trial events (free_trial_subscription)"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Enable Purchase event (purchase)"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Enable Server side events"
                    disabled
                    className="mt-5"
                  />
                </>
              )}
            </Form.Group>
          </Col>
        </Row>
        {activated.googleAnalytics && (
          <Row className="mt-3">
            <Col md={7}>
              <h3>Enable Server Sides Events</h3>
              <p className="text-muted">Create and customize events sent to Google Analytics through Automations. You first have to enable server-side events for your Google Analytics integration.</p>
            </Col>
          </Row>
        )}
      </Card>

      {/* Google Tag Manager */}
      <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
        <Row>
          <Col md={7} style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div>
              <h4>Google Tag Manager</h4>
              <p>You can follow the instructions <a href="#">here</a> to create a Web Container. All we need is the GTM Code.</p>
              <Image src={TagManagerImg} alt="Google Tag Manager" 
              style={{ width: '200px', height: 'auto' }}
              />
            </div>
          </Col>
          <Col md={5}>
            <Form.Group className="d-flex flex-column align-items-start">
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={activated.tagManager}
                onChange={() => handleToggle('tagManager')}
                className="mb-2"
              />
              {activated.tagManager && (
                <>
                  <Form.Control type="text" placeholder="GTM Code" className="mb-3" />
                  <Form.Check
                    type="checkbox"
                    label="Enable GTM for Google consent v2"
                    className="mb-2"
                  />
                  <p className="mt-2">Make sure you have updated the consent-related settings in your GTM tags. You can follow the steps in this <a href="#">support article</a>.</p>
                </>
              )}
            </Form.Group>
          </Col>
        </Row>
      </Card>

      {/* Meta Pixel */}
      <Card className="mb-4" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
        <Row>
          <Col md={7} style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div>
              <h4>Meta Pixel</h4>
              <p>Go to your Meta Pixel tab in Ads Manager and click Create Pixel. After one has been created then you can find it by navigating to your Pixels page and clicking Actions  View Code.</p>
              <Image src={MetaPixelImg} alt="Meta Pixel" 
              style={{ width: '200px', height: 'auto' }}
               />
            </div>
          </Col>
          <Col md={5}>
            <Form.Group className="d-flex flex-column align-items-start">
              <Form.Check
                type="checkbox"
                label="Activate"
                checked={activated.metaPixel}
                onChange={() => handleToggle('metaPixel')}
                className="mb-2"
              />
              {activated.metaPixel && (
                <>
                  <Form.Control type="text" placeholder="Pixel Code" className="mb-3" />
                  <Form.Check
                    type="checkbox"
                    label="Enable Registration events (CompleteRegistration)"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Enable Free Trial events (Lead)"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Enable Purchase event (Purchase)"
                    className="mb-2"
                  />
                </>
              )}
            </Form.Group>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AnalyticsTools;
