import React, { useState, useRef } from 'react';
import { FaPen, FaHeart, FaHandsHelping, FaShare } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineFileImage } from 'react-icons/ai';
import "../CommunityChat/Header.css";
import "../CommunityChat/PostFeed.css";
import img4 from "../../assets/SocialImages/Img 4.jpeg";
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";
import Box from "../../assets/Comment.jpeg";
import Like from "../../assets/Like.jpeg"; 
import CommentSection from "../CommunityChat/Comment";

// Initial posts array
const initialPosts = [
  {
    type: "image",
    caption: "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  },
  {
    type: "image",
    caption: "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  },
  ...Array(3).fill({
    type: "image",
    caption: "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  }),
  ...Array(3).fill({
    type: "image",
    caption: "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  }),
  {
    type: "write-up",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likeCount: 123,
    commentCount: 5,
    comments: [],
  },
  {
    type: "image-only",
    images: [img4],
    likeCount: 567,
    commentCount: 8,
    comments: [],
  },
];

const PostCard = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [isCommenting, setIsCommenting] = useState(false);
  const commentInputRef = useRef(null);

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
        // Show fallback for browsers that don't support Web Share API
        alert("Sharing not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing page:", error);
    }
  };

  return (
    <Card className="mb-3 post-card">
      <Card.Body>
        <div className="header-top d-flex align-items-center mb-3">
          <img
            src={Logo}
            alt="Logo"
            style={{ borderRadius: "50%", height: "60px", width: "60px" }}
          />
          <div>
            <h3 className="mb-0">Google Developer Groups (GDG)</h3>
            <p className="text-muted mb-0 font-text-bold">2 months ago</p>
          </div>
        </div>
        {post.type === "write-up" && (
          <Card.Text style={{ color: "black" }}>{post.caption}</Card.Text>
        )}
        {post.type === "image" && (
          <>
            <Card.Text style={{ color: "black" }}>{post.caption}</Card.Text>
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
          </>
        )}
        {post.type === "image-only" && (
          <Row className="post-images">
            {post.images.map((image, index) => (
              <Col key={index} xs={12}>
                <img
                  src={image}
                  alt={`Post Image ${index}`}
                  className="img-fluid post-image"
                />
              </Col>
            ))}
          </Row>
        )}
        <div className="post-interactions d-flex justify-content-between align-items-center mt-3">
          <div className="interaction-icons">
            <div className="icon-circle like-circle">
              <img src={Like} alt="Like Icon" className="icon like-icon2" />
            </div>
            <div className="icon-circle love-circle">
              <FaHeart className="icon" />
            </div>
            <div className="icon-circle applaud-circle">
              <FaHandsHelping className="icon" />
            </div>
            {post.likeCount.toLocaleString()}
          </div>
          <div className="interaction-details">{comments.length} comments</div>
        </div>
        <hr />
        <div className="interaction-buttons d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <img src={Like} alt="Like Icon" className="white-icon like-icon" />
            <span className="ml-2">Like</span>
          </div>
          <div className="d-flex align-items-center" onClick={handleCommentClick}>
            <img src={Box} alt="Comment Icon" className="white-icon comment-icon" />
            <span className="ml-2">Comment</span>
          </div>
          <div className="d-flex align-items-center" onClick={handleShare}>
            <FaShare className="fs-5 text-primary" />
            <span className="ml-2">Share</span>
          </div>
        </div>
        {isCommenting && (
          <CommentSection
            comments={comments}
            setComments={setComments}
            commentInputRef={commentInputRef}
          />
        )}
      </Card.Body>
    </Card>
  );
};

const AllPosts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

const Header = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      type: selectedImage ? (message ? "image" : "image-only") : "write-up",
      caption: message,
      images: selectedImage ? [selectedImage] : [],
      likeCount: 0,
      comments: [] 
    };
    setPosts([newPost, ...posts]); 
    setMessage("");
    setSelectedImage(null);
    setImagePreview(null); 
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
            style={{ height: '50px' }}
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
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <AllPosts posts={posts} />
    </div>
  );
};

export default Header;
