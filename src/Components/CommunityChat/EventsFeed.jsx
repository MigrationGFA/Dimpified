import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../CommunityChat/EventsFeed.css';

import event1 from '../../assets/avatar/avatar-10.jpg';
import event2 from '../../assets/avatar/avatar-15.jpg';
import event3 from '../../assets/avatar/avatar-19.jpg';
import event4 from '../../assets/avatar/avatar-1.jpg';
import event5 from '../../assets/avatar/avatar-11.jpg';

const events = [
  {
    id: 1,
    image: event1, 
    name: 'Luke Don',
    date: 'July 20, 2024',
  },
  {
    id: 2,
    image: event2, 
    name: 'Eva Jina',
    date: 'June 15, 2024',
  },
  {
    id: 3,
    image: event3,
    name: 'Greene J.',
    date: 'May 30, 2024',
  },
  {
    id: 4,
    image: event4, 
    name: 'John Doe',
    date: 'July 5, 2024',
  },
  {
    id: 5,
    image: event5, 
    name: 'Peter Joe',
    date: 'May 5, 2024',
  },
];

const EventsFeed = () => {
  return (
    <div className="user-rightside">
      <h3 className="user-rightside-heading font-text-bold text-center">Users Profile</h3>
      {events.map(event => (
        <Card className="mb-3 user-card" key={event.id}>
          <Card.Body className="user-card-body">
            <div className="user-info">
              <img src={event.image} alt={event.name} className="user-image" />
              <div className="user-details">
                <Card.Title className="user-title">{event.name}</Card.Title>
                {/* <Card.Text className="user-date">{event.date}</Card.Text> */}
              </div>
            </div>
            <Button variant="primary" className="user-view-details-btn">View Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EventsFeed;
