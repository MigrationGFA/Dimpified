import React, { useState, useRef } from "react";
import {
  FaPen,
  FaHeart,
  FaHandsHelping,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Container,
  Image,
} from "react-bootstrap";
import { AiOutlineFileImage } from "react-icons/ai";
import "./Header.css";
import img4 from "../../assets/SocialImages/Img 4.jpeg";
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";
import Box from "../../assets/Comment.jpeg";
import Like from "../../assets/Like.jpeg";
// import CommunityComment from "./CommunityComment";

// Initial posts array
const initialPosts = [
  {
    type: "image",
    caption:
      "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  },
  {
    type: "image",
    caption:
      "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  },
  ...Array(3).fill({
    type: "image",
    caption:
      "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  }),
  ...Array(3).fill({
    type: "image",
    caption:
      "As #GoogleIO comes to a close, we're filled with immense gratitude for everyone who joined us on this inspiring journey.",
    images: [img4, img4, img4, img4],
    likeCount: 2292,
    commentCount: 12,
    comments: [],
  }),
  {
    type: "write-up",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.",
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

const PostCard = ({ post, onDelete, onEdit }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [Commenting, setCommenting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState(post.caption);
  const commentInputRef = useRef(null);

  const handleCommentClick = () => {
    setCommenting(true);
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
            src={Logo}
            alt="Logo"
            style={{ borderRadius: "50%", height: "60px", width: "60px" }}
          />
          <div>
            <h3 className="mb-0">Google Developer Groups (GDG)</h3>
            <p className="text-muted mb-0 font-text-bold">2 months ago</p>
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
                    <Col
                      xs={6}
                      md={3}
                      className="d-flex align-items-center justify-content-center post-image-more"
                    >
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
              <div className="interaction-details">
                {comments.length} comments
              </div>
            </div>
            <hr />
            <div className="interaction-buttons d-flex justify-content-between mt-2">
              <div className="d-flex align-items-center">
                <img
                  src={Like}
                  alt="Like Icon"
                  className="white-icon like-icon"
                />
                <span className="ml-2">Like</span>
              </div>
              <div
                className="d-flex align-items-center"
                onClick={handleCommentClick}
              >
                <img
                  src={Box}
                  alt="Comment Icon"
                  className="white-icon comment-icon"
                />
                <span className="ml-2">Comment</span>
              </div>
              <div className="d-flex align-items-center" onClick={handleShare}>
                <FaShare className="fs-5 text-primary" />
                <span className="ml-2">Share</span>
              </div>
            </div>
            {Commenting && (
              <CommunityComment
                comments={comments}
                setComments={setComments}
                commentInputRef={commentInputRef}
              />
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
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setMessage("");
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleEdit = (postToEdit, newCaption) => {
    setPosts(
      posts.map((post) =>
        post === postToEdit ? { ...post, caption: newCaption } : post
      )
    );
  };

  const handleDelete = (postToDelete) => {
    setPosts(posts.filter((post) => post !== postToDelete));
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

      {posts
        .filter(
          (post) =>
            post.caption &&
            post.caption.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((post, index) => (
          <PostCard
            key={index}
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Header;

// Utility function to format time
const formatTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return `on ${date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })}`;
};

export const CommunityComment = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState(false); 
  const commentInputRef = useRef(null);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: newComment,
          replies: [],
          time: new Date(),
          likes: 0,
        },
      ]);
      setNewComment("");
      commentInputRef.current.focus();
    }
  };

  const handleAddReply = (commentId) => {
    if (reply.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...(comment.replies || []),
                  { text: reply, time: new Date(), likes: 0 },
                ],
              }
            : comment
        )
      );
      setReply("");
      setReplyToCommentId(null);
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const handleLikeReply = (commentId, replyIndex) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map((reply, index) =>
                index === replyIndex
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              ),
            }
          : comment
      )
    );
  };

  const handleNoCommentsClick = () => {
    setShowCommentInput(true);
  };

  return (
    <Container className="comment-section mt-3">
      {!showCommentInput ? (
        <div
          className="text-center no-comments-message"
          onClick={handleNoCommentsClick}
        >
          <img src={Box} alt="No Comments" className="no-comments-icon " />
          <h3 className="font-weight-bold">No comments yet</h3>
          <p>Be the first to comment</p>
        </div>
      ) : (
        <Row className="new-comment">
          <Col xs={1}>
            <Image src={Logo} roundedCircle className="user-image" />
          </Col>
          <Col xs={11}>
            <div className="active-comment-box">
              <Form.Control
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Type your comment..."
                ref={commentInputRef}
              />
              <Button onClick={handleAddComment}>Post</Button>
            </div>
          </Col>
        </Row>
      )}

      {comments.map((comment) => (
        <Row key={comment.id} className="comment">
          <Col xs={1}>
            <Image src={Logo} roundedCircle className="commenter-image" />
          </Col>
          <Col xs={11}>
            <div className="comment-content">
              <div className="comment-header">Commenter Name</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-footer">
                <span className="comment-time">
                  {formatTime(new Date(comment.time))}
                </span>
                <Button
                  variant="link"
                  className="like-button"
                  onClick={() => handleLikeComment(comment.id)}
                >
                  Like ({comment.likes})
                </Button>
                <Button
                  variant="link"
                  className="reply-button"
                  onClick={() => setReplyToCommentId(comment.id)}
                >
                  Reply
                </Button>
              </div>
              {comment.replies &&
                comment.replies.map((reply, index) => (
                  <Row key={index} className="reply">
                    <Col xs={1}>
                      <Image
                        src={Logo}
                        roundedCircle
                        className="replier-image"
                      />
                    </Col>
                    <Col xs={11} style={{ marginLeft: "auto" }}>
                      <div className="reply-content">
                        <div className="replier-name">Replier Name</div>
                        <div className="reply-text">{reply.text}</div>
                        <div className="reply-footer">
                          <span className="reply-time">
                            {formatTime(new Date(reply.time))}
                          </span>
                          <Button
                            variant="link"
                            className="like-button"
                            onClick={() => handleLikeReply(comment.id, index)}
                          >
                            Like ({reply.likes})
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ))}
            </div>
            {replyToCommentId === comment.id && (
              <Row className="reply-input">
                <Col xs={1}>
                  <Image src={Logo} roundedCircle className="replier-image" />
                </Col>
                <Col xs={11}>
                  <Form.Control
                    type="text"
                    value={reply}
                    onChange={handleReplyChange}
                    placeholder="Type your reply here..."
                    ref={commentInputRef}
                  />
                  <Button onClick={() => handleAddReply(comment.id)}>
                    Post Reply
                  </Button>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};
