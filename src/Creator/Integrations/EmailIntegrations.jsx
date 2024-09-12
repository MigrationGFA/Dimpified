import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

const EmailIntegration = () => {
  const [isActivatedMailchimp, setIsActivatedMailchimp] = useState(false);
  const [isActivatedMailerLite, setIsActivatedMailerLite] = useState(false);
  const [isActivatedBrevo, setIsActivatedBrevo] = useState(false);
  const [isActivatedSmtp2go, setIsActivatedSmtp2go] = useState(false);
  const [isActivatedBulksmsnigeria, setIsActivatedBulksmsnigeria] = useState(false);
  const [isActivatedConvertKit, setIsActivatedConvertKit] = useState(false);
  const [isActivatedKlaviyo, setIsActivatedKlaviyo] = useState(false);
  const [isActivatedZoho, setIsActivatedZoho] = useState(false);
  const [isActivatedHubSpot, setIsActivatedHubSpot] = useState(false);
  const [isActivatedGetResponse, setIsActivatedGetResponse] = useState(false);

  const handleActivateToggle = (service) => {
    switch(service) {
      case 'mailchimp': setIsActivatedMailchimp(!isActivatedMailchimp); break;
      case 'mailerlite': setIsActivatedMailerLite(!isActivatedMailerLite); break;
      case 'brevo': setIsActivatedBrevo(!isActivatedBrevo); break;
      case 'smtp2go': setIsActivatedSmtp2go(!isActivatedSmtp2go); break;
      case 'bulksmsnigeria': setIsActivatedBulksmsnigeria(!isActivatedBulksmsnigeria); break;
      case 'convertkit': setIsActivatedConvertKit(!isActivatedConvertKit); break;
      case 'klaviyo': setIsActivatedKlaviyo(!isActivatedKlaviyo); break;
      case 'zoho': setIsActivatedZoho(!isActivatedZoho); break;
      case 'hubspot': setIsActivatedHubSpot(!isActivatedHubSpot); break;
      case 'getresponse': setIsActivatedGetResponse(!isActivatedGetResponse); break;
      default: break;
    }
  };

  const renderTabContent = (service, isActivated, setIsActivated) => (
    <>
      <Row>
        {/* Left Side */}
        <Col md={7} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
          <h5 style={{ marginBottom: '15px' }}>{service}</h5>
          <p style={{ marginBottom: '20px' }}>{service} is an advanced email marketing tool that enables you to collect subscribers, strengthen customer relationships, automate workflows, and monetize your audience.</p>

          <h6 style={{ marginBottom: '15px' }}>{service} API Key</h6>
          <p style={{ marginBottom: '20px' }}>To generate and copy an API token for your {service} account, log in to {service}, go to Integrations, and then select the {service} API.</p>

          <h6 style={{ marginBottom: '15px' }}>Connect your Account</h6>
          <p style={{ marginBottom: '20px' }}>Authorize LearnWorlds to connect to your {service} account.</p>

          <h6 style={{ marginBottom: '15px' }}>Select {service} group for your users</h6>
          <p style={{ marginBottom: '20px' }}>Select the {service} group you wish to sync your registered users with. New users will be automatically added to the selected {service} group.</p>

          <h6 style={{ marginBottom: '15px' }}>Update your custom fields/merge tags in your {service} group</h6>
          <p style={{ marginBottom: '20px' }}>Add the fields presented in the table to your lists, and we will send even more data to your groups.</p>
          <a href="#" style={{ marginTop: '20px', display: 'block', color: '#007bff', cursor: 'pointer' }}>Follow the guide here on how to add these fields/tags to your {service} groups.</a>

          <h6 style={{ marginBottom: '15px' }}>Select {service} group for your leads</h6>
          <p style={{ marginBottom: '20px' }}>Select the {service} group you wish to sync your leads with. New leads will be automatically added to the selected {service} group.</p>
          <a href="#" style={{ marginTop: '20px', display: 'block', color: '#007bff', cursor: 'pointer' }}>In order to capture leads, add a "Get Email" section or widget in your site pages.</a>

          <h6 style={{ marginBottom: '15px' }}>Auto-tagging</h6>
          <p style={{ marginBottom: '20px' }}>When the Auto-tagging option is enabled, LearnWorlds specific Groups will be created in your {service} account (the name of which will start with a lw- prefix), and these LearnWorlds specific Groups will automatically be excluded from the list of the available Groups in the dropdown lists for Users and Leads above.</p>
        </Col>

        {/* Right Side */}
        <Col md={4} style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px', minHeight: '100%' }}>
          <Form.Check 
            type="checkbox" 
            id={`activate${service}`} 
            label="Activate"
            checked={isActivated}
            onChange={() => handleActivateToggle(service)} 
            style={{ marginBottom: '20px' }}
          />

          <Button 
            variant="primary" 
            className="mb-2" 
            style={{ marginBottom: '20px', ...(isActivated ? {} : { cursor: 'not-allowed', opacity: '0.5' }) }}
            disabled={!isActivated}
          >
            Connect to {service}
          </Button>

          <Button variant="light" className="mb-2">None</Button>
          <Button variant="link" className="mb-3">Update lists</Button>
          <a href="#" style={{ marginTop: '20px', display: 'block', color: '#007bff', cursor: 'pointer' }}>See available custom fields/merge tags</a>

          <Form.Check type="checkbox" label="Add tag {{course|bundle|subscription}}-{{product_id}} when the user enrolls to a product." disabled={!isActivated} />
          <Form.Check type="checkbox" label="Add tag {{course-preview-{{course_id}}}} when the user previews a free section of a paid course." disabled={!isActivated} />
          <Form.Check type="checkbox" label="Add tag {{course-cert-{{course_id}}}} when the user is awarded a certificate." disabled={!isActivated} />
          <Form.Check type="checkbox" label="Add tag {{course-completed-{{course_id}}}} when the user completes a course." disabled={!isActivated} />
          <Form.Check type="checkbox" label="Add tag {{paying-customer}} when the user purchases a product. The tag is added only once." disabled={!isActivated} />
          <Form.Check type="checkbox" label="Add tag {{tag-{{tag_id}}}} when a tag is added to the user." disabled={!isActivated} />

          <Button variant="success" style={{ marginTop: '20px' }} disabled={!isActivated}>Sync your contacts with {service}</Button>
        </Col>
      </Row>
    </>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Container fluid>
        {/* Header Section */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
          <h2>Email Integrations</h2>
          <p>Integrate with the most powerful email marketing tools to create email campaigns and newsletters.</p>
          <Button variant="success">Save</Button>
        </div>

        {/* Email Integration Tabs */}
        <Tabs 
          defaultActiveKey="mailchimp" 
          id="email-integration-tabs" 
          className="mb-3"
          style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} // Ensure the tabs fit in a single row
        >
          {/* Mailchimp Tab */}
          <Tab eventKey="mailchimp" title="Mailchimp">
            {renderTabContent('Mailchimp', isActivatedMailchimp, setIsActivatedMailchimp)}
          </Tab>

          {/* MailerLite Tab */}
          <Tab eventKey="mailerlite" title="MailerLite">
            {renderTabContent('MailerLite', isActivatedMailerLite, setIsActivatedMailerLite)}
          </Tab>

          {/* Brevo Tab */}
          <Tab eventKey="brevo" title="Brevo">
            {renderTabContent('Brevo', isActivatedBrevo, setIsActivatedBrevo)}
          </Tab>

          {/* Smtp2go Tab */}
          <Tab eventKey="smtp2go" title="Smtp2go">
            {renderTabContent('Smtp2go', isActivatedSmtp2go, setIsActivatedSmtp2go)}
          </Tab>

          {/* Bulksmsnigeria Tab */}
          <Tab eventKey="bulksmsnigeria" title="Bulksmsnigeria">
            {renderTabContent('Bulksmsnigeria', isActivatedBulksmsnigeria, setIsActivatedBulksmsnigeria)}
          </Tab>

          {/* ConvertKit Tab */}
          <Tab eventKey="convertkit" title="ConvertKit">
            {renderTabContent('ConvertKit', isActivatedConvertKit, setIsActivatedConvertKit)}
          </Tab>

          {/* Klaviyo Tab */}
          <Tab eventKey="klaviyo" title="Klaviyo">
            {renderTabContent('Klaviyo', isActivatedKlaviyo, setIsActivatedKlaviyo)}
          </Tab>

          {/* Zoho Tab */}
          <Tab eventKey="zoho" title="Zoho">
            {renderTabContent('Zoho', isActivatedZoho, setIsActivatedZoho)}
          </Tab>

          {/* HubSpot Tab */}
          <Tab eventKey="hubspot" title="HubSpot">
            {renderTabContent('HubSpot', isActivatedHubSpot, setIsActivatedHubSpot)}
          </Tab>

          {/* Get Response Tab */}
          <Tab eventKey="getresponse" title="Get Response">
            {renderTabContent('Get Response', isActivatedGetResponse, setIsActivatedGetResponse)}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default EmailIntegration;
