import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button, Image, Form, Container, Row, Col } from 'react-bootstrap';
import styles from './CommunityComment.module.css';
import Box from '../../assets/Comment.jpeg';
import Logo from '../../assets/LogoList/FgnAlatLogo.jpg';

const formatTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return `on ${date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}`;
};

const CommunityComment = ({ postId, userId, ecosystemDomain }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const commentInputRef = useRef(null);

  useEffect(() => {
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

    fetchComments();
  }, [postId]);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/comment`,
          {
            postId,
            userId,
            userType: "creator",
            comment: newComment,
            ecosystemDomain,
          }
        );
  
        // // Check if the backend response exists and has data
        // const newCommentData = response.data || {
        //   _id: Date.now().toString(), // Generate a temporary ID for frontend use
        //   userId,
        //   userName: "Anonymous", // Or use the actual userName if available
        //   comment: newComment,
        //   likes: 0,
        //   replies: [],
        //   updatedAt: new Date(), // Use the current date for the timestamp
        // };
  
        setComments((prevComments) => [
          ...prevComments,
          // newCommentData,
        ]);
        
        setNewComment('');
        if (commentInputRef.current) {
          commentInputRef.current.focus();
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };
  
  const handleAddReply = (commentId) => {
    if (reply.trim()) {
      setComments(comments.map(comment =>
        comment._id === commentId
          ? { ...comment, replies: [...(comment.replies || []), { text: reply, time: new Date(), likes: 0 }] }
          : comment
      ));
      setReply('');
      setReplyToCommentId(null);
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(comments.map(comment =>
      comment._id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const handleLikeReply = (commentId, replyIndex) => {
    setComments(comments.map(comment =>
      comment._id === commentId
        ? {
            ...comment,
            replies: comment.replies.map((reply, index) =>
              index === replyIndex
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            )
          }
        : comment
    ));
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
            />
            <Button onClick={handleAddComment} className={styles.commentButton}>Post</Button>
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
        comments.map(comment => (
          <Row key={comment._id} className={`align-items-start ${styles.commentRow}`}>
            <Col xs={1}>
              <Image src={Logo} alt="User Image" className={styles.commentImage} />
            </Col>
            <Col xs={11}>
              <div className="d-flex flex-column">
                <div className="fw-bold">{comment.userName || "Anonymous"}</div>
                <div className="mt-1">{comment.comment}</div>
                <div className="d-flex align-items-center mt-2">
                  <span className={styles.commentTime}>{formatTime(new Date(comment.updatedAt))}</span>
                  <Button variant="link" className={styles.commentButtonLink} onClick={() => handleLikeComment(comment._id)}>
                    Like ({comment.likes})
                  </Button>
                  <Button variant="link" className={styles.replyButtonLink} onClick={() => setReplyToCommentId(comment._id)}>
                    Reply
                  </Button>
                </div>
                {comment.replies && comment.replies.map((reply, index) => (
                  <Row key={index} className={`align-items-start ${styles.replyRow}`}>
                    <Col xs={1}>
                      <Image src={Logo} alt="User Image" className={styles.commentImage} />
                    </Col>
                    <Col xs={11}>
                      <div className="d-flex flex-column">
                        <div className="fw-bold">Replier Name</div>
                        <div className="mt-1">{reply.text}</div>
                        <div className="d-flex align-items-center mt-2">
                          <span className={styles.commentTime}>{formatTime(new Date(reply.time))}</span>
                          <Button variant="link" className={styles.replyButtonLink} onClick={() => handleLikeReply(comment._id, index)}>
                            Like ({reply.likes})
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ))}
              </div>
              {replyToCommentId === comment._id && (
                <Row className="align-items-start mt-2 ms-3">
                  <Col xs={1}>
                    <Image src={Logo} alt="User Image" className={styles.commentImage} />
                  </Col>
                  <Col xs={11}>
                    <Form.Group className={styles.replyInputContainer}>
                      <Form.Control
                        type="text"
                        value={reply}
                        onChange={handleReplyChange}
                        placeholder="Type your reply here..."
                        className={styles.replyInput}
                      />
                      <Button onClick={() => handleAddReply(comment._id)} className={styles.replyButton}>Post Reply</Button>
                    </Form.Group>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default CommunityComment;
