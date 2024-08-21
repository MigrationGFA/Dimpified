import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Button,
  Image,
  Form,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import styles from "./CommunityComment.module.css";
import Box from "../../assets/Comment.jpeg";
import Logo from "../../assets/LogoList/FgnAlatLogo.jpg";

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

const CommunityComment = ({ postId, userId, ecosystemDomain }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const commentInputRef = useRef(null);
  const [replies, setReplies] = useState({});
  const [showReplies, setShowReplies] = useState({}); 

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/post-comments/${postId}`
      );
      if (response.data && Array.isArray(response.data.comments)) {
        setComments(response.data.comments);
      } else {
        setComments([]);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]);
    }
  };

 // Fetch replies for a comment
 const fetchReplies = async (commentId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/replies/${commentId}`
    );
    if (response.data && Array.isArray(response.data.replies)) {
      setReplies((prevReplies) => ({
        ...prevReplies,
        [commentId]: response.data.replies,
      }));
    }
  } catch (error) {
    console.error("Error fetching replies:", error);
  }
};

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      setIsPosting(true); 
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/comment`,
          {
            postId,
            userId,
            userType: "user",
            comment: newComment,
            ecosystemDomain,
          }
        );
        fetchComments();
        setNewComment("");
        if (commentInputRef.current) {
          commentInputRef.current.focus();
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      } finally {
        setIsPosting(false);
      }
    }
  };

  const handleAddReply = async (commentId) => {
    if (reply.trim()) {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/reply-to-comment`, {
          userType: "user",
          reply,
          ecosystemDomain,
          commentId,
          userId,
        });

        fetchReplies(commentId);
        setReply("");
        setReplyToCommentId(null);
      } catch (error) {
        console.error("Error replying to comment:", error);
      }
    }
  };

  const handleShowReplies = (commentId) => {
    if (!replies[commentId]) {
      fetchReplies(commentId);
    } else {
      setReplies((prevShowReplies) => ({
        ...prevShowReplies,
        [commentId]: !prevShowReplies[commentId],  
      }));
    }
  };

   // Handle like/unlike comment
   const handleLikeComment = async (commentId) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/like-unlike-comment`, {
        commentId,
        userId,
      });

      fetchComments();
    } catch (error) {
      console.error("Error liking/unliking comment:", error);
    }
  };

  // Function to handle like/unlike a reply
  const handleLikeReply = async (replyId, commentId) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/like-unlike-reply`, {
        replyId,
        userId,
      });

      fetchReplies(commentId);
    } catch (error) {
      console.error("Error liking/unliking reply:", error);
    }
  };


  return (
    <Container className={styles.commentSectionContainer}>
      {/* Input form always visible */}
      <Row className="align-items-start mt-3">
        <Col xs={1}>
          <Image src={Logo} alt="User Image" className={styles.commentImage} />
        </Col>
        <Col xs={11}>
          <Form.Group className={styles.commentInputContainer}>
            <Form.Control
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Type your comment..."
              ref={commentInputRef}
              className={styles.commentInput}
              disabled={isPosting}
            />
            <Button
              onClick={handleAddComment}
              className={styles.commentButton}
              disabled={isPosting}
            >
              {isPosting ? <Spinner animation="border" size="sm" /> : "Post"}
            </Button>
          </Form.Group>
        </Col>
      </Row>

      {/* Comments list */}
      {comments.length === 0 ? (
        <div className={styles.noCommentsContainer}>
          <img src={Box} alt="No Comments" className="img-fluid mb-3" />
          <h3 className="font-weight-bold">No comments yet</h3>
          <p>Be the first to comment</p>
        </div>
      ) : (
        comments.map((comment) => (
          <Row
            key={comment._id}
            className={`align-items-start ${styles.commentRow}`}
          >
            <Col xs={1}>
              <Image
                src={Logo}
                alt="User Image"
                className={styles.commentImage}
              />
            </Col>
            <Col xs={11}>
              <div className="d-flex flex-column">
                <div className="fw-bold">{comment.userName || "Anonymous"}</div>
                <div className="mt-1">{comment.comment}</div>
                <div className="d-flex align-items-center mt-2">
                  <span className={styles.commentTime}>
                    {formatTime(new Date(comment.createdAt))}
                  </span>
                  <Button
                    variant="link"
                    className={styles.commentButtonLink}
                    onClick={() => handleLikeComment(comment._id)}
                  >
                    Like ({comment.likes})
                  </Button>
                  <Button
                    variant="link"
                    className={styles.replyButtonLink}
                    onClick={() => handleShowReplies(comment._id)}
                  >
                    {showReplies[comment._id] ? "Hide Replies" : "View Replies"}
                  </Button>
                </div>
                {showReplies[comment._id] && (
                  <>
                    {replies[comment._id] &&
                      replies[comment._id].map((reply) => (
                        <Row
                          key={reply._id}
                          className={`align-items-start ${styles.replyRow}`}
                        >
                          <Col xs={1}>
                            <Image
                              src={Logo}
                              alt="User Image"
                              className={styles.commentImage}
                            />
                          </Col>
                          <Col xs={11}>
                            <div className="d-flex flex-column">
                              <div className="fw-bold">
                                {reply.userId || "Anonymous"}
                              </div>
                              <div className="mt-1">{reply.reply}</div>
                              <div className="d-flex align-items-center mt-2">
                                <span className={styles.commentTime}>
                                  {formatTime(new Date(reply.createdAt))}
                                </span>
                                <Button
                                  variant="link"
                                  className={styles.replyButtonLink}
                                  onClick={() =>
                                    handleLikeReply(reply._id, comment._id)
                                  }
                                >
                                  Like ({reply.likes})
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ))}
                    <Row className="align-items-center mt-3">
                      <Col xs={1}>
                        <Image
                          src={Logo}
                          alt="User Image"
                          className={styles.commentImage}
                        />
                      </Col>
                      <Col xs={11}>
                        <Form.Group className={styles.replyInputContainer}>
                          <Form.Control
                            type="text"
                            value={reply}
                            onChange={handleReplyChange}
                            placeholder="Type your reply..."
                            className={styles.replyInput}
                          />
                          <Button
                            onClick={() => handleAddReply(comment._id)}
                            className={styles.replyButton}
                          >
                            Reply
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default CommunityComment;
