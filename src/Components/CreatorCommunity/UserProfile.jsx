import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import "./UserProfile.css";

import event1 from '../../assets/avatar/avatar-10.jpg';
import event2 from '../../assets/avatar/avatar-15.jpg';
import event3 from '../../assets/avatar/avatar-19.jpg';
import event4 from '../../assets/avatar/avatar-1.jpg';
import event5 from '../../assets/avatar/avatar-11.jpg';

const events = [
  {
    id: 1,
    image: event1,
    name: 'John Mick',
    followers: '125k Following',
    purchasedProducts: '3 courses, 1 service',
    dateJoined: 'June 15, 2022',
  },
  {
    id: 2,
    image: event2,
    name: 'Monroe Park',
    followers: '320k Following',
    purchasedProducts: '5 courses, 2 services',
    dateJoined: 'March 10, 2021',
  },
  {
    id: 3,
    image: event3,
    name: 'James Lewis',
    followers: '125k Following',
    purchasedProducts: '2 courses, 3 services',
    dateJoined: 'June 5, 2023',
  },
  {
    id: 4,
    image: event4,
    name: 'Alexa Stella',
    followers: '192k Following',
    purchasedProducts: '1 course, 1 service',
    dateJoined: 'April 9, 2020',
  },
  {
    id: 5,
    image: event5,
    name: 'Alex John',
    followers: '320k Following',
    purchasedProducts: '4 courses, 2 services',
    dateJoined: 'July 23, 2019',
  },
];

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="userRightside">
      <div className="text-center">
        <h3 className="heading">User Profile</h3>
      </div>
      {events.map(event => (
        <div className="userCard" key={event.id}>
          <div className="userCardBody">
            <div className="userInfo">
              <img src={event.image} alt={event.name} className="userImage" />
              <div className="userDetails text-black">
                <p className="userName">{event.name}</p>
                <p className="userdateJoined">{event.dateJoined}</p>
              </div>
            </div>
            <Button variant="primary" className="followBtn" onClick={() => handleShowModal(event)}>View Details</Button>
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <img src={selectedUser.image} alt={selectedUser.name} className="modalUserImage" />
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Purchased Products:</strong> {selectedUser.purchasedProducts}</p>
              <p><strong>Date Joined:</strong> {selectedUser.dateJoined}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;
