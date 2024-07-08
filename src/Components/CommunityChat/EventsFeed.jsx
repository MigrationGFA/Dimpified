// src/components/CommunityChat/GDGRightside.js

import React from 'react';
import { Card } from 'react-bootstrap';
import '../CommunityChat/EventsFeed.jsx'; // Import custom styles

const GDGRightside = () => {
  return (
    <div className="gdg-rightside">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Events for you</Card.Title>
          <Card.Text>
            Mercy, explore jobs at Google that match your skills
          </Card.Text>
          <Card.Link href="#">See jobs</Card.Link>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Trending post</Card.Title>
          <Card.Text>
            Mercy, explore jobs at Google that match your skills
          </Card.Text>
          <Card.Link href="#">See jobs</Card.Link>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Trends for you</Card.Title>
          <Card.Text>
            Mercy, explore jobs at Google that match your skills
          </Card.Text>
          <Card.Link href="#">See jobs</Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Affiliated pages</Card.Title>
          <Card.Text>
            <strong>Google</strong><br />
            Software Development<br />
            Parent<br />
            <small>Favour & 3 other connections follow this page</small>
          </Card.Text>
          <Card.Link href="#">+ Follow</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GDGRightside;
