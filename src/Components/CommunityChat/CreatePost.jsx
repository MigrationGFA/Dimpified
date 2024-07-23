import React from 'react';
import { Modal, Container, Row, Col, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { FaCamera, FaUserTag, FaMapMarkerAlt, FaSmile, FaCalendarAlt, FaVideo } from 'react-icons/fa';
import '../CommunityChat/CreatePost.css'; 

const CreatePost = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Create a Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-center mt-3">
            <Col md={12} className="border p-3 rounded shadow-sm">
              <Form>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="path_to_user_image.jpg" // replace with actual image path
                    alt="User"
                    className="rounded-circle mr-2"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <DropdownButton id="dropdown-basic-button" title="Mercy Bamisaye">
                    <Dropdown.Item href="#/action-1">Friends</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Public</Dropdown.Item>
                  </DropdownButton>
                </div>
                <Form.Group controlId="postContent">
                  <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" />
                </Form.Group>
                <div className="d-flex justify-content-between mb-3">
                  <div className="color-palette">
                    <div className="color-box" style={{ backgroundColor: 'white' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#E1306C' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#FB3958' }}></div>
                    <div className="color-box" style={{ backgroundColor: 'black' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#833AB4' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#5851DB' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#E1306C' }}></div>
                    <div className="color-box" style={{ backgroundColor: '#C13584' }}></div>
                    <div className="color-box" style={{ backgroundColor: 'black' }}></div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <FaCamera className="mr-2" />
                    <span>Photos/Videos</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaUserTag className="mr-2" />
                    <span>Tag friends</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Add location</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaSmile className="mr-2" />
                    <span>Feeling/activity</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>Create Event</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaVideo className="mr-2" />
                    <span>Go live</span>
                  </div>
                </div>
                <Button variant="primary" block>Post</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePost;
