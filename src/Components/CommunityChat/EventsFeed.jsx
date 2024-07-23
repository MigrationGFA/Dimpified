import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../CommunityChat/EventsFeed.css';

import event1 from '../../assets/LogoList/wema Bank Logo.jpg';
import event2 from '../../assets/LogoList/wema Bank Logo.jpg';
import event3 from '../../assets/LogoList/wema Bank Logo.jpg';
import event4 from '../../assets/LogoList/wema Bank Logo.jpg';

const events = [
  {
    id: 1,
    image: event1, 
    name: 'Wema Plc',
    date: 'July 20, 2024',
  },
  {
    id: 2,
    image: event2, 
    name: 'Wema Plc',
    date: 'June 15, 2024',
  },
  {
    id: 3,
    image: event3,
    name: 'Wema Plc',
    date: 'May 30, 2024',
  },
  {
    id: 4,
    image: event4, 
    name: 'Wema Plc',
    date: 'July 5, 2024',
  },
  {
    id: 5,
    image: event4, 
    name: 'Wema Plc',
    date: 'May 5, 2024',
  },
];

const EventsFeed = () => {
  return (
    <div className="gdg-rightside">
      <h3 className="gdg-rightside-heading font-text-bold text-center">Events for you</h3>
      {events.map(event => (
        <Card className="mb-3 gdg-event-card" key={event.id}>
          <Card.Body className="gdg-card-body">
            <div className="gdg-event-info">
              <img src={event.image} alt={event.name} className="gdg-event-image" />
              <div className="gdg-event-details">
                <Card.Title className="gdg-event-title">{event.name}</Card.Title>
                <Card.Text className="gdg-event-date">{event.date}</Card.Text>
              </div>
            </div>
            <Button variant="primary" className="gdg-view-details-btn">Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EventsFeed;
