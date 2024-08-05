import React, { useState, useRef } from 'react';
import { Button, Image, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CommunityComment.module.css';

// Import your images
import Box from '../../assets/Comment.jpeg';
import Logo from '../../assets/LogoList/FgnAlatLogo.jpg';

// Utility function to format time
const formatTime = (date) => {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); 

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return `on ${date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}`;
};

const CommunityComment = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState(false); // Track if the comment input box should be shown
  const commentInputRef = useRef(null);

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleReplyChange = (e) => setReply(e.target.value);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment, replies: [], time: new Date(), likes: 0 }]);
      setNewComment('');
      commentInputRef.current.focus();
    }
  };

  const handleAddReply = (commentId) => {
    if (reply.trim()) {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...(comment.replies || []), { text: reply, time: new Date(), likes: 0 }] }
          : comment
      ));
      setReply('');
      setReplyToCommentId(null);
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const handleLikeReply = (commentId, replyIndex) => {
    setComments(comments.map(comment =>
      comment.id === commentId
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

  const handleNoCommentsClick = () => {
    setShowCommentInput(true);
  };

  return (
    <Container className={styles.commentSectionContainer}>
      {!showCommentInput ? (
        <div className={styles.noCommentsContainer} onClick={handleNoCommentsClick}>
          <img src={Box} alt="No Comments" className="img-fluid mb-3" />
          <h3 className="font-weight-bold">No comments yet</h3>
          <p>Be the first to comment</p>
        </div>
      ) : (
        <Row className="align-items-start mt-3">
          <Col xs={1}>
            <Image src={Logo} className={styles.commentImage} />
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
      )}

      {comments.map(comment => (
        <Row key={comment.id} className={`align-items-start ${styles.commentRow}`}>
          <Col xs={1}>
            <Image src={Logo} className={styles.commentImage} />
          </Col>
          <Col xs={11}>
            <div className="d-flex flex-column">
              <div className="fw-bold">Commenter Name</div>
              <div className="mt-1">{comment.text}</div>
              <div className="d-flex align-items-center mt-2">
                <span className={styles.commentTime}>{formatTime(new Date(comment.time))}</span>
                <Button variant="link" className={styles.commentButtonLink} onClick={() => handleLikeComment(comment.id)}>
                  Like ({comment.likes})
                </Button>
                <Button variant="link" className={styles.replyButtonLink} onClick={() => setReplyToCommentId(comment.id)}>
                  Reply
                </Button>
              </div>
              {comment.replies && comment.replies.map((reply, index) => (
                <Row key={index} className={`align-items-start ${styles.replyRow}`}>
                  <Col xs={1}>
                    <Image src={Logo} className={styles.commentImage} />
                  </Col>
                  <Col xs={11}>
                    <div className="d-flex flex-column">
                      <div className="fw-bold">Replier Name</div>
                      <div className="mt-1">{reply.text}</div>
                      <div className="d-flex align-items-center mt-2">
                        <span className={styles.commentTime}>{formatTime(new Date(reply.time))}</span>
                        <Button variant="link" className={styles.replyButtonLink} onClick={() => handleLikeReply(comment.id, index)}>
                          Like ({reply.likes})
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
            {replyToCommentId === comment.id && (
              <Row className="align-items-start mt-2 ms-3">
                <Col xs={1}>
                  <Image src={Logo} className={styles.commentImage} />
                </Col>
                <Col xs={11}>
                  <Form.Group className={styles.replyInputContainer}>
                    <Form.Control
                      type="text"
                      value={reply}
                      onChange={handleReplyChange}
                      placeholder="Type your reply here..."
                      ref={commentInputRef}
                      className={styles.replyInput}
                    />
                    <Button onClick={() => handleAddReply(comment.id)} className={styles.replyButton}>Post Reply</Button>
                  </Form.Group>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default CommunityComment;
