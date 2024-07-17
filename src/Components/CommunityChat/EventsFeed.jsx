// src/components/CommunityChat/GDGRightside.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../CommunityChat/EventsFeed.css'; // Import custom styles

const events = [
  {
    id: 1,
    image: '/images/event1.jpg', // Replace with actual image paths
    name: 'Event One',
    date: 'July 20, 2024',
  },
  {
    id: 2,
    image: '/images/event2.jpg', // Replace with actual image paths
    name: 'Event Two',
    date: 'August 15, 2024',
  },
  {
    id: 3,
    image: '/images/event3.jpg', // Replace with actual image paths
    name: 'Event Three',
    date: 'August 30, 2024',
  },
  {
    id: 4,
    image: '/images/event4.jpg', // Replace with actual image paths
    name: 'Event Four',
    date: 'October 15, 2024',
  },
  {
    id: 5,
    image: '/images/event4.jpg', // Replace with actual image paths
    name: 'Event Five',
    date: 'May 5, 2024',
  },
  // Add more events as needed
];

const GDGRightside = () => {
  return (
    <div className="gdg-rightside">
      <h3 className="gdg-rightside-heading font-text-bold text-center">Events for you</h3>
      {events.map(event => (
        <Card className="mb-3" key={event.id}>
          <Card.Body className="gdg-card-body">
            <div className="gdg-event">
              <img src={event.image} alt={event.name} className="gdg-event-image" />
              <div className="gdg-event-info">
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.date}</Card.Text>
              </div>
            </div>
            <Button variant="primary" className="gdg-view-details-btn">View details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GDGRightside;
