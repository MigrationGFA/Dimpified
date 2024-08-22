import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./UserProfile.css";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const { ecosystemDomain } = useParams();

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-user-profile/${ecosystemDomain}`);
        setUsers(response.data.ecosystemUser);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchUserProfiles();
  }, [ecosystemDomain]);

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
      {users.map(user => (
        <div className="userCard" key={user.id}>
          <div className="userCardBody">
            <div className="userInfo">
              <img src={user.imageUrl || 'default-avatar.jpg'} alt={user.username} className="userImage" />
              <div className="userDetails text-black">
                <p className="userName">{user.firstName} {user.lastName}</p>
                <p className="userdateJoined">{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            <Button variant="primary" className="followBtn" onClick={() => handleShowModal(user)}>View Details</Button>
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
              <img src={selectedUser.imageUrl || 'default-avatar.jpg'} alt={selectedUser.username} className="modalUserImage" />
              <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone Number:</strong> {selectedUser.phoneNumber}</p>
              <p><strong>Address:</strong> {selectedUser.address}, {selectedUser.city}, {selectedUser.country}</p>
              <p><strong>Date Joined:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
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
