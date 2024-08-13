import React, { useState, useRef, useEffect } from "react";
import {
  FaPen,
  FaHeart,
  FaHandsHelping,
  FaShare,
  FaEllipsisV,
  FaTrash,
} from "react-icons/fa";
import { FiSend, } from "react-icons/fi";
import { Card, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { AiOutlineFileImage } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Header.css"
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";
import { showToast } from "../../Components/Showtoast";
import { useSelector } from "react-redux";
import CommunityComment from "./CommunityComment";

const PostCard = ({ post, onDelete, onEdit }) => {
  const { ecosystemDomain } = useParams();
  const [isCommenting, setIsCommenting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState(post.content);
  const commentInputRef = useRef(null);

  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  );

  const handleCommentClick = () => {
    setIsCommenting(true);
    setTimeout(() => {
      commentInputRef.current?.scrollIntoView({ behavior: "smooth" });
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
        console.log("Page shared successfully");
      } else {
        alert("Sharing not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing page:", error);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(post, editedCaption);
    setIsEditing(false);
  };
 

  return (
    <Card className="mb-3 post-card">
      <Card.Body>
        <div className="header-top d-flex align-items-center mb-3">
          <img
            src={post.userImage || "default-user-image.png"}
            alt="User"
            style={{ borderRadius: "50%", height: "60px", width: "60px" }}
          />
          <div>
            <h3 className="mb-0">{post.username || "Unknown User"}</h3>
            <p className="text-muted mb-0 font-text-bold">
              {new Date(post.createdAt).toLocaleString()}
            </p>
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
            <Card.Text style={{ color: "black" }}>{post.content}</Card.Text>
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
                  <Col
                    xs={6}
                    md={3}
                    className="d-flex align-items-center justify-content-center post-image-more"
                  >
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
                {post.likes} likes
              </div>
              {/* <div className="interaction-details">
                {comments.length} comments
              </div> */}
            </div>
            <hr />
            <div className="interaction-buttons d-flex justify-content-between mt-2">
              <div className="d-flex align-items-center">
                <FaHeart className="white-icon like-icon" />
                <span className="ml-2">Like</span>
              </div>
              <div
                className="d-flex align-items-center pointer"
                onClick={handleCommentClick}
              >
                <FaHandsHelping className="white-icon comment-icon" />
                <span className="ml-2">Comment</span>
              </div>
              <div
                className="d-flex align-items-center pointer"
                onClick={handleShare}
              >
                <FaShare className="fs-5 text-primary" />
                <span className="ml-2">Share</span>
              </div>
            </div>

            {isCommenting && (
              <div ref={commentInputRef}>
                <CommunityComment postId={post._id} userId={userId} ecosystemDomain={ecosystemDomain} />
              </div>
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
  const [backgroundCoverPreview, setBackgroundCoverPreview] = useState(null);
  const [backgroundCoverImage, setBackgroundCoverImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [postImagePreviews, setPostImagePreviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");

  const userId = useSelector(
    (state) => state.authentication.user.data.CreatorId
  ) || {};

  const fetchCommunityData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/community/${ecosystemDomain}`
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching community data:", error);
    }
  };

  useEffect(() => {
    fetchCommunityData();
  }, [ecosystemDomain]);

  // Handle background cover image change
  const handleBackgroundCoverChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackgroundCoverImage(file);

      const formData = new FormData();
      formData.append("backgroundCover", file);

      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_API_URL}/update-backgroundCover/${ecosystemDomain}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        showToast(response.data.message);
        setBackgroundCoverPreview(URL.createObjectURL(file));
      } catch (error) {
        console.error("Error updating header image:", error);
        showToast(error.response.data.error);
      }
    }
  };

  // Handle selected images for post creation
  const handleSelectedImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(files);
    setPostImagePreviews(imagePreviews);
  };

  // Remove an image from the post creation images
  const removePostImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    const updatedPreviews = postImagePreviews.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    setPostImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("authorId", userId);
    formData.append("userType", "creator");
    formData.append("ecosystemDomain", ecosystemDomain);
    formData.append("content", message);

    selectedImages.forEach((image) => {
      formData.append("image", image);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-post`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchCommunityData();
      setMessage("");
      showToast(response.data.message);
      setSelectedImages([]);
      setPostImagePreviews([]);
    } catch (error) {
      console.error("Error creating post:", error);
      showToast(error.response.data.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


 

  return (
    <div className="container">
      <div className="two-layered-box">
        <div className="upper-layer">
          {backgroundCoverPreview ? (
            <img
              src={backgroundCoverPreview}
              alt="Selected Cover"
              className="image-preview"
            />
          ) : (
            <div className="placeholder">
              Click the pen icon to add an image
            </div>
          )}
          <label htmlFor="background-cover-upload" className="edit-icon">
            <FaPen />
          </label>
          <input
            type="file"
            id="background-cover-upload"
            accept="image/*"
            onChange={handleBackgroundCoverChange}
            style={{ display: "none" }}
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
              multiple
              onChange={handleSelectedImagesChange}
              style={{ display: "none" }}
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

        {postImagePreviews.length > 0 && (
          <div className="d-flex flex-wrap mt-2">
            {postImagePreviews.map((preview, index) => (
              <div
                key={index}
                className="position-relative me-2 mb-2"
                style={{
                  width: "100px",
                  height: "100px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm position-absolute top-0 start-0"
                  onClick={() => removePostImage(index)}
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.7)",
                    border: "none",
                    padding: "0.2rem",
                    lineHeight: "1",
                  }}
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {posts && posts.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <p>No posts available. Be the first to share something!</p>
        </div>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            onDelete={(deletedPost) =>
              setPosts(posts.filter((p) => p._id !== deletedPost._id))
            }
            onEdit={(editedPost, newContent) => {
              setPosts(
                posts.map((p) =>
                  p._id === editedPost._id
                    ? { ...p, content: newContent }
                    : p
                )
              );
            }}
          />
        ))
      )}
    </div>
  );
};

export default Header;
