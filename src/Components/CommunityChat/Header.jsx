import React, { useState, useRef, useEffect } from 'react';
import { FaPen, FaHeart, FaHandsHelping, FaShare, FaEllipsisV } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { Card, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../CommunityChat/Header.css";
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";

const PostCard = ({ post, onDelete, onEdit, onComment }) => {
  const [comments, setComments] = useState([]);
  const [isCommenting, setIsCommenting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState(post.content);
  const commentInputRef = useRef(null);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/post-comments/${post._id}`);
      setComments(response.data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [post._id]);

  const handleCommentClick = () => {
    setCommenting(true);
    setTimeout(() => {
      commentInputRef.current?.scrollIntoView({ behavior: 'smooth' });
      commentInputRef.current?.focus();
    }, 0);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        console.log('Page shared successfully');
      } else {
        alert('Sharing not supported on this browser.');
      }
    } catch (error) {
      console.error('Error sharing page:', error);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(post, editedCaption);
    setIsEditing(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = commentInputRef.current.value;
    onComment(post._id, comment);
    setIsCommenting(false);
  };

  return (
    <Card className="mb-3 post-card">
      <Card.Body>
        <div className="header-top d-flex align-items-center mb-3">
          <img
            src={post.userImage || 'default-user-image.png'}
            alt="User"
            style={{ borderRadius: '50%', height: '60px', width: '60px' }}
          />
          <div>
            <h3 className="mb-0">{post.username || 'Unknown User'}</h3>
            <p className="text-muted mb-0 font-text-bold">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
        {isEditing ? (
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="editCaption">
              <Form.Control
                as="textarea"
                rows={3}
                value={editedCaption}
                onChange={(e) => setEditedCaption(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Save
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsEditing(false)}
              className="mt-2 ms-2"
            >
              Cancel
            </Button>
          </Form>
        ) : (
          <>
            <Card.Text style={{ color: 'black' }}>{post.content}</Card.Text>
            {post.images && post.images.length > 0 && (
              <Row className="post-images">
                {post.images.slice(0, 4).map((image, index) => (
                  <Col key={index} xs={6} md={3}>
                    <img
                      src={image}
                      alt={`Post Image ${index}`}
                      className="img-fluid post-image"
                    />
                  </Col>
                ))}
                {post.images.length > 4 && (
                  <Col xs={6} md={3} className="d-flex align-items-center justify-content-center post-image-more">
                    +{post.images.length - 4}
                  </Col>
                )}
              </Row>
            )}
            <div className="post-interactions d-flex justify-content-between align-items-center mt-3">
              <div className="interaction-icons">
                <div className="icon-circle like-circle">
                  <FaHeart className="icon" />
                </div>
                {post.likes}
              </div>
              <div className="interaction-details">
                {comments.length} comments
              </div>
            </div>
            <hr />
            <div className="interaction-buttons d-flex justify-content-between mt-2">
              <div className="d-flex align-items-center">
                <FaHeart className="white-icon like-icon" />
                <span className="ml-2">Like</span>
              </div>
              <div className="d-flex align-items-center" onClick={handleCommentClick}>
                <FaHandsHelping className="white-icon comment-icon" />
                <span className="ml-2">Comment</span>
              </div>
              <div className="d-flex align-items-center" onClick={handleShare}>
                <FaShare className="fs-5 text-primary" />
                <span className="ml-2">Share</span>
              </div>
            </div>
            {isCommenting && (
              <Form onSubmit={handleCommentSubmit} className="mt-2">
                <Form.Group controlId="commentInput">
                  <Form.Control
                    ref={commentInputRef}
                    as="textarea"
                    rows={1}
                    placeholder="Write a comment..."
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">Comment</Button>
              </Form>
            )}
          </>
        )}
      </Card.Body>
      <Dropdown className="position-absolute top-0 end-0 m-2">
        <Dropdown.Toggle variant="none" className="p-0" id="dropdown-basic">
          <FaEllipsisV />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsEditing(true)}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => onDelete(post)}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};

const Header = () => {
  const { ecosystemDomain } = useParams();
  const [posts, setPosts] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const response = await axios.get(`/community/${ecosystemDomain}`);
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching community data:', error);
      }
    };

    fetchCommunityData();
  }, [ecosystemDomain]);

  const handleImagePreviewChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectedImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('authorId', '2');
    formData.append('userType', 'creator');
    formData.append('ecosystemDomain', ecosystemDomain);
    formData.append('content', message);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      const response = await axios.post('/create-post', formData);
      setPosts([response.data, ...posts]);
      setMessage('');
      setSelectedImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleEdit = async (postToEdit, newCaption) => {
    try {
      const response = await axios.patch(`/posts/${postToEdit._id}`, { content: newCaption });
      setPosts(posts.map(post => (post._id === postToEdit._id ? response.data : post)));
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDelete = async (postToDelete) => {
    try {
      await axios.delete(`/posts/${postToDelete._id}`);
      setPosts(posts.filter(post => post._id !== postToDelete._id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      const response = await axios.post('/comment', {
        postId,
        userId: '2',
        userType: 'creator',
        comment,
        ecosystemDomain,
      });
      setPosts(posts.map(post => (post._id === postId ? { ...post, comments: [...post.comments, response.data] } : post)));
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleCoverImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('backgroundCover', selectedImage);

    try {
      await axios.patch(`/update-backgroundCover/${ecosystemDomain}`, formData);
      alert('Header image updated successfully.');
    } catch (error) {
      console.error('Error updating header image:', error);
    }
  };

  return (
    <div className="container">
      <div className="two-layered-box">
        <div className="upper-layer">
          {imagePreview ? (
            <img src={imagePreview} alt="Selected" className="image-preview" />
          ) : (
            <div className="placeholder">
              Click the pen icon to add an image
            </div>
          )}
          <label htmlFor="image-upload-preview" className="edit-icon">
            <FaPen />
          </label>
          <input
            type="file"
            id="image-upload-preview"
            accept="image/*"
            onChange={handleImagePreviewChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="divider">
          <img src={Logo} alt="Logo" className="logo-preview rounded-full" />
        </div>
        <div className="lower-layer d-flex justify-content-between align-items-center">
          <div className="text-container">
            <h3 className="mb-0 font-weight-bold">
              Google Developer Groups (GDG)
            </h3>
            <p className="text-muted mb-0">
              Technology, Information and Internet·
            </p>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded-3 shadow-sm mt-3 border border-black">
        <div className="position-relative">
          <Form.Control
            as="textarea"
            placeholder="What's on your mind?"
            id="Excerpt"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            className="form-control border-0 form-control-simple no-resize"
            style={{ height: "50px" }}
          />
          <div className="position-absolute end-0 mt-n7 me-4 d-flex align-items-center">
            <label htmlFor="image-upload" className="me-2 cursor-pointer">
              <AiOutlineFileImage className="fs-3 text-primary" />
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleSelectedImageChange}
              style={{ display: 'none' }}
            />
            <Button
              variant="none"
              className="send-button"
              onClick={handleSubmit}
            >
              <FiSend size={25} />
            </Button>
          </div>
        </div>
      </div>
      {imagePreview && (
        <div className="mb-3">
          <img src={imagePreview} alt="Preview" className="img-fluid" />
        </div>
      )}
      {posts && posts.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <p>No posts available. Be the first to share something!</p>
        </div>
      ) : (
        posts && posts.map((post, index) => (
          <PostCard
            key={index}
            post={post}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onComment={handleComment}
          />
        ))
      )}
    </div>
  );
};

export default Header;
